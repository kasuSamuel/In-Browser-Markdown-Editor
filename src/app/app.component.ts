import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MenuComponent } from './menu/menu.component'; 
import { DataService } from './data.service';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, MarkdownModule,CommonModule,FormsModule,MenuComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent {
title = 'In-Browser-Markdown-Editor';

  darkModeService: DataService = inject(DataService);
  markdown = ``;

showSidebar = false;

  toggleSidebar(): void {
    // Toggle the sidebar visibility
    this.showSidebar = !this.showSidebar;

    // Get DOM elements
    const header = document.querySelector('header') as HTMLElement | null;
    const mainContent = document.querySelector('main') as HTMLElement | null;
    const sidebarToggleButton = document.querySelector('.sidebar-toggle') as HTMLElement | null;
    const closeButton = document.querySelector('.clo') as HTMLElement | null;
    const samElement = document.querySelector('.sam') as HTMLElement | null;

    // Toggle sample element class
    if (samElement) {
      samElement.classList.toggle('kas');
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

togglePreview(show: boolean): void {
  const showPreview = document.querySelector('.show-preview') as HTMLElement | null;
  const hidePreview = document.querySelector('.hide-preview') as HTMLElement | null;
  const divOut = document.querySelectorAll('.div-out');
  const previewAll = document.querySelector('.preview-all') as HTMLElement | null;
  const previewAllTwo = document.querySelector('.preview-all-two') as HTMLElement | null;
  const newPreview = document.querySelector('.new-preview') as HTMLElement | null;


  // Loop through all divOut elements and toggle the 'hidden' class
  divOut.forEach((div) => {
    if (div instanceof HTMLElement) {
      if (show) {
        div.classList.add('hidden');
      } else {
        div.classList.remove('hidden');
      }
    }   
  });

if (previewAll) {
  previewAll.style.width = show ? '100%' : ''; 
  previewAll.style.justifyContent = show ? 'center' : 'initial'; 
}
if (newPreview) {
  newPreview.style.display =  show ? 'flex' : '';
  newPreview.style.width = show ? '100%' : ''; 
  newPreview.style.justifyContent = show ? 'center' : 'initial'; 
  newPreview.style.marginBottom = show ? '5rem' : ''; 

}

  
  if (previewAllTwo) {
      previewAllTwo.style.width = show ? '70%' : 'initial'; 
        previewAllTwo.style.marginBottom = show ? '5rem' : ''; 

    }




  // Toggle 'hidden' class on showPreview and hidePreview elements
  if (showPreview) {
    showPreview.classList.toggle('hidden', show);
  }

  if (hidePreview) {
    hidePreview.classList.toggle('hidden', !show);
  }
}


  }


