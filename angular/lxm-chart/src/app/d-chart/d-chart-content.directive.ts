import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[d-chart-content]'
})
export class DChartContentDirective {


  constructor(public viewContainerRef: ViewContainerRef) { }

}
