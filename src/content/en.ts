import type { Content } from './types';

export const en: Content = {
  lang: 'en',
  dir: 'ltr',
  nav: {
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
  },
  topNav: {
    brand: 'UXI · 2026',
    links: {
      toolkit: 'Toolkit',
      lecture: 'Lecture',
      who: 'Who',
    },
    menuLabel: 'Menu',
    closeLabel: 'Close',
  },
  hero: {
    tag: '§ 00',
    meta: 'UXI 2026 — NETA + DOTAN',
    headline: 'You already have what you need.',
    subhead:
      'The minimum viable toolkit for designers to go from watching the talk to shipping a working AI-powered POC — in under two hours.',
    receiptPrefix: 'BUILT',
    receiptItems: ['6 HOURS', '142 PROMPTS', '38 COMMITS'],
    receiptSuffix: 'WITH',
    receiptLinkLabel: 'CLAUDE CODE',
    cta: 'Press to start',
  },
  why: {
    tag: '§ 01',
    meta: '4 KEY IDEAS FROM OUR UXI TALK',
    title: 'Why we built this.',
    intro:
      'Four ideas from our UXI 2026 talk on designing with AI. The rest of this website turns them into tools you can use today.',
    takeaways: [
      {
        number: '01',
        headline: 'The designer’s role expands.',
        body:
          'The job no longer ends at defining and designing. It now includes actually building.',
      },
      {
        number: '02',
        headline: 'Show, don’t tell.',
        body:
          'A working product beats words. As the cost of building a POC drops, it gets easier to prove a big idea — even without official resources. Two unlocks: **vibe coding** (AI tools that let designers build real prototypes in hours) and **under-the-table collaborations** (relationships inside the org turning into real help at the right moment).',
      },
      {
        number: '03',
        headline: 'GenAI created a new gap.',
        body:
          'Users know what they want — they just don’t know how to phrase it. With our designer understanding of the customer, we can talk to the model on their behalf, so the interface stays simple (a button, not a text field).',
      },
      {
        number: '04',
        headline: 'We already have most of the tools.',
        body:
          'Deep user understanding, product thinking, working with teams. The rest — like prompt engineering — can be learned. That’s what the rest of this website is for.',
      },
    ],
  },
  poc: {
    tag: '§ 02',
    meta: '6 STEPS — ~1 HOUR',
    title: 'Build your first POC in an hour.',
    intro:
      'AI Studio is all you need to get the first version on screen. No install, no credit card. Six steps from zero to a clickable prototype you can put in front of a teammate.',
    steps: [
      {
        number: '01',
        title: 'Sign in to Google AI Studio.',
        body:
          'Open [aistudio.google.com](https://aistudio.google.com) and sign in with any Google account. Free to start, no card required. This is where you will do all the prompting and building.',
        screenshotAlt: 'Google AI Studio dashboard after sign-in',
        screenshot: 'step-01.mp4',
      },
      {
        number: '02',
        title: 'Brief our Gem, get a sharper initial prompt.',
        body:
          'Open the [prompt-helper Gem](https://gemini.google.com/gem/15DZwOjGR4ihh14Dg-MnVOKpswkW8KRiw?usp=sharing) and describe what you want to build in one or two sentences — mock data is fine ("a dashboard that shows my last 7 workouts as cards"). The Gem interviews you and writes a structured initial prompt that applies all nine moves from § 03.',
        screenshotAlt: 'Prompt-helper Gem turning a rough idea into a structured prompt',
        screenshot: 'step-02.mp4',
      },
      {
        number: '03',
        title: 'Paste the prompt and watch the magic happen.',
        body:
          'Back in [AI Studio](https://aistudio.google.com), paste the prompt the Gem wrote and hit run. Wait a beat. The first working version of your app appears in the preview pane — clickable, real, in front of your eyes.',
        screenshotAlt: 'AI Studio rendering the generated app preview',
        screenshot: 'step-03.mp4',
      },
      {
        number: '04',
        title: 'Iterate — ask AI Studio for the changes you want.',
        body:
          'Don\'t start over. In the same chat, tell AI Studio what to tweak: "make the cards smaller", "add a search bar at the top", "switch the labels to Hebrew". Each ask updates the running app. This is the designer move — prompts are specs, and specs get revisions.',
        screenshotAlt: 'Iterating on the generated app via follow-up messages',
        screenshot: 'step-04.mp4',
      },
      {
        number: '05',
        title: 'Connect a real API key when you need real responses.',
        body:
          'While you build, AI Studio uses mock calls so you don\'t burn quota. When you\'re ready to test with real Gemini or Nano Banana output, drop in an API key. Don\'t have one? <b>Ask someone in your engineering group.</b> Most companies already have project keys you can borrow for prototyping — no card, no procurement, no waiting.',
        screenshotAlt: 'Connecting an API key in AI Studio settings',
      },
      {
        number: '06',
        title: 'Show two teammates. Then your boss. Watch their reaction.',
        body:
          'Send the link or share your screen. Watch their face. If they flinch, the prompt is the problem — not the model. Ship rough, learn fast, then polish. This is the whole shift the talk is about: designers can now build the thing they used to brief.',
        screenshotAlt: 'Sharing the prototype with a teammate',
      },
    ],
  },
  principles: {
    tag: '§ 03',
    meta: '9 PRINCIPLES',
    title: 'Prompt engineering essentials.',
    intro:
      'These nine moves work for everything you reach for an LLM to do — ideation, drafting Slack replies, writing docs, summarising research, briefing a teammate. Same skill, every surface. And model-agnostic: Gemini, Claude, GPT, or whatever ships next month.',
    items: [
      {
        number: '01',
        name: 'Be specific',
        explanation: 'Vague in, vague out. Swap adjectives for nouns, and nouns for numbers.',
        snippet:
          '❯ rewrite 3 error messages for file upload:\n  size limit, bad format, timeout.\n  max 12 words each, no blame, no apologies.',
      },
      {
        number: '02',
        name: 'Give context',
        explanation:
          "Tell the model who you are, what you're making, and what constraints matter.",
        snippet:
          "❯ you're a senior product designer on a B2B\n  analytics tool. we're adding mobile dashboards\n  for ops managers. draft copy for the empty state.",
      },
      {
        number: '03',
        name: 'Use structure',
        explanation:
          'Label your sections with delimiters. The model reads structure the way you read a spec.',
        snippet:
          '# ROLE     UX writer.\n# TASK     Rewrite onboarding copy.\n# RULES    - Under 10 words per line\n           - Active voice\n# INPUT    {paste here}',
      },
      {
        number: '04',
        name: 'Show, don’t tell',
        explanation:
          'For anything subjective — tone, taste, style — one example beats a paragraph of description.',
        snippet:
          '❯ rewrite button labels in our voice.\n  "Save draft"   → "Keep this for later"\n  "Delete"       → "Throw it out"\n  now rewrite:   "Cancel subscription"',
      },
      {
        number: '05',
        name: 'Split the task',
        explanation:
          'One prompt per step beats one mega-prompt. Review between steps — catch drift early.',
        snippet:
          'step 1: list 5 persona archetypes for a budgeting app\n(review, pick one)\nstep 2: expand #3 — goals, frustrations, one quote\n(review)\nstep 3: write her JTBD statement',
      },
      {
        number: '06',
        name: 'Self-check',
        explanation:
          'Tell the model to verify against the rules before answering. It catches its own slips.',
        snippet:
          '❯ draft 5 pricing-page headlines.\n  before you answer, check each one:\n  under 8 words? avoids "powerful"? active voice?',
      },
      {
        number: '07',
        name: 'Frame positively',
        explanation:
          'Tell it what to do, not what to avoid. Negative instructions leak through.',
        snippet:
          "✗ don't use jargon, don't sound corporate\n✓ write like a curious teenager.\n  short sentences. specific nouns.\n  one verb per line.",
      },
      {
        number: '08',
        name: 'Iterate',
        explanation:
          'Prompts are specs. Treat revisions like Figma versions — name them, keep what works.',
        snippet:
          'v1  research synthesis — too vague\nv2  +"3 themes, 1 surprise per theme" — warmer\nv3  +format: "theme / quote / implication" — ship it',
      },
      {
        number: '09',
        name: 'Debug with "why"',
        explanation:
          'When output is off, ask the model to diagnose before you rewrite the prompt.',
        snippet:
          "❯ here's your last output. here's my prompt.\n  which rule did you break, and why?\n  suggest 2 edits that would fix it.",
      },
    ],
    starterPromptLabel: 'PROMPT ENHANCER — ALL 9, IN ONE PASTE',
    starterPromptNote:
      'Don’t want to memorise the nine moves above? This system prompt applies every one of them for you. Paste it into any chat — Gemini, ChatGPT, Claude, anywhere. The model will reply asking for your rough prompt. Send it as the next message, and you get back a sharper version with every rule on this website applied. No edits to the block needed.',
    starterPromptTask: 'All nine moves, applied automatically.',
    starterPrompt: `# ROLE
You are a senior prompt engineer. You have rewritten
thousands of rough prompts into ones that ship reliable
output on the first try. You speak briefly and produce a
single rewritten prompt as your final artefact.

# AUDIENCE
The person you are helping is a designer, PM, or maker
sharpening prompts for day-to-day work — copy, briefs,
images, research summaries. They want a prompt that is
clearer, not longer.

# YOUR JOB IN THIS CHAT
Two phases:

PHASE 1 — On this first turn, reply ONLY with the greeting
below, exactly. Then stop and wait.

  "I'm here to sharpen your prompt. Paste the rough version
  you want to improve — even one line is enough — and I'll
  rewrite it."

PHASE 2 — On the user's next message, treat their text as
the rough prompt. Rewrite it using the 9 moves below and
return only the rewritten prompt. If the user sends another
message after that, treat it as a new rough prompt and
rewrite again.

# THE 9 MOVES TO APPLY
01 BE SPECIFIC — adjectives become nouns, nouns become
   numbers. Example: "short" → "≤12 words". "friendly" →
   "warm, second-person, contractions allowed".

02 GIVE CONTEXT — name the role, product, audience, and
   constraint that change the answer. Skip context that
   doesn't.

03 USE STRUCTURE — separate sections with # headings.
   Default skeleton: # ROLE / # TASK / # RULES /
   # OUTPUT FORMAT / # INPUT. Use only the headings that
   apply.

04 SHOW, DON'T TELL — for anything subjective (tone, taste,
   style), include 1–2 mini-examples in the rewritten
   prompt. See WORKED EXAMPLE below.

05 SPLIT THE TASK — break compound jobs into numbered
   sub-steps. Two jobs in one prompt usually means two
   prompts.

06 SELF-CHECK — end the rewritten prompt with: "Before you
   answer, verify [the rules that matter most]."

07 FRAME POSITIVELY — write what to do. Replace "don't be
   corporate" with "write like a curious teenager: short
   sentences, one verb per line".

08 ITERATE — make every rule atomic and one-line so the
   user can revise a single rule and re-run without
   rewriting the whole prompt. No metadata footers, no
   "// try: …" knobs — just clean, edit-friendly rules.

09 DEBUG WITH "WHY" — close with: "If the output drifts,
   name which rule was broken and suggest two edits."

# WORKED EXAMPLE
One full demo of PHASE 2. Everything between the fences is
literal content for that turn — the meta-instructions resume
at "End of example" below.

The user sends (between the fences):
~~~
write a short funny tagline for my podcast about ai for
designers
~~~

You reply with the rewritten prompt — return only the content
between the fences, without the fences themselves:
~~~
# ROLE
You are a copywriter who writes for design publications.

# TASK
Write 5 tagline options for a podcast.

# CONTEXT
- Topic: AI tools for product designers
- Audience: senior designers, skeptical and time-starved
- Voice: dry, knowing, never preachy

# RULES
- ≤8 words each
- Active voice, one concrete idea per line
- Each tagline must work standalone (no setup needed)

# TONE EXAMPLES TO MATCH
- "Less hype. More keyboard."
- "Design, with the cheat codes on."

# OUTPUT
Return 5 numbered taglines and stop.

Before you answer, verify each is ≤8 words, active voice,
and tonally close to the examples. If the output drifts,
name which rule was broken and suggest two edits.
~~~

End of example. The sections below are instructions for you,
not part of any reply.

# WHEN INFO IS MISSING
If the rough prompt is missing something you need
(audience, format, length, tone), pick a reasonable default
and mark it with \`// assumed:\` so the user can correct it.
If two interpretations are equally likely, ask exactly one
clarifying question and stop.

# IF THE USER ASKS FOR A VARIATION
Produce one alternative version (different tone, length, or
format as requested) and stop.

# OUTPUT RULE
Reply with the rewritten prompt only — ready to paste into
any LLM. End at its final line.

# SELF-CHECK BEFORE EVERY REWRITE
Confirm:
- Every vague adjective got grounded with a number or
  example.
- Every rule says what to do (not what to avoid).
- One subjective rule has at least one example.
- A self-check line is present near the end.
- A "why" debug line is present near the end.
- The user's intent is preserved.`,
    starterPromptTipLabel: 'TIP',
    starterPromptTip:
      'Want this on tap? Create your own Gemini Gem or custom GPT and paste this block in as the <code>system prompt</code>. You get a one-click prompt enhancer that lives in your sidebar — same nine moves, zero copy-paste.',
    copyLabel: 'COPY',
    copiedLabel: 'COPIED ✓',
  },
  models: {
    tag: '§ 04',
    meta: '3 OFFICIAL GUIDES',
    title: 'Going deeper — model-specific guides.',
    intro:
      'The best prompting guides are written by the people who trained the models. Three canonical resources, one per modality. Bookmark the ones that fit your work.',
    items: [
      {
        label: 'Gemini',
        kind: 'TEXT',
        description:
          'Any LLM task — chat, extraction, analysis, synthesis. The workhorse. Start here.',
        url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies',
        displayUrl: 'ai.google.dev/gemini/docs',
      },
      {
        label: 'Nano Banana',
        kind: 'IMAGE',
        description:
          'Gemini image models. Generation and editing. Pair the official API doc with the deeper prompting playbook for taste.',
        url: 'https://ai.google.dev/gemini-api/docs/image-generation',
        displayUrl: 'ai.google.dev/gemini/docs/image-generation',
      },
      {
        label: 'LTX',
        kind: 'VIDEO',
        description:
          'Generating video. Shorter prompts, stronger scene grammar. The official prompting guide is dense but complete.',
        url: 'https://docs.ltx.video/api-documentation/prompting-guide',
        displayUrl: 'docs.ltx.video/prompting-guide',
      },
    ],
  },
  services: {
    tag: '§ 05',
    meta: 'DOTAN BECK — SOLO',
    title: 'Lectures & workshops on integrating AI into products and day-to-day work.',
    intro:
      'If this kit helped, imagine what a full session does. I run lectures and workshops for teams and individuals who want to bring AI into how they build products and how they work.',
    offerings: [
      {
        label: 'FOR COMPANIES',
        title: 'Keynotes & team sessions',
        body:
          'Talks on how AI changes the way products get built — and how teams can actually act on it.',
      },
      {
        label: 'FOR TEAMS',
        title: 'Hands-on workshops',
        body:
          'Vibe coding, prompt engineering, "build your first POC in a day," and integrating AI into existing workflows.',
      },
      {
        label: 'FOR INDIVIDUALS',
        title: '1:1 sessions',
        body:
          'Coaching for designers, PMs, and engineers starting their AI journey — tailored to your role and current project.',
      },
    ],
    bioName: 'Dotan Beck',
    bioRole: 'AI Lab Team Lead, Lightricks',
    bioBody:
      'I lead a team building AI innovation POCs across the LTX ecosystem, and I teach designers and PMs how to do the same.',
    cta: "Let's connect on LinkedIn",
    linkedin: 'https://www.linkedin.com/in/dotanbeck/',
  },
  who: {
    tag: '§ WHO',
    meta: 'BUILDERS · TALKERS',
    title: 'We gave the talk. We built this website.',
    intro:
      'Two product people at Lightricks, betting that the designer’s job now includes actually building the thing. This website is the proof of work.',
    talkTitle:
      'Designers Leading Product: Product Guerrilla in the Vibe Coding Era',
    list: [
      {
        name: 'Neta Keret',
        role: 'Product Design Team Lead, Facetune — Lightricks',
        bio:
          'Leads product design for Facetune, focused on holistic, data-driven experiences for the app’s end users. Neta started the project that became the talk — the morning-idea that grew into a shipped product in three weeks.',
        initials: 'NK',
        imageUrl: '/designer-ai-starter-kit/who/neta.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/netakeret/',
        linkedinLabel: 'LINKEDIN ↗',
      },
      {
        name: 'Dotan Beck',
        role: 'AI Labs Team Lead & LLM Engineer — Lightricks',
        bio:
          'Drives product-tech strategy for generative AI across Lightricks, shipping at the scale of millions of users. Dotan joined the project as the prompt engineer, teaching the designers to write the rules — and vibe-coded this website in an afternoon.',
        initials: 'DB',
        imageUrl: '/designer-ai-starter-kit/who/dotan.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/dotanbeck/',
        linkedinLabel: 'LINKEDIN ↗',
      },
    ],
    creditsLabel: 'WHAT WE USED',
    creditsIntro:
      'The medium is the message. Here is the actual stack — nothing hidden, nothing heroic.',
    credits: [
      { label: 'CODE AGENT', value: 'Claude Code' },
      { label: 'STACK', value: 'Vite · React · TypeScript · Tailwind' },
      { label: 'HOSTING', value: 'GitHub Pages' },
      {
        label: 'SOURCE',
        value: 'github.com/dotanbeck/designer-ai-starter-kit',
        url: 'https://github.com/dotanbeck/designer-ai-starter-kit',
      },
    ],
    watchUxiLabel: 'Talk website on UXI Live →',
    watchUxiUrl:
      'https://uxilive.co.il/2026/product-guerrilla-in-vibe-code-era-dotan-neta/',
    lectureLabel: 'Read the full talk →',
  },
  footer: {
    credits: 'UXI 2026 — Neta + Dotan',
    builtWith: 'BUILT WITH CLAUDE CODE · HOSTED ON GITHUB PAGES',
  },
  langToggle: {
    en: 'EN',
    he: 'עב',
    ariaLabel: 'Toggle language',
  },
  lecture: {
    kicker: 'UXI 2026 — THE TALK',
    talkTitle:
      'Designers Leading Product: Product Guerrilla in the Vibe Coding Era',
    speakersLine: 'Neta Keret · Dotan Beck — Lightricks',
    journeyLabel: 'THE JOURNEY · ONE BUTTON, THREE WEEKS',
    journeyTitle: 'How one button shipped.',
    journeyIntro:
      'Three weeks from a designer’s morning idea to a shipped feature — through an afternoon prototype, an under-an-hour POC, and an under-the-table cross-functional sprint.',
    beats: [
      {
        number: '01',
        headline: 'The idea — one button.',
        shortLabel: 'Idea',
        body:
          'August 2025: Google ships Nano Banana — image quality we hadn’t seen. The promise was clean: *what you imagine, you get.* The catch: only if you know how to ask. The designer move is to make the phrasing disappear. No prompt box. One shutter button. A hunch.',
        quote: 'כמה מטופש — ככה פשוט.',
        quoteAttribution: 'Neta',
        quoteLang: 'he',
        phase: 'guerrilla',
      },
      {
        number: '02',
        headline: 'Figma won’t cut it.',
        shortLabel: 'Prototyping',
        body:
          'A Figma mock can show a button — it can’t show the model. And the experience *is* the model’s response. So the designer built the prototype directly in AI Studio. An afternoon’s work. Then walked the hallway with the live mock — two birds, one stone: user-testing the experience *and* rehearsing the pitch, catching people between meetings.',
        quote: 'רואים את הפוטנציאל, אבל זה עדיין מרגיש כמו דמו.',
        quoteAttribution: 'Neta',
        quoteLang: 'he',
        phase: 'guerrilla',
      },
      {
        number: '03',
        headline: 'Real API. Real problems.',
        shortLabel: 'Real API',
        body:
          'Mock runs won’t ship a feature. Plugged in an API key, ran real photos through Nano Banana — and the output drifted: lighting changed, identities softened, the model wandered. That’s where Dotan came in. The designers had hit a prompt-quality wall. Together they read the docs, ran prompt-engineering sessions, and rewrote the prompt round by round — positive framing, a self-check step, the right rule in the right section. The model started holding.',
        quote: 'ופתאום — זה כבר לא ״רעיון צד״. זה ממש עובד.',
        quoteAttribution: 'Neta',
        quoteLang: 'he',
        phase: 'guerrilla',
      },
      {
        number: '04',
        headline: 'CPO approves.',
        shortLabel: 'CPO approves',
        isPivot: true,
      },
      {
        number: '05',
        headline: 'Guerrilla → real project.',
        shortLabel: 'Real project',
        body:
          'PM assigned, priorities set, validations, data, iteration. Three weeks, total — from that morning-idea to a production build. Few resources. People helping “on the side.” The process looked nothing like the usual — no wireframes, no Figma handoff — but the output was there.',
        quote:
          'מהרגע הזה הפרויקט הוא כבר לא פרויקט גרילה — הוא פרויקט מסודר.',
        quoteAttribution: 'Dotan',
        quoteLang: 'he',
        phase: 'product',
      },
    ],
    slidesLabel: 'SLIDES',
    slides: [
      { file: 'slide-01.jpg', caption: 'Title — Designers Leading Product · Neta + Dotan' },
      { file: 'slide-02.jpg', caption: 'The problem — “I hate myself when an ugly photo comes out”' },
      { file: 'slide-03.jpg', caption: '…and so do most Facetune users' },
      { file: 'slide-04.jpg', caption: 'Today’s answer — the editor' },
      { file: 'slide-05.jpg', caption: 'Chasing our most photogenic moment' },
      { file: 'slide-06.jpg', caption: 'New tech — same hate, restated' },
      { file: 'slide-07.jpg', caption: '“An ugly photo?” — questioning the premise' },
      { file: 'slide-08.jpg', caption: 'The idea — what if every photo looked pro?' },
      { file: 'slide-09.jpg', caption: 'A pro photographer who knows us' },
      { file: 'slide-10.jpg', caption: 'The wall of prompt text — what users would have to write' },
      { file: 'slide-11.jpg', caption: 'Hidden from the user — the prompt behind one photo' },
      { file: 'slide-12.jpg', caption: 'Diagram — problem → solution → shutter button' },
      { file: 'slide-13.jpg', caption: 'Ta-da!' },
      { file: 'slide-14.jpg', caption: '“OK… so now who picks this up?”' },
      { file: 'slide-15.jpg', caption: 'Hudsucker Proxy — the old stonecutter', video: 'slide-15.mp4' },
      { file: 'slide-16.jpg', caption: '“You know, for kids” — circle on a paper bag' },
      { file: 'slide-17.jpg', caption: 'Gemini — “give me a different pose”' },
      { file: 'slide-18.jpg', caption: 'AI Studio — the iPad prototype' },
      { file: 'slide-19.jpg', caption: 'Cursor + a real park photo — the POC' },
      { file: 'slide-20.jpg', caption: 'Pose grid — what worked, what didn’t' },
      { file: 'slide-21.jpg', caption: 'Iteration matrix — V1 / V2' },
      { file: 'slide-22.jpg', caption: 'Product mock — the shutter UX' },
      { file: 'slide-23.jpg', caption: 'The product goal is the anchor' },
      { file: 'slide-24.jpg', caption: 'Slack — “build wow · easy · has value”' },
      { file: 'slide-25.jpg', caption: 'Slack — Neta’s reaction, Dotan’s “perfect”' },
      { file: 'slide-26.jpg', caption: 'The process — cleaner scribble' },
      { file: 'slide-27.jpg', caption: '01 — My abilities change' },
      { file: 'slide-28.jpg', caption: '02 — Knowing the org, working in teams' },
      { file: 'slide-29.jpg', caption: '03 — A working product beats words' },
      { file: 'slide-30.jpg', caption: 'Closing — back to Hudsucker', video: 'slide-30.mp4' },
    ],
    transcriptLabel: 'TRANSCRIPT — TIGHTENED',
    transcriptParagraphs: [
      'At Lightricks we work on a universal problem for 300 million users (plus the Kardashians): help people feel good about how they look. The pursuit of “the best photo” translates into thousands of use cases. Until recently, the answer was editorial — familiar, conventional. Then August 2025 happened.',
      'Google shipped a new image model: Nano Banana. Quality and consistency we hadn’t seen. The promise was clean: *what you imagine, you get — if you know what and how to ask.* That clause is the problem. The moment the interface is a text box, outcomes are bound by how well the user can phrase their wish. Users know what they want; they don’t know how to phrase it — and they don’t want to, every time they take a photo.',
      'As a designer, that was the opportunity. Make the phrasing disappear from the user’s view. What if the entire UI is one button? A shutter button. As stupid as it is simple. I had the flow clear in my head — the feel, the feedback, the whole thing. But how do you convince anyone with just a button? It’s not a feature. It’s an experience. And experiences are hard to pass through words.',
      'So I built the experience. Prototype in an afternoon. Walked the hallway with it — two birds one stone: user testing *and* pitch rehearsal. Someone mentioned AI Studio. Under an hour later: a working POC with real photos in and real results out. No simulation. Real.',
      'Dotan joined. The prototype wasn’t silly — it worked. But the team had hit a wall on prompt quality. We reframed: the designers would write the prompts, I’d teach the rules. We read the docs together. The fix that had blocked them: *don’t change the lighting* was failing; *keep the lighting and colors identical to the original* worked. Positive framing. We repeated the rule in the right section of the prompt, asked the model to self-check against its rules before answering, and the output changed. Those rules became the spine of § 03 in the toolkit.',
      'What happened next looked nothing like our usual design process. No wireframes. No Figma handoff. No handoff at all. But a working build got approved and moved into real product cycles — PM, validations, data, iteration. Two to three weeks. Few resources. Under-the-table help. An idea that surfaced one morning shipped as a product.',
      'The takeaway, for us: the designer’s role expands. Not just define and design — build, test, and validate. Prompt engineering becomes part of the craft. And the good news is we already have most of the tools: user understanding, product thinking, working with teams. The rest, we learn. That’s what the toolkit is for.',
    ],
    watchUxiLabel: 'Talk website on UXI Live →',
    watchUxiUrl:
      'https://uxilive.co.il/2026/product-guerrilla-in-vibe-code-era-dotan-neta/',
    whoLabel: 'Who we are →',
  },
};
