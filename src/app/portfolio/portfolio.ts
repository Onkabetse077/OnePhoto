import { Component } from '@angular/core';

interface Category {
  id: string;
  label: string;
}


interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const portfolioImages: Photo[] = [
  // Wedding photos
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1700157679224-56c9f3d15118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBicmlkZSUyMGdyb29tfGVufDF8fHx8MTc1ODM2MTU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding couple embrace',
    category: 'weddings'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1627913759066-2f62eb9bbaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NTgzNjE2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding ceremony',
    category: 'weddings'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1611075099543-1c7e1e48183e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBlbmdhZ2VtZW50JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU4MzYxNjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Engagement couple',
    category: 'weddings'
  },
  
  // Portrait photos
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc1ODMxMDEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Professional portrait',
    category: 'portraits'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1731932976228-bd2baa59213f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODM2MTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Family portrait',
    category: 'portraits'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1641260774125-04d527b376a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODM2MTYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Corporate headshot',
    category: 'portraits'
  },
  
  // Landscape photos
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1729944080510-16b8a89df8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NTgzMTAxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Mountain landscape',
    category: 'landscapes'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1683183939243-e84dae684d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjBzdW5zZXR8ZW58MXx8fHwxNzU4MzI5OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Sunset landscape',
    category: 'landscapes'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1649934515294-19726be7e02d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjBtb3VudGFpbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1ODM2MTYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Scenic mountain view',
    category: 'landscapes'
  }
];

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
 selectedCategory = 'all';

  // Categories array
  categories: Category[] = [
    { id: 'all', label: 'All Work' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'landscapes', label: 'Landscapes' }
  ];

  // Function to change selected category
  selectCategory(id: string) {
    this.selectedCategory = id;
  }

}
