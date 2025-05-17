"use client";

import { useState } from "react";
import { addDays, format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

export default function CalendarPage() {
  const [date, setDate] = (useState < Date) | (undefined > new Date());

  const handleSelect = (selectedDate) => {
    setDate(selectedDate);
    if (selectedDate) {
      toast.success(`Date selected: ${format(selectedDate, "PPP")}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h1 className="text-2xl font-bold">Select a Date</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        className="rounded-md border"
      />

      <Button onClick={() => toast("This is a regular toast!")}>
        Show Toast
      </Button>
    </div>
  );
}
