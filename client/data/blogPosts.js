// data/blogPosts.js

import { assets } from "@/assets/assets";

export const posts = [

  {
    slug: "first-post",
    title: "First Post",
    author: "shoc71",
    date: "2025-05-23",
    edited: "2025-09-02",
    particles: ["👋", "🌐", "🌊", "🌎", "🙋‍♀️", "🌍", "🙋"],
    content: [
      { 
        type: "text", 
        value: "I am saying something here." 
      },
      {
        type: "code",
        language: "javascript",
        code: `function sayingHello() {
  return "Hello World!";
}

console.log(sayingHello());`,
      },
      { type: "text", value: "Hello" },
      { type: "break" },
      
    ],
  },

  {
    slug: "nesting-joke",
    title: "Nesting and Markdown",
    author: "You",
    date: "2025-09-02",
    edited: "2025-09-02",
    particles: ["🪺", "🪹", "🧺", "📚", "🗃️"],
    content: [
        { type: "text", value: "This is a blog post with collapsibles and code." },
        {
            type: "image",
            src: assets.nesting_joke_1,
            alt: "Sample",
            width: 800,
            height: 640
        },
        {
        type: "collapse",
      title: "Expandable Section",
        // body: ["First **Markdown** block."],
        children: [
            {
            title: "Nested Level 2",
            // body: ["This is level 2"],
            children: [
                {
                title: "Nested Level 3",
                // body: ["Level 3 Markdown content"],
                children: [
                    {
                    title: "Nested Level 4",
                    // body: ["Level 4 Markdown content"],
                    children: [
                        {
                        title: "Nested Level 5",
                        body: ["No More"]
                        }
                    ]
                    }
                ]
                }
            ]
            }
        ]
        },
        { type: "break" }, // <-- you control exactly where it appears
        {
        type: "code",
        code: `function hello(name) {
console.log("Hello, " + name);
}
hello("Blog!");`,
        },
    ],
  },

  {
    slug: "8-design-pattern",
    title: "Eight Design Pattern",
    author: "Admin",
    date: "2025-05-23",
    edited: "2025-09-02",
    particles: ["👋", "🌐", "🌊", "🌎", "🙋‍♀️", "🌍", "🙋"],
    content: [
      { 
        type: "text", 
        value: "This article isn't complete - as I am still reading and learning the various topics." 
      },
      {
        type: "code",
        language: "python",
        code: `def saying_hello():
  return "Hello World!"

print(saying_hello())`,
      },
      { type: "text", value: "Hello" },
      { type: "break" },
      
    ],
  },

];
