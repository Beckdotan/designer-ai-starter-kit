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
    meta: '5 שלבים — שעה בערך',
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
    starterPromptLabel: 'פרומפט פתיחה',
    starterPromptNote: en.principles.starterPromptNote, // TODO: HE
    starterPromptTask: en.principles.starterPromptTask, // TODO: HE
    starterPrompt: en.principles.starterPrompt, // Prompt stays in English for AI Studio
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
  tools: {
    tag: '§ 05',
    meta: '1 מוביל + 5 משלימים',
    title: 'Vibe coding: כלים לבנייה מהירה.',
    intro: en.tools.intro, // TODO: HE
    featured: en.tools.featured, // TODO: HE
    supporting: en.tools.supporting, // TODO: HE
  },
  services: {
    tag: '§ 06',
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
    title: 'העברנו את ההרצאה. בנינו את הדף הזה. באותו אחר צהריים.',
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
        linkedinUrl: 'https://www.linkedin.com/in/netakeret/',
        linkedinLabel: 'LINKEDIN ↗',
      },
      {
        name: 'דותן בק',
        role: 'Team Lead, AI Labs & LLM Engineer — Lightricks',
        bio:
          'מוביל אסטרטגיה מוצרית-טכנולוגית ל-Generative AI ברחבי Lightricks, במיליוני משתמשים. דותן הצטרף לפרויקט כ-prompt engineer, לימד את המעצבות לכתוב את הכללים — וויב־קוד את הדף הזה באחר צהריים.',
        initials: 'דב',
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
    backLabel: '→ חזרה לערכה',
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
    backLabel: '→ חזרה לערכה',
    kicker: 'UXI 2026 — ההרצאה',
    talkTitle: 'מעצבים שמובילים מוצר: פרודקט גרילה בעידן ה-Vibe Coding',
    speakersLine: 'נטע קרט · דותן בק — Lightricks',
    journeyLabel: 'המסע · מבריף עמום להרצאה',
    journeyTitle: 'איך הערכה הזאת נולדה.',
    journeyIntro:
      'ציר זמן של כ־3 שבועות, מרעיון־בוקר של מעצבת ועד מוצר בפרודקשן — זו הסיבה שהדף הזה בכלל קיים.',
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
        headline: 'פרוטוטיפ — לשחק עם החוויה.',
        shortLabel: 'פרוטוטיפ',
        body:
          'בונים תוך שעות. שתי ציפורים במכה אחת: גם יוזר־טסטינג וגם חזרה על הפיץ׳ — יוצאים למסדרון, תופסים אנשים בין פגישות. הפרוטוטיפ עונה על צורת החוויה — אבל לא על השאלה האם המודל יחזיק.',
        phase: 'guerrilla',
      },
      {
        number: '03',
        headline: 'תמונות אמיתיות. תוצאות אמיתיות.',
        shortLabel: 'תוצאות אמיתיות',
        body:
          'מישהו מזכיר AI Studio. פחות משעה אחר כך — POC עובד. תמונות אמיתיות נכנסות, פלט אמיתי יוצא. לא סימולציה. הסיבוב הראשון לא היה מספיק טוב — המודל שינה את התאורה — אבל קריאה של הדוקומנטציה ביחד חשפה את המפתח: ניסוח חיובי, שלב של self-check. החוקים האלה הפכו לשדרה של § 03 בערכה.',
        quote:
          'זה כבר לא רעיון בראש שלי. זו כבר לא מצגת. זה משהו שעובד.',
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
