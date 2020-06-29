import { Injectable } from '@angular/core';
import { ContentsService } from '../Services/contents.service'
import { SharedService } from '../Services/shared.service'

@Injectable({
  providedIn: 'root'
})
export class MarkingService {

  correct:number=0;
  incorrect:number=0;
  score:number=0;
  total:number=0;
  // positiveMark:number=0;
  // negativeMark:number=0;
  maximumMark:number=0;
  skipped:number=0;

  constructor(public contentService:  ContentsService,
              private sharedService: SharedService ) {
               // this.total=this.contentService.content.quiz.length;
                //console.log("\nmarking:"+this.total);
                //this.maximumMark=this.contentService.content.quiz

              }

  updateScore(){
    this.total=this.contentService.content.quiz.length;
    this.calculateCorrect();
    this.calculateMarks();
  }

  calculateCorrect(){
    for(let i=0;i<this.total;i++)
    {
      let response=this.sharedService.userResponse[i];
      let answer=this.contentService.content.quiz[i].AnswerId;

      //console.log("\ncalculating:"+response);

      if(response === answer)
      this.correct++;
      else
      if(response === undefined){
        continue;
      }
      else
      this.incorrect++;
    }
    this.skipped=this.total-(this.incorrect+this.correct);
  }

  calculateMarks(){
    this.score=this.correct*this.contentService.positiveMark
                + this.incorrect*this.contentService.negativeMark;
    this.maximumMark=this.total*this.contentService.positiveMark;
  }

  reset(){
    this.correct=0;
    this.incorrect=0;
    this.score=0;
    this.total=0;
 }


}
