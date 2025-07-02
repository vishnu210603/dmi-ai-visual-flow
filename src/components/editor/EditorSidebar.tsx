
import React, { useState } from 'react';
import { 
  Type, 
  Image, 
  Shapes, 
  Palette, 
  Layout, 
  Upload,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Grid3X3,
  PenTool
} from 'lucide-react';

interface EditorSidebarProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
}

const EditorSidebar = ({ activeTool, setActiveTool }: EditorSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tools = [
    { id: 'text', name: 'Text', icon: Type },
    { id: 'images', name: 'Images', icon: Image },
    { id: 'shapes', name: 'Shapes', icon: Shapes },
    { id: 'graphics', name: 'Graphics', icon: Sparkles },
    { id: 'templates', name: 'Templates', icon: Layout },
    { id: 'uploads', name: 'Uploads', icon: Upload },
    { id: 'draw', name: 'Draw', icon: PenTool },
    { id: 'grid', name: 'Grid', icon: Grid3X3 },
  ];

  const textOptions = [
    'Add a heading',
    'Add a subheading', 
    'Add body text',
    'Add a text box'
  ];

  const shapeOptions = [
    'Rectangle',
    'Circle', 
    'Triangle',
    'Line',
    'Arrow'
  ];

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-80'
    } flex`}>
      {/* Main Tools */}
      <div className="w-16 bg-gray-100 border-r border-gray-200 py-4">
        <div className="space-y-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`w-12 h-12 mx-2 rounded-lg flex items-center justify-center transition-colors ${
                  activeTool === tool.id 
                    ? 'bg-[#8A3FFC] text-white' 
                    : 'hover:bg-gray-200 text-gray-600'
                }`}
                title={tool.name}
              >
                <Icon size={20} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Tool Details Panel */}
      {!isCollapsed && (
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 capitalize">{activeTool}</h3>
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft size={16} />
            </button>
          </div>

          {activeTool === 'text' && (
            <div className="space-y-3">
              {textOptions.map((option, index) => (
                <div
                  key={index}
                  className="p-3 border border-gray-200 rounded-lg hover:border-[#8A3FFC] cursor-pointer transition-colors"
                >
                  <div className="text-sm font-medium">{option}</div>
                </div>
              ))}
            </div>
          )}

          {activeTool === 'shapes' && (
            <div className="grid grid-cols-2 gap-3">
              {shapeOptions.map((shape, index) => (
                <div
                  key={index}
                  className="aspect-square border border-gray-200 rounded-lg hover:border-[#8A3FFC] cursor-pointer transition-colors flex items-center justify-center"
                >
                  <div className="text-xs font-medium">{shape}</div>
                </div>
              ))}
            </div>
          )}

          {activeTool === 'images' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {[1,2,3,4,5,6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=200&h=200&fit=crop)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTool === 'graphics' && (
            <div className="space-y-4">
              <div className="text-sm text-gray-600">AI-Generated Graphics</div>
              <div className="grid grid-cols-2 gap-2">
                {[1,2,3,4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-[#8A3FFC] to-[#4F82FF] rounded-lg cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Collapse/Expand Button */}
      {isCollapsed && (
        <button
          onClick={() => setIsCollapsed(false)}
          className="absolute top-4 -right-3 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:shadow-md transition-shadow"
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default EditorSidebar;
