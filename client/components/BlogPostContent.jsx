"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

/* Collapsible block with nested tabbing */
function CollapseItem({ title, body, children, level = 1 }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="my-2 p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50"
      style={{ marginLeft: (level - 1) * 20 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full text-left font-medium hover:underline"
      >
        {open ? <ChevronDown className="mr-2" /> : <ChevronRight className="mr-2" />}
        {title}
      </button>

      {open && (
        <div className="mt-2">
          {/* Only render body if it exists */}
          {body && (
            Array.isArray(body)
              ? body.slice(0, 5).map((md, idx) => (
                  <div
                    key={idx}
                    className="prose prose-sm dark:prose-invert mb-2 p-2 bg-white/10 dark:bg-gray-700/20 rounded"
                  >
                    <ReactMarkdown>{md}</ReactMarkdown>
                  </div>
                ))
              : (
                  <div className="prose prose-sm dark:prose-invert p-2 bg-white/10 dark:bg-gray-700/20 rounded">
                    <ReactMarkdown>{body}</ReactMarkdown>
                  </div>
                )
          )}

          {/* Render children if any */}
          {children &&
            level < 5 &&
            children.map((child, idx) => (
              <CollapseItem key={idx} {...child} level={level + 1} />
            ))}
        </div>
      )}
    </div>
  );
}

/* Code block with run + remove console */
function CodeBlock({ code }) {
  const [output, setOutput] = useState("");
  const [showConsole, setShowConsole] = useState(false);

  const runCode = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const logs = [];
    iframe.contentWindow.console.log = (...args) =>
      logs.push(args.join(" "));

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
      <pre className="overflow-x-auto bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
        <code>{code}</code>
      </pre>
      <div className="flex gap-2 mt-2">
        <button
          onClick={runCode}
          className="px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-500"
        >
          ▶ Run
        </button>
        {showConsole && (
          <button
            onClick={clearConsole}
            className="px-3 py-1 text-sm bg-red-600 text-white rounded-md hover:bg-red-500 flex items-center gap-1"
          >
            <X size={14} /> Remove Console
          </button>
        )}
      </div>
      {showConsole && output && (
        <pre className="mt-3 p-3 bg-black text-white rounded-md text-sm">
          {output}
        </pre>
      )}
    </div>
  );
}

export default function BlogPostContent({ content, title, author, date, edited }) {
  return (
    <div className="mt-6 space-y-6">
      {/* Header card */}
      {/* <div className="bg-gray-200/80 dark:bg-gray-800/80 p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h1>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {author} • Edited: {edited || date}
        </div>
      </div> */}

      {/* Content card */}
      <div className="p-6 bg-gray-400 dark:bg-gray-900 rounded-2xl space-y-4">
        {content.map((item, idx) => {
          switch (item.type) {
            case "text":
              return <p key={idx} className="text-gray-900 dark:text-gray-100">{item.value}</p>;
            case "image":
              return (
                <div key={idx} className="my-6 flex justify-center">
                  <Image
                    src={item.src}
                    alt={item.alt || "Blog image"}
                    width={item.width}
                    height={item.height}
                    className="rounded-lg shadow-md"
                  />
                </div>
              );
            case "break":
              return <hr key={idx} className="my-6 border-gray-300 dark:border-gray-600" />;
            case "code":
              return <CodeBlock key={idx} code={item.code} />;
            case "collapse":
              return <CollapseItem key={idx} {...item} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
