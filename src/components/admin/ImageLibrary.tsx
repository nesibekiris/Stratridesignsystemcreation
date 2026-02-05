import { useState } from 'react';
import { Upload, Trash2, Copy, Check, Search, Image as ImageIcon } from 'lucide-react';

interface ImageItem {
  id: string;
  url: string;
  name: string;
  alt: string;
  uploadedAt: string;
}

interface ImageLibraryProps {
  images: ImageItem[];
  onUpdate: (images: ImageItem[]) => void;
}

export function ImageLibrary({ images, onUpdate }: ImageLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImage: ImageItem = {
          id: Date.now().toString() + Math.random(),
          url: event.target?.result as string,
          name: file.name,
          alt: file.name.replace(/\.[^/.]+$/, ''),
          uploadedAt: new Date().toISOString(),
        };
        onUpdate([...images, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      onUpdate(images.filter(img => img.id !== id));
      if (selectedImage?.id === id) {
        setSelectedImage(null);
      }
    }
  };

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleUpdateAlt = (id: string, alt: string) => {
    onUpdate(images.map(img => img.id === id ? { ...img, alt } : img));
    if (selectedImage?.id === id) {
      setSelectedImage({ ...selectedImage, alt });
    }
  };

  const filteredImages = images.filter(img =>
    img.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    img.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Media Library</h3>
          <p className="text-sm text-gray-500 mt-1">
            Upload and manage images for your website
          </p>
        </div>
        <div className="text-sm text-gray-500">
          {images.length} {images.length === 1 ? 'image' : 'images'}
        </div>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0073aa] transition-colors bg-gray-50">
        <input
          type="file"
          id="image-upload"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <label
          htmlFor="image-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-[#0073aa]/10 rounded-full flex items-center justify-center mb-4">
            <Upload className="text-[#0073aa]" size={28} />
          </div>
          <p className="text-base font-medium text-gray-900 mb-1">
            Upload Images
          </p>
          <p className="text-sm text-gray-500">
            Click to browse or drag and drop your images here
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Supports: JPG, PNG, GIF, SVG, WebP
          </p>
        </label>
      </div>

      {/* Search */}
      {images.length > 0 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search images..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0073aa] focus:border-transparent"
          />
        </div>
      )}

      {/* Image Grid */}
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`group relative border rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer ${
                selectedImage?.id === image.id
                  ? 'ring-2 ring-[#0073aa] border-[#0073aa]'
                  : 'border-gray-200'
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              {/* Overlay with actions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyUrl(image.url, image.id);
                    }}
                    className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    title="Copy URL"
                  >
                    {copiedId === image.id ? (
                      <Check size={18} className="text-green-600" />
                    ) : (
                      <Copy size={18} className="text-gray-700" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(image.id);
                    }}
                    className="p-2 bg-white rounded-lg hover:bg-red-50 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              </div>

              {/* Image name */}
              <div className="p-2 bg-white">
                <p className="text-xs text-gray-600 truncate" title={image.name}>
                  {image.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : images.length > 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search size={28} className="text-gray-400" />
          </div>
          <p className="text-gray-600">No images found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="text-center py-12 border border-gray-200 rounded-lg bg-gray-50">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <ImageIcon size={28} className="text-gray-400" />
          </div>
          <p className="text-gray-600 mb-2">No images uploaded yet</p>
          <p className="text-sm text-gray-500">Upload your first image to get started</p>
        </div>
      )}

      {/* Image Details Sidebar */}
      {selectedImage && (
        <div className="mt-6 border-t pt-6">
          <h4 className="text-base font-semibold text-gray-900 mb-4">Image Details</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Preview */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Details Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">File Name</label>
                <input
                  type="text"
                  value={selectedImage.name}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
                <input
                  type="text"
                  value={selectedImage.alt}
                  onChange={(e) => handleUpdateAlt(selectedImage.id, e.target.value)}
                  placeholder="Describe this image..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0073aa] text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Used for accessibility and SEO
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={selectedImage.url}
                    disabled
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-xs font-mono overflow-hidden"
                  />
                  <button
                    onClick={() => handleCopyUrl(selectedImage.url, selectedImage.id)}
                    className="px-4 py-2 bg-[#0073aa] text-white rounded-md hover:bg-[#005a87] transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    {copiedId === selectedImage.id ? (
                      <>
                        <Check size={16} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Uploaded</label>
                <input
                  type="text"
                  value={new Date(selectedImage.uploadedAt).toLocaleString()}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600 text-sm"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleDelete(selectedImage.id)}
                  className="w-full px-4 py-2.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Trash2 size={18} />
                  Delete Image
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="text-sm font-semibold text-blue-900 mb-2">💡 How to Use Images</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Upload images here and copy their URLs</li>
          <li>• Paste the URL in any image field in your content sections</li>
          <li>• Set alt text for better accessibility and SEO</li>
          <li>• Use the search to quickly find images</li>
        </ul>
      </div>
    </div>
  );
}
