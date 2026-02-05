import { useState } from 'react';

interface NewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  substackUrl?: string;
  useSubstackEmbed?: boolean;
}

export function Newsletter({ 
  title = 'Stay close to the thinking',
  description = 'Occasional deep dives on AI governance, policy and literacy – no spam.',
  placeholder = 'Your email address',
  buttonText = 'Subscribe',
  substackUrl = 'https://www.techletter.co',
  useSubstackEmbed = true
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !substackUrl) return;

    setStatus('submitting');

    // Create a hidden form and submit to Substack
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `${substackUrl}/api/v1/free?nojs=true`;
    form.target = '_blank';
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.value = email;
    
    const redirectInput = document.createElement('input');
    redirectInput.type = 'hidden';
    redirectInput.name = 'redirect';
    redirectInput.value = window.location.href;
    
    form.appendChild(emailInput);
    form.appendChild(redirectInput);
    document.body.appendChild(form);
    
    // Submit form
    form.submit();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(form);
      setStatus('success');
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 100);
  };

  return (
    <div className="bg-white rounded-sm border border-[#E8E4DF]/50 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <h3 className="font-serif text-2xl font-medium text-[#1E2A45] mb-3">{title}</h3>
      <p className="font-sans text-[#1E2A45]/70 mb-6 leading-relaxed">
        {description}
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={status === 'submitting' || status === 'success'}
          className="flex-1 px-4 py-3 border border-[#E8E4DF] rounded-sm font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#184A5A] focus:border-[#184A5A] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={status === 'submitting' || status === 'success'}
          className="px-8 py-3.5 bg-[#184A5A] text-[#FEFBF8] border border-[#135268] rounded-sm font-sans font-medium text-sm shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#1a5a6f] hover:-translate-y-0.5 hover:shadow-[0_3px_6px_rgba(0,0,0,0.12)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {status === 'submitting' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : buttonText}
        </button>
      </form>
      
      {status === 'success' && (
        <div className="mt-4 p-3 bg-[#184A5A]/5 border border-[#184A5A]/20 rounded-sm">
          <p className="text-sm font-sans text-[#184A5A]">
            ✓ Almost there! Please check your email to confirm your subscription.
          </p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-sm">
          <p className="text-sm font-sans text-red-600">
            Something went wrong. Please try again.
          </p>
        </div>
      )}
    </div>
  );
}