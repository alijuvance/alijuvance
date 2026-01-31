'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useAiKnowledge } from './AiContext';
import { Send, Sparkles, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function AiAssistant() {
  const { language, t } = useLanguage();
  const { getKnowledgeBase } = useAiKnowledge();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: language === 'fr' ? "Bonjour ! Je suis l'assistant virtuel d'Ali. Comment puis-je vous aider aujourd'hui ?" : "Hello! I am Ali's virtual assistant. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI Delay & Logic
    setTimeout(() => {
      const response = generateMockResponse(userMsg.content, getKnowledgeBase(language), language);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(220,38,38,0.3)] flex items-center justify-center group transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_50px_rgba(220,38,38,0.5)]"
      >
        <div className="relative">
             {/* Red Stars / Sparkles as requested */}
             <Sparkles className="w-8 h-8 text-red-500 fill-red-500/20" />
             <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-pulse" />
        </div>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-4 md:right-8 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center border border-red-500/30">
                  <Bot className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Ali's Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-400">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white/10' : 'bg-red-900/20 border border-red-500/20'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Sparkles className="w-4 h-4 text-red-500" />}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-white text-black rounded-tr-none'
                        : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-900/20 border border-red-500/20 flex items-center justify-center shrink-0">
                     <Sparkles className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/40 border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="relative flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={language === 'fr' ? "Posez une question..." : "Ask me anything..."}
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all pr-12"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-red-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Basic Logic to simulate AI responses based on keywords
 * In a real app, this would be a server action calling OpenAI
 */
function generateMockResponse(query: string, knowledge: string, lang: 'fr' | 'en'): string {
  const q = query.toLowerCase();
  
  // Basic Keyword Matching
  if (q.includes('contact') || q.includes('email') || q.includes('mail')) {
    return lang === 'fr' 
      ? "Vous pouvez contacter Ali par email à alijuvance@gmail.com. Il est généralement très réactif !"
      : "You can reach Ali at alijuvance@gmail.com. He is usually very responsive!";
  }
  
  if (q.includes('skill') || q.includes('compétence') || q.includes('techno') || q.includes('stack')) {
    return lang === 'fr'
      ? "Ali est expert en Fullstack (React, Node.js), Blockchain (Solidity, Ethereum), et Cloud. Il s'intéresse aussi beaucoup au Design et à l'IA."
      : "Ali is an expert in Fullstack dev (React, Node.js), Blockchain, and Cloud platforms. He also has a strong focus on UI Design and AI.";
  }

  if (q.includes('projet') || q.includes('project') || q.includes('portfolio') || q.includes('work')) {
    return lang === 'fr'
      ? "Ali a travaillé sur des projets impressionnants comme un système d'authentification de diplômes via Blockchain et un portail RH complet. Consultez la section 'Projets' pour en voir plus !"
      : "Ali has worked on impressive projects like a Blockchain Diploma Authentication system and a full HR Portal. Check out the Projects section for more!";
  }

  if (q.includes('prix') || q.includes('price') || q.includes('rate') || q.includes('tarif')) {
    return lang === 'fr'
      ? "Pour les tarifs, le mieux est de contacter Ali directement pour discuter de votre projet spécifique."
      : "For rates, it's best to contact Ali directly to discuss your specific project needs.";
  }

  // Default
  return lang === 'fr'
    ? "C'est une excellente question / remarque. Ali est un développeur passionné qui cherche toujours à repousser les limites. Vous devriez le contacter pour en discuter !"
    : "That's a great question. Ali is a passionate developer always looking to push boundaries. You should definitely get in touch with him!";
}
