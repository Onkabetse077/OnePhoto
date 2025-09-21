import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

interface Category {
  id: string;
  label: string;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent {
  selectedCategory = 'weddings';

  categories: Category[] = [
    { id: 'weddings', label: 'Weddings' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'landscapes', label: 'Landscapes' },
    { id: 'other', label: 'Other' }
  ];

  get selectedIndex(): number {
    return this.categories.findIndex(c => c.id === this.selectedCategory);
  }

  onCategoryChange(index: number): void {
    this.selectedCategory = this.categories[index].id;
  }
}
