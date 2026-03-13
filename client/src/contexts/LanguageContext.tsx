import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Lang = "en" | "cn";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

/* ─── Translations ─── */
const translations: Record<string, Record<Lang, string>> = {
  /* Nav */
  "nav.about": { en: "About", cn: "\u5173\u4e8e\u6211" },
  "nav.funfacts": { en: "Fun Facts", cn: "\u51b7\u77e5\u8bc6" },
  "nav.diary": { en: "AI Diary", cn: "AI \u65e5\u8bb0" },
  "nav.contact": { en: "Contact", cn: "\u8054\u7cfb\u6211" },

  /* Hero */
  "hero.welcome": { en: "Welcome to my little corner", cn: "\u6b22\u8fce\u6765\u5230\u6211\u7684\u5c0f\u89d2\u843d" },
  "hero.tagline": {
    en: "A product manager / AI learner / content creator / ex-film worker / mother of a cat",
    cn: "\u4ea7\u54c1\u7ecf\u7406 / AI \u5b66\u4e60\u8005 / \u5185\u5bb9\u521b\u4f5c\u8005 / \u524d\u5f71\u89c6\u4eba / \u732b\u5988\u5988",
  },
  "hero.explore": { en: "Explore", cn: "\u5f80\u4e0b\u770b" },

  /* About */
  "about.title": { en: "About Me", cn: "\u5173\u4e8e\u6211" },
  "about.subtitle": { en: "A little bit about who I am", cn: "\u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u81ea\u5df1" },
  "about.p1": {
    en: "Hi there! I'm Haiyun (\u4f55\u6d77\u97f5), currently living in sunny Singapore. By day I'm a product manager at Shopee, Southeast Asia's biggest e-commerce platform, where I get to work on fun things like short videos, live streaming, and figuring out how to make online shopping more engaging.",
    cn: "Hi\uff01\u6211\u662f\u4f55\u6d77\u97f5\uff0c\u76ee\u524d\u4f4f\u5728\u65b0\u52a0\u5761\u3002\u5e73\u65f6\u6211\u5728 Shopee\uff08\u4e1c\u5357\u4e9a\u6700\u5927\u7684\u7535\u5546\u5e73\u53f0\uff09\u505a\u4ea7\u54c1\u7ecf\u7406\uff0c\u8d1f\u8d23\u77ed\u89c6\u9891\u3001\u76f4\u64ad\u8fd9\u4e9b\u6709\u8da3\u7684\u4e1a\u52a1\uff0c\u7422\u78e8\u600e\u4e48\u8ba9\u5927\u5bb6\u901b\u5f97\u66f4\u5f00\u5fc3\u3001\u4e70\u5f97\u66f4\u723d\u3002",
  },
  "about.p2": {
    en: "My background is a mix of media and tech \u2014 I studied Media and Communication at City University of Hong Kong, which gave me a storyteller's perspective on building products. I care about the \"why\" behind every feature, not just the \"how.\"",
    cn: "\u6211\u7684\u80cc\u666f\u6709\u5f88\u591a\u5a92\u4f53\u548c\u79d1\u6280\u7684\u878d\u5408\u2014\u2014\u5728\u9999\u6e2f\u57ce\u5e02\u5927\u5b66\u8bfb\u7684\u5a92\u4f53\u4e0e\u4f20\u64ad\uff0c\u8fd9\u8ba9\u6211\u4e60\u60ef\u7528\u8bb2\u6545\u4e8b\u7684\u89c6\u89d2\u53bb\u505a\u4ea7\u54c1\u3002\u6bd4\u8d77\u201c\u600e\u4e48\u505a\u201d\uff0c\u6211\u66f4\u5728\u4e4e\u201c\u4e3a\u4ec0\u4e48\u505a\u201d\u3002",
  },
  "about.p3": {
    en: "Outside of work, I'm diving into AI, learning Japanese on Duolingo (almost 1000 days!), and taking care of my fluffy cat Hazelnut. I believe in staying curious and creating things that bring a little joy to the world.",
    cn: "\u5de5\u4f5c\u4e4b\u5916\uff0c\u6211\u5728\u7814\u7a76 AI\u3001\u7528\u591a\u90bb\u56fd\u5b66\u65e5\u8bed\uff08\u5feb\u6253\u5361 1000 \u5929\u4e86\uff01\uff09\uff0c\u8fd8\u6709\u4f3a\u5019\u6211\u7684\u6bdb\u7ed2\u7ed2\u732b\u4e3b\u5b50\u699b\u5b9d\u3002\u6211\u89c9\u5f97\u4fdd\u6301\u597d\u5947\u5fc3\u5f88\u91cd\u8981\uff0c\u5e0c\u671b\u80fd\u505a\u4e00\u4e9b\u7ed9\u4e16\u754c\u5e26\u6765\u5c0f\u5c0f\u5feb\u4e50\u7684\u4e8b\u3002",
  },

  /* Experience */
  "exp.title": { en: "What I Do", cn: "\u5de5\u4f5c\u7ecf\u5386" },
  "exp.shopee.title": { en: "Shopee \u00b7 Singapore", cn: "Shopee \u00b7 \u65b0\u52a0\u5761" },
  "exp.shopee.role": { en: "Product Management & Operations", cn: "\u4ea7\u54c1\u7ba1\u7406\u4e0e\u8fd0\u8425" },
  "exp.shopee.desc": {
    en: "Working on short video, live streaming, and e-commerce monetization. I help connect millions of users with content-driven shopping experiences across Southeast Asia.",
    cn: "\u8d1f\u8d23\u77ed\u89c6\u9891\u3001\u76f4\u64ad\u548c\u7535\u5546\u53d8\u73b0\u76f8\u5173\u7684\u4ea7\u54c1\u3002\u5e2e\u52a9\u4e1c\u5357\u4e9a\u6570\u767e\u4e07\u7528\u6237\u901a\u8fc7\u5185\u5bb9\u53d1\u73b0\u597d\u7269\u3001\u4eab\u53d7\u8d2d\u7269\u7684\u4e50\u8da3\u3002",
  },
  "exp.prev.title": { en: "Previous Experience", cn: "\u8fc7\u5f80\u7ecf\u5386" },
  "exp.prev.role": { en: "Product & Content Operations", cn: "\u4ea7\u54c1\u4e0e\u5185\u5bb9\u8fd0\u8425" },
  "exp.prev.desc": {
    en: "Built my foundation across digital media, content strategy, and user engagement. Also spent time in the film industry \u2014 a chapter I'm still proud of!",
    cn: "\u5728\u6570\u5b57\u5a92\u4f53\u3001\u5185\u5bb9\u7b56\u7565\u548c\u7528\u6237\u589e\u957f\u65b9\u9762\u6253\u4e0b\u4e86\u57fa\u7840\u3002\u8fd8\u5728\u5f71\u89c6\u884c\u4e1a\u5f85\u8fc7\u4e00\u6bb5\u65f6\u95f4\u2014\u2014\u90a3\u662f\u6211\u81f3\u4eca\u5f15\u4ee5\u4e3a\u8c6a\u7684\u4e00\u6bb5\u7ecf\u5386\uff01",
  },

  /* Education */
  "edu.title": { en: "Where I Studied", cn: "\u6559\u80b2\u80cc\u666f" },
  "edu.school": { en: "City University of Hong Kong", cn: "\u9999\u6e2f\u57ce\u5e02\u5927\u5b66" },
  "edu.dept": { en: "Department of Media and Communication", cn: "\u5a92\u4f53\u4e0e\u4f20\u64ad\u7cfb" },
  "edu.desc": {
    en: "This is where I fell in love with storytelling and learned how media shapes the way we see the world. It taught me to think about products as narratives \u2014 every feature tells a story to the user.",
    cn: "\u5728\u8fd9\u91cc\u6211\u7231\u4e0a\u4e86\u8bb2\u6545\u4e8b\uff0c\u4e5f\u5b66\u4f1a\u4e86\u5a92\u4f53\u5982\u4f55\u5851\u9020\u6211\u4eec\u770b\u4e16\u754c\u7684\u65b9\u5f0f\u3002\u5b83\u6559\u4f1a\u6211\u628a\u4ea7\u54c1\u5f53\u4f5c\u53d9\u4e8b\u6765\u601d\u8003\u2014\u2014\u6bcf\u4e2a\u529f\u80fd\u90fd\u5728\u5411\u7528\u6237\u8bb2\u8ff0\u4e00\u4e2a\u6545\u4e8b\u3002",
  },

  /* Skills */
  "skills.title": { en: "Things I'm Good At", cn: "\u64c5\u957f\u7684\u4e8b" },

  /* Fun Facts */
  "ff.title": { en: "Fun Facts", cn: "\u51b7\u77e5\u8bc6" },
  "ff.subtitle": { en: "Some random things about me", cn: "\u5173\u4e8e\u6211\u7684\u4e00\u4e9b\u968f\u673a\u5c0f\u4e8b" },
  "ff.duo.title_prefix": { en: "Duolingo", cn: "\u591a\u90bb\u56fd" },
  "ff.duo.title_suffix": { en: "-Day Streak", cn: "\u5929\u8fde\u80dc" },
  "ff.duo.desc": {
    en: "I've been learning Japanese on Duolingo for {days} consecutive days (and counting!). My Japanese score is 85/100. As of March 12, my streak was 965 days \u2014 I'll come back to update when I hit 1000! Once I finish the course, I dream of living in Japan, attending a language school, and passing the JLPT N2 exam.",
    cn: "\u6211\u5728\u591a\u90bb\u56fd\u4e0a\u5b66\u65e5\u8bed\u5df2\u7ecf\u8fde\u7eed\u6253\u5361 {days} \u5929\u4e86\uff08\u8fd8\u5728\u7ee7\u7eed\uff01\uff09\u3002\u65e5\u8bed\u6210\u7ee9 85/100\u3002\u622a\u6b62 3 \u6708 12 \u65e5\u8fde\u80dc 965 \u5929\u2014\u2014\u7b49\u6211\u5230 1000 \u5929\u7684\u65f6\u5019\u4f1a\u56de\u6765\u66f4\u65b0\u7684\uff01\u5b66\u5b8c\u4e4b\u540e\u60f3\u53bb\u65e5\u672c\u65c5\u5c45\uff0c\u8bfb\u8bed\u8a00\u5b66\u6821\uff0c\u52aa\u529b\u8003\u8fc7 N2\u3002",
  },
  "ff.web.title": { en: "The Website That Never Was", cn: "\u90a3\u4e2a\u534a\u9014\u800c\u5e9f\u7684\u7f51\u7ad9" },
  "ff.web.desc": {
    en: "I once tried building a personal website on Weebly. I got about halfway through before abandoning it entirely. Well... look at me now! (Thanks, AI.)",
    cn: "\u6211\u66fe\u7ecf\u5728 Weebly \u4e0a\u5c1d\u8bd5\u505a\u81ea\u5df1\u7684\u4e2a\u4eba\u7f51\u7ad9\uff0c\u505a\u5230\u4e00\u534a\u5c31\u653e\u5f03\u4e86\u3002\u4f46\u4f60\u770b\uff0c\u73b0\u5728\u6211\u7ec8\u4e8e\u6709\u4e86\u4e00\u4e2a\uff01\uff08\u611f\u8c22 AI\u3002\uff09",
  },
  "ff.film.title": { en: "Former Film Industry Worker", cn: "\u524d\u5f71\u89c6\u884c\u4e1a\u4ece\u4e1a\u8005" },
  "ff.film.desc": {
    en: "I used to work in the film industry and even have my own IMDb page! It was a fascinating world of storytelling that still influences how I think about products today.",
    cn: "\u6211\u66fe\u7ecf\u5728\u5f71\u89c6\u884c\u4e1a\u5de5\u4f5c\u8fc7\uff0c\u751a\u81f3\u6709\u81ea\u5df1\u7684 IMDb \u9875\u9762\uff01\u90a3\u662f\u4e00\u4e2a\u8ff7\u4eba\u7684\u6545\u4e8b\u4e16\u754c\uff0c\u81f3\u4eca\u4ecd\u5f71\u54cd\u7740\u6211\u505a\u4ea7\u54c1\u7684\u601d\u7ef4\u65b9\u5f0f\u3002",
  },
  "ff.wish.title": { en: "Freedom Dreamer", cn: "\u81ea\u7531\u68a6\u60f3\u5bb6" },
  "ff.wish.desc": {
    en: "My biggest wish right now is to have more freedom \u2014 in time and in location \u2014 so I can create more things I truly love. Like finishing my novel with my AI writing assistant. Yes, I have an AI co-author now. The future is wild.",
    cn: "\u6211\u76ee\u524d\u6700\u5927\u7684\u5fc3\u613f\u662f\u53ef\u4ee5\u65f6\u95f4\u3001\u5730\u70b9\u81ea\u7531\uff0c\u521b\u4f5c\u66f4\u591a\u81ea\u5df1\u559c\u6b22\u7684\u4e1c\u897f\u3002\u6bd4\u5982\u548c\u6211\u7684 AI \u5c0f\u8bf4\u52a9\u7406\u4e00\u8d77\u5b8c\u6210\u6211\u7684\u957f\u7bc7\u5c0f\u8bf4\u3002\u5bf9\uff0c\u6211\u73b0\u5728\u6709\u4e00\u4e2a AI \u5408\u8457\u4e86\u3002\u672a\u6765\u771f\u662f\u592a\u9b54\u5e7b\u4e86\u3002",
  },
  "ff.music.title": { en: "Shower Singer (But Better)", cn: "\u88ab\u4ea7\u54c1\u7ecf\u7406\u803d\u8bef\u7684\u6b4c\u624b" },
  "ff.music.desc": {
    en: "I'm a music lover with a bit of singing talent (or so I'd like to think). I can sing for hours at karaoke without running out of songs I love. Here's a Spotify playlist I curated for rainy days, and a song where I did backup vocals for a friend:",
    cn: "\u6211\u662f\u4e00\u4e2a\u7565\u6709\u5531\u6b4c\u5929\u8d4b\u7684\u97f3\u4e50\u7231\u597d\u8005\u3002\u5728 KTV \u6211\u53ef\u4ee5\u6b22\u5531\u51e0\u5c0f\u65f6\u90fd\u5531\u4e0d\u5b8c\u81ea\u5df1\u559c\u6b22\u7684\u6b4c\u3002\u8fd9\u91cc\u6709\u4e00\u4e2a\u6211\u7cbe\u9009\u7684\u9002\u5408\u4e0b\u96e8\u5929\u542c\u7684 Spotify \u6b4c\u5355\uff0c\u8fd8\u6709\u4e00\u9996\u6211\u5e2e\u670b\u53cb\u548c\u58f0\u4f34\u5531\u7684\u6b4c\uff1a",
  },
  "ff.music.playlist": { en: "Rainy Day Playlist", cn: "\u4e0b\u96e8\u5929\u6b4c\u5355" },
  "ff.music.song": { en: "My Backup Vocal Track", cn: "\u6211\u7684\u548c\u58f0\u4f34\u5531" },
  "ff.cat.title": { en: "Cat Mom to Hazelnut \u699b\u5b9d", cn: "\u699b\u5b9d\u7684\u732b\u5988\u5988" },
  "ff.cat.desc": {
    en: "I adopted a gorgeous long-haired cat named Hazelnut (\u699b\u5b9d). She's fluffy, dramatic, and the undisputed queen of my apartment. Permanent cat lover status: confirmed.",
    cn: "\u6211\u6536\u517b\u4e86\u4e00\u53ea\u8d85\u7f8e\u7684\u957f\u6bdb\u732b\uff0c\u53eb\u699b\u5b9d\uff08Hazelnut\uff09\u3002\u5979\u6bdb\u8338\u8338\u7684\u3001\u620f\u5f88\u591a\uff0c\u662f\u6211\u5bb6\u65e0\u53ef\u4e89\u8bae\u7684\u5973\u738b\u3002\u6c38\u4e45\u732b\u5974\u8eab\u4efd\uff1a\u5df2\u786e\u8ba4\u3002",
  },
  "ff.gallery.title": { en: "Hazelnut \u699b\u5b9d Gallery", cn: "\u699b\u5b9d Gallery" },
  "ff.gallery.subtitle": {
    en: "\u2014 the fluffy queen of my apartment",
    cn: "\u2014 \u6211\u5bb6\u6bdb\u8338\u8338\u7684\u5c0f\u5973\u738b",
  },
  "ff.photo1": { en: "Catch of the day", cn: "\u4eca\u65e5\u6218\u5229\u54c1" },
  "ff.photo2": { en: "What do you want?", cn: "\u4f60\u7785\u5565\uff1f" },
  "ff.photo3": { en: "Queen of the ladder", cn: "\u68af\u5b50\u5973\u738b" },

  /* AI Diary */
  "diary.title": { en: "AI Diary", cn: "AI \u65e5\u8bb0" },
  "diary.subtitle": { en: "My AI creation journal", cn: "\u6211\u7684 AI \u521b\u4f5c\u624b\u8bb0" },
  "diary.post1.title": {
    en: "Manus Built Me a Personal Website in Under an Hour",
    cn: "Manus \u7528\u4e0d\u5230\u4e00\u5c0f\u65f6\u5e2e\u6211\u505a\u4e86\u4e2a\u4eba\u7f51\u7ad9",
  },
  "diary.post1.p1": {
    en: "A little context about me: I'm a former film industry worker turned product manager who can't write a single line of code. Recently, AI's rapid development has been giving me peak anxiety \u2014 not only is it coming for my job, it's getting better at it every single day. But then I thought: wait, when did I become the kind of person who's afraid of new things? Instead of panicking on the sidelines, why not jump in and play?",
    cn: "\u5148\u8bf4\u4e0b\u80cc\u666f\uff1a\u6211\u662f\u4e2a\u5b8c\u5168\u4e0d\u4f1a coding \u7684\u524d\u5f71\u89c6\u4ece\u4e1a\u8005\u73b0\u4ea7\u54c1\u7ecf\u7406\u3002\u6700\u8fd1 AI \u7684\u53d1\u5c55\u8ba9\u6211\u7684\u7126\u8651\u9010\u6e10\u8fbe\u5230\u4e86\u9876\u5cf0\u2014\u2014AI \u4e0d\u4ec5\u8981\u62a2\u6211\u996d\u7897\uff0c\u6700\u53ef\u6015\u7684\u662f\u5b83\u6bcf\u5929\u8fd8\u5728\u98de\u901f\u53d1\u5c55\u4e2d\u3002\u4f46\u8f6c\u5ff5\u4e00\u60f3\uff0c\u6211\u4ece\u4ec0\u4e48\u65f6\u5019\u53d8\u6210\u6050\u60e7\u65b0\u4e8b\u7269\u7684\u4eba\u4e86\u5462\uff1f\u4e0e\u5176\u5728\u65c1\u8fb9\u5e72\u7126\u8651\uff0c\u4e0d\u5982\u81ea\u5df1\u4e5f\u8fdb\u6765\u73a9\u73a9\uff1f",
  },
  "diary.post1.p2": {
    en: "So this website was born. I used Manus (with free credits they gave me \u2014 bless them) and honestly, the whole thing felt kind of magical. I just described what I wanted, and it appeared. Like ordering food delivery, but for code. AI makes going from 0 to 1 so easy that I can focus my energy on polishing from 1 to 1.5!",
    cn: "\u8fd9\u4e2a\u7f51\u7ad9\u5c31\u662f\u8fd9\u4e48\u6765\u7684\u3002\u6211\u7528\u4e86 Manus\uff08\u8fd8\u662f\u4ed6\u4eec\u9001\u6211\u7684\u514d\u8d39 credits\uff0c\u611f\u6069\uff09\uff0c\u8bf4\u5b9e\u8bdd\uff0c\u6574\u4e2a\u8fc7\u7a0b\u633a\u795e\u5947\u7684\u3002\u6211\u53ea\u662f\u63cf\u8ff0\u4e86\u6211\u60f3\u8981\u4ec0\u4e48\uff0c\u5b83\u5c31\u51fa\u73b0\u4e86\u3002\u5c31\u50cf\u70b9\u5916\u5356\uff0c\u4f46\u70b9\u7684\u662f\u4ee3\u7801\u3002AI \u8ba9\u4ece 0 \u5230 1 \u53d8\u5f97\u7b80\u5355\uff0c\u6211\u624d\u80fd\u66f4\u79ef\u6781\u5730\u4ece 1 \u5f00\u59cb\u4f18\u5316\u5230 1.5\uff01",
  },
  "diary.post1.p3": {
    en: "Here's the plot twist though: the first version took maybe fifteen minutes. I just gave Manus my LinkedIn link and said I wanted a personal website \u2014 boom, a decent-looking site appeared. But \"decent\" isn't really my style.",
    cn: "\u4f46\u5267\u60c5\u53cd\u8f6c\u6765\u4e86\uff1a\u7b2c\u4e00\u7248\u5927\u6982\u53ea\u82b1\u4e86\u5341\u51e0\u5206\u949f\u3002\u6211\u5c31\u7ed9\u4e86 Manus \u4e00\u4e2a LinkedIn \u94fe\u63a5\u8bf4\u60f3\u8981\u4e00\u4e2a\u4e2a\u4eba\u7f51\u7ad9\u2014\u2014\u561f\uff0c\u4e00\u4e2a\u770b\u8d77\u6765\u8fd8\u50cf\u6a21\u50cf\u6837\u7684\u7f51\u7ad9\u5c31\u51fa\u6765\u4e86\u3002\u4f46\u201c\u8fd8\u50cf\u6a21\u50cf\u6837\u201d\u4e0d\u662f\u6211\u7684\u98ce\u683c\u3002",
  },
  "diary.post1.p4": {
    en: "So I spent another thirty-plus minutes tweaking prompts, adjusting the tone, swapping out the corporate-speak for something that actually sounds like me. Turns out, getting AI to match your personality takes way longer than getting it to write your resume. Who knew?",
    cn: "\u6240\u4ee5\u6211\u53c8\u82b1\u4e86\u4e09\u5341\u591a\u5206\u949f\u53cd\u590d\u8c03 prompt\uff0c\u8c03\u6574\u8bed\u6c14\uff0c\u628a\u90a3\u4e9b\u9886\u82f1\u6a21\u677f\u98ce\u7684\u5957\u8bdd\u6362\u6210\u771f\u6b63\u50cf\u6211\u8bf4\u7684\u8bdd\u3002\u539f\u6765\u8ba9 AI \u5339\u914d\u4f60\u7684\u4e2a\u6027\uff0c\u6bd4\u8ba9\u5b83\u5199\u4f60\u7684\u7b80\u5386\u96be\u591a\u4e86\u3002\u8c01\u80fd\u60f3\u5230\u5462\uff1f",
  },
  "diary.post1.p5": {
    en: "I'm planning to use this little corner to document my AI creation adventures going forward. Here's what I believe: AI shouldn't scare creators \u2014 it should empower them. Creativity is a deeply human thing, and tools like this just give us new brushes to paint with. The canvas is still ours.",
    cn: "\u4ee5\u540e\u6211\u6253\u7b97\u5728\u8fd9\u4e2a\u5c0f\u89d2\u843d\u8bb0\u5f55\u81ea\u5df1\u7684 AI \u521b\u4f5c\u5386\u7a0b\u3002\u6211\u5f88\u70ed\u7231\u521b\u9020\uff0cAI \u4e0d\u5e94\u8be5\u8ba9\u521b\u4f5c\u8005\u6050\u60e7\uff0c\u800c\u662f\u5e94\u8be5\u8d4b\u80fd\u521b\u4f5c\u8005\u3002\u521b\u9020\u529b\u662f\u6df1\u523b\u7684\u4eba\u7c7b\u7279\u8d28\uff0c\u8fd9\u4e9b\u5de5\u5177\u53ea\u662f\u7ed9\u4e86\u6211\u4eec\u65b0\u7684\u753b\u7b14\u3002\u753b\u5e03\uff0c\u59cb\u7ec8\u662f\u6211\u4eec\u7684\u3002",
  },
  "diary.more": { en: "More posts coming soon...", cn: "\u66f4\u591a\u6587\u7ae0\u5373\u5c06\u5230\u6765\u2026\u2026" },

  /* Comments */
  "comments.title": { en: "Comments", cn: "\u8bc4\u8bba" },
  "comments.name": { en: "Your name", cn: "\u4f60\u7684\u540d\u5b57" },
  "comments.placeholder": { en: "Leave a comment...", cn: "\u5199\u70b9\u4ec0\u4e48\u5427\u2026\u2026" },
  "comments.submit": { en: "Post Comment", cn: "\u53d1\u8868\u8bc4\u8bba" },
  "comments.sending": { en: "Sending...", cn: "\u53d1\u9001\u4e2d\u2026\u2026" },
  "comments.loading": { en: "Loading comments...", cn: "\u52a0\u8f7d\u8bc4\u8bba\u4e2d\u2026\u2026" },
  "comments.empty": { en: "No comments yet. Be the first to say hi!", cn: "\u8fd8\u6ca1\u6709\u8bc4\u8bba\uff0c\u6765\u505a\u7b2c\u4e00\u4e2a\u6253\u62db\u547c\u7684\u4eba\u5427\uff01" },

  /* Contact */
  "contact.title": { en: "Say Hello", cn: "\u6253\u4e2a\u62db\u547c" },
  "contact.subtitle": { en: "Let's connect", cn: "\u6765\u804a\u804a\u5427" },
  "contact.desc": {
    en: "Whether it's about product ideas, AI experiments, film recommendations, or just cat photos \u2014 I'd love to hear from you. Drop me a message anytime!",
    cn: "\u4e0d\u7ba1\u662f\u4ea7\u54c1\u60f3\u6cd5\u3001AI \u5b9e\u9a8c\u3001\u7535\u5f71\u63a8\u8350\uff0c\u8fd8\u662f\u5355\u7eaf\u60f3\u770b\u732b\u7247\u2014\u2014\u90fd\u6b22\u8fce\u6765\u627e\u6211\u804a\uff01\u968f\u65f6\u7ed9\u6211\u53d1\u6d88\u606f\u3002",
  },
  "contact.email": { en: "Email", cn: "\u90ae\u7bb1" },

  /* Footer */
  "footer.brand": { en: "Haiyun's Little Forest", cn: "\u6d77\u97f5\u7684\u5c0f\u68ee\u6797" },

  /* Skills list */
  "skill.product_strategy": { en: "Product Strategy", cn: "\u4ea7\u54c1\u7b56\u7565" },
  "skill.short_video": { en: "Short Video", cn: "\u77ed\u89c6\u9891" },
  "skill.live_streaming": { en: "Live Streaming", cn: "\u76f4\u64ad" },
  "skill.ecommerce": { en: "E-Commerce", cn: "\u7535\u5546" },
  "skill.content_monetization": { en: "Content Monetization", cn: "\u5185\u5bb9\u53d8\u73b0" },
  "skill.user_growth": { en: "User Growth", cn: "\u7528\u6237\u589e\u957f" },
  "skill.ab_testing": { en: "A/B Testing", cn: "A/B \u6d4b\u8bd5" },
  "skill.data_analysis": { en: "Data Analysis", cn: "\u6570\u636e\u5206\u6790" },
  "skill.cross_functional": { en: "Cross-functional Collaboration", cn: "\u8de8\u90e8\u95e8\u534f\u4f5c" },
  "skill.storytelling": { en: "Multimedia Storytelling", cn: "\u591a\u5a92\u4f53\u53d9\u4e8b" },
  "skill.creator_ecosystems": { en: "Creator Ecosystems", cn: "\u521b\u4f5c\u8005\u751f\u6001" },
  "skill.sea_markets": { en: "SEA Markets", cn: "\u4e1c\u5357\u4e9a\u5e02\u573a" },
  "skill.agile": { en: "Agile", cn: "\u654f\u6377\u5f00\u53d1" },
  "skill.localization": { en: "Localization", cn: "\u672c\u5730\u5316" },
  "skill.ai_tools": { en: "AI Tools", cn: "AI \u5de5\u5177" },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "cn" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] || entry.en || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
