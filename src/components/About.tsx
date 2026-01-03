import React from 'react';
import { Camera, Award, Users, MapPin } from 'lucide-react';
import { ImageWithFallback } from './onephoto/ImageWithFallback';

export function About() {
  const stats = [
    { icon: Camera, label: 'Photos Taken', value: '50,000+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '15' },
    { icon: MapPin, label: 'Locations', value: '100+' },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl mb-6">About OnePhoto</h1>
            <p className="text-xl text-gray-600 mb-6">
              Passionate photographer with 8+ years of experience capturing life's most precious moments.
            </p>
            <p className="text-gray-600 mb-8">
              Based in Rathoke, I specialize in wedding photography, portrait sessions, and stunning landscape captures.
              My approach combines technical expertise with artistic vision to create images that tell compelling stories 
              and evoke genuine emotions.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Wedding Photography</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Portrait Sessions</span>
              <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full">Landscape Photography</span>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1715577177072-b52c4a9c3536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjB3b3Jrc3BhY2UlMjBzdHVkaW98ZW58MXx8fHwxNzU4MzYxNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="OnePhots in studio"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100">
                <stat.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl text-black mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl mb-8 text-center">My Photography Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-4">The Beginning</h3>
              <p className="text-gray-600 mb-6">
                My love for photography began during college when I received my first DSLR camera as a birthday gift. 
                What started as a hobby quickly became a passion as I discovered the power of capturing emotions and 
                moments that tell stories without words.
              </p>
              
              <h3 className="text-xl mb-4">Professional Growth</h3>
              <p className="text-gray-600">
                After graduating with a degree in Fine Arts, I dedicated myself to mastering the craft of photography. 
                I spent years honing my skills in various genres, from street photography to studio portraits, 
                before finding my calling in wedding and portrait photography.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl mb-4">Photography Style</h3>
              <p className="text-gray-600 mb-6">
                My photography style blends candid moments with carefully composed shots. I believe in capturing 
                authentic emotions and genuine interactions, while also creating stunning artistic images that 
                my clients will treasure forever.
              </p>
              
              <h3 className="text-xl mb-4">Philosophy</h3>
              <p className="text-gray-600">
                Every photograph should tell a story and evoke emotion. Whether it's the joy of a wedding day, 
                the intimacy of a family portrait, or the majesty of a landscape, I strive to create images 
                that transport viewers to that exact moment in time.
              </p>
            </div>
          </div>
        </div>

        {/* Equipment & Approach */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl mb-6">Equipment & Expertise</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-semibold mb-1 text-black">Professional Cameras</h4>
                <p className="text-gray-600">Canon EOS R5, Sony α7R IV for different shooting scenarios</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-semibold mb-1 text-black">Lens Collection</h4>
                <p className="text-gray-600">Extensive range from 16-300mm covering all photography needs</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-semibold mb-1 text-black">Lighting Equipment</h4>
                <p className="text-gray-600">Professional studio lights and portable flash systems</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h4 className="font-semibold mb-1 text-black">Post-Processing</h4>
                <p className="text-gray-600">Expert in Adobe Lightroom and Photoshop for perfect finishing</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl mb-6">My Approach</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2 text-black">1. Consultation</h4>
                <p className="text-gray-600">Understanding your vision and planning the perfect shoot</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-black">2. Preparation</h4>
                <p className="text-gray-600">Scouting locations and preparing equipment for optimal results</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-black">3. Capture</h4>
                <p className="text-gray-600">Creating a comfortable environment for natural, authentic moments</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-black">4. Post-Production</h4>
                <p className="text-gray-600">Careful editing to enhance while maintaining natural beauty</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-black">5. Delivery</h4>
                <p className="text-gray-600">High-resolution images delivered in multiple formats</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. I'd love to hear about your vision and 
            discuss how we can bring it to life through photography.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}