import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-fallback',
  templateUrl: './image-with-fall-back.html',
  styleUrls: ['./image-with-fall-back.css']
})
export class ImageWithFallbackComponent {
  @Input() src!: string;                 // Main image source
  @Input() alt = 'Image';        // Alt text
  @Input() fallbackSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4='; // Default fallback

  hasError = false;

  onError() {
    this.hasError = true;
  }
}
