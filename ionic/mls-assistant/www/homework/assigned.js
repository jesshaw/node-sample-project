/**
 * Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/* exported initSample */

if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
    CKEDITOR.tools.enableHtml5Elements(document);

// The trick to keep the editor in the sample quite small
// unless user specified own height.
CKEDITOR.config.height = 300;
CKEDITOR.config.width = 'auto';

var initSample = (function() {
    var wysiwygareaAvailable = isWysiwygareaAvailable(),
        isBBCodeBuiltIn = !!CKEDITOR.plugins.get('bbcode');

    return function() {
        var editorElement = CKEDITOR.document.getById('editor');

        // :(((
        if (isBBCodeBuiltIn) {
            editorElement.setHtml(
                'Hello world!\n\n' +
                'I\'m an instance of [url=http://ckeditor.com]CKEditor[/url].'
            );
        }

        // Depending on the wysiwygare plugin availability initialize classic or inline editor.
        if (wysiwygareaAvailable) {
            CKEDITOR.replace('editor');
        } else {
            editorElement.setAttribute('contenteditable', 'true');
            CKEDITOR.inline('editor');

            // TODO we can consider displaying some info box that
            // without wysiwygarea the classic editor may not work.
        }
    };

    function isWysiwygareaAvailable() {
        // If in development mode, then the wysiwygarea must be available.
        // Split REV into two strings so builder does not replace it :D.
        if (CKEDITOR.revision == ('%RE' + 'V%')) {
            return true;
        }

        return !!CKEDITOR.plugins.get('wysiwygarea');
    }
})();

$(document).ready(function() {
    var baseUrl = "http://api.sanfor.com.cn";
    // var baseUrl = "http://localhost:4001";
    // 
    var el = {
        id: $('#id'),
        date: $('#date'),
        theClass: $('#theClass'),
        catgory: $('#catgory'),
        content: $('#editor'),
        saveButton: $('#save'),
        releaseButton: $('#release'),
        back: $('#back'),
    };
    load();


    el.date.focus(function() {
        el.date.siblings().html('');
    });

    el.date.blur(function() {
        dateValid();
    });

    el.theClass.focus(function() {
        el.theClass.siblings().html('');
    });

    el.theClass.blur(function() {
        classValid();
    });

    el.catgory.focus(function() {
        el.catgory.siblings().html('');
    });

    el.catgory.blur(function() {
        categoryValid();
    });

    function dateValid() {
        var success = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1])$/.test(el.date.val());
        if (!success) {
            el.date.parent().append("<span class='error'>格式为YYYY-MM-DD</span>");
            return false;
        }
        return true;
    }

    function valid() {
        return dateValid() && classValid() && categoryValid();
    }

    function classValid() {
        if (!el.theClass.val()) {
            el.theClass.parent().append("<span class='error'>未选班级</span>");
            return false;
        }

        return true;
    }

    function categoryValid() {
        if (!el.catgory.val()) {
            el.catgory.parent().append("<span class='error'>未选作业分类</span>");
            return false;
        }

        return true;
    }


    el.saveButton.click(function() {
        if (!valid()) {
            return;
        }
        save("0");
    });

    function load() {
        var id = getParameterByName("id");
        if (id) {
            $.get(baseUrl + "/api/homework?id=" + id, function(data) {
                // alert(data);
                if (data && data.length > 0) {
                    el.id.val(data[0]._id);

                    el.catgory.val(data[0].catgory);
                    el.date.val(data[0].date.substring(0,10));
                    // el.content.html(data[0].content);
                    CKEDITOR.instances.editor.setData(data[0].content);
                    el.theClass.val(data[0].theClass);

                }

            });
        }

        if (!el.date.val()) {
            var now = new Date();
            el.date.val(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate());
        }
    }

    function save(status) {

        $.post(baseUrl + "/api/homeworks/save", {
                "id": el.id.val(),
                "catgory": el.catgory.val(),
                "date": el.date.val(),
                "content": CKEDITOR.instances.editor.getData(),
                "theClass": el.theClass.val(),
                "status": status
            },
            function(data) {
                if (data._id) {
                    location.href = "/";
                } else {
                    alert('操作失败');
                }
            }, "json");
        // alert(el.content.html());
    }

    el.releaseButton.click(function() {
        if (!valid()) {
            return;
        }
        save("1");
    });

    el.back.click(function() {
        location.href = '/';
    });



    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
});
