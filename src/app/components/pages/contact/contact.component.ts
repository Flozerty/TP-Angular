import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonService } from '../../../services/button.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private router: Router,
    private buttonService: ButtonService,
  ) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^Bob|bob$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
    });
  }

  ngOnInit(): void {
    this.buttonService.buttonNameChange('Home');
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const { name, email, message } = this.myForm.value;
      alert(`${name},\nVotre message : "${message}" a été envoyé avec succès.\nNous vous recontacterons sous peu à l'adresse suivante :\n${email}.`);
      this.router.navigateByUrl('/');
    }
  }
}
