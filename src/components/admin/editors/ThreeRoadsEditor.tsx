import { Signpost } from 'lucide-react';
import { InputField, TextareaField, ImageUploadField } from '../FormFields';

interface ThreeRoadsEditorProps {
  content: {
    title: string;
    description1: string;
    description2: string;
    conclusion: string;
    backgroundImage?: string;
    roads: Array<{
      name: string;
      description: string;
      icon?: string;
    }>;
  };
  onUpdate: (data: any) => void;
}

export function ThreeRoadsEditor({ content, onUpdate }: ThreeRoadsEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Signpost size={20} className="text-[#0073aa]" />
          Three Roads Section
        </h3>
        <p className="text-sm text-gray-500">Explain the three-way approach of your consultancy</p>
      </div>

      <div className="space-y-6">
        <ImageUploadField
          label="Background Image (Optional)"
          value={content.backgroundImage}
          onChange={(value) => onUpdate({ ...content, backgroundImage: value })}
        />

        <InputField
          label="Section Title"
          value={content.title}
          onChange={(value) => onUpdate({ ...content, title: value })}
        />

        <TextareaField
          label="Description 1"
          value={content.description1}
          onChange={(value) => onUpdate({ ...content, description1: value })}
          rows={3}
        />

        <TextareaField
          label="Description 2"
          value={content.description2}
          onChange={(value) => onUpdate({ ...content, description2: value })}
          rows={2}
        />

        <TextareaField
          label="Conclusion"
          value={content.conclusion}
          onChange={(value) => onUpdate({ ...content, conclusion: value })}
          rows={3}
        />
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">The Three Roads</h4>
        <div className="space-y-4">
          {content.roads.map((road, index) => (
            <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Road {index + 1}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Name"
                  value={road.name}
                  onChange={(value) => {
                    const updated = [...content.roads];
                    updated[index] = { ...updated[index], name: value };
                    onUpdate({ ...content, roads: updated });
                  }}
                />
                <InputField
                  label="Description"
                  value={road.description}
                  onChange={(value) => {
                    const updated = [...content.roads];
                    updated[index] = { ...updated[index], description: value };
                    onUpdate({ ...content, roads: updated });
                  }}
                />
              </div>
              <div className="mt-4">
                <ImageUploadField
                  label="Custom Icon (Optional)"
                  value={road.icon}
                  onChange={(value) => {
                    const updated = [...content.roads];
                    updated[index] = { ...updated[index], icon: value };
                    onUpdate({ ...content, roads: updated });
                  }}
                  help="Upload a custom icon or leave empty for default"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
