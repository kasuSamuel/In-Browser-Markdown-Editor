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



toggleSidebar(): void {
    // Toggle the sidebar visibility
    this.showSidebar = !this.showSidebar;

    // Get DOM elements
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
    const container = document.querySelector('.container') as HTMLElement | null;
    const header = document.querySelector('header') as HTMLElement | null;
    const mainContent = document.querySelector('main') as HTMLElement | null;
    const sidebarToggleButton = document.querySelector('.sidebar-toggle') as HTMLElement | null;
    const closeButton = document.querySelector('.clo') as HTMLElement | null;
    const sampleElement = document.querySelector('.sam') as HTMLElement | null;

    // Toggle sidebar classes
    if (sidebar) {
        sidebar.classList.toggle('open', this.showSidebar);
        sidebar.classList.toggle('smooth', this.showSidebar);
    }

    // Toggle sample element class
    if (sampleElement) {
        sampleElement.classList.toggle('kas');
    }

    // Toggle container class
    if (container) {
        container.classList.toggle('con-move');
    }

    // Set header position
    if (header) {
        header.style.position = 'relative';
    }

    // Toggle sidebar toggle button class
    if (sidebarToggleButton) {
        sidebarToggleButton.classList.toggle('menu-image');
    }

    // Toggle close button class
    if (closeButton) {
        closeButton.classList.toggle('close-img');
    }

    // Toggle main content class
    if (mainContent) {
        mainContent.classList.toggle('con-move-up', this.showSidebar);
    }
}

}