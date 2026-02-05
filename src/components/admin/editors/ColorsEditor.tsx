import { Palette } from 'lucide-react';
import { ColorField } from '../FormFields';

interface ColorsEditorProps {
  content: {
    cream: string;
    dark: string;
    accent: string;
    light: string;
  };
  onUpdate: (data: any) => void;
}

export function ColorsEditor({ content, onUpdate }: ColorsEditorProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
          <Palette size={20} className="text-[#0073aa]" />
          Brand Colors
        </h3>
        <p className="text-sm text-gray-500">Customize your website color scheme</p>
      </div>

      <div className="space-y-6">
        <ColorField
          label="Cream (Background)"
          value={content.cream}
          onChange={(value) => onUpdate({ ...content, cream: value })}
          help="Main background color for your website"
        />

        <ColorField
          label="Dark (Text)"
          value={content.dark}
          onChange={(value) => onUpdate({ ...content, dark: value })}
          help="Primary text and heading color"
        />

        <ColorField
          label="Accent (Primary)"
          value={content.accent}
          onChange={(value) => onUpdate({ ...content, accent: value })}
          help="Brand accent color for buttons and links"
        />

        <ColorField
          label="Light (Secondary)"
          value={content.light}
          onChange={(value) => onUpdate({ ...content, light: value })}
          help="Secondary accent and subtle elements"
        />
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Color Preview</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-full h-20 rounded-lg mb-2 border-2 border-gray-200" style={{ backgroundColor: content.cream }}></div>
            <p className="text-xs font-medium text-gray-600">Cream</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 rounded-lg mb-2 border-2 border-gray-200" style={{ backgroundColor: content.dark }}></div>
            <p className="text-xs font-medium text-gray-600">Dark</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 rounded-lg mb-2 border-2 border-gray-200" style={{ backgroundColor: content.accent }}></div>
            <p className="text-xs font-medium text-gray-600">Accent</p>
          </div>
          <div className="text-center">
            <div className="w-full h-20 rounded-lg mb-2 border-2 border-gray-200" style={{ backgroundColor: content.light }}></div>
            <p className="text-xs font-medium text-gray-600">Light</p>
          </div>
        </div>
      </div>
    </div>
  );
}
