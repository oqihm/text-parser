import { Component, Input, OnInit } from '@angular/core';
import { Field, DataType } from '../../model/models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  @Input() fields: Field[] = [];

  dataType = DataType; // To access enum in template

  ngOnInit(): void {
    
  }
}
