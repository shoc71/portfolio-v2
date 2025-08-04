"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { emailDisplay } from "../home/ProfileSection";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import ParticlesCustomBackground from "../backgrounds/ParticlesCustomBackground";

export default function AchievementsPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    // Check localStorage or simulate reward logic
    const hasUnlocked = localStorage.getItem("profileAchievement") === "true";
    setUnlocked(hasUnlocked);
  }, []);

  return (
    <div className="min-h-screen flex flex-col max-w-3xl mx-auto px-4 py-12">
      <ParticlesCustomBackground 
        color="ffff00"
        shape="char"
        characters={["★", "☆", "✦", "🌟", "💫", "✨", "⭐"]}
      />
      <h1 className="text-3xl font-bold mb-6">🏆 Achievements</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card
          className={unlocked ? "border-green-500 shadow-lg" : "opacity-50"}
        >
          <CardContent className="p-6 text-center flex flex-col items-center gap-4">
            <div className="w-24 h-24 relative">
              <Image
                src={assets.profile_pic}
                alt="Profile Achievement"
                width={96}
                height={96}
                className="rounded-full border"
              />
              {unlocked && (
                <Image
                  src={assets.sunglasses}
                  alt="Sunglasses"
                  className="absolute top-0 left-0 w-full h-full rounded-full"
                  width={96}
                  height={96}
                />
              )}
            </div>
            <h2 className="text-xl font-semibold">Profile Hover Master</h2>
            <p className="text-muted-foreground text-sm">
              Hovered long enough to unlock the hidden email.
            </p>
            {unlocked ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>
                  Email unlocked: <strong>{emailDisplay}</strong>
                </span>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Locked</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
