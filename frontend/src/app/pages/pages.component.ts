import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jmc-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.less',
})
export class PagesComponent {
  constructor(private router: Router) {}

  public changePage(page: string) {
    this.router.navigate([page]);
  }

  public logout(): void {
    this.router.navigate(['/entrar']);
  }
}
