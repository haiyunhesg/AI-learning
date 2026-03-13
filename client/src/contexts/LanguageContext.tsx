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
    en: "Hi there! I'm Haiyun (何海韵), currently living in sunny Singapore. By day I'm a product manager at Shopee, Southeast Asia's biggest e-commerce platform, where I get to work on fun things like short videos, live streaming, and figuring out how to make online shopping more engaging.",
    cn: "嗨！我是何海韵，目前住在新加坡。白天我在 Shopee（东南亚最大的电商平台）做产品经理，负责短视频、直播这些有趣的业务，琢磨怎么让大家逛得更开心、买得更爽。",
  },
  "about.p2": {
    en: "My background is a mix of media and tech — I studied Media and Communication at City University of Hong Kong, which gave me a storyteller's perspective on building products. I care about the \"why\" behind every feature, not just the \"how.\"",
    cn: "我的背景是媒体和科技的混搭——在香港城市大学读的媒体与传播，这让我习惯用讲故事的视角去做产品。比起\"怎么做\"，我更在意\"为什么做\"。",
  },
  "about.p3": {
    en: "Outside of work, I'm diving into AI, learning Japanese on Duolingo (almost 1000 days!), and taking care of my fluffy cat Hazelnut. I believe in staying curious and creating things that bring a little joy to the world.",
    cn: "工作之外，我在研究 AI、用多邻国学日语（快打卡 1000 天了！），还有伺候我的毛绒绒猫主子榛宝。我相信保持好奇心，做一些能给世界带来小小快乐的事。",
  },

  /* Experience */
  "exp.title": { en: "What I Do", cn: "工作经历" },
  "exp.shopee.title": { en: "Shopee · Singapore", cn: "Shopee · 新加坡" },
  "exp.shopee.role": { en: "Product Management & Operations", cn: "产品管理与运营" },
  "exp.shopee.desc": {
    en: "Working on short video, live streaming, and e-commerce monetization. I help connect millions of users with content-driven shopping experiences across Southeast Asia.",
    cn: "负责短视频、直播和电商变现相关的产品。帮助东南亚数百万用户通过内容发现好物、享受购物的乐趣。",
  },
  "exp.prev.title": { en: "Previous Experience", cn: "过往经历" },
  "exp.prev.role": { en: "Product & Content Operations", cn: "产品与内容运营" },
  "exp.prev.desc": {
    en: "Built my foundation across digital media, content strategy, and user engagement. Also spent time in the film industry — a chapter I'm still proud of!",
    cn: "在数字媒体、内容策略和用户增长方面打下了基础。还在影视行业待过一段时间——那是我至今引以为豪的一段经历！",
  },

  /* Education */
  "edu.title": { en: "Where I Studied", cn: "教育背景" },
  "edu.school": { en: "City University of Hong Kong", cn: "香港城市大学" },
  "edu.dept": { en: "Department of Media and Communication", cn: "媒体与传播系" },
  "edu.desc": {
    en: "This is where I fell in love with storytelling and learned how media shapes the way we see the world. It taught me to think about products as narratives — every feature tells a story to the user.",
    cn: "在这里我爱上了讲故事，也学会了媒体如何塑造我们看世界的方式。它教会我把产品当作叙事来思考——每个功能都在向用户讲述一个故事。",
  },

  /* Skills */
  "skills.title": { en: "Things I'm Good At", cn: "擅长的事" },

  /* Fun Facts */
  "ff.title": { en: "Fun Facts", cn: "冷知识" },
  "ff.subtitle": { en: "Some random things about me", cn: "关于我的一些随机小事" },
  "ff.duo.title_prefix": { en: "Duolingo", cn: "多邻国" },
  "ff.duo.title_suffix": { en: "-Day Streak", cn: "天连胜" },
  "ff.duo.desc": {
    en: "I've been learning Japanese on Duolingo for {days} consecutive days (and counting!). My Japanese score is 85/100. As of March 12, my streak was 965 days — I'll come back to update when I hit 1000! Once I finish the course, I dream of living in Japan, attending a language school, and passing the JLPT N2 exam.",
    cn: "我在多邻国上学日语已经连续打卡 {days} 天了（还在继续！）。日语成绩 85/100。截止 3 月 12 日连胜 965 天——等我到 1000 天的时候会回来更新的！学完之后想去日本旅居，读语言学校，努力考过 N2。",
  },
  "ff.web.title": { en: "The Website That Never Was", cn: "那个半途而废的网站" },
  "ff.web.desc": {
    en: "I once tried building a personal website on Weebly. I got about halfway through before abandoning it entirely. Well... look at me now! (Thanks, AI.)",
    cn: "我曾经在 Weebly 上尝试做自己的个人网站，做到一半就放弃了。但你看，现在我终于有了一个！（感谢 AI。）",
  },
  "ff.film.title": { en: "Former Film Industry Worker", cn: "前影视行业从业者" },
  "ff.film.desc": {
    en: "I used to work in the film industry and even have my own IMDb page! It was a fascinating world of storytelling that still influences how I think about products today.",
    cn: "我曾经在影视行业工作过，甚至有自己的 IMDb 页面！那是一个迷人的故事世界，至今仍影响着我做产品的思维方式。",
  },
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
    cn: "Manus 用不到一小时帮我做了个人网站",
  },
  "diary.post1.p1": {
    en: "So lately I've been having a bit of an existential crisis about AI. You know the kind — \"robots are coming for our jobs\" type of anxiety. But then I thought: instead of panicking on the sidelines, why not jump in and play?",
    cn: "最近 AI 的发展让我有点焦虑，就是那种\"机器人要抢我饭碗了\"的感觉。但转念一想：与其在旁边干焦虑，不如自己也进来玩玩？",
  },
  "diary.post1.p2": {
    en: "That's how this website was born. I used Manus (with free credits they gave me, bless them) and in about thirty minutes, I went from \"I should really make a personal website someday\" to... well, this. The last time I tried building a website was on Weebly, and we all know how that ended. (Spoiler: it didn't.)",
    cn: "这个网站就是这么来的。我用了 Manus（还是他们送我的免费额度，感恩），大概三十分钟，就从\"我真的应该做个个人网站\"变成了……你现在看到的这个。上次我尝试做网站还是在 Weebly 上，结局大家都知道。（剧透：没做完。）",
  },
  "diary.post1.p3": {
    en: "Honestly, the whole experience was kind of magical. I just described what I wanted, and it appeared. Like ordering food delivery, but for code.",
    cn: "说实话，整个过程挺神奇的。我只是描述了我想要什么，它就出现了。就像点外卖，但点的是代码。",
  },
  "diary.post1.p4": {
    en: "Here's the plot twist though: the first version took maybe fifteen minutes. I just gave Manus my LinkedIn link, and boom — a decent-looking website appeared. But \"decent\" isn't really my style. So I spent another thirty-plus minutes tweaking prompts, adjusting the tone, swapping out the corporate-speak for something that actually sounds like me. Turns out, getting AI to match your personality takes longer than getting it to write your resume. Who knew?",
    cn: "但剧情反转来了：第一版大概只花了十几分钟。我就给了 Manus 一个 LinkedIn 链接，嘭——一个看起来还不错的网站就出来了。但\"还不错\"不是我的风格。所以我又花了三十多分钟反复调 prompt，调整语气，把那些职场套话换成真正像我说的话。原来让 AI 匹配你的个性，比让它写你的简历难多了。谁能想到呢？",
  },
  "diary.post1.p5": {
    en: "I'm planning to use this little corner to document my AI creation adventures going forward. Here's what I believe: AI shouldn't scare creators — it should empower them. Creativity is a deeply human thing, and tools like this just give us new brushes to paint with. The canvas is still ours.",
    cn: "以后我打算在这个小角落记录自己的 AI 创作历程。我相信：AI 不应该让创作者害怕，而应该赋能创作者。创造力是深刻的人类特质，这些工具只是给了我们新的画笔。画布，始终是我们的。",
  },
  "diary.more": { en: "More posts coming soon...", cn: "更多文章即将到来……" },

  /* Comments */
  "comments.title": { en: "Comments", cn: "评论" },
  "comments.name": { en: "Your name", cn: "你的名字" },
  "comments.placeholder": { en: "Leave a comment...", cn: "写点什么吧……" },
  "comments.submit": { en: "Post Comment", cn: "发表评论" },
  "comments.sending": { en: "Sending...", cn: "发送中……" },
  "comments.loading": { en: "Loading comments...", cn: "加载评论中……" },
  "comments.empty": { en: "No comments yet. Be the first to say hi!", cn: "还没有评论，来做第一个打招呼的人吧！" },

  /* Contact */
  "contact.title": { en: "Say Hello", cn: "打个招呼" },
  "contact.subtitle": { en: "Let's connect", cn: "来聊聊吧" },
  "contact.desc": {
    en: "Whether it's about product ideas, AI experiments, film recommendations, or just cat photos — I'd love to hear from you. Drop me a message anytime!",
    cn: "不管是产品想法、AI 实验、电影推荐，还是单纯想看猫片——都欢迎来找我聊！随时给我发消息。",
  },
  "contact.email": { en: "Email", cn: "邮箱" },

  /* Footer */
  "footer.brand": { en: "Haiyun's Little Forest", cn: "海韵的小森林" },

  /* Skills list */
  "skill.product_strategy": { en: "Product Strategy", cn: "产品策略" },
  "skill.short_video": { en: "Short Video", cn: "短视频" },
  "skill.live_streaming": { en: "Live Streaming", cn: "直播" },
  "skill.ecommerce": { en: "E-Commerce", cn: "电商" },
  "skill.content_monetization": { en: "Content Monetization", cn: "内容变现" },
  "skill.user_growth": { en: "User Growth", cn: "用户增长" },
  "skill.ab_testing": { en: "A/B Testing", cn: "A/B 测试" },
  "skill.data_analysis": { en: "Data Analysis", cn: "数据分析" },
  "skill.cross_functional": { en: "Cross-functional Collaboration", cn: "跨部门协作" },
  "skill.storytelling": { en: "Multimedia Storytelling", cn: "多媒体叙事" },
  "skill.creator_ecosystems": { en: "Creator Ecosystems", cn: "创作者生态" },
  "skill.sea_markets": { en: "SEA Markets", cn: "东南亚市场" },
  "skill.agile": { en: "Agile", cn: "敏捷开发" },
  "skill.localization": { en: "Localization", cn: "本地化" },
  "skill.ai_tools": { en: "AI Tools", cn: "AI 工具" },
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
