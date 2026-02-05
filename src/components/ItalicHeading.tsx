interface ItalicHeadingProps {
  text: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  style?: React.CSSProperties;
  emphasizeWords?: string[]; // Words to italicize
}

export function ItalicHeading({ 
  text, 
  level = 'h2', 
  className = '', 
  style = {},
  emphasizeWords = [] 
}: ItalicHeadingProps) {
  // Function to split text and wrap emphasized words in italic spans
  const renderWithItalics = (text: string, emphasizeWords: string[]) => {
    if (emphasizeWords.length === 0) {
      return text;
    }

    // Create regex pattern that matches any of the emphasize words (case insensitive)
    const pattern = new RegExp(`\\b(${emphasizeWords.join('|')})\\b`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part, index) => {
      // Check if this part is one of the emphasized words
      const isEmphasized = emphasizeWords.some(
        word => word.toLowerCase() === part.toLowerCase()
      );
      
      if (isEmphasized) {
        return (
          <em key={index} className="font-serif not-italic" style={{ fontStyle: 'italic' }}>
            {part}
          </em>
        );
      }
      return part;
    });
  };

  const content = renderWithItalics(text, emphasizeWords);
  const Tag = level;

  return <Tag className={`font-serif ${className}`} style={style}>{content}</Tag>;
}
