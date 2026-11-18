import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  readonly photos = [
    {
      src: 'assets/foto-1.jpg',
      alt: 'Festa de aniversário com arco de balões roxos e mesa decorada para o bolo',
      label: 'Festa de aniversário decorada'
    },
    {
      src: 'assets/foto-2.jpg',
      alt: 'Quadra esportiva externa com cesta de basquete e palmeiras ao fundo',
      label: 'Quadra esportiva'
    },
    {
      src: 'assets/foto-3.jpg',
      alt: 'Piscina ao ar livre cercada por piso de pedra e jardim',
      label: 'Piscina do espaço'
    },
    {
      src: 'assets/foto-4.jpg',
      alt: 'Área de festa com decoração roxa, arco de balões e mesa para doces',
      label: 'Área de festa decorada'
    },
    {
      src: 'assets/foto-5.jpg',
      alt: 'Área coberta com churrasqueira de pedra, bancada e plantas',
      label: 'Churrasqueira e área coberta'
    }
  ];
}
