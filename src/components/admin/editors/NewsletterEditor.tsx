import { Mail } from 'lucide-react';
import { InputField, TextareaField, ImageUploadField } from '../FormFields';

interface NewsletterEditorProps {
  content: {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
    backgroundImage?: string;
  };
  onUpdate: (data: any) => void;
}

export function NewsletterEditor({ content, onUpdate }: NewsletterEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Mail size={20} className="text-[#0073aa]" />
          Newsletter Signup
        </h3>
        <p className="text-sm text-gray-500">Configure newsletter subscription form</p>
      </div>

      <div className="space-y-6">
        <InputField
          label="Newsletter Title"
          value={content.title}
          onChange={(value) => onUpdate({ ...content, title: value })}
        />

        <TextareaField
          label="Description"
          value={content.description}
          onChange={(value) => onUpdate({ ...content, description: value })}
          rows={3}
        />

        <InputField
          label="Email Input Placeholder"
          value={content.placeholder}
          onChange={(value) => onUpdate({ ...content, placeholder: value })}
        />

        <InputField
          label="Subscribe Button Text"
          value={content.buttonText}
          onChange={(value) => onUpdate({ ...content, buttonText: value })}
        />

        <ImageUploadField
          label="Background Image (Optional)"
          value={content.backgroundImage}
          onChange={(value) => onUpdate({ ...content, backgroundImage: value })}
        />
      </div>
    </div>
  );
}
