import { Component } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { VideosComponent } from './components/videos/videos.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    GalleryComponent,
    VideosComponent,
    PricingComponent,
    ContactComponent,
    SuggestionsComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
