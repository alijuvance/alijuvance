'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useAiKnowledge, KnowledgeChunk } from './AiContext';
import { Send, Sparkles, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
} 

export function AiAssistant() {
  const { language } = useLanguage();
  const { getStructuredKnowledge } = useAiKnowledge();
  // ... (keep state)
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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

    // Simulate AI "Thinking" Time (variable duration for realism)
    const thinkingTime = Math.random() * 1000 + 1000; // 1s - 2s

    setTimeout(() => {
      const response = generateSmartResponse(userMsg.content, getStructuredKnowledge(language), language);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, thinkingTime);
  };
 
  // ... (keep render return)
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
                  {language === 'fr' ? "Assistant IA d'Ali" : "Ali's AI Assistant"}
                </h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center text-zinc-500 dark:text-zinc-400">
                  <Sparkles className="w-12 h-12 mb-4 text-red-600" />
                  <p>{language === 'fr' ? "Posez-moi une question sur Ali !" : "Ask me anything about Ali!"}</p>
                  <p className="text-sm mt-2">{language === 'fr' ? "Je connais ses projets, compétences et expériences." : "I know about his projects, skills, and experience."}</p>
                </div>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg shadow-md ${
                      msg.role === 'user'
                        ? 'bg-red-600 text-white rounded-br-none'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-bl-none'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {msg.role === 'assistant' && <Bot className="w-4 h-4 mr-2 text-red-500" />}
                      {msg.role === 'user' && <User className="w-4 h-4 mr-2 text-white" />}
                      <span className="font-semibold text-sm">
                        {msg.role === 'user' ? (language === 'fr' ? 'Vous' : 'You') : (language === 'fr' ? 'Assistant' : 'Assistant')}
                      </span>
                    </div>
                    <p className="text-sm">{msg.content}</p>
                    <span className="block text-xs mt-1 opacity-75">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="max-w-[75%] p-3 rounded-lg shadow-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-bl-none">
                    <div className="flex items-center mb-1">
                      <Bot className="w-4 h-4 mr-2 text-red-500" />
                      <span className="font-semibold text-sm">
                        {language === 'fr' ? 'Assistant' : 'Assistant'}
                      </span>
                    </div>
                    <p className="text-sm animate-pulse">...</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center">
              <input
                type="text"
                className="flex-1 p-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder={language === 'fr' ? "Tapez votre message..." : "Type your message..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Advanced "Smart Match" Logic
 * Simulates a semantic search by scoring keywords and context.
 */
function generateSmartResponse(query: string, knowledge: KnowledgeChunk[], lang: 'fr' | 'en'): string {
  const q = query.toLowerCase().trim();
  
  // 1. Check for Greetings (Hardcoded for personality)
  if (['bonjour', 'hello', 'hi', 'salut', 'hey', 'coucou'].some(w => q.startsWith(w) && q.length < 15)) {
    const greetings = lang === 'fr' 
      ? ["Bonjour ! Comment puis-je vous aider ?", "Salut ! Ravi de vous voir. Une question sur mon parcours ?", "Hello ! Je suis prêt, posez-moi vos questions."]
      : ["Hello! How can I assist you?", "Hi there! Ready to answer your questions about Ali.", "Hey! What would you like to know?"];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // 2. Score Knowledge Chunks
  // We award points for every keyword match found in the user's query
  let bestMatch: KnowledgeChunk | null = null;
  let highestScore = 0;

  knowledge.forEach(chunk => {
    let score = 0;
    chunk.keywords.forEach(keyword => {
      if (q.includes(keyword.toLowerCase())) {
        score += 10; // Base score for keyword match
        
        // Bonus for exact phrases or important terms
        if (q === keyword.toLowerCase()) score += 5; 
      }
    });
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = chunk;
    }
  });

  // 3. Return Content or Fallback
  if (bestMatch && highestScore > 0) {
    // We found a relevant topic!
    // Add a randomized conversational prefix to make it feel less robotic
    const prefixes = lang === 'fr'
      ? ["Voici ce que je peux vous dire : ", "Absolument. ", "À ce sujet : ", ""]
      : ["Here is what I can tell you: ", "Absolutely. ", "Regarding that: ", ""];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    
    return prefix + (bestMatch as KnowledgeChunk).content;
  }

  // 4. Fallback (Unknown Query)
  const fallbacks = lang === 'fr'
    ? [
        "C'est une excellente question, mais je n'ai pas l'information précise ici. N'hésitez pas à contacter Ali directement !",
        "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ? Je connais bien ses Projets, Compétences et Expériences.",
        "Hmm, c'est pointu ! Je vous suggère d'envoyer un mail à Ali pour ça."
      ]
    : [
        "That's a great question, but I don't have that specific info right here. Feel free to contact Ali directly!",
        "I'm not sure I follow. Could you rephrase? I know a lot about his Projects, Skills, and Experience.",
        "Hmm, that's specific! I suggest emailing Ali for that detail."
      ];
  
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
