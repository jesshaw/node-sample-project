"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var homework_service_1 = require('../../shared/homework.service');
var homework_1 = require('../homework/homework');
/*
  Generated class for the HomeworksPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomeworksPage = (function () {
    function HomeworksPage(nav, homeworkService) {
        var _this = this;
        this.nav = nav;
        this.homeworkService = homeworkService;
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        this.homeworkService.getHomeworks()
            .then(function (homeworks) {
            for (var i = 0; i < homeworks.length; ++i) {
                var currentHomework = homeworks[i];
                var title = _this.homeworkService.getTitle(currentHomework.catgory);
                _this.items.push({
                    id: currentHomework.id,
                    title: title,
                    note: currentHomework.date,
                    icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
                });
            }
        })
            .catch(function (error) { return _this.error = error; });
    }
    HomeworksPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.nav.push(homework_1.HomeworkPage, {
            item: item
        });
    };
    HomeworksPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/homeworks/homeworks.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, homework_service_1.HomeworkService])
    ], HomeworksPage);
    return HomeworksPage;
}());
exports.HomeworksPage = HomeworksPage;
