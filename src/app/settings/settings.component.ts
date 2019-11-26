import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.settingsForm = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  doSave() {
    // write to CRUD service
    const userControl = this.settingsForm.get('user');
    const passControl = this.settingsForm.get('pass');

    const userValue = userControl.value;
    const passValue = passControl.value;

    console.log(userValue, passValue);
  }
}
