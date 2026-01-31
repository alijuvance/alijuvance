'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { Send, Sparkles, X, Bot, User } from 'lucide-react';
import { useChat } from 'ai/react';

export function AiAssistant() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Vercel AI SDK Hook
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: language === 'fr' 
          ? "Bonjour ! Je suis l'assistant AI d'Ali (Propulsé par GPT-4). Posez-moi des questions complexes sur son parcours ou ses compétences !" 
          : "Hello! I am Ali's AI Assistant (Powered by GPT-4). Ask me complex questions about his background or skills!"
      }
    ]
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 md:w-16 md:h-16 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-red-600/10 flex items-center justify-center group transition-all duration-300"
      >
        <div className="relative flex items-center justify-center">
             {/* Red Sparkles */}
             <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-red-600 fill-red-600/10" />
             <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-8 z-50 w-80 md:w-96 h-[500px] bg-white dark:bg-zinc-900 rounded-lg shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center">
                <Bot className="w-6 h-6 mr-2 text-red-600" />
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">
                  {language === 'fr' ? "Assistant IA (GPT-4)" : "AI Assistant (GPT-4)"}
                </h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg shadow-md ${
                      msg.role === 'user'
                        ? 'bg-red-600 text-white rounded-br-none'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-bl-none border border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {msg.role === 'assistant' && <Bot className="w-4 h-4 mr-2 text-red-500" />}
                      {msg.role === 'user' && <User className="w-4 h-4 mr-2 text-white" />}
                      <span className="font-semibold text-xs opacity-70">
                        {msg.role === 'user' ? (language === 'fr' ? 'Vous' : 'You') : 'AI'}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="max-w-[75%] p-3 rounded-lg shadow-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-bl-none">
                    <div className="flex items-center mb-1">
                      <Bot className="w-4 h-4 mr-2 text-red-500" />
                      <span className="font-semibold text-sm">AI</span>
                    </div>
                    <div className="flex gap-1 h-4 items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
              <input
                type="text"
                className="flex-1 p-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={language === 'fr' ? "Posez une question complexe..." : "Ask a complex question..."}
                value={input}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
