<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="nav-container">
        <div class="nav-logo">
          <div class="logo-icon">🧠</div>
          <span>                 </span>
        </div>
        <div class="nav-links">
          <a href="#home" @click="scrollTo('home')" :class="{ active: activeSection === 'home' }">首页</a>
          <a href="#about" @click="scrollTo('about')" :class="{ active: activeSection === 'about' }">关于我</a>
          <a href="#knowledge" @click="scrollTo('knowledge')" :class="{ active: activeSection === 'knowledge' }">知识空间</a>
          <a href="#skills" @click="scrollTo('skills')" :class="{ active: activeSection === 'skills' }">技能&生活</a>
          <a href="#contact" @click="scrollTo('contact')" :class="{ active: activeSection === 'contact' }">联系方式</a>
        </div>
        <div class="nav-actions">
          <button class="icon-btn" title="字体大小">A</button>
          <button class="icon-btn" title="主题切换">☀</button>
        </div>
      </div>
    </nav>

    <!-- 首页部分 -->
    <section id="home" class="section hero-section">
      <div class="section-bg section-bg-home"></div>
      <div class="hero-content">
        <div class="hero-left">
          <div class="profile-image">
            <div class="image-placeholder">
              <div class="placeholder-icon">👤</div>
            </div>
          </div>
        </div>
        <div class="hero-right">
          <h1 class="hero-title">
            <span class="gradient-text-green">Hi!</span>
            <span class="gradient-text-blue"> 我是陈碧辉</span>
          </h1>
          <p class="hero-description">
            一名战略驱动、系统化思考、高度务实的机会主义者。
          </p>
          <p class="hero-description">
            一名 AI 原生的年轻人，热爱探索未知领域、收集整理有用的知识并分享。持续发现并实现可以由 AI 加速的问题，希望成为一名优秀的智能体工程师。
          </p>
          <div class="hero-affiliation">
            <span class="affiliation-icon">◎</span>
            <span>南开大学 2025级光电信息工程博士生</span>
          </div>
          <div class="hero-buttons">
            <a href="https://github.com/TiredAce" target="_blank" class="btn btn-github">
              <span>🐙</span>
              <span>GitHub</span>
            </a>
            <a href="#contact" @click="scrollTo('contact')" class="btn btn-contact">
              <span>✉</span>
              <span>联系我</span>
            </a>
          </div>
        </div>
      </div>
      <div class="quote-section">
        <p class="quote-en">"Dots become lines when the time clicks."</p>
        <p class="quote-cn">
          学到的很多东西，都是一个个点，我可能现在不知道怎么用，,也不能预见到底有没有用，但当某一天觉得这些点有用的时候，我会把它们连成一条线。
        </p>
      </div>
    </section>

    <!-- 关于我部分 -->
    <section id="about" class="section about-section">
      <div class="section-bg section-bg-about"></div>
      <div class="section-header">
        <span class="section-icon"></span>
        <h2 class="section-title">我眼里的我</h2>
      </div>
      <div class="about-cards">
        <div class="about-card">
          <div class="card-icon pink">❤</div>
          <p>喜欢做梦，情绪敏感，心思细腻，涉猎广泛</p>
        </div>
        <div class="about-card">
          <div class="card-icon blue">👁</div>
          <p>喜欢一切够触动内心的东西</p>
        </div>
        <div class="about-card">
          <div class="card-icon green">🎯</div>
          <p>做点有价值与有影响力的事情</p>
        </div>
        <div class="about-card">
          <div class="card-icon purple">🔄</div>
          <p>把AI当作"操作系统"</p>
        </div>
      </div>

      <div class="doing-section">
        <div class="doing-left">
          <div class="doing-header">
            <span class="doing-emoji">🤔</span>
            <h3>我现在在做什么</h3>
          </div>
          <ul class="doing-list">
            <li>
              <span class="list-number green">1</span>
              <span>开拓眼界，悉心观察，广度链接</span>
            </li>
            <li>
              <span class="list-number green">2</span>
              <span>开源自我， Build in Public</span>
            </li>
            <li>
              <span class="list-number green">3</span>
              <span>研究AI，研究产品，研究创业</span>
            </li>
            <li>
              <span class="list-number green">4</span>
              <span>写点文字，敲点代码，做点计划</span>
            </li>
            <li>
              <span class="list-number green">5</span>
              <span>学习如何成为一个靠谱的IP</span>
            </li>
          </ul>
        </div>
        <div class="doing-right">
          <div class="doing-header">
            <span class="doing-emoji">💪</span>
            <h3>我擅长的事情</h3>
          </div>
          <ul class="doing-list">
            <li>
              <span class="list-number orange">1</span>
              <span>收集数据，整理规律，分享洞察</span>
            </li>
            <li>
              <span class="list-number orange">2</span>
              <span>持续学习，保持思考，快速起步</span>
            </li>
            <li>
              <span class="list-number orange">3</span>
              <span>观察生活，观察世界，发掘创意</span>
            </li>
            <li>
              <span class="list-number orange">4</span>
              <span>即刻起步，小量快跑，迭代优化</span>
            </li>
            <li>
              <span class="list-number orange">5</span>
              <span>从他人的经验中学习</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 知识空间部分 -->
    <section id="knowledge" class="section knowledge-section">
      <div class="section-bg section-bg-knowledge"></div>
      <div class="section-header">
        <span class="section-icon">🚩</span>
        <h2 class="section-title gradient-text-blue">知识空间</h2>
      </div>
      <p class="section-description">
        这个空间汇集了我在学习过程中遇到的有用且有趣的资源。
      </p>
      <p class="section-note">
        内容会定期更新，说不定会有惊喜哦~
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
        <h2 class="section-title">技能&生活</h2>
      </div>
      <div class="skills-content">
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-icon">💻</div>
            <h4>前端开发</h4>
            <p>Vue3, React, TypeScript</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">🤖</div>
            <h4>AI & 机器学习</h4>
            <p>Pytorch, CV, LLM</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">📱</div>
            <h4>产品设计</h4>
            <p>用户体验, 产品思维</p>
          </div>
          <div class="skill-item">
            <div class="skill-icon">🚀</div>
            <h4>创业思考</h4>
            <p>商业模式, 市场分析</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系方式部分 -->
    <section id="contact" class="section contact-section">
      <div class="section-bg section-bg-contact"></div>
      <div class="section-header">
        <span class="section-icon">🔍</span>
        <h2 class="section-title gradient-text-blue">联系方式</h2>
      </div>
      <p class="section-description">
        期待与你交流,一起做些有意思的事情
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
    </section>


    <!-- 背景装饰 -->
    <div class="bg-decoration"></div>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const activeSection = ref('home')

const knowledgeItems = [
  {
    icon: '🧠',
    title: '懂AI',
    description: '记录了我收集到的AI行业的资讯观点与实用干货',
    color: 'blue',
    link: 'https://ai.feishu.cn/wiki/EpS3wxM5ei7o0jkGPbicbxnSnBh'
  },
  {
    icon: '💼',
    title: '会工作',
    description: '记录我个人认同的工作方法与思考',
    color: 'purple',
    link: 'https://ai.feishu.cn/docx/H9NKdV5hOoFJz6x3sSDcdRwznod?from=from_copylink'
  },
  {
    icon: '❤️',
    title: '去生活',
    description: '记录生活中的想和大家分享的一些事件',
    color: 'orange',
    link: 'https://ai.feishu.cn/wiki/R5a6wZtDjiDKgak5X0bcd9XBnVb'
  },
  // {
  //   icon: '🌍',
  //   title: '观天下',
  //   description: '记录脚步丈量过的这片土地',
  //   color: 'green',
  //   link: '#'
  // },
  {
    icon: '⚡',
    title: '悉心理',
    description: '记录一些与心理、心态相关的内容',
    color: 'yellow',
    link: 'https://ai.feishu.cn/wiki/JY80wysmxiwPxSkGnl5cC8vGnYd'
  },
  {
    icon: '< >',
    title: '说编程',
    description: '关于编程中的一些原理、规范、方法',
    color: 'purple',
    link: 'https://ai.feishu.cn/wiki/ESVnwVDNBiF9nmkkZcecLj07n8g'
  },
  // {
  //   icon: '📈',
  //   title: '悉商业',
  //   description: '关于市场、创业和产品',
  //   color: 'green',
  //   link: '#'
  // },
  {
    icon: '🎓',
    title: '学光学',
    description: '记录我的学生生涯,和一些在此过程中留下的资源',
    color: 'red',
    link: 'https://ai.feishu.cn/wiki/YnxewONkAiaLalkfdS6cwiAznfh'
  }
]

const contactItems = [
  {
    icon: '💬',
    title: '微信',
    detail: 'buzhihuo2333333',
    colorClass: 'green'
  },
  // {
  //   icon: '💙',
  //   title: 'QQ',
  //   detail: '1607558792',
  //   colorClass: 'blue'
  // },
  {
    icon: '✉️',
    title: '邮箱',
    detail: 'chenbihui@mail.nankai.edu.cn',
    colorClass: 'purple'
  },
  {
    icon: '🐙',
    title: 'GitHub',
    detail: 'TiredAce',
    colorClass: 'grey',
    link: 'https://github.com/TiredAce'
  },
  // {
  //   icon: '📺',
  //   title: '哔哩哔哩',
  //   detail: '87851447',
  //   colorClass: 'red'
  // },
  {
    icon: '🌐',
    title: '个人网站',
    detail: 'chen.blog',
    colorClass: 'orange',
    link: 'https://tired-ace-github-1o4vy2it7-chens-projects-33c6e8ff.vercel.app/'
  }
]

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
    const targetPosition = element.offsetTop - 80 // 减去导航栏高度
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>

<style scoped>
.app {
  position: relative;
  min-height: 100vh;
  background: var(--bg-primary);
  overflow-x: hidden;
  overflow-y: visible;
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
  transition: background 0.3s ease, box-shadow 0.3s ease;
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

.icon-btn {
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: transform 0.3s ease;
}

.icon-btn:hover {
  transform: scale(1.1);
}

/* 通用区块样式 */
.section {
  min-height: auto;
  padding: 5rem 2rem 3rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-icon {
  font-size: 2rem;
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
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--bg-card);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.placeholder-icon {
  font-size: 6rem;
  opacity: 0.5;
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
  background: 
    radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
  animation: bgPulse 8s ease-in-out infinite;
  will-change: opacity;
  backface-visibility: hidden;
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
    radial-gradient(circle 400px at 20% 30%, rgba(102, 126, 234, 0.4) 0%, transparent 50%),
    radial-gradient(circle 400px at 80% 70%, rgba(118, 75, 162, 0.4) 0%, transparent 50%),
    radial-gradient(circle 300px at 50% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 60%);
  background-size: 200% 200%;
  animation: waveFlow 15s ease-in-out infinite;
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
    radial-gradient(circle 300px at 30% 40%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
    radial-gradient(circle 300px at 70% 60%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
    radial-gradient(circle 250px at 50% 20%, rgba(34, 197, 94, 0.3) 0%, transparent 50%),
    radial-gradient(circle 200px at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%);
  animation: rotateParticles 20s linear infinite;
}

@keyframes rotateParticles {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

/* 知识空间 - 闪烁的星星效果 */
.section-bg-knowledge {
  background: 
    radial-gradient(4px 4px at 20% 30%, rgba(102, 126, 234, 1) 0%, transparent 50%),
    radial-gradient(4px 4px at 60% 70%, rgba(139, 92, 246, 1) 0%, transparent 50%),
    radial-gradient(3px 3px at 50% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 50%),
    radial-gradient(3px 3px at 80% 10%, rgba(102, 126, 234, 0.8) 0%, transparent 50%),
    radial-gradient(4px 4px at 90% 60%, rgba(139, 92, 246, 1) 0%, transparent 50%),
    radial-gradient(3px 3px at 10% 80%, rgba(118, 75, 162, 0.8) 0%, transparent 50%),
    radial-gradient(3px 3px at 40% 20%, rgba(102, 126, 234, 0.8) 0%, transparent 50%),
    radial-gradient(4px 4px at 70% 90%, rgba(139, 92, 246, 1) 0%, transparent 50%);
  background-size: 200% 200%;
  animation: twinkle 3s ease-in-out infinite, starMove 20s linear infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

@keyframes starMove {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

/* 技能与生活 - 流动的线条 */
.section-bg-skills {
  background: 
    linear-gradient(45deg, transparent 30%, rgba(102, 126, 234, 0.3) 50%, transparent 70%),
    linear-gradient(-45deg, transparent 30%, rgba(139, 92, 246, 0.3) 50%, transparent 70%),
    linear-gradient(135deg, transparent 40%, rgba(118, 75, 162, 0.2) 50%, transparent 60%);
  background-size: 300% 300%;
  animation: lineFlow 10s linear infinite;
}

@keyframes lineFlow {
  0% { background-position: 0% 0%, 100% 100%, 50% 50%; }
  100% { background-position: 100% 100%, 0% 0%, 50% 50%; }
}

/* 联系方式 - 脉冲的圆形波纹 */
.section-bg-contact {
  background: 
    radial-gradient(circle 400px at 50% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
    radial-gradient(circle 350px at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
    radial-gradient(circle 350px at 70% 30%, rgba(118, 75, 162, 0.3) 0%, transparent 50%);
  animation: pulseRipple 4s ease-in-out infinite;
}

@keyframes pulseRipple {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.8;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .navbar {
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 2rem);
    max-width: 600px;
  }

  .nav-container {
    flex-wrap: wrap;
    padding: 0.6rem 1rem;
    gap: 1rem;
  }

  .nav-logo {
    font-size: 1rem;
  }

  .nav-links {
    gap: 0.8rem;
    font-size: 0.85rem;
  }

  .nav-actions {
    gap: 0.5rem;
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

