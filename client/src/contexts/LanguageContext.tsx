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
  "nav.about": { en: "About", cn: "关于我" },
  "nav.funfacts": { en: "Fun Facts", cn: "冷知识" },
  "nav.diary": { en: "AI Diary", cn: "AI 日记" },
  "nav.contact": { en: "Contact", cn: "联系我" },

  /* Hero */
  "hero.welcome": { en: "Welcome to my little corner", cn: "欢迎来到我的小角落" },
  "hero.tagline": {
    en: "A product manager / AI learner / content creator / ex-film worker / mother of a cat",
    cn: "产品经理 / AI 学习者 / 内容创作者 / 前影视人 / 猫妈妈",
  },
  "hero.explore": { en: "Explore", cn: "往下看" },

  /* About */
  "about.title": { en: "About Me", cn: "关于我" },
  "about.subtitle": { en: "A little bit about who I am", cn: "简单介绍一下自己" },
  "about.p1": {
    en: "Hi there! I'm Haiyun (何海韵), currently living in sunny Singapore. By day I'm a product manager at Shopee, Southeast Asia's biggest e-commerce platform, where I get to work on fun things like short videos, live streaming, and figuring out how to make online shopping more engaging and safe.",
    cn: "Hi！我是何海韵，目前住在新加坡。平时我在 Shopee（东南亚最大的电商平台）做产品经理，负责短视频、直播这些有趣的任务，琢磨怎么让大家逛得更开心、买得更爽，同时确保平台的安全。",
  },
  "about.p2": {
    en: "I studied Media and Communication at City University of Hong Kong, which gave me a storyteller's perspective on building products. I care about the \"why\" behind every feature, not just the \"how.\" My background is a mix of media and tech — from working in the film industry to driving growth in digital platforms. Outside of work, I'm diving into AI, learning Japanese on Duolingo (almost 1000 days!), and taking care of my fluffy cat Hazelnut. I believe in staying curious and creating things that bring a little joy to the world.",
    cn: "我在香港城市大学读的媒体与传播，这让我习惯用讲故事的视角去做产品。比起“怎么做”，我更在乎“为什么做”。我的背景有很多媒体和科技的融合——从影视行业到数字平台的增长。工作之外，我在研究 AI、用多邻国学日语（快打卡 1000 天了！），还有伺候我的毛绒绒猫主子榛宝。我觉得保持好奇心很重要，希望能做一些给世界带来小小快乐的事。",
  },

  /* Experience & Skills */
  "exp.title": { en: "What I Do & Things I'm Good At", cn: "我的业务" },

  /* Fun Facts */
  "ff.title": { en: "Fun Facts", cn: "冷知识" },
  "ff.subtitle": { en: "Some random things about me", cn: "关于我的一些随机小事" },

  /* Skills - Moved to merged section */
  "skills.title": { en: "Things I'm Good At", cn: "擅长的事" },
  "ff.duo.title_prefix": { en: "Duo's Captive", cn: "多邻国的“俘虏”" },
  "ff.duo.title_suffix": { en: "1000-Day Streak", cn: "1000 天打卡" },
  "ff.duo.desc": {
    en: "Almost 1000 days of Japanese! I dream of living in Japan and passing N2. Why not N1? Because I choose peace over stress.",
    cn: "学日语快 1000 天了！梦想去日本旅居并考过 N2。为什么不考 N1？因为我选择放过自己。",
  },
  "ff.web.title": { en: "The Web Survivor", cn: "网页“幸存者”" },
  "ff.web.desc": {
    en: "Tried Weebly, failed halfway. Tried AI, and here we are! Modern problems require modern (AI) solutions.",
    cn: "曾试图在 Weebly 徒手建站，半路夭折。直到遇到了 AI……科技改变生活！（感谢 AI）",
  },
  "ff.film.title": { en: "Ex-Movie Maker", cn: "前电影打工人" },
  "ff.film.desc": {
    en: "I have an IMDb page! Film taught me that every product feature is just another way to tell a great story.",
    cn: "我也是有 IMDb 页面的！电影教会我：做产品和拍电影一样，本质都是在讲好故事。",
  },
  "ff.wish.title": { en: "Freedom Dreamer", cn: "自由梦想家" },
  "ff.wish.desc": {
    en: "Chasing time and location freedom. Currently co-authoring a novel with my AI assistant. The future is wild!",
    cn: "追求时间与地点自由。正和我的 AI 助理合著小说，这种“人机协作”的未来真的太酷了。",
  },
  "ff.music.title": { en: "Hidden Vocalist", cn: "被耽误的歌手" },
  "ff.music.desc": {
    en: "Karaoke queen who never runs out of songs. Check out my rainy day playlist and that one time I did backup vocals!",
    cn: "KTV 麦霸，曲库永不枯竭。来听听我私藏的下雨天歌单，还有我为朋友跨刀录制的和声。",
  },
  "ff.music.playlist": { en: "Rainy Day Playlist", cn: "下雨天歌单" },
  "ff.music.song": { en: "My Backup Vocal Track", cn: "我的和声伴唱" },
  "ff.cat.title": { en: "Cat Mom to Hazelnut 榛宝", cn: "榛宝的猫妈妈" },
  "ff.cat.desc": {
    en: "I adopted a gorgeous long-haired cat named Hazelnut (榛宝). She's fluffy, dramatic, and the undisputed queen of my apartment. Permanent cat lover status: confirmed.",
    cn: "我收养了一只超美的长毛猫，叫榛宝（Hazelnut）。她毛茸茸的、戏很多，是我家无可争议的女王。永久猫奴身份：已确认。",
  },
  "ff.gallery.title": { en: "Hazelnut 榛宝 Gallery", cn: "榛宝 Gallery" },
  "ff.gallery.subtitle": {
    en: "— the fluffy queen of my apartment",
    cn: "— 我家毛茸茸的小女王",
  },
  "ff.photo1": { en: "Catch of the day", cn: "今日战利品" },
  "ff.photo2": { en: "What do you want?", cn: "你瞅啥？" },
  "ff.photo3": { en: "Queen of the ladder", cn: "梯子女王" },

  /* AI Diary */
  "diary.title": { en: "AI Diary", cn: "AI 日记" },
  "diary.subtitle": { en: "My AI creation journal", cn: "我的 AI 创作手记" },
  "diary.post1.title": {
    en: "Manus Built Me a Personal Website in Under an Hour",
    cn: "Manus 用不到一小时帮我做了个个人网站",
  },
  "diary.post1.p1": {
    en: "A little context about me: I'm a former film industry worker turned product manager who can't write a single line of code. Recently, AI's rapid development has been giving me peak anxiety — not only is it coming for my job, it's getting better at it every single day. But then I thought: wait, when did I become the kind of person who's afraid of new things? Instead of panicking on the sidelines, why not jump in and play?",
    cn: "先说下背景：我是个完全不会 coding 的前影视从业者现产品经理。最近 AI 的发展让我的焦虑逐渐达到了顶峰——AI 不仅要抢我饭碗，最可怕的是它每天还在飞速发展中。但转念一想，我什么时候变成恐惧新事物的人了呢？与其在旁边干焦虑，不如自己也进来玩玩？",
  },
  "diary.post1.p2": {
    en: "So this website was born. I used Manus (with free credits they gave me — bless them) and honestly, the whole thing felt kind of magical. I just described what I wanted, and it appeared. Like ordering food delivery, but for code. AI makes going from 0 to 1 so easy that I can focus my energy on polishing from 1 to 1.5!",
    cn: "这个网站就是这么来的。我用了 Manus（还是他们送我的免费 credits，感恩），说实话，整个过程挺神奇的。我只是描述了我想要什么，它就出现了。就像点外卖，但点的是代码。AI 让从 0 到 1 变得简单，我才能更积极地从 1 开始优化到 1.5！",
  },
  "diary.post1.p3": {
    en: "Here's the plot twist though: the first version took maybe fifteen minutes. I just gave Manus my LinkedIn link and said I wanted a personal website — boom, a decent-looking site appeared. But \"decent\" isn't really my style.",
    cn: "但剧情反转来了：第一版大概只花了十几分钟。我就给了 Manus 一个 LinkedIn 链接说想要一个个人网站——嘟，一个看起来还像模像样的网站就出来了。但“还像模像样”不是我的风格。",
  },
  "diary.post1.p4": {
    en: "So I spent another thirty-plus minutes tweaking prompts, adjusting the tone, swapping out the corporate-speak for something that actually sounds like me. Turns out, getting AI to match your personality takes way longer than getting it to write your resume. Who knew?",
    cn: "所以我又花了三十多分钟反复调 prompt，调整语气，把那些领英模板风的套话换成真正像我说话的话。原来让 AI 匹配你的个性，比让它写你的简历难多了。谁能想到呢？",
  },
  "diary.post1.p5": {
    en: "I'm planning to use this little corner to document my AI creation adventures going forward. Here's what I believe: AI shouldn't be something we fear, but a tool that helps us amplify our own unique voice. If you're also an 'AI-anxious' person, maybe it's time to stop watching and start building.",
    cn: "我打算以后用这个小角落来记录我的 AI 创作冒险。我始终相信：AI 不应该是我们恐惧的对象，而是一个能帮我们放大独特声音的工具。如果你也是个“AI 焦虑者”，也许是时候停止观望，开始动手了。",
  },
  "diary.more": { en: "More stories coming soon...", cn: "更多故事，敬请期待..." },

  /* Comments */
  "comments.title": { en: "Comments", cn: "评论区" },
  "comments.name": { en: "Your nickname", cn: "你的昵称" },
  "comments.placeholder": { en: "Leave a comment...", cn: "留下你的评论..." },
  "comments.submit": { en: "Post Comment", cn: "发布评论" },
  "comments.sending": { en: "Sending...", cn: "发送中..." },
  "comments.loading": { en: "Loading comments...", cn: "加载评论中..." },
  "comments.empty": { en: "No comments yet. Be the first to say hi!", cn: "暂无评论。来做第一个打招呼的人吧！" },

  /* Footer */
  "footer.brand": { en: "Haiyun's Little Forest", cn: "海韵的小森林" },

  /* Experience Detail */
  "exp.shopee.title": { en: "Shopee · Singapore", cn: "Shopee · 新加坡" },
  "exp.shopee.role": { en: "Product Management & Operations", cn: "产品管理与运营" },
  "exp.shopee.desc": {
    en: "Working on short video, live streaming, and e-commerce monetization. I help connect millions of users with content-driven shopping experiences across Southeast Asia.",
    cn: "负责短视频、直播和电商变现相关的产品。帮助东南亚数百万用户通过内容发现好物、享受购物的乐趣。",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("cn");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "cn" : "en"));
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[key]?.[lang] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
