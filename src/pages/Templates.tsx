
import React, { useState } from 'react';
import { Search, ArrowRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Templates = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sidebarCategories = [
    { id: 'all', name: 'All designs', count: 500000 },
    { id: 'business', name: 'Business', count: 45000 },
    { id: 'marketing', name: 'Marketing', count: 38000 },
    { id: 'social-media', name: 'Social Media', count: 92000 },
    { id: 'presentations', name: 'Presentations', count: 25000 },
    { id: 'documents', name: 'Documents', count: 18000 },
    { id: 'education', name: 'Education', count: 15000 },
    { id: 'events', name: 'Events', count: 12000 },
    { id: 'personal', name: 'Personal', count: 8000 },
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { id: 'instagram', name: 'Instagram Post', icon: '📱', color: 'from-pink-500 to-rose-500' },
    { id: 'poster', name: 'Poster', icon: '📄', color: 'from-blue-500 to-purple-500' },
    { id: 'presentation', name: 'Presentation', icon: '📊', color: 'from-green-500 to-teal-500' },
    { id: 'doc', name: 'Document', icon: '📝', color: 'from-orange-500 to-red-500' },
    { id: 'whiteboard', name: 'Whiteboard', icon: '⚪', color: 'from-cyan-500 to-blue-500' },
    { id: 'social', name: 'Social Media', icon: '💬', color: 'from-indigo-500 to-purple-500' },
    { id: 'video', name: 'Video', icon: '🎬', color: 'from-purple-500 to-pink-500' },
    { id: 'website', name: 'Website', icon: '🌐', color: 'from-teal-500 to-green-500' }
  ];

  const templates = [
    { id: 1, name: 'Modern Instagram Post', category: 'instagram', image: 'photo-1611162617474-5b21e879e113', color: 'from-pink-500 to-rose-500' },
    { id: 2, name: 'Business Poster', category: 'poster', image: 'photo-1561070791-2526d30994b5', color: 'from-blue-500 to-purple-500' },
    { id: 3, name: 'Startup Pitch Deck', category: 'presentation', image: 'photo-1560472354-b33ff0c44a43', color: 'from-green-500 to-teal-500' },
    { id: 4, name: 'Creative Brief', category: 'doc', image: 'photo-1586953208448-b95a79798f07', color: 'from-orange-500 to-red-500' },
    { id: 5, name: 'Brainstorm Board', category: 'whiteboard', image: 'photo-1552664730-d307ca884978', color: 'from-cyan-500 to-blue-500' },
    { id: 6, name: 'Facebook Cover', category: 'social', image: 'photo-1611162618071-b39a2ec055fb', color: 'from-indigo-500 to-purple-500' },
    { id: 7, name: 'Promo Video Template', category: 'video', image: 'photo-1574717024653-61fd2cf4d44d', color: 'from-purple-500 to-pink-500' },
    { id: 8, name: 'Landing Page', category: 'website', image: 'photo-1460925895917-afdab827c52f', color: 'from-teal-500 to-green-500' },
    { id: 9, name: 'Event Poster', category: 'poster', image: 'photo-1561070791-2526d30994b5', color: 'from-blue-500 to-purple-500' },
    { id: 10, name: 'Instagram Story', category: 'instagram', image: 'photo-1611162617474-5b21e879e113', color: 'from-pink-500 to-rose-500' },
    { id: 11, name: 'Company Report', category: 'doc', image: 'photo-1586953208448-b95a79798f07', color: 'from-orange-500 to-red-500' },
    { id: 12, name: 'YouTube Thumbnail', category: 'video', image: 'photo-1574717024653-61fd2cf4d44d', color: 'from-purple-500 to-pink-500' }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTemplateClick = (template: any) => {
    navigate('/editor', { state: { selectedTemplate: template } });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navbar />
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
        sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
      }`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-900">Categories</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="space-y-2">
            {sidebarCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#8A3FFC] text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm">{category.name}</span>
                  <span className="text-xs opacity-70">{category.count.toLocaleString()}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-200 rounded-lg"
              >
                <Menu size={20} />
              </button>
            )}
            <div className="text-center flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] bg-clip-text text-transparent mb-4">
                What will you design today?
              </h1>
              <div className="flex justify-center gap-4 mb-8">
                <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#8A3FFC] transition-colors">
                  Your designs
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-[#8A3FFC] to-[#4F82FF] text-white rounded-lg">
                  Templates
                </button>
                <button className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#8A3FFC] transition-colors">
                  DMI AI
                </button>
              </div>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search millions of templates"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-[#8A3FFC] text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8A3FFC]">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Category Circles */}
          <div className="flex justify-center flex-wrap gap-6 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex flex-col items-center group ${
                  selectedCategory === category.id ? 'scale-110' : 'hover:scale-105'
                } transition-transform`}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-2 shadow-lg ${
                  selectedCategory === category.id ? 'ring-4 ring-[#8A3FFC]/30' : ''
                }`}>
                  {category.icon}
                </div>
                <span className={`text-sm font-medium ${
                  selectedCategory === category.id ? 'text-[#8A3FFC]' : 'text-gray-600'
                }`}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                onClick={() => handleTemplateClick(template)}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.color}`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/${template.image}?w=400&h=600&fit=crop)`
                      }}
                    />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-4">
                      {template.name}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-[#8A3FFC] px-6 py-2 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* What's New Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">What's new</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Create a custom tribute for Doctors\' Day', color: 'from-blue-500 to-cyan-500', image: 'photo-1559757148-5c350d0d3c56' },
                { title: 'Get creative for back to school', color: 'from-green-500 to-teal-500', image: 'photo-1580582932707-520aed937b7b' },
                { title: 'Design joy this Krishna Janmashtami', color: 'from-purple-500 to-pink-500', image: 'photo-1578662996442-48f60103fc96' },
                { title: 'Create with gratitude this Guru Purnima', color: 'from-yellow-500 to-orange-500', image: 'photo-1507003211169-0a1dd7228f2d' }
              ].map((item, index) => (
                <div key={index} className="relative h-48 rounded-2xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/${item.image}?w=400&h=300&fit=crop)`
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
