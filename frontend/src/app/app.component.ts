import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagesModule } from './pages/pages.module';

@Component({
  selector: 'jmc-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PagesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {}
