import { Plus, Trash2, Briefcase } from 'lucide-react';
import { InputField, TextareaField, ImageUploadField } from '../FormFields';

interface ServicesEditorProps {
  content: {
    title: string;
    backgroundImage?: string;
    pillars: Array<{
      id: string;
      title: string;
      subtitle: string;
      icon?: string;
      customImage?: string;
      points: string[];
      link: string;
    }>;
  };
  onUpdate: (data: any) => void;
}

export function ServicesEditor({ content, onUpdate }: ServicesEditorProps) {
  const addPillar = () => {
    const newPillar = {
      id: Date.now().toString(),
      title: 'New Service',
      subtitle: 'Service description',
      points: ['Point 1', 'Point 2', 'Point 3'],
      link: '#',
    };
    onUpdate({ ...content, pillars: [...content.pillars, newPillar] });
  };

  const removePillar = (id: string) => {
    onUpdate({ ...content, pillars: content.pillars.filter(p => p.id !== id) });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <Briefcase size={20} className="text-[#0073aa]" />
            Services & Pillars
          </h3>
          <p className="text-sm text-gray-500">Manage your service offerings</p>
        </div>
        <button
          onClick={addPillar}
          className="flex items-center gap-2 px-4 py-2 bg-[#0073aa] text-white rounded-md font-medium hover:bg-[#005a87] transition-colors"
        >
          <Plus size={18} />
          Add Service
        </button>
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
      </div>

      <div className="pt-6 border-t border-gray-200 space-y-6">
        {content.pillars.map((pillar, index) => (
          <div key={pillar.id} className="p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-semibold text-gray-900">Service {index + 1}</h4>
              <button
                onClick={() => removePillar(pillar.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="space-y-5">
              <InputField
                label="Service Title"
                value={pillar.title}
                onChange={(value) => {
                  const updated = [...content.pillars];
                  updated[index] = { ...updated[index], title: value };
                  onUpdate({ ...content, pillars: updated });
                }}
              />

              <InputField
                label="Subtitle"
                value={pillar.subtitle}
                onChange={(value) => {
                  const updated = [...content.pillars];
                  updated[index] = { ...updated[index], subtitle: value };
                  onUpdate({ ...content, pillars: updated });
                }}
              />

              <ImageUploadField
                label="Service Image/Icon (Optional)"
                value={pillar.customImage}
                onChange={(value) => {
                  const updated = [...content.pillars];
                  updated[index] = { ...updated[index], customImage: value };
                  onUpdate({ ...content, pillars: updated });
                }}
                help="Add a custom image or icon for this service"
              />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Service Points</label>
                {pillar.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="mb-3 flex gap-2">
                    <span className="text-sm font-medium text-gray-500 mt-3">{pointIndex + 1}.</span>
                    <textarea
                      value={point}
                      onChange={(e) => {
                        const updated = [...content.pillars];
                        const updatedPoints = [...updated[index].points];
                        updatedPoints[pointIndex] = e.target.value;
                        updated[index] = { ...updated[index], points: updatedPoints };
                        onUpdate({ ...content, pillars: updated });
                      }}
                      className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] text-base"
                      rows={2}
                    />
                    <button
                      onClick={() => {
                        const updated = [...content.pillars];
                        const updatedPoints = updated[index].points.filter((_, i) => i !== pointIndex);
                        updated[index] = { ...updated[index], points: updatedPoints };
                        onUpdate({ ...content, pillars: updated });
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-md h-fit"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const updated = [...content.pillars];
                    updated[index].points.push('New point');
                    onUpdate({ ...content, pillars: updated });
                  }}
                  className="text-sm text-[#0073aa] hover:text-[#005a87] font-medium"
                >
                  + Add Point
                </button>
              </div>

              <InputField
                label="Link URL"
                value={pillar.link}
                onChange={(value) => {
                  const updated = [...content.pillars];
                  updated[index] = { ...updated[index], link: value };
                  onUpdate({ ...content, pillars: updated });
                }}
                placeholder="#section or /page"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
