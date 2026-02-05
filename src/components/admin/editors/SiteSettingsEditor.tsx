import { Settings } from 'lucide-react';
import { InputField, ImageUploadField } from '../FormFields';

interface SiteSettingsEditorProps {
  content: {
    siteName: string;
    tagline: string;
    logo?: string;
    favicon?: string;
    email: string;
    linkedinUrl: string;
    logoText: string;
  };
  onUpdate: (data: any) => void;
}

export function SiteSettingsEditor({ content, onUpdate }: SiteSettingsEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Settings size={20} className="text-[#0073aa]" />
          Site Settings
        </h3>
        <p className="text-sm text-gray-500">Configure global website settings</p>
      </div>

      <div className="space-y-6">
        <InputField
          label="Site Name"
          value={content.siteName}
          onChange={(value) => onUpdate({ ...content, siteName: value })}
          help="Your company/brand name"
        />

        <InputField
          label="Tagline"
          value={content.tagline}
          onChange={(value) => onUpdate({ ...content, tagline: value })}
          help="Short description of your business"
        />

        <InputField
          label="Logo Text"
          value={content.logoText}
          onChange={(value) => onUpdate({ ...content, logoText: value })}
          help="Text displayed in the navigation bar"
        />

        <ImageUploadField
          label="Logo Image (Optional)"
          value={content.logo}
          onChange={(value) => onUpdate({ ...content, logo: value })}
          help="Upload your logo. Leave empty to use text logo"
        />

        <ImageUploadField
          label="Favicon (Optional)"
          value={content.favicon}
          onChange={(value) => onUpdate({ ...content, favicon: value })}
          help="Small icon shown in browser tabs"
        />

        <div className="pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
          <div className="space-y-4">
            <InputField
              label="Email Address"
              type="email"
              value={content.email}
              onChange={(value) => onUpdate({ ...content, email: value })}
              placeholder="hello@example.com"
            />

            <InputField
              label="LinkedIn URL"
              value={content.linkedinUrl}
              onChange={(value) => onUpdate({ ...content, linkedinUrl: value })}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
