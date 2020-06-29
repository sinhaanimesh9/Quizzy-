import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component'
import { AppComponent } from './app.component'
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path:'', redirectTo:'', pathMatch:'full'},
  { 
    path:'quiz',
    component: QuizComponent
  },
  { 
    path:'review',
    component: ReviewComponent
  },
  { 
    path:'result',
    component: ResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
