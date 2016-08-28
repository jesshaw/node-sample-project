export class User {
	username: string;
    password: string;
    roles: string;
    rolesArray: string[];
    wxUsername: string;
    wxRandom: string;
    isBindWx:boolean;
    theClass:string;
    theClassDesc:string;
}

export class Classes {
	classes = [];
	constructor() {
		this.classes.push({ name: '一班', value: 'class1' });
		this.classes.push({ name: '二班', value: 'class2' });
		this.classes.push({ name: '三班', value: 'class3' });
	}

	// public getClasses(){
	// 	return this.classes;
	// }

	public static getClasses(){
		var c=new Classes();
		return c.classes;
	}
}