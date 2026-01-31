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
// ... imports
import { useAiKnowledge, KnowledgeChunk } from './AiContext';
// ... 

export function AiAssistant() {
  const { language } = useLanguage();
  const { getStructuredKnowledge } = useAiKnowledge();
  // ... (keep state)

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
