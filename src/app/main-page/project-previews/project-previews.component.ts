import { Component } from '@angular/core';

@Component({
  selector: 'app-project-previews',
  templateUrl: './project-previews.component.html',
  styleUrl: './project-previews.component.scss',
  standalone: false
})
export class ProjectPreviewsComponent {
  projects = [
    { imageUrl: 'https://picsum.photos/200/150?random=1', linkUrl: '/project/1' },
    { imageUrl: 'https://picsum.photos/200/150?random=2', linkUrl: '/project/2' },
    { imageUrl: 'https://picsum.photos/200/150?random=3', linkUrl: '/project/3' },
    { imageUrl: 'https://picsum.photos/200/150?random=4', linkUrl: '/project/4' },
    { imageUrl: 'https://picsum.photos/200/150?random=5', linkUrl: '/project/5' },
    { imageUrl: 'https://picsum.photos/200/150?random=6', linkUrl: '/project/6' },
    { imageUrl: 'https://picsum.photos/200/150?random=7', linkUrl: '/project/7' },
    { imageUrl: 'https://picsum.photos/200/150?random=8', linkUrl: '/project/8' },
    { imageUrl: 'https://picsum.photos/200/150?random=9', linkUrl: '/project/9' }
  ];
}