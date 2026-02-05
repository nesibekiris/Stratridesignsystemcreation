import { Plus, Trash2, BookOpen } from 'lucide-react';
import { InputField, ImageUploadField } from '../FormFields';

interface TrainingsEditorProps {
  content: {
    title: string;
    backgroundImage?: string;
    items: Array<{
      title: string;
      outcome: string;
      icon?: string;
    }>;
    buttonText: string;
  };
  onUpdate: (data: any) => void;
}

export function TrainingsEditor({ content, onUpdate }: TrainingsEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <BookOpen size={20} className="text-[#0073aa]" />
          Trainings & Programs
        </h3>
        <p className="text-sm text-gray-500">Manage your training offerings</p>
      </div>

      <div className="space-y-6">
        <InputField
          label="Section Title"
          value={content.title}
          onChange={(value) => onUpdate({ ...content, title: value })}
        />

        <ImageUploadField
          label="Background Image (Optional)"
          value={content.backgroundImage}
          onChange={(value) => onUpdate({ ...content, backgroundImage: value })}
        />

        <div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-sm font-semibold text-gray-700">Training Programs</label>
            <button
              onClick={() => {
                const newItem = { title: 'New Training', outcome: 'Outcome description', icon: '' };
                onUpdate({ ...content, items: [...content.items, newItem] });
              }}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#0073aa] text-white rounded-md hover:bg-[#005a87]"
            >
              <Plus size={14} />
              Add Training
            </button>
          </div>

          <div className="space-y-4">
            {content.items.map((item, index) => (
              <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Training {index + 1}</span>
                  <button
                    onClick={() => {
                      const updated = content.items.filter((_, i) => i !== index);
                      onUpdate({ ...content, items: updated });
                    }}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="space-y-4">
                  <InputField
                    label="Training Title"
                    value={item.title}
                    onChange={(value) => {
                      const updated = [...content.items];
                      updated[index] = { ...updated[index], title: value };
                      onUpdate({ ...content, items: updated });
                    }}
                  />
                  <InputField
                    label="Expected Outcome"
                    value={item.outcome}
                    onChange={(value) => {
                      const updated = [...content.items];
                      updated[index] = { ...updated[index], outcome: value };
                      onUpdate({ ...content, items: updated });
                    }}
                  />
                  <ImageUploadField
                    label="Icon/Image (Optional)"
                    value={item.icon}
                    onChange={(value) => {
                      const updated = [...content.items];
                      updated[index] = { ...updated[index], icon: value };
                      onUpdate({ ...content, items: updated });
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <InputField
          label="Button Text"
          value={content.buttonText}
          onChange={(value) => onUpdate({ ...content, buttonText: value })}
        />
      </div>
    </div>
  );
}
