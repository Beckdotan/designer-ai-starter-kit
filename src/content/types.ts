export type PocStep = {
  number: string;
  title: string;
  body: string;
  screenshotAlt: string;
};

export type Principle = {
  number: string;
  name: string;
  explanation: string;
  snippet: string;
};

export type ModelGuide = {
  label: string;
  kind: string;
  description: string;
  url: string;
  displayUrl: string;
};

export type Tool = {
  name: string;
  oneLiner: string;
  url: string;
  displayUrl: string;
  featured?: boolean;
  terminal?: string;
};

export type ServiceOffering = {
  label: string;
  title: string;
  body: string;
};

export type StoryBeat = {
  number: string;
  headline: string;
  shortLabel?: string;
  body?: string;
  quote?: string;
  quoteAttribution?: string;
  quoteLang?: 'he' | 'en';
  phase?: string;
  isPivot?: boolean;
};

export type StoryTakeaway = {
  number: string;
  headline: string;
  body: string;
};

export type Speaker = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export type LectureSlide = {
  file: string;
  caption: string;
};

export type Content = {
  lang: 'en' | 'he';
  dir: 'ltr' | 'rtl';
  nav: {
    skipToContent: string;
    backToTop: string;
  };
  hero: {
    tag: string;
    meta: string;
    headline: string;
    subhead: string;
    receiptPrefix: string;
    receiptItems: string[];
    receiptSuffix: string;
    receiptLinkLabel: string;
    cta: string;
  };
  story: {
    tag: string;
    meta: string;
    title: string;
    intro: string;
    beats: StoryBeat[];
    takeawaysLabel: string;
    takeaways: StoryTakeaway[];
    readFullLabel: string;
  };
  poc: {
    tag: string;
    meta: string;
    title: string;
    intro: string;
    steps: PocStep[];
  };
  principles: {
    tag: string;
    meta: string;
    title: string;
    intro: string;
    items: Principle[];
    starterPromptLabel: string;
    starterPromptNote: string;
    starterPromptTask: string;
    starterPrompt: string;
    copyLabel: string;
    copiedLabel: string;
  };
  models: {
    tag: string;
    meta: string;
    title: string;
    intro: string;
    items: ModelGuide[];
  };
  tools: {
    tag: string;
    meta: string;
    title: string;
    intro: string;
    featured: Tool;
    supporting: Tool[];
  };
  speakers: {
    tag: string;
    meta: string;
    title: string;
    intro: string;
    talkTitle: string;
    list: Speaker[];
    readFullLabel: string;
    watchUxiLabel: string;
    watchUxiUrl: string;
  };
  services: {
    tag: string;
    meta: string;
    title: string;
    intro: string;
    offerings: ServiceOffering[];
    bioName: string;
    bioRole: string;
    bioBody: string;
    cta: string;
    linkedin: string;
  };
  footer: {
    credits: string;
    talkRecording: string;
    talkRecordingUrl: string;
    builtWith: string;
  };
  langToggle: {
    en: string;
    he: string;
    ariaLabel: string;
  };
  lecture: {
    backLabel: string;
    kicker: string;
    talkTitle: string;
    speakersLine: string;
    slidesLabel: string;
    slides: LectureSlide[];
    slidesPlaceholder: string;
    transcriptLabel: string;
    transcriptParagraphs: string[];
    watchUxiLabel: string;
    watchUxiUrl: string;
  };
};
