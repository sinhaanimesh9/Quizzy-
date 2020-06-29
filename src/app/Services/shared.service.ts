import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  flag : number=0;
  userResponse : number[]=[];
  quizToResult:boolean=false;
  attempts:number=0;
  isStartPage:boolean=true;
  
  constructor() { 
    //console.log("shared");
  }

  reset(){
     this.flag = 0;
     this.userResponse = [];
     this.quizToResult=false;
     this.attempts=0;
     this.isStartPage=true;
  }
}
