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
var ionic_native_1 = require('ionic-native');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var angular2_in_memory_web_api_1 = require('angular2-in-memory-web-api');
var in_memory_data_service_1 = require('./shared/in-memory-data.service');
var homework_service_1 = require('./shared/homework.service');
require('./shared/rxjs-extensions');
// import {HomeworkPage} from './pages/homework/homework';
var homeworks_1 = require('./pages/homeworks/homeworks');
var exercises_1 = require('./pages/exercises/exercises');
var reviewing_exercises_1 = require('./pages/reviewing-exercises/reviewing-exercises');
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = homeworks_1.HomeworksPage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: '课后作业', component: homeworks_1.HomeworksPage },
            { title: '练习', component: exercises_1.ExercisesPage },
            { title: '复习', component: reviewing_exercises_1.ReviewingExercisesPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'build/app.html',
            providers: [
                homework_service_1.HomeworkService,
            ]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
}());
ionic_angular_1.ionicBootstrap(MyApp, [
    http_1.HTTP_PROVIDERS,
    { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService } // in-mem server data]
]);
