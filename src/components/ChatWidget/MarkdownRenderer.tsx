import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

// XSS Sanitizer: Escape raw HTML tags safely
const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Parser for inline styles (bold, italic, inline code, and links)
const parseInline = (text: string): React.ReactNode[] => {
  // Matches: **bold**, *italic*, `code`, and [label](url)
  const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-white tracking-wide">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={index} className="italic text-slate-200">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={index}
          className="bg-slate-950/80 text-purple-300 px-1.5 py-0.5 rounded font-mono text-xs border border-purple-500/20"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('[') && part.includes('](')) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, label, url] = match;
        return (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors duration-200 font-medium"
          >
            {label}
          </a>
        );
      }
    }
    return part;
  });
};

// Sub-component for individual Code Block with Copy Action
const CodeBlock: React.FC<{ language: string; code: string }> = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code block:', err);
    }
  };

  return (
    <div className="my-4 rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs font-mono text-slate-400 select-none">
        <span className="uppercase tracking-wider">{language || 'code'}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 hover:text-slate-200 transition-colors duration-200 cursor-pointer focus:outline-none"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-slate-200 bg-slate-900/90 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  // Split by code block tags: ```
  const parts = content.split(/```/);
  
  return (
    <div className="space-y-2 text-slate-100 leading-relaxed break-words text-[15px]">
      {parts.map((part, index) => {
        const isCodeBlock = index % 2 === 1;

        if (isCodeBlock) {
          // Extract language and code body
          const firstNewlineIndex = part.indexOf('\n');
          const language = part.substring(0, firstNewlineIndex).trim();
          let code = part.substring(firstNewlineIndex + 1);
          
          // Strip trailing newline if any
          if (code.endsWith('\n')) {
            code = code.slice(0, -1);
          }

          return <CodeBlock key={index} language={language} code={code} />;
        } else {
          // Parse other markdown elements (paragraphs, headers, lists)
          const lines = part.split('\n');
          const elements: React.ReactNode[] = [];
          
          let listItems: string[] = [];
          let listType: 'bullet' | 'ordered' | null = null;

          const flushList = (key: number) => {
            if (listItems.length > 0 && listType) {
              const Tag = listType === 'ordered' ? 'ol' : 'ul';
              const baseClass = listType === 'ordered' 
                ? 'list-decimal pl-6 space-y-1.5 my-3 text-slate-200' 
                : 'list-disc pl-6 space-y-1.5 my-3 text-slate-200';
              
              elements.push(
                <Tag key={`list-${key}`} className={baseClass}>
                  {listItems.map((item, subIdx) => (
                    <li key={subIdx} className="marker:text-primary">
                      {parseInline(item)}
                    </li>
                  ))}
                </Tag>
              );
              listItems = [];
              listType = null;
            }
          };

          lines.forEach((line, lineIdx) => {
            const trimmed = line.trim();

            // 1. Bullet Lists
            const bulletMatch = line.match(/^(\s*)[-*]\s+(.*)/);
            if (bulletMatch) {
              if (listType !== 'bullet') {
                flushList(lineIdx);
                listType = 'bullet';
              }
              listItems.push(bulletMatch[2]);
              return;
            }

            // 2. Ordered Lists
            const orderedMatch = line.match(/^(\s*)\d+\.\s+(.*)/);
            if (orderedMatch) {
              if (listType !== 'ordered') {
                flushList(lineIdx);
                listType = 'ordered';
              }
              listItems.push(orderedMatch[2]);
              return;
            }

            // If not a list item, flush any existing list items first
            flushList(lineIdx);

            if (!trimmed) {
              // Empty space line
              return;
            }

            // 3. Headings
            if (trimmed.startsWith('### ')) {
              elements.push(
                <h3 key={lineIdx} className="text-md font-bold text-white mt-4 mb-2 tracking-wide">
                  {parseInline(trimmed.substring(4))}
                </h3>
              );
            } else if (trimmed.startsWith('## ')) {
              elements.push(
                <h2 key={lineIdx} className="text-lg font-bold text-white mt-5 mb-2 border-b border-slate-800 pb-1">
                  {parseInline(trimmed.substring(3))}
                </h2>
              );
            } else if (trimmed.startsWith('# ')) {
              elements.push(
                <h1 key={lineIdx} className="text-xl font-extrabold text-white mt-6 mb-3">
                  {parseInline(trimmed.substring(2))}
                </h1>
              );
            } else {
              // 4. Standard Paragraph
              elements.push(
                <p key={lineIdx} className="mb-2 text-slate-200">
                  {parseInline(line)}
                </p>
              );
            }
          });

          // Final flush for lists at segment end
          flushList(lines.length);

          return <React.Fragment key={index}>{elements}</React.Fragment>;
        }
      })}
    </div>
  );
};
