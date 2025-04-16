import { Component } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss',
  standalone: false
})
export class GetInTouchComponent {
  isModalOpen: boolean = false;
  formspreeEndpoint = 'https://formspree.io/f/xblgegze'; // Замените на свой URL от Formspree

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
