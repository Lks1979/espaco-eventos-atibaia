import { Component } from '@angular/core';

@Component({
  selector: 'app-videos-section',
  standalone: true,
  templateUrl: './videos.component.html'
})
export class VideosComponent {
  readonly videos = [1, 2, 3, 4];
}
