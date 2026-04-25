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
    headline: 'כבר יש לך כל מה שצריך.',
    subhead:
      'הערכה המינימלית למעצבים כדי לעבור מצפייה בהרצאה ל-POC עובד מבוסס AI באוויר — בפחות משעתיים.',
    receiptPrefix: 'נבנה',
    receiptItems: ['6 שעות', '142 פרומפטים', '38 קומיטים'],
    receiptSuffix: 'עם',
    receiptLinkLabel: 'CLAUDE CODE',
    cta: 'לחצו להתחיל',
  },
  why: {
    tag: '§ 01',
    meta: '4 רעיונות מרכזיים מההרצאה שלנו ב-UXI',
    title: 'למה בנינו את זה.',
    intro:
      'ארבעה רעיונות מההרצאה שלנו ב-UXI 2026 על עיצוב עם AI. שאר הדף הופך אותם לכלים שאפשר להשתמש בהם כבר היום.',
    takeaways: [
      {
        number: '01',
        headline: 'התפקיד של מעצבים מתרחב.',
        body: 'התפקיד כבר לא נגמר בלהגדיר ולעצב — הוא כולל גם לבנות בפועל.',
      },
      {
        number: '02',
        headline: 'Show, don’t tell.',
        body:
          'מוצר עובד תמיד ינצח מילים. כשעלות בניית POC יורדת, הרבה יותר קל להוכיח רעיון — גם בלי משאבים רשמיים. שני מאפשרים: **Vibe coding** (כלי AI שמאפשרים למעצבים לבנות פרוטוטיפים אמיתיים תוך שעות) ו**שיתופי פעולה "מתחת לשולחן"** (הקשרים בארגון שהופכים לעזרה אמיתית ברגע הנכון).',
      },
      {
        number: '03',
        headline: 'GenAI יצר פער חדש.',
        body:
          'יוזרים יודעים מה הם רוצים — הם פשוט לא יודעים לנסח את זה. באמצעות ההבנה שלנו את הלקוח, אנחנו יכולים לדבר עם המודל במקומם, כדי שהממשק יישאר פשוט (כפתור, לא שדה טקסט).',
      },
      {
        number: '04',
        headline: 'כבר יש לנו את רוב הכלים.',
        body:
          'הבנה עמוקה של יוזרים, חשיבה מוצרית, עבודה עם צוותים. את השאר — כמו Prompt Engineering — אפשר ללמוד. בדיוק בשביל זה קיים שאר הדף.',
      },
    ],
  },
  poc: {
    tag: '§ 02',
    meta: '6 שלבים — שעה בערך',
    title: 'בנו POC ראשון בתוך שעה.',
    intro:
      'AI Studio זה כל מה שצריך כדי להרים גרסה ראשונה למסך. בלי התקנות, בלי כרטיס אשראי. שישה שלבים מאפס לפרוטוטיפ קליקבילי שאפשר להראות לצוות.',
    steps: [
      {
        number: '01',
        title: 'היכנסו ל-Google AI Studio.',
        body:
          'פתחו את [aistudio.google.com](https://aistudio.google.com) והיכנסו עם כל חשבון גוגל. חינם להתחיל, לא צריך אשראי. פה נעשה את כל הפרומפטים והבנייה.',
        screenshotAlt: 'הדאשבורד של Google AI Studio אחרי התחברות',
        screenshot: 'step-01.mp4',
      },
      {
        number: '02',
        title: 'תנו בריף ל-Gem שלנו, קבלו פרומפט מדויק יותר.',
        body:
          'פתחו את ה-[prompt-helper Gem](https://gemini.google.com/gem/15DZwOjGR4ihh14Dg-MnVOKpswkW8KRiw?usp=sharing) ותארו מה אתם רוצים לבנות במשפט או שניים — דאטה מוקאפ זה בסדר ("דאשבורד שמראה את 7 האימונים האחרונים שלי ככרטיסיות"). ה-Gem יראיין אתכם ויכתוב פרומפט מובנה שמיישם את כל תשעת הכללים מ-§ 03.',
        screenshotAlt: 'ה-Prompt-helper Gem הופך רעיון גולמי לפרומפט מובנה',
        screenshot: 'step-02.mp4',
      },
      {
        number: '03',
        title: 'הדביקו את הפרומפט ותראו את הקסם קורה.',
        body:
          'בחזרה ב-[AI Studio](https://aistudio.google.com), הדביקו את הפרומפט שה-Gem כתב ולחצו Run. חכו רגע. הגרסה העובדת הראשונה של האפליקציה שלכם תופיע בחלון התצוגה המקדימה — קליקבילית, אמיתית, מול העיניים.',
        screenshotAlt: 'AI Studio מרנדר את התצוגה המקדימה של האפליקציה',
        screenshot: 'step-03.mp4',
      },
      {
        number: '04',
        title: 'איטרציות — בקשו מ-AI Studio את השינויים שאתם רוצים.',
        body:
          'אל תתחילו מהתחלה. באותו צ׳אט, תגידו ל-AI Studio מה לשנות: "תקטין את הכרטיסיות", "תוסיף שורת חיפוש למעלה", "תשנה את הלייבלים לעברית". כל בקשה מעדכנת את האפליקציה שרצה. זה המהלך המעצבי — פרומפטים הם ספק (spec), וספקים מקבלים רוויזיות.',
        screenshotAlt: 'איטרציות על האפליקציה דרך הודעות המשך',
        screenshot: 'step-04.mp4',
      },
      {
        number: '05',
        title: 'חברו API key אמיתי כשאתם צריכים תוצאות אמיתיות.',
        body:
          'בזמן שאתם בונים, AI Studio משתמש בקריאות מוקאפ כדי שלא תשרפו מכסה. כשאתם מוכנים לבדוק עם פלט אמיתי של Gemini או Nano Banana, שימו API key. אין לכם? <b>תבקשו ממישהו בקבוצת הפיתוח שלכם.</b> לרוב החברות כבר יש מפתחות פרויקט שאפשר להשאיל לפרוטוטייפינג — בלי אשראי, בלי רכש, בלי לחכות.',
        screenshotAlt: 'חיבור API key בהגדרות של AI Studio',
      },
      {
        number: '06',
        title: 'תראו לשני אנשים בצוות. ואז לבוס. תראו את התגובה שלהם.',
        body:
          'שלחו את הלינק או שתפו מסך. תסתכלו על הפנים שלהם. אם הם נרתעים, הפרומפט הוא הבעיה — לא המודל. תעלו גרסה גולמית לאוויר, תלמדו מהר, ואז תעשו פוליש. זה כל השינוי שההרצאה מדברת עליו: מעצבים יכולים עכשיו לבנות את הדבר שפעם הם היו רק נותנים עליו בריף.',
        screenshotAlt: 'שיתוף הפרוטוטיפ עם חבר צוות',
      },
    ],
  },
  principles: {
    tag: '§ 03',
    meta: '9 עקרונות',
    title: 'יסודות כתיבת פרומפטים.',
    intro:
      'תשעת המהלכים האלה עובדים לכל דבר שאתם צריכים מ-LLM — סיעור מוחות, ניסוח הודעות סלאק, כתיבת מסמכים, סיכום מחקר, או כתיבת בריף לצוות. אותו סקיל, כל ממשק. ואגנוסטי למודל: Gemini, Claude, GPT, או מה שייצא בחודש הבא.',
    items: [
      {
        number: '01',
        name: 'תהיו ספציפיים',
        explanation: 'עמום נכנס, עמום יוצא. החליפו שמות תואר בשמות עצם, ושמות עצם במספרים.',
        snippet:
          '❯ rewrite 3 error messages for file upload:\n  size limit, bad format, timeout.\n  max 12 words each, no blame, no apologies.',
      },
      {
        number: '02',
        name: 'תנו קונטקסט',
        explanation:
          'תגידו למודל מי אתם, מה אתם בונים, ואיזה אילוצים חשובים.',
        snippet:
          "❯ you're a senior product designer on a B2B\n  analytics tool. we're adding mobile dashboards\n  for ops managers. draft copy for the empty state.",
      },
      {
        number: '03',
        name: 'השתמשו במבנה',
        explanation:
          'תייגו את הסקשנים שלכם עם מפרידים. המודל קורא מבנה כמו שאתם קוראים ספק (spec).',
        snippet:
          '# ROLE     UX writer.\n# TASK     Rewrite onboarding copy.\n# RULES    - Under 10 words per line\n           - Active voice\n# INPUT    {paste here}',
      },
      {
        number: '04',
        name: 'Show, don’t tell',
        explanation:
          'לכל דבר סובייקטיבי — טון, טעם, סגנון — דוגמה אחת מנצחת פסקה שלמה של תיאורים.',
        snippet:
          '❯ rewrite button labels in our voice.\n  "Save draft"   → "Keep this for later"\n  "Delete"       → "Throw it out"\n  now rewrite:   "Cancel subscription"',
      },
      {
        number: '05',
        name: 'פצלו את המשימה',
        explanation:
          'פרומפט אחד לכל שלב עדיף על מגה-פרומפט אחד. תעשו רוויו בין השלבים — תתפסו סטיות מוקדם.',
        snippet:
          'step 1: list 5 persona archetypes for a budgeting app\n(review, pick one)\nstep 2: expand #3 — goals, frustrations, one quote\n(review)\nstep 3: write her JTBD statement',
      },
      {
        number: '06',
        name: 'בדיקה עצמית (Self-check)',
        explanation:
          'תגידו למודל לוודא מול החוקים לפני שהוא עונה. הוא תופס את הפספוסים של עצמו.',
        snippet:
          '❯ draft 5 pricing-page headlines.\n  before you answer, check each one:\n  under 8 words? avoids "powerful"? active voice?',
      },
      {
        number: '07',
        name: 'ניסוח חיובי',
        explanation:
          'תגידו לו מה לעשות, לא ממה להימנע. הנחיות שליליות נוטות לדלוף החוצה.',
        snippet:
          "✗ don't use jargon, don't sound corporate\n✓ write like a curious teenager.\n  short sentences. specific nouns.\n  one verb per line.",
      },
      {
        number: '08',
        name: 'איטרציות',
        explanation:
          'פרומפטים הם ספקים. תתייחסו לרוויזיות כמו לגרסאות בפיגמה — תנו להם שמות, תשמרו את מה שעובד.',
        snippet:
          'v1  research synthesis — too vague\nv2  +"3 themes, 1 surprise per theme" — warmer\nv3  +format: "theme / quote / implication" — ship it',
      },
      {
        number: '09',
        name: 'דיבוג עם "למה"',
        explanation:
          'כשהפלט לא בכיוון, תבקשו מהמודל לאבחן לפני שאתם כותבים מחדש את הפרומפט.',
        snippet:
          "❯ here's your last output. here's my prompt.\n  which rule did you break, and why?\n  suggest 2 edits that would fix it.",
      },
    ],
    starterPromptLabel: 'משדרג פרומפטים — כל ה-9, בהדבקה אחת',
    starterPromptNote:
      'לא רוצים לזכור את תשעת המהלכים למעלה? הפרומפט מערכת הזה מיישם את כולם בשבילכם. הדביקו אותו בכל צ׳אט — Gemini, ChatGPT, Claude, איפה שתרצו. המודל יענה ויבקש את הפרומפט הגולמי שלכם. שלחו לו אותו בהודעה הבאה, ותקבלו בחזרה גרסה חדה יותר עם כל חוק מהדף הזה מיושם עליה. לא צריך לערוך את הבלוק עצמו.',
    starterPromptTask: 'כל תשעת המהלכים, מיושמים אוטומטית.',
    starterPrompt: en.principles.starterPrompt, // Prompt stays in English for AI Studio
    starterPromptTipLabel: 'טיפ',
    starterPromptTip:
      'רוצים את זה תמיד זמין? צרו Gemini Gem או GPT משלכם והדביקו את הבלוק הזה בתור <code>system prompt</code>. תקבלו משדרג פרומפטים בלחיצה אחת שחי לכם בסיידבר — אותם תשעה מהלכים, אפס קופי-פייסט.',
    copyLabel: 'העתק',
    copiedLabel: 'הועתק ✓',
  },
  models: {
    tag: '§ 04',
    meta: '3 מדריכים רשמיים',
    title: 'להעמיק — מדריכים לפי מודל.',
    intro:
      'מדריכי הפרומפטים הכי טובים נכתבו על ידי האנשים שאימנו את המודלים. שלושה מקורות קנוניים, אחד לכל מודאליות. שימו בבוקמארקס את אלה שמתאימים לעבודה שלכם.',
    items: [
      {
        label: 'Gemini',
        kind: 'TEXT',
        description:
          'כל משימת LLM — צ׳אט, חילוץ מידע, ניתוח, סינתזה. סוס העבודה. תתחילו כאן.',
        url: 'https://ai.google.dev/gemini-api/docs/prompting-strategies',
        displayUrl: 'ai.google.dev/gemini/docs',
      },
      {
        label: 'Nano Banana',
        kind: 'IMAGE',
        description:
          'מודלי התמונה של Gemini. ג׳ינרוט ועריכה. חברו את הדוקומנטציה הרשמית של ה-API עם הפלייבוק העמוק יותר לפרומפטים של טעם וסטייל.',
        url: 'https://ai.google.dev/gemini-api/docs/image-generation',
        displayUrl: 'ai.google.dev/gemini/docs/image-generation',
      },
      {
        label: 'LTX',
        kind: 'VIDEO',
        description:
          'ג׳ינרוט וידאו. פרומפטים קצרים יותר, דקדוק סצנות חזק יותר. המדריך הרשמי קצת דחוס אבל מקיף.',
        url: 'https://docs.ltx.video/api-documentation/prompting-guide',
        displayUrl: 'docs.ltx.video/prompting-guide',
      },
    ],
  },
  services: {
    tag: '§ 05',
    meta: 'דותן בק — סולו',
    title: 'הרצאות וסדנאות על שילוב AI במוצר ובעבודה היומיומית.',
    intro:
      'אם הערכה הזאת עזרה, תארו לכם מה סשן מלא עושה. אני מעביר הרצאות וסדנאות לצוותים ויחידים שרוצים להכניס AI לאיך שהם בונים מוצרים ולאיך שהם עובדים.',
    offerings: [
      {
        label: 'לחברות',
        title: 'הרצאות מרכזיות וסשנים לצוותים',
        body:
          'הרצאות על איך AI משנה את הדרך שבה מוצרים נבנים — ואיך צוותים יכולים אשכרה לפעול לפי זה.',
      },
      {
        label: 'לצוותים',
        title: 'סדנאות Hands-on',
        body:
          'Vibe coding, Prompt Engineering, "בנו POC ראשון ביום אחד", ושילוב AI בתהליכי עבודה קיימים.',
      },
      {
        label: 'ליחידים',
        title: 'סשנים 1:1',
        body:
          'ליווי למעצבים, מנהלי מוצר ומפתחים שמתחילים את מסע ה-AI שלהם — מותאם לתפקיד ולפרויקט הנוכחי שלכם.',
      },
    ],
    bioName: 'דותן בק',
    bioRole: 'Team Lead, AI Lab @ Lightricks',
    bioBody:
      'אני מוביל צוות שבונה POCs לחדשנות ב-AI ברחבי האקוסיסטם של LTX, ואני מלמד מעצבים ומנהלי מוצר איך לעשות את אותו הדבר.',
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
          'מובילה את עיצוב המוצר ב-Facetune, עם דגש על חוויות הוליסטיות ומבוססות דאטה. נטע התחילה את הפרויקט שהפך להרצאה — רעיון־בוקר שצמח למוצר בפרודקשן תוך שלושה שבועות.',
        initials: 'נק',
        imageUrl: '/designer-ai-starter-kit/who/neta.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/netakeret/',
        linkedinLabel: 'LINKEDIN ↗',
      },
      {
        name: 'דותן בק',
        role: 'Team Lead, AI Labs & LLM Engineer — Lightricks',
        bio:
          'מוביל אסטרטגיה מוצרית-טכנולוגית ל-Generative AI ברחבי Lightricks, במיליוני יוזרים. דותן הצטרף לפרויקט כ-Prompt Engineer, לימד את המעצבות לכתוב את הכללים — וויב־קוד את הדף הזה באחר צהריים.',
        initials: 'דב',
        imageUrl: '/designer-ai-starter-kit/who/dotan.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/dotanbeck/',
        linkedinLabel: 'LINKEDIN ↗',
      },
    ],
    creditsLabel: 'במה השתמשנו',
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
    watchKicker: 'הקלטת ההרצאה',
    watchTitle: 'לצפייה בהרצאה ב־UXI Live',
    watchMeta: 'UXI 2026 · ~20 דק׳',
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
          'אוגוסט 2025: גוגל משיקים את Nano Banana — איכות ועקביות שלא ראינו. ההבטחה פשוטה: מה שתדמיינו — תקבלו. הבעיה: רק אם יודעים איך לבקש. המהלך של המעצבת הוא להעלים את הניסוח. בלי תיבת טקסט. רק כפתור מצלמה אחד. תחושה.',
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
          'מוקאפ ב־Figma מראה כפתור — הוא לא מראה את המודל. והחוויה *היא* התגובה של המודל. אז המעצבת בנתה את הפרוטוטיפ ישירות ב־AI Studio — אחר צהריים אחד. ואז יצאה איתו למסדרון, עם הפרוטוטיפ החי. שתי ציפורים במכה: גם יוזר־טסטינג של החוויה *וגם* חזרה על הפיץ׳, תופסת אנשים בין פגישות.',
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
          'מוקאפ לא ישלח פיצ׳ר לפרודקשן. הכנסנו API key, הרצנו תמונות אמיתיות דרך Nano Banana — והפלט סטה: התאורה השתנתה, הזהויות התרככו, המודל התפזר. כאן דותן נכנס לתמונה. המעצבות נתקלו בקיר של איכות־פרומפט. ביחד הם קראו את הדוקומנטציה, הריצו סשנים של Prompt Engineering, ושכתבו את הפרומפט סיבוב אחר סיבוב — ניסוח חיובי, שלב self-check, החוק הנכון בסקשן הנכון. המודל התחיל להחזיק.',
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
    transcriptParagraphs: [
      'בלייטריקס אנחנו עובדים על בעיה אוניברסלית ל-300 מיליון יוזרים (וגם לקרדשיאנז): לגרום לאנשים להרגיש בטוחים באיך שהם נראים. המרדף אחר ״התמונה הטובה ביותר״ מתורגם לאלפי יוז קייסים. עד לא מזמן, הפתרון היה עריכה קונבנציונלית. ואז הגיע אוגוסט 2025.',
      'גוגל השיקו מודל תמונה חדש: Nano Banana. איכות ועקביות שלא ראינו לפני. ההבטחה הייתה פשוטה: מה שתדמיינו — תקבלו — רק צריך לדעת מה ואיך לבקש. כאן הבעיה. ברגע שהממשק הופך להיות תיבת טקסט, התוצאה תלויה ביכולת של היוזר להתנסח. יוזרים יודעים מה הם רוצים; הם לא יודעים איך לנסח את זה — והם בטח לא רוצים לעשות את זה בכל פעם שהם מצלמים תמונה.',
      'כמעצבת, זו הייתה ההזדמנות. להעלים את הניסוח מעיני היוזר. מה אם הממשק היחיד הוא כפתור אחד? כפתור מצלמה. כמה מטופש — ככה פשוט. היה לי את הפלואו ברור בראש — התחושה, הפידבק, הכל. אבל איך משכנעים מישהו עם כפתור אחד? זה לא פיצ׳ר. זו חוויה. וקשה מאוד להעביר חוויה במילים.',
      'אז בניתי את החוויה. פרוטוטיפ באחר צהריים אחד. הסתובבתי איתו במסדרון — שתי ציפורים במכה אחת: גם יוזר טסטינג וגם חזרה על הפיץ׳. מישהו הזכיר את AI Studio. פחות משעה אחר כך: POC עובד עם תמונות אמיתיות ותוצאות אמיתיות. לא סימולציה. אמיתי.',
      'דותן הצטרף. הפרוטוטיפ לא היה מטופש — הוא עבד. אבל הצוות נתקל בקיר של איכות הפרומפט. שינינו כיוון: המעצבות יכתבו את הפרומפטים, ואני אלמד את החוקים. קראנו את הדוקומנטציה ביחד. הבעיה שתקעה אותן: "אל תשנה את התאורה" נכשל; "תשמור על התאורה והצבעים זהים למקור" עבד. ניסוח חיובי. חזרנו על החוק בסקשן הנכון של הפרומפט, ביקשנו מהמודל לעשות Self-check לפני שהוא עונה, והפלט השתנה. החוקים האלה הפכו לעמוד השדרה של § 03 בערכה.',
      'מה שקרה אחר כך לא נראה בכלל כמו תהליך העיצוב הרגיל שלנו. בלי ויירפריימס. בלי דיזיין הנד-אוף. בלי הנד-אוף בכלל. אבל בילד עובד אושר ועבר למחזורי מוצר אמיתיים — PM, ולידציות, דאטה, איטרציות. שבועיים-שלושה. מעט משאבים. עזרה ״מתחת לשולחן״. רעיון שעלה בוקר אחד הגיע לפרודקשן כמוצר.',
      'התובנה, מבחינתנו: התפקיד של המעצב מתרחב. לא רק להגדיר ולעצב — לבנות, לבדוק, ולאמת. Prompt Engineering הופך לחלק מהקראפט. והחדשות הטובות הן שכבר יש לנו את רוב הכלים: הבנת יוזרים, חשיבה מוצרית, עבודה עם צוותים. את השאר, אנחנו לומדים. בשביל זה הערכה הזאת קיימת.',
    ],
    watchUxiLabel: 'דף ההרצאה ב-UXI Live →',
    watchUxiUrl: en.lecture.watchUxiUrl,
    whoLabel: 'מי אנחנו →',
  },
};
