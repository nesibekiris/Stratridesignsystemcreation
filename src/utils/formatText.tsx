/**
 * Text formatting utilities for STRATRI website
 * Automatically formats special keywords (STRATRI, technology, policy, society)
 */

import React from 'react';

/**
 * Formats text to make "STRATRI" bold
 * @param text - The text to format
 * @returns React nodes with STRATRI in bold
 */
export function formatSTRATRI(text: string): React.ReactNode {
  if (!text) return text;
  
  // Split by STRATRI (case-insensitive) while preserving the original case
  const parts = text.split(/(STRATRI|Stratri|stratri)/gi);
  
  return parts.map((part, index) => {
    if (part.toLowerCase() === 'stratri') {
      return <strong key={index} className="font-bold font-serif">{part}</strong>;
    }
    return part;
  });
}

/**
 * Formats text to make technology/policy/society use Cormorant Garamond
 * @param text - The text to format
 * @returns React nodes with keywords formatted
 */
export function formatKeywords(text: string): React.ReactNode {
  if (!text) return text;
  
  const keywords = ['technology', 'policy', 'society'];
  
  // Create a regex pattern that matches any of the keywords (case-insensitive)
  const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
  const parts = text.split(pattern);
  
  return parts.map((part, index) => {
    const cleanPart = part.toLowerCase().replace(/[.,!?;:]/g, '');
    if (keywords.includes(cleanPart)) {
      return <span key={index} className="font-serif font-bold italic">{part}</span>;
    }
    return part;
  });
}

/**
 * Formats text with both STRATRI (bold Cormorant) and keywords (bold+italic Cormorant)
 * @param text - The text to format
 * @returns React nodes with all formatting applied
 */
export function formatAllKeywords(text: string): React.ReactNode {
  if (!text) return text;
  
  const allPatterns = ['STRATRI', 'Stratri', 'stratri', 'technology', 'policy', 'society'];
  
  // Create a regex that captures all patterns
  const pattern = new RegExp(`(${allPatterns.join('|')})`, 'gi');
  const parts = text.split(pattern);
  
  return parts.map((part, index) => {
    const lowerPart = part.toLowerCase();
    
    // STRATRI = bold Cormorant Garamond
    if (lowerPart === 'stratri') {
      return <strong key={index} className="font-bold font-serif">{part}</strong>;
    }
    
    // technology/policy/society = bold + italic Cormorant Garamond
    const cleanPart = lowerPart.replace(/[.,!?;:]/g, '');
    if (['technology', 'policy', 'society'].includes(cleanPart)) {
      return <span key={index} className="font-serif font-bold italic text-[21px]">{part}</span>;
    }
    
    return part;
  });
}

/**
 * Component wrapper for formatted text
 */
interface FormattedTextProps {
  children: string;
  type?: 'stratri' | 'keywords' | 'all';
  className?: string;
  style?: React.CSSProperties;
}

export function FormattedText({ children, type = 'all', className, style }: FormattedTextProps) {
  let content: React.ReactNode;
  
  switch (type) {
    case 'stratri':
      content = formatSTRATRI(children);
      break;
    case 'keywords':
      content = formatKeywords(children);
      break;
    case 'all':
    default:
      content = formatAllKeywords(children);
      break;
  }
  
  return <span className={className} style={style}>{content}</span>;
}