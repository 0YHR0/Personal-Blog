module.exports = {
  plugins: [
    // ["@vuepress-reco/vuepress-plugin-loading-page"],
  // ["vuepress-plugin-nuggets-style-copy", {
  //   copyText: "Copy",
  //   tip: {
  //       content: "Copy successful!"
  //   }
  // }],
  [
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)",
      hideIcon: "/head.ico",
      hideText: "(●—●)Oh no, please Come back！",
      recoverTime: 2000
    }
  ],
  // [
  //   '@vuepress-reco/vuepress-plugin-bgm-player',{
  //    audios: [
  //       // 本地文件示例
  //       {
  //         name: '烟花易冷',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .烟花易冷.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '红尘客栈',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .红尘客栈.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '爱情废柴',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .爱情废柴.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '爱在西元前',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .爱在西元前.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '安静',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .安静.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '暗号',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .暗号.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '半岛铁盒',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .半岛铁盒.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '半兽人',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .半兽人.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '本草纲目',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .本草纲目.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '不该',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .不该 (with aMEI).mp3',
  //         cover: '/note.jpg'
  //       },{
  //         name: '彩虹',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .彩虹.mp3',
  //         cover: '/note.jpg'
  //       },{
  //         name: '超人不会飞',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .超人不会飞.mp3',
  //         cover: '/note.jpg'
  //       },{
  //         name: '稻香',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .稻香.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '等你下课',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .等你下课(with 杨瑞代).mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '东风破',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .东风破.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '断了的弦',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .断了的弦.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '发如雪',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .发如雪.mp3',
  //         cover: '/note.jpg'
  //       },{
  //         name: '分裂',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .分裂.mp3',
  //         cover: '/note.jpg'
  //       },{
  //         name: '枫',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .枫.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '告白气球',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .告白气球.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '搁浅',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .搁浅.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '给我一首歌的时间',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .给我一首歌的时间.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '好久不见',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .好久不见.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '黑色毛衣',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .黑色毛衣.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '红尘客栈',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .红尘客栈.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '花海',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .花海.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '回到过去',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .回到过去.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '霍元甲',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .霍元甲.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '简单爱',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .简单爱.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '将军',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .将军.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '菊花台',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .菊花台.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '开不了口',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .开不了口.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '兰亭序',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .兰亭序.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '米兰的小铁匠',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .米兰的小铁匠.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '明明就',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .明明就.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '哪里都是你',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .哪里都是你.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '七里香',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .七里香_20190720_154109.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '千里之外',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .千里之外.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '青花瓷',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .青花瓷.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '时光机',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .时光机.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '手写的从前',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .手写的从前.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '说好的幸福呢',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .说好的幸福呢.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '说了再见',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .说了再见.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '说走就走',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .说走就走.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '算什么男人',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .算什么男人.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '听见下雨的声音',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .听见下雨的声音.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '退后',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .退后.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '外婆',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .外婆.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '威廉古堡',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .威廉古堡.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '我落泪情绪零碎',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .我落泪情绪零碎.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '乌克丽丽',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .乌克丽丽.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '心雨',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .心雨.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '烟花易冷',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .烟花易冷.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '阳光宅男',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .阳光宅男.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '夜的第七章',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .夜的第七章.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '夜曲',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .夜曲.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '一路向北',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .一路向北.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '以父之名',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .以父之名.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '英雄',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .英雄.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '雨下一整晚',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .雨下一整晚.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '园游会',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .园游会.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '止战之殇',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .止战之殇.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '最长的电影',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦 - .最长的电影.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: 'Mojito',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦-Mojito.mp3',
  //         cover: '/note.jpg'
  //       },{
  //         name: '黑色幽默',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦-黑色幽默.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '我是如此相信',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦-我是如此相信-《天火》电影主题曲.mp3',
  //         cover: '/note.jpg'
  //       },
  //       {
  //         name: '星晴',
  //         artist: 'Jay Zhou',
  //         url: '/song/周杰伦-星晴.mp3',
  //         cover: '/note.jpg'
  //       },
        

  //       // // 网络文件示例
  //       // {
  //       //   name: '강남역 4번 출구',
  //       //   artist: 'Plastic / Fallin` Dild',
  //       //   url: 'https://assets.smallsunnyfox.com/music/2.mp3',
  //       //   cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
  //       // },
  //       // {
  //       //   name: '用胳膊当枕头',
  //       //   artist: '최낙타',
  //       //   url: 'https://assets.smallsunnyfox.com/music/3.mp3',
  //       //   cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
  //       // }
  //     ] 
  //   }
  // ]
['@vssue/vuepress-plugin-vssue', {
  // set `platform` rather than `api`
  platform: 'github',

  // all other options of Vssue are allowed
  owner: '0YHR0',
  repo: 'Blog-comment',
  clientId: '8118713cadc43b23f831',
  clientSecret: 'e37c2faa7e7a5d1848afd6298f9416ec42335beb',
}]  

],
  "title": "Blog of YHR",
  "description": "Blog of YHR",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/head.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "vssueConfig": {
      "platform": 'github',
      "owner": '0YHR0',
      "repo": 'Blog-comment',
      "clientId": '8118713cadc43b23f831',
      "clientSecret": 'e37c2faa7e7a5d1848afd6298f9416ec42335beb',
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/0YHR0",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": 'auto',
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "Leetcode",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "97868579@qq.com",
        "link": "https://leetcode.cn/"
      },
      {
        "title": "Fao",
        "desc": "Fao yyds!",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://www.cnblogs.com/fao99/"
      }
    ],
    "logo": "/head.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Yang Haoran",
    "authorAvatar": "/head.jpg",
    "record": " Deutschland-Stuttgart",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}