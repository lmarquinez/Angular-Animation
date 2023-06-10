import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelineAnimationComponent } from './components/timeline-animation/timeline-animation.component';
import { Css3dAnimationComponent } from './components/css3d-animation/css3d-animation.component';
import { CardAnimationComponent } from './components/card-animation/card-animation.component';

const routes: Routes = [
  { path: '', redirectTo: '/card-animation', pathMatch: 'full' },
  { path: 'timeline-animation', component: TimelineAnimationComponent },
  { path: 'css3d-animation', component: Css3dAnimationComponent },
  { path: 'card-animation', component: CardAnimationComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
