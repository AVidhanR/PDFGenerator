import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-pdf-gen',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './pdf-gen.component.html',
  styleUrl: './pdf-gen.component.css',
})
export class PdfGenComponent {
  jsonData = {
    customer: 'Jane Smith',
    date: new Date(),
    items: [
      { description: 'Product 1', price: 19.99 },
      { description: 'Product 2', price: 25.5 },
    ],
  };

  generatePDF() {
    const doc = new jsPDF({
      orientation: 'portrait', // 'portrait' (default) or 'landscape'
      unit: 'mm', // Measurement units: 'pt', 'mm', 'cm', 'in'
      format: 'a4', // Page format: 'a4', 'letter', etc.
    });

    let content = document.getElementById('pdf-content');
    if (content) {
      doc.html(content, {
        callback: (doc: any) => {
          doc.save('invoice.pdf');
        },
      });
    }
  }
}
