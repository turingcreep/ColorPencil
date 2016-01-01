//import {Lexer} from 'lexer';
//import {Parser} from 'parser';
//import {Evaluator} from 'evaluator';
export class Colorpencil{
	constructor(configFile="color.conf.js"){
		this.configFile = configFile;	
		this.lexer = new Lexer();
		this.parser = new Parser();
		this.evaluator = new Evaluator();
	}
	test(){
		console.log("testing ::Colorpencil");
	}
}
