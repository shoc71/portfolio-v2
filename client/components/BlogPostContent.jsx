"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

function CollapseItem({ title, body, children, priority }) {
  const [open, setOpen] = useState(false);

  const getPriorityStyle = () => {
    switch (priority) {
      case "high":
        return "border-l-4 border-red-500";
      case "medium":
        return "border-l-4 border-yellow-400";
      case "low":
        return "border-l-4 border-green-400";
      default:
        return "";
    }
  };

  return (
    <div className={`my-2 pl-4 ${getPriorityStyle()}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center w-full text-left font-medium hover:underline"
      >
        {open ? (
          <ChevronDown className="mr-2" />
        ) : (
          <ChevronRight className="mr-2" />
        )}
        {title}
      </button>

      {open && (
        <div className="mt-2 ml-6">
          {/* ✅ Apply styling to the wrapper instead of ReactMarkdown itself */}
          <div className="prose prose-sm dark:prose-invert">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>

          {children &&
            children.map((child, idx) => <CollapseItem key={idx} {...child} />)}
        </div>
      )}
    </div>
  );
}

export default function BlogPostContent({ content }) {
  return (
    <div className="mt-6">
      {content.map((item, idx) => (
        <CollapseItem key={idx} {...item} />
      ))}
    </div>
  );
}