import { Component, OnInit } from '@angular/core';
import { ContentsService } from '../Services/contents.service'
import { SharedService } from '../Services/shared.service'

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public contentService :  ContentsService,
              public sharedService : SharedService) { }

  ngOnInit(): void {
  }

}
