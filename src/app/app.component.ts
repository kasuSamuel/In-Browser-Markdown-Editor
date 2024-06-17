import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]
})
export class AppComponent {
  markdown: string = '';
  previewContent: string = '';

  async updatePreview() {
    this.previewContent = await marked(this.markdown);
  }
}
