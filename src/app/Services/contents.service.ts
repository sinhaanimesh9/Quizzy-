import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  private _jsonURL = 'assets/quiz.json';
  content :any;
  total:number=0;
  positiveMark:number=0;
  negativeMark:number=0;
    
 constructor(private http: HttpClient) {
  //console.log("contents");
   this.getJSON().subscribe(data => {
    this.content=data;
    this.total=this.content.quiz.length;
    //console.log("contents"+this.total);
    this.positiveMark=data.PositiveMark;
    this.negativeMark=data.NegativeMark;
    //console.log("hi:"+this.positiveMark+":"+this.negativeMark);
    
   });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

   
}
