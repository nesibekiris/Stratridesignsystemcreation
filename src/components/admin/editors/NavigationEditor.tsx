import { Plus, Trash2, Menu } from 'lucide-react';
import { InputField } from '../FormFields';

interface NavigationEditorProps {
  content: Array<{
    name: string;
    path: string;
  }>;
  onUpdate: (data: any) => void;
}

export function NavigationEditor({ content, onUpdate }: NavigationEditorProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <Menu size={20} className="text-[#0073aa]" />
            Navigation Menu
          </h3>
          <p className="text-sm text-gray-500">Configure your website navigation links</p>
        </div>
        <button
          onClick={() => onUpdate([...content, { name: 'New Link', path: '#' }])}
          className="flex items-center gap-2 px-4 py-2 bg-[#0073aa] text-white rounded-md font-medium hover:bg-[#005a87] transition-colors"
        >
          <Plus size={18} />
          Add Link
        </button>
      </div>

      <div className="space-y-4">
        {content.map((item, index) => (
          <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-700">Menu Item {index + 1}</span>
              <button
                onClick={() => {
                  const updated = content.filter((_, i) => i !== index);
                  onUpdate(updated);
                }}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Link Text"
                value={item.name}
                onChange={(value) => {
                  const updated = [...content];
                  updated[index] = { ...updated[index], name: value };
                  onUpdate(updated);
                }}
                placeholder="Home, Services, About..."
              />
              <InputField
                label="Link URL"
                value={item.path}
                onChange={(value) => {
                  const updated = [...content];
                  updated[index] = { ...updated[index], path: value };
                  onUpdate(updated);
                }}
                placeholder="/ or /services or #section"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
