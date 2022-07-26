import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-input',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Enter a date range</mat-label>
      <mat-date-range-input [rangePicker]="picker">
        <input
          [formControl]="formControl.get('name')"
          matStartDate
          placeholder="Start date"
        />
        <input
          [formControl]="formControl.get('profession')"
          matEndDate
          placeholder="End date"
        />
      </mat-date-range-input>
      <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-date-range-picker #picker></mat-date-range-picker>
    </mat-form-field>
  `,
})
export class InputFieldType extends FieldType implements OnInit {
  bla() {}

  ngOnInit(): void {
    // console.log('hey', this.formControl);
    this.getControl('name');
  }

  getControl(name) {
    console.log('bbbb', this.formControl.get(name));
    return this.formControl.get(name);
  }
}
