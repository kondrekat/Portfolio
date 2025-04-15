import { Component } from '@angular/core';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss'],
  standalone: false
})
export class ProjectGalleryComponent {
  projects = [
    { title: 'Project 1', image: 'https://picsum.photos/300/200?random=1', link: '/project/1' },
    { title: 'Project 2', image: 'https://picsum.photos/300/200?random=2', link: '/project/2' },
    { title: 'Project 3', image: 'https://picsum.photos/300/200?random=3', link: '/project/3' },
    { title: 'Project 4', image: 'https://picsum.photos/300/200?random=4', link: '/project/4' },
    { title: 'Project 5', image: 'https://picsum.photos/300/200?random=5', link: '/project/5' },
    { title: 'Project 6', image: 'https://picsum.photos/300/200?random=6', link: '/project/6' },
    { title: 'Project 7', image: 'https://picsum.photos/300/200?random=7', link: '/project/7' },
    { title: 'Project 8', image: 'https://picsum.photos/300/200?random=8', link: '/project/8' },
    { title: 'Project 9', image: 'https://picsum.photos/300/200?random=9', link: '/project/9' }
  ];

  openProject(link: string) {
    // Здесь будет логика для перехода на страницу проекта
    console.log(`Переход на страницу: ${link}`);
    // В реальном приложении здесь будет использоваться Router для навигации
  }
}