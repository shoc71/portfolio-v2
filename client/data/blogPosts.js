export const posts = [
    {
        slug: "hello-world",
        title: "👋 Hello World",
        slogan: "one-liner that shows at blog page.jsx below the title and again in slug as the same thing again. Grey text-grey-400 and smaller than the title",
        createdAt: "2025-05-01 19:12:32",
        editedAt: "2025-05-01 21:45:52",
        author: "shoc71",
        subtitle_1: "Hi there",
        description_1: [
            "This is where I type up a random paragraph.",
            "This is a new sentence where I can type up even more things now."
        ],
        stuff_1: [
            "links like a gif will be put here",
            "gif 2 can be put here and the properties of both can be manipulated.",
            "random code that be put here to show examples of stuff here",
            "random images that are avaliable on the net as a link can be linked here and it works"
        ],
        subtitle_2: "Hi there",
        description_2: [
            "This is where I type up a random paragraph.",
            "This is a new sentence where I can type up even more things now."
        ],
        stuff_2: [
            "links like a gif will be put here",
            "gif 2 can be put here and the properties of both can be manipulated.",
            "random code that be put here to show examples of stuff here",
            "random images that are avaliable on the net as a link can be linked here and it works"
        ],
        ending: "This is the end sentence."
    },
    {
        slug: "deep-thoughts-on-flow",
        title: "⏱️ Deep Thoughts on Flow",
        date: "2025-05-10",
        edited: "2025-05-11",
        author: "shoc71",
        content: [
            {
                type: "section",
                title: "⚡ What is Flow?",
                body: "A mental state of energized focus and immersion.",
                priority: "high",
                children: [
                    {
                        type: "note",
                        title: "Challenge-Skill Balance",
                        body: "Tasks should stretch you without breaking you.",
                        priority: "high",
                    },
                ],
            },
        ],
    },
    {
        slug: "react-next-mix",
        title: "🧩 Mixing React + Next.js",
        date: "2025-05-19",
        edited: "2025-05-20",
        author: "shoc71",
        content: [
            {
                type: "section",
                title: "📦 File Structure Clarity",
                body: "Use `app/` for routes and `components/` for shared UI.",
                priority: "high",
                children: [
                    {
                        type: "subpoint",
                        title: "pages vs app",
                        body: "`pages/` uses older routing, `app/` enables layouts and streaming.",
                        priority: "medium",
                    },
                ],
            },
            {
                type: "section",
                title: "🧠 Smart Components",
                body: "Split logic-heavy and presentation-focused components.",
                priority: "medium",
                children: [
                    {
                        type: "note",
                        title: "UI Library",
                        body: "Using shadcn-ui? Keep things composable.",
                        priority: "low",
                    },
                    {
                        type: "note",
                        title: "SSR vs CSR",
                        body: "Decide what renders on server or client early.",
                        priority: "high",
                    },
                ],
            },
        ],
    },
    {
        slug: "debug-like-a-pro",
        title: "🛠️ Debug Like a Pro",
        date: "2025-05-15",
        edited: "2025-05-16",
        author: "shoc71",
        content: [
            {
                type: "section",
                title: "🔍 Breakpoint Mastery",
                body: "Use IDE breakpoints to pause and inspect logic.",
                priority: "high",
                children: [
                    {
                        type: "note",
                        title: "Conditional Breaks",
                        body: "Trigger only when `x > 5` to reduce noise.",
                        priority: "medium",
                    },
                ],
            },
        ],
    },
    {
        slug: "keyboard-mastery",
        title: "⌨️ Keyboard Mastery for Devs",
        date: "2025-05-17",
        edited: "2025-05-17",
        author: "shoc71",
        content: [
            {
                type: "section",
                title: "💡 Why It Matters",
                body: "You touch your keyboard 1,000+ times daily. Get efficient.",
                priority: "medium",
                children: [
                    {
                        type: "note",
                        title: "Muscle Memory",
                        body: "Use shortcuts so often they become reflex.",
                        priority: "high",
                    },
                ],
            },
        ],
    },
];
