import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormlyModule } from '@ngx-formly/core';
import { InputMaskModule } from 'primeng/inputmask';
import { PanelWrapperComponent } from './panel-wrapper.component';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [AppComponent, PanelWrapperComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    FormlyPrimeNGModule,
    InputMaskModule,
    FormlyModule.forRoot({
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
