import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myForm: FormGroup;

  constructor(
    private router: Router
  ) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),

    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      const { name, email, message } = this.myForm.value;
      alert(`${name},\nVotre message : "${message}" a été envoyé avec succès.\nNous vous recontacterons sous peu à l'adresse suivante :\n${email}.`);
      this.router.navigateByUrl('/');
    }
  }
}
