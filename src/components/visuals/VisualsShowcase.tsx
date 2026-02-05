import { useState } from 'react';
import { TechnologyInk } from './TechnologyInk';
import { PolicyInk } from './PolicyInk';
import { SocietyInk } from './SocietyInk';
import { RailwayInk } from './RailwayInk';
import { InsightsInk } from './InsightsInk';

export function VisualsShowcase() {
  const [showAnimation, setShowAnimation] = useState(true);

  const visuals = [
    {
      name: 'Technology & AI Governance',
      id: 'hero-technology-ink',
      component: TechnologyInk,
      description: 'Network nodes representing interconnected AI systems and governance structures',
      usage: 'Hero sections, Services page, Technology cards',
    },
    {
      name: 'Policy & Regulation',
      id: 'section-policy-ink',
      component: PolicyInk,
      description: 'Balanced pillars symbolizing regulatory frameworks and stability',
      usage: 'Policy sections, Governance content, About page',
    },
    {
      name: 'Society & Impact',
      id: 'section-society-ink',
      component: SocietyInk,
      description: 'Radiating circles showing societal ripple effects and reach',
      usage: 'Impact sections, Team pages, Community content',
    },
    {
      name: 'Railway Framework (Junction)',
      id: 'hero-railway-ink',
      component: RailwayInk,
      description: 'Track junction representing decision points and strategic alignment',
      usage: 'Hero backgrounds, How We Work section, Framework explanations',
    },
    {
      name: 'Insights & Techletter',
      id: 'section-insights-ink',
      component: InsightsInk,
      description: 'Flowing streams representing knowledge flow and editorial content',
      usage: 'Blog headers, Insights page, Newsletter sections',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FEFBF8] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-serif text-5xl font-medium text-[#1E2A45] mb-4">
            STRATRI Modern Ink Dynamic Visuals
          </h1>
          <p className="text-lg text-[#1E2A45]/70 mb-6 max-w-2xl mx-auto">
            A library of minimal, Japanese ink-inspired illustrations designed for subtle animation and flexible usage across the STRATRI website.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showAnimation}
                onChange={(e) => setShowAnimation(e.target.checked)}
                className="w-4 h-4 accent-[#184A5A]"
              />
              <span className="text-sm font-medium text-[#1E2A45]">
                Show animations
              </span>
            </label>
          </div>
        </div>

        {/* Visual Grid */}
        <div className="space-y-16">
          {visuals.map((visual) => {
            const Component = visual.component;
            return (
              <div
                key={visual.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Visual Preview */}
                  <div className="bg-[#FEFBF8] p-8 flex items-center justify-center min-h-[400px]">
                    <div className="w-full max-w-md">
                      <Component animate={showAnimation} />
                    </div>
                  </div>

                  {/* Information */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-6">
                      <h2 className="font-serif text-3xl font-medium text-[#1E2A45] mb-3">
                        {visual.name}
                      </h2>
                      <p className="text-sm font-mono text-[#184A5A] bg-[#184A5A]/5 px-3 py-1 rounded inline-block mb-4">
                        {visual.id}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-[#1E2A45] mb-2 uppercase tracking-wide">
                          Description
                        </h3>
                        <p className="text-[#1E2A45]/70 leading-relaxed">
                          {visual.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#1E2A45] mb-2 uppercase tracking-wide">
                          Suggested Usage
                        </h3>
                        <p className="text-[#1E2A45]/70 leading-relaxed">
                          {visual.usage}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-[#1E2A45] mb-2 uppercase tracking-wide">
                          Animation Layers
                        </h3>
                        <ul className="space-y-1 text-sm text-[#1E2A45]/70">
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#9FB7C8]/30"></span>
                            Background: Subtle ink wash (slow, gentle movement)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#184A5A]/50"></span>
                            Mid-ground: Main structure (parallax shift)
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#1E2A45]/70"></span>
                            Foreground: Accent elements (floating motion)
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Color Palette */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-sm font-semibold text-[#1E2A45] mb-3 uppercase tracking-wide">
                        STRATRI Color Palette
                      </h3>
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded border border-gray-300" style={{ backgroundColor: '#FEFBF8' }}></div>
                          <span className="text-xs mt-1 font-mono">#FEFBF8</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded" style={{ backgroundColor: '#1E2A45' }}></div>
                          <span className="text-xs mt-1 font-mono">#1E2A45</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded" style={{ backgroundColor: '#184A5A' }}></div>
                          <span className="text-xs mt-1 font-mono">#184A5A</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded" style={{ backgroundColor: '#9FB7C8' }}></div>
                          <span className="text-xs mt-1 font-mono">#9FB7C8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Notes */}
        <div className="mt-16 bg-[#184A5A]/5 border border-[#184A5A]/20 rounded-lg p-8">
          <h2 className="font-serif text-2xl font-medium text-[#1E2A45] mb-4">
            Technical Implementation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-[#1E2A45]/80">
            <div>
              <h3 className="font-semibold text-[#1E2A45] mb-2">Vector Structure</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Clean SVG components (800×600 viewBox)</li>
                <li>Organized in 3 animation layers (bg/mid/fg)</li>
                <li>Brush texture filters for organic ink feel</li>
                <li>Radial/linear gradients for subtle washes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E2A45] mb-2">Animation</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>CSS keyframe animations (no heavy libraries)</li>
                <li>Gentle floating, parallax, scale effects</li>
                <li>6-12 second loops for calm movement</li>
                <li>Toggle animations on/off via props</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E2A45] mb-2">Flexibility</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Works as hero backgrounds or card images</li>
                <li>Responsive via className prop</li>
                <li>Croppable for different aspect ratios</li>
                <li>Maintains clarity at various sizes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E2A45] mb-2">Usage</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Import from /components/visuals</li>
                <li>Add className for sizing/positioning</li>
                <li>Set animate={'{true}'} for motion</li>
                <li>Upload to Image Library for CMS use</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-[#1E2A45] text-[#9FB7C8] rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <div className="mb-2 text-xs text-[#9FB7C8]/60">Example usage:</div>
          <pre>{`import { TechnologyInk } from './components/visuals';

// As hero background
<div className="relative h-96">
  <TechnologyInk className="absolute inset-0" animate={true} />
  <div className="relative z-10">Your content here</div>
</div>

// As section illustration
<TechnologyInk className="w-full max-w-md mx-auto" animate={true} />`}</pre>
        </div>
      </div>
    </div>
  );
}
