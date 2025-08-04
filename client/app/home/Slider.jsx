import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card";

// type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }) {
  return (
    <Card className="w-full space-y-4 gap-6 border">
        <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[90%] left-10", className)}
        {...props}
        />
    </Card>
  )
}
