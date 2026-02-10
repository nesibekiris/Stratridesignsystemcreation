import { useState } from 'react';
import type { SiteContent } from '../../App';
import { Mail, Linkedin } from 'lucide-react';
import { ConnectInk } from '../visuals';

interface ConnectPageProps {
  content: SiteContent;
}

export function ConnectPage({ content }: ConnectPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 2-3 business days.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Connect Hero */}
      <section 
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" 
        style={{ backgroundColor: content.colors.cream }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <ConnectInk animate={true} className="w-full h-full" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl sm:text-6xl font-medium mb-6 tracking-tight" style={{ color: content.colors.dark, letterSpacing: '-0.05em' }}>
              Connect
            </h1>
            <p className="text-lg font-sans leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
              Connect with <strong className="font-bold">STRATRI</strong> for conversations on AI governance, responsible <span className="font-bold italic">technology</span> and <span className="font-bold italic">policy</span>.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-sm p-8 lg:p-10 mb-12">
            <h2 className="font-serif text-2xl font-medium mb-6" style={{ color: content.colors.dark }}>
              Send us a message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans font-medium mb-2" style={{ color: content.colors.dark }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 font-sans text-sm focus:outline-none focus:border-[#184A5A]"
                  style={{ backgroundColor: 'white' }}
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-sans font-medium mb-2" style={{ color: content.colors.dark }}>
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 font-sans text-sm focus:outline-none focus:border-[#184A5A]"
                  style={{ backgroundColor: 'white' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-sans font-medium mb-2" style={{ color: content.colors.dark }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 font-sans text-sm focus:outline-none focus:border-[#184A5A]"
                  style={{ backgroundColor: 'white' }}
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-sans font-medium mb-2" style={{ color: content.colors.dark }}>
                  What would you like to talk about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 font-sans text-sm focus:outline-none focus:border-[#184A5A]"
                  style={{ backgroundColor: 'white', color: formData.topic ? content.colors.dark : '#9ca3af' }}
                >
                  <option value="">Select a topic</option>
                  <option value="ai-strategy">AI Strategy & Maturity</option>
                  <option value="governance">AI Governance & Ethics</option>
                  <option value="research">Market & Policy Research</option>
                  <option value="policy">Policy & Government Affairs</option>
                  <option value="training">AI Literacy & Training</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-sans font-medium mb-2" style={{ color: content.colors.dark }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-sm border border-gray-300 font-sans text-sm focus:outline-none focus:border-[#184A5A] resize-none"
                  style={{ backgroundColor: 'white' }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-sm font-sans font-medium transition-all duration-200 hover:scale-[1.01]"
                style={{ 
                  backgroundColor: content.colors.dark,
                  color: content.colors.cream
                }}
              >
                Send message
              </button>
            </form>
          </div>

          {/* Direct Channels */}
          <div className="mb-12">
            <h3 className="font-serif text-xl font-medium mb-6 text-center" style={{ color: content.colors.dark }}>
              Direct channels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a 
                href={`mailto:${content.settings.email}`}
                className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-[#184A5A] transition-all hover:shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#184A5A]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#184A5A] transition-colors">
                  <Mail size={20} className="text-[#184A5A] group-hover:text-white transition-colors" />
                </div>
                <p className="font-sans text-sm font-medium" style={{ color: content.colors.dark }}>
                  Email
                </p>
              </a>

              <a 
                href={content.settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-[#184A5A] transition-all hover:shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#184A5A]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#184A5A] transition-colors">
                  <Linkedin size={20} className="text-[#184A5A] group-hover:text-white transition-colors" />
                </div>
                <p className="font-sans text-sm font-medium" style={{ color: content.colors.dark }}>
                  LinkedIn
                </p>
              </a>

              <a 
                href="https://techletter.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white border border-gray-200 rounded-sm hover:border-[#184A5A] transition-all hover:shadow-md text-center"
              >
                <div className="w-12 h-12 bg-[#184A5A]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#184A5A] transition-colors">
                  <Mail size={20} className="text-[#184A5A] group-hover:text-white transition-colors" />
                </div>
                <p className="font-sans text-sm font-medium" style={{ color: content.colors.dark }}>
                  Substack / Techletter
                </p>
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-[#184A5A]/5 border border-[#184A5A]/20 rounded-sm p-6 mb-12">
            <h3 className="font-serif text-lg font-medium mb-2" style={{ color: content.colors.dark }}>
              Response time
            </h3>
            <p className="font-sans text-sm leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
              We usually respond within 2-3 business days. For urgent inquiries, please mention that in your message.
            </p>
          </div>

          {/* Who We Work With */}
          <div className="text-center">
            <h3 className="font-serif text-xl font-medium mb-4" style={{ color: content.colors.dark }}>
              Who we work with
            </h3>
            <p className="font-sans text-base leading-relaxed" style={{ color: `${content.colors.dark}B3` }}>
              We work with organizations of all sizes – from startups to large enterprises, and from private sector to public institutions and civil society.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}