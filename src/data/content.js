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
          topic('博士毕业 Pipeline', 'https://my.feishu.cn/wiki/H4KBwcIx9ic5QukfT8vcnoXvnSg'),
          topic('科研论笔记', 'https://my.feishu.cn/wiki/HHsFw9uKfi9LMgkA1KVcRj6EnDb')
        ]
      },
      {
        name: '学术产出',
        topics: [
          topic('AI 科研论文写作', 'https://my.feishu.cn/wiki/G6rDwzlGtidejLktWGPcKEEPnYb'),
          topic('专利申请流程', 'https://my.feishu.cn/wiki/N6pAwi3boiKFBDkPZE0cxRzinxh')
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
        name: '光学理论基础',
        topics: [
          topic('专业基础课', 'https://my.feishu.cn/wiki/LDIOwPMo2iEb2IkahWkc62cbnUf'),
          topic('应用光学', 'https://my.feishu.cn/wiki/MaiuwHcjcidG7ZkxdhKcxbt9nCd'),
          topic('物理光学', 'https://my.feishu.cn/wiki/WAqXwMnTbitBE5kr1UXcdNR1nmc'),
          topic('傅里叶光学', 'https://my.feishu.cn/wiki/BzHCwbXkYinSWikXAGeceju4nyg'),
          topic('非线性光学', 'https://my.feishu.cn/wiki/Pyy9wA0VBiTV9fk0ckScbOGanse')
        ]
      },
      {
        name: '研究方向',
        topics: [
          topic('飞秒激光', 'https://my.feishu.cn/wiki/MXfiwriXxijDINkyDAFcL5Jhnag'),
          topic('激光干扰', 'https://my.feishu.cn/wiki/K02YwApPliWp2wk0StOc466Onvk'),
          topic('电光调制', 'https://my.feishu.cn/wiki/F8ehwv9JWiEVlpk8OV7c3rNRn8f')
        ]
      },
      {
        name: '物理仿真',
        topics: [
          topic('COMSOL', 'https://my.feishu.cn/wiki/QO0twSsRairz1GkZhCFcdSVKnwd'),
          topic('Zemax', 'https://my.feishu.cn/wiki/LS4fwC1bOijf3Sk4qqYcqqxqnMh'),
          topic('CST', 'https://my.feishu.cn/wiki/ZelVwU2qsiT43MkJSX8cjwUXn4f')
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
        name: '数学基础',
        topics: [
          topic('线性代数', 'https://my.feishu.cn/wiki/SVSrwJYh6ikRqzkxa34czXainAe'),
          ]
      },
      {
        name: '系统工程',
        topics: [
          topic('无人机导航', 'https://my.feishu.cn/wiki/Jl0Dw2gMxiTr8ykwy7TceugpnRb'),
          topic('视觉 SLAM 十四讲', 'https://my.feishu.cn/wiki/BtxLwAwqEiZqXmkyvjXchJbOntc'),
          topic('古月·ROS 入门 21 讲', 'https://my.feishu.cn/wiki/ZvzswHtHgiM425ke21ncpvUxnKe')
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
          topic('强化学习中的数学', 'https://my.feishu.cn/wiki/VCmDwy268iybMfk74bEcqmU4nwf'),
          topic('鱼皮的 AI 知识库', 'https://my.feishu.cn/wiki/TldqwoPaBiWqRAkOzuncoCpQnEc')
        ]
      },
      {
        name: '开发实战',
        topics: [
          topic('智能 OnCall Agent 项目', 'https://my.feishu.cn/wiki/BaPRwBf0lixVWUknlfvcCpaZnyc'),
          topic('程序员的 README', 'https://my.feishu.cn/wiki/CAUuwHe2HiQ6RlkNvOhcuNkvnWe')
        ]
      },
      {
        name: '编程基础',
        topics: [
          topic('鸟哥的 Linux 私房菜', 'https://my.feishu.cn/wiki/Pp60wCyQfigZLfkl3l7cXYrAnKf'),
          topic('Web 前端开发', 'https://my.feishu.cn/wiki/JfYGwNrS8i1DXNksMUtcNsCCnwh'),
          topic('Awesome Github Repo', 'https://my.feishu.cn/wiki/MatrwBlH2izQqjkWHaTcWDXwnEh'),

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
          topic('认知觉醒：内观自己', 'https://my.feishu.cn/wiki/RugGwOubcip39vkmSaoc8THWnGg'),
          topic('认知觉醒：外观世界', 'https://my.feishu.cn/wiki/FzScwMG9ii4aK5ktHt7ckecynQf'),
          topic('“应然”与“实然”', 'https://my.feishu.cn/wiki/DUkRwaHWViCMBjkTBgNcG0YYn5d')
        ]
      },
      {
        name: '阅读沉淀',
        topics: [
          topic('读书笔记', 'https://my.feishu.cn/wiki/BMZUwu8dwiY60Wk9F2ccK9EQnMh')
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
          topic('英语笔记', 'https://my.feishu.cn/wiki/Tpw5wFlmQi7MwvkUQ6zc0WhsnYg'),
          topic('健身笔记', 'https://my.feishu.cn/wiki/RT0RwXYW6iFT7okB98BcMGSWnug')
        ]
      },
      {
        name: '财富管理',
        topics: [
          topic('理财笔记', 'https://my.feishu.cn/wiki/FNSkwxZgLiQkWhkhJHkcaddcnxf'),
          topic('量化笔记', 'https://my.feishu.cn/wiki/Zs3pwBrYLiIYnCksQ3ocNjIPnBb')
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
