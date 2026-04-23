import type { Content } from './types';

export const en: Content = {
  lang: 'en',
  dir: 'ltr',
  nav: {
    skipToContent: 'Skip to content',
    backToTop: 'Back to top',
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
  story: {
    tag: '§ 01',
    meta: '~3 WEEKS · IDEA → PRODUCTION · 5 BEATS',
    title: 'How this kit got built.',
    intro:
      'Before the toolkit, the talk. A 3-week timeline — from one designer’s hunch to a shipped product — that explains why this page exists at all.',
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
        headline: 'Prototyping the feel.',
        shortLabel: 'Prototyping',
        body:
          'Built in an afternoon. Two birds, one stone: user-testing the experience *and* rehearsing the pitch — walking the hallway with the mock, catching people between meetings. The prototype answered the shape of the experience, not whether the model could hold up.',
        phase: 'guerrilla',
      },
      {
        number: '03',
        headline: 'Real photos in. Real results out.',
        shortLabel: 'Real results',
        body:
          'Someone mentions AI Studio. Under an hour later, a working POC: real photos in, real output. Not a simulation. The first pass wasn’t quite there — the model kept altering lighting — but reading the docs together Neta and Dotan found the unlock: positive framing, a self-check step. Those rules became the spine of [§ 04 on this page](#principles).',
        quote:
          'זה כבר לא רעיון בראש שלי. זו כבר לא מצגת. זה משהו שעובד.',
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
    takeawaysLabel: 'WHAT WE TOOK HOME',
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
          'Deep user understanding, product thinking, working with teams. The rest — like prompt engineering — can be learned. That’s what the rest of this page is for.',
      },
    ],
    readFullLabel: 'Read the full talk →',
  },
  poc: {
    tag: '§ 03',
    meta: '5 STEPS — ~1 HOUR',
    title: 'Build your first POC in an hour.',
    intro:
      'AI Studio plus a free Gemini API key is all you need. No install. No credit card. Five steps from zero to a working prototype you can show a teammate.',
    steps: [
      {
        number: '01',
        title: 'Get a Google AI Studio account and API key.',
        body:
          'Open [aistudio.google.com](https://aistudio.google.com) and sign in with any Google account. Click [Get API key](https://aistudio.google.com/app/apikey) in the left nav, create a new key in a fresh project, and copy it somewhere private. That single key unlocks Gemini across text, image, and video models. Free to start — no card required.',
        screenshotAlt: 'AI Studio API key panel',
      },
      {
        number: '02',
        title: 'Write your first prompt in AI Studio.',
        body:
          'Open a new chat in [AI Studio](https://aistudio.google.com/prompts/new_chat), pick `gemini-2.5-flash` as the model, and paste the starter prompt below. Swap the `<INPUT>` line with a rough idea — a single sentence is enough — and hit run. Never written a prompt before? Try our [prompt-helper GPT](TODO_CUSTOM_GPT_URL) — it interviews you and writes the prompt for you.',
        screenshotAlt: 'AI Studio chat interface with starter prompt',
      },
      {
        number: '03',
        title: 'Iterate in the Studio UI until it looks right.',
        body:
          'Edit the prompt in place — do not start over. Tighten one rule at a time and watch the output shift. If the brief drifts, change one instruction and re-run. This is the designer move: prompts are specs, and specs get revisions.',
        screenshotAlt: 'Prompt iteration showing rule changes',
      },
      {
        number: '04',
        title: 'Export, integrate, or wrap it.',
        body:
          'Three paths: keep polishing in Studio for one-off use; hook the prompt into [Figma Make](https://www.figma.com/make/) for inline design tasks; or wrap it in a tiny app using one of the vibe-coding tools below. Studio also gives you a ready-to-paste code snippet in Python, JS, and curl.',
        screenshotAlt: 'Export code snippet from AI Studio',
      },
      {
        number: '05',
        title: 'Share early. Hallway-test before you polish.',
        body:
          'Send a teammate the prompt and the output. Watch their face. If they flinch, the prompt is the problem — not the model. Ship rough, learn fast, then polish. This is the whole shift the talk is about: designers can now build the thing they used to brief.',
        screenshotAlt: 'Sharing a prompt result with a teammate',
      },
    ],
  },
  principles: {
    tag: '§ 04',
    meta: '9 PRINCIPLES',
    title: 'Prompt engineering essentials.',
    intro:
      "You're writing rules for a system. Designers already know how to spec systems. These nine moves are model-agnostic — they work on Gemini, Claude, GPT, or anything that ships next month.",
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
    starterPromptLabel: 'STARTER PROMPT',
    starterPromptNote:
      'Swap the <INPUT> line with any rough idea — a one-liner is enough. Run it once. Then change one rule at a time and watch the output shift. That’s how you learn what your model does.',
    starterPromptTask: 'First-pass product brief from a rough idea',
    starterPrompt: `# ROLE
You are a senior product designer who has shipped
consumer apps on small teams. You write briefs that
stay short, make tradeoffs explicit, and leave room
for exploration — not specs that close doors.

# TASK
Turn the rough idea below into a first-pass product
brief a designer can work from on day one.

# RULES
- Stay under 250 words total.
- Write in plain English. No MBA words.
- Name the riskiest assumption clearly.
- If the idea is underspecified, list 2 questions
  worth asking before design — don't invent answers.

# OUTPUT FORMAT
Use these sections, in order:
1. One-line pitch (≤15 words)
2. Who it's for (one sentence, specific)
3. The job to be done (≤2 sentences)
4. What "good" looks like after v1 ships (3 bullets)
5. Riskiest assumption (one sentence)
6. Open questions (2 bullets, or "none")

Before you answer, verify each section exists and
respects its word limit.

# INPUT
<paste your rough idea here — a sentence is enough>`,
    copyLabel: 'COPY',
    copiedLabel: 'COPIED ✓',
  },
  models: {
    tag: '§ 05',
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
  tools: {
    tag: '§ 06',
    meta: '1 FEATURED + 5 SUPPORTING',
    title: 'Vibe coding: tools to build fast.',
    intro:
      'Pick one, learn it well, then try another. The trap is tool-hopping — the win is shipping something tiny every week until the tool disappears and you just feel like you are building.',
    featured: {
      name: 'Claude Code',
      oneLiner:
        'Terminal-based AI pair programmer. We used it to build this page. Best for designers comfortable reading a bit of code who want full control of the output.',
      url: 'https://claude.com/product/claude-code',
      displayUrl: 'claude.com/product/claude-code',
      featured: true,
      terminal:
        '$ claude\n❯ help me build a landing page for a design-conference\n  starter kit. mobile first, single scroll, 7 sections…',
    },
    supporting: [
      {
        name: 'Lovable',
        oneLiner:
          'Full-stack apps from scratch, great for designer-led builds with visual preview.',
        url: 'https://lovable.dev',
        displayUrl: 'lovable.dev',
      },
      {
        name: 'v0 by Vercel',
        oneLiner:
          'React + Tailwind output, built for component-level UI. Best for polished one-off screens.',
        url: 'https://v0.dev',
        displayUrl: 'v0.dev',
      },
      {
        name: 'Bolt.new',
        oneLiner:
          'Zero-to-running app in the browser. No install, no setup. Good for rapid throwaway POCs.',
        url: 'https://bolt.new',
        displayUrl: 'bolt.new',
      },
      {
        name: 'Base44',
        oneLiner:
          'Full apps with auth, database, and admin — low-code. Great when you need a working backend by end of day.',
        url: 'https://base44.com',
        displayUrl: 'base44.com',
      },
      {
        name: 'Cursor',
        oneLiner:
          "IDE-based AI pair programming. Claude Code's power with a GUI — for designers who prefer an editor window.",
        url: 'https://cursor.com',
        displayUrl: 'cursor.com',
      },
    ],
  },
  speakers: {
    tag: '§ 02',
    meta: 'THE SPEAKERS',
    title: 'Who gave the talk.',
    intro:
      'Neta Keret and Dotan Beck, both at Lightricks. The lecture is on UXI Live; the transcript lives here.',
    talkTitle:
      'Designers Leading Product: Product Guerrilla in the Vibe Coding Era',
    list: [
      {
        name: 'Neta Keret',
        role: 'Product Design Team Lead, Facetune — Lightricks',
        bio:
          'Leads product design for Facetune, focused on holistic, data-driven experiences for the app’s end users.',
        initials: 'NK',
      },
      {
        name: 'Dotan Beck',
        role: 'AI Labs Team Lead & LLM Engineer — Lightricks',
        bio:
          'Drives product-tech strategy for generative AI across Lightricks, shipping at the scale of millions of users.',
        initials: 'DB',
      },
    ],
    readFullLabel: 'Read the full talk →',
    watchUxiLabel: 'Talk page on UXI Live →',
    watchUxiUrl:
      'https://uxilive.co.il/2026/product-guerrilla-in-vibe-code-era-dotan-neta/',
  },
  services: {
    tag: '§ 07',
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
  footer: {
    credits: 'UXI 2026 — Neta + Dotan',
    talkRecording: 'Talk recording →',
    talkRecordingUrl: '#',
    builtWith: 'BUILT WITH CLAUDE CODE · HOSTED ON GITHUB PAGES',
  },
  langToggle: {
    en: 'EN',
    he: 'עב',
    ariaLabel: 'Toggle language',
  },
  lecture: {
    backLabel: '← Back to the starter kit',
    kicker: 'UXI 2026 — THE TALK',
    talkTitle:
      'Designers Leading Product: Product Guerrilla in the Vibe Coding Era',
    speakersLine: 'Neta Keret · Dotan Beck — Lightricks',
    slidesLabel: 'SLIDES',
    slides: [
      { file: 'slide-01.jpg', caption: 'Opening — the photo gag' },
      { file: 'slide-02.jpg', caption: 'The pursuit of “the best photo”' },
      { file: 'slide-03.jpg', caption: 'Nano Banana · August 2025' },
      { file: 'slide-04.jpg', caption: 'The text-box gap' },
      { file: 'slide-05.jpg', caption: 'One button — the thesis' },
      { file: 'slide-06.jpg', caption: 'Selling an experience, not a feature' },
      { file: 'slide-07.jpg', caption: 'An afternoon prototype' },
      { file: 'slide-08.jpg', caption: 'AI Studio — the breakthrough' },
      { file: 'slide-09.jpg', caption: 'Dotan joins — prompt-engineering' },
      { file: 'slide-10.jpg', caption: 'Keep lighting & colors identical' },
      { file: 'slide-11.jpg', caption: 'Guerrilla → production' },
      { file: 'slide-12.jpg', caption: 'The designer’s role expands' },
    ],
    slidesPlaceholder:
      'Slides will light up as the image files are added to public/lecture/.',
    transcriptLabel: 'TRANSCRIPT — TIGHTENED',
    transcriptParagraphs: [
      'At Lightricks we work on a universal problem for 300 million users (plus the Kardashians): help people feel good about how they look. The pursuit of “the best photo” translates into thousands of use cases. Until recently, the answer was editorial — familiar, conventional. Then August 2025 happened.',
      'Google shipped a new image model: Nano Banana. Quality and consistency we hadn’t seen. The promise was clean: *what you imagine, you get — if you know what and how to ask.* That clause is the problem. The moment the interface is a text box, outcomes are bound by how well the user can phrase their wish. Users know what they want; they don’t know how to phrase it — and they don’t want to, every time they take a photo.',
      'As a designer, that was the opportunity. Make the phrasing disappear from the user’s view. What if the entire UI is one button? A shutter button. As stupid as it is simple. I had the flow clear in my head — the feel, the feedback, the whole thing. But how do you convince anyone with just a button? It’s not a feature. It’s an experience. And experiences are hard to pass through words.',
      'So I built the experience. Prototype in an afternoon. Walked the hallway with it — two birds one stone: user testing *and* pitch rehearsal. Someone mentioned AI Studio. Under an hour later: a working POC with real photos in and real results out. No simulation. Real.',
      'Dotan joined. The prototype wasn’t silly — it worked. But the team had hit a wall on prompt quality. We reframed: the designers would write the prompts, I’d teach the rules. We read the docs together. The fix that had blocked them: *don’t change the lighting* was failing; *keep the lighting and colors identical to the original* worked. Positive framing. We repeated the rule in the right section of the prompt, asked the model to self-check against its rules before answering, and the output changed. Those rules became the spine of § 03 on this page.',
      'What happened next looked nothing like our usual design process. No wireframes. No Figma handoff. No handoff at all. But a working build got approved and moved into real product cycles — PM, validations, data, iteration. Two to three weeks. Few resources. Under-the-table help. An idea that surfaced one morning shipped as a product.',
      'The takeaway, for us: the designer’s role expands. Not just define and design — build, test, and validate. Prompt engineering becomes part of the craft. And the good news is we already have most of the tools: user understanding, product thinking, working with teams. The rest, we learn. That’s the rest of this page.',
    ],
    watchUxiLabel: 'Talk page on UXI Live →',
    watchUxiUrl:
      'https://uxilive.co.il/2026/product-guerrilla-in-vibe-code-era-dotan-neta/',
  },
};
