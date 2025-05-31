import { useState, useEffect } from 'react';
import { LuClipboardList, LuClipboardCheck } from "react-icons/lu";
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import { cn } from '~/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showHeader?: boolean;
}

// Language detection helper
const detectLanguage = (code: string): string => {
  if (
    code.includes('npm install') ||
    code.includes('yarn add') ||
    code.includes('$ ')
  )
    return 'bash';
  if (
    code.includes('interface') ||
    code.includes('type ') ||
    code.includes(': string')
  )
    return 'typescript';
  if (
    code.includes('import') &&
    code.includes('from') &&
    code.includes('react')
  )
    return 'jsx';
  if (code.includes('import') && code.includes('from')) return 'javascript';
  if (
    code.includes('{') &&
    code.includes(':') &&
    code.includes(';') &&
    !code.includes('function')
  )
    return 'css';
  if (code.startsWith('{') && code.includes('"')) return 'json';
  return 'javascript';
};

export default function CodeBlock({
  code,
  language,
  filename,
  showHeader = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  const detectedLanguage = language || detectLanguage(code);

  useEffect(() => {
    // Highlight the code
    const highlighted = Prism.highlight(
      code,
      Prism.languages[detectedLanguage] || Prism.languages.javascript,
      detectedLanguage
    );
    setHighlightedCode(highlighted);
  }, [code, detectedLanguage]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative rounded-[1rem] overflow-hidden border border-solid border-slate-700 bg-slate-900 shadow-2xl">
      {showHeader && (
        <div className="flex items-center justify-between px-2 py-2 bg-slate-900">
          {filename && (
            <span className="ml-4 text-xsm text-slate-300 font-mono">
              {filename}
            </span>
          )}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-slate-400 uppercase tracking-wide">
              {detectedLanguage}
            </span>
            <button
              onClick={copyToClipboard}
              className="p-2 relative size-6 flex items-center justify-center rounded-md bg-slate-800/80 hover:bg-slate-800 ease-200 transform hover:scale-105 active:scale-95"
              title="Copy to clipboard"
            >
              <LuClipboardList
                className={`absolute w-4 h-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 ease-300 ${
                  copied ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                }`}
              />
              <LuClipboardCheck
                className={`absolute w-4 h-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-green-400 ease-300 ${
                  copied ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              />
            </button>
          </div>
        </div>
      )}

      <div
        className={cn(
          'relative mb-1',
          showHeader
            ? 'border rounded-[0.875rem] border-solid border-slate-700 mx-auto w-[calc(100%-8px)]'
            : ''
        )}
      >
        <pre className="overflow-x-auto text-sm leading-relaxed m-auto rounded-[1rem] p-4 w-[calc(100%-2px)] !bg-slate-900">
          <code
            className={`language-${detectedLanguage} font-mono !bg-transparent`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>

        {!showHeader && (
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 size-6 p-2 flex items-center justify-center rounded-md bg-slate-800/80 hover:bg-slate-800 ease-200 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
            title="Copy to clipboard"
          >
            <div className="relative w-4 h-4 mx-auto">
              <LuClipboardList
                className={`absolute inset-0 w-4 h-4 -left-1/2 text-slate-300 ease-300 ${
                  copied ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                }`}
              />
              <LuClipboardCheck
                className={`absolute inset-0 w-4 h-4 -left-1/2 text-green-400 ease-300 ${
                  copied ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
