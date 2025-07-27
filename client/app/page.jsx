"use client";

import ProfileSection from "@/app/home/ProfileSection";
import YYZFlyover from "@/app/home/MapFlyOver";
import WorkExperience from "@/app/home/WorkExperience";
import { workExperience } from "@/data/workExperience";
import TypeRacer2 from "./home/TypeRacerv2";
import CalendarPage from "./home/calendar";
import NavigateButtons from "./home/navigate";
import ParticlesBackground from "./backgrounds/ParticlesBackground";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 flex flex-col items-center">
      <ParticlesBackground />
      {/* Profile Section */}
      <div className="w-full max-w-5xl mb-8">
        <ProfileSection />
      </div>

      {/* Work + Navigation Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-stretch mb-8">
        <div className="flex-1 mb-8">
          <WorkExperience jobs={workExperience} />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <NavigateButtons />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6 items-stretch mb-8">
        <div className="h-full flex-1 flex flex-col items-center">
          <YYZFlyover />
        </div>
        {/*  */}
      </div>

      {/* TypeRacer + Calendar Side-by-Side */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6">
        {/* TypeRacer Section */}
        <div className="flex-[2] bg-muted rounded-xl p-6 shadow-inner">
          <h1 className="text-3xl font-bold mb-6 text-center">
            I Like To Make Interactive Components
          </h1>
          <TypeRacer2 />
        </div>

        {/* Calendar Section */}
        <div className="flex-[1] bg-background border rounded-xl p-4 shadow-sm">
          <h2 className="text-xl font-semibold text-center">Appointments</h2>
          <CalendarPage />
        </div>
      </div>
    </main>
  );
}
