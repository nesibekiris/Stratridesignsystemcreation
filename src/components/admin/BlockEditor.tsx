import { useState } from 'react';
import { ChevronUp, ChevronDown, Eye, EyeOff, Copy, Trash2, GripVertical } from 'lucide-react';
import { ContentBlock, blockLabels } from '../../types/blocks';

interface BlockEditorProps {
  blocks: ContentBlock[];
  onUpdateBlocks: (blocks: ContentBlock[]) => void;
  onEditBlock: (blockId: string) => void;
}

export function BlockEditor({ blocks, onUpdateBlocks, onEditBlock }: BlockEditorProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const newBlocks = [...blocks];
    const [draggedBlock] = newBlocks.splice(draggedIndex, 1);
    newBlocks.splice(dropIndex, 0, draggedBlock);

    // Update order property
    const reorderedBlocks = newBlocks.map((block, idx) => ({
      ...block,
      order: idx,
    }));

    onUpdateBlocks(reorderedBlocks);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const moveBlock = (index: number, direction: 'up' | 'down') => {
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newBlocks.length) return;

    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];

    // Update order property
    const reorderedBlocks = newBlocks.map((block, idx) => ({
      ...block,
      order: idx,
    }));

    onUpdateBlocks(reorderedBlocks);
  };

  const toggleVisibility = (blockId: string) => {
    const newBlocks = blocks.map(block =>
      block.id === blockId ? { ...block, visible: !block.visible } : block
    );
    onUpdateBlocks(newBlocks);
  };

  const duplicateBlock = (index: number) => {
    const blockToDuplicate = blocks[index];
    const newBlock = {
      ...blockToDuplicate,
      id: `${blockToDuplicate.type}-${Date.now()}`,
      order: index + 1,
    };

    const newBlocks = [
      ...blocks.slice(0, index + 1),
      newBlock,
      ...blocks.slice(index + 1),
    ];

    // Update order property
    const reorderedBlocks = newBlocks.map((block, idx) => ({
      ...block,
      order: idx,
    }));

    onUpdateBlocks(reorderedBlocks);
  };

  const deleteBlock = (blockId: string) => {
    if (!confirm('Are you sure you want to delete this block?')) return;

    const newBlocks = blocks.filter(block => block.id !== blockId);

    // Update order property
    const reorderedBlocks = newBlocks.map((block, idx) => ({
      ...block,
      order: idx,
    }));

    onUpdateBlocks(reorderedBlocks);
  };

  return (
    <div className="space-y-3">
      {blocks.length === 0 && (
        <div className="text-center py-12 px-4 border-2 border-dashed border-gray-300 rounded-sm">
          <p className="text-gray-500 font-sans">No blocks yet. Click "Add Block" to get started.</p>
        </div>
      )}

      {blocks.map((block, index) => (
        <div
          key={block.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          className={`
            border rounded-sm bg-white transition-all
            ${draggedIndex === index ? 'opacity-50' : 'opacity-100'}
            ${dragOverIndex === index ? 'border-blue-500 border-2' : 'border-gray-200'}
            ${!block.visible ? 'bg-gray-50' : ''}
          `}
        >
          <div className="p-4">
            <div className="flex items-center justify-between gap-4">
              {/* Drag Handle */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <button
                  className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 flex-shrink-0"
                  aria-label="Drag to reorder"
                >
                  <GripVertical size={20} />
                </button>

                {/* Block Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-sans font-medium text-gray-900 truncate">
                      {blockLabels[block.type]}
                    </h3>
                    {!block.visible && (
                      <span className="text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded">
                        Hidden
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate mt-0.5">
                    {getBlockPreview(block)}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1 flex-shrink-0">
                {/* Move Up/Down */}
                <button
                  onClick={() => moveBlock(index, 'up')}
                  disabled={index === 0}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move up"
                >
                  <ChevronUp size={18} />
                </button>
                <button
                  onClick={() => moveBlock(index, 'down')}
                  disabled={index === blocks.length - 1}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move down"
                >
                  <ChevronDown size={18} />
                </button>

                {/* Visibility Toggle */}
                <button
                  onClick={() => toggleVisibility(block.id)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                  title={block.visible ? 'Hide block' : 'Show block'}
                >
                  {block.visible ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>

                {/* Duplicate */}
                <button
                  onClick={() => duplicateBlock(index)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                  title="Duplicate block"
                >
                  <Copy size={18} />
                </button>

                {/* Edit */}
                <button
                  onClick={() => onEditBlock(block.id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded"
                >
                  Edit
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteBlock(block.id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded"
                  title="Delete block"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper function to generate preview text for each block type
function getBlockPreview(block: ContentBlock): string {
  switch (block.type) {
    case 'hero':
      return block.data.title;
    case 'three-roads':
      return block.data.title;
    case 'services':
      return `${block.data.pillars.length} service(s)`;
    case 'how-we-work':
      return `${block.data.steps.length} step(s)`;
    case 'for-teams':
      return block.data.title;
    case 'insights':
      return `${block.data.posts.length} post(s)`;
    case 'trainings':
      return `${block.data.items.length} training(s)`;
    case 'newsletter':
      return block.data.title;
    case 'techletter-cta':
      return 'Techletter newsletter CTA';
    case 'quote':
      return `"${block.data.quote.slice(0, 50)}${block.data.quote.length > 50 ? '...' : ''}"`;
    case 'text-image':
      return block.data.title;
    case 'railway-section':
      return block.data.title;
    default:
      return '';
  }
}
