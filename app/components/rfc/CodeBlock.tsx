import { useState, useEffect } from "react";
import { LuClipboardList, LuClipboardCheck } from "react-icons/lu";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import { cn } from "~/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showHeader?: boolean;
  className?: string;
}

// Language detection helper
const detectLanguage = (code: string): string => {
  if (
    code.includes("npm install") ||
    code.includes("yarn add") ||
    code.includes("$ ")
  )
    return "bash";
  if (
    code.includes("interface") ||
    code.includes("type ") ||
    code.includes(": string")
  )
    return "typescript";
  if (
    code.includes("import") &&
    code.includes("from") &&
    code.includes("react")
  )
    return "jsx";
  if (code.includes("import") && code.includes("from")) return "javascript";
  if (
    code.includes("{") &&
    code.includes(":") &&
    code.includes(";") &&
    !code.includes("function")
  )
    return "css";
  if (code.startsWith("{") && code.includes('"')) return "json";
  return "javascript";
};

export default function CodeBlock({
  code,
  language,
  filename,
  showHeader = true,
  className = "max-w-2xl",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState("");

  const detectedLanguage = language || detectLanguage(code);

  useEffect(() => {
    // Highlight the code
    const highlighted = Prism.highlight(
      code,
      Prism.languages[detectedLanguage] || Prism.languages.javascript,
      detectedLanguage,
    );
    setHighlightedCode(highlighted);
  }, [code, detectedLanguage]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-[1rem] border border-solid border-slate-700 bg-slate-900 shadow-2xl", className)}>
      {showHeader && (
        <div className="flex items-center justify-between bg-slate-900 px-2 py-2">
          {filename && (
            <span className="ml-4 font-mono text-xsm text-slate-300">
              {filename}
            </span>
          )}
          <div className="flex items-center space-x-2">
            <span className="text-xs uppercase tracking-wide text-slate-400">
              {detectedLanguage}
            </span>
            <button
              onClick={copyToClipboard}
              className="ease-200 relative flex size-6 transform items-center justify-center rounded-md bg-slate-800/80 p-2 hover:scale-105 hover:bg-slate-800 active:scale-95"
              title="Copy to clipboard"
            >
              <LuClipboardList
                className={`ease-300 absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-slate-300 ${
                  copied ? "scale-75 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <LuClipboardCheck
                className={`ease-300 absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-green-400 ${
                  copied ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      )}

      <div
        className={cn(
          "relative mb-1",
          showHeader
            ? "mx-auto w-[calc(100%-8px)] rounded-[0.875rem] border border-solid border-slate-700"
            : "",
        )}
      >
        <pre className="m-auto w-[calc(100%-2px)] overflow-x-auto rounded-[1rem] !bg-slate-900 p-4 text-sm leading-relaxed">
          <code
            className={`language-${detectedLanguage} !bg-transparent font-mono`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>

        {!showHeader && (
          <button
            onClick={copyToClipboard}
            className="ease-200 absolute right-3 top-3 flex size-6 transform items-center justify-center rounded-md bg-slate-800/80 p-2 backdrop-blur-sm hover:scale-105 hover:bg-slate-800 active:scale-95"
            title="Copy to clipboard"
          >
            <div className="relative mx-auto h-4 w-4">
              <LuClipboardList
                className={`ease-300 absolute inset-0 -left-1/2 h-4 w-4 text-slate-300 ${
                  copied ? "scale-75 opacity-0" : "scale-100 opacity-100"
                }`}
              />
              <LuClipboardCheck
                className={`ease-300 absolute inset-0 -left-1/2 h-4 w-4 text-green-400 ${
                  copied ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
              />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
