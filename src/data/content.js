const topic = (title, link = '') => ({ title, link })

export const knowledgeItemsBase = [
  {
    code: '01',
    icon: '🎓',
    key: 'academic',
    accent: 'cyan',
    title: '学术科研与管理',
    titleEn: 'Academic & Research',
    summary: '统筹博士生涯规划、科研日常记录与学术产出流程。',
    groups: [
      {
        name: '科研规划',
        topics: [
          topic('博士毕业 Pipeline'),
          topic('科研笔记')
        ]
      },
      {
        name: '学术产出',
        topics: [
          topic('AI 科研论文写作'),
          topic('专利申请流程')
        ]
      }
    ]
  },
  {
    code: '02',
    icon: '🔬',
    key: 'optics',
    accent: 'blue',
    title: '光电工程与物理',
    titleEn: 'Optics & Physics',
    summary: '围绕核心专业领域，从基础理论、细分方向到仿真工具沉淀知识。',
    groups: [
      {
        name: '理论基础',
        topics: [
          topic('光学理论基础'),
          topic('专业基础课'),
          topic('应用光学 / 物理光学'),
          topic('非线性光学 / 傅里叶光学')
        ]
      },
      {
        name: '研究方向',
        topics: [
          topic('飞秒激光'),
          topic('激光干扰与致盲'),
          topic('电光调制工作')
        ]
      },
      {
        name: '工具方法',
        topics: [
          topic('物理仿真软件')
        ]
      }
    ]
  },
  {
    code: '03',
    icon: '🤖',
    key: 'robotics',
    accent: 'violet',
    title: '机器人与视觉算法',
    titleEn: 'Robotics & Vision',
    summary: '将无人机、定位导航、ROS 与视觉算法归纳成系统工程知识域。',
    groups: [
      {
        name: '系统工程',
        topics: [
          topic('无人机导航'),
          topic('视觉 SLAM 十四讲'),
          topic('古月·ROS 入门 21 讲')
        ]
      }
    ]
  },
  {
    code: '04',
    icon: '💻',
    key: 'csai',
    accent: 'green',
    title: '计算机科学与人工智能',
    titleEn: 'CS & AI',
    summary: '覆盖 AI 算法、开发项目、工程环境与高质量开源资料。',
    groups: [
      {
        name: 'AI 与算法',
        topics: [
          topic('强化学习中的数学'),
          topic('鱼皮的 AI 知识库')
        ]
      },
      {
        name: '开发实战',
        topics: [
          topic('智能 OnCall Agent 项目'),
          topic('OpenClaw 文档')
        ]
      },
      {
        name: '编程基础',
        topics: [
          topic('鸟哥的 Linux 私房菜'),
          topic('Web 前端开发'),
          topic('Awesome Github Repo'),
          topic('程序员的 README')
        ]
      }
    ]
  },
  {
    code: '05',
    icon: '🧠',
    key: 'growth',
    accent: 'magenta',
    title: '认知与个人成长',
    titleEn: 'Cognition & Growth',
    summary: '聚焦思维模式升级、内外部认知校准与长期阅读沉淀。',
    groups: [
      {
        name: '认知升级',
        topics: [
          topic('认知觉醒：内观自己'),
          topic('认知觉醒：外观世界'),
          topic('“应然”与“实然”')
        ]
      },
      {
        name: '阅读沉淀',
        topics: [
          topic('读书笔记')
        ]
      }
    ]
  },
  {
    code: '06',
    icon: '🌍',
    key: 'lifeFinance',
    accent: 'amber',
    title: '生活进阶与财务',
    titleEn: 'Life & Finance',
    summary: '管理语言、健康、财富与量化实践，形成稳定的生活操作系统。',
    groups: [
      {
        name: '语言与健康',
        topics: [
          topic('英语笔记'),
          topic('健身笔记')
        ]
      },
      {
        name: '财富管理',
        topics: [
          topic('理财笔记'),
          topic('量化笔记')
        ]
      }
    ]
  }
]


export const contactItemsBase = [
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
    link: 'https://tired-ace-github-io.vercel.app/'
  }
]
