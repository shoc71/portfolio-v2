"use client";

import ProfileSection from "@/app/home/ProfileSection";
import YYZFlyover from "@/app/home/MapFlyOver";
import WorkExperience from "@/app/home/WorkExperience";
import { workExperience } from "@/data/workExperience";
import TypeRacer2 from "./home/TypeRacerv2";

import { ResizableDemo } from "./home/resizeable";

import ParticlesBackground from "./backgrounds/ParticlesBackground";
import CarouselButtons from "./home/CarouselPages";
import { SliderDemo } from "./home/Slider";
import CalendarPage from "./home/calendar";

export default function Home() {
  return (
    <main className="flex flex-col max-w-10xl overflow-x-hidden items-center min-h-screen px-4 py-8">
      <ParticlesBackground />
      <div className="w-full max-w-7xl mb-8">
        <ProfileSection />
      </div>

      {/* Work + Navigation Section */}
      <div className="max-w-7xl flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 min-w-0">
          <WorkExperience jobs={workExperience} />
        </div>
        <div className="flex flex-col items-center min-w-0 flex-[0.9]">
          <CarouselButtons />
        </div>
      </div>

      {/* Map + Resizable Section */}
      <div className="w-full flex flex-col max-w-7xl md:flex-row gap-6 items-center mb-8 flex-grow">
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <YYZFlyover />
        </div>
        <div className="w-full flex md:flex-2 min-w-0">
          <ResizableDemo />
        </div>
      </div>

      {/* TypeRacer + Calendar Side-by-Side */}
      <div className="w-full flex flex-col max-w-7xl lg:flex-row gap-6 justify-center">
        <div className="flex-3 rounded-xl space-y-4">
          <TypeRacer2 />
          {/* disappears when screen is smaller than md */}
          <div className="hidden lg:block"> 
            <SliderDemo max={100}/>
          </div>
        </div>

        <div className="max-w-full min-w-[320px]">
          <CalendarPage />
        </div>
      </div>
    </main>
  );
}
