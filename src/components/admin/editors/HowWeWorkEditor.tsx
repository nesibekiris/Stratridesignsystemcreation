import { Workflow } from 'lucide-react';
import { InputField, TextareaField, ImageUploadField } from '../FormFields';

interface HowWeWorkEditorProps {
  content: {
    title: string;
    backgroundImage?: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      image?: string;
    }>;
  };
  onUpdate: (data: any) => void;
}

export function HowWeWorkEditor({ content, onUpdate }: HowWeWorkEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Workflow size={20} className="text-[#0073aa]" />
          How We Work Process
        </h3>
        <p className="text-sm text-gray-500">Describe your working methodology</p>
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
        {content.steps.map((step, index) => (
          <div key={step.number} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4">Step {step.number}</h4>
            <div className="space-y-5">
              <InputField
                label="Step Title"
                value={step.title}
                onChange={(value) => {
                  const updated = [...content.steps];
                  updated[index] = { ...updated[index], title: value };
                  onUpdate({ ...content, steps: updated });
                }}
              />

              <TextareaField
                label="Description"
                value={step.description}
                onChange={(value) => {
                  const updated = [...content.steps];
                  updated[index] = { ...updated[index], description: value };
                  onUpdate({ ...content, steps: updated });
                }}
                rows={4}
              />

              <ImageUploadField
                label="Step Image (Optional)"
                value={step.image}
                onChange={(value) => {
                  const updated = [...content.steps];
                  updated[index] = { ...updated[index], image: value };
                  onUpdate({ ...content, steps: updated });
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
