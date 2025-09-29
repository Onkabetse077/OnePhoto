import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  label: string;
  content: string;
  id: string;
}

@Component({
  selector: 'app-tabs', 
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css'],
  imports: [CommonModule],
})
export class TabsComponent {
  tabs: Tab[] = [
    { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  activeTabId = this.tabs[0].id;

  selectTab(id: string) {
    this.activeTabId = id;
  }
}
