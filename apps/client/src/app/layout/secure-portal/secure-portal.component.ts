import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { linksConfig } from './config/links.config';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-secure-portal',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TooltipModule, RouterLinkActive],
  templateUrl: './secure-portal.component.html',
  styleUrl: './secure-portal.component.scss',
})
export class SecurePortalComponent {
  readonly links = linksConfig;
}
