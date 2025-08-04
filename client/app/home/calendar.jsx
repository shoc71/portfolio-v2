"use client";

import { useState, useEffect } from "react";
import { format, isAfter } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Trash2, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const date = new Date();
      date.setHours(hour, min, 0, 0);
      slots.push(format(date, "HH:mm"));
    }
  }
  return slots;
};

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00");
  const [appointments, setAppointments] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("appointments");
    if (saved) setAppointments(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const getAppointmentDateTime = () => {
    const dateStr = format(date, "yyyy-MM-dd");
    return new Date(`${dateStr}T${time}:00`);
  };

  const handleAddAppointment = () => {
    const apptDateTime = getAppointmentDateTime();

    if (!isAfter(apptDateTime, new Date())) {
      toast.error("Please select a future date and time.");
      return;
    }

    if (
      appointments.some(
        (appt) => new Date(appt.datetime).getTime() === apptDateTime.getTime()
      )
    ) {
      toast.error("This appointment time is already booked.");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      datetime: apptDateTime.toISOString(),
    };

    setAppointments((prev) => [...prev, newAppointment]);
    toast.success(`Appointment set for ${format(apptDateTime, "PPP 'at' p")}`);
  };

  const handleDelete = (id) => {
    setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    toast("Appointment deleted");
  };

  const openEmailDialog = (appointment) => {
    setSelectedAppointment(appointment);
    setEmailInput("");
    setShowDialog(true);
  };

  const handleSendReminder = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailInput) {
      toast.error("Please enter an email address.");
      return;
    }

    if (!emailRegex.test(emailInput)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success(
      `Reminder for ${emailInput} saved ${format(
        new Date(selectedAppointment.datetime),
        "PPP 'at' p."
      )} The reminder email will be sent once server is up and running.`
    );
    setShowDialog(false);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8 max-w-lg mx-auto bg-background rounded-xl border">
      <h1 className="text-3xl font-semibold text-center">Appointments</h1>
      <h3 className="text-xl font-bold">Make an Appointment</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={(selectedDate) => selectedDate && setDate(selectedDate)}
        className="rounded-lg border bg-background shadow-sm"
      />

      <div className="w-full flex items-center gap-4">
        <label htmlFor="time-select" className="font-semibold">
          Time:
        </label>
        <select
          id="time-select"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border rounded px-3 py-2 bg-card text-foreground"
        >
          {generateTimeSlots().map((slot) => (
            <option key={slot} value={slot}>
              {format(new Date(`1970-01-01T${slot}:00`), "h:mm a")}
            </option>
          ))}
        </select>
      </div>

      <Button onClick={handleAddAppointment} className="w-full">
        Add Appointment
      </Button>

      <Separator className="my-1" />

      <h2 className="text-xl font-semibold w-full">
        Upcoming Appointments
      </h2>
      <div className="w-full max-h-60 overflow-y-auto border rounded p-4 bg-background">
        {appointments.length === 0 ? (
          <p className="text-muted-foreground text-center">
            No appointments yet.
          </p>
        ) : (
          appointments
            .sort(
              (a, b) =>
                new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
            )
            .map((appt) => (
              <div
                key={appt.id}
                className="flex items-center justify-between border-b last:border-b-0 py-2 px-1 text-sm font-mono"
              >
                <span>{format(new Date(appt.datetime), "PPP 'at' p")}</span>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => openEmailDialog(appt)}
                  >
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(appt.id)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))
        )}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Email Reminder</DialogTitle>
          </DialogHeader>

          <Input
            type="email"
            placeholder="Enter email address"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />

          <DialogFooter>
            <Button onClick={handleSendReminder}>Send Reminder</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
