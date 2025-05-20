"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Progress } from "@/components/ui/progress";
import { prompts } from "@/data/TyperacerPrompts";

export default function TypeRacerBox() {
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]);
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [completedRuns, setCompletedRuns] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState({
    quote: true,
    author: true,
    timeSeconds: true,
    wpm: true,
    date: true,
    points: true,
  });
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    setStartTime(Date.now());
    setHasCompleted(false);
  }, [currentPrompt]);

  const isComplete =
    input.trim().length === currentPrompt.quote.trim().length &&
    input.trim() === currentPrompt.quote.trim();

  const wordsTyped = input.trim().split(/\s+/).filter(Boolean).length;
  const timeMinutes = startTime ? (Date.now() - startTime) / 60000 : 0;
  const wpm = timeMinutes > 0 ? wordsTyped / timeMinutes : 0;

  useEffect(() => {
    if (isComplete && startTime !== null && !hasCompleted) {
      const now = Date.now();
      const timeTaken = (now - startTime) / 1000;
      const completionDate = new Date().toLocaleString();

      const totalChars = currentPrompt.quote.length;
      const correctChars = input
        .split("")
        .filter((char, i) => char === currentPrompt.quote[i]).length;
      const accuracy = (correctChars / totalChars) * 100;

      const newRun = {
        quote: currentPrompt.quote,
        author: currentPrompt.author,
        timeSeconds: timeTaken,
        wpm: wpm,
        date: completionDate,
        points: wordsTyped * 2,
        accuracy: accuracy.toFixed(2),
      };

      setCompletedRuns((prev) => [...prev, newRun]);
      setHasCompleted(true);
      setInput("");

      const timeout = setTimeout(() => {
        handleNewPrompt();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [
    isComplete,
    startTime,
    wpm,
    currentPrompt,
    wordsTyped,
    input,
    hasCompleted,
  ]);

  const renderQuote = () => {
    return currentPrompt.quote.split("").map((char, i) => {
      let className = "";
      if (i < input.length) {
        className = input[i] === char ? "text-green-600" : "text-red-600";
      }
      return (
        <span key={i} className={className}>
          {char}
        </span>
      );
    });
  };

  const handleInputChange = (e) => {
    if (hasCompleted) return;

    const value = e.target.value;
    const expected = currentPrompt.quote;

    if (
      value === expected.substring(0, value.length) &&
      value.length === expected.length
    ) {
      setInput(expected);
    } else {
      setInput(value);
    }
  };

  const handleReset = () => {
    setInput("");
    setStartTime(Date.now());
    setHasCompleted(false);
  };

  const handleNewPrompt = () => {
    let nextPrompt;
    do {
      nextPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (nextPrompt.quote === currentPrompt.quote && prompts.length > 1);

    setCurrentPrompt(nextPrompt);
    setInput("");
    setStartTime(Date.now());
    setHasCompleted(false);
  };

  const progressPercent = Math.min(
    (input.length / currentPrompt.quote.length) * 100,
    100
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "quote",
        header: "Quote",
        cell: (info) => (
          <span className="font-mono text-sm break-words">
            {info.getValue()}
          </span>
        ),
      },
      {
        accessorKey: "author",
        header: "Author",
        cell: (info) => <em>{info.getValue()}</em>,
      },
      {
        accessorKey: "points",
        header: "Points",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "timeSeconds",
        header: () => <div className="flex items-center gap-1">Time (s)</div>,
        cell: (info) => info.getValue().toFixed(2),
      },
      {
        accessorKey: "wpm",
        header: () => <div className="flex items-center gap-1">WPM</div>,
        cell: (info) => info.getValue().toFixed(2),
      },
    ],
    []
  );

  const filteredColumns = columns.filter(
    (col) => visibleColumns[col.accessorKey]
  );

  const table = useReactTable({
    data: completedRuns,
    columns: filteredColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const toggleColumn = (columnId) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [columnId]: !prev[columnId],
    }));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-background rounded-lg shadow-md flex flex-col gap-6">
      {/* Typing box */}
      <div>
        <div className="text-lg font-mono break-words">{renderQuote()}</div>
        <p className="text-right text-sm italic text-muted-foreground">
          — {currentPrompt.author}
        </p>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Start typing..."
          className="w-full px-3 py-2 rounded-md border border-border bg-card text-foreground outline-none"
          autoFocus
          autoComplete="on"
        />
        <Progress value={progressPercent} className="h-3 rounded mt-2" />
        {hasCompleted && (
          <p className="text-center text-green-500 font-semibold animate-pulse mt-2">
            ✅ Completed!
          </p>
        )}
        <div className="flex gap-3 justify-end mt-2">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="default" onClick={handleNewPrompt}>
            New Prompt
          </Button>
        </div>
      </div>

      {/* Completed Runs Table */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-foreground">
            Completed Runs
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Columns ▼
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-background text-foreground"
            >
              <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {columns.map((col) => (
                <DropdownMenuItem
                  key={col.accessorKey}
                  onClick={() => toggleColumn(col.accessorKey)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={visibleColumns[col.accessorKey]}
                    readOnly
                    className="pointer-events-none"
                  />
                  {typeof col.header === "string" ? col.header : col.header()}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="overflow-x-auto rounded border border-border bg-background">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} className="text-foreground">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    className="text-foreground text-center"
                    colSpan={filteredColumns.length}
                  >
                    No completed runs yet.
                  </TableCell>
                </TableRow>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} className="text-foreground">
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
