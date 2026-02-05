import { Image, Link } from 'lucide-react';
import { InputField, TextareaField, ImageUploadField } from '../FormFields';

interface HeroEditorProps {
  content: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage?: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
  onUpdate: (data: any) => void;
}

export function HeroEditor({ content, onUpdate }: HeroEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Image size={20} className="text-[#0073aa]" />
          Hero Section Content
        </h3>
        <p className="text-sm text-gray-500">Main landing section of your website</p>
      </div>

      <div className="space-y-6">
        <ImageUploadField
          label="Background Image (Optional)"
          value={content.backgroundImage}
          onChange={(value) => onUpdate({ ...content, backgroundImage: value })}
          help="Add a background image for the hero section. Leave empty for solid color background."
        />

        <TextareaField
          label="Main Title"
          value={content.title}
          onChange={(value) => onUpdate({ ...content, title: value })}
          rows={3}
          help="The main headline visitors see first"
        />

        <TextareaField
          label="Subtitle"
          value={content.subtitle}
          onChange={(value) => onUpdate({ ...content, subtitle: value })}
          rows={3}
          help="Supporting text under the main title"
        />

        <TextareaField
          label="Description"
          value={content.description}
          onChange={(value) => onUpdate({ ...content, description: value })}
          rows={4}
          help="Additional context and details"
        />
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Link size={18} className="text-[#0073aa]" />
          Call-to-Action Buttons
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-gray-700">Primary Button</h5>
            <InputField
              label="Button Text"
              value={content.primaryButtonText}
              onChange={(value) => onUpdate({ ...content, primaryButtonText: value })}
            />
            <InputField
              label="Button Link"
              value={content.primaryButtonLink}
              onChange={(value) => onUpdate({ ...content, primaryButtonLink: value })}
              placeholder="#section-id or /page"
            />
          </div>

          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-gray-700">Secondary Button</h5>
            <InputField
              label="Button Text"
              value={content.secondaryButtonText}
              onChange={(value) => onUpdate({ ...content, secondaryButtonText: value })}
            />
            <InputField
              label="Button Link"
              value={content.secondaryButtonLink}
              onChange={(value) => onUpdate({ ...content, secondaryButtonLink: value })}
              placeholder="#section-id or /page"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
