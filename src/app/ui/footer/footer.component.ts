import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule],
})
export class FooterComponent {
  socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kondrekat/', icon: 'linkedin.png' },
    { name: 'GitHub', url: 'https://github.com/kondrekat', icon: 'github.png' },
    { name: 'Telegram', url: 'https://t.me/kondrekat_dev', icon: 'telegram.png' },
    // Добавьте другие ссылки на соцсети с именами файлов иконок
  ];

  navigationLinks = [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#' },
    { label: 'Work', url: '#' },
    { label: 'Contact', url: '#' },
  ];
}