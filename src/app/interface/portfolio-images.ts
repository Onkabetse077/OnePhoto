export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const portfolioImages: Photo[] = [
  // Weddings
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1700157679224-56c9f3d15118?...',
    alt: 'Wedding couple embrace',
    category: 'weddings'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1627913759066-2f62eb9bbaa4?...',
    alt: 'Wedding ceremony',
    category: 'weddings'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1611075099543-1c7e1e48183e?...',
    alt: 'Engagement couple',
    category: 'weddings'
  },

  // Portraits
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?...',
    alt: 'Professional portrait',
    category: 'portraits'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1731932976228-bd2baa59213f?...',
    alt: 'Family portrait',
    category: 'portraits'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1641260774125-04d527b376a5?...',
    alt: 'Corporate headshot',
    category: 'portraits'
  },

  // Landscapes
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1729944080510-16b8a89df8b9?...',
    alt: 'Mountain landscape',
    category: 'landscapes'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1683183939243-e84dae684d02?...',
    alt: 'Sunset landscape',
    category: 'landscapes'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1649934515294-19726be7e02d?...',
    alt: 'Scenic mountain view',
    category: 'landscapes'
  }
];
