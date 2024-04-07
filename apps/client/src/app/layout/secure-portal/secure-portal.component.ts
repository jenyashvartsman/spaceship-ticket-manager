import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-secure-portal',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './secure-portal.component.html',
  styleUrl: './secure-portal.component.scss',
})
export class SecurePortalComponent {}
