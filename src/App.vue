<template>
  <div class="app">
    <AuroraCanvas />
    <ScrollProgress />

    <!-- 加载动画 -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loading-content">
        <div class="loading-logo">
          <div class="logo-brain">🧠</div>
          <div class="logo-ring"></div>
          <div class="logo-ring ring-2"></div>
          <div class="logo-ring ring-3"></div>
        </div>
        <div class="loading-text">
          <span class="loading-text-char" v-for="(char, index) in loadingText" :key="index" :style="{ animationDelay: index * 0.1 + 's' }">
            {{ char }}
          </span>
        </div>
        <div class="loading-progress">
          <div class="progress-bar"></div>
        </div>
        <div class="loading-particles">
          <div class="particle" v-for="i in 10" :key="i" :style="getParticleStyle(i)"></div>
        </div>
      </div>
    </div>
    
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
            <HeroOrbit />
            <img src="/main_photo.png" alt="个人照片" class="profile-photo" />
          </div>
        </div>
        <div class="hero-right">
          <h1 class="hero-title">
            <span class="section-icon">✨</span> 
            <span class="gradient-text-green">Hi! </span>
            <span class="gradient-text-blue"> {{ t('hero.name') }}</span>
          </h1>
          <p class="hero-description-1">
            {{ t('hero.desc1') }}
          </p>
          <p class="hero-description">
            {{ t('hero.desc2') }}
          </p>
          <div class="hero-affiliation">
            <span class="affiliation-icon">📍</span>
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
      <div class="about-cards" ref="aboutCardsRef">
        <div class="about-card about-card-left">
          <div class="card-icon pink">
            💤</div>
          <p>{{ t('about.card1') }}</p>
        </div>
        <div class="about-card about-card-right">
          <div class="card-icon blue">
            💭</div>
          <p>{{ t('about.card2') }}</p>
        </div>
        <div class="about-card about-card-left">
          <div class="card-icon green">🎯</div>
          <p>{{ t('about.card3') }}</p>
        </div>
        <div class="about-card about-card-right">
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
          <ul class="doing-list" ref="doingLeftListRef">
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
          <ul class="doing-list" ref="doingRightListRef">
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
        这里是我的长期知识地图：从博士科研、光电专业、机器人视觉，到 AI 工程、认知成长与生活财务。
      </p>
      <p class="section-note">
        每个主题都按「领域 - 方法 - 产出」持续沉淀，未来可以继续接入笔记链接与进度状态。
      </p>
      <div class="knowledge-grid knowledge-map" ref="knowledgeGridRef">
        <article
          v-for="item in knowledgeItems"
          :key="item.key"
          class="knowledge-card"
          :class="`knowledge-card-${item.accent}`"
        >
          <div class="knowledge-card-orbit"></div>
          <div class="knowledge-card-grid"></div>
          <div class="knowledge-card-top">
            <div class="knowledge-code-block">
              <div class="knowledge-code-label">{{ isEnglish ? 'Node' : '节点' }}</div>
              <div class="knowledge-code">{{ item.code }}</div>
            </div>
            <div class="knowledge-icon">
              {{ item.icon }}
            </div>
          </div>
          <div class="knowledge-heading">
            <p class="knowledge-kicker">{{ item.titleEn }}</p>
            <h3 class="knowledge-title">{{ item.title }}</h3>
          </div>
          <div class="knowledge-meta">
            <span class="knowledge-meta-chip">{{ item.groups.length }} {{ isEnglish ? 'clusters' : '组' }}</span>
            <span class="knowledge-meta-chip">{{ getTopicCount(item) }} {{ isEnglish ? 'topics' : '主题' }}</span>
          </div>
          <p class="knowledge-desc">{{ item.summary }}</p>
          <div class="knowledge-groups">
            <section
              v-for="group in item.groups"
              :key="group.name"
              class="knowledge-group"
            >
              <div class="knowledge-group-head">
                <h4>{{ group.name }}</h4>
                <span class="knowledge-group-count">{{ group.topics.length }}</span>
              </div>
              <div class="knowledge-topics">
                <template
                  v-for="topic in group.topics"
                >
                  <a
                    v-if="topic.link"
                    :key="topic.title"
                    :href="topic.link"
                    class="knowledge-topic knowledge-topic-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="knowledge-topic-status knowledge-topic-status-live" aria-hidden="true"></span>
                    {{ topic.title }}
                  </a>
                  <span
                    v-else
                    :key="topic.title"
                    class="knowledge-topic"
                  >
                    <span class="knowledge-topic-status knowledge-topic-status-missing" aria-hidden="true"></span>
                    {{ topic.title }}
                  </span>
                </template>
              </div>
            </section>
          </div>
        </article>
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
      <div class="qr-code-container" ref="qrCodeContainerRef">
        <div class="qr-code-wrapper">
          <div class="qr-code-head">
            <span class="qr-code-channel">{{ isEnglish ? 'WeChat Portal' : '微信通道' }}</span>
            <span class="qr-code-status">{{ isEnglish ? 'Scan Ready' : '可扫码' }}</span>
          </div>
          <div class="qr-code-core">
            <div class="qr-code-rings"></div>
            <img src="/wechat-qr.png" alt="微信二维码" class="qr-code-image" />
          </div>
          <div class="qr-code-foot">
            <p class="qr-code-text">{{ t('contact.wechat') }}</p>
            <span class="qr-code-hint">{{ isEnglish ? 'Hover to amplify' : '悬停可放大' }}</span>
          </div>
        </div>
      </div>
      <div class="contact-grid" ref="contactGridRef">
        <template v-for="(item, index) in contactItems" :key="index">
          <a v-if="item.link" :href="item.link" target="_blank" class="contact-card">
            <div class="contact-card-noise"></div>
            <div class="contact-card-head">
              <span class="contact-channel">{{ getContactChannel(item) }}</span>
              <span class="contact-status">{{ isEnglish ? 'Active' : '在线' }}</span>
            </div>
            <div class="contact-icon" :class="item.colorClass">
              {{ item.icon }}
            </div>
            <h3 class="contact-title">{{ item.title }}</h3>
            <p class="contact-detail">{{ item.detail }}</p>
            <div class="contact-card-foot">
              <span class="contact-action">{{ isEnglish ? 'Open link' : '打开链接' }}</span>
              <span class="contact-action-arrow">↗</span>
            </div>
          </a>
          <div
            v-else
            class="contact-card"
            :class="{ 'clickable': item.key === 'wechat' || item.key === 'email' }"
            @click="handleContactClick(item, $event)"
          >
            <div class="contact-card-noise"></div>
            <div class="contact-card-head">
              <span class="contact-channel">{{ getContactChannel(item) }}</span>
              <span class="contact-status">{{ isEnglish ? 'Copy' : '可复制' }}</span>
            </div>
            <div class="contact-icon" :class="item.colorClass">
              {{ item.icon }}
            </div>
            <h3 class="contact-title">{{ item.title }}</h3>
            <p class="contact-detail">{{ item.detail }}</p>
            <div class="contact-card-foot">
              <span class="contact-action">{{ isEnglish ? 'Tap to copy' : '点击复制' }}</span>
              <span class="contact-action-arrow">+</span>
            </div>
          </div>
        </template>
      </div>
      <!-- 复制提示消息（跟随鼠标位置的小气泡） -->
      <transition name="fade">
        <div
          v-if="copyMessage"
          class="copy-message"
          :style="copyMessageStyle"
        >
          {{ copyMessage }}
        </div>
      </transition>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="runtime-display">
          <div class="runtime-shell-glow"></div>
          <div class="runtime-shell-grid"></div>
          <div class="runtime-head">
            <div class="runtime-window-controls" aria-hidden="true">
              <span class="runtime-control runtime-control-close"></span>
              <span class="runtime-control runtime-control-minimize"></span>
              <span class="runtime-control runtime-control-expand"></span>
            </div>
            <div class="runtime-terminal-title">
              <span class="runtime-terminal-app">Terminal</span>
              <span class="runtime-terminal-path">{{ isEnglish ? 'uptime.sh' : 'uptime.sh' }}</span>
            </div>
          </div>
          <div class="runtime-divider"></div>
          <div class="runtime-command-line">
            <span class="runtime-prompt">chen@macbook ~ %</span>
            <span class="runtime-command">{{ isEnglish ? './uptime.sh --live' : './uptime.sh --live' }}</span>
            <span class="runtime-caret"></span>
          </div>
          <div class="runtime-metrics">
            <div class="runtime-output-line runtime-output-line-flip">
              <span class="runtime-output-label">{{ t('footer.runtime') }}</span>
              <div class="runtime-flipboard">
                <div
                  v-for="unit in runtimeUnits"
                  :key="unit.key"
                  class="runtime-flip-unit"
                >
                  <div
                    class="runtime-flip-card"
                    :class="{ 'is-flipping': flipStates[unit.key] }"
                  >
                    <div class="runtime-flip-static runtime-flip-static-top">
                      <span>{{ unit.display }}</span>
                    </div>
                    <div class="runtime-flip-static runtime-flip-static-bottom">
                      <span>{{ unit.display }}</span>
                    </div>
                    <div class="runtime-flip-fold runtime-flip-fold-top">
                      <span>{{ unit.previousDisplay }}</span>
                    </div>
                    <div class="runtime-flip-fold runtime-flip-fold-bottom">
                      <span>{{ unit.display }}</span>
                    </div>
                  </div>
                  <span class="runtime-flip-caption">{{ unit.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- 背景装饰 -->
    <div class="bg-decoration"></div>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { translations } from './data/translations'
import { contactItemsBase, knowledgeItemsBase } from './data/content'
import AuroraCanvas from './components/AuroraCanvas.vue'
import HeroOrbit from './components/HeroOrbit.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import { useRevealAnimations } from './composables/useRevealAnimations'
import { useRuntimeClock } from './composables/useRuntimeClock'
import { useSectionNavigation } from './composables/useSectionNavigation'

const SECTION_IDS = ['home', 'about', 'knowledge', 'contact']
const { isScrolled, activeSection, handleScroll, scrollTo } = useSectionNavigation(SECTION_IDS)
const isDarkTheme = ref(true)
const isEnglish = ref(false)
const isMobileMenuOpen = ref(false)
const isLoading = ref(true)
const loadingText = 'Loading...'
const copyMessage = ref('')
const copyMessageTimeout = ref(null)
const copyMessageStyle = ref({
  top: '0px',
  left: '0px'
})
const {
  aboutCardsRef,
  doingLeftListRef,
  doingRightListRef,
  knowledgeGridRef,
  contactGridRef,
  qrCodeContainerRef,
  setupRevealAnimations,
  cleanupRevealAnimations
} = useRevealAnimations()
const { runtime, prevRuntime, flipStates, startRuntimeClock, stopRuntimeClock } = useRuntimeClock()

// 语言翻译对象
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

const normalizeTopic = (topic) => {
  if (typeof topic === 'string') {
    return {
      title: topic,
      link: ''
    }
  }

  return {
    title: topic.title,
    link: topic.link || ''
  }
}

const knowledgeItems = computed(() => {
  return knowledgeItemsBase.map(item => ({
    ...item,
    groups: item.groups.map(group => ({
      ...group,
      topics: group.topics.map(normalizeTopic)
    }))
  }))
})

const getTopicCount = (item) => {
  return item.groups.reduce((total, group) => total + group.topics.length, 0)
}

const contactItems = computed(() => {
  return contactItemsBase.map(item => ({
    ...item,
    title: t(`contact.items.${item.key}.title`)
  }))
})

const getContactChannel = (item) => {
  const channelMap = {
    wechat: isEnglish.value ? 'Private channel' : '私域通道',
    email: isEnglish.value ? 'Formal mail' : '正式通信',
    github: isEnglish.value ? 'Code portal' : '代码门户',
    website: isEnglish.value ? 'Web node' : '站点节点'
  }

  return channelMap[item.key] || (isEnglish.value ? 'External channel' : '外部通道')
}

const formatRuntimeValue = (value) => String(Math.max(0, value)).padStart(2, '0')

const runtimeUnits = computed(() => {
  const labels = isEnglish.value
    ? {
        years: 'YR',
        months: 'MO',
        days: 'DAY',
        hours: 'HR',
        minutes: 'MIN',
        seconds: 'SEC'
      }
    : {
        years: '年',
        months: '月',
        days: '天',
        hours: '时',
        minutes: '分',
        seconds: '秒'
      }

  return [
    { key: 'years', label: labels.years },
    { key: 'months', label: labels.months },
    { key: 'days', label: labels.days },
    { key: 'hours', label: labels.hours },
    { key: 'minutes', label: labels.minutes },
    { key: 'seconds', label: labels.seconds }
  ].map((unit) => ({
    ...unit,
    display: formatRuntimeValue(runtime.value[unit.key]),
    previousDisplay: formatRuntimeValue(prevRuntime.value[unit.key])
  }))
})

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  document.documentElement.classList.toggle('light-theme', !isDarkTheme.value)
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light')
    }

// 复制到剪贴板函数
const copyToClipboard = async (text, type, event) => {
  // 根据鼠标位置设置提示位置（在光标上方一点）
  if (event) {
    const offsetY = 16
    copyMessageStyle.value = {
      top: `${event.clientY - offsetY}px`,
      left: `${event.clientX}px`
    }
  }
  try {
    await navigator.clipboard.writeText(text)
    // 显示复制成功提示
    const message = isEnglish.value 
      ? `${type === 'wechat' ? 'WeChat' : 'Email'} copied!` 
      : `${type === 'wechat' ? '微信号' : '邮箱'}已复制`
    copyMessage.value = message
    
    // 清除之前的定时器
    if (copyMessageTimeout.value) {
      clearTimeout(copyMessageTimeout.value)
    }
    
    // 1秒后隐藏提示
    copyMessageTimeout.value = setTimeout(() => {
      copyMessage.value = ''
    }, 500)
  } catch (err) {
    console.error('复制失败:', err)
    // 降级方案：使用传统方法
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      const message = isEnglish.value 
        ? `${type === 'wechat' ? 'WeChat' : 'Email'} copied!` 
        : `${type === 'wechat' ? '微信号' : '邮箱'}已复制`
      copyMessage.value = message
      if (copyMessageTimeout.value) {
        clearTimeout(copyMessageTimeout.value)
      }
      copyMessageTimeout.value = setTimeout(() => {
        copyMessage.value = ''
      }, 500)
    } catch (err) {
      console.error('降级复制方法也失败:', err)
    }
    document.body.removeChild(textArea)
  }
}

// 处理联系方式卡片点击
const handleContactClick = (item, event) => {
  // 只对微信号和邮箱执行复制操作
  if (item.key === 'wechat' || item.key === 'email') {
    copyToClipboard(item.detail, item.key, event)
  }
}
    
// 生成粒子样式（简化版，减少计算）
const getParticleStyle = (index) => {
  const angle = (index / 10) * 360
  const radius = 150
  const x = Math.cos((angle * Math.PI) / 180) * radius
  const y = Math.sin((angle * Math.PI) / 180) * radius
  const delay = index * 0.2
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    animationDelay: `${delay}s`
  }
}

onMounted(() => {
  // 加载时禁用滚动
  document.body.style.overflow = 'hidden'
  
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
  
  // 加载动画：至少显示 1.5 秒，然后淡出
  setTimeout(() => {
    isLoading.value = false
    document.body.style.overflow = ''
  }, 2000)
  
  // 加载动画：至少显示 1.5 秒，然后淡出
  setTimeout(() => {
    isLoading.value = false
    document.body.style.overflow = ''
  }, 2000)
  
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  startRuntimeClock()
  setupRevealAnimations()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  stopRuntimeClock()
  cleanupRevealAnimations()
  // 清理移动端菜单状态
  document.body.style.overflow = ''
})
</script>

<style scoped src="./styles/app.css"></style>
