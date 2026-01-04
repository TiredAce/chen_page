<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <div class="nav-logo">
          <a @click="scrollTo('home')">
            <div class="logo-icon">🧠</div>
          </a>
        </div>
        <div class="nav-links">
          <a href="#home" @click="scrollTo('home')" :class="{ active: activeSection === 'home' }">{{ t('nav.home') }}</a>
          <a href="#about" @click="scrollTo('about')" :class="{ active: activeSection === 'about' }">{{ t('nav.about') }}</a>
          <a href="#knowledge" @click="scrollTo('knowledge')" :class="{ active: activeSection === 'knowledge' }">{{ t('nav.knowledge') }}</a>
          <a href="#skills" @click="scrollTo('skills')" :class="{ active: activeSection === 'skills' }">{{ t('nav.skills') }}</a>
          <a href="#contact" @click="scrollTo('contact')" :class="{ active: activeSection === 'contact' }">{{ t('nav.contact') }}</a>
        </div>
        <div class="nav-actions">
          <button class="icon-btn language-toggle" @click="toggleLanguage" :title="isEnglish ? 'Switch to Chinese' : 'Switch to English'">
            {{ isEnglish ? 'En' :'中' }}
          </button>
          <button class="icon-btn theme-toggle" @click="toggleTheme" :title="isDarkTheme ? t('theme.switchToLight') : t('theme.switchToDark')">
            {{ isDarkTheme ? '🌙' : '☀' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- 移动端右下角浮动菜单按钮 -->
    <button class="floating-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }" title="菜单">
      <span class="hamburger" :class="{ active: isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <!-- 移动端遮罩层 -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-menu-overlay" 
      @click="closeMobileMenu"
    ></div>

    <!-- 移动端左侧菜单 -->
    <div class="mobile-menu" :class="{ open: isMobileMenuOpen }">
      <div class="mobile-menu-header">
        <div class="mobile-menu-logo">
          <div class="logo-icon">🧠</div>
        </div>
        <button class="mobile-menu-close" @click="closeMobileMenu">×</button>
      </div>
      <nav class="mobile-menu-nav">
        <a href="#home" @click="handleMobileNavClick('home')" :class="{ active: activeSection === 'home' }">
          <span class="nav-icon">🏠</span>
          <span>{{ t('nav.home') }}</span>
        </a>
        <a href="#about" @click="handleMobileNavClick('about')" :class="{ active: activeSection === 'about' }">
          <span class="nav-icon">👤</span>
          <span>{{ t('nav.about') }}</span>
        </a>
        <a href="#knowledge" @click="handleMobileNavClick('knowledge')" :class="{ active: activeSection === 'knowledge' }">
          <span class="nav-icon">📚</span>
          <span>{{ t('nav.knowledge') }}</span>
        </a>
        <a href="#skills" @click="handleMobileNavClick('skills')" :class="{ active: activeSection === 'skills' }">
          <span class="nav-icon">💻</span>
          <span>{{ t('nav.skills') }}</span>
        </a>
        <a href="#contact" @click="handleMobileNavClick('contact')" :class="{ active: activeSection === 'contact' }">
          <span class="nav-icon">📧</span>
          <span>{{ t('nav.contact') }}</span>
        </a>
      </nav>
      <div class="mobile-menu-actions">
        <button class="mobile-action-btn" @click="toggleLanguage">
          <span>{{ isEnglish ? '中' : 'EN' }}</span>
          <span>{{ isEnglish ? '切换到中文' : 'Switch to English' }}</span>
        </button>
        <button class="mobile-action-btn" @click="toggleTheme">
          <span>{{ isDarkTheme ? '☀' : '🌙' }}</span>
          <span>{{ isDarkTheme ? t('theme.switchToLight') : t('theme.switchToDark') }}</span>
        </button>
      </div>
    </div>

    <!-- 首页部分 -->
    <section id="home" class="section hero-section">
      <div class="section-bg section-bg-home"></div>
      <div class="hero-content">
        <div class="hero-left">
          <div class="profile-image">
            <img src="/main_photo.png" alt="个人照片" class="profile-photo" />
          </div>
        </div>
        <div class="hero-right">
          <h1 class="hero-title">
            <span class="gradient-text-green">Hi! </span>
            <span class="gradient-text-blue"> {{ t('hero.name') }}</span>
          </h1>
          <p class="hero-description">
            {{ t('hero.desc1') }}
          </p>
          <p class="hero-description">
            {{ t('hero.desc2') }}
          </p>
          <div class="hero-affiliation">
            <span class="affiliation-icon">◎</span>
            <span>{{ t('hero.affiliation') }}</span>
          </div>
          <div class="hero-buttons">
            <a href="https://github.com/TiredAce" target="_blank" class="btn btn-github">
              <span>🐙</span>
              <span>GitHub</span>
            </a>
            <a href="#contact" @click="scrollTo('contact')" class="btn btn-contact">
              <span>✉</span>
              <span>{{ t('hero.contactMe') }}</span>
            </a>
          </div>
        </div>
      </div>
      <div class="quote-section">
        <p class="quote-en">"Dots become lines when the time clicks."</p>
        <p class="quote-cn">
          {{ t('hero.quote') }}
        </p>
      </div>
    </section>

    <!-- 关于我部分 -->
    <section id="about" class="section about-section">
      <div class="section-bg section-bg-about"></div>
      <div class="section-header">
        <span class="section-icon">️
          🖼️</span>
        <h2 class="section-title">{{ t('about.selfView') }}</h2>
      </div>
      <div class="about-cards">
        <div class="about-card">
          <div class="card-icon pink">❤</div>
          <p>{{ t('about.card1') }}</p>
        </div>
        <div class="about-card">
          <div class="card-icon blue">👁</div>
          <p>{{ t('about.card2') }}</p>
        </div>
        <div class="about-card">
          <div class="card-icon green">🎯</div>
          <p>{{ t('about.card3') }}</p>
        </div>
        <div class="about-card">
          <div class="card-icon purple">🔄</div>
          <p>{{ t('about.card4') }}</p>
        </div>
      </div>

      <div class="doing-section">
        <div class="doing-left">
          <div class="doing-header">
            <span class="doing-emoji">🤔</span>
            <h3>{{ t('about.doing') }}</h3>
          </div>
          <ul class="doing-list">
            <li>
              <span class="list-number green">1</span>
              <span>{{ t('about.doing1') }}</span>
            </li>
            <li>
              <span class="list-number green">2</span>
              <span>{{ t('about.doing2') }}</span>
            </li>

            <li>
              <span class="list-number green">3</span>
              <span>{{ t('about.doing4') }}</span>
            </li>
            <!-- <li>
              <span class="list-number green">4</span>
              <span>研究AI，研究产品，研究创业</span>
            </li> -->
            <!-- <li>
              <span class="list-number green">5</span>
              <span>学习如何成为一个靠谱的IP</span>
            </li> -->
          </ul>
        </div>
        <div class="doing-right">
          <div class="doing-header">
            <span class="doing-emoji">💪</span>
            <h3>{{ t('about.goodAt') }}</h3>
          </div>
          <ul class="doing-list">
            <li>
              <span class="list-number orange">1</span>
              <span>{{ t('about.goodAt1') }}</span>
            </li>
            <li>
              <span class="list-number orange">2</span>
              <span>{{ t('about.goodAt2') }}</span>
            </li>
            <li>
              <span class="list-number orange">3</span>
              <span>{{ t('about.goodAt3') }}</span>
            </li>
            <!-- <li>
              <span class="list-number orange">4</span>
              <span>即刻起步，小量快跑，迭代优化</span>
            </li> -->
            <!-- <li>
              <span class="list-number orange">5</span>
              <span>从他人的经验中学习</span>
            </li> -->
          </ul>
        </div>
      </div>
    </section>

    <!-- 知识空间部分 -->
    <section id="knowledge" class="section knowledge-section">
      <div class="section-bg section-bg-knowledge"></div>
      <div class="section-header">
        <span class="section-icon">🚩</span>
        <h2 class="section-title gradient-text-blue">{{ t('sections.knowledge') }}</h2>
      </div>
      <p class="section-description">
        {{ t('knowledge.description') }}
      </p>
      <p class="section-note">
        {{ t('knowledge.note') }}
      </p>
      <div class="knowledge-grid">
        <template v-for="(item, index) in knowledgeItems" :key="index">
          <a v-if="item.link" :href="item.link" target="_blank" class="knowledge-card">
            <div class="knowledge-icon" :class="item.color">
              {{ item.icon }}
            </div>
            <h3 class="knowledge-title">{{ item.title }}</h3>
            <p class="knowledge-desc">{{ item.description }}</p>
          </a>
          <div v-else class="knowledge-card">
            <div class="knowledge-icon" :class="item.color">
              {{ item.icon }}
            </div>
            <h3 class="knowledge-title">{{ item.title }}</h3>
            <p class="knowledge-desc">{{ item.description }}</p>
          </div>
        </template>
      </div>
    </section>

    <!-- 技能与生活部分 -->
    <section id="skills" class="section skills-section">
      <div class="section-bg section-bg-skills"></div>
      <div class="section-header">
        <span class="section-icon">💻</span>
        <h2 class="section-title">{{ t('sections.skills') }}</h2>
      </div>
      <div class="skills-content">
        <div class="skills-grid">
          <div class="skill-item">
            
            <div class="skill-icon">💻</div>
            <h4>{{ t('skills.frontend') }}</h4>
            <p>{{ t('skills.frontendDesc') }}</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">🤖</div>
            <h4>{{ t('skills.ai') }}</h4>
            <p>{{ t('skills.aiDesc') }}</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">📱</div>
            <h4>{{ t('skills.product') }}</h4>
            <p>{{ t('skills.productDesc') }}</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">🚀</div>
            <h4>{{ t('skills.startup') }}</h4>
            <p>{{ t('skills.startupDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系方式部分 -->
    <section id="contact" class="section contact-section">
      <div class="section-bg section-bg-contact"></div>
      <div class="section-header">
        <span class="section-icon">🔍</span>
        <h2 class="section-title gradient-text-blue">{{ t('sections.contact') }}</h2>
      </div>
      <p class="section-description">
        {{ t('contact.description') }}
      </p>
      <div class="contact-grid">
        <template v-for="(item, index) in contactItems" :key="index">
          <a v-if="item.link" :href="item.link" target="_blank" class="contact-card">
            <div class="contact-icon" :class="item.colorClass">
              {{ item.icon }}
            </div>
            <h3 class="contact-title">{{ item.title }}</h3>
            <p class="contact-detail">{{ item.detail }}</p>
          </a>
          <div v-else class="contact-card">
            <div class="contact-icon" :class="item.colorClass">
              {{ item.icon }}
            </div>
            <h3 class="contact-title">{{ item.title }}</h3>
            <p class="contact-detail">{{ item.detail }}</p>
          </div>
        </template>
      </div>
      <!-- <div class="contact-guidelines">
        <div class="guideline-card">
          <div class="guideline-icon blue">📁</div>
          <h4>工作沟通</h4>
          <p>1. 工作相关的事情,建议直接电话/线上会议/当面沟通,不要发"在吗"</p>
          <p>2. 直接说明来意,开门见山</p>
        </div>
        <div class="guideline-card">
          <div class="guideline-icon pink">💬</div>
          <h4>生活交流</h4>
          <p>• 生活交流可以随意、放松、自然、真实</p>
          <p>• 欢迎分享日常、高光时刻、情绪片段或独特见解</p>
        </div>
      </div> -->
      <div class="qr-code-container">
        <div class="qr-code-wrapper">
          <img src="/wechat-qr.png" alt="微信二维码" class="qr-code-image" />
          <p class="qr-code-text">{{ t('contact.wechat') }}</p>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="runtime-display">
          <span class="runtime-label">{{ t('footer.runtime') }}</span>
          <span class="runtime-value">{{ runtime.years }}</span>
          <span class="runtime-unit">{{ isEnglish ? 'Y' : '年' }}</span>
          <span class="runtime-value">{{ runtime.months }}</span>
          <span class="runtime-unit">{{ isEnglish ? 'M' : '月' }}</span>
          <span class="runtime-value">{{ runtime.days }}</span>
          <span class="runtime-unit">{{ isEnglish ? 'D' : '天' }}</span>
          <span class="runtime-value">{{ runtime.hours }}</span>
          <span class="runtime-unit">{{ isEnglish ? 'H' : '时' }}</span>
          <span class="runtime-value">{{ runtime.minutes }}</span>
          <span class="runtime-unit">{{ isEnglish ? 'M' : '分' }}</span>
          <span class="runtime-value">{{ runtime.seconds }}</span>
          <span class="runtime-unit">{{ isEnglish ? 'S' : '秒' }}</span>
        </div>
      </div>
    </footer>

    <!-- 背景装饰 -->
    <div class="bg-decoration"></div>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const activeSection = ref('home')
const isDarkTheme = ref(true)
const isEnglish = ref(false)
const isMobileMenuOpen = ref(false)

// 语言翻译对象
const translations = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      knowledge: '知识空间',
      skills: '技能&生活',
      contact: '联系方式'
    },
    hero: {
      name: '我是陈碧辉',
      desc1: '一名战略驱动、系统化思考、高度务实的机会主义者。',
      desc2: '一名 AI 原生的年轻人，热爱探索未知领域、收集整理有用的知识并分享。持续发现并实现可以由 AI 加速的问题，希望成为一名优秀的智能体工程师。',
      affiliation: '南开大学 2025级光电信息工程博士生',
      contactMe: '联系我',
      quote: '学到的很多东西，都是一个个点，我可能现在不知道怎么用,也不能预见到底有没有用，但当某一天觉得这些点有用的时候，我会把它们连成一条线。'
    },
    sections: {
      about: '关于我',
      knowledge: '知识空间',
      skills: '技能&生活',
      contact: '联系方式'
    },
    knowledge: {
      description: '这个空间汇集了我在学习过程中遇到的有用且有趣的资源。',
      note: '内容会定期更新，说不定会有惊喜哦~',
      items: {
        ai: { title: '懂AI', description: '记录了我收集到的AI行业的资讯观点与实用干货' },
        work: { title: '会工作', description: '记录我个人认同的工作方法与思考' },
        life: { title: '去生活', description: '记录生活中的想和大家分享的一些事件' },
        psychology: { title: '悉心理', description: '记录一些与心理、心态相关的内容' },
        coding: { title: '说编程', description: '关于编程中的一些原理、规范、方法' },
        optics: { title: '学光学', description: '记录我的学生生涯,和一些在此过程中留下的资源' }
      }
    },
    contact: {
      title: '联系方式',
      description: '期待与你交流,一起做些有意思的事情',
      wechat: '微信二维码',
      items: {
        wechat: { title: '微信' },
        email: { title: '邮箱' },
        github: { title: 'GitHub' },
        website: { title: '个人网站' }
      }
    },
    about: {
      title: '关于我',
      selfView: '我眼里的我',
      card1: '喜欢做梦，情绪敏感，心思细腻，涉猎广泛',
      card2: '喜欢一切够触动内心的东西',
      card3: '做点有价值与有影响力的事情',
      card4: '把AI当作"操作系统"',
      doing: '我现在在做什么',
      goodAt: '我擅长的事情',
      doing1: '开拓眼界，悉心观察，广度链接',
      doing2: '开源自我， Build in Public',
      doing4: '写点文字，敲点代码，做点计划',
      goodAt1: '收集数据，整理规律，分享洞察',
      goodAt2: '持续学习，保持思考，快速起步',
      goodAt3: '观察生活，观察世界，发掘创意'
    },
    skills: {
      frontend: '前端开发',
      ai: 'AI & 机器学习',
      product: '产品设计',
      startup: '创业思考',
      frontendDesc: 'Vue3, React, TypeScript',
      aiDesc: 'Pytorch, CV, LLM',
      productDesc: '用户体验, 产品思维',
      startupDesc: '商业模式, 市场分析'
    },
    footer: {
      runtime: '网站正常运行:'
    },
    theme: {
      switchToLight: '切换到亮色主题',
      switchToDark: '切换到暗色主题'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      knowledge: 'Knowledge',
      skills: 'Skills & Life',
      contact: 'Contact'
    },
    hero: {
      name: "I'm Chen Bihui",
      desc1: 'A strategically driven, systematic thinking, highly pragmatic opportunist.',
      desc2: 'An AI-native young person who loves exploring unknown fields, collecting and organizing useful knowledge and sharing it. Continuously discovering and implementing problems that can be accelerated by AI, hoping to become an excellent agent engineer.',
      affiliation: 'Nankai University 2025 PhD in Optoelectronic Information Engineering',
      contactMe: 'Contact Me',
      quote: 'Many things I learned are just dots. I may not know how to use them now, nor can I foresee whether they will be useful. But when I feel these dots are useful one day, I will connect them into a line.'
    },
    sections: {
      about: 'About Me',
      knowledge: 'Knowledge Space',
      skills: 'Skills & Life',
      contact: 'Contact'
    },
    knowledge: {
      description: 'This space brings together useful and interesting resources I encountered during my learning process.',
      note: 'Content will be updated regularly, there might be surprises~',
      items: {
        ai: { title: 'Understand AI', description: 'Records the AI industry insights, opinions and practical knowledge I collected' },
        work: { title: 'Know Work', description: 'Records the work methods and thinking I personally agree with' },
        life: { title: 'Live Life', description: 'Records some events in life that I want to share with everyone' },
        psychology: { title: 'Understand Psychology', description: 'Records content related to psychology and mindset' },
        coding: { title: 'Talk Coding', description: 'About principles, standards, and methods in programming' },
        optics: { title: 'Learn Optics', description: 'Records my student career and some resources left in this process' }
      }
    },
    about: {
      title: 'About Me',
      selfView: 'Me in My Eyes',
      card1: 'Love dreaming, emotionally sensitive, thoughtful, widely read',
      card2: 'Love everything that touches the heart',
      card3: 'Do something valuable and influential',
      card4: 'Treat AI as an "operating system"',
      doing: 'What I\'m Doing Now',
      goodAt: 'What I\'m Good At',
      doing1: 'Expand horizons, observe carefully, connect broadly',
      doing2: 'Open source myself, Build in Public',
      doing4: 'Write some words, code some code, make some plans',
      goodAt1: 'Collect data, organize patterns, share insights',
      goodAt2: 'Keep learning, keep thinking, start quickly',
      goodAt3: 'Observe life, observe the world, discover creativity'
    },
    skills: {
      frontend: 'Frontend Development',
      ai: 'AI & Machine Learning',
      product: 'Product Design',
      startup: 'Startup Thinking',
      frontendDesc: 'Vue3, React, TypeScript',
      aiDesc: 'Pytorch, CV, LLM',
      productDesc: 'User Experience, Product Thinking',
      startupDesc: 'Business Model, Market Analysis'
    },
    contact: {
      title: 'Contact',
      description: 'Looking forward to communicating with you and doing something interesting together',
      wechat: 'WeChat QR Code',
      items: {
        wechat: { title: 'WeChat' },
        email: { title: 'Email' },
        github: { title: 'GitHub' },
        website: { title: 'Personal Website' }
      }
    },
    footer: {
      runtime: 'Website Running:'
    },
    theme: {
      switchToLight: 'Switch to Light Theme',
      switchToDark: 'Switch to Dark Theme'
    }
  }
}

// 获取当前语言的翻译
const t = (key) => {
  const lang = isEnglish.value ? 'en' : 'zh'
  const keys = key.split('.')
  let value = translations[lang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value || key
}

// 语言切换函数
const toggleLanguage = () => {
  isEnglish.value = !isEnglish.value
  localStorage.setItem('language', isEnglish.value ? 'en' : 'zh')
}

// 移动端菜单控制
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleMobileNavClick = (sectionId) => {
  scrollTo(sectionId)
  closeMobileMenu()
}
const runtime = ref({
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

// 网站开始运行时间：2025年9月1日 00:00:00
const startTime = new Date('2025-09-01T00:00:00').getTime()
let runtimeInterval = null

const updateRuntime = () => {
  const now = Date.now()
  const diff = now - startTime
  
  if (diff < 0) {
    // 如果当前时间早于开始时间，显示0
    runtime.value = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    return
  }
  
  // 计算总秒数
  const totalSeconds = Math.floor(diff / 1000)
  const seconds = totalSeconds % 60
  const totalMinutes = Math.floor(totalSeconds / 60)
  const minutes = totalMinutes % 60
  const totalHours = Math.floor(totalMinutes / 60)
  const hours = totalHours % 24
  const totalDays = Math.floor(totalHours / 24)
  
  // 计算年月日（从开始日期开始计算）
  const startDate = new Date('2025-09-01T00:00:00')
  const currentDate = new Date(now)
  
  let years = currentDate.getFullYear() - startDate.getFullYear()
  let months = currentDate.getMonth() - startDate.getMonth()
  let days = currentDate.getDate() - startDate.getDate()
  
  // 调整月份和天数
  if (days < 0) {
    months--
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
    days += lastMonth.getDate()
  }
  
  if (months < 0) {
    years--
    months += 12
  }
  
  runtime.value = {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  }
}

const knowledgeItemsBase = [
  {
    icon: '🧠',
    key: 'ai',
    color: 'blue',
    link: 'https://ai.feishu.cn/wiki/EpS3wxM5ei7o0jkGPbicbxnSnBh'
  },
  {
    icon: '💼',
    key: 'work',
    color: 'purple',
    link: 'https://ai.feishu.cn/docx/H9NKdV5hOoFJz6x3sSDcdRwznod?from=from_copylink'
  },
  {
    icon: '❤️',
    key: 'life',
    color: 'orange',
    link: 'https://ai.feishu.cn/wiki/R5a6wZtDjiDKgak5X0bcd9XBnVb'
  },
  {
    icon: '⚡',
    key: 'psychology',
    color: 'yellow',
    link: 'https://ai.feishu.cn/wiki/JY80wysmxiwPxSkGnl5cC8vGnYd'
  },
  {
    icon: '< >',
    key: 'coding',
    color: 'purple',
    link: 'https://ai.feishu.cn/wiki/ESVnwVDNBiF9nmkkZcecLj07n8g'
  },
  {
    icon: '🎓',
    key: 'optics',
    color: 'red',
    link: 'https://ai.feishu.cn/wiki/YnxewONkAiaLalkfdS6cwiAznfh'
  }
]

const knowledgeItems = computed(() => {
  return knowledgeItemsBase.map(item => ({
    ...item,
    title: t(`knowledge.items.${item.key}.title`),
    description: t(`knowledge.items.${item.key}.description`)
  }))
})

const contactItemsBase = [
  {
    icon: '💬',
    key: 'wechat',
    detail: 'buzhihuo2333333',
    colorClass: 'green'
  },
  {
    icon: '✉️',
    key: 'email',
    detail: 'chenbihui@mail.nankai.edu.cn',
    colorClass: 'purple'
  },
  {
    icon: '🐙',
    key: 'github',
    detail: 'TiredAce',
    colorClass: 'grey',
    link: 'https://github.com/TiredAce'
  },
  {
    icon: '🌐',
    key: 'website',
    detail: 'chen.blog',
    colorClass: 'orange',
    link: 'https://tired-ace-github-1o4vy2it7-chens-projects-33c6e8ff.vercel.app/'
  }
]

const contactItems = computed(() => {
  return contactItemsBase.map(item => ({
    ...item,
    title: t(`contact.items.${item.key}.title`)
  }))
})

let isScrolling = false
let scrollTimeout = null
let lastScrollTop = 0
let ticking = false

const handleScroll = () => {
  if (isScrolling || ticking) return
  
  ticking = true
  requestAnimationFrame(() => {
    const currentScrollTop = window.scrollY
    lastScrollTop = currentScrollTop
    
    isScrolled.value = currentScrollTop > 50
    
    const sections = ['home', 'about', 'knowledge', 'skills', 'contact']
    const scrollPosition = currentScrollTop + 150
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i])
      if (section && section.offsetTop <= scrollPosition) {
        activeSection.value = sections[i]
        break
      }
    }
    
    ticking = false
  })
}

const scrollTo = (sectionId, event) => {
  if (event) {
    event.preventDefault()
  }
  
  // 立即更新高亮状态
  activeSection.value = sectionId
  
  const element = document.getElementById(sectionId)
  if (element && !isScrolling) {
    isScrolling = true
    
    // 使用更高效的滚动方式
    const targetPosition = element.offsetTop - 20// 减去导航栏高度和间距
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = Math.min(Math.abs(distance) * 0.5, 800) // 根据距离调整时长
    let start = null
    
    const animateScroll = (currentTime) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      
      // 使用更平滑的缓动函数
      const ease = 1 - Math.pow(1 - progress, 3)
      
      window.scrollTo({
        top: startPosition + distance * ease,
        behavior: 'auto' // 使用 auto 避免与 CSS 冲突
      })
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        isScrolling = false
        // 确保最终位置准确
        window.scrollTo({ top: targetPosition, behavior: 'auto' })
      }
    }
    
    requestAnimationFrame(animateScroll)
  }
}

// 主题切换函数
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.classList.toggle('light-theme', !isDarkTheme.value)
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light')
}

onMounted(() => {
  // 从localStorage读取主题设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDarkTheme.value = false
    document.documentElement.classList.add('light-theme')
  } else {
    isDarkTheme.value = true
    document.documentElement.classList.remove('light-theme')
  }
  
  // 从localStorage读取语言设置
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage === 'en') {
    isEnglish.value = true
  } else {
    isEnglish.value = false
  }
  
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  // 初始化运行时间
  updateRuntime()
  // 每秒更新一次
  runtimeInterval = setInterval(updateRuntime, 1000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  if (runtimeInterval) {
    clearInterval(runtimeInterval)
  }
  // 清理移动端菜单状态
  document.body.style.overflow = ''
})
</script>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
  background: transparent;
  overflow-x: hidden;
  overflow-y: visible;
  height: auto;
}

/* 导航栏 */
.navbar {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: rgba(10, 14, 39, 0.9);
  backdrop-filter: blur(20px);
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  width: fit-content;
  min-width: 1000px;
  padding: 0;
  will-change: background, box-shadow;
  backface-visibility: hidden;
}

.navbar.scrolled {
  background: rgba(10, 14, 39, 0.95);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.nav-container {
  padding: 0.8rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-primary);
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;
  display: inline-block;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px) rotate(-2deg); }
  75% { transform: translateX(3px) rotate(2deg); }
}

.nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-primary);
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

/* 右下角浮动菜单按钮 */
.floating-menu-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: none;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 1997;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.floating-menu-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.5), 0 12px 40px rgba(0, 0, 0, 0.4);
}

.floating-menu-btn:active {
  transform: scale(0.95);
}

.floating-menu-btn.active {
  background: rgba(236, 72, 153, 0.9);
  box-shadow: 0 4px 20px rgba(236, 72, 153, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 20px;
  cursor: pointer;
}

.hamburger span {
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* 移动端遮罩层 */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1998;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* 移动端左侧菜单 */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 85vw;
  background: var(--bg-secondary);
  backdrop-filter: blur(20px);
  z-index: 1999;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mobile-menu-close {
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.mobile-menu-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.mobile-menu-nav {
  flex: 1;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
}

.mobile-menu-nav a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.mobile-menu-nav a:hover {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
}

.mobile-menu-nav a.active {
  background: rgba(102, 126, 234, 0.1);
  color: var(--text-primary);
  border-left-color: var(--gradient-primary);
}

.nav-icon {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.mobile-menu-actions {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-action-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.mobile-action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.mobile-action-btn span:first-child {
  font-size: 1.2rem;
  width: 24px;
  text-align: center;
}

.icon-btn {
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.icon-btn:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: scale(1.1);
}

.theme-toggle {
  font-size: 1.3rem;
}

/* 通用区块样式 */
.section {
  min-height: auto;
  padding: 3rem 2rem 2rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden !important;
  height: auto;
  z-index: 1;
  background: transparent;
}

.section-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.section-icon {
  font-size: 3rem;
  display: inline-block;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: var(--gradient-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  transition: transform 0.3s ease;
}

.section-header:hover .section-title {
  animation: titleFloat 2s ease-in-out infinite;
}

@keyframes titleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.gradient-text-blue {
  background: var(--gradient-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-green {
  background: var(--gradient-green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;
}

.section-note {
  color: var(--text-secondary);
  font-style: italic;
  text-align: center;
  font-size: 0.9rem;
}

/* 首页部分 */
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 2rem 3rem;
  overflow: visible !important;
  height: auto;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  width: 100%;
  margin-bottom: 2rem;
}

.hero-left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 -15px 40px rgba(102, 126, 234, 0.5),
    0 -8px 25px rgba(102, 126, 234, 0.7),
    0 -3px 10px rgba(118, 75, 162, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.profile-image::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 30px;
  background: radial-gradient(ellipse, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.5) 30%, transparent 70%);
  border-radius: 50%;
  filter: blur(15px);
  z-index: -1;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.8;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translateX(-50%) scale(1.1);
  }
}

.profile-photo:hover {
  transform: scale(1.05);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.3),
    0 -15px 40px rgba(102, 126, 234, 0.5),
    0 -8px 20px rgba(102, 126, 234, 0.7);
  border-color: rgba(102, 126, 234, 0.5);
}

.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.hero-affiliation {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  color: var(--text-secondary);
}

.affiliation-icon {
  color: var(--text-primary);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}

.btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: var(--shadow);
}

.btn:hover span {
  animation: textShake 0.5s ease-in-out;
}

.btn-github {
  background: #24292e;
  color: var(--text-primary);
  transition: background 0.3s ease, color 0.3s ease;
}

.btn-contact {
  background: var(--gradient-purple);
  color: var(--text-primary);
}

.quote-section {
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  background: var(--bg-card);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.quote-en {
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.quote-cn {
  color: var(--text-secondary);
  line-height: 1.8;
}

/* 关于我部分 */
.about-section {
  padding-top: 5rem;
}

.about-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.about-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.about-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.about-card:hover::before {
  left: 100%;
}

.about-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: var(--shadow);
  border-color: rgba(102, 126, 234, 0.5);
}

.about-card:hover p {
  animation: textShake 0.5s ease-in-out;
}

@keyframes textShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1rem;
}

.card-icon.pink {
  background: rgba(236, 72, 153, 0.2);
}

.card-icon.blue {
  background: rgba(59, 130, 246, 0.2);
}

.card-icon.green {
  background: rgba(34, 197, 94, 0.2);
}

.card-icon.purple {
  background: rgba(139, 92, 246, 0.2);
}

.doing-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.doing-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.doing-emoji {
  font-size: 2rem;
}

.doing-header h3 {
  font-size: 1.8rem;
  font-weight: bold;
}

.doing-list {
  list-style: none;
}

.doing-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--bg-card);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}

.doing-list li:hover {
  transform: translateX(10px) scale(1.02);
  border-color: rgba(102, 126, 234, 0.5);
}

.doing-list li:hover span:last-child {
  animation: textShake 0.5s ease-in-out;
}

.list-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.list-number.green {
  background: rgba(34, 197, 94, 0.3);
  color: #38ef7d;
}

.list-number.orange {
  background: rgba(249, 115, 22, 0.3);
  color: #fb923c;
}

/* 知识空间部分 */
.knowledge-section {
  padding-top: 5rem;
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.knowledge-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: block;
}

.knowledge-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.knowledge-card:hover::after {
  width: 300px;
  height: 300px;
}

.knowledge-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: var(--shadow);
  border-color: rgba(102, 126, 234, 0.5);
}

.knowledge-card:hover .knowledge-title {
  animation: bounce 0.6s ease-in-out;
}

.knowledge-card:hover .knowledge-icon {
  animation: float 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.knowledge-icon {
  width: 80px;
  height: 80px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 1.5rem;
}

.knowledge-icon.blue {
  background: rgba(59, 130, 246, 0.2);
}

.knowledge-icon.purple {
  background: rgba(139, 92, 246, 0.2);
}

.knowledge-icon.orange {
  background: rgba(249, 115, 22, 0.2);
}

.knowledge-icon.green {
  background: rgba(34, 197, 94, 0.2);
}

.knowledge-icon.yellow {
  background: rgba(234, 179, 8, 0.2);
}

.knowledge-icon.red {
  background: rgba(239, 68, 68, 0.2);
}

.knowledge-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.knowledge-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 技能部分 */
.skills-section {
  padding-top: 5rem;
}

.skills-content {
  margin-top: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-item {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
  position: relative;
}

.skill-item::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 15px;
  padding: 2px;
  background: linear-gradient(45deg, #667eea, #764ba2, #8b5cf6);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-item:hover::before {
  opacity: 1;
}

.skill-item:hover {
  transform: translateY(-5px) rotate(1deg);
  border-color: rgba(102, 126, 234, 0.5);
}

.skill-item:hover .skill-icon {
  animation: spin 1s ease-in-out;
}

.skill-item:hover h4 {
  animation: textShake 0.5s ease-in-out;
}

@keyframes spin {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.skill-item h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.skill-item p {
  color: var(--text-secondary);
}

/* 联系方式部分 */
.contact-section {
  padding-top: 5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.contact-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  display: block;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(transparent, rgba(102, 126, 234, 0.3), transparent 30%);
  animation: rotate 3s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-card:hover::before {
  opacity: 1;
}

@keyframes rotate {
  100% { transform: rotate(360deg); }
}

.contact-card:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: var(--shadow);
  border-color: rgba(102, 126, 234, 0.5);
}

.contact-card:hover .contact-icon {
  animation: pulse 0.6s ease-in-out;
}

.contact-card:hover .contact-title {
  animation: textShake 0.5s ease-in-out;
}

/* 二维码容器 */
.qr-code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 0rem 0;
}

.qr-code-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}

.qr-code-wrapper:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  border-color: rgba(102, 126, 234, 0.5);
}

.qr-code-image {
  width: 200px;
  height: 200px;
  border-radius: 15px;
  object-fit: contain;
  background: #ffffff;
  padding: 10px;
  transition: transform 0.3s ease;
}

.qr-code-wrapper:hover .qr-code-image {
  transform: scale(1.15);
}

.qr-code-text {
  color: var(--text-secondary);
  font-size: 1rem;
  margin: 0;
  text-align: center;
}

/* 页脚 */
.footer {
  padding: 1rem 1rem;
  text-align: center;
  /* border-top: 1px solid rgba(255, 255, 255, 0.1); */
  background: var(--bg-primary);
  position: relative;
  bottom: 1rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.runtime-display {
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.8rem;
  padding: 1.8rem 2rem;
  background: var(--bg-card);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.runtime-label {
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 600;
  margin-right: 1.2rem;
  letter-spacing: 0.5px;
}

.runtime-value {
  font-size: 2.2rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
  filter: drop-shadow(0 2px 4px rgba(102, 126, 234, 0.2));
  transition: transform 0.3s ease;
}

.runtime-value:hover {
  transform: scale(1.1);
}

.runtime-unit {
  font-size: 1.1rem;
  color: var(--text-secondary);
  opacity: 0.9;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-left: 0.2rem;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1rem;
}

.contact-icon.green {
  background: rgba(34, 197, 94, 0.2);
}

.contact-icon.blue {
  background: rgba(59, 130, 246, 0.2);
}

.contact-icon.purple {
  background: rgba(139, 92, 246, 0.2);
}

.contact-icon.grey {
  background: rgba(107, 114, 128, 0.2);
}

.contact-icon.red {
  background: rgba(239, 68, 68, 0.2);
}

.contact-icon.orange {
  background: rgba(249, 115, 22, 0.2);
}

.contact-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.contact-detail {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.contact-guidelines {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.guideline-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.guideline-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.guideline-icon.blue {
  background: rgba(59, 130, 246, 0.2);
}

.guideline-icon.pink {
  background: rgba(236, 72, 153, 0.2);
}

.guideline-card h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.guideline-card p {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  line-height: 1.6;
}


/* 背景装饰 */
.bg-decoration {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: var(--bg-primary);
  pointer-events: none;
  animation: bgPulse 8s ease-in-out infinite;
  will-change: opacity;
  backface-visibility: hidden;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  transition: background 0.3s ease;
}

.bg-decoration::before,
.bg-decoration::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: 
    radial-gradient(4px 4px at 10% 20%, rgba(102, 126, 234, 1), transparent),
    radial-gradient(4px 4px at 30% 40%, rgba(139, 92, 246, 1), transparent),
    radial-gradient(3px 3px at 50% 60%, rgba(255, 255, 255, 0.9), transparent),
    radial-gradient(4px 4px at 70% 30%, rgba(102, 126, 234, 0.9), transparent),
    radial-gradient(3px 3px at 90% 80%, rgba(118, 75, 162, 0.8), transparent),
    radial-gradient(4px 4px at 20% 70%, rgba(139, 92, 246, 0.9), transparent),
    radial-gradient(3px 3px at 60% 10%, rgba(102, 126, 234, 0.8), transparent),
    radial-gradient(4px 4px at 80% 50%, rgba(118, 75, 162, 1), transparent),
    radial-gradient(3px 3px at 40% 90%, rgba(139, 92, 246, 0.8), transparent),
    radial-gradient(4px 4px at 15% 50%, rgba(102, 126, 234, 0.9), transparent),
    radial-gradient(3px 3px at 55% 25%, rgba(118, 75, 162, 0.8), transparent),
    radial-gradient(4px 4px at 75% 65%, rgba(139, 92, 246, 1), transparent),
    radial-gradient(3px 3px at 35% 85%, rgba(102, 126, 234, 0.8), transparent),
    radial-gradient(4px 4px at 95% 15%, rgba(118, 75, 162, 0.9), transparent),
    radial-gradient(3px 3px at 5% 45%, rgba(102, 126, 234, 0.8), transparent),
    radial-gradient(4px 4px at 25% 75%, rgba(139, 92, 246, 0.9), transparent),
    radial-gradient(3px 3px at 45% 5%, rgba(118, 75, 162, 0.8), transparent),
    radial-gradient(4px 4px at 65% 95%, rgba(102, 126, 234, 1), transparent),
    radial-gradient(3px 3px at 85% 55%, rgba(139, 92, 246, 0.8), transparent);
  background-size: 200% 200%;
  background-repeat: no-repeat;
  animation: particleMove 20s linear infinite;
  opacity: 1;
  z-index: -1;
}

.bg-decoration::after {
  background-image: 
    radial-gradient(3px 3px at 25% 15%, rgba(102, 126, 234, 0.9), transparent),
    radial-gradient(4px 4px at 45% 55%, rgba(139, 92, 246, 1), transparent),
    radial-gradient(3px 3px at 65% 25%, rgba(118, 75, 162, 0.8), transparent),
    radial-gradient(4px 4px at 85% 75%, rgba(102, 126, 234, 0.9), transparent),
    radial-gradient(3px 3px at 35% 85%, rgba(139, 92, 246, 0.8), transparent),
    radial-gradient(4px 4px at 55% 35%, rgba(118, 75, 162, 1), transparent),
    radial-gradient(3px 3px at 75% 65%, rgba(102, 126, 234, 0.8), transparent),
    radial-gradient(4px 4px at 95% 45%, rgba(139, 92, 246, 0.9), transparent),
    radial-gradient(3px 3px at 5% 35%, rgba(118, 75, 162, 0.8), transparent),
    radial-gradient(4px 4px at 65% 75%, rgba(102, 126, 234, 1), transparent),
    radial-gradient(3px 3px at 12% 65%, rgba(139, 92, 246, 0.8), transparent),
    radial-gradient(4px 4px at 32% 25%, rgba(102, 126, 234, 0.9), transparent),
    radial-gradient(3px 3px at 52% 85%, rgba(118, 75, 162, 0.8), transparent),
    radial-gradient(4px 4px at 72% 45%, rgba(139, 92, 246, 1), transparent),
    radial-gradient(3px 3px at 92% 15%, rgba(102, 126, 234, 0.8), transparent);
  animation: particleMove 25s linear infinite reverse;
  opacity: 0.9;
  z-index: -1;
}

@keyframes particleMove {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

@keyframes bgPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* 各section动态背景 */
.section-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.6;
}

/* 首页 - 流动的渐变波浪 */
.section-bg-home {
  background: 
    radial-gradient(ellipse 600px 400px at 20% 30%, rgba(102, 126, 234, 0.35) 0%, transparent 60%),
    radial-gradient(ellipse 500px 350px at 80% 70%, rgba(139, 92, 246, 0.35) 0%, transparent 60%),
    radial-gradient(ellipse 400px 300px at 50% 50%, rgba(118, 75, 162, 0.25) 0%, transparent 70%);
  background-size: 200% 200%;
  animation: waveFlow 18s ease-in-out infinite;
}

@keyframes waveFlow {
  0%, 100% {
    background-position: 0% 50%, 100% 50%, 50% 50%;
  }
  50% {
    background-position: 100% 50%, 0% 50%, 50% 50%;
  }
}

/* 关于我 - 旋转的圆形粒子 */
.section-bg-about {
  background: 
    radial-gradient(circle 350px at 25% 35%, rgba(118, 75, 162, 0.35) 0%, transparent 55%),
    radial-gradient(circle 320px at 75% 65%, rgba(102, 126, 234, 0.35) 0%, transparent 55%),
    radial-gradient(circle 280px at 50% 15%, rgba(139, 92, 246, 0.3) 0%, transparent 55%),
    radial-gradient(circle 240px at 15% 85%, rgba(118, 75, 162, 0.3) 0%, transparent 55%),
    radial-gradient(circle 200px at 85% 25%, rgba(102, 126, 234, 0.25) 0%, transparent 55%);
  background-size: 120% 120%;
  animation: rotateParticles 25s linear infinite;
}

@keyframes rotateParticles {
  0% {
    transform: rotate(0deg) scale(1);
    background-position: 25% 35%, 75% 65%, 50% 15%, 15% 85%, 85% 25%;
  }
  50% {
    transform: rotate(180deg) scale(1.15);
    background-position: 75% 65%, 25% 35%, 15% 85%, 85% 25%, 50% 15%;
  }
  100% {
    transform: rotate(360deg) scale(1);
    background-position: 25% 35%, 75% 65%, 50% 15%, 15% 85%, 85% 25%;
  }
}

/* 知识空间 - 闪烁的星星效果 */
.section-bg-knowledge {
  background: 
    radial-gradient(5px 5px at 15% 25%, rgba(139, 92, 246, 0.9) 0%, transparent 60%),
    radial-gradient(4px 4px at 55% 65%, rgba(102, 126, 234, 0.9) 0%, transparent 60%),
    radial-gradient(6px 6px at 45% 45%, rgba(118, 75, 162, 0.8) 0%, transparent 60%),
    radial-gradient(4px 4px at 75% 15%, rgba(139, 92, 246, 0.85) 0%, transparent 60%),
    radial-gradient(5px 5px at 85% 55%, rgba(102, 126, 234, 0.9) 0%, transparent 60%),
    radial-gradient(4px 4px at 5% 75%, rgba(118, 75, 162, 0.85) 0%, transparent 60%),
    radial-gradient(5px 5px at 35% 15%, rgba(139, 92, 246, 0.8) 0%, transparent 60%),
    radial-gradient(4px 4px at 65% 85%, rgba(102, 126, 234, 0.9) 0%, transparent 60%),
    radial-gradient(6px 6px at 25% 60%, rgba(118, 75, 162, 0.85) 0%, transparent 60%),
    radial-gradient(4px 4px at 95% 40%, rgba(139, 92, 246, 0.8) 0%, transparent 60%);
  background-size: 150% 150%;
  animation: twinkle 4s ease-in-out infinite, starMove 25s linear infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes starMove {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

/* 技能与生活 - 流动的线条 */
.section-bg-skills {
  background: 
    linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.15) 50%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(139, 92, 246, 0.15) 50%, transparent 70%),
    linear-gradient(135deg, transparent 40%, rgba(118, 75, 162, 0.12) 50%, transparent 60%),
    linear-gradient(90deg, transparent 20%, rgba(102, 126, 234, 0.1) 50%, transparent 80%),
    linear-gradient(0deg, transparent 25%, rgba(139, 92, 246, 0.12) 50%, transparent 75%);
  background-size: 300% 300%, 250% 250%, 200% 200%, 350% 350%, 280% 280%;
  animation: lineFlow 20s ease-in-out infinite;
}

@keyframes lineFlow {
  0% { 
    background-position: 0% 0%, 100% 100%, 50% 50%, 0% 100%, 100% 0%; 
  }
  50% { 
    background-position: 100% 100%, 0% 0%, 50% 50%, 100% 0%, 0% 100%; 
  }
  100% { 
    background-position: 0% 0%, 100% 100%, 50% 50%, 0% 100%, 100% 0%; 
  }
}

/* 联系方式 - 脉冲的圆形波纹 */
.section-bg-contact {
  background: 
    radial-gradient(circle 450px at 50% 50%, rgba(118, 75, 162, 0.3) 0%, transparent 55%),
    radial-gradient(circle 380px at 25% 75%, rgba(102, 126, 234, 0.3) 0%, transparent 55%),
    radial-gradient(circle 380px at 75% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 55%),
    radial-gradient(circle 320px at 50% 50%, rgba(118, 75, 162, 0.2) 0%, transparent 60%);
  animation: pulseRipple 5s ease-in-out infinite;
}

@keyframes pulseRipple {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.75;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar {
    top: 0;
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .nav-container {
    padding: 0.8rem 1rem;
    gap: 1rem;
  }

  .nav-logo {
    font-size: 1rem;
  }

  .nav-links {
    display: none;
  }

  .nav-actions {
    gap: 0.5rem;
  }

  .icon-btn {
    display: none;
  }

  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-cards {
    grid-template-columns: 1fr;
  }

  .doing-section {
    grid-template-columns: 1fr;
  }

  .knowledge-grid {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-guidelines {
    grid-template-columns: 1fr;
  }
}
</style>

