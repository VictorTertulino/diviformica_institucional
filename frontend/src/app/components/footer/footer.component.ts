import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Produtos', href: '#products' },
    { label: 'Obras', href: '#obras' },
    { label: 'Lojas', href: '#lojas' },
    { label: 'Contato', href: '#contact' },
  ];
}
