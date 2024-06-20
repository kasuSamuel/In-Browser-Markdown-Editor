import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MenuComponent } from './menu/menu.component'; 

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, MarkdownModule,CommonModule,FormsModule,MenuComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
title = 'In-Browser-Markdown-Editor';

markdown = ``;
showSidebar = false;

  onTextareaInput(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const sidebarToggle = document.querySelector('sidebar-toggle');
    const clo = document.querySelector('clo');

    if (sidebar) {
      sidebar.classList.toggle('open', this.showSidebar);
    }
    if (container) {
            container.classList.toggle('con-move')
    }
    if (header) {
    header.style.position = 'relative';
    }

    if (sidebarToggle) {
    sidebarToggle.classList.toggle('menu-image')
    }
    if (clo) {
    clo.classList.toggle('close-img')
    }

    if (main) {
     main.classList.toggle('con-move-up')

    }
  }
}
