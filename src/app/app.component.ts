import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularFormly';

  contactForm: FormGroup;
  contactModel: Contact;

  contactFields: Array<FormlyFieldConfig>;

  constructor() {
    this.contactForm = new FormGroup({});
    this.contactModel = new Contact();

    this.contactFields = [
      // <label>Name</label>
      // <input type="text" placeHolder="Name" required>

      // {
      //   key: 'email',
      //   type: 'input',
      //   wrappers: ['panel'],
      //   templateOptions: {
      //     type: 'text',
      //     label: 'Email',
      //     placeholder: 'Email',
      //     required: true,
      //   },
      //   validation: {
      //     messages: {
      //       required: 'You need to provide a email!',
      //     },
      //   },
      // },
      {
        key: 'custom',
        wrappers: ['panel'],
        templateOptions: {
          label: 'Custom inlined',
        },
        fieldGroup: [
          {
            type: 'custom',
          },
        ],
      },
    ];

    setTimeout(() => {
      this.contactForm.valueChanges.subscribe(console.log);
      console.log('hh', this.contactForm);
    }, 2000);
  }

  submitForm(contactModel: Contact) {
    console.log(contactModel);
  }
}

export class Contact {
  phone = '';
  phoneNumberstring = '';
  email = '';
}
