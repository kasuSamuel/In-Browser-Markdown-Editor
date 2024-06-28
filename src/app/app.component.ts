import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MenuComponent } from './menu/menu.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MarkdownModule,
    CommonModule,
    FormsModule,
    MenuComponent,
    NgIf,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  data: any[] = [];
  selectedData: any;
  showSidebar = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data;
    });

    this.dataService.isSelected$.subscribe((doc) => {
      this.selectedData = doc;
      console.log(this.selectedData);
    });
    if (this.data.length > 0 && !this.selectedData) {
      this.lastData();
    }
  }

  darkModeService: DataService = inject(DataService);
  markdown = ``;

  toggleSidebar(): void {
    // Toggle the sidebar visibility
    this.showSidebar = !this.showSidebar;

    // Get DOM elements
    const header = document.querySelector('header') as HTMLElement | null;
    const mainContent = document.querySelector('main') as HTMLElement | null;
    const sidebarToggleButton = document.querySelector(
      '.sidebar-toggle',
    ) as HTMLElement | null;
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

  lastData() {
    this.selectedData = this.data[this.data.length - 1];
  }

  deletedItem() {
    const popup = document.querySelector('.deletepopup') as HTMLElement | null;
    if (popup) {
      popup.style.display = 'flex';
    }
  }

  confirmAction() {
    if (this.selectedData) {
      const index = this.data.findIndex((doc) => doc === this.selectedData);

      if (index !== -1) {
        this.data.splice(index, 1); // Remove the selected file

        if (this.data.length > 0) {
          // Update selectedData to the latest or next file
          this.selectedData = this.data[Math.min(index, this.data.length - 1)];
        } else {
          this.selectedData = null;
        }

        this.dataService.saveToLocalStorage(this.data); // Save the updated data to local storage
      }
      // Optionally, hide the popup or perform any other UI updates
      const popup = document.querySelector(
        '.deletepopup',
      ) as HTMLElement | null;
      if (popup) {
        popup.style.display = 'none';
      }
      location.reload();
    }
  }

  saveChanges() {
    if (this.selectedData) {
      const nameInput = document.querySelector(
        '.nameInput',
      ) as HTMLInputElement;
      const content = document.querySelector(
        'textarea',
      ) as HTMLTextAreaElement;
      const index = this.data.findIndex((doc) => doc === this.selectedData);

      if (index !== -1) {
        // Update existing document
        this.data[index].content = this.selectedData.content;
        if (nameInput.value.trim()) {
          this.data[index].name = this.selectedData.name = nameInput.value.trim();
          this.data[index].content = this.selectedData.content = content.value.trim();
        }
      } else {
        // Create new document
        const defaultFileName = 'Untitled-Document.md';
        const newName = nameInput.value.trim();
        const newFile = {
          name: newName || defaultFileName,
          content: this.selectedData.content,
          createdAt: this.formatDate(new Date()),
        };
        this.data.push(newFile);
      }

      // Save data to local storage
      this.dataService.saveToLocalStorage(this.data);

      // Reload the page
      location.reload();
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}-${month}-${year}`;
  }

  togglePreview(show: boolean): void {
    const showPreview = document.querySelector(
      '.show-preview',
    ) as HTMLElement | null;
    const hidePreview = document.querySelector(
      '.hide-preview',
    ) as HTMLElement | null;
    const divOut = document.querySelectorAll('.div-out');
    const previewAll = document.querySelector(
      '.preview-all',
    ) as HTMLElement | null;
    const previewAllTwo = document.querySelector(
      '.preview-all-two',
    ) as HTMLElement | null;
    const newPreview = document.querySelector(
      '.new-preview',
    ) as HTMLElement | null;
    const eyeNow = document.querySelector(
      '.eye-now',
    ) as HTMLElement | null;

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
      newPreview.style.display = show ? 'flex' : '';
      newPreview.style.width = show ? '100%' : '';
      newPreview.style.justifyContent = show ? 'center' : 'initial';
      newPreview.style.marginBottom = show ? '5rem' : '';
    }

    if (previewAllTwo) {
      previewAllTwo.style.width = show ? '70%' : 'initial';
      previewAllTwo.style.marginBottom = show ? '7rem' : '';
    }

    // Toggle 'hidden' class on showPreview and hidePreview elements
    if (showPreview) {
      showPreview.classList.toggle('hidden', show);
    }

    if (hidePreview) {
      hidePreview.classList.toggle('hidden', !show);
    }
    if (eyeNow) {
      eyeNow.classList.toggle('hidden', !show);
    }
  }
}
