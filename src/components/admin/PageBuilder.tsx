import { useState } from 'react';
import { ContentBlock, blockTemplates, BlockType } from '../../types/blocks';
import { BlockEditor } from './BlockEditor';
import { BlockLibrary } from './BlockLibrary';
import { BlockEditForm } from './BlockEditForms';

interface PageBuilderProps {
  blocks: ContentBlock[];
  onUpdateBlocks: (blocks: ContentBlock[]) => void;
  availableImages: Array<{ id: string; url: string; name: string; alt: string }>;
}

export function PageBuilder({ blocks, onUpdateBlocks, availableImages }: PageBuilderProps) {
  const [editingBlockId, setEditingBlockId] = useState<string | null>(null);

  const handleAddBlock = (blockType: BlockType) => {
    const template = blockTemplates[blockType];
    const newBlock: ContentBlock = {
      ...template,
      id: `${blockType}-${Date.now()}`,
      order: blocks.length,
    } as ContentBlock;

    onUpdateBlocks([...blocks, newBlock]);
  };

  const handleEditBlock = (blockId: string) => {
    setEditingBlockId(blockId);
  };

  const handleSaveBlock = (updatedBlock: ContentBlock) => {
    const newBlocks = blocks.map(block =>
      block.id === updatedBlock.id ? updatedBlock : block
    );
    onUpdateBlocks(newBlocks);
    setEditingBlockId(null);
  };

  const editingBlock = blocks.find(b => b.id === editingBlockId);

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-sm p-4">
        <h3 className="font-medium text-blue-900 mb-2">✨ Page Builder</h3>
        <p className="text-sm text-blue-800">
          Build your page with ready-made section templates. Add, reorder, duplicate, hide/show, or edit blocks without touching any code.
        </p>
      </div>

      {/* Block Editor */}
      <BlockEditor
        blocks={blocks}
        onUpdateBlocks={onUpdateBlocks}
        onEditBlock={handleEditBlock}
      />

      {/* Add Block Button */}
      <BlockLibrary onAddBlock={handleAddBlock} />

      {/* Edit Block Modal */}
      {editingBlock && (
        <BlockEditForm
          block={editingBlock}
          onSave={handleSaveBlock}
          onCancel={() => setEditingBlockId(null)}
          availableImages={availableImages}
        />
      )}
    </div>
  );
}
