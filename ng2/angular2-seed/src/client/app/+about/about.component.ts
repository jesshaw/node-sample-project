import { Component } from '@angular/core';
import { Homework } from '../shared/index';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
	moduleId: module.id,
	selector: 'sd-about',
	templateUrl: 'about.component.html',
	styleUrls: ['about.component.css']
})
export class AboutComponent {
	homeworks: Homework[] = [];
	constructor() {
		this.homeworks.push({
			id: '11',
			catgory: '1',
			catgoryDesc: '练习',
			date: (new Date('2016-8-19')).toLocaleDateString(),
			content: '',
			icon: 'glyphicon-flag'
		});

		this.homeworks.push({
			id: '12',
			catgory: '1',
			catgoryDesc: '练习',
			date: (new Date('2016-8-20')).toLocaleDateString(),
			content: '',
			icon: 'glyphicon-flag'
		});

		this.homeworks.push({
			id: '12',
			catgory: '1',
			catgoryDesc: '练习',
			date: (new Date('2016-8-20')).toLocaleDateString(),
			content: '',
			icon: 'glyphicon-flag'
		});
	}
}

