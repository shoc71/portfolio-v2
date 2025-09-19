import { assets } from "@/assets/assets";

export const projects = [
  // {
  //   slug: "test",
  //   title: "Test Card",
  //   description: [
  //     "Novel Seeker - E-commerce bookstore MVP built for the client with admin privileges, tracking purchases, and managing products.",
  //     "This app helps readers discover new novels.",
  //     { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
  //     "You can search by genre, author, or popularity."
  //   ],
  //   image: assets.test_img,
  //   githubUrl: "https://github.com/your/repo",
  //   liveUrl: "https://novelseeker.com",
  //   tools: ["dotnet", "angular", "maven", "api", "appwrite", "aws", "axios",
  //           // "babel", "bcrypt", "bootstrap", "c", "csharp", "cplusplus", "chakraui", "cicd",
  //           // "cloud", "cloudinary", "css3", "docker", "express", "extension", "git",
  //           // "github", "html5", "java", "javascript", "jira", "json", "jwt", "kubernetes",
  //           // "mongodb", "mssqlserver", "next", "node", "postgresql", "postman", "python",
  //           // "react", "redis", "shadcn", "springboot", "sql", "stripe", "tailwind",
  //           // "firebase", "terraform", "prometheus", "svelte", "junit", "vercel",
  //           // "render", "heroku", "jest", "playwright", "gradle", "graphql",
  //           // "typescript", "linux", "kafka", "oracle",
  //           // "golang", "elixir", "azure", "bitbucket", "jenkins",
  //           // "databricks", "rust", "ruby", "dynamodb", "pulumi",
  //         ],
  // },

  {
    slug: "novel-seeker",
    title: "Novel Seeker",
    description: [
      "Novel Seeker - E-commerce bookstore MVP built for the client with admin privileges, tracking purchases, and managing products.",
      "This app helps readers discover new novels.",
      { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
      "You can search by genre, author, or popularity.",
      "The current model that's available to the public is the mock-up made for a client.",
      "Sadly, they took it down after August but they allowed me to keep the mockup as proof I did the project."
    ],
    image: assets.novel_seeker,
    githubUrl: "https://github.com/shoc71/Novel-Seeker",
    liveUrl: "https://novel-seeker-ef3f.onrender.com/",
    tools: ["mongodb", "express", "react", "nodejs", "stripe",
            "redis", "cloudinary", "jwt", "bcrypt", "tailwind",
            "html5", "css3", "javascript", "json", "api"
          ],
    particles: ["🛍️", "📒", "🔖", "🧧", "🗒️"]
  },

  {
    slug: "job-tracker-extension",
    title: "Job Tracker Extension",
    description: [
      "Know where you applied and log all the information in one spot",
      "This app helps readers discover new novels.",
      { 
        type: "image", 
        src: assets.job_ext_app_main_page,
        alt: "Novel Seeker Preview",
        size: "w-full sm:w-[400px] md:w-[600px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] h-auto mx-auto"
      },
      "You can search by genre, author, or popularity."
    ],
    image: assets.job_app_ext_top,
    githubUrl: "https://github.com/shoc71/Job-Tracker-Extension",
    liveUrl: "https://jobtracker.com",
    tools: ["html5", "css3", "javascript", "json", 
            "nodejs", "bootstrap", "extension"
          ],
    particles: ["🏢", "👨‍💻", "💼", "🔧"]
  },

  {
    slug: "product-store",
    title: "Product Store",
    description: [
      "A Product Store where you can create a product and put it online for sale.",
      "This app helps readers discover new novels.",
      { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
      "You can search by genre, author, or popularity.",
      { type: "image", src: "/images/novel-seeker-preview.png", alt: "Novel Seeker Preview" },
    ],
    image: assets.product_store,
    githubUrl: "https://github.com/shoc71/product-store",
    liveUrl: "https://product-store-4h1p.onrender.com/",
    tools: ["mongodb", "express", "react", "nodejs", "chakraui",
            "html5", "css3", "javascript"
          ],
    particles: ["🏪", "🛍️", "💰", "💵"]
  },

  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: [
      "This is a Weather-Dashboard app that will show you that weather for today and the next 5 days.",
      "Entering a City location is all you need.",
      { 
        type: "image", 
        src: assets.weather_dashboard_0, 
        alt: "Novel Seeker Preview",
        size: "w-full h-auto sm:w-[300px] md:w-[400px] lg:w-[700px] xl:w-[900px] aspect-[16/9] mx-auto"
      },
      "It uses the weather API callback function making a backend call to display all the required information on to the frontend as pleased.",
      { 
        type: "image", 
        src: assets.weather_dashboard_1, 
        alt: "Novel Seeker Preview",
        size: "w-full h-auto sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[1100px] mx-auto"
      },
    ],
    image: assets.weather_dashboard_0,
    githubUrl: "https://github.com/shoc71/Weather-Dashboard",
    liveUrl: "https://weather-dashboard-ymxb.onrender.com/",
    tools: [ "nodejs", "bootstrap", "html5", "css3", 
             "javascript", "api"
            ],
    particles: ["🌞", "🌤", "⛅", "🌥", "⛈️", "🌦️", "🌤️", "🌦", "🌧️", "🌡️", 
                "🌩️", "🌨", "❄️", "🌬", "🌪", "🌫", "🌬️", "🌈", "☁️", "🌡", 
                "☔️", "🌅", "🌇", "❄️"]
  },
];
