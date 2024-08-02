import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfGenComponent } from './pdf-gen/pdf-gen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PdfGenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pdf-generator';
}
