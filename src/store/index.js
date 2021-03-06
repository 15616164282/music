import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: "undefined",
    userId: "undefined",
    token: "",
    songList: [],
    musicNes: [{
        title: "谢天笑全新专辑《哈哈大笑》正式上线 新歌音乐会燥翻全场",
        textfont1: ["4月27日，中国摇滚新教父、现场之王谢天笑携OK KING乐队举办“重返北京 哈哈大笑”音乐会，挤爆北京糖果三层，接近两个小时的新旧作品现场演绎，人潮汹涌澎湃，气氛躁动、乐迷大合唱、呼喊、POGO、跳水接连不断，力量凝聚，中国摇滚的精神和魅力在谢天笑的现场挥洒得淋漓尽致。当晚10点，谢天笑全新个人专辑《哈哈大笑》也全面上线，现场谢天笑演绎了新专辑几乎所有曲目，让乐迷大呼过瘾，震撼不断，后劲巨大，回味无穷！“老谢的新专辑太牛了！”“那首《鸡》简直了!”去年，谢天笑在出道二十周年展开周年限定巡回“再次来临”，以不插电的形式回顾音乐生涯，给乐迷带去截然不同的现场感受。同时，为了回应乐迷对摇滚乐躁动现场的期待，谢天笑和主办方乐腾演艺承诺会在北京带来返场演出，今年兑现承诺，诚意献上谢天笑&OK KING乐队这场顶级配置，各大音乐平台高清直播，唱满近两个小时，线上线下齐燥的音乐会。", "对于谢天笑而言，《哈哈大笑》是一张风格极具突破性、曲风多元的全新专辑作品，用坚固不变的摇滚内核，表达着世间万象。在这张专辑中，你能听到大家熟悉的摇滚躁动的老谢，古筝元素、雷鬼节奏依然保留，也能听到《哈哈大笑》、《每一个音符》、《水中婴》等突破以往风格的作品，从“哈哈大笑”的快意人生，到“都不再重要”的释然，无关对抗与妥协，不再有得失与输赢，全然一种安之若素的豁达。笑谈中不悲不喜，径自揣摩。谢天笑表示，这张作品主要就是希望让大家觉得“好听”，而作品中的深意，专辑整体的思想脉络，他希望乐迷能在听歌时凭自身的直觉去感受。"],
        imgTitle: "thumb_220_0_20210428102133681.jpg",
        img: "20210428102133251.jpg",
        createdTime: "2021-04-28 10:21:17",
      },
      {
        title: "丁当“90s华语金曲翻玩计划”全新启动 摇滚经典《烦》解闷新生活运动",
        textfont1: ["继叫好叫座的翻唱专辑《下一站，天后》，2021年丁当即将启动全新“90s华语金曲翻玩计划”，再度挑战一系列逼哭回忆的华语热门金曲，每一首经典歌曲都绝对占领回忆的一席之地。首波经典改编《烦》，邀请曾荣获金曲奖单曲制作人奖的陈君豪注入当代思维，别于林晓培随兴恣意的摇滚版本，陈君豪打破经典框架，重新翻玩，在摇滚脉动加入另类电气揉合，赋予崭新听觉体验。", "2020年横跨到2021年，世界发生了巨大变化，“烦”绝对是大多数人的共同心声，各种烦恼情绪席卷而来，因此丁当全新演绎的《烦》，以更宏观的角度，直接了当宣泄积压已久的烦闷，丁当透露以前驻唱时蛮常唱《烦》，全场跟着呐喊很过瘾，这次能再重新诠释这首歌，现在这个时刻也相当有意义。这次《烦》也特别设计一段呢喃饶舌，丁当为了这段饶舌多次进出录音室，不断调整拿捏情绪力度，让天人交战的疯狂情绪释放得恰到好处，一唱完，她也兴奋不已：“这次新的编曲让情绪的变化更丰富，还有加入rap，在rap过程中，就是把态度呈现出来，唱的超级high！”"],

        img: "20210427010526970.jpg",
        imgTitle: "thumb_220_0_20210427010526108.jpg",
        createdTime: "2021-04-27 13:04:26",
      },
      {
        title: "唱作人于文文新专辑之第二幕新歌《浪花》4月27日轻松上线",
        textfont1: ["唱作人于文文携手华纳音乐共同打造的于文文个人第三张音乐专辑，第二幕「自我修复」篇，讲述于文文的音乐多面向，今日，代表于文文最自信洒脱一面的《浪花》全网上线。", "《浪花》也为在生活里打拼的人们加油打气，暂时收起悲伤，放下纠结，不如在即将到来的假期中，来一次「自我修复」的旅行，找回自己，重拾自信，收获快乐。如果将每个个体比作浪花，既然我们来过、体验过，就不应该仅仅是化作泡沫。"],
        imgTitle: "thumb_220_0_20210427110853830.jpg",
        img: "20210427110854488.jpg",
        createdTime: "2021-04-27 11:08:38 ",
      },
      {
        title: "硬糖少女303周年纪念特专开篇曲《双马尾》上线 少女御变升级",
        textfont1: ["4月27日，成团近一年的硬糖少女303《了不起的女孩》周年纪念特专开篇曲《双马尾》正式音源上线。全员独特的“双马尾”造型，不仅暗喻双面性，也暗示着硬糖少女的御变升级即将开始。当女孩子扎起头发搞事业，她们不止PLAY，更要SLAY！", "硬糖少女303作为限定女团，在有限的时间内不断尝试各种曲风。无边界探索音乐的可能性，也让她们的能力提到飞速提升。硬糖少女303身上那种“我要的不止漂亮，要加一拳力量”的大女主气场也日渐丰盈。对于硬糖来说每一次挑战都是飞跃，每一次探索都是收获。女孩子要勇敢地释放力量，就像硬糖少女303一直在用音乐作品向世界宣告，只要做自己你就是最了不起的女孩。"],
        imgTitle: "thumb_220_0_20210428102133681.jpg",
        img: "20210427104000884.jpg",
        createdTime: "2021-04-27 10:39:35",
      },
      {
        title: "林俊杰英文EP隐藏曲目公开，与Anne-Marie合作《Bedroom》已全球上线",
        textfont1: ["「亚洲唱作天王」林俊杰首张全英文作品《Like You Do》已经在全球各大平台同步上线！而这张EP更是JJ进军国际市场的首张作品，一推出即造成各地乐迷热烈反响。其中一直尚未正式释出的「神秘隐藏曲目」，更让许多乐迷议论纷纷，一段仅仅30秒的释出音源，也让歌迷们纷纷猜测与JJ合唱的绝美嗓音是来自哪位国际重量级女歌手。如今答案正式揭晓，这首充满丰沛情感的男女合唱抒情歌《Bedroom》，正是由「亚洲唱作天王」林俊杰与「英伦冠军歌姬」Anne-Marie双双深情合唱；两人的跨海合作一公布即引发海内外各界乐迷关注，直呼两人的合作堪称是国际乐坛全新的梦幻组合。", "而《Bedroom》这首歌是继JJ与世界前十大DJ Steve Aoki之后，再度跨海与英国超强实力女歌手Anne-Marie合作，JJ清亮且充满渲染力声线搭配Anne-Marie浑厚且充满魅力的嗓音，丰富这首《Bedroom》的层次，两人诠释相同的歌曲段落、相同的歌词，却演绎出截然不同的情绪。整首歌曲的诠释，不仅是两位歌手的实力飙歌，更体现了另一种时空对话的男女合唱。歌曲勾勒出在昏暗房间中孤零零的身影，Anne-Marie独特的嗓音优雅地搭乘着钢琴登场，宛如平静湖面上兴起的涟漪般令人深陷其魅力中 ；后段JJ清澈高亢的嗓音，从干净的钢琴伴奏中穿透而出，为昏暗的房间点上轻柔闪耀的烛光，为歌曲增加坚定及隐隐的伤感。"],
        imgTitle: "thumb_220_0_20210423040020151.jpg",
        img: "thumb_220_0_20210423040020151.jpg",
        createdTime: "2021-04-23 15:58:55",
      },
    ]
  },
  mutations: {
    username(state, val) {
      state.username = val
    },
    userId(state, val) {
      state.userId = val
    },
    token(state, val) {
      state.token = val
    },
    songList(state, val) {
      state.songList.push(val)
    },

  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        return {
          // 只储存state中的
          username: val.username,
          token: val.token,
          userId: val.userId,
        };
      }
    })
  ]
})