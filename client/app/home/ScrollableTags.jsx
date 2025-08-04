"use client";

import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 10 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function ScrollableTags() {
  return (
    <Card className="bg-muted rounded-xl shadow-inner w-full max-w-sm mx-auto">
      <CardHeader >
        <CardTitle className="text-lg font-semibold">Tag Timeline</CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap overflow-x-auto">
          <div className="flex space-x-4 p-2">
            {tags.map((tag) => (
              <React.Fragment key={tag}>
                <div className="text-sm bg-background border rounded px-3 py-1 shadow">
                  {tag}
                </div>
              </React.Fragment>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
