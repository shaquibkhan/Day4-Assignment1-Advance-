namespace world{
interface human {
	name,
	age,
	sex,
	 getHumanInfo()
}

 export class god implements human {
	constructor(name,age,sex,){
		this.name=name;
		this.age=age;
		this.sex=sex;
	}
	name:string;
	age:number;
	sex:string;
	getHumanInfo(){
		console.log(`name is ${this.name} age is ${this.age} & sex is ${this.sex}`);
	}
}
 }

 var obj = new world.god('raju',23,'male');
 obj.getHumanInfo();