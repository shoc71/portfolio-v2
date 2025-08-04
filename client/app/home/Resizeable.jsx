"use client";

import * as React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResizableDemo() {
  return (
    <Card className="bg-muted rounded-lg border shadow w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Resizable Panels</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow h-full w-full flex">
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg border border-border flex-grow h-full w-full min-h-[325px]"
        >
          <ResizablePanel defaultSize={10} className="h-full">
            <div className="flex h-[335px] items-center justify-center p-6 bg-background text-foreground border-r border-border">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25}>
            <ResizablePanelGroup direction="vertical" className="h-full">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6 bg-background text-foreground border-b border-border">
                  <span className="font-semibold">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75} className="h-full">
                <div className="flex h-full items-center justify-center p-6 bg-background text-foreground">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </CardContent>
    </Card>
  );
}
