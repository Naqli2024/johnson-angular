import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      // Global default options for the progress circles
      radius: 60,
      outerStrokeWidth: 8,
      innerStrokeWidth: 4,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animation: true,
      animationDuration: 300,
      showTitle: false,
      showUnits: false,
      showSubtitle: false,
      showBackground: false,
      startFromZero: false,
      clockwise: false,
      responsive: true,
      renderOnClick: false
    })
  ],
  exports: [NgCircleProgressModule]
})
export class CircleProgressModule { }
