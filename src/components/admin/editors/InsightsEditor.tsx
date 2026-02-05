import { Plus, Trash2, FileText } from 'lucide-react';
import { InputField, TextareaField, ImageUploadField } from '../FormFields';

interface InsightsEditorProps {
  content: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    posts: Array<{
      id: string;
      title: string;
      summary: string;
      category: string;
      date: string;
      slug: string;
      readingTime: string;
      featuredImage?: string;
      illustrationType: string;
    }>;
  };
  onUpdate: (data: any) => void;
}

export function InsightsEditor({ content, onUpdate }: InsightsEditorProps) {
  const addPost = () => {
    const newPost = {
      id: Date.now().toString(),
      title: 'New Insight Post',
      summary: '',
      category: 'Category',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      slug: 'new-post',
      readingTime: '5 min read',
      illustrationType: 'network',
    };
    onUpdate({ ...content, posts: [...content.posts, newPost] });
  };

  const removePost = (id: string) => {
    onUpdate({ ...content, posts: content.posts.filter(p => p.id !== id) });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <FileText size={20} className="text-[#0073aa]" />
            Insights & Blog Posts
          </h3>
          <p className="text-sm text-gray-500">Manage your thought leadership content</p>
        </div>
        <button
          onClick={addPost}
          className="flex items-center gap-2 px-4 py-2 bg-[#0073aa] text-white rounded-md font-medium hover:bg-[#005a87] transition-colors"
        >
          <Plus size={18} />
          Add Post
        </button>
      </div>

      <div className="space-y-6">
        <InputField
          label="Section Title"
          value={content.title}
          onChange={(value) => onUpdate({ ...content, title: value })}
        />

        <InputField
          label="Subtitle"
          value={content.subtitle}
          onChange={(value) => onUpdate({ ...content, subtitle: value })}
        />

        <ImageUploadField
          label="Background Image (Optional)"
          value={content.backgroundImage}
          onChange={(value) => onUpdate({ ...content, backgroundImage: value })}
        />
      </div>

      <div className="pt-6 border-t border-gray-200 space-y-6">
        {content.posts.map((post, index) => (
          <div key={post.id} className="p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-semibold text-gray-900">Post {index + 1}</h4>
              <button
                onClick={() => removePost(post.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="space-y-5">
              <InputField
                label="Post Title"
                value={post.title}
                onChange={(value) => {
                  const updated = [...content.posts];
                  updated[index] = { ...updated[index], title: value };
                  onUpdate({ ...content, posts: updated });
                }}
              />

              <TextareaField
                label="Summary"
                value={post.summary}
                onChange={(value) => {
                  const updated = [...content.posts];
                  updated[index] = { ...updated[index], summary: value };
                  onUpdate({ ...content, posts: updated });
                }}
                rows={3}
              />

              <ImageUploadField
                label="Featured Image"
                value={post.featuredImage}
                onChange={(value) => {
                  const updated = [...content.posts];
                  updated[index] = { ...updated[index], featuredImage: value };
                  onUpdate({ ...content, posts: updated });
                }}
                help="Main image for this post"
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Category"
                  value={post.category}
                  onChange={(value) => {
                    const updated = [...content.posts];
                    updated[index] = { ...updated[index], category: value };
                    onUpdate({ ...content, posts: updated });
                  }}
                />

                <InputField
                  label="Reading Time"
                  value={post.readingTime}
                  onChange={(value) => {
                    const updated = [...content.posts];
                    updated[index] = { ...updated[index], readingTime: value };
                    onUpdate({ ...content, posts: updated });
                  }}
                  placeholder="5 min read"
                />
              </div>

              <InputField
                label="URL Slug"
                value={post.slug}
                onChange={(value) => {
                  const updated = [...content.posts];
                  updated[index] = { ...updated[index], slug: value };
                  onUpdate({ ...content, posts: updated });
                }}
                help="URL-friendly version of the title"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
