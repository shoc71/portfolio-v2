"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import { useRouter } from "next/navigation";

export const emailDisplay = process.env.NEXT_PUBLIC_EMAIL_ID;
export const firstName = process.env.NEXT_PUBLIC_FIRST_NAME_ID;
export const email = `mailto:${emailDisplay}`;
export const github = `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_ID}`;
export const linkedin = `https://linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_ID}`;
export const name = `${firstName} ${process.env.NEXT_PUBLIC_LAST_NAME_ID}`;
export const metadata = {
  title: `Portfolio - ${firstName}`,
  description: `Hello World, my name is ${firstName}. \
                I built this website using NextJS with ShadCN-UI. \
                Explore this website to your fullest heart's content.`,
};

export default function ProfileCard() {
  const [hovering, setHovering] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [completed, setCompleted] = useState(false);
  const progressRef = useRef(null);
  const animationFrameId = useRef(null);
  const startTime = useRef(null);
  const router = useRouter();
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  const duration = 3000;

  useEffect(() => {
    if (!hovering || unlocked || achievementUnlocked) {
      if (progressRef.current) {
        progressRef.current.style.strokeDashoffset =
          progressRef.current.style.strokeDasharray;
      }
      cancelAnimationFrame(animationFrameId.current);
      startTime.current = null;
      return;
    }

    let timeoutId;
    let fadeTimeout;

    function animate(timestamp) {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);

      if (progressRef.current) {
        const circumference = progressRef.current.r.baseVal.value * 2 * Math.PI;
        const offset = circumference * (1 - progress);
        progressRef.current.style.strokeDashoffset = offset;
      }

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setUnlocked(true);
        setCompleted(true);
        setAchievementUnlocked(true);
        localStorage.setItem("profileAchievement", "true");

        fadeTimeout = setTimeout(() => {
          setFadingOut(true);
        }, 4000);

        timeoutId = setTimeout(() => {
          setAchievementUnlocked(false);
          setFadingOut(false);
        }, 5000);
      }
    }

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      clearTimeout(timeoutId);
      clearTimeout(fadeTimeout);
    };
  }, [hovering, unlocked]);

  return (
    <div className="relative">
      <Card className="w-full max-w-4xl mx-auto mt-10 rounded-2xl p-4 shadow-lg">
        <CardContent className="flex items-center gap-6">
          {/* Profile Picture with Circular Loader */}
          <div
            className="relative w-24 h-24 rounded-full shadow-md overflow-hidden shrink-0 cursor-pointer"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Image
              src={assets.profile_pic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
              width={96}
              height={96}
            />

            {achievementUnlocked && (
              <div
                className={`fixed bottom-4 right-4 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 transition-opacity duration-1000 ${
                  fadingOut ? "opacity-0" : "opacity-100"
                }`}
              >
                <span className="text-xl">🎉</span>
                <div>
                  <p className="font-medium">Achievement Unlocked!</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-sm"
                    onClick={() => router.push("/achievements")}
                  >
                    View Reward →
                  </Button>
                </div>
              </div>
            )}

            {!unlocked && (
              <svg
                className="absolute top-0 left-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  stroke="#4feb34"
                  strokeWidth="5"
                  fill="none"
                  style={{
                    strokeDasharray: 2 * Math.PI * 46,
                    strokeDashoffset: 2 * Math.PI * 46,
                    transition: "stroke-dashoffset 0.5s linear",
                  }}
                  ref={progressRef}
                />
              </svg>
            )}

            {unlocked && (
              <Image
                src={assets.sunglasses}
                alt="Sunglasses"
                width={96}
                height={96}
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none rounded-full"
              />
            )}
          </div>

          {/* Info Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-muted-foreground text-sm">Software Engineer with UX/UI Interest</p>
            {completed && (
              <p className="text-xs mt-1 text-green-500">
                ✨ Achievement unlocked:{" "}
                <span className="underline">{emailDisplay}</span>
              </p>
            )}
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-3">
            <Button className="border" size="icon" variant="ghost" asChild>
              <a href={email}>
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button className="border" size="icon" variant="ghost" asChild>
              <a href={github} target="_blank">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button className="border" size="icon" variant="ghost" asChild>
              <a href={linkedin} target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {completed && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/achievements")}
            className="rounded-full shadow-md bg-green-100 hover:bg-green-200 text-green-700"
          >
            <Star className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
