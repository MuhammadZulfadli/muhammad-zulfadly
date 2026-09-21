<template>
    <section
        class="border-b border-hairline bg-canvas py-[60px] sm:py-[100px] lg:py-28"
    >
        <div
            class="mx-auto grid w-[calc(100%-32px)] max-w-[1320px] items-center gap-12 sm:w-[calc(100%-48px)] lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)] lg:gap-16"
        >
            <div>
                <span
                    class="mb-5 inline-block bg-coral px-[9px] py-[5px] text-xs font-bold leading-none text-ink"
                    >Frontend developer · Indonesia</span
                >
                <h1
                    class="max-w-[700px] font-display text-[42px] font-semibold leading-[1.1] tracking-[-.04em] text-ink sm:text-[clamp(42px,5.2vw,72px)]"
                >
                    Turning designs into
                    <em class="text-coral">seamless</em> web experiences.
                </h1>
                <p
                    class="my-6 mb-8 max-w-[620px] text-base leading-[1.6] text-ink-muted sm:text-[17px]"
                >
                    I transform UI/UX designs into responsive web applications
                    and connect them to reliable REST APIs and GraphQL services.
                </p>
                <a
                    href="#contact"
                    class="inline-flex min-h-[58px] items-center justify-center gap-1 rounded-full border border-primary px-8 py-4 font-display text-base text-primary transition duration-200 hover:-translate-y-0.5 hover:border-coral hover:text-coral"
                    >Let's connect <span aria-hidden="true">↗</span></a
                >
            </div>

            <div
                class="overflow-hidden rounded-card border border-border-soft bg-white shadow-elevation"
                aria-label="Developer profile"
            >
                <div
                    class="flex items-center justify-between border-b border-hairline px-5 py-4"
                >
                    <div class="flex gap-1.5" aria-hidden="true">
                        <span class="size-2 rounded-full bg-coral"></span
                        ><span class="size-2 rounded-full bg-hairline"></span
                        ><span class="size-2 rounded-full bg-hairline"></span>
                    </div>
                    <span class="font-mono text-xs text-body"
                        >profile.json</span
                    >
                </div>
                <div class="p-5 sm:p-7">
                    <div class="font-mono text-[15px] leading-[2] text-ink">
                        <div>{</div>
                        <div>
                            &nbsp;&nbsp;<span class="text-coral">"role"</span>:
                            <span class="text-slate">"Frontend Developer"</span
                            >,
                        </div>
                        <div>
                            &nbsp;&nbsp;<span class="text-coral">"focus"</span>:
                            <span class="text-slate">"Vue &amp; Nuxt"</span>,
                        </div>
                        <div>
                            &nbsp;&nbsp;<span class="text-coral"
                                >"location"</span
                            >: <span class="text-slate">"Indonesia"</span>,
                        </div>
                        <div>
                            &nbsp;&nbsp;<span class="text-coral">"status"</span
                            >:
                            <span class="text-slate">"open to ideas"</span>
                        </div>
                        <div>}</div>
                    </div>
                    <div class="mt-6 flex flex-wrap gap-2">
                        <span
                            class="rounded-md bg-surface-raised px-2.5 py-1.5 font-mono text-xs font-bold text-slate"
                            >Vue.js</span
                        >
                        <span
                            class="rounded-md bg-surface-raised px-2.5 py-1.5 font-mono text-xs font-bold text-slate"
                            >Nuxt.js</span
                        >
                        <span
                            class="rounded-md bg-surface-raised px-2.5 py-1.5 font-mono text-xs font-bold text-slate"
                            >Javascript</span
                        >
                        <span
                            class="rounded-md bg-surface-raised px-2.5 py-1.5 font-mono text-xs font-bold text-slate"
                            >REST API</span
                        >
                        <span
                            class="rounded-md bg-surface-raised px-2.5 py-1.5 font-mono text-xs font-bold text-slate"
                            >GraphQL</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
