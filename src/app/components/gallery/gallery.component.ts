import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  readonly photos = [
    { src: 'assets/foto-1.jpg', alt: 'Piscina do espaço', label: 'Piscina do espaço' },
    { src: 'assets/foto-2.jpg', alt: 'Área da churrasqueira', label: 'Área da churrasqueira' },
    { src: 'assets/foto-3.jpg', alt: 'Quadra esportiva', label: 'Quadra esportiva' },
    { src: 'assets/foto-4.jpg', alt: 'Espaço decorado para festa', label: 'Espaço decorado para festa' },
    { src: 'assets/foto-5.jpg', alt: 'Decoração de festa', label: 'Decoração de festa' }
  ];
}
