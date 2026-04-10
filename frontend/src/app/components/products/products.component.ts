import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products = [
    { title: 'Divisórias', tag: 'Modular', image: 'assets/images/diviformica_divisoria.png', desc: 'Sistemas modulares em vidro, alumínio e naval para ambientes corporativos que exigem flexibilidade e sofisticação.' },
    { title: 'Forros', tag: 'Acústica', image: 'assets/images/diviformica_forro.png', desc: 'Forros minerais, PVC e gesso que aliam tratamento acústico de alto desempenho ao design arquitetônico.' },
    { title: 'Pisos Laminados', tag: 'Durafloor', image: 'assets/images/diviformica_pisos.png', desc: 'Pisos laminados Durafloor de última geração. Modernos, resistentes e com acabamento natural impecável.' },
    { title: 'Persianas', tag: 'Controle', image: 'assets/images/diviformica_persianas.png', desc: 'Persianas que regulam luz e temperatura preservando a estética do projeto com tecnologia de ponta.' },
  ];
}
