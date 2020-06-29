import { Component, OnInit } from '@angular/core';
import { SharedService } from './Services/shared.service'
import { ContentsService } from './Services/contents.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showQuiz:boolean=false;

  constructor(public contentService:ContentsService,
              private router : Router,
              public sharedService : SharedService
              ){

  }

  ngOnInit(): void {
    this.showQuiz=false;
    //console.log();
  }

  toQuiz(){
    this.showQuiz=!this.showQuiz;
    this.router.navigate(['/quiz']);
  }

  toReview(){
    this.router.navigate(['/review']);
  }

  toResult(){
    this.router.navigate(['/result']);
  }
  
  reset()
  {
    this.router.navigate(['']); 
    this.sharedService.reset();
  }

}
