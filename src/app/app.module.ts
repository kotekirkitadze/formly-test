import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';

import { FormlyModule } from '@ngx-formly/core';
import { InputMaskModule } from 'primeng/inputmask';
import { PanelWrapperComponent } from './panel-wrapper.component';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputFieldType } from './customTypeInput.component';
@NgModule({
  declarations: [AppComponent, PanelWrapperComponent, InputFieldType],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    FormlyPrimeNGModule,
    InputTextModule,
    InputMaskModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'input',
          component: InputFieldType,
          //  wrappers: ['form-field']
        },
      ],
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
