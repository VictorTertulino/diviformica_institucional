import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitMessage = signal('');
  submitError = signal(false);

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      productInterest: [''],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitMessage.set('');
      this.submitError.set(false);

      this.http.post<any>('/api/leads', this.contactForm.value).subscribe({
        next: (res) => {
          this.isSubmitting.set(false);
          this.submitMessage.set(res.message || 'Mensagem enviada com sucesso!');
          this.contactForm.reset();
        },
        error: () => {
          this.isSubmitting.set(false);
          this.submitError.set(true);
          this.submitMessage.set('Erro ao enviar. Tente novamente.');
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
