import { useState } from 'react';
import { X, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { ContentBlock } from '../../types/blocks';

interface BlockEditFormProps {
  block: ContentBlock;
  onSave: (block: ContentBlock) => void;
  onCancel: () => void;
  availableImages: Array<{ id: string; url: string; name: string; alt: string }>;
}

export function BlockEditForm({ block, onSave, onCancel, availableImages }: BlockEditFormProps) {
  const [formData, setFormData] = useState(block);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const updateData = (key: string, value: any) => {
    setFormData({
      ...formData,
      data: {
        ...formData.data,
        [key]: value,
      },
    });
  };

  const renderForm = () => {
    switch (block.type) {
      case 'hero':
        return <HeroForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'three-roads':
        return <ThreeRoadsForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'services':
        return <ServicesForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'how-we-work':
        return <HowWeWorkForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'for-teams':
        return <ForTeamsForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'trainings':
        return <TrainingsForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'newsletter':
        return <NewsletterForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'techletter-cta':
        return <TechletterCTAForm formData={formData} updateData={updateData} />;
      case 'quote':
        return <QuoteForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'text-image':
        return <TextImageForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      case 'railway-section':
        return <RailwaySectionForm formData={formData} updateData={updateData} availableImages={availableImages} />;
      default:
        return <div>Form not implemented for this block type</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8 flex items-start justify-center">
        <div className="bg-white rounded-sm shadow-2xl w-full max-w-4xl">
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-serif font-medium">Edit Block</h2>
              <button type="button" onClick={onCancel} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {renderForm()}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t bg-gray-50">
              <button type="button" onClick={onCancel} className="px-6 py-2 border border-gray-300 rounded-sm hover:bg-gray-100 font-medium">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 font-medium">
                Save Block
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Form Components for Each Block Type

function HeroForm({ formData, updateData, availableImages }: any) {
  return (
    <div className="space-y-6">
      <FormField label="Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="At the crossroads of technology, policy, and society"
        />
      </FormField>

      <FormField label="Subtitle" required>
        <textarea
          value={formData.data.subtitle}
          onChange={(e) => updateData('subtitle', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Supporting message..."
        />
      </FormField>

      <FormField label="Description">
        <textarea
          value={formData.data.description}
          onChange={(e) => updateData('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Additional details..."
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Primary Button Text">
          <input
            type="text"
            value={formData.data.primaryButtonText}
            onChange={(e) => updateData('primaryButtonText', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormField>
        <FormField label="Primary Button Link">
          <input
            type="text"
            value={formData.data.primaryButtonLink}
            onChange={(e) => updateData('primaryButtonLink', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="#section"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Secondary Button Text">
          <input
            type="text"
            value={formData.data.secondaryButtonText}
            onChange={(e) => updateData('secondaryButtonText', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormField>
        <FormField label="Secondary Button Link">
          <input
            type="text"
            value={formData.data.secondaryButtonLink}
            onChange={(e) => updateData('secondaryButtonLink', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="#section"
          />
        </FormField>
      </div>

      <FormField label="Visual Style">
        <select
          value={formData.data.visual}
          onChange={(e) => updateData('visual', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="technology">Technology (Network)</option>
          <option value="policy">Policy (Pillars)</option>
          <option value="society">Society (Circles)</option>
          <option value="railway">Railway (Junction)</option>
          <option value="insights">Insights (Streams)</option>
          <option value="none">None</option>
        </select>
      </FormField>

      <ImageSelector
        label="Background Image (optional)"
        value={formData.data.backgroundImage}
        onChange={(url) => updateData('backgroundImage', url)}
        availableImages={availableImages}
      />
    </div>
  );
}

function ThreeRoadsForm({ formData, updateData, availableImages }: any) {
  const updateRoad = (index: number, key: string, value: string) => {
    const newRoads = [...formData.data.roads];
    newRoads[index] = { ...newRoads[index], [key]: value };
    updateData('roads', newRoads);
  };

  return (
    <div className="space-y-6">
      <FormField label="Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Description 1">
        <textarea
          value={formData.data.description1}
          onChange={(e) => updateData('description1', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Description 2">
        <textarea
          value={formData.data.description2}
          onChange={(e) => updateData('description2', e.target.value)}
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Three Roads</label>
        {formData.data.roads.map((road: any, index: number) => (
          <div key={index} className="p-4 border border-gray-200 rounded-sm bg-gray-50">
            <div className="grid grid-cols-2 gap-4">
              <FormField label={`Road ${index + 1} Name`}>
                <input
                  type="text"
                  value={road.name}
                  onChange={(e) => updateRoad(index, 'name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>
              <FormField label="Description">
                <input
                  type="text"
                  value={road.description}
                  onChange={(e) => updateRoad(index, 'description', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>
            </div>
          </div>
        ))}
      </div>

      <FormField label="Conclusion">
        <textarea
          value={formData.data.conclusion}
          onChange={(e) => updateData('conclusion', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Visual Style">
        <select
          value={formData.data.visual}
          onChange={(e) => updateData('visual', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="railway">Railway (Junction)</option>
          <option value="none">None</option>
        </select>
      </FormField>
    </div>
  );
}

function ServicesForm({ formData, updateData }: any) {
  const addPillar = () => {
    const newPillars = [...formData.data.pillars, {
      id: `pillar-${Date.now()}`,
      title: 'New Service',
      subtitle: 'Brief description',
      points: ['Point 1', 'Point 2', 'Point 3'],
      link: '#',
    }];
    updateData('pillars', newPillars);
  };

  const updatePillar = (index: number, key: string, value: any) => {
    const newPillars = [...formData.data.pillars];
    newPillars[index] = { ...newPillars[index], [key]: value };
    updateData('pillars', newPillars);
  };

  const updatePillarPoint = (pillarIndex: number, pointIndex: number, value: string) => {
    const newPillars = [...formData.data.pillars];
    newPillars[pillarIndex].points[pointIndex] = value;
    updateData('pillars', newPillars);
  };

  const addPoint = (pillarIndex: number) => {
    const newPillars = [...formData.data.pillars];
    newPillars[pillarIndex].points.push('New point');
    updateData('pillars', newPillars);
  };

  const removePoint = (pillarIndex: number, pointIndex: number) => {
    const newPillars = [...formData.data.pillars];
    newPillars[pillarIndex].points.splice(pointIndex, 1);
    updateData('pillars', newPillars);
  };

  const removePillar = (index: number) => {
    const newPillars = formData.data.pillars.filter((_: any, i: number) => i !== index);
    updateData('pillars', newPillars);
  };

  return (
    <div className="space-y-6">
      <FormField label="Section Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">Services</label>
          <button type="button" onClick={addPillar} className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
            <Plus size={16} /> Add Service
          </button>
        </div>

        {formData.data.pillars.map((pillar: any, index: number) => (
          <div key={pillar.id} className="p-4 border border-gray-200 rounded-sm bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium">Service {index + 1}</h4>
              <button type="button" onClick={() => removePillar(index)} className="text-red-600 hover:bg-red-50 p-1 rounded">
                <Trash2 size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <FormField label="Title">
                <input
                  type="text"
                  value={pillar.title}
                  onChange={(e) => updatePillar(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>

              <FormField label="Subtitle">
                <input
                  type="text"
                  value={pillar.subtitle}
                  onChange={(e) => updatePillar(index, 'subtitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Key Points</label>
                  <button type="button" onClick={() => addPoint(index)} className="text-xs text-blue-600 hover:underline">
                    + Add Point
                  </button>
                </div>
                {pillar.points.map((point: string, pointIndex: number) => (
                  <div key={pointIndex} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => updatePillarPoint(index, pointIndex, e.target.value)}
                      className="flex-1 px-3 py-1 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="button" onClick={() => removePoint(index, pointIndex)} className="text-red-600 hover:bg-red-50 p-1 rounded">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>

              <FormField label="Link">
                <input
                  type="text"
                  value={pillar.link}
                  onChange={(e) => updatePillar(index, 'link', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#section"
                />
              </FormField>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HowWeWorkForm({ formData, updateData }: any) {
  const updateStep = (index: number, key: string, value: string) => {
    const newSteps = [...formData.data.steps];
    newSteps[index] = { ...newSteps[index], [key]: value };
    updateData('steps', newSteps);
  };

  const addStep = () => {
    const newSteps = [...formData.data.steps, {
      number: `0${formData.data.steps.length + 1}`,
      title: 'New Step',
      description: 'What happens in this phase',
    }];
    updateData('steps', newSteps);
  };

  const removeStep = (index: number) => {
    const newSteps = formData.data.steps.filter((_: any, i: number) => i !== index);
    updateData('steps', newSteps);
  };

  return (
    <div className="space-y-6">
      <FormField label="Section Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">Steps</label>
          <button type="button" onClick={addStep} className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
            <Plus size={16} /> Add Step
          </button>
        </div>

        {formData.data.steps.map((step: any, index: number) => (
          <div key={index} className="p-4 border border-gray-200 rounded-sm bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-medium">Step {index + 1}</h4>
              <button type="button" onClick={() => removeStep(index)} className="text-red-600 hover:bg-red-50 p-1 rounded">
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <FormField label="Number">
                <input
                  type="text"
                  value={step.number}
                  onChange={(e) => updateStep(index, 'number', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="01"
                />
              </FormField>
              <div className="col-span-2">
                <FormField label="Title">
                  <input
                    type="text"
                    value={step.title}
                    onChange={(e) => updateStep(index, 'title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </FormField>
              </div>
            </div>

            <FormField label="Description">
              <textarea
                value={step.description}
                onChange={(e) => updateStep(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </FormField>
          </div>
        ))}
      </div>
    </div>
  );
}

function ForTeamsForm({ formData, updateData }: any) {
  const updateItem = (index: number, value: string) => {
    const newItems = [...formData.data.items];
    newItems[index] = value;
    updateData('items', newItems);
  };

  const addItem = () => {
    updateData('items', [...formData.data.items, 'New benefit']);
  };

  const removeItem = (index: number) => {
    const newItems = formData.data.items.filter((_: any, i: number) => i !== index);
    updateData('items', newItems);
  };

  return (
    <div className="space-y-6">
      <FormField label="Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Introduction">
        <textarea
          value={formData.data.intro}
          onChange={(e) => updateData('intro', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium text-gray-700">Benefits / Items</label>
          <button type="button" onClick={addItem} className="text-sm text-blue-600 hover:underline">
            + Add Item
          </button>
        </div>
        {formData.data.items.map((item: string, index: number) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(index, e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="button" onClick={() => removeItem(index)} className="text-red-600 hover:bg-red-50 p-2 rounded">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <FormField label="Conclusion">
        <textarea
          value={formData.data.conclusion}
          onChange={(e) => updateData('conclusion', e.target.value)}
          rows={2}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Button Text">
        <input
          type="text"
          value={formData.data.buttonText}
          onChange={(e) => updateData('buttonText', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>
    </div>
  );
}

function TrainingsForm({ formData, updateData }: any) {
  const updateTraining = (index: number, key: string, value: string) => {
    const newItems = [...formData.data.items];
    newItems[index] = { ...newItems[index], [key]: value };
    updateData('items', newItems);
  };

  const addTraining = () => {
    updateData('items', [...formData.data.items, { title: 'New Training', outcome: 'What participants will learn' }]);
  };

  const removeTraining = (index: number) => {
    const newItems = formData.data.items.filter((_: any, i: number) => i !== index);
    updateData('items', newItems);
  };

  return (
    <div className="space-y-6">
      <FormField label="Section Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">Training Items</label>
          <button type="button" onClick={addTraining} className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
            <Plus size={16} /> Add Training
          </button>
        </div>

        {formData.data.items.map((training: any, index: number) => (
          <div key={index} className="p-4 border border-gray-200 rounded-sm bg-gray-50">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-medium">Training {index + 1}</h4>
              <button type="button" onClick={() => removeTraining(index)} className="text-red-600 hover:bg-red-50 p-1 rounded">
                <Trash2 size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <FormField label="Title">
                <input
                  type="text"
                  value={training.title}
                  onChange={(e) => updateTraining(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>

              <FormField label="Outcome / Description">
                <textarea
                  value={training.outcome}
                  onChange={(e) => updateTraining(index, 'outcome', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </FormField>
            </div>
          </div>
        ))}
      </div>

      <FormField label="Button Text">
        <input
          type="text"
          value={formData.data.buttonText}
          onChange={(e) => updateData('buttonText', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>
    </div>
  );
}

function NewsletterForm({ formData, updateData }: any) {
  return (
    <div className="space-y-6">
      <FormField label="Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Description">
        <textarea
          value={formData.data.description}
          onChange={(e) => updateData('description', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Email Placeholder">
        <input
          type="text"
          value={formData.data.placeholder}
          onChange={(e) => updateData('placeholder', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Button Text">
        <input
          type="text"
          value={formData.data.buttonText}
          onChange={(e) => updateData('buttonText', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>
    </div>
  );
}

function TechletterCTAForm({ formData, updateData }: any) {
  return (
    <div className="space-y-6">
      <FormField label="Description">
        <textarea
          value={formData.data.description}
          onChange={(e) => updateData('description', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Button Text">
        <input
          type="text"
          value={formData.data.buttonText}
          onChange={(e) => updateData('buttonText', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-sm">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This block automatically links to https://techletter.co and displays the Techletter logo.
        </p>
      </div>
    </div>
  );
}

function QuoteForm({ formData, updateData }: any) {
  return (
    <div className="space-y-6">
      <FormField label="Quote" required>
        <textarea
          value={formData.data.quote}
          onChange={(e) => updateData('quote', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your impactful quote goes here..."
        />
      </FormField>

      <FormField label="Author" required>
        <input
          type="text"
          value={formData.data.author}
          onChange={(e) => updateData('author', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Author Name"
        />
      </FormField>

      <FormField label="Role / Title (optional)">
        <input
          type="text"
          value={formData.data.role || ''}
          onChange={(e) => updateData('role', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="CEO, Company Name"
        />
      </FormField>
    </div>
  );
}

function TextImageForm({ formData, updateData, availableImages }: any) {
  return (
    <div className="space-y-6">
      <FormField label="Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Content">
        <textarea
          value={formData.data.content}
          onChange={(e) => updateData('content', e.target.value)}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Button Text (optional)">
          <input
            type="text"
            value={formData.data.buttonText || ''}
            onChange={(e) => updateData('buttonText', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </FormField>
        <FormField label="Button Link">
          <input
            type="text"
            value={formData.data.buttonLink || ''}
            onChange={(e) => updateData('buttonLink', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="#section"
          />
        </FormField>
      </div>

      <FormField label="Image Position">
        <select
          value={formData.data.imagePosition}
          onChange={(e) => updateData('imagePosition', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="right">Right</option>
          <option value="left">Left</option>
        </select>
      </FormField>

      <ImageSelector
        label="Image"
        value={formData.data.image}
        onChange={(url) => updateData('image', url)}
        availableImages={availableImages}
      />
    </div>
  );
}

function RailwaySectionForm({ formData, updateData }: any) {
  return (
    <div className="space-y-6">
      <FormField label="Title" required>
        <input
          type="text"
          value={formData.data.title}
          onChange={(e) => updateData('title', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Subtitle">
        <input
          type="text"
          value={formData.data.subtitle}
          onChange={(e) => updateData('subtitle', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <FormField label="Description">
        <textarea
          value={formData.data.description}
          onChange={(e) => updateData('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </FormField>

      <div className="p-4 bg-blue-50 border border-blue-200 rounded-sm">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> This block automatically displays the Railway framework visual.
        </p>
      </div>
    </div>
  );
}

// Helper Components

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function ImageSelector({ label, value, onChange, availableImages }: any) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="space-y-2">
        {value && (
          <div className="relative inline-block">
            <img src={value} alt="Selected" className="w-full h-32 object-cover rounded border" />
            <button
              type="button"
              onClick={() => onChange('')}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded hover:bg-red-600"
            >
              <X size={14} />
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => setShowGallery(true)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-50"
        >
          <ImageIcon size={16} />
          {value ? 'Change Image' : 'Select Image'}
        </button>
      </div>

      {showGallery && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-sm shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white">
              <h3 className="font-medium">Select Image</h3>
              <button onClick={() => setShowGallery(false)} className="p-2 hover:bg-gray-100 rounded">
                <X size={20} />
              </button>
            </div>
            <div className="p-4 grid grid-cols-3 gap-4">
              {availableImages.map((img: any) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => {
                    onChange(img.url);
                    setShowGallery(false);
                  }}
                  className="border rounded hover:border-blue-500 overflow-hidden"
                >
                  <img src={img.url} alt={img.alt} className="w-full h-32 object-cover" />
                  <p className="text-xs p-2 truncate">{img.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
