"use client";

import ProfileSection from "@/app/home/ProfileSection";
import YYZFlyover from "@/app/home/MapFlyOver";
import WorkExperience from "@/app/home/WorkExperience";
import { workExperience } from "@/data/workExperience";
import TypeRacer2 from "./home/TypeRacerv2";
import CalendarPage from "./home/calendar";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 flex flex-col items-center">
      {/* Profile Section */}
      <div className="w-full max-w-5xl mb-8">
        <ProfileSection />
      </div>

      {/* Work + Map Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 items-start mb-8">
        <div className="flex-1">
          <WorkExperience jobs={workExperience} />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <YYZFlyover />
        </div>
      </div>

      {/* TypeRacer Challenge Section */}
      <div className="w-full max-w-5xl bg-muted rounded-xl p-6 shadow-inner text-center">
        <h1 className="text-3xl font-bold mb-6">TypeRacer Challenge</h1>
        <TypeRacer2 />
      </div>
      <CalendarPage />
    </main>
  );
}
