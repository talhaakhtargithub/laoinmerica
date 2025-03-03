import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  // Use the interface for strong typing
  formData: ContactForm = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  isSuccess = false;
  errorMessage = '';

  // Replace with your actual Formspree endpoint
  private formspreeEndpoint = 'https://formspree.io/f/mqaewzrk';

  constructor(private http: HttpClient) { }

  // Getter to calculate remaining characters
  get remainingCharacters(): number {
    return 500 - (this.formData.message ? this.formData.message.length : 0);
  }

  onSubmit(form: NgForm) {
    // Reset success/error messages on each submission
    this.isSuccess = false;
    this.errorMessage = '';

    if (form.valid) {
      this.isSubmitting = true;
      const headers = new HttpHeaders({ 'Accept': 'application/json' });
      this.http.post(this.formspreeEndpoint, this.formData, { headers })
        .subscribe({
          next: (response) => {
            this.isSuccess = true;
            this.isSubmitting = false;
            form.resetForm();
          },
          error: (error) => {
            this.errorMessage = 'An error occurred while sending the message. Please try again later.';
            this.isSubmitting = false;
            console.error('Formspree error:', error);
          }
        });
    } else {
      // Mark all controls as touched to show validation errors
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
