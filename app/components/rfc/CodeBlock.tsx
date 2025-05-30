import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { cn } from '~/lib/utils'; // If you have a classnames util

export function CodeBlock({
  code,
  language = 'bash',
  className = '',
}: {
  code: string;
  language?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className={cn(
        'relative group bg-slate-900 rounded-lg overflow-hidden',
        className
      )}
    >
      <pre className="p-4 text-sm text-slate-100 overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleCopy}
        className={cn(
          'absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity',
          copied && 'bg-green-600 text-white'
        )}
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}
