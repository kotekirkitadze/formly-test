import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <div class="card">
      <h3 class="card-header">Its time to party</h3>
      <h3 class="card-header">{{ to.label }}</h3>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class PanelWrapperComponent extends FieldWrapper {
  // @ViewChild('fieldComponent', { read: ViewContainerRef })
  // fieldComponent: ViewContainerRef;
}
