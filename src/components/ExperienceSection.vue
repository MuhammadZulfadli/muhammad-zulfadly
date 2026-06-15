<script setup>
const experiences = [
  {
    role: "Frontend Developer",
    company: "Universitas Terbuka",
    duration: "2022 - Present",
    description:
      "As a front-end Developer I am responsible for implementing the visual elements that users see and interact with in web applications. In general, I'm used to working with back - end developers, who are responsible for the server- side application logic and integration of the work that front - end developers do.I’m used to Use a variety of programming languages in order to create user - friendly web pages, maintain and improve company website, work in multidisciplinary team with other professionals such as back - end developers and web designers.",
    highlights: [
      "Designing and maintaining the user interface of web applications",
      "Collaborating with back-end developers to integrate front-end and back-end components",
      "Implementing responsive designs for cross-device compatibility",
      "Optimizing web applications for performance and scalability",
      "Conducting user research and usability testing",
      "Participating in code reviews and ensuring code quality",
    ],
    technologies: [
      "Javascript",
      "TypeScript",
      "Vue",
      "Tailwind CSS",
      "REST API",
      "GraphQL",
    ],
  },
  {
    role: "Frontend Developer Bootcamp",
    company: "Praxis Academy",
    duration: "August 2020 - November 2020",
    description:
      "The full time Front End bootcamp at Praxis Academy is designed to transform myself from coding novice to programming advanced in twelve weeks of intensive technical and career readiness training. Bootcamp with a solid foundation of coding Front End experiences using Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), Javascript, Vue Js, Node Js",
    highlights: [
      "Complete mini projects",
      "Learned with mentor and colleagues team",
      "Implemented best practice of Frontend Development"

    ],
    technologies: ["Vue", "JavaScript", "Node JS", "CSS"],
  },
  {
    role: "Software Engineer Bootcamp",
    company: "Refactory",
    duration: "February 2020 - April 2020",
    description:
      "The full time Front End bootcamp at Refactory.id is designed to transform myself from coding novice to programming advanced in twelve weeks of intensive technical and career readiness training. Bootcamp with a solid foundation of coding Front End experiences using Hypertext Markup Language (HTML), Cascading Style Sheets (CSS), Javascript, Vue Js, Node Js, Python, and Microservices.",
    highlights: [
      "Learned and practiced basic algorithms",
      "Mastered OOP and functional programming concepts",
      "Developed simple CRUD applications",
      "Participated in pair programming and code reviews",
    ],
    technologies: ["JavaScript", "Node.js", "Express JS", "Vue", "Git"],
  },
];
</script>

<template>
  <section id="experience" class="w-full py-24 border-t border-hairline bg-canvas-soft">
    <div class="max-w-7xl mx-auto px-6 md:px-8">
      <div class="mb-12">
        <span class="eyebrow text-primary font-semibold tracking-[0.125px]">Career History</span>
        <h2 class="heading-1 text-ink mt-2 mb-4">Professional Experience</h2>
        <p class="body-md text-ink-secondary">
          My journey as a software developer and continuous learning path.
        </p>
      </div>

      <div
        class="space-y-10 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-hairline">
        <div v-for="(exp, index) in experiences" :key="index" class="relative pl-10 group">
          <!-- Dot indicator as primary blue colored ring -->
          <div
            class="absolute left-[7px] top-[6px] w-3 h-3 bg-canvas border-2 border-primary group-hover:bg-primary transition-colors duration-200 rounded-full">
          </div>

          <div class="p-6 bg-canvas border border-hairline rounded-lg hover:shadow-soft-sm transition-all duration-300">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <div>
                <h3 class="heading-3 text-ink leading-tight">{{ exp.role }}</h3>
                <p class="body-md text-primary font-semibold mt-1">
                  {{ exp.company }}
                </p>
              </div>
              <span
                class="eyebrow text-xs text-ink-muted bg-canvas-soft px-3 py-1.5 rounded-md border border-hairline font-mono">{{
                  exp.duration }}</span>
            </div>

            <p class="body-sm text-ink-secondary mb-4 leading-relaxed">
              {{ exp.description }}
            </p>

            <ul v-if="exp.highlights" class="space-y-2 mb-5">
              <li v-for="(item, i) in exp.highlights" :key="i" class="body-sm text-ink-muted flex items-start gap-2">
                <span class="text-primary mt-[4px] text-xs">▪</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div v-if="exp.technologies" class="flex flex-wrap gap-2">
              <span v-for="(tech, i) in exp.technologies" :key="i"
                class="eyebrow text-[10px] bg-canvas-soft text-ink-muted px-2.5 py-1 rounded border border-hairline hover:text-ink transition-colors">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>