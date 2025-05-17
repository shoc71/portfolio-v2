"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { prompts } from "@/data/TyperacerPrompts";

export default function TypeRacer2() {
  const [promptObj, setPromptObj] = useState(prompts[0]);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value === promptObj.quote) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  const handleReset = () => {
    setInput("");
    setCompleted(false);
  };

  const handleNewPrompt = () => {
    const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPromptObj(newPrompt);
    setInput("");
    setCompleted(false);
  };

  const renderText = () => {
    return promptObj.quote.split("").map((char, index) => {
      let className = "";
      if (index < input.length) {
        className = input[index] === char ? "text-green-600" : "text-red-500";
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="bg-background text-foreground rounded-lg p-6 w-full max-w-4xl shadow-md">
        <div className="text-lg leading-8 font-mono break-words">
          {renderText()}
        </div>

        <p className="mt-4 text-right text-sm text-muted-foreground">
          — {promptObj.author}
        </p>

        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="w-full mt-4 px-3 py-2 border border-border rounded-md bg-card text-foreground outline-none"
          placeholder="Start typing..."
        />

        <Progress
          value={(input.length / promptObj.quote.length) * 100}
          className="mt-6 h-3 transition-all"
        />

        <div className="mt-4 flex gap-3">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="default" onClick={handleNewPrompt}>
            New Prompt
          </Button>
        </div>
      </div>
    </div>
  );
}
