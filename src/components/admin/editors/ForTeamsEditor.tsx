import { Plus, Trash2, Users } from 'lucide-react';
import { InputField, TextareaField, ImageUploadField } from '../FormFields';

interface ForTeamsEditorProps {
  content: {
    title: string;
    intro: string;
    items: string[];
    conclusion: string;
    buttonText: string;
    backgroundImage?: string;
  };
  onUpdate: (data: any) => void;
}

export function ForTeamsEditor({ content, onUpdate }: ForTeamsEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Users size={20} className="text-[#0073aa]" />
          For Teams Section
        </h3>
        <p className="text-sm text-gray-500">Target audience and ideal clients</p>
      </div>

      <div className="space-y-6">
        <InputField
          label="Section Title"
          value={content.title}
          onChange={(value) => onUpdate({ ...content, title: value })}
        />

        <TextareaField
          label="Introduction"
          value={content.intro}
          onChange={(value) => onUpdate({ ...content, intro: value })}
          rows={3}
        />

        <ImageUploadField
          label="Background Image (Optional)"
          value={content.backgroundImage}
          onChange={(value) => onUpdate({ ...content, backgroundImage: value })}
        />

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-semibold text-gray-700">Target Audiences</label>
            <button
              onClick={() => onUpdate({ ...content, items: [...content.items, 'New audience type'] })}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#0073aa] text-white rounded-md hover:bg-[#005a87]"
            >
              <Plus size={14} />
              Add Item
            </button>
          </div>
          <div className="space-y-3">
            {content.items.map((item, index) => (
              <div key={index} className="flex gap-2">
                <textarea
                  value={item}
                  onChange={(e) => {
                    const updated = [...content.items];
                    updated[index] = e.target.value;
                    onUpdate({ ...content, items: updated });
                  }}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] text-base"
                  rows={2}
                />
                <button
                  onClick={() => {
                    const updated = content.items.filter((_, i) => i !== index);
                    onUpdate({ ...content, items: updated });
                  }}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-md h-fit"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <TextareaField
          label="Conclusion"
          value={content.conclusion}
          onChange={(value) => onUpdate({ ...content, conclusion: value })}
          rows={2}
        />

        <InputField
          label="Button Text"
          value={content.buttonText}
          onChange={(value) => onUpdate({ ...content, buttonText: value })}
        />
      </div>
    </div>
  );
}
