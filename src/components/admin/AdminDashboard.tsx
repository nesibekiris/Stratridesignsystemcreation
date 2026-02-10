import { useState } from 'react';
import { Home, Settings as SettingsIcon, Image, FileText, Palette, Menu as MenuIcon, BookOpen, Users, Mail, Layout, LogOut, User, Shield } from 'lucide-react';
import type { SiteContent } from '../../App';
import { HeroEditor } from './editors/HeroEditor';
import { ThreeRoadsEditor } from './editors/ThreeRoadsEditor';
import { ServicesEditor } from './editors/ServicesEditor';
import { HowWeWorkEditor } from './editors/HowWeWorkEditor';
import { ForTeamsEditor } from './editors/ForTeamsEditor';
import { InsightsEditor } from './editors/InsightsEditor';
import { TrainingsEditor } from './editors/TrainingsEditor';
import { NewsletterEditor } from './editors/NewsletterEditor';
import { NavigationEditor } from './editors/NavigationEditor';
import { SiteSettingsEditor } from './editors/SiteSettingsEditor';
import { ColorsEditor } from './editors/ColorsEditor';
import { ImageLibrary } from './ImageLibrary';
import { UserManagementEditor } from './editors/UserManagementEditor';

interface AdminDashboardProps {
  siteContent: SiteContent;
  onUpdateContent: (content: SiteContent) => void;
  onNavigateToSite: () => void;
  onLogout?: () => void;
  currentUser?: any;
}

type EditorTab = 'hero' | 'threeRoads' | 'services' | 'howWeWork' | 'forTeams' | 'insights' | 'trainings' | 'newsletter' | 'navigation' | 'settings' | 'colors' | 'images' | 'userManagement';

export function AdminDashboard({ siteContent, onUpdateContent, onNavigateToSite, onLogout, currentUser }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<EditorTab>('hero');
  const [content, setContent] = useState<SiteContent>(siteContent);

  const updateContent = (section: keyof SiteContent, data: any) => {
    const updated = { ...content, [section]: data };
    setContent(updated);
    onUpdateContent(updated);
  };

  const handleSave = () => {
    alert('✅ All changes saved successfully!');
  };

  // WordPress-style menu items
  const menuItems = [
    { id: 'hero' as EditorTab, label: 'Hero Section', icon: Layout },
    { id: 'threeRoads' as EditorTab, label: 'Three Roads', icon: FileText },
    { id: 'services' as EditorTab, label: 'Services', icon: BookOpen },
    { id: 'howWeWork' as EditorTab, label: 'How We Work', icon: Users },
    { id: 'forTeams' as EditorTab, label: 'For Teams', icon: Users },
    { id: 'insights' as EditorTab, label: 'Insights & Blog', icon: FileText },
    { id: 'trainings' as EditorTab, label: 'Trainings', icon: BookOpen },
    { id: 'newsletter' as EditorTab, label: 'Newsletter', icon: Mail },
    { id: 'navigation' as EditorTab, label: 'Navigation Menu', icon: MenuIcon },
    { id: 'images' as EditorTab, label: 'Image Library', icon: Image },
    { id: 'settings' as EditorTab, label: 'Site Settings', icon: SettingsIcon },
    { id: 'colors' as EditorTab, label: 'Brand Colors', icon: Palette },
    { id: 'userManagement' as EditorTab, label: 'User Management', icon: Shield },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* WordPress-style Sidebar */}
      <div className="w-64 bg-[#23282d] text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="font-serif text-2xl font-medium">STRATRI</h1>
          <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-3 mb-6">
            <button
              onClick={onNavigateToSite}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-sm bg-[#0073aa] hover:bg-[#005a87] transition-colors"
            >
              <Home size={18} />
              <span>View Website</span>
            </button>
          </div>

          <div className="px-3 mb-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">Content Sections</p>
          </div>

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-7 py-3 text-sm transition-colors ${
                activeTab === item.id
                  ? 'bg-[#0073aa] text-white border-l-4 border-[#00a0d2]'
                  : 'text-gray-300 hover:bg-[#32373c] hover:text-white'
              }`}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#0073aa] flex items-center justify-center text-sm font-semibold">
              N
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin</p>
              <p className="text-xs text-gray-400">Logged in</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-sm bg-[#0073aa] hover:bg-[#005a87] transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">Edit and manage your website content</p>
          </div>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-[#0073aa] text-white rounded-sm font-medium hover:bg-[#005a87] transition-colors shadow-sm"
          >
            Save Changes
          </button>
        </div>

        {/* Editor Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 p-8">
              {activeTab === 'hero' && (
                <HeroEditor content={content.hero} onUpdate={(data) => updateContent('hero', data)} />
              )}
              {activeTab === 'threeRoads' && (
                <ThreeRoadsEditor content={content.threeRoads} onUpdate={(data) => updateContent('threeRoads', data)} />
              )}
              {activeTab === 'services' && (
                <ServicesEditor content={content.services} onUpdate={(data) => updateContent('services', data)} />
              )}
              {activeTab === 'howWeWork' && (
                <HowWeWorkEditor content={content.howWeWork} onUpdate={(data) => updateContent('howWeWork', data)} />
              )}
              {activeTab === 'forTeams' && (
                <ForTeamsEditor content={content.forTeams} onUpdate={(data) => updateContent('forTeams', data)} />
              )}
              {activeTab === 'insights' && (
                <InsightsEditor content={content.insights} onUpdate={(data) => updateContent('insights', data)} />
              )}
              {activeTab === 'trainings' && (
                <TrainingsEditor content={content.trainings} onUpdate={(data) => updateContent('trainings', data)} />
              )}
              {activeTab === 'newsletter' && (
                <NewsletterEditor content={content.newsletter} onUpdate={(data) => updateContent('newsletter', data)} />
              )}
              {activeTab === 'navigation' && (
                <NavigationEditor content={content.navigation} onUpdate={(data) => updateContent('navigation', data)} />
              )}
              {activeTab === 'images' && (
                <ImageLibrary images={content.images || []} onUpdate={(data) => updateContent('images', data)} />
              )}
              {activeTab === 'settings' && (
                <SiteSettingsEditor content={content.settings} onUpdate={(data) => updateContent('settings', data)} />
              )}
              {activeTab === 'colors' && (
                <ColorsEditor content={content.colors} onUpdate={(data) => updateContent('colors', data)} />
              )}
              {activeTab === 'userManagement' && (
                <UserManagementEditor />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}