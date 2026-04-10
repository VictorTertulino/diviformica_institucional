import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './obras.component.html',
})
export class ObrasComponent {
  obras = [
    { image: 'assets/images/diviformica_obras1.png', title: 'Corporate Hub — Araguaína', cat: 'Divisórias & Pisos' },
    { image: 'assets/images/diviformica_obras2.png', title: 'Centro Médico Premium', cat: 'Construção a Seco' },
    { image: 'assets/images/diviformica_obras3.png', title: 'Complexo Comercial Norte', cat: 'Forros & Divisórias' },
    { image: 'assets/images/diviformica_forro.png', title: 'Hotel Boutique Palmas', cat: 'Forros Especiais' },
  ];
}
