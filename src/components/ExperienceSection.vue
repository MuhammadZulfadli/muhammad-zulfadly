<script setup>
const experiences = [
  {
    role: "Frontend Developer",
    company: "Universitas Terbuka",
    duration: "2022 - Present",
    description:
      "As a front-end Developer I am responsible for implementing the visual elements that users see and interact with in web applications. In general, I'm used to working with back - end developers, who are responsible for the server- side application logic and integration of the work that front - end developers do.",
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
      "The full time Front End bootcamp at Praxis Academy is designed to transform myself from coding novice to programming advanced in twelve weeks of intensive technical and career readiness training.",
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
      "The full time Front End bootcamp at Refactory.id is designed to transform myself from coding novice to programming advanced in twelve weeks of intensive technical and career readiness training.",
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
  <section id="experience" class="w-full py-24 bg-fog">
    <div class="max-w-[1080px] mx-auto px-6 md:px-8">
      <div class="mb-16 flex flex-col items-center text-center">
        <h2 class="font-heading text-[32px] text-ink-black font-light mb-4">Professional Experience</h2>
        <p class="font-inter text-[16px] text-graphite max-w-2xl">
          My journey as a software developer and continuous learning path.
        </p>
      </div>

      <div class="space-y-[40px] relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-hairline">
        <div v-for="(exp, index) in experiences" :key="index" class="relative pl-10 group">
          <!-- Dot indicator as Sage colored ring -->
          <div class="absolute left-[7px] top-[6px] w-3 h-3 bg-paper-white border-[2px] border-sage group-hover:bg-sage transition-colors duration-200 rounded-full">
          </div>

          <div class="p-[24px] bg-paper-white rounded-[12px] shadow-subtle hover:shadow-sm transition-all duration-300">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <h3 class="font-heading text-[26px] font-light text-ink-black leading-[1]">{{ exp.role }}</h3>
                <p class="font-inter text-[14px] text-warm-charcoal font-medium mt-2">
                  {{ exp.company }}
                </p>
              </div>
              <span class="font-inter text-[12px] text-graphite bg-fog px-[12px] py-[6px] rounded-[4px]">
                {{ exp.duration }}
              </span>
            </div>

            <p class="font-inter text-[15px] text-graphite mb-4 leading-[1.6]">
              {{ exp.description }}
            </p>

            <ul v-if="exp.highlights" class="space-y-2 mb-6">
              <li v-for="(item, i) in exp.highlights" :key="i" class="font-inter text-[14px] text-graphite flex items-start gap-2">
                <span class="text-sage mt-[4px] text-xs">▪</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div v-if="exp.technologies" class="flex flex-wrap gap-2">
              <span v-for="(tech, i) in exp.technologies" :key="i"
                class="font-inter text-[12px] bg-fog text-graphite px-[8px] py-[4px] rounded-[4px]">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>