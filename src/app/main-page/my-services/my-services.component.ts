import { Component } from '@angular/core';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.scss',
  standalone: false
})
export class MyServicesComponent {
  servicesBlocks = [
    {
      title: 'CORE FRONTEND DEVELOPMENT',
      services: [
        'Angular Application Development',
        'Website Development (HTML, CSS, JavaScript)',
        'Creating Modern and User-Friendly Web Interfaces',
        'Landing Page Development',
      ],
    },
    {
      title: 'RESPONSIVENESS AND DESIGN IMPLEMENTATION',
      services: [
        'Responsive Web Design',
        'Converting Designs to Code (PSD/Figma/Sketch to HTML/CSS)',
        'Developing Interactive Interface Elements',
        'Cross-Browser Development',
      ],
    },
    {
      title: 'OPTIMIZATION AND SUPPORT',
      services: [
        'Performance Optimization',
        'API Integration',
        'Website Maintenance and Support',
        'Website Redesign and Modernization',
      ],
    },
    {
      title: 'SPECIALIZED SOLUTIONS',
      services: [
        'Development with Accessibility in Mind (WCAG)',
        'Single-Page Application (SPA) Development',
        'E-commerce Website Development (if applicable)',
        'Custom Frontend Solutions',
      ],
    },
  ];
}
