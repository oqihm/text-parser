import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Field, DataType } from '../../model/models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit{
  @Output() cancel = new EventEmitter<void>(); // Emit close event
  @Input() fields: Field[] = [];

  dataType = DataType; // To access enum in template

  ngOnInit(): void {
    
  }

  close(): void {
    this.cancel.emit();
  }
}
