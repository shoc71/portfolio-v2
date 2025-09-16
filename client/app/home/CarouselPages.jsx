import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { projects } from "@/data/projectPosts";

export default function CarouselButtons() {
  const [api, setApi] = React.useState(null);

  // Auto-rotate every 5 seconds
  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <Card className="bg-muted rounded-xl p-4 shadow-inner space-y-4 w-full max-w-md mx-auto">
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-semibold border-b pb-2 text-center">
          My Projects
        </CardTitle>
      </CardHeader>

      <CardContent className="relative flex flex-col items-center gap-2">
        <Carousel
          opts={{ align: "start", loop: true }}
          orientation="vertical"
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-mt-2 h-[150px]">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pt-1">
                <div className="p-1">
                  <Card className="shadow-sm">
                    <CardContent className="flex items-center justify-center p-2">
                      <Button asChild className="w-60 text-xl py-5">
                        <a href={`/projects/${project.slug}`}>{project.title}</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Smaller arrow buttons */}
          <CarouselPrevious className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[135%] h-6 w-6" />
          <CarouselNext className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[-30%] h-6 w-6" />
        </Carousel>
      </CardContent>
    </Card>
  );
}
