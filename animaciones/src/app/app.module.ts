import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineAnimationComponent } from './components/timeline-animation/timeline-animation.component';
import { Css3dAnimationComponent } from './components/css3d-animation/css3d-animation.component';
import { CardComponent } from './components/card-animation/card/card.component';
import { SummaryComponent } from './components/card-animation/summary/summary.component';
import { CardAnimationComponent } from './components/card-animation/card-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineAnimationComponent,
    Css3dAnimationComponent,
    CardComponent,
    SummaryComponent,
    CardAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
