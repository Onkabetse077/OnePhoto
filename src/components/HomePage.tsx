import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Camera, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './onephoto/ImageWithFallback';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1643264623879-bb85ea39c62a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGNhbWVyYXxlbnwxfHx8fDE3NTgzNjE1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional photographer at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl mb-6">
            Capturing Life's
            <span className="block">Beautiful Moments</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional photography that tells your unique story with artistry and passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">
                View Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-black">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 text-black">Welcome to My World</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm John J, a passionate photographer specializing in weddings, portraits, and landscapes.
              With over 8 years of experience, I capture moments that become timeless memories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <Camera className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl mb-3 text-black">Professional Quality</h3>
                <p className="text-gray-600">
                  State-of-the-art equipment and techniques to deliver stunning, high-resolution images.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl mb-3 text-black">Passionate Approach</h3>
                <p className="text-gray-600">
                  Every shoot is approached with genuine enthusiasm and creative vision.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl mb-3 text-black">Exceptional Service</h3>
                <p className="text-gray-600">
                  Personalized experience from consultation to final delivery of your images.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Recent Work</h2>
            <p className="text-xl text-gray-600">A glimpse into my latest photography projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700157679224-56c9f3d15118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBicmlkZSUyMGdyb29tfGVufDF8fHx8MTc1ODM2MTU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wedding photography"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xl">Weddings</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612052355380-d7c1d631f00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwc3R1ZGlvfGVufDF8fHx8MTc1ODMxMDEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portrait photography"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xl">Portraits</span>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729944080510-16b8a89df8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNsYW5kc2NhcGUlMjBwaG90b2dyYXBoeSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NTgzMTAxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Landscape photography"
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xl">Landscapes</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">View Full Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}