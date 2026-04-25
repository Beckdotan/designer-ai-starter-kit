import type { Content } from './types';
import { en } from './en';

// Hebrew mirror. Strings still tagged `// TODO: HE` fall back to English.
export const he: Content = {
  lang: 'he',
  dir: 'rtl',
  nav: {
    skipToContent: 'דלג לתוכן',
    backToTop: 'חזרה למעלה',
  },
  topNav: {
    brand: 'UXI · 2026',
    links: {
      toolkit: 'הערכה',
      lecture: 'ההרצאה',
      who: 'מי אנחנו',
    },
    menuLabel: 'תפריט',
    closeLabel: 'סגור',
  },
  hero: {
    tag: '§ 00',
    meta: 'UXI 2026 — נטע + דותן',
    headline: 'כל מה שצריך כבר בידיים שלך.',
    subhead: en.hero.subhead, // TODO: HE
    receiptPrefix: 'נבנה',
    receiptItems: ['6 שעות', '142 פרומפטים', '38 קומיטים'],
    receiptSuffix: 'עם',
    receiptLinkLabel: 'CLAUDE CODE',
    cta: 'לחצו להתחיל',
  },
  why: {
    tag: '§ 01',
    meta: 'מההרצאה שלנו ב-UXI · 4 רעיונות',
    title: 'למה בנינו את זה.',
    intro:
      'ארבעה רעיונות מההרצאה שלנו ב-UXI 2026 על עיצוב עם AI. שאר הדף הופך אותם לכלים שאפשר להשתמש בהם כבר היום.',
    takeaways: [
      {
        number: '01',
        headline: 'התפקיד של מעצבים מתרחב.',
        body: 'בעידן ה-AI, התפקיד לא נגמר בלהגדיר ולעצב — הוא כולל גם לבנות בפועל.',
      },
      {
        number: '02',
        headline: 'Show, don’t tell.',
        body:
          'מוצר עובד תמיד ינצח מילים. כשעלות בניית POC יורדת, הרבה יותר קל להוכיח רעיון — גם בלי משאבים רשמיים. שני מאפשרים: **Vibe coding** (כלי AI שמאפשרים למעצבים לבנות פרוטוטיפים אמיתיים תוך שעות) ו**שיתופי פעולה "מתחת לשולחן"** (הקשרים שלנו בארגון הופכים לעזרה אמיתית ברגע הנכון).',
      },
      {
        number: '03',
        headline: 'Generative AI יצר פער חדש.',
        body:
          'אנשים יודעים מה הם רוצים — אבל לא יודעים לנסח את זה. באמצעות הידע שלנו כמעצבים על הלקוח, אפשר לדבר עם המודל במקום המשתמש, כדי שהממשק יישאר פשוט (כפתור ולא שדה טקסט).',
      },
      {
        number: '04',
        headline: 'החדשות הטובות — כבר יש לנו את רוב הכלים.',
        body:
          'הבנה עמוקה של משתמשים, חשיבה מוצרית, עבודה עם צוותים. את השאר — כמו Prompt Engineering — אפשר ללמוד. לשם מיועד שאר הדף.',
      },
    ],
  },
  poc: {
    tag: '§ 02',
    meta: '6 שלבים — שעה בערך',
    title: 'בנו POC ראשון בתוך שעה.',
    intro: en.poc.intro, // TODO: HE
    steps: en.poc.steps, // TODO: HE (links stay LTR via the renderer)
  },
  principles: {
    tag: '§ 03',
    meta: '9 עקרונות',
    title: 'יסודות כתיבת פרומפטים.',
    intro: en.principles.intro, // TODO: HE
    items: en.principles.items, // TODO: HE (snippets stay LTR)
    starterPromptLabel: 'משדרג פרומפטים',
    starterPromptNote: en.principles.starterPromptNote, // TODO: HE
    starterPromptTask: en.principles.starterPromptTask, // TODO: HE
    starterPrompt: en.principles.starterPrompt, // Prompt stays in English for AI Studio
    starterPromptTipLabel: 'טיפ',
    starterPromptTip: en.principles.starterPromptTip, // TODO: HE
    copyLabel: 'העתק',
    copiedLabel: 'הועתק ✓',
  },
  models: {
    tag: '§ 04',
    meta: '3 מדריכים רשמיים',
    title: 'להעמיק — מדריכים לפי מודל.',
    intro: en.models.intro, // TODO: HE
    items: en.models.items, // TODO: HE
  },
  services: {
    tag: '§ 05',
    meta: 'דותן בק — סולו',
    title: 'הרצאות וסדנאות על שילוב AI במוצר ובעבודה היומיומית.',
    intro: en.services.intro, // TODO: HE
    offerings: en.services.offerings, // TODO: HE
    bioName: 'דותן בק',
    bioRole: 'Team Lead, AI Lab @ Lightricks',
    bioBody: en.services.bioBody, // TODO: HE
    cta: 'בוא נתחבר בלינקדאין',
    linkedin: en.services.linkedin,
  },
  who: {
    tag: '§ מי',
    meta: 'הבונים · המרצים',
    title: 'העברנו את ההרצאה. בנינו את הדף הזה.',
    intro:
      'שני אנשי מוצר ב-Lightricks, שמהמרים שהתפקיד של המעצב עכשיו כולל גם לבנות את הדבר בפועל. הדף הזה הוא ההוכחה.',
    talkTitle: 'מעצבים שמובילים מוצר: פרודקט גרילה בעידן ה-Vibe Coding',
    list: [
      {
        name: 'נטע קרט',
        role: 'Team Lead, Product Design — Facetune @ Lightricks',
        bio:
          'מובילה את עיצוב המוצר ב-Facetune, עם דגש על חוויות הוליסטיות ומבוססות דאטה. נטע התחילה את הפרויקט שהפך להרצאה — רעיון־בוקר שהפך למוצר פרודקשן בתוך שלושה שבועות.',
        initials: 'נק',
        imageUrl: '/designer-ai-starter-kit/who/neta.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/netakeret/',
        linkedinLabel: 'LINKEDIN ↗',
      },
      {
        name: 'דותן בק',
        role: 'Team Lead, AI Labs & LLM Engineer — Lightricks',
        bio:
          'מוביל אסטרטגיה מוצרית-טכנולוגית ל-Generative AI ברחבי Lightricks, במיליוני משתמשים. דותן הצטרף לפרויקט כ-prompt engineer, לימד את המעצבות לכתוב את הכללים — וויב־קוד את הדף הזה באחר צהריים.',
        initials: 'דב',
        imageUrl: '/designer-ai-starter-kit/who/dotan.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/dotanbeck/',
        linkedinLabel: 'LINKEDIN ↗',
      },
    ],
    creditsLabel: 'מה השתמשנו',
    creditsIntro:
      'המדיום הוא המסר. זה הסטאק האמיתי — בלי שום דבר מוסתר, בלי שום דבר הרואי.',
    credits: [
      { label: 'סוכן קוד', value: 'Claude Code' },
      { label: 'טכנולוגיה', value: 'Vite · React · TypeScript · Tailwind' },
      { label: 'אחסון', value: 'GitHub Pages' },
      {
        label: 'קוד מקור',
        value: 'github.com/dotanbeck/designer-ai-starter-kit',
        url: 'https://github.com/dotanbeck/designer-ai-starter-kit',
      },
    ],
    watchUxiLabel: 'דף ההרצאה ב-UXI Live →',
    watchUxiUrl: en.who.watchUxiUrl,
    lectureLabel: 'לקרוא את כל ההרצאה →',
  },
  footer: {
    credits: 'UXI 2026 — נטע + דותן',
    talkRecording: 'הקלטת ההרצאה →',
    talkRecordingUrl: '#',
    builtWith: 'נבנה עם CLAUDE CODE · מאוחסן ב-GITHUB PAGES',
  },
  langToggle: {
    en: 'EN',
    he: 'עב',
    ariaLabel: 'החלף שפה',
  },
  lecture: {
    kicker: 'UXI 2026 — ההרצאה',
    talkTitle: 'מעצבים שמובילים מוצר: פרודקט גרילה בעידן ה-Vibe Coding',
    speakersLine: 'נטע קרט · דותן בק — Lightricks',
    journeyLabel: 'המסע · כפתור אחד, שלושה שבועות',
    journeyTitle: 'איך כפתור אחד הגיע לפרודקשן.',
    journeyIntro:
      'שלושה שבועות מרעיון־בוקר של מעצבת לפיצ׳ר בפרודקשן — דרך פרוטוטיפ של אחר צהריים, POC של פחות משעה, וספרינט בין־צוותי "מתחת לשולחן".',
    beats: [
      {
        number: '01',
        headline: 'הרעיון — כפתור אחד.',
        shortLabel: 'הרעיון',
        body:
          'אוגוסט 2025: גוגל משיקים את Nano Banana — איכות ועקביות שלא ראינו. ההבטחה פשוטה: מה שתדמיינו — תקבלו. הבעיה: רק אם יודעים איך לבקש. המהלך המעצבי הוא להעלים את הניסוח. בלי תיבת טקסט. רק כפתור מצלמה אחד. תחושה.',
        quote: 'כמה מטופש — ככה פשוט.',
        quoteAttribution: 'נטע',
        quoteLang: 'he',
        phase: 'guerrilla',
      },
      {
        number: '02',
        headline: 'Figma לא יחזיק.',
        shortLabel: 'פרוטוטיפ',
        body:
          'מוקאפ ב־Figma מראה כפתור — הוא לא מראה את המודל. והחוויה *היא* התגובה של המודל. אז המעצבת בנתה את הפרוטוטיפ ישירות ב־AI Studio — אחר צהריים אחד. ואז יצאה איתו למסדרון, עם הפרוטוטיפ החי. שתי ציפורים במכה: גם יוזר־טסטינג של החוויה *וגם* חזרה על הפיץ׳, תופסים אנשים בין פגישות.',
        quote: 'רואים את הפוטנציאל, אבל זה עדיין מרגיש כמו דמו.',
        quoteAttribution: 'נטע',
        quoteLang: 'he',
        phase: 'guerrilla',
      },
      {
        number: '03',
        headline: 'API אמיתי. בעיות אמיתיות.',
        shortLabel: 'API אמיתי',
        body:
          'מוקאפ לא ישלח פיצ׳ר לפרודקשן. הכנסנו API key, הרצנו תמונות אמיתיות דרך Nano Banana — והפלט סטה: התאורה השתנתה, הזהויות התרככו, המודל "התפזר". כאן דותן נכנס לתמונה. המעצבות נתקלו בקיר של איכות־פרומפט. ביחד הם קראו את הדוקומנטציה, הריצו סשנים של prompt engineering, ושכתבו את הפרומפט סיבוב אחר סיבוב — ניסוח חיובי, שלב self-check, החוק הנכון בסקשן הנכון. המודל התחיל להחזיק.',
        quote: 'ופתאום — זה כבר לא ״רעיון צד״. זה ממש עובד.',
        quoteAttribution: 'נטע',
        quoteLang: 'he',
        phase: 'guerrilla',
      },
      {
        number: '04',
        headline: 'ה־CPO מאשר.',
        shortLabel: 'ה־CPO מאשר',
        isPivot: true,
      },
      {
        number: '05',
        headline: 'גרילה → פרויקט אמיתי.',
        shortLabel: 'פרויקט אמיתי',
        body:
          'הקצאת PM, תיעדוף, ולידציות, דאטה, איטרציות. שלושה שבועות בסך הכל — מהבוקר שהרעיון עלה ועד בילד פרודקשן. מעט משאבים. עזרה ״על הדרך״. התהליך נראה שונה לגמרי — בלי ויירפריימס, בלי דיזיין הנד־אוף — אבל הפלט היה שם.',
        quote:
          'מהרגע הזה הפרויקט הוא כבר לא פרויקט גרילה — הוא פרויקט מסודר.',
        quoteAttribution: 'דותן',
        quoteLang: 'he',
        phase: 'product',
      },
    ],
    slidesLabel: 'שקופיות',
    slides: en.lecture.slides.map((s, i) => ({
      file: s.file,
      caption: [
        'פתיחה — בדיחת הצילום',
        'המרדף אחר ״התמונה הטובה ביותר״',
        'Nano Banana · אוגוסט 2025',
        'הפער של תיבת הטקסט',
        'כפתור אחד — התזה',
        'למכור חוויה, לא פיצ׳ר',
        'פרוטוטיפ של אחר צהריים',
        'AI Studio — פריצת הדרך',
        'דותן מצטרף — Prompt Engineering',
        '״תשמור על התאורה והצבעים זהים״',
        'מגרילה למוצר',
        'התפקיד של מעצבים מתרחב',
      ][i] ?? s.caption,
    })),
    slidesPlaceholder:
      'השקופיות ייחשפו ברגע שקבצי התמונה יונחו ב-public/lecture/.',
    transcriptLabel: 'תמליל מקוצר',
    transcriptParagraphs: en.lecture.transcriptParagraphs, // TODO: HE — user has Hebrew source; we’ll drop in the cleaned Hebrew version.
    watchUxiLabel: 'דף ההרצאה ב-UXI Live →',
    watchUxiUrl: en.lecture.watchUxiUrl,
    whoLabel: 'מי אנחנו →',
  },
};
