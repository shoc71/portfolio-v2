import { Button } from "@/components/ui/button"

export default function NavigateButtons() {
    return(
        <div className="bg-muted rounded-xl p-6 shadow-inner space-y-2">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Buttons of Navigations
            </h2>
            <div className="grid grid-cols-4 gap-4">
                <Button><a href="/projects">Projects</a></Button>
                <Button><a href="/blog">Blog</a></Button>
            </div>
        </div>
    )
};