'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

/**
 * Contact Vision Section
 * "Donnons vie à votre vision"
 * Layout: Large Contact Form (Left) + Contact Details/Availability (Right)
 */

export function ContactVision() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Erreur lors de l\'envoi');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding py-20 bg-black text-white border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="container-section max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-secondary/60 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: FORM (2 Cols width) */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-[#0f0f10] border border-white/5">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <h3 className="text-xl font-bold">{t('contact.start')}</h3>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">{t('contact.name')}</label>
                  <GlowingInput 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder={t('contact.name.ph')} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">{t('contact.email')}</label>
                  <GlowingInput 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="votre@email.com" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">{t('contact.type')}</label>
                <GlowingInput 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder={t('contact.type.ph')} 
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">{t('contact.details')}</label>
                <GlowingInput 
                  name="message" 
                  multiline 
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder={t('contact.details.ph')} 
                  required 
                />
              </div>

              <div className="relative group w-full">
                {/* The "Glow" behind the button */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${status === 'success' ? 'from-green-500 to-emerald-500' : status === 'error' ? 'from-red-500 to-orange-500' : 'from-red-500 to-blue-500'} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200`} />
                
                <motion.button
                  whileHover={status === 'idle' ? "hover" : undefined}
                  whileTap={status === 'idle' ? { scale: 0.98 } : undefined}
                  disabled={status === 'loading' || status === 'success'}
                  className="relative w-full py-4 rounded-2xl bg-black border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden disabled:opacity-80 disabled:cursor-not-allowed"
                >
                  {/* ... specific visual elements ... */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <div className="relative z-10 flex items-center justify-center gap-2 text-white/90">
                     {status === 'loading' ? (
                       <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                     ) : status === 'success' ? (
                       <span className="text-green-400 font-bold flex items-center gap-2">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                         Message envoyé !
                       </span>
                     ) : status === 'error' ? (
                        <span className="text-red-400 font-bold">Erreur d&apos;envoi</span>
                     ) : (
                       <>
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                         <span className="font-title font-medium tracking-wide text-lg">{t('contact.send')}</span>
                       </>
                     )}
                  </div>
                </motion.button>
              </div>
            </form>
          </div>

          {/* RIGHT: INFO PANELS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">{t('contact.connect')}</h3>
            
            <a href="https://maps.google.com/?q=Madagascar" target="_blank" rel="noopener noreferrer" className="block">
              <InfoCard 
                icon={<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
                title={t('contact.location')}
                content={t('contact.location.val')}
                sub={t('contact.location.sub')}
              />
            </a>
            
            <a href="mailto:alijuvance@gmail.com" className="block">
              <InfoCard 
                icon={<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
                title="E-mail"
                content="alijuvance@gmail.com"
                sub={t('contact.email.sub')}
              />
            </a>

            <a href="https://wa.me/261381717108" target="_blank" rel="noopener noreferrer" className="block">
              <InfoCard 
                icon={<svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>}
                title="WhatsApp"
                content="+261 38 17 171 08"
                sub={t('contact.whatsapp.sub')}
              />
            </a>

            <InfoCard 
              icon={<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
              title={t('contact.availability')}
              content={t('contact.availability.val')}
              sub={t('contact.availability.sub')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, content, sub }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0f0f10] border border-white/5 hover:border-white/10 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-sm text-secondary mb-1">{title}</h5>
        <p className="font-bold text-white text-base mb-1">{content}</p>
        <p className="text-xs text-secondary/50">{sub}</p>
      </div>
    </div>
  )
}

function GlowingInput({ multiline, ...props }: any) {
  return (
    <div className="relative group w-full">
      {/* Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
      
      <div className="relative rounded-2xl bg-black border border-white/10 shadow-xl overflow-hidden">
        {/* Inner Highlights - Top Only */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
         {/* Spotlight Effect */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/10 blur-xl rounded-full mix-blend-screen pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100" />

        {multiline ? (
          <textarea 
            spellCheck={false}
            autoComplete="off"
            data-gramm="false"
            className="w-full p-4 bg-transparent text-white placeholder:text-white/20 focus:outline-none focus:ring-0 focus-visible:ring-0 relative z-10 resize-y min-h-[120px]" 
            {...props} 
          />
        ) : (
          <input 
            spellCheck={false}
            autoComplete="off"
            data-gramm="false"
            className="w-full p-4 bg-transparent text-white placeholder:text-white/20 focus:outline-none focus:ring-0 focus-visible:ring-0 relative z-10" 
            {...props} 
          />
        )}
      </div>
    </div>
  );
}
function CustomSelect({ options, placeholder }: { options: string[], placeholder: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleOpen = () => setIsOpen(!isOpen);
  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Trigger Button - Matches Input Style */}
      <div 
        onClick={toggleOpen}
        className="relative group w-full cursor-pointer"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
        <div className="relative rounded-2xl bg-black border border-white/10 shadow-xl overflow-hidden p-4 flex items-center justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <span className={`${selected ? 'text-white' : 'text-white/40'}`}>
              {selected || placeholder}
            </span>
            
            <motion.div 
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-white/40"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </motion.div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 rounded-2xl bg-[#0f0f10]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="p-2 space-y-1">
              {options.map((option, index) => (
                <motion.div
                  key={index}
                  onClick={() => selectOption(option)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors flex items-center justify-between group ${
                    selected === option ? 'bg-white/10 text-white' : 'text-secondary hover:bg-white/5 hover:text-white'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <span>{option}</span>
                  {selected === option && (
                    <motion.div layoutId="check">
                       <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Click outside closer (simple transparent overlay) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
