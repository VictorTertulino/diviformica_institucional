import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMobileOpen = signal(false);

  navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Produtos', href: '#products' },
    { label: 'Obras', href: '#obras' },
    { label: 'Lojas', href: '#lojas' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMobile() {
    this.isMobileOpen.update(v => !v);
  }
}
