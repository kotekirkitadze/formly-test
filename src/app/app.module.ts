import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PanelWrapperComponent } from './panel-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { InputFieldType } from './custom-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, PanelWrapperComponent, InputFieldType],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormlyMaterialModule,

    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'custom',
          component: InputFieldType,
          wrappers: ['form-field'],
          defaultOptions: {
            fieldGroup: [
              { type: 'input', key: 'name' },
              { type: 'input', key: 'profession' },
            ],
          },
        },
      ],
      wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
