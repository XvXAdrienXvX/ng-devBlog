import {Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ControlTypeHelper } from '../Utilities/filter.utils';
import { filterControlType, filterModel } from './filter.model';

@Component({
    selector: 'filter-panel',
    templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.css'],
    encapsulation: ViewEncapsulation.None
  })
  export class FilterPanelComponent{
    panelOpenState = false;
    filterControlType = filterControlType;
    filterData: FormGroup

    @Input() filterFields: filterModel[];
    
    constructor(){
     
    }

    ngOnInit(){
      this.setFilterOptions(this.filterFields);
    }

    ngAfterViewInit(){
    
    }

    setFilterOptions(options: filterModel[]){
       let group = {};
       this.filterFields = options;
       this.filterFields.forEach(field => {
         group[field.label] = new FormControl('');
       })
       this.filterData = new FormGroup(group);
    }
  }