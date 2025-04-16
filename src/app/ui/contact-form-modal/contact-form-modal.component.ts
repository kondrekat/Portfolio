import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form-modal',
  templateUrl: './contact-form-modal.component.html',
  styleUrls: ['./contact-form-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class ContactFormModalComponent {
  @Input() formspreeEndpoint: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private http: HttpClient) {}

  closeModal() {
    this.closeModalEvent.emit();
  }

  onSubmit() {
    const formData = new FormData(document.querySelector('form') as HTMLFormElement);
    this.http.post(this.formspreeEndpoint, formData)
      .subscribe({
        next: (response) => {
          console.log('Success!', response);
          this.closeModal(); // Закрываем модалку после успешной отправки
        },
        error: (error) => {
          console.error('Error!', error);
          // Можно добавить обработку ошибки (например, показать сообщение пользователю)
        }
      });
    return false; // Предотвращаем стандартную отправку формы
  }
}