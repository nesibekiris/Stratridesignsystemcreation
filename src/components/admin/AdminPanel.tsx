import { useState } from 'react';
import { ChevronDown, ChevronRight, Save, X, Plus, Trash2, Settings, Layout } from 'lucide-react';
import type { SiteContent } from '../../App';
import { PageBuilder } from './PageBuilder';
import { ContentBlock } from '../../types/blocks';

interface AdminPanelProps {
  siteContent: SiteContent;
  onUpdateContent: (content: SiteContent) => void;
  onExitAdmin: () => void;
  blocks: ContentBlock[];
  onUpdateBlocks: (blocks: ContentBlock[]) => void;
}

type Section = 'pageBuilder' | 'hero' | 'threeRoads' | 'services' | 'howWeWork' | 'forTeams' | 'insights' | 'trainings' | 'newsletter' | 'settings' | 'navigation' | 'colors';

export function AdminPanel({ siteContent, onUpdateContent, onExitAdmin, blocks, onUpdateBlocks }: AdminPanelProps) {
  const [expandedSection, setExpandedSection] = useState<Section | null>('pageBuilder');
  const [content, setContent] = useState<SiteContent>(siteContent);

  const toggleSection = (section: Section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const updateContent = (section: keyof SiteContent, data: any) => {
    const updated = { ...content, [section]: data };
    setContent(updated);
    onUpdateContent(updated);
  };

  const handleSave = () => {
    alert('All changes saved successfully! ✅');
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-[#184A5A]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-serif text-xl font-medium text-white">Admin Panel</h2>
          <button
            onClick={onExitAdmin}
            className="p-2 text-white hover:bg-white/10 rounded-sm transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <button
          onClick={handleSave}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#184A5A] rounded-sm font-medium hover:bg-gray-100 transition-colors"
        >
          <Save size={18} />
          Save All Changes
        </button>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
        {/* Page Builder Section */}
        <SectionAccordion
          title="Page Builder"
          isExpanded={expandedSection === 'pageBuilder'}
          onToggle={() => toggleSection('pageBuilder')}
        >
          <PageBuilder
            blocks={blocks}
            onUpdateBlocks={onUpdateBlocks}
            availableImages={content.images}
          />
        </SectionAccordion>

        {/* Hero Section */}
        <SectionAccordion
          title="Hero Section"
          isExpanded={expandedSection === 'hero'}
          onToggle={() => toggleSection('hero')}
        >
          <div className="space-y-4">
            <TextareaField
              label="Main Title"
              value={content.hero.title}
              onChange={(value) => updateContent('hero', { ...content.hero, title: value })}
              rows={3}
            />
            <TextareaField
              label="Subtitle"
              value={content.hero.subtitle}
              onChange={(value) => updateContent('hero', { ...content.hero, subtitle: value })}
              rows={3}
            />
            <TextareaField
              label="Description"
              value={content.hero.description}
              onChange={(value) => updateContent('hero', { ...content.hero, description: value })}
              rows={4}
            />
            <InputField
              label="Primary Button Text"
              value={content.hero.primaryButtonText}
              onChange={(value) => updateContent('hero', { ...content.hero, primaryButtonText: value })}
            />
            <InputField
              label="Primary Button Link"
              value={content.hero.primaryButtonLink}
              onChange={(value) => updateContent('hero', { ...content.hero, primaryButtonLink: value })}
            />
            <InputField
              label="Secondary Button Text"
              value={content.hero.secondaryButtonText}
              onChange={(value) => updateContent('hero', { ...content.hero, secondaryButtonText: value })}
            />
            <InputField
              label="Secondary Button Link"
              value={content.hero.secondaryButtonLink}
              onChange={(value) => updateContent('hero', { ...content.hero, secondaryButtonLink: value })}
            />
          </div>
        </SectionAccordion>

        {/* Three Roads Section */}
        <SectionAccordion
          title="Three Roads Section"
          isExpanded={expandedSection === 'threeRoads'}
          onToggle={() => toggleSection('threeRoads')}
        >
          <div className="space-y-4">
            <InputField
              label="Section Title"
              value={content.threeRoads.title}
              onChange={(value) => updateContent('threeRoads', { ...content.threeRoads, title: value })}
            />
            <TextareaField
              label="Description 1"
              value={content.threeRoads.description1}
              onChange={(value) => updateContent('threeRoads', { ...content.threeRoads, description1: value })}
              rows={3}
            />
            <TextareaField
              label="Description 2"
              value={content.threeRoads.description2}
              onChange={(value) => updateContent('threeRoads', { ...content.threeRoads, description2: value })}
              rows={2}
            />
            <TextareaField
              label="Conclusion"
              value={content.threeRoads.conclusion}
              onChange={(value) => updateContent('threeRoads', { ...content.threeRoads, conclusion: value })}
              rows={3}
            />
            <div className="pt-3 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-3">The Three Roads</label>
              {content.threeRoads.roads.map((road, index) => (
                <div key={index} className="mb-4 p-3 bg-gray-50 rounded-sm">
                  <InputField
                    label={`Road ${index + 1} Name`}
                    value={road.name}
                    onChange={(value) => {
                      const updated = [...content.threeRoads.roads];
                      updated[index] = { ...updated[index], name: value };
                      updateContent('threeRoads', { ...content.threeRoads, roads: updated });
                    }}
                  />
                  <div className="mt-2">
                    <InputField
                      label="Description"
                      value={road.description}
                      onChange={(value) => {
                        const updated = [...content.threeRoads.roads];
                        updated[index] = { ...updated[index], description: value };
                        updateContent('threeRoads', { ...content.threeRoads, roads: updated });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionAccordion>

        {/* Services Section */}
        <SectionAccordion
          title="Services / Pillars"
          isExpanded={expandedSection === 'services'}
          onToggle={() => toggleSection('services')}
        >
          <div className="space-y-4">
            <InputField
              label="Section Title"
              value={content.services.title}
              onChange={(value) => updateContent('services', { ...content.services, title: value })}
            />
            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">Service Pillars</label>
                <button
                  onClick={() => {
                    const newPillar = {
                      id: Date.now().toString(),
                      title: 'New Service',
                      subtitle: '',
                      icon: 'strategy',
                      points: ['Point 1', 'Point 2', 'Point 3'],
                      link: '#',
                    };
                    updateContent('services', { ...content.services, pillars: [...content.services.pillars, newPillar] });
                  }}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#184A5A] hover:bg-gray-100 rounded-sm"
                >
                  <Plus size={14} />
                  Add Pillar
                </button>
              </div>
              {content.services.pillars.map((pillar, index) => (
                <div key={pillar.id} className="mb-4 p-3 bg-gray-50 rounded-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500">Pillar {index + 1}</span>
                    <button
                      onClick={() => {
                        const updated = content.services.pillars.filter(p => p.id !== pillar.id);
                        updateContent('services', { ...content.services, pillars: updated });
                      }}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <InputField
                    label="Title"
                    value={pillar.title}
                    onChange={(value) => {
                      const updated = [...content.services.pillars];
                      updated[index] = { ...updated[index], title: value };
                      updateContent('services', { ...content.services, pillars: updated });
                    }}
                  />
                  <div className="mt-2">
                    <InputField
                      label="Subtitle"
                      value={pillar.subtitle}
                      onChange={(value) => {
                        const updated = [...content.services.pillars];
                        updated[index] = { ...updated[index], subtitle: value };
                        updateContent('services', { ...content.services, pillars: updated });
                      }}
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Points</label>
                    {pillar.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="mb-2">
                        <textarea
                          value={point}
                          onChange={(e) => {
                            const updated = [...content.services.pillars];
                            const updatedPoints = [...updated[index].points];
                            updatedPoints[pointIndex] = e.target.value;
                            updated[index] = { ...updated[index], points: updatedPoints };
                            updateContent('services', { ...content.services, pillars: updated });
                          }}
                          className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#184A5A]"
                          rows={2}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionAccordion>

        {/* How We Work */}
        <SectionAccordion
          title="How We Work"
          isExpanded={expandedSection === 'howWeWork'}
          onToggle={() => toggleSection('howWeWork')}
        >
          <div className="space-y-4">
            <InputField
              label="Section Title"
              value={content.howWeWork.title}
              onChange={(value) => updateContent('howWeWork', { ...content.howWeWork, title: value })}
            />
            {content.howWeWork.steps.map((step, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-sm">
                <label className="block text-xs font-medium text-gray-500 mb-2">Step {step.number}</label>
                <InputField
                  label="Title"
                  value={step.title}
                  onChange={(value) => {
                    const updated = [...content.howWeWork.steps];
                    updated[index] = { ...updated[index], title: value };
                    updateContent('howWeWork', { ...content.howWeWork, steps: updated });
                  }}
                />
                <div className="mt-2">
                  <TextareaField
                    label="Description"
                    value={step.description}
                    onChange={(value) => {
                      const updated = [...content.howWeWork.steps];
                      updated[index] = { ...updated[index], description: value };
                      updateContent('howWeWork', { ...content.howWeWork, steps: updated });
                    }}
                    rows={4}
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionAccordion>

        {/* For Teams */}
        <SectionAccordion
          title="For Teams Section"
          isExpanded={expandedSection === 'forTeams'}
          onToggle={() => toggleSection('forTeams')}
        >
          <div className="space-y-4">
            <InputField
              label="Section Title"
              value={content.forTeams.title}
              onChange={(value) => updateContent('forTeams', { ...content.forTeams, title: value })}
            />
            <TextareaField
              label="Introduction"
              value={content.forTeams.intro}
              onChange={(value) => updateContent('forTeams', { ...content.forTeams, intro: value })}
              rows={3}
            />
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">List Items</label>
                <button
                  onClick={() => {
                    updateContent('forTeams', { ...content.forTeams, items: [...content.forTeams.items, 'New item'] });
                  }}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#184A5A] hover:bg-gray-100 rounded-sm"
                >
                  <Plus size={14} />
                  Add
                </button>
              </div>
              {content.forTeams.items.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <textarea
                    value={item}
                    onChange={(e) => {
                      const updated = [...content.forTeams.items];
                      updated[index] = e.target.value;
                      updateContent('forTeams', { ...content.forTeams, items: updated });
                    }}
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#184A5A]"
                    rows={2}
                  />
                  <button
                    onClick={() => {
                      const updated = content.forTeams.items.filter((_, i) => i !== index);
                      updateContent('forTeams', { ...content.forTeams, items: updated });
                    }}
                    className="p-2 text-red-600 hover:bg-red-50 rounded h-fit"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
            <TextareaField
              label="Conclusion"
              value={content.forTeams.conclusion}
              onChange={(value) => updateContent('forTeams', { ...content.forTeams, conclusion: value })}
              rows={2}
            />
            <InputField
              label="Button Text"
              value={content.forTeams.buttonText}
              onChange={(value) => updateContent('forTeams', { ...content.forTeams, buttonText: value })}
            />
          </div>
        </SectionAccordion>

        {/* Insights */}
        <SectionAccordion
          title="Insights"
          isExpanded={expandedSection === 'insights'}
          onToggle={() => toggleSection('insights')}
        >
          <div className="space-y-4">
            <InputField
              label="Section Title"
              value={content.insights.title}
              onChange={(value) => updateContent('insights', { ...content.insights, title: value })}
            />
            <InputField
              label="Subtitle"
              value={content.insights.subtitle}
              onChange={(value) => updateContent('insights', { ...content.insights, subtitle: value })}
            />
            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">Posts</label>
                <button
                  onClick={() => {
                    const newPost = {
                      id: Date.now().toString(),
                      title: 'New Post',
                      summary: '',
                      category: 'Category',
                      date: new Date().toISOString().split('T')[0],
                      slug: 'new-post',
                      readingTime: '5 min read',
                      illustrationType: 'network',
                    };
                    updateContent('insights', { ...content.insights, posts: [...content.insights.posts, newPost] });
                  }}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#184A5A] hover:bg-gray-100 rounded-sm"
                >
                  <Plus size={14} />
                  Add Post
                </button>
              </div>
              {content.insights.posts.map((post, index) => (
                <div key={post.id} className="mb-4 p-3 bg-gray-50 rounded-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500">Post {index + 1}</span>
                    <button
                      onClick={() => {
                        const updated = content.insights.posts.filter(p => p.id !== post.id);
                        updateContent('insights', { ...content.insights, posts: updated });
                      }}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <InputField
                    label="Title"
                    value={post.title}
                    onChange={(value) => {
                      const updated = [...content.insights.posts];
                      updated[index] = { ...updated[index], title: value };
                      updateContent('insights', { ...content.insights, posts: updated });
                    }}
                  />
                  <div className="mt-2">
                    <TextareaField
                      label="Summary"
                      value={post.summary}
                      onChange={(value) => {
                        const updated = [...content.insights.posts];
                        updated[index] = { ...updated[index], summary: value };
                        updateContent('insights', { ...content.insights, posts: updated });
                      }}
                      rows={3}
                    />
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <InputField
                      label="Category"
                      value={post.category}
                      onChange={(value) => {
                        const updated = [...content.insights.posts];
                        updated[index] = { ...updated[index], category: value };
                        updateContent('insights', { ...content.insights, posts: updated });
                      }}
                    />
                    <InputField
                      label="Reading Time"
                      value={post.readingTime}
                      onChange={(value) => {
                        const updated = [...content.insights.posts];
                        updated[index] = { ...updated[index], readingTime: value };
                        updateContent('insights', { ...content.insights, posts: updated });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionAccordion>

        {/* Trainings */}
        <SectionAccordion
          title="Trainings"
          isExpanded={expandedSection === 'trainings'}
          onToggle={() => toggleSection('trainings')}
        >
          <div className="space-y-4">
            <InputField
              label="Section Title"
              value={content.trainings.title}
              onChange={(value) => updateContent('trainings', { ...content.trainings, title: value })}
            />
            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-medium text-gray-700">Training Items</label>
                <button
                  onClick={() => {
                    const newItem = { title: 'New Training', outcome: 'Outcome description' };
                    updateContent('trainings', { ...content.trainings, items: [...content.trainings.items, newItem] });
                  }}
                  className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#184A5A] hover:bg-gray-100 rounded-sm"
                >
                  <Plus size={14} />
                  Add
                </button>
              </div>
              {content.trainings.items.map((item, index) => (
                <div key={index} className="mb-4 p-3 bg-gray-50 rounded-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500">Training {index + 1}</span>
                    <button
                      onClick={() => {
                        const updated = content.trainings.items.filter((_, i) => i !== index);
                        updateContent('trainings', { ...content.trainings, items: updated });
                      }}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <InputField
                    label="Title"
                    value={item.title}
                    onChange={(value) => {
                      const updated = [...content.trainings.items];
                      updated[index] = { ...updated[index], title: value };
                      updateContent('trainings', { ...content.trainings, items: updated });
                    }}
                  />
                  <div className="mt-2">
                    <InputField
                      label="Outcome"
                      value={item.outcome}
                      onChange={(value) => {
                        const updated = [...content.trainings.items];
                        updated[index] = { ...updated[index], outcome: value };
                        updateContent('trainings', { ...content.trainings, items: updated });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <InputField
              label="Button Text"
              value={content.trainings.buttonText}
              onChange={(value) => updateContent('trainings', { ...content.trainings, buttonText: value })}
            />
          </div>
        </SectionAccordion>

        {/* Newsletter */}
        <SectionAccordion
          title="Newsletter"
          isExpanded={expandedSection === 'newsletter'}
          onToggle={() => toggleSection('newsletter')}
        >
          <div className="space-y-4">
            <InputField
              label="Title"
              value={content.newsletter.title}
              onChange={(value) => updateContent('newsletter', { ...content.newsletter, title: value })}
            />
            <TextareaField
              label="Description"
              value={content.newsletter.description}
              onChange={(value) => updateContent('newsletter', { ...content.newsletter, description: value })}
              rows={3}
            />
            <InputField
              label="Input Placeholder"
              value={content.newsletter.placeholder}
              onChange={(value) => updateContent('newsletter', { ...content.newsletter, placeholder: value })}
            />
            <InputField
              label="Button Text"
              value={content.newsletter.buttonText}
              onChange={(value) => updateContent('newsletter', { ...content.newsletter, buttonText: value })}
            />
          </div>
        </SectionAccordion>

        {/* Navigation */}
        <SectionAccordion
          title="Navigation"
          isExpanded={expandedSection === 'navigation'}
          onToggle={() => toggleSection('navigation')}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">Menu Items</label>
              <button
                onClick={() => {
                  updateContent('navigation', [...content.navigation, { name: 'New Link', path: '#' }]);
                }}
                className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-[#184A5A] hover:bg-gray-100 rounded-sm"
              >
                <Plus size={14} />
                Add
              </button>
            </div>
            {content.navigation.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500">Item {index + 1}</span>
                  <button
                    onClick={() => {
                      const updated = content.navigation.filter((_, i) => i !== index);
                      updateContent('navigation', updated);
                    }}
                    className="p-1 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <InputField
                  label="Link Text"
                  value={item.name}
                  onChange={(value) => {
                    const updated = [...content.navigation];
                    updated[index] = { ...updated[index], name: value };
                    updateContent('navigation', updated);
                  }}
                />
                <div className="mt-2">
                  <InputField
                    label="Link URL"
                    value={item.path}
                    onChange={(value) => {
                      const updated = [...content.navigation];
                      updated[index] = { ...updated[index], path: value };
                      updateContent('navigation', updated);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionAccordion>

        {/* Settings */}
        <SectionAccordion
          title="Site Settings"
          isExpanded={expandedSection === 'settings'}
          onToggle={() => toggleSection('settings')}
        >
          <div className="space-y-4">
            <InputField
              label="Site Name"
              value={content.settings.siteName}
              onChange={(value) => updateContent('settings', { ...content.settings, siteName: value })}
            />
            <InputField
              label="Tagline"
              value={content.settings.tagline}
              onChange={(value) => updateContent('settings', { ...content.settings, tagline: value })}
            />
            <InputField
              label="Email"
              value={content.settings.email}
              onChange={(value) => updateContent('settings', { ...content.settings, email: value })}
            />
            <InputField
              label="LinkedIn URL"
              value={content.settings.linkedinUrl}
              onChange={(value) => updateContent('settings', { ...content.settings, linkedinUrl: value })}
            />
          </div>
        </SectionAccordion>

        {/* Brand Colors */}
        <SectionAccordion
          title="Brand Colors"
          isExpanded={expandedSection === 'colors'}
          onToggle={() => toggleSection('colors')}
        >
          <div className="space-y-4">
            <ColorField
              label="Cream (Background)"
              value={content.colors.cream}
              onChange={(value) => updateContent('colors', { ...content.colors, cream: value })}
            />
            <ColorField
              label="Dark (Text)"
              value={content.colors.dark}
              onChange={(value) => updateContent('colors', { ...content.colors, dark: value })}
            />
            <ColorField
              label="Accent (Primary)"
              value={content.colors.accent}
              onChange={(value) => updateContent('colors', { ...content.colors, accent: value })}
            />
            <ColorField
              label="Light (Secondary)"
              value={content.colors.light}
              onChange={(value) => updateContent('colors', { ...content.colors, light: value })}
            />
          </div>
        </SectionAccordion>
      </div>
    </div>
  );
}

// Helper Components
function SectionAccordion({ title, isExpanded, onToggle, children }: any) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{title}</span>
        {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isExpanded && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

function InputField({ label, value, onChange }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#184A5A] focus:border-transparent text-sm"
      />
    </div>
  );
}

function TextareaField({ label, value, onChange, rows = 3 }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#184A5A] focus:border-transparent text-sm"
      />
    </div>
  );
}

function ColorField({ label, value, onChange }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-16 border border-gray-300 rounded-md cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#184A5A] focus:border-transparent text-sm font-mono"
        />
      </div>
    </div>
  );
}