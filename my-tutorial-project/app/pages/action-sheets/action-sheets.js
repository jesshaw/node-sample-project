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
/*
  Generated class for the ActionSheetsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ActionSheetsPage = (function () {
    function ActionSheetsPage(nav) {
        this.nav = nav;
        openMenu();
        {
            var actionSheet = ActionSheet.create({
                title: 'Albums',
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Delete',
                        role: 'destructive',
                        icon: !this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            console.log('Delete clicked');
                        }
                    },
                    {
                        text: 'Share',
                        icon: !this.platform.is('ios') ? 'share' : null,
                        handler: function () {
                            console.log('Share clicked');
                        }
                    },
                    {
                        text: 'Play',
                        icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                        handler: function () {
                            console.log('Play clicked');
                        }
                    },
                    {
                        text: 'Favorite',
                        icon: !this.platform.is('ios') ? 'heart-outline' : null,
                        handler: function () {
                            console.log('Favorite clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        icon: !this.platform.is('ios') ? 'close' : null,
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            this.nav.present(actionSheet);
        }
    }
    ActionSheetsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/action-sheets/action-sheets.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], ActionSheetsPage);
    return ActionSheetsPage;
}());
exports.ActionSheetsPage = ActionSheetsPage;
