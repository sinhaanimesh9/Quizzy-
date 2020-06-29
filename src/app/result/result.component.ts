import { Component, OnInit } from '@angular/core';
import { MarkingService } from '../Services/marking.service'
import { SharedService } from '../Services/shared.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  showResult:boolean=false;

  constructor(public markingService:MarkingService,
              public sharedService:SharedService,
              private router : Router) { }

  ngOnInit(): void {   
    this.showResult=false;
    this.sharedService.isStartPage=false;
  }

  viewResult(){
    this.showResult=!this.showResult;
  }

  home(){
    this.router.navigate(['']);
    this.sharedService.reset();
  }

  toReview(){
    this.router.navigate(['/review']);
  }

}
