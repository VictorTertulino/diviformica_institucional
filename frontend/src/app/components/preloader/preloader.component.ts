import { Component, signal, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isVisible()" 
         [ngClass]="{'opacity-0 pointer-events-none': isFading()}"
         class="fixed inset-0 z-[100] bg-navy-600 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out">
      
      <!-- Glowing Logo Container -->
      <div class="relative group">
        <!-- Glow Effect Layer -->
        <div class="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
        
        <!-- Logo -->
        <img src="assets/images/logo-branca.png" 
             alt="Carregando..." 
             class="relative z-10 h-16 md:h-24 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]" />
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class PreloaderComponent implements OnInit {
  isVisible = signal(true);
  isFading = signal(false);

  @Output() ready = new EventEmitter<void>();

  ngOnInit() {
    // Show preloader for at least 2.5 seconds for dramatic effect
    setTimeout(() => {
      this.isFading.set(true);
      setTimeout(() => {
        this.isVisible.set(false);
        this.ready.emit();
      }, 1000); // Wait for transition
    }, 2500);
  }
}
