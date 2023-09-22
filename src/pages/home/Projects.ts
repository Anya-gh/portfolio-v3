export type ProjectsType = {
  name: string,
  tags: string[]
  description: string,
  blog?: string
}
export const Projects: ProjectsType[] = [
  {
    name: "MAIO",
    tags: ["Web development", "React", "TypeScript", "Tailwind", "Data Processing", "Python", "SQL"],
    description: "A collection of mental health tools all in one place. Using React, TypeScript, Tailwind for the front-end and Python, SQL for the back-end.",
    blog: "https://anya-gh.github.io/blog/maio/part-1-(getting-started)"
  },
  {
    name: "Fighting Game Analysis Engine",
    tags: ["Machine Learning", "Data Processing", "Python", "Algorithm Design"],
    description: "Analysis engines are tools to get better at games; I made one for a fighting game, primarily with Python, using machine learning.",
    blog: "https://anya-gh.github.io/blog/fighting-game-analysis-engine"
  },
  {
    name: "Music Humanisation",
    tags: ["Machine Learning", "Data Processing", "Python", "PyTorch", "Algorithm Design"],
    description: "Computers are capable of playing back music, but it often sounds robotic and boring. With myself as project manager, my peers and I created a system to play music back the way a human would, with human dynamics and tempo.",
    blog: "https://anya-gh.github.io/blog/music-humanisation"
  },
  {
    name: "Packet sniffer",
    tags: ["Data Processing", "C"],
    description: "As part of a module on networks and system architecture, I created a packet sniffer in C to defend against various cyber attacks."
  },
  {
    name: "Live conference review tool",
    tags: ["Web development", "React", "Data Processing", "Python", "SQL"],
    description: "In a group project my peers and I created a tool to allow users to get feedback for conferences, both in real-time and in post, to help speakers improve their conferences."
  },
  {
    name: "Portfolio",
    tags: ["Web Development", "React", "TypeScript", "Tailwind"],
    description: "The very website you're on now! Made with React, TypeScript and Tailwind. I also used Figma for wireframing and making the icons.",
    blog: "https://anya-gh.github.io/blog/portfolio"
  },
  {
    name: "Blog",
    tags: ["Web Development", "React", "TypeScript", "Tailwind"],
    description: "A blog for going deeper into the work I've done. Made with React, TypeScript and Tailwind. I also used Figma for wireframing and making the icons. Click the blog icon from a project to visit its blog post, or click 'BLOG' from the navigation bar.",
    blog: "https://anya-gh.github.io/blog/making-a-blog/part-1-(planning)"
  }
]