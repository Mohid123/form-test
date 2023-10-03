import { Component, EventEmitter } from '@angular/core';
import { FormioRefreshValue } from '@formio/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-test';
  public form: any = {
    "title": "Test Form",
    "key": "tf-a",
    "display": "form",
    "components": [
      {
        "label": "Text Field",
        "tableView": true,
        "key": "textField",
        "type": "textfield",
        "input": true
      }
    ]
  };
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  formValue: any

  onChange(event: any) {
    this.refreshForm.emit({
      property: 'form',
      value: event.form
    });
    this.formValue = event.form;
  }
}
