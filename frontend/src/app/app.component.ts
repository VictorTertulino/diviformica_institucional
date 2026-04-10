import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProductsComponent } from './components/products/products.component';
import { ObrasComponent } from './components/obras/obras.component';
import { LojasComponent } from './components/lojas/lojas.component';
import { ContactComponent } from './components/contact/contact.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProductsComponent,
    ObrasComponent,
    LojasComponent,
    ContactComponent,
    PreloaderComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
