"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function CodeBlock({ code, language = "javascript" }) {
  const [output, setOutput] = useState("");
  const [showConsole, setShowConsole] = useState(false);

  const runCode = () => {
    if (language !== "javascript") {
      setOutput(`⚠️ Running only supported for JavaScript, not ${language}.`);
      setShowConsole(true);
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const logs = [];
    iframe.contentWindow.console.log = (...args) => logs.push(args.join(" "));

    try {
      const script = iframe.contentDocument.createElement("script");
      script.textContent = code;
      iframe.contentDocument.body.appendChild(script);
    } catch (err) {
      logs.push("Error: " + err.message);
    }

    setOutput(logs.join("\n"));
    setShowConsole(true);
    document.body.removeChild(iframe);
  };

  const clearConsole = () => {
    setOutput("");
    setShowConsole(false);
  };

  return (
    <div className="my-6 bg-gray-200/50 dark:bg-gray-800/50 p-4 rounded-lg">
      {/* Code block */}
      <pre className="overflow-x-auto text-sm rounded-md bg-gray-900 text-gray-100 p-3 font-mono">
        <code>{code}</code>
      </pre>

      {/* Controls */}
      <div className="flex gap-2 mt-2">
        {language === "javascript" && (
          <button
            onClick={runCode}
            className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-500"
          >
            ▶ Run
          </button>
        )}
        {showConsole && (
          <button
            onClick={clearConsole}
            className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-500 flex items-center gap-1"
          >
            <X size={14} /> Remove Console
          </button>
        )}
      </div>

      {/* Console output */}
      {showConsole && output && (
        <pre className="mt-3 p-3 bg-black text-white rounded-md text-sm whitespace-pre-wrap">
          {output}
        </pre>
      )}
    </div>
  );
}
