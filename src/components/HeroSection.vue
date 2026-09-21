<script setup></script>

<template>
    <section class="hero">
        <div class="section-inner hero__layout">
            <div>
                <span class="hero__eyebrow"
                    >Frontend developer · Indonesia</span
                >
                <h1 class="hero__title">
                    Turning designs into <em>seamless</em> web experiences.
                </h1>
                <p class="hero__copy">
                    I transform UI/UX designs into responsive web applications
                    and connect them to reliable REST APIs and GraphQL services.
                </p>
                <a href="#contact" class="button-outline"
                    >Let's connect <span aria-hidden="true">↗</span></a
                >
            </div>

            <div class="hero-panel" aria-label="Developer profile">
                <div class="hero-panel__top">
                    <div class="hero-panel__dots" aria-hidden="true">
                        <span></span><span></span><span></span>
                    </div>
                    <span class="hero-panel__label">profile.json</span>
                </div>
                <div class="hero-panel__body">
                    <div class="hero-panel__code">
                        <div>{</div>
                        <div>
                            &nbsp;&nbsp;<span class="code-key">"role"</span>:
                            <span class="code-value">"Frontend Developer"</span
                            >,
                        </div>
                        <div>
                            &nbsp;&nbsp;<span class="code-key">"focus"</span>:
                            <span class="code-value">"Vue &amp; Nuxt"</span>,
                        </div>
                        <div>
                            &nbsp;&nbsp;<span class="code-key">"location"</span
                            >: <span class="code-value">"Indonesia"</span>,
                        </div>
                        <div>
                            &nbsp;&nbsp;<span class="code-key">"status"</span>:
                            <span class="code-value">"open to ideas"</span>
                        </div>
                        <div>}</div>
                    </div>
                    <div class="hero-panel__footer">
                        <span class="tech-pill">Vue.js</span>
                        <span class="tech-pill">Nuxt.js</span>
                        <span class="tech-pill">Javascript</span>
                        <span class="tech-pill">REST API</span>
                        <span class="tech-pill">GraphQL</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
