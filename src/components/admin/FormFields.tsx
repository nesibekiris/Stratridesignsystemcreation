import { useState } from 'react';
import { Upload, X, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  help?: string;
  type?: string;
}

export function InputField({ label, value, onChange, placeholder, help, type = 'text' }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] focus:border-transparent text-base transition-all"
      />
      {help && <p className="mt-1.5 text-xs text-gray-500">{help}</p>}
    </div>
  );
}

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  placeholder?: string;
  help?: string;
}

export function TextareaField({ label, value, onChange, rows = 4, placeholder, help }: TextareaFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] focus:border-transparent text-base transition-all resize-none"
      />
      {help && <p className="mt-1.5 text-xs text-gray-500">{help}</p>}
    </div>
  );
}

interface ColorFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  help?: string;
}

export function ColorField({ label, value, onChange, help }: ColorFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="flex gap-3">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-12 w-20 border-2 border-gray-300 rounded-md cursor-pointer"
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] focus:border-transparent font-mono text-base"
          placeholder="#000000"
        />
      </div>
      {help && <p className="mt-1.5 text-xs text-gray-500">{help}</p>}
    </div>
  );
}

interface ImageUploadFieldProps {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  help?: string;
}

export function ImageUploadField({ label, value, onChange, help }: ImageUploadFieldProps) {
  const [mode, setMode] = useState<'url' | 'unsplash'>('url');
  const [unsplashQuery, setUnsplashQuery] = useState('');

  const handleUnsplashSearch = () => {
    if (unsplashQuery.trim()) {
      // In a real implementation, this would call the unsplash API
      const unsplashUrl = `https://source.unsplash.com/1600x900/?${encodeURIComponent(unsplashQuery)}`;
      onChange(unsplashUrl);
      setUnsplashQuery('');
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      
      {/* Tab Switcher */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => setMode('url')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === 'url'
              ? 'bg-[#0073aa] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ExternalLink size={14} className="inline mr-1" />
          Image URL
        </button>
        <button
          onClick={() => setMode('unsplash')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === 'unsplash'
              ? 'bg-[#0073aa] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <ImageIcon size={14} className="inline mr-1" />
          Unsplash
        </button>
      </div>

      {/* URL Input */}
      {mode === 'url' && (
        <div className="space-y-2">
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] focus:border-transparent text-base"
          />
        </div>
      )}

      {/* Unsplash Search */}
      {mode === 'unsplash' && (
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={unsplashQuery}
              onChange={(e) => setUnsplashQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleUnsplashSearch()}
              placeholder="Search for images (e.g., office, technology)"
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] focus:border-transparent text-base"
            />
            <button
              onClick={handleUnsplashSearch}
              className="px-6 py-2.5 bg-[#0073aa] text-white rounded-md font-medium hover:bg-[#005a87] transition-colors"
            >
              Search
            </button>
          </div>
          <p className="text-xs text-gray-500">Free stock photos from Unsplash</p>
        </div>
      )}

      {/* Image Preview */}
      {value && (
        <div className="mt-3 relative">
          <div className="border-2 border-gray-200 rounded-md overflow-hidden">
            <img src={value} alt="Preview" className="w-full h-48 object-cover" />
          </div>
          <button
            onClick={() => onChange('')}
            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {help && <p className="mt-1.5 text-xs text-gray-500">{help}</p>}
    </div>
  );
}
