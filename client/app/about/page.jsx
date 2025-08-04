// run the encryption on file story.json located in github.com/shoc71/portfolio-v2/server/encryption/
// in order for this to work for you

"use client";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { assets } from "@/assets/assets";
import { useState, useEffect } from "react";
import Image from "next/image";
import { name } from "../home/ProfileSection";
import CryptoJS from "crypto-js";

export default function AboutPage() {

  const storyFilePath = '/story.json.enc'
  const passKey = process.env.NEXT_PUBLIC_PASS_KEY
  const [storyPrelog, setStoryPrelog] = useState([])

  useEffect(() => {
    async function loadData() {
      const importedStory = await fetch(storyFilePath)
      const encryptedStoryText = await importedStory.text()

      // De-encrypt
      const bytes = CryptoJS.AES.decrypt(encryptedStoryText, passKey);
      const decryptStoryText = bytes.toString(CryptoJS.enc.Utf8);

      // JSON transalation
      const jsonData = JSON.parse(decryptStoryText)
      const storyPrelogArray = jsonData["prelog"]

      setStoryPrelog(storyPrelogArray)
    }

    loadData()
    }, [passKey]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-4xl">
          About Me
        </CardTitle>
      </CardHeader>

      <CardContent className="min-h-screen">
        <div className="flex flex-col items-center justify-content shrink-0">
          <Image
            src={assets.profile_pic}
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full"
            width={96}
            height={96}
          />
          <h2 className="text-2xl font-semibold mt-4 mb-4">Hello World!</h2>
          <p>I'm {name}</p>
        </div>
        <div className="flex flex-col items-center">
          {storyPrelog.map((item, idx) => (
            <p className="mt-50" key={idx}>{item}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
