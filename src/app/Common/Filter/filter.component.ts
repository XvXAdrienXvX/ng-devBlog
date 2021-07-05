import {Component, Input} from '@angular/core';

@Component({
    selector: 'filter-panel',
    templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.css'],
  })
  export class FilterPanelComponent {
    panelOpenState = false;

    @Input() filterFields: string[];
    constructor(){
      
    }
  }