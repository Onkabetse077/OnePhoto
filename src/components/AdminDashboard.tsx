import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Upload, 
  Eye, 
  Trash2, 
  MessageSquare, 
  Calendar, 
  DollarSign, 
  Users,
  Camera,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { toast } from 'sonner';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  status: 'new' | 'responded' | 'booked' | 'declined';
  message: string;
  submittedAt: string;
  budget: string;
}

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  uploadedAt: string;
}

// Mock data
const mockInquiries: Inquiry[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    eventType: 'wedding',
    eventDate: '2025-06-15',
    location: 'Napa Valley, CA',
    status: 'new',
    message: 'Looking for a photographer for our outdoor wedding. We love your portfolio!',
    submittedAt: '2025-01-15',
    budget: '$5,000 - $10,000'
  },
  {
    id: '2',
    name: 'Mike Chen',
    email: 'mike.chen@company.com',
    phone: '(555) 987-6543',
    eventType: 'corporate headshots',
    eventDate: '2025-02-20',
    location: 'San Francisco, CA',
    status: 'responded',
    message: 'Need headshots for our executive team of 10 people.',
    submittedAt: '2025-01-12',
    budget: '$1,000 - $2,500'
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily.davis@email.com',
    phone: '(555) 456-7890',
    eventType: 'family portrait',
    eventDate: '2025-03-10',
    location: 'Golden Gate Park, SF',
    status: 'booked',
    message: 'Family of 4 looking for outdoor portraits. Spring timing preferred.',
    submittedAt: '2025-01-10',
    budget: '$1,000 - $2,500'
  }
];

export function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(mockInquiries);
  const [newPhoto, setNewPhoto] = useState({
    alt: '',
    category: '',
    file: null as File | null
  });

  const handleStatusUpdate = (inquiryId: string, newStatus: Inquiry['status']) => {
    setInquiries(prev => 
      prev.map(inquiry => 
        inquiry.id === inquiryId 
          ? { ...inquiry, status: newStatus }
          : inquiry
      )
    );
    toast.success('Inquiry status updated');
  };

  const handlePhotoUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.file || !newPhoto.alt || !newPhoto.category) {
      toast.error('Please fill in all fields and select a file');
      return;
    }
    
    // Mock upload - in real app this would upload to storage
    toast.success('Photo uploaded successfully');
    setNewPhoto({ alt: '', category: '', file: null });
  };

  const getStatusColor = (status: Inquiry['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'responded': return 'bg-yellow-100 text-yellow-800';
      case 'booked': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = [
    { icon: MessageSquare, label: 'New Inquiries', value: inquiries.filter(i => i.status === 'new').length, color: 'text-red-600' },
    { icon: Calendar, label: 'Booked Events', value: inquiries.filter(i => i.status === 'booked').length, color: 'text-red-600' },
    { icon: DollarSign, label: 'Revenue This Month', value: '$12,500', color: 'text-red-600' },
    { icon: Users, label: 'Total Clients', value: '247', color: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your photography business</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="inquiries" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="inquiries">Inquiries & Bookings</TabsTrigger>
            <TabsTrigger value="gallery">Gallery Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Inquiries Tab */}
          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Client Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold">{inquiry.name}</h3>
                          <p className="text-sm text-gray-600 capitalize">{inquiry.eventType.replace('-', ' ')}</p>
                        </div>
                        <Badge className={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          {inquiry.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          {inquiry.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          {inquiry.eventDate}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {inquiry.location}
                      </div>
                      
                      <p className="text-sm text-gray-600">"{inquiry.message}"</p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-gray-500">
                          Budget: {inquiry.budget} • Submitted {inquiry.submittedAt}
                        </span>
                        <div className="flex gap-2">
                          <Select
                            value={inquiry.status}
                            onValueChange={(value: Inquiry['status']) => handleStatusUpdate(inquiry.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="responded">Responded</SelectItem>
                              <SelectItem value="booked">Booked</SelectItem>
                              <SelectItem value="declined">Declined</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Management Tab */}
          <TabsContent value="gallery">
            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* Upload Form */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="h-5 w-5" />
                      Upload New Photo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePhotoUpload} className="space-y-4">
                      <div>
                        <Label htmlFor="photo-file">Photo File</Label>
                        <Input
                          id="photo-file"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setNewPhoto(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="photo-alt">Alt Text</Label>
                        <Input
                          id="photo-alt"
                          value={newPhoto.alt}
                          onChange={(e) => setNewPhoto(prev => ({ ...prev, alt: e.target.value }))}
                          placeholder="Describe the photo"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="photo-category">Category</Label>
                        <Select 
                          value={newPhoto.category} 
                          onValueChange={(value) => setNewPhoto(prev => ({ ...prev, category: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weddings">Weddings</SelectItem>
                            <SelectItem value="portraits">Portraits</SelectItem>
                            <SelectItem value="landscapes">Landscapes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                        Upload Photo
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Photo Management */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Photo Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <Camera className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p>Photo management interface would be here</p>
                      <p className="text-sm">Upload photos to see them listed and manage categories</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              
              <Card>
                <CardHeader>
                  <CardTitle>Inquiry Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      Analytics Chart Placeholder
                    </div>
                    <p>Inquiry trends and booking analytics would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-gray-500">
                    <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      Revenue Chart Placeholder
                    </div>
                    <p>Monthly revenue and booking value analytics</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}