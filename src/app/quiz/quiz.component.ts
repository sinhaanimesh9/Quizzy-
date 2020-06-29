import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../Services/shared.service'
import { ContentsService } from '../Services/contents.service'
import { MarkingService } from '../Services/marking.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit,OnDestroy {
  least:number=0;
  most:number;
  isLeast:boolean=true;
  isMost:boolean=false;

  constructor(private  router : Router,
              private sharedService : SharedService,
              public contentService :  ContentsService,
              public markingService : MarkingService
              ) { 
              }

  ngOnInit(): void {
    //console.log(this.contentService.content);
    this.markingService.reset();
    this.sharedService.reset();
    this.least=0;
    this.sharedService.isStartPage=false;
  }

  ngOnDestroy(): void {
    //console.log("Quiz destroyed");
  }

  updateControl(){
    this.most=this.contentService.total-1;
    this.isMost= this.sharedService.flag === this.most ? true: false;
    this.isLeast= this.sharedService.flag === this.least ? true: false;
  }

  updateAttempts(){
    for(var i=0;i<this.contentService.total;i++)
      if(this.sharedService.userResponse[i]!==undefined)
        {
          this.sharedService.attempts++;
          //console.log(this.sharedService.attempts);
        }
  }

  next()
  {
    this.sharedService.flag++;    
    this.updateControl();
  }

  previous()
  {
    this.sharedService.flag--;    
    this.updateControl();
  }

  clear(){
    this.sharedService.userResponse[this.sharedService.flag]=undefined;
  }

  submit(){
    this.updateAttempts();
    var choice=confirm("Total Attempts= "+ this.sharedService.attempts
    +" out of "+ this.contentService.total +" Questions\nSubmit the Test and view Result.");
    this.sharedService.attempts=0;
    if(choice===true)
    {
      this.sharedService.quizToResult=true;
      this.markingService.updateScore();
      this.router.navigate(['/result']);
    }
    

  }
}
