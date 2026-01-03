import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { ImageWithFallback } from './onephoto/ImageWithFallback';

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

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'landscapes', label: 'Landscapes' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl mb-6">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my collection of work across weddings, portraits, and landscapes. 
            Each image tells a unique story and captures a special moment in time.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm">
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Full Size
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 border-0">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <h3 className="text-2xl mb-4 text-black">Love what you see?</h3>
            <p className="text-gray-600 mb-6">
              Let's work together to create beautiful memories that will last a lifetime.
            </p>
            <a href="/contact" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}