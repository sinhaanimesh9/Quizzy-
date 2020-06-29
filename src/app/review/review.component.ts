import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service'
import { ContentsService } from '../Services/contents.service'
import { MarkingService } from '../Services/marking.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(public contentsService:ContentsService,
              public sharedService:SharedService,
              public markingService:MarkingService,
              private router:Router) { }

  ngOnInit(): void {
    this.sharedService.isStartPage=false;
  }

  toResult(){
    this.router.navigate(['result']);
  }

  home(){
    this.router.navigate(['']);
    this.sharedService.reset();
  }

}
