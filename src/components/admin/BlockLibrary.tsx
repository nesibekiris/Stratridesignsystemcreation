import { useState } from 'react';
import { Plus, X, Search, Layout, Type, Image, Quote, Mail, BookOpen, Users, Layers } from 'lucide-react';
import { BlockType, blockTemplates, blockLabels, ContentBlock } from '../../types/blocks';

interface BlockLibraryProps {
  onAddBlock: (blockType: BlockType) => void;
}

export function BlockLibrary({ onAddBlock }: BlockLibraryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Categorize blocks
  const blockCategories = {
    'Hero & Headers': ['hero', 'railway-section'] as BlockType[],
    'Content Sections': ['three-roads', 'text-image', 'quote'] as BlockType[],
    'Services & Features': ['services', 'how-we-work', 'for-teams', 'trainings'] as BlockType[],
    'Insights & CTAs': ['insights', 'newsletter', 'techletter-cta'] as BlockType[],
  };

  // Get icon for each block type
  const getBlockIcon = (type: BlockType) => {
    const iconMap: Record<BlockType, React.ReactNode> = {
      hero: <Layout size={20} />,
      'three-roads': <Layers size={20} />,
      services: <Users size={20} />,
      'how-we-work': <Layers size={20} />,
      'for-teams': <Users size={20} />,
      insights: <BookOpen size={20} />,
      trainings: <BookOpen size={20} />,
      newsletter: <Mail size={20} />,
      'techletter-cta': <Mail size={20} />,
      quote: <Quote size={20} />,
      'text-image': <Image size={20} />,
      'railway-section': <Layers size={20} />,
    };
    return iconMap[type] || <Layout size={20} />;
  };

  // Get description for each block type
  const getBlockDescription = (type: BlockType): string => {
    const descriptions: Record<BlockType, string> = {
      hero: 'Large header with title, subtitle, and action buttons',
      'three-roads': 'STRATRI\'s signature three-roads framework section',
      services: 'Grid of service offerings or pillars',
      'how-we-work': 'Step-by-step process or methodology',
      'for-teams': 'Team-focused benefits with bullet points',
      insights: 'Grid of blog posts or insights',
      trainings: 'List of training offerings',
      newsletter: 'Email newsletter signup form',
      'techletter-cta': 'Call-to-action for Techletter newsletter',
      quote: 'Testimonial or featured quote',
      'text-image': 'Two-column text and image layout',
      'railway-section': 'Railway framework visualization section',
    };
    return descriptions[type] || '';
  };

  const handleAddBlock = (blockType: BlockType) => {
    onAddBlock(blockType);
    setIsOpen(false);
    setSearchQuery('');
  };

  // Filter blocks based on search
  const filterBlocks = (blocks: BlockType[]) => {
    if (!searchQuery) return blocks;
    return blocks.filter(type =>
      blockLabels[type].toLowerCase().includes(searchQuery.toLowerCase()) ||
      getBlockDescription(type).toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <>
      {/* Add Block Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-dashed border-gray-300 rounded-sm text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium"
      >
        <Plus size={20} />
        <span>Add Block</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-sm shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-2xl font-serif font-medium text-gray-900">Add Block</h2>
                <p className="text-sm text-gray-500 mt-1">Choose a section template to add to your page</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="p-6 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search blocks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Block Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              {Object.entries(blockCategories).map(([category, blocks]) => {
                const filteredBlocks = filterBlocks(blocks);
                if (filteredBlocks.length === 0) return null;

                return (
                  <div key={category} className="mb-8 last:mb-0">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredBlocks.map((blockType) => (
                        <button
                          key={blockType}
                          onClick={() => handleAddBlock(blockType)}
                          className="flex items-start gap-4 p-4 border border-gray-200 rounded-sm hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
                        >
                          <div className="p-3 bg-gray-100 rounded group-hover:bg-blue-100 transition-colors flex-shrink-0">
                            {getBlockIcon(blockType)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 mb-1">
                              {blockLabels[blockType]}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {getBlockDescription(blockType)}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* No results */}
              {searchQuery && Object.values(blockCategories).every(blocks => filterBlocks(blocks).length === 0) && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No blocks found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
