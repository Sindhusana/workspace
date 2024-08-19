import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule , CommonModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardTitle, MatCard
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  hide: boolean = true;

  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({
      libraryId: ['', [ Validators.required ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    })
  }

  onSubmit(): void{
    if(this.loginForm.valid) {
      const formValues = this.loginForm.value;
      console.log('Form Submitted', formValues);
    }else {
      console.log('Form is not valid');
    }
    
  }

  
}
