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
var homework_1 = require('../../shared/homework');
var homework_service_1 = require('../../shared/homework.service');
/*
  Generated class for the HomeworkPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomeworkPage = (function () {
    function HomeworkPage(nav, navParams, homeworkService) {
        this.nav = nav;
        this.navParams = navParams;
        this.homeworkService = homeworkService;
        this.homework = new homework_1.Homework();
    }
    HomeworkPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.navParams.get('item').id;
        console.log(id);
        this.homeworkService.getHomework(id)
            .then(function (homework) {
            debugger;
            _this.homework = homework;
            _this.title = _this.homeworkService.getTitle(homework.catgory);
        });
    };
    HomeworkPage.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
    };
    HomeworkPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/homework/homework.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, homework_service_1.HomeworkService])
    ], HomeworkPage);
    return HomeworkPage;
}());
exports.HomeworkPage = HomeworkPage;
