<template>
    <!--
    {
    "url":"https://codemart.com/projects",
    "format":"table",
    "repeat":"#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2)",
    "fields":[{"key":"title","keyDesc":"标题","value":"#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2) > div > div.body-content-2y6ks > div > div.title-2q5sH > a"}
    ,{"key":"price","keyDesc":"标题","value":"#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2) > div > div.body-content-2y6ks > div > div.title-2q5sH > span > span > span"}
    ]
    }
    -->

    <div class="spider">
        <h1>This is an spider page</h1>
        <div>
            <form v-on:submit.prevent="createSpider()" >
                <div>
                    <div class="form-group">
                        <label for="url">URL</label>
                        <div>
                            <input id="url" type="url" name="url"
                                   required
                                   v-model="entity.url"/>
                        </div>
                        <div>
                            *
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="format">output Format</label>
                        <div>
                            <input id="format" type="text" name="format"
                                   required
                                   v-model="entity.format"/>
                        </div>
                        <div>
                            *
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="repeat">repeat element</label>
                        <div>
                            <input id="repeat" type="text" name="repeat"
                                   required
                                   v-model="entity.repeat"/>
                        </div>
                        <div>
                            *
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="repeat">fields</label>
                        <div v-for="item in entity.fields">
                            <input type="text"
                                   required
                                   v-model="item.key"/>
                            <input type="text"
                                   required
                                   v-model="item.value"/>
                            <input type="text"
                                   required
                                   v-model="item.keyDesc"/>
                        </div>
                        <div>
                            *
                        </div>
                    </div>
                </div>
                <div>
                    <button type="reset" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        重置
                    </button>
                    <button type="submit" >
                        确定
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./spider.component.ts">

</script>
