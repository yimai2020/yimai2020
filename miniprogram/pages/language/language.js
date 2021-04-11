// pages/language/language.js
const db = wx.cloud.database({
  env: 'fxy-onc8b'
});  //用db代替数据库
const user = db.collection('user'); //用user代替用户集合
let currentPage = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    clientHeight: '',
    users_num:0,
    user:[],
    word: [{
      letter: 'ꀀꀨ',
      explain: '被子',
      pronunciation: 'it bop',
      sentence_yi:'ꀀꀨꆈꁱꋐ',
      sentence_zhong:'一床花被子',
      isCollected:false,
      isKnew: false,
      audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%A2%AB%E5%AD%90.mp3?sign=50e3d20fe3c1b53c7018a367c700e685&t=1584864970',
      audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E4%B8%80%E5%BA%8A%E8%8A%B1%E8%A2%AB%E5%AD%90.mp3?sign=3b646d59bb812933d45c4748e2046f1e&t=1584864958',
      image:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/beizi.jpg?sign=1a41b31ee412a7ba32df5ce92b27520d&t=1584869876'
    },{
        letter:'ꀀꍹ',
        explain:'木勺',
        pronunciation: 'it chyp',
        sentence_yi:'ꀀꍹꀊꏀꏢ',
        sentence_zhong:'一个新木勺',
        isCollected: false,
        isKnew: false,
        audio_word:'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%9C%A8%E5%8B%BA.mp3?sign=2fbec12416ecef29b36eb0064b9fd58a&t=1584864982',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E4%B8%80%E4%B8%AA%E6%96%B0%E6%9C%A8%E5%8B%BA.mp3?sign=3d870e07dda4e7403f68ac3cb3c2aeb8&t=1584864993',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/mushao.jpg?sign=fa71b35d74deca691b1b789c7cd9e77f&t=1584869888'
    },{
        letter: 'ꀁꇬ',
        explain: '家',
        pronunciation: 'ix go',
        sentence_yi: 'ꀁꇬꁧꏾꀐ',
        sentence_zhong: '想回家了',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E5%AE%B6.mp3?sign=57575e50aef8a3234167022ac4a9b631&t=1584865007',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%83%B3%E5%9B%9E%E5%AE%B6%E4%BA%86.mp3?sign=efcb2be00ad5b514b1ee0940f4ae7b6a&t=1584865018',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/jia.jpg?sign=961869930577c1fe7bfefe16187052de&t=1584869896'
      }, {
        letter: 'ꀂꏾ',
        explain: '头',
        pronunciation: 'i qi',
        sentence_yi: 'ꀂꏾꑐꄿꀐ',
        sentence_zhong: '头发该理了',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E5%A4%B4.mp3?sign=05005a60f30c78bfdbe1bfe1bf6aced2&t=1584865033',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E5%A4%B4%E5%8F%91%E8%AF%A5%E7%90%86%E4%BA%86.mp3?sign=1f9553b34130f8c0cf80bc20629fc1ab&t=1584865042',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/tou.jpg?sign=4e701ecd972d7cc14eaa317a47c5dba8&t=1584869903'
      }, {
        letter: 'ꀃꈈ',
        explain: '门',
        pronunciation: 'ip ko',
        sentence_yi: 'ꀃꈈꈢꄉꌶ',
        sentence_zhong: '把门关上吧',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E9%97%A8.mp3?sign=16bc12ecd06e0f3b2e02b17ae1916f80&t=1584865052',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%8A%8A%E9%97%A8%E5%85%B3%E4%B8%8A%E5%90%A7.mp3?sign=6a186f5a9b64938c3cc780d677817817&t=1584865060',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/men.jpg?sign=debe615cdac785c5cfb243ba314f9c88&t=1584869911'
      }, {
        letter: 'ꀃꃀ',
        explain: '肚子',
        pronunciation: 'ip mop',
        sentence_yi: 'ꉢꀃꃀꂮꀐ',
        sentence_zhong: '我肚子饿了',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/duizi.jpg?sign=205ed586f49f07fbd05f2a5d76ff8159&t=1584869920'
      }, {
        letter: 'ꍮꉘ',
        explain: '米糊糊',
        pronunciation: 'chex hxo',
        sentence_yi: 'ꍮꉘ꒔ꉽꐯ',
        sentence_zhong: '一锅米糊糊',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/mihuhu.png?sign=f6313d197c571824127b7fa37f6fe44e&t=1589541205'
      }, {
        letter: 'ꍮꒉ',
        explain: '米汤',
        pronunciation: 'chex yy',
        sentence_yi: 'ꍮꒉꅝ',
        sentence_zhong: '喝米汤',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/%E7%B1%B3%E6%B1%A4.jpg?sign=09f0a2645368f53e64900f95cf4deb41&t=1589541216'
      }, {
        letter: 'ꍯꐎ',
        explain: '白米',
        pronunciation: 'che qu',
        sentence_yi: 'ꍯꐎ꒔ꁀꎼ',
        sentence_zhong: '一袋白米',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/baimi.png?sign=7d6b429a73f154462e96d4c9feb8fad6&t=1589541228'
      }, {
        letter: 'ꍯꃅ',
        explain: '稻田',
        pronunciation: 'che mu',
        sentence_yi: 'ꍯꃅꇬ꒧ꁨ',
        sentence_zhong: '在田间劳作',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/daotian.png?sign=32bfde1ed73a4efad365e2d67786b5c3&t=1589541241'
      }, {
        letter: 'ꐕꍯ',
        explain: '汽车',
        pronunciation: 'qyp che',
        sentence_yi: 'ꉪꏤꐕꍯꇷꌊꇁꀐ',
        sentence_zhong: '我家买了一辆汽车',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/qiche.jpg?sign=120368b5c56b34a696d349f74ef73727&t=1589541252'
      }, {
        letter: 'ꍯꄁ',
        explain: '舂米',
        pronunciation: 'che dix',
        sentence_yi: 'ꍯꄁꍮꐯꅐ',
        sentence_zhong: '舂米出碎米',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/chongmi.png?sign=b40c5aabb9b0830a0bba19b16c049a48&t=1589541262'
      }, {
        letter: 'ꁉꍰ',
        explain: '灰尘',
        pronunciation: 'pop chep',
        sentence_yi: 'ꑓꋪꁉꍰꊐ',
        sentence_zhong: '眼睛进了灰尘',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/huicheng.jpg?sign=21f3f5107c8fdd827296f9094d9047f7&t=1589541282'
      }, {
        letter: 'ꍰꆗ',
        explain: '调查',
        pronunciation: 'chep hlit',
        sentence_yi: 'ꍰꆗꅐꇁ',
        sentence_zhong: '调查出来',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/diaocha.jpg?sign=8d1c7b5e688c33c11e0474b1bb82524d&t=1589541293'
      }, {
        letter: 'ꑓꍰꀕ',
        explain: '目瞪口呆',
        pronunciation: 'nyuo chep w',
        sentence_yi: 'ꋌꇷꑓꍰꀕ',
        sentence_zhong: '被吓的目瞪口呆',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/mudengkoudai.jpg?sign=956be1d618275e5a879f63baf91ed280&t=1589541305'
      }, {
        letter: 'ꂶꁿ',
        explain: '竹捆',
        pronunciation: 'max nba',
        sentence_yi: 'ꂶꁿꌕꂷ',
        sentence_zhong: '三个竹捆',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/zhukun.jpg?sign=e8b93c1054f8d20229e4d1c42b94512a&t=1589541316'
      }, {
        letter: 'ꑅꍓꎸꁿ',
        explain: '切肤割肉',
        pronunciation: 'njyx zhe she nba',
        sentence_yi: 'ꊿꌌꑅꍓꎸꁿ',
        sentence_zhong: '受尽折磨',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/shoujinzhemo.jpg?sign=84c4a219247d6eb2149ce03b3c9d7b34&t=1589541337'
      }, {
        letter: 'ꂁꄉꁿꄉ',
        explain: '秘密',
        pronunciation: 'nbot da nba da',
        sentence_yi: 'ꂁꄉꁿꄉꈨꀋꉬ',
        sentence_zhong: '不是秘密',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: ''
      }, {
        letter: 'ꂘꑳ',
        explain: '教室',
        pronunciation: 'hmat yi',
        sentence_yi: 'ꂘꑳꈐꏭ',
        sentence_zhong: '教室里面',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/jiaoshi.png?sign=c1cd57d34f631e2dc191791d51a80caa&t=1589541352'
      }, {
        letter: 'ꂀꑑꅉ',
        explain: '可怜',
        pronunciation: 'nbap njiep dde',
        sentence_yi: 'ꀉꑳꂀꑑꅉꍈ',
        sentence_zhong: '一个可怜的孩子',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/kelian.jpg?sign=36d6d04d03735a3152362d6fc1d82f58&t=1589541361'
      }, {
        letter: 'ꄯꒉꂘ',
        explain: '教书',
        pronunciation: 'tep yy hmat',
        sentence_yi: 'ꂘꃀꇬꊏꄯꒉꂘꇰ',
        sentence_zhong: '老师正在教书',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/jiaoshu.png?sign=936f0b7bf81383f52cb757cf6f31da90&t=1589541372'
      }, {
        letter: 'ꂙꃨ',
        explain: '杜鹃花',
        pronunciation: 'hmax vie',
        sentence_yi: 'ꂙꃨꀕꈍꀕ',
        sentence_zhong: '杜鹃花开了',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/dujuanhua.png?sign=ef310456f806033074d050835b37c5fb&t=1589541386'
      }, {
        letter: 'ꂚꈢꉘꁌ',
        explain: '玛果梁子(地名)',
        pronunciation: 'hma ggot hxo pu',
        sentence_yi: 'ꂚꈢꉘꁌꈩꁧ',
        sentence_zhong: '到玛果梁子去玩',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/maguoniangzi.jpg?sign=3a00ee3bc245f5b9189ce7262cec5f3b&t=1589541396'
      }, {
        letter: 'ꂛꊨ',
        explain: '父系兄弟',
        pronunciation: 'hmap zyt',
        sentence_yi: 'ꐴꂛꊨꂷꂘꃀꄻ',
        sentence_zhong: '我有个兄弟是教师',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/xiongdi.jpg?sign=e48d1a11a8e28b9933bc7ca8b4b6b4d5&t=1589541420'
      }, {
        letter: 'ꂛꊨꋊꃤ',
        explain: '家族成员',
        pronunciation: 'hmap zyt cyt vi',
        sentence_yi: 'ꂛꊨꋊꃤꏭꇇꀤ',
        sentence_zhong: '家族成员互相帮忙',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/jiazuchengyuan.jpg?sign=d231baeb9d0e432be92e875a9da93659&t=1589541432'
      }, {
        letter: 'ꀊꂵ',
        explain: '奶奶',
        pronunciation: 'a mat',
        sentence_yi: 'ꐴꀊꂵꀑꐎꀐ',
        sentence_zhong: '我的奶奶头发白了',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/nainai.jpg?sign=c63d5e9fa81eadf27bee4aaeba4e2f8b&t=1589541443'
      }, {
        letter: 'ꇓꂵ',
        explain: '石头',
        pronunciation: 'lur mat',
        sentence_yi: 'ꇓꂵꀉꒉꂷ',
        sentence_zhong: '一个大石头',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/dashitou.png?sign=c652e944d6ec553f2b6bf4887ce78622&t=1589541482'
      }, {
        letter: 'ꂶꏪ',
        explain: '竹林',
        pronunciation: 'max juo',
        sentence_yi: 'ꂶꏪꈬꇬ',
        sentence_zhong: '竹林深处',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/zhulin.jpg?sign=73a9e7355f6a70ec607611e961cdf24c&t=1589541495'
      }, {
        letter: 'ꂷꋐ',
        explain: '砍竹',
        pronunciation: 'ma zzit',
        sentence_yi: 'ꀉꄉꂷꋐꁧꀐ',
        sentence_zhong: '爸爸去砍竹了',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/kanzhu.png?sign=05e91de871bf3d6701e4f5afa284bbce&t=1589541511'
      }, {
        letter: 'ꂷꃅ',
        explain: '竹艺',
        pronunciation: 'ma mu',
        sentence_yi: 'ꋋꆹꂷꃅCꂷꉬ',
        sentence_zhong: '他的竹编手艺好',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/zhubian.jpg?sign=783e501ef3fccb499fc285d68bd3a20d&t=1589541520'
      }, {
        letter: 'ꂷꊂ',
        explain: '伤疤',
        pronunciation: 'ma wa',
        sentence_yi: 'ꇇꇬꂷꊂ',
        sentence_zhong: '手上的伤疤',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/shangba.jpg?sign=6b89eab07e740b6069638ccfc3436db4&t=1589541533'
      },{
        letter: 'ꂸꀮ',
        explain: '麻卜(草药名)',
        pronunciation: 'map bu',
        sentence_yi: 'ꂸꀮꆹꁬꋌꑵꉬ',
        sentence_zhong: '麻卜是一种创伤药',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/mabu.png?sign=11e98df4c071ab6e0838cbbfd68109e5&t=1589541541'
      }, {
        letter: 'ꂸꆸꀮ',
        explain: '圆润',
        pronunciation: 'map lix bu',
        sentence_yi: 'ꇓꂵꂸꆸꀮꅍꑠꂷ',
        sentence_zhong: '一个圆润的石头',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/yuanrun.jpg?sign=46ddfa8ae4ebcb3922227319506c3974&t=1589541555'
      }, {
        letter: 'ꅥꋒꅰꋒꊪ',
        explain: '软硬兼施',
        pronunciation: 'ndup zzi hnat zzi zy',
        sentence_yi: 'ꇬꏭꅥꋒꅰꋒꊪ',
        sentence_zhong: '对其软硬兼施',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/ruanyinjianshi.png?sign=0057dd57eb07b47344f50b3d9bf65341&t=1589541566'
      }, {
        letter: 'ꑻꅰ',
        explain: '阉羊',
        pronunciation: 'yuo hnat',
        sentence_yi: 'ꑻꅰꀊꐎꂷ',
        sentence_zhong: '一只白阉羊',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/yanyang.jpg?sign=718601eb35452967c4eb1fcd65c7542b&t=1589541576'
      }, {
        letter: 'ꅰꌋ',
        explain: '太阳穴',
        pronunciation: 'hnat si',
        sentence_yi: 'ꅥꅰꌋꇬꄀ',
        sentence_zhong: '打在太阳穴上',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/taiyangxue.png?sign=1c03c24a0be71ffcf062c67bd9918892&t=1589541588'
      }, {
        letter: 'ꅱꈻꅲꊨ',
        explain: '再三追问',
        pronunciation: 'hnax mgo hna zyt',
        sentence_yi: 'ꅱꈻꅲꊨꅍ',
        sentence_zhong: '追问不休',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/zaisanzhuiwen.jpg?sign=9968eee455bbd13bd7230ffa58d90e9d&t=1589541603'
      }, {
        letter: 'ꅲꇢ',
        explain: '印堂',
        pronunciation: 'hna gat',
        sentence_yi: 'ꅲꇢꁨꐥꀕ',
        sentence_zhong: '印堂发亮',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/%E5%8D%B0%E5%A0%82.jpg?sign=65de691b15ddd22f8fb5936fd347597b&t=1589541709'
      }, {
        letter: 'ꅲꄉ',
        explain: '听着',
        pronunciation: 'hna da',
        sentence_yi: 'ꆏꑴꌠꅲꄉꂸ',
        sentence_zhong: '请你听着',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/tingzhe.png?sign=69325ecb421bf4a91bf374b481bc5136&t=1589541739'
      }, {
        letter: 'ꅲꐡ',
        explain: '缺口',
        pronunciation: 'hna jjuo',
        sentence_yi: 'ꀊꏢꅲꐡꁬ',
        sentence_zhong: '有缺口的一个筛子',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: ''
      }, {
        letter: 'ꅳꍩ',
        explain: '枪',
        pronunciation: 'hnap chot',
        sentence_yi: 'ꅳꍩꋬ',
        sentence_zhong: '一支枪',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/qiang.png?sign=993962c83fc54a1b2adc186c460a9dcf&t=1589541804'
      }, {
        letter: 'ꇢꇑ',
        explain: '锅庄',
        pronunciation: 'gat lup',
        sentence_yi: 'ꇢꇑꌕꂷ',
        sentence_zhong: '三个锅庄',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/guozhuang.png?sign=546731ef90d3a0b746b7e8d416597559&t=1589541822'
      }, {
        letter: 'ꇢꊭ',
        explain: '中间',
        pronunciation: 'gat zyr',
        sentence_yi: 'ꇢꊭꇬ',
        sentence_zhong: '在中间',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/zhongjian.jpg?sign=ad2a9a22737717973b21e27527a24bfa&t=1589541836'
      }, {
        letter: 'ꋚꇢ',
        explain: '馋嘴',
        pronunciation: 'zza gat',
        sentence_yi: 'ꀉꑳꋚꇢꂷ',
        sentence_zhong: '一个馋嘴孩',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/chanzui.png?sign=8beb01221443731d29e4fcf22dde946a&t=1589541849'
      },{
        letter: 'ꇣꋲ',
        explain: '奇特',
        pronunciation: 'gax nzie',
        sentence_yi: 'ꁬꇣꋲꁧ',
        sentence_zhong: '一棵奇特的草',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/qite.jpg?sign=cfd24daf5ce840040130f69e132cab39&t=1589541863'
      },{
        letter: 'ꇣꑐ',
        explain: '火钳',
        pronunciation: 'gax nyie',
        sentence_yi: 'ꇣꑐꊏ',
        sentence_zhong: '一把火钳',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/huoqian.png?sign=133c1d7d8ea9afe49a509ce3a3edae05&t=1589541875'
      },{
        letter: 'ꇣꋦ',
        explain: '庄稼',
        pronunciation: 'gax zzur',
        sentence_yi: 'ꇣꋦꉘꁇꁉ',
        sentence_zhong: '庄稼长势好',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/zhuangjia.png?sign=58113d39c84711eeb68ddc1bb3c7cb22&t=1589541887'
      },{
        letter: 'ꇤꁦꇉ',
        explain: '火塘边',
        pronunciation: 'ga bbox lo',
        sentence_yi: 'ꇤꁦꇉꑌ',
        sentence_zhong: '坐在火塘边',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/huotang.png?sign=4a71f8c42e48e0de952f0cbbaaf1594a&t=1589541899'
      },{
        letter: 'ꇤꐳ',
        explain: '快速',
        pronunciation: 'ga nji',
        sentence_yi: 'ꇤꐳꃅꁧ',
        sentence_zhong: '快速地走',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/kuaisu.jpg?sign=284a27e9069e8fcf7b24e7486ae15490&t=1589541909'
      },{
        letter: 'ꇥꀯ',
        explain: '干部',
        pronunciation: 'gap bup',
        sentence_yi: 'ꇩꏤꇥꀯ',
        sentence_zhong: '国家干部',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/guojiaganbu.png?sign=48004d1dc420decb58f541846bf713ed&t=1589541923'
      },{
        letter: 'ꇥꀥꈿ',
        explain: '争先',
        pronunciation: 'gap bot mgep',
        sentence_yi: 'ꇥꀥꈿꄉꃅ',
        sentence_zhong: '争着做',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/zhenzhezuo.jpg?sign=8dce047c602fccbf5f633b73fbec9005&t=1589541934'
      },{
        letter: 'ꇥꁠ',
        explain: '开朗',
        pronunciation: 'gap bba',
        sentence_yi: 'ꀉꐔꇥꁠꂷ',
        sentence_zhong: '一位开朗的姑娘',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/%E5%BC%80%E6%9C%97.png?sign=58f5ffcc6bdf925f83e1edc071f38303&t=1589541951'
      },{
        letter: 'ꈳꏦ',
        explain: '规矩',
        pronunciation: 'mgax jie',
        sentence_yi: 'ꈳꏦꍬ',
        sentence_zhong: '遵守规矩',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/guiju.png?sign=54052fa324e26b3797bde04beffae3e0&t=1589541966'
      },{
        letter: 'ꈳꐥ',
        explain: '通达',
        pronunciation: 'zza',
        sentence_yi: 'mgax jjo',
        sentence_zhong: '事情顺利',
        isCollected: false,
        isKnew: false,
        audio_word: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E8%82%9A%E5%AD%90.mp3?sign=b000065a6a576b9ea9db375ca054a651&t=1584865067',
        audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word_audio/%E6%88%91%E8%82%9A%E5%AD%90%E9%A5%BF%E4%BA%86.mp3?sign=01fdd1107e85d8bd0f1696ddbb95a0e1&t=1584865073',
        image: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/word/tongda.jpg?sign=9dacae5f25ffa93f93272e0af23c0e2c&t=1589541984'
      },
      ],

    dialogue: [{
      sentence: 'ꄹꃥꇁꀐ',
      explain: '客人来了',
      pronunciation: 'ddip vip la',
      structure: '主谓结构',
      illustration: '主语是谓语动作、行为的发出者，是“施事”',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E5%AE%A2%E4%BA%BA%E6%9D%A5%E4%BA%86.m4a?sign=51708d509e26d1c1ccf0d10eef1efb99&t=1611827563',
      image: ''
    },
    {
      sentence: 'ꋌꁧꀐ',
      explain: '他走了',
      pronunciation: 'cy bbo ox',
      structure: '主谓结构',
      illustration: '主语是谓语动作、行为的发出者，是“施事”',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E4%BB%96%E8%B5%B0%E4%BA%86.m4a?sign=09068a21c16f4e942e4b1c5325ac9f9f&t=1611827574',
      image: ''
    },
    {
      sentence: 'ꂷꉐꐛꀐ',
      explain: '下雨了',
      pronunciation: 'ma hxa jjip ox',
      structure: '主谓结构',
      illustration: '主语是谓语动作、行为的涉及者，是“受事”',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E4%B8%8B%E9%9B%A8%E4%BA%86.m4a?sign=5f44c33232259de1bfbc9679d35b01fb&t=1611827583',
      image: ''
    },
    {
      sentence: 'ꉢꁱꂷꁱꐺ',
      explain: '我在写字',
      pronunciation: 'nag bbur ma bbur njuo',
      structure: '宾动结构',
      illustration: '宾语在前，谓语动词在后',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E6%88%91%E5%9C%A8%E5%86%99%E5%AD%97.m4a?sign=107b0ffc3b20eb00581d9c1af89442e0&t=1611827591',
      image: ''
    },
    {
      sentence: 'ꈀꄸꆈꌠꁱꂷꆏꂘ',
      explain: '谁教你彝语',
      pronunciation: 'kax ddi no su bbu ma ne hmat',
      structure: '宾动结构',
      illustration: 'ꆈꌠꁱꂷ“彝文”为直接宾语，在前；ꆏ“你”为间接宾语，在后',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E8%B0%81%E6%95%99%E4%BD%A0%E5%BD%9D%E8%AF%AD.m4a?sign=2874ade1d26c068acdbdc1bcd0111011&t=1611827614',
      image: ''
    },
    {
      sentence: 'ꋌꅉꀕꃅꇁ',
      explain: '他常常来',
      pronunciation: 'ci dde dde mu la',
      structure: '偏正结构',
      illustration: '谓语动词前面加状语，组成偏正结构。动词为中心语，副词往往作为状语，起修饰、描写中心语功能',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E4%BB%96%E5%B8%B8%E5%B8%B8%E6%9D%A5.m4a?sign=e256dd6623808ea91367dc1d9d947c43&t=1611827629',
      image: ''
    },
    {
      sentence: 'ꆏꁧꑎꇨꀐ',
      explain: '你走的太迟了',
      pronunciation: 'ne bbo nyt go ox',
      structure: '动补结构',
      illustration: '谓语动词后可以有动词、形容词或副词作补语，对前面动作行为的结果、趋向加以 说明、补充',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E4%BD%A0%E8%B5%B0%E7%9A%84%E5%A4%AA%E8%BF%9F%E4%BA%86.m4a?sign=a00a0f2c501f9d026b0c0d4e7a82a63b&t=1611827638',
      image: ''
    },
    {
      sentence: 'ꉪꀐꀃꑍꀛꐁꌋꆀꑵꉙꑵ',
      explain: '我们今天又唱歌又跳舞',
      pronunciation: 'njop ox ip nyip bix chi si nip yiet hxop yiet',
      structure: '并列关系',
      illustration: '谓语由两个以上动词组成并列关系',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E6%88%91%E4%BB%AC%E4%BB%8A%E5%A4%A9%E5%94%B1%E6%AD%8C%E5%8F%88%E8%B7%B3%E8%88%9E.m4a?sign=e400444348ccf3d30c19e571f931f95a&t=1611827652',
      image: ''
    },
    {
      sentence: 'ꋌꅇꂷꋋꇬꈨꇈꒉꀐ',
      explain: '他听了这句话就笑了',
      pronunciation: 'ci ddop ma cix go gge lox yy ox',
      structure: '并列关系',
      illustration: '谓语两个以上动词表示先后或连续发生的动作、行为等',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E4%BB%96%E5%90%AC%E5%88%B0%E8%BF%99%E5%8F%A5%E8%AF%9D%E5%B0%B1%E7%AC%91%E4%BA%86.m4a?sign=06b98540d95768391cfe8905c39ca33f&t=1611827661',
      image: ''
    },
    {
      sentence: 'ꉢꆿꒉꍔꃝꄉꅝꆹ',
      explain: '我去倒杯茶喝',
      pronunciation: 'nga lat ri zhep ndo fur fur da li',
      structure: '补充关系',
      illustration: '谓语两个以上动词，后面的动词为前面动词动作、行为的补充',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E6%88%91%E5%8E%BB%E5%80%92%E6%9D%AF%E8%8C%B6%E5%96%9D.m4a?sign=bcd038ce0dd6347d592a137b7a421909&t=1611827671',
      image: ''
    },
    {
      sentence: 'ꃾꃿꋋꀮꎔꐯꎔ',
      explain: '这朵花很美丽',
      pronunciation: 'vyrx vyr cix bu nrat jjy nrat',
      structure: '主谓结构',
      illustration: '主语是谓语陈述、描述的对象，并且以形容词作谓语',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E8%BF%99%E6%9C%B5%E8%8A%B1%E5%BE%88%E7%BE%8E%E4%B8%BD.m4a?sign=078e5968006cf1d7d7c6133cdd34f059&t=1611827684',
      image: ''
    },
    {
      sentence: 'ꉢꆹꆈꌠꆎꆹꉌꈲ',
      explain: '我是彝族，你是汉族',
      pronunciation: 'ngax li nuo su nex li hxi mgat',
      structure: '体词谓语句',
      illustration: '名词、代词、数量词总称为体词，以体词为谓语的句子称体词谓语句，谓语体词与句首的主语一起构成主谓结构',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E6%88%91%E6%98%AF%E5%BD%9D%E6%97%8F%EF%BC%8C%E4%BD%A0%E6%98%AF%E6%B1%89%E6%97%8F.m4a?sign=ad238f300f9f0cf8406daf1affba1d7a&t=1611827692',
      image: ''
    },
    {
      sentence: 'ꀉꑳꋋꂷꆹꇭꀧꃪꐯꃪ',
      explain: '这个小孩身体很好',
      pronunciation: 'ax rix cix ma li gop bo vat rri vat',
      structure: '主谓谓语句',
      illustration: '以主谓结构作谓语的句子称主谓谓语句',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E8%BF%99%E4%B8%AA%E5%B0%8F%E5%AD%A9%E8%BA%AB%E4%BD%93%E5%BE%88%E5%A5%BD.m4a?sign=15a3f11757e621f2dfd10251ed2fbe5c&t=1611827714',
      image: ''
    },
    {
      sentence: 'ꄯꒉꋌꋐꉢꀘꋺ',
      explain: '这本书我读过',
      pronunciation: 'tep ri ci zzit nga bi nzox',
      structure: '主谓谓语句',
      illustration: '以主谓结构作谓语的句子称主谓谓语句,此句具体为主 定 谓（由主谓构成）',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E8%BF%99%E6%9C%AC%E4%B9%A6%E6%88%91%E8%AF%BB%E8%BF%87.m4a?sign=2579c21d74eab05a1534c2a1afb39674&t=1611827726',
      image: ''
    },
    {
      sentence: 'ꋚꋋꈨꄻꀉꑳꍈ',
      explain: '这些饭给孩子吃',
      pronunciation: 'zza ci gge ddi ax ri zha',
      structure: '主谓结构',
      illustration: '主语是受事，是被动者，受谓语动词所表现行为动作的影响。此时谓语东此次更或有声母辅音浊变清，，或有声调变化等屈折形式；或加ꇰ ꎻ ꁳ ꄻ ꎼ 等助词',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E8%BF%99%E4%BA%9B%E9%A5%AD%E7%BB%99%E5%AD%A9%E5%AD%90%E5%90%83.m4a?sign=8f8d43200921568b206e098d01da0f75&t=1611827736',
      image: ''
    },
    {
      sentence: 'ꋌꎷꆹꀐ',
      explain: '已经找他去了',
      pronunciation: 'ci shex li ox',
      structure: '主谓结构',
      illustration: '主语是受事，是被动者，受谓语动词所表现行为动作的影响。此时谓语东此次更或有声母辅音浊变清，，或有声调变化等屈折形式；或加ꇰ ꎻ ꁳ ꄻ ꎼ 等助词',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E5%B7%B2%E7%BB%8F%E6%89%BE%E4%BB%96%E5%8E%BB%E4%BA%86.m4a?sign=acee645c155b0dd3c54d6c41bc551896&t=1611827756',
      image: ''
    },
    {
      sentence: 'ꉪꊇꌤꃅꌠꉬꒉꄸ',
      explain: '因为我们是工作者',
      pronunciation: 'ngop w*ox sit mu yy ddi ',
      structure: '复合句',
      illustration: '加入因果',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E5%9B%A0%E4%B8%BA%E6%88%91%E4%BB%AC%E6%98%AF%E5%B7%A5%E4%BD%9C%E8%80%85.m4a?sign=688f790586af5a988856776ee741ecf0&t=1611827767',
      image: ''
    },
    {
      sentence: 'ꀋꄸꄷꌤꐥꑲꆏ',
      explain: '如果有事情',
      pronunciation: 'zzi hne a ddi ddix sit zzo',
      structure: '复合句',
      illustration: '加入因果',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E5%A6%82%E6%9E%9C%E6%9C%89%E4%BA%8B%E6%83%85.m4a?sign=baa798240682983818f63be4957a2772&t=1611827779',
      image: ''
    },
    {
      sentence: 'ꉪꊈꇫꃅ',
      explain: '我们就要做',
      pronunciation: 'yix ne ngo wo gox mu',
      structure: '陈述句',
      illustration: '对一件事情进行陈述',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E6%88%91%E4%BB%AC%E5%B0%B1%E8%A6%81%E5%81%9A.m4a?sign=9145e70a7bea8bbdfdff2cf76f4139cf&t=1611827788',
      image: ''
    },
    {
      sentence: 'ꀋꄸꄷꋌꀋꇁꇬꆹ',
      explain: '如果他不来',
      pronunciation: 'ap ddi ddix ci a la go li',
      structure: '复合句',
      illustration: '加入因果',
      isCollected: false,
      isKnew: false,
      audio_sentence: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E5%A6%82%E6%9E%9C%E4%BB%96%E4%B8%8D%E6%9D%A5.m4a?sign=488f8efbeb9a6543251e4de17dcb64f4&t=1611827858',
      image: ''
    },
    {
      sentence: 'ꉢꌤꀋꐥꑴꇬꉢꄡꇗꇬꀋꇁꌠ',
      explain: '我虽然没事，我也不会来',
      pronunciation: 'nga syt ap jjo yip go nga tat lyp go ap la su',
      structure: '复合句',
      illustration: '前后递进，后一句是对前一句的更深层次的描述',
      isCollected: false,
      isKnew: false,
      audio_sentence: ' https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/dialogue_audio/%E6%88%91%E8%99%BD%E7%84%B6%E6%B2%A1%E4%BA%8B%EF%BC%8C%E6%88%91%E4%B9%9F%E4%B8%8D%E4%BC%9A%E6%9D%A5.m4a?sign=43a5921dc5f58043e73cbfdff136d868&t=1611827805',
      image: ''
    },
    {
      sentence: 'ꆿꒉꅝ',
      explain: '请喝茶',
      pronunciation: 'iat yy ndo ',
      structure: '祈使句',
      illustration: '用于表达命令、请求、劝告、警告、禁止等的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꀂꄁ ꒈꋌ ꎔꃅꄉ ꈚ',
      explain: '把上衣洗干净的穿',
      pronunciation: 'i dix yyx cy nrat mu da ggat',
      structure: '祈使句',
      illustration: '用于表达命令、请求、劝告、警告、禁止等的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꎃꊐꌗꉻꁌ',
      explain: '代数式的值',
      pronunciation: 'rrop zip sot ho pu',
      structure: '主宾短句',
      illustration: '用于后面的宾语用来解释前面的主语',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꎃꊐꌗꉻꑵꁸ',
      explain: '代数式的分类',
      pronunciation: 'rrop zip sot ho yiet nbi',
      structure: '主宾短句',
      illustration: '用于后面的宾语用来解释前面的主语',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꎃꊐꌗꉻꀋꎪꆌ',
      explain: '代数式的恒等',
      pronunciation: 'rrop zip sot ho ap nryr no',
      structure: '主宾短句',
      illustration: '用于后面的宾语用来解释前面的主语',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꎃꊐꌗꏦ',
      explain: '代数运算',
      pronunciation: 'rrop zip sot jie',
      structure: '主宾短句',
      illustration: '用于后面的宾语用来解释前面的主语',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꆏꉾ ꀞ',
      explain: '你好吗',
      pronunciation: 'ne he bat',
      structure: '疑问句',
      illustration: '按照句子的语气分出来的一个类，是问一些事情的，表达的内容并不是陈述，所以是不确定的',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꆏ ꑞꂓ',
      explain: '你叫什么名字',
      pronunciation: 'ne xix hmi',
      structure: '疑问句',
      illustration: '按照句子的语气分出来的一个类，是问一些事情的，表达的内容并不是陈述，所以是不确定的',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꆏ ꑮꒃꋑꋉ ꀐꀞ',
      explain: '你结婚了吧',
      pronunciation: 'ne xyp yu zzix cur ox bat',
      structure: '疑问句',
      illustration: '按照句子的语气分出来的一个类，是问一些事情的，表达的内容并不是陈述，所以是不确定的',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꆍ ꀁꇬ ꊿ ꑞꈨ ꐥ',
      explain: '你家里有些什么人',
      pronunciation: 'ne ix go co xix gge jjo',
      structure: '疑问句',
      illustration: '按照句子的语气分出来的一个类，是问一些事情的，表达的内容并不是陈述，所以是不确定的',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꆏ ꎼꈎ ꈍꑋꈓ ꀐ',
      explain: '你今年多大岁数',
      pronunciation: 'ne shu kut kep nyix kur ox',
      structure: '疑问句',
      illustration: '按照句子的语气分出来的一个类，是问一些事情的，表达的内容并不是陈述，所以是不确定的',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꉪꊈꇁꀐ',
      explain: '我们毕业了',
      pronunciation: 'njop wo ia ox',
      structure: '感叹句',
      illustration: '表示喜怒哀乐等强烈情感的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꋓꉪꁨꄉ ',
      explain: '请小心',
      pronunciation: 'zzip ngop bbop da',
      structure: '祈使句',
      illustration: '用于表达命令、请求、劝告、警告、禁止等的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꌌꉪꄉ ',
      explain: '请注意',
      pronunciation: 'sip ngop da',
      structure: '祈使句',
      illustration: '用于表达命令、请求、劝告、警告、禁止等的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꇫꑌ',
      explain: '请坐',
      pronunciation: 'gox nyi',
      structure: '祈使句',
      illustration: '用于表达命令、请求、劝告、警告、禁止等的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꑍꊐꅂꆹ',
      explain: '请上二楼',
      pronunciation: 'nyip zip dduo ii',
      structure: '祈使句',
      illustration: '用于表达命令、请求、劝告、警告、禁止等的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
{
      sentence: 'ꀀꌒꅊꇈ',
      explain: '祝愿睡好',
      pronunciation: 'it sa ddep iox',
      structure: '祈使句',
      illustration: '用于表达命令、请求、劝告、警告、禁止等的句子',
      isCollected: false,
      isKnew: false,
      audio_sentence: '',
      image: ''
    },
    ],

    article: [{
      title: '尔比尔节',
      num: '选段1',
      letter: 'ꉛꂿꉛꇖ，ꉛꀋꍣꁯꄸꇖ',
      explain: '见鱼要鱼，没鱼要虫',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%821.m4a?sign=4e2f39fd726b847adc47280f35a4c22c&t=1586100615',
      meaning: '跟别人要鱼，不如要虫当诱饵自己学钓鱼',
      isCollected: false,
      isKnew: false
    },  {
      title: '尔比尔节',
      num: '选段2',
      letter: 'ꊊꅉꆹꀋꌺ，ꀋꊋꅉꇬꌕꇇꄅ',
      explain: '遇强失勇猛，遇弱三连欺',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%822.m4a?sign=40cea5e782778ea5091ec4685c1e7b10&t=1586100668',
      meaning: '遇到比自己强的人就退缩，遇到比自己弱的人就去欺负他。讽刺恃强凌弱的人。',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段3',
      letter: 'ꇇꇐꇇꀋꀤ，ꈁꊂꉂꀋꋌ',
      explain: '财力不支撑，说话无人听',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%823.m4a?sign=9b37b13f6854eb5d63cd06c24681b229&t=1586100694',
      meaning: '一个人做不到经济独立，说的话也没有人听',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段4',
      letter: 'ꇬꇉꅇꄸꑌ，ꎧꅸꅊꁧꅐ',
      explain: '心中藏恶言，被酒驱出口',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%824.m4a?sign=d16bcb05f9a83c1bd83d1c558eb2b813&t=1586100728',
      meaning: '人藏在心中的邪念总有一天会被在酒后说出来。教导人们做人做事要坦荡',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段5',
      letter: 'ꌞꌺꀨꀋꎹ，ꀀꌺꐋꀋꊌ',
      explain: '别人孩子不关照，自己孩子无朋友',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%825.m4a?sign=cda2caadebcbd965705dc9be1ebb1a50&t=1586100751',
      meaning: '在抚育自己小孩的时候也要会关心别人的孩子，与“幼吾幼以及人之幼”含义类似',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段6',
      letter: 'ꀀꏣꈀꁹꃅꈋꁨꇉꇉ，ꀀꐚꈀꁹꃅꈋꆈꋧꋪ',
      explain: '亲友所在之处明朗朗，敌人所在之处漆黑黑',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%826.m4a?sign=7c4868ceb6c1a627fc116319c9e9466e&t=1586100776',
      meaning: '警示人们在生活中多交朋友，少树立敌人',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段7',
      letter: 'ꃰꊿꏣꑟꉘꇉꁹ，ꀊꑙꌩꁧꉘꇉꁹ',
      explain: '猴靠树林生存，人靠亲戚生活',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%827.m4a?sign=c7c16097e7850f9082e4b545a73264a6&t=1586100800',
      meaning: '猴子在树林中才能活下去，人要和亲戚多交往才能有和谐的生活',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段8',
      letter: 'ꆿꅪꐭꒉꆹꑭꐨ，ꃰꊿꐭꒉꆹꑌꇐ',
      explain: '看虎大小看足印，看人贵贱看人品',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%828.m4a?sign=d5156df44c53915ee124fcce61d1aaf6&t=1586100818',
      meaning: '提醒后人，人最重要的人品，不能通过别人的权力大小和财富地位随意评判别人',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段9',
      letter: 'ꇢꌠꋙꍈꇿ，ꌤꌠꒉꄎꇿ',
      explain: '嘴馋者给食吃，口渴者给水喝',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%829.m4a?sign=88ff1af154bc0aa46178be3d69f39777&t=1586100842',
      meaning: '教导后人有怜悯之心，乐于助人',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段10',
      letter: 'ꇵꅐꀇꐒꅐ，ꌗꅐꃅꆳꅐ',
      explain: '劳动出汗只是出点水，干活喘气不过吹口风',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8210.m4a?sign=204ff9bc8e86a0c590ea5ccda51683b6&t=1586100865',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段11',
      letter: 'ꈚꌺꋊꐥ，ꎭꌺꍔꀋꐥ',
      explain: '富人无富根，穷人无穷种',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8211.m4a?sign=7cf63a8d0a11d21041d4f9eb4e770ed9&t=1586100885',
      meaning: '人贫困与否不是由命决定的，无论穷人还是富人都需要勤劳工作',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段12',
      letter: 'ꇛꌺꃴꎆꋠ，ꏦꈜꈬꏢꏆ；ꐕꈭꃴꎆꋠꋯꁧꈬꁍꏆ',
      explain: '官员若受贿，玷污九条街；德古若受贿，玷污参议者',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8212.m4a?sign=f1d0eeeace563b69c889692e66336902&t=1586100924',
      meaning: '警示后人做官要清正廉洁',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段13',
      letter: 'ꇢꄸꈌꏖꎸꋠ，ꈌꏖꇢꂸꋌ；ꎭꄸꅪꃵꋠ，ꁺꁌꎆꂸꌗ',
      explain: '嘴馋吃狗狗肉不解谗，贫穷嫁女聘礼不富人',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8213.m4a?sign=75becee4cb3c1410d2383437371b1840&t=1586100945',
      meaning: '要学会从根本解决问题，吃狗肉、用女儿换聘礼都不能永远摆脱贫穷',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段14',
      letter: 'ꈁꊂꈬꄅꎮ，ꆧꁨ꒔ꄀꎮ',
      explain: '言语穿九层，武力透一层',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8214.m4a?sign=1c33d035166c86cfb0a40db6ababc4ae&t=1586100966',
      meaning: '有道理的话比暴力更有说服力，与“君子动口不动手”含义相同',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段15',
      letter: 'ꈌꃅꌕꈎꉆꀋꈹ，ꉆꄓꈌꂱꑽ；ꀉꑐꌕꈎꉌꒃ，ꉌꄓꑐꑬꃝ',
      explain: '猎狗三年不狩猎，猎物大胆舔狗嘴；家猫三年不捉鼠，老鼠大胆挠猫脚',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8215.m4a?sign=d359180ce2cc4f3575e5cd1f84f004ef&t=1586100984',
      meaning: '教导人不能忘记自己的本职工作，否则将无立足之地',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段16',
      letter: 'ꇰꌠꎧꂿꑳ，ꑳꌠꎧꂿꁍ',
      explain: '嘴笨者遇酒则机智，聪明者遇酒则糊涂',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8216.m4a?sign=fbe0a9173efd6f53fc258d346949a51e&t=1586101004',
      meaning: '酒既能成事也能误事，喝酒应该适量不宜贪杯',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段17',
      letter: 'ꂮꌠꐮꉈꁒ，ꎭꌠꐮꉌꈪ',
      explain: '饿过者相怜，贫过者互惜',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8217.m4a?sign=57ac48b5c275c20e97bdc6d71737c70b&t=1586101035',
      meaning: '有过相同经历的人才会对自己的遭遇感同身受',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段18',
      letter: 'ꂮꑍ꒔ꐚꍈꌠ，ꀋꎺꑍꐥ；ꈠꑍ꒔ꃢꇢꌠ，ꀋꎺꆪꀋꐥ',
      explain: '饥饿时供饭者日日记于心，寒时添衣者月月暖于心',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8218.m4a?sign=9b7e2b78075d5e7e1cd0b57f77991c49&t=1586101053',
      meaning: '主动帮助遇到困难的人，别人会铭记于心',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段19',
      letter: 'ꂴꄸꃥꇁꏦ，ꊁꆏꃥꁧꏦ',
      explain: '先怕客人来，后怕客人走',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8219.m4a?sign=df94a67727dbda30417ed8a8dbf6e971&t=1586101076',
      meaning: '客人来之前怕准备不周，客人走之后怕客人没有尽兴。体现了彝族人的好客之情',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段20',
      letter: 'ꂴꐊꑌꑊꏦ，ꊁꐊꑌꈌꏦ',
      explain: '走在前面害羞，走在后面怕狗',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8220.m4a?sign=12ac0f3bb44c98f59ef8ea68b3166c3a&t=1586101090',
      meaning: '前怕狼后怕虎，讽刺做事畏手畏脚的人',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段21',
      letter: 'ꃄꄸꀉꑐꌡ，ꋟꆏꆿ꒜ꌡ',
      explain: '做事如猫，吃饭如虎',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8221.m4a?sign=034889f4166dd0b30a17340095994d7e&t=1586101111',
      meaning: '讽刺好吃懒做的人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段22',
      letter: 'ꃆꄔꅛꋺꇤꋯꀋꒉ，ꆿ꒜ꑝꋻꆸꈈꀋꆹ',
      explain: '被火烧过不见火塘，被狼咬过不近森林',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8222.m4a?sign=c5f0bf3687cb982f7d8caaa95704ede5&t=1586101133',
      meaning: '一旦受过伤害就对类似的事物充满恐惧，与“一朝被蛇咬十年怕井绳”含义相同',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段23',
      letter: 'ꂽꄓꀃ꒜ꈢꌠꉈꀋꌦ，ꍿꈹꈀꆽꁏꌠꉈꀋꌦ',
      explain: '出征肚疼心不服，追贼脚扭心不甘',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8223.m4a?sign=339b42a846d0293cb65497688150d107&t=1586101150',
      meaning: '做事前应做好准备，若因为其他因素导致事情失败会让人遗憾',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段24',
      letter: '꒜ꌠꌦꀋꐒ，ꇓꂃꇀꆏꁈ；ꌟꈄꌦꀋꏦ，ꌉꈿꁾꇓꎹ',
      explain: '老人自言不怕死，遇上滚石要跑路；英雄自言不怕死，上了战场寻掩护',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8224.m4a?sign=5bc48e423cdba0f8098e1bab19a5e5ab&t=1586101165',
      meaning: '做事不能只有勇气没有计谋，要讲究策略',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段25',
      letter: 'ꃬꅇꉉꏬꒊꒉ，ꑿꅇꉉꆿꒊꒉ',
      explain: '鸡说话鹰觉得好笑，羊说话狼觉得好笑',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8225.m4a?sign=93c828081242cbe5a3277b972a496604&t=1586101181',
      meaning: '人总是会被比自己能力强的人看不起',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段26',
      letter: 'ꃮꌉꇔꇷꀋꐥ，ꃮꎸꀋꋠꂿꆎꅀ',
      explain: '没有杀猪匠，难道就不吃肉了吗',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8226.m4a?sign=c4a4b5e1631daf82d2922845062c78d2&t=1586101204',
      meaning: '要培养自己独立解决问题的能力，不能过分依赖别人',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段27',
      letter: 'ꅰꌠꊌꆏꉩꌠꊌ，ꌭꌠꊌꆐꑇꌠꊌ',
      explain: '有哄的就有哭的，有劝的就有闹的',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8227.m4a?sign=b837d6e18895007b32fe3c9eb8ae0e0a&t=1586101223',
      meaning: '哄和劝不能从根本上解决问题',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段28',
      letter: 'ꄢꈌꊰꂷꊿ꒔ꄎ，ꊾꈌ꒔ꂷ꒔ꀋꉆ',
      explain: '能封十个罐子口，一人之口难封住',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8228.m4a?sign=e05e608beba9ab79206f8db12424b765&t=1586101242',
      meaning: '与“悠悠众口，岂能尽封”含义类似',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段29',
      letter: 'ꅇꀋꉉꎲꀋꄏ，ꎝꀋꄍꇨꀋꃃ',
      explain: '不开腔不失言，不讨债不生气',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8229.m4a?sign=466da2650043fd0ed7ffc6366c748e9d&t=1586101257',
      meaning: '少说话就不会说错话，不主动讨债就不会惹自己生气',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段30',
      letter: 'ꆿ꒜ꐊꌠꉿꁵꑣ，ꀉꐩꐊꌠꎮꀨꉅ',
      explain: '跟随老虎吃肉块，跟随狐狸捡破烂',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8230.m4a?sign=da007533d6916558544384ec35799134&t=1586101273',
      meaning: '跟什么样的人做事就会变成什么样的人，与“近朱者赤近墨者黑”含义相同',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段31',
      letter: 'ꊨꊭꇉꐥꎔ，ꇇꒃꂦꁧꀕ',
      explain: '林间鸟儿多斑斓，捕入手中黯失色',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8231.m4a?sign=e8bc40361ec3ef270ee16d84a224f846&t=1586101290',
      meaning: '万物只有在自己原本的生活环境中才是最有魅力的，教导人不能因为一己私欲而捕杀动物',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段32',
      letter: 'ꊨꌠꀃꑍꉌꂵꉻ，ꊂꑋꉈꑟꈻ；ꅥꌠꀃꑍꇱꄓꆅ，ꊂꑋꇭꀧꌒ',
      explain: '今日忠言逆耳，明日想起暖心；今日挨打身体疼，明日行走少弯路',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8232.m4a?sign=541f9e5166ecb9eaf7ed26dc2e509ff9&t=1586101308',
      meaning: '与“良药苦口利于病，忠言逆耳利于行”含义相同',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段33',
      letter: 'ꉇꆹꐚꃅꏜ，ꑳꃹꃥꃅꆦ',
      explain: '在外当敌人斗争，进屋当客人对待',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8233.m4a?sign=efb12acae2e9e3a3082f84aee6b9e337&t=1586101322',
      meaning: '教导人们要心胸广阔',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段34',
      letter: 'ꉈꊋꄸꅇꉉ，ꂿꈬꆏꈍꈩ',
      explain: '知心才直言，情深才调侃',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8234.m4a?sign=a7537191e9144d4ffd09d1041afe3f92&t=1586101339',
      meaning: '把自己当关系好的人才会直接指出自己的问题',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段35',
      letter: 'ꉐꆈꈬꑍꋌꀋꐎ，ꇓ꒰ꈬꑍꏬꀋꂔ',
      explain: '乌鸦九天洗不白，石头九天煮不熟',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8235.m4a?sign=2e9ce9766740b4d9739cd1ae489cf509&t=1586101354',
      meaning: '与"江山易改本性难移"含义类似',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段36',
      letter: 'ꈏꋚꊿꀋꂊ，ꈏꎆꊿꀋꈚ，ꈐꃢꊿꀋꊸ',
      explain: '偷来之食不饱腹，盗来之财不致富，窃来之衣不保暖',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8236.m4a?sign=b2fdd90c5b03fe23d4d68aef3becea72&t=1586101370',
      meaning: '歪门邪道是不能从根本上解决问题的',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段37',
      letter: 'ꈌꃅꃷꇎꃮꀋꍀ，ꌟꃅꃷꇎꅇꀋꎹ',
      explain: '好狗不咬邻家猪，君子不与邻居吵',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8237.m4a?sign=830624d9737e8abb6bc21ed6309ee3a5&t=1586101385',
      meaning: '教导后人要与人为善，强调邻里和谐的重要性',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段38',
      letter: 'ꈌꌈꂫꀋꎴ，ꉏꉻꃅꀋꄜ，ꊾꇨꂫꀋꋦ',
      explain: '烈狗命不长，暴雨下不久，恶人命不好',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8238.m4a?sign=d3c1d9468359b03723a7b1c837713582&t=1586101401',
      meaning: '做人要与人为善，恶人会有恶报',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段39',
      letter: 'ꈛꎼꑭꑴꃅ，ꅇꉉꐋꑴꃅ',
      explain: '走路要顾脚，说话要顾友',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8239.m4a?sign=6bede9557b37ca7749b74003af15ac98&t=1586101418',
      meaning: '说话，做事情要顾全大局',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段40',
      letter: 'ꈐꋺꌠꇇꇙ，ꋠꋺꌠꈌꇙ',
      explain: '偷惯者手痒，吃惯者嘴痒',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8240.m4a?sign=e1ef4e91cb8295d99e7cd7a3b92942f8&t=1586101431',
      meaning: '形容人的本性难以改变',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段41',
      letter: 'ꈚꄸꑮ꒜ꉂ，ꎬꄸꀉꂿꉂ',
      explain: '富裕想美女，贫穷思妈妈',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8241.m4a?sign=bc975370a04b0f564f2d781768b17d46&t=1586101448',
      meaning: '讽刺饱暖思淫欲，只有在困难时想起自己亲人的人',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段42',
      letter: 'ꊾꇨꄸꇱꌒ，ꃅꇨꄸꋩꉔ',
      explain: '强人所难，灾旱不善',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8242.m4a?sign=c575831d60a38349f95d461a3aa8a115&t=1586101465',
      meaning: '喜欢为难别人的人，灾害也更容易找上门来',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段43',
      letter: 'ꊾꈌꆹꐍꈌ，ꐍꈌꇗꄃꀕ；ꊾꈌꏁꈌ，ꏁꈌꏁꌯꀕ',
      explain: '人口是银口，银子显稳重；人口是金口，黄金闪金光',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8243.m4a?sign=f7b2f7da3481609b2e2f21c552cbb992&t=1586101481',
      meaning: '说话顾全大局且说话算话的人会受到别人的尊重',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段44',
      letter: 'ꊾꊂꎭꑎꆹ，ꀀꄓꏜꀋꐰ',
      explain: '求助于人不如早起床',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8244.m4a?sign=5bbaeaa77b8ee5ddbc6c75095116f4e2&t=1586101494',
      meaning: '与其一味寻求别人帮助，不如自己努力解决问题',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段45',
      letter: 'ꋂꄃꋐꄃꆈꒉꈬꊂꇱꑌ，ꐔꇁꇏꀋꐥ；ꐍꋩꏁꋩꌿꆊꈬꊂꄀꑌ，ꎔꇁꇏꀋꑌ',
      explain: '盐巴海椒调理不了森林的味道，黄金白银装扮不了森林的美貌',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8245.m4a?sign=2d962342bb28555458187350d99417c9&t=1586101508',
      meaning: '强调自然环境的重要性和不可替代性，呼吁后人学会与自然和谐相处',
      isCollected: false,
      isKnew: false
    }, {
      title: '尔比尔节',
      num: '选段46',
      letter: '꒔ꇉꉐꐙ꒔ꇉꋌꀋꂿ，꒔ꇉꃅꇴ꒔ꇉꋌꀋꈨ ',
      explain: '这方下雨那方晴，这方打雷那方静',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8246.m4a?sign=94eedfbd59477d5094541688d6b5884f&t=1586101522',
      meaning: '不同地方的天气是不一样的',
      isCollected: false,
      isKnew: false
    }, 
     {
      title: '尔比尔节',
      num: '选段47',
      letter: 'ꊏꌠꀋꇨꐵꌠꇨ，ꅥꌠꀋꇨꇍꌠꇨ',
      explain: '假打比真打更吓人，躲闪比欺骗更伤人',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8247.m4a?sign=d6be2b3a37652be49601c44182063b85&t=1586101540',
      meaning: '教导后人待人真诚',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段48',
      letter: 'ꋙꈠꒈꀦꆏꀃ꒜ꆅ，ꃆꈠꑖꈠꀦꆏꊾꀑꈘ',
      explain: '吃冷菜冷饭肠胃痛，翻旧事旧案出人命',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8248.m4a?sign=d62f7854b5d21a0af38edaaa0341a150&t=1589460359',
      meaning: '教导后人不能拘泥于之前的恩怨，应该心胸宽广',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段49',
      letter: 'ꋧꃅꆅꇫꐆꀋꎹ，ꂿꃅꋓꇗꎝꀋꄍ',
      explain: '被染疾病不寻仇，天降暴雨不追债',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8249.m4a?sign=1d1683d830bd7a9528446abb05f0dda1&t=1589460398',
      meaning: '面对挫折应该顺其自然凭借自己的力量渡过，而不是一味责怪别人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段50',
      letter: 'ꋚꑌꀉꂿꍈꌠꉌꆐꀋꅑ，ꎆꎔꀑꑌꁵꌠꉌꂵꀋꆅ',
      explain: '做饭给妈妈吃不后悔，拿钱给舅舅用不心疼',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8250.m4a?sign=a8e7303ea24825e98da0962d4d3eb326&t=1589460412',
      meaning: '教导后人要尊敬长辈',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段51',
      letter: 'ꊾꂂꂷꆎꅇꂄꇬ，ꊿꄸꂷꄷꅇꄸꇬ',
      explain: '善人那里获善言，恶人那里获恶语',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8251.m4a?sign=3cbc309b3f2776c70466138821515a72&t=1589460425',
      meaning: '指客观环境对人有很大影响',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段52',
      letter: 'ꌕꋊꐮ꒜ꌺ，ꌺꇖꑙꌡ',
      explain: '三代连续通婚，后世亲如猴群',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8252.m4a?sign=123b78ae87ba68946c2e1bd1d8011216&t=1589460439',
      meaning: '描述以前彝族近亲结婚的现象（现在法律上是不允许近亲结婚的）',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段53',
      letter: 'ꊨꑍꊨꆹꐪ，ꊨꈌꅼꇻꀕ；ꂿꑍꂿꆹꐪ，ꂾꈌꎃꏅꀕ',
      explain: '锄地锄为重，锄得深又齐；犁地犁为重，犁得直又齐',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8253.m4a?sign=d36f40f2c8aaf11b78be9aac887bd64c&t=1589460458',
      meaning: '教导后人做事应该脚踏实地',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段54',
      letter: 'ꊁꇁꌠ꒔ꅇꄜ，ꊁꑌꌠ꒔ꅇꇱ',
      explain: '后到者多观点，无关者多议论',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8254.m4a?sign=58c8d6a6ef6f2979a4878bad778f96a8&t=1589460470',
      meaning: '讽刺做“事后诸葛亮”的人，提醒人们不要过多议论发生在别人身上的事',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段55',
      letter: 'ꊖꃴꀋꀨꅤ，ꊖꄩ꒰ꅪꃨ',
      explain: '地下挖土渣，地面结金果',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8255.m4a?sign=0b4ba8efb2e07e0d06a9bab86b4d4e3a&t=1589460482',
      meaning: '形容辛勤劳作的人最终会获得丰厚的回报',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段56',
      letter: 'ꊨꂿꃸꅉꃤꂿꋌꀋꃹ，ꀉꍸꃸꅉꈌꐎꋌꀋꃹ',
      explain: '锄头能进的地方斧头进不了，猫能进的地方狗进不了',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8256.m4a?sign=78493b1152cd39e826fc8a90fcb71995&t=1589460497',
      meaning: '所有事物都各自有各自的用途',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段57',
      letter: 'ꈥꀒꇓꀋꆷ，ꎼꀋꄓ，ꃅꀋꈯ，ꊀꀋꐔ',
      explain: '若无滚石落，鸟不飞，马不惊，鞍不毁',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8257.m4a?sign=4932e7b1281f691772d3db90d6655f8f&t=1589460510',
      meaning: '形容天下太平则风调雨顺',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num:'选段58',
      letter: 'ꈽꆏꋧꃅꈾ，ꅥꆏꌸꃅꅥ，ꉉꆏꐛꃅꉉ',
      explain: '嚼要细细嚼，打要瞄准打，说要说到理',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8258.m4a?sign=d993b5d557de6b10065bae836f906ff0&t=1589460528',
      meaning: '做事情要专注，不能一心二用',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段59',
      letter: 'ꉆꈹꁧꐧꀱꌠꈌꀋꉬ，ꍿꈹꈜꐧꀱꌠꌺꀋꉬ',
      explain: '追猎半路退缩的不是好狗，追贼半路返回的不是好汉',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8259.m4a?sign=442ceaa5fc0059b9fbdab3b9e6607fed&t=1589460542',
      meaning: '做人做事要持之以恒才能获得别人的尊重',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段60',
      letter: 'ꉉꀱꇐꀋꑌ，ꏬꀱꒉꀋꑭ',
      explain: '赘述则无趣，复煮汤不鲜',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8260.m4a?sign=197730eb710939fffeaacbcf233b0d85&t=1589460562',
      meaning: '做事情要干净利落，拖泥带水易误事',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段61',
      letter: 'ꉐꈇꇀꄮꉐꀋꐛ，ꆳꈇꇀꄮꆳꀋꁏ',
      explain: '求雨时雨不来，等风时风不吹',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8261.m4a?sign=fa4f9dee1fbc117f22d8f3d63922d6a3&t=1589460578',
      meaning: '当人们期盼一件事时，就会觉得等待的时间格外长',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段62',
      letter: 'ꉐꌦꃅꃴꃰ，ꊖꄩꁯꄸꑛ，ꃅꃴꄂꀋꅑ，ꊖꄩꁯꆮꃰ',
      explain: '天要下雨，地面蚯蚓爬；天要放晴，地面蝴蝶飞',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8262.m4a?sign=cf4d879b38c6fa20a309c3cedfec311e&t=1589460592',
      meaning: '描述天气将发生变化时的自然现象',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段63',
      letter: 'ꉗꋦ꒿ꋦ，ꑌꁨꑿꈚ，ꆿꁨꍮꋠ',
      explain: '有山有田，牲畜旺，仓廪实',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8263.m4a?sign=b74bfff7c9eab480c71e1d723b5adc72&t=1589460606',
      meaning: '描述自然耕作环境对人们生活的影响',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段64',
      letter: 'ꈛꄻꃅꋩꌒ，ꋑꋉꒉꌸꌒ',
      explain: '修路好骑马，搭桥易过河',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8264.m4a?sign=588a56afa2c81ad323cd46e5f3a21b36&t=1589460617',
      meaning: '教导后代要注重基础设施建设',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段65',
      letter: 'ꈝ꒜ꀉꆹꈜꀹ ꐽ，ꐋꀨꀉꆹꐋꉂꋌ',
      explain: '老路路面平，老友情谊深',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8265.m4a?sign=2b66a9b89a906010e40f3353ea41d0d8&t=1589460651',
      meaning: '与“衣不如新，人不如故”含义类似',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段66',
      letter: 'ꇬꇉꋌꀋꑌ，ꂱꀯꋌꄀꌌ',
      explain: '肚里没油荤，嘴上抹着油',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8266.m4a?sign=dde8681f0bef16945dde22cb93ad2a34&t=1589460696',
      meaning: '讽刺生活贫穷但装阔的人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段67',
      letter: 'ꈚ꒜ꎭꋒꃅ，ꁬꈬꐛꑿꐥ，ꎭ꒜ꈚꋒꃅ，ꇉꄩꇪꀮꐥ',
      explain: '实富装穷者，要数小蜜蜂，实穷装富者，要数布谷鸟',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8267.m4a?sign=ef57365d45c72ff138cf1213edffb349&t=1589460712',
      meaning: '提醒后人要向蜜蜂一样什么情况下都要辛勤劳作',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段68',
      letter: 'ꇂꁮꃪꐛꑌ，ꉌꂵꋋꈨꆅ；ꃬꊭꏬꌌꑌ，ꉌꂵꋋꈨꆅ',
      explain: '牛坠悬崖，心亦这般痛；小鸡鹰叼，心亦这般痛',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8268.m4a?sign=5f359f31e9be25e26fd845a78f91f820&t=1589460726',
      meaning: '只要是自己的东西，只要失去了，都会很难过',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段69',
      letter: 'ꇇꏸꀒꁨꄖ ，ꇇꊃꆈꉇꈷ',
      explain: '手指往前指，手肘往后蹭',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8269.m4a?sign=b0aee58b8a44c2cd283dfcf777577c58&t=1589460741',
      meaning: '当手指指着别人时，手肘是往后蹭的。提醒后人学会自省而不是一味指责别人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段70',
      letter: 'ꇓꂃꌕꑍꂂꂷꐥꀋꇮ，ꋒꐎꌕꑍꍬꏢꐥꀋꇮ',
      explain: '滚石滚不了三日，过桥过不了三天',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8270.m4a?sign=54f00994db65a27c54ca795857e488dc&t=1589460754',
      meaning: '无论遇到什么样的困境总会有拨云见日的一天',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段71',
      letter: 'ꇓꇨꀋꉬꎷꇨꂴꐥꇈ，ꀂꇨꀋꉬꌠꇨꀀꄩꀖ',
      explain: '石头坚硬哪知铁更硬，自认强大还遇更强者',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8271.m4a?sign=ab3c75a6c23088befd709608e9b5d552&t=1589460766',
      meaning: '即使自己有很强的能力也应该谦逊，人外有人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段72',
      letter: 'ꇔꇷꀉꑌꊌꅍꐔꄀ，ꅡꈭꀉꑌꃣꈌꀜꐡ',
      explain: '铁匠多了铁烧坏，德古多了纠纷乱',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8272.m4a?sign=697075f0573f47c52298dbd86540e9c3&t=1589460780',
      meaning: '铁匠多了就会把铁烧坏，法官多了判案时候会有更多的纠纷',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段73',
      letter: 'ꇥꉢꒉꈾꀋꏦ，ꈁꑓꃅꆳꀋꏦ，ꅡꈭꃆ꒧ꀋꏦ',
      explain: '喉咙不怕开水烫，脸蛋不怕大风吹，德古不怕纠纷起',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8273.m4a?sign=57021cf610ae49d352d3fdd0b0a975ce&t=1589460796',
      meaning: '世上各个事物都有自己擅长的方面',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段74',
      letter: 'ꇭꀧꇖꅒꀃ꒜ꊋꀋꄿ ，ꇇꑭꇖꅒꉌ꒜ꊋꀋꄿ',
      explain: '身体抗不过肚皮，四肢抗不过内心',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8274.m4a?sign=365d278560b8290ae48c373c0e83519c&t=1589460809',
      meaning: '人首先应该能养活自己，其次要顺从自己的内心做事',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段75',
      letter: 'ꇵꊫꋏꌊꌩꁧꅂ，ꑓꋪꂨꌊꈝ꒜ꍬ',
      explain: '握着拳头爬树，闭起眼睛走路',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8275.m4a?sign=89d71c12dc8580ccf2de9609cbf2b6ae&t=1589460822',
      meaning: '讽刺与常规背道而驰的人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段76',
      letter: 'ꃰꊿꐮꌂꃰꊿꈔ，ꎇ꒜ꐮꌂꎇ꒜ꑍ',
      explain: '人不和谐人要亡，畜生不和畜生灭',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8276.m4a?sign=0db60ebf0b9383c38465d676ed632046&t=1589460834',
      meaning: '提醒人们要与他人和谐相处',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段77',
      letter: 'ꌺꃰꉌꏣꎴ，ꉾꈻꌠꀋꍸ；ꑋꃰꉌꏣꎴ，ꅇꄸꌠꀋꏿ',
      explain: '男人心胸广，刀锋不伤人；女人心胸广，话语不伤人',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8277.m4a?sign=bd29189f2928797592f18f25c736e52e&t=1589460847',
      meaning: '做人应该心胸广阔，能避免很多不必要的麻烦',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段78',
      letter: 'ꇌꉘꅲꄵꆏ，ꇌ꒜ꁖꑓꁴꅐ；ꃆꌺꊀꄅꆏ，ꃆ꒜ꑓꁴ',
      explain: '牛犊穿鼻孔母牛哭，马驹上马鞍母马哭',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8278.m4a?sign=2dfab593e4ff7c4769b5ce5d9e8ce411&t=1589460860',
      meaning: '动物也像人一样有感情，提醒人不能虐待动物',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段79',
      letter: 'ꌟꃅꀋꀨꅔ，ꌠꋋꀋꇎꅔ',
      explain: '君子争大义，小人争小利',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8279.m4a?sign=ad981c3fa283a3c5ba34945e3ad54b58&t=1589460874',
      meaning: '做人应该深明大义，不能被蝇头小利蒙蔽',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段80',
      letter: 'ꀿ꒜ꈌꄤꑣ，ꀿ꒜ꆹꉒꐎ，ꉫꑌꐰꆹꇐ，ꂸꉬꐰꆹꇐ',
      explain: '莫顶父母嘴，父母如白云，总有消散时',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8280.m4a?sign=dadddbd34b7f1169a75031a1ca73f897&t=1589460888',
      meaning: '提醒后人尊敬长辈',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段81',
      letter: 'ꌟꃅꐤꅉꊾꈭꋏ，ꌠꋋꐤꅉꊾꈔꋏ',
      explain: '君子之地救人命，小人之地陷害人',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8281.m4a?sign=75114f5784bcea21f37348b4f651ee69&t=1589460901',
      meaning: '提醒后人应该多与君子交往，与小人保持距离',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段82',
      letter: 'ꇗꄃꏦꇓꐥ，ꏦꂸꉬꑌ，ꒉꉱꃹꂸꄿ',
      explain: '稳重要如铅珠子，若无铅珠子，哪能入水底',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8282.m4a?sign=f11eea74335fa6464013743ececf1fb2&t=1589460919',
      meaning: '做人要稳重，沉得住气才能成大事',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段83',
      letter: 'ꇣꋦꂄꂯꑌ，ꋓꇗꉏꃰꐥ；ꑌꑿꀻꂯꑌ，ꍀꉘꆿꅪꐥ；ꃰꊿꁬꂯꑌ，ꌥꎭꆅꃤꐥ',
      explain: '庄稼欲丰收，洪涝灾害却不止；六畜欲兴旺，豺狼虎豹却不止；人丁欲安康，疾病死亡却不止',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8283.m4a?sign=b48562888be3374d1bfd2af3e59c0952&t=1589460930',
      meaning: '人类活动不能完全阻止自然灾害，警醒后人敬畏自然',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段84',
      letter: 'ꇯꆏꆿꁮꇰ，ꆿꁮꌩꈪꀵꆏꑳ；ꑲꆏꃰꊿꃣꈌꌸꆏꇰ',
      explain: '耕牛愚钝，遇犁头聪慧；人类聪慧，遇纠纷愚钝',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8284.m4a?sign=81641ffc645b95948c58e1d4f9c7c542&t=1589460944',
      meaning: '愚钝的人也有自己擅长的事，聪明人也有犯错的时候',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段85',
      letter: 'ꈍꌺꎐꊾꆅ，ꀊꉘꅇꊾꉻ',
      explain: '小狗齿咬也痛人，孩童言语也伤人',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8285.m4a?sign=88d4699a56a35f62291b06804277cc7b&t=1589460956',
      meaning: '孩子说话没有节制容易伤害到有心人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段86',
      letter: 'ꈛꆹꀋ꒔，ꈜꏀꀋꀺ',
      explain: '不堵老路，难劈新路',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8286.m4a?sign=262a853a5f1f212b13bff9d0cc24d015&t=1589460967',
      meaning: '堵了老路却开辟出了新路，不能只注重眼前得失',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段87',
      letter: 'ꈛꑌꈜꎴꈜ꒔ꏢ，ꀋꆷꒉꈯꈌ，ꌕꈎꑳꈵꑟ；ꆷꆏꒈꃚꒈꂪꏮ，ꌕꑍꑳꀋꑟ，ꌕꆩꑳꑟꁧ',
      explain: '远近同为路，急时强过河，三年未到家，闲时绕过河，三日不到家，三月便到家',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8287.m4a?sign=7e358ef0007aff58057064a5e9596f50&t=1589460981',
      meaning: '贪图省事选择捷径是不能取得成功的',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段88',
      letter: 'ꈣꀕꇌꉘꈤ，ꇌꉘꎷꈬꃤ；ꋅꀕꃪꀮꋆ，ꃪꀮꎷꈬꊈ',
      explain: '瘦牛再瘦也有九筐肉，公鸡再肥只出九坨肉',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8288.m4a?sign=da33e34d88dad5a7a303c54b46446e6a&t=1589460996',
      meaning: '引申义在一方面有特别特长的人，即使在这方面突然到了穷困的地步，也比一些在这方面刚出炉的人强',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段89',
      letter: 'ꈍꈩꅇꄸꌠꄤꏿ，ꈌꒉꅇꇨꌠꄤꅥ',
      explain: '辩论不用恶语伤人，玩笑不用重话伤人',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8289.m4a?sign=b3ed3a4d698d0eedff1d0c78947c163d&t=1589461015',
      meaning: '提醒人说话要有分寸，分得清轻重',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段90',
      letter: 'ꇨꃃꅇꄸꅐ，ꅇꄸꉂꀋꋌ；ꀄꂳꋚꄸꋠ，ꋚꄸꂮꀋꋌ',
      explain: '饥饿吃粗粮，粗粮无营养；气急出恶语，恶语无意义',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8290.m4a?sign=b53b062a9778114a9a87ea1fe0617125&t=1589461027',
      meaning: '提醒人在生气时候不要口不择言，这是没有意义的',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段91',
      letter: 'ꇪꀮꁦꀑꂿ，ꂾꃚꐦꇬꌒ',
      explain: '布谷鸟鸣于山顶，鸣声动人于山脚',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8291.m4a?sign=755de8042a24ea36c7839393364c28a7&t=1589461039',
      meaning: '布谷鸟在山顶鸣叫，动人的歌声在山脚就能听到',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段92',
      letter: 'ꈀꋠꈀꅝꃅꄔꀨ，ꈁꃅꈁꑽꐋꀨꀕ',
      explain: '进嘴之食先过火，所做之事告朋友',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8292.m4a?sign=887f09e3a29f0c065ef972b720f57856&t=1589461054',
      meaning: '吃的东西要先加工过，做的事情也要先告诉朋友。教导后人与朋友坦诚相待',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段93',
      letter: 'ꂱꀯꀋꈤꋠꇐꀋꈤ，ꀑꇬꀋꈤꇇꇐꀋꈤ',
      explain: '嘴不灭粮不绝，命不亡财不歇',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8293.m4a?sign=a8994293a07a5ec8588d4c009bf63bb0&t=1589461065',
      meaning: '只要有生命就还会有粮食和钱财',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段94',
      letter: 'ꂴꆽꇌꌉꋯ，ꊁꇁꃬꐗꋯ，ꊁꆏꑭꏬꋂꀋꇱ',
      explain: '先说宰牛，再说杀鸡，最后汤都不放盐',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8294.m4a?sign=81c350368cfe6eefa6319f61ee988c64&t=1589461078',
      meaning: '讽刺客人上门时只顾聊天最后照顾不周的人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段95',
      letter: 'ꂶꀑꀋꈬꂷꂪꏻ，ꒉꇉꀋꈬꒉꂪꁘ',
      explain: '竹捆头松竹尾掉，水塘固塘不漏水',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8295.m4a?sign=2ff9796dfba8e506bed73ea6b6a9d69c&t=1589461092',
      meaning: '做事情脚踏实地，注重过程才能保障结果',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段96',
      letter: 'ꃄꆏꀃ꒜ꂊ，ꆫꄸꇭꀧꊸ',
      explain: '耕种者有粮食，放牧者有皮衣',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8296.m4a?sign=1826f7592af59785ff1ffe02b9edaefc&t=1589461102',
      meaning: '形容勤劳工作的人都会得到回报',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段97',
      letter: 'ꃅꉒꊿꀋꌤ，ꌞꉼꊿꀋꊏ',
      explain: '云雾不熏人，君子不骗人',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8297.m4a?sign=93b03c798b6baa5429b55a3098ae8e50&t=1589461121',
      meaning: '一个道德品质优良的人是不会欺骗别人的',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段98',
      letter: 'ꃅꊋꐧꇬꑌ，ꇌꊋꆽꇬꑌ',
      explain: '马之力在背，牛之力在颈',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8298.m4a?sign=05c7decb41cc347e4aea896337d7bbb6&t=1589461132',
      meaning: '马用背发力，牛用颈发力',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段99',
      letter: 'ꃅꋩꌠꈭꀋꃰ，ꈛꎼꌠꈭꃰ',
      explain: '骑马者不恐高，走路者恐高',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%8299.m4a?sign=9b279e63b7d10725746970a4d31d0f60&t=1589461144',
      meaning: '形容长时间在高出的人是不会恐高的',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段100',
      letter: 'ꃨꅑꊰꇁꇐ，ꊿꐥ꒜ꇁꇐ',
      explain: '花开有落时，人活有老时',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82100.m4a?sign=74d63475a5de85fcfd072c5bef5af358&t=1589461154',
      meaning: '宽慰后人，人的生命都是有限的',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段101',
      letter: 'ꃪꇬꑙꋒꃅꀋꉆ，ꒉꇬꉛꋒꃅꀋꉆ',
      explain: '悬崖之上不学猴，深海之中不学鱼',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82101.m4a?sign=4d2cc14b23b9ff82ea2ee857b785fe5d&t=1589461192',
      meaning: '形容在做自己不擅长的事情时候，不要轻易模仿在这个领域擅长的人的行为，否则可能会弄巧成拙',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段102',
      letter: 'ꃬꀋꂇꂷ，ꅏꊧꐕꀋꇿ',
      explain: '不叫的鸡，再扶翅膀也宛然',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82102.m4a?sign=19803036056e4d10981c4f6e77f581aa&t=1589461206',
      meaning: '比喻由于能力差或水平低，成不了气候，或见不得世面',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段103',
      letter: 'ꃬꏿꈿꀋꁮ，ꑾꃅꇬꀋꂅ；ꇓꏪꏜꀋꅿ，ꁖꐪꇬꀋꄔ',
      explain: '苍蝇不叮无缝蛋，牲口不踩无草岩',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82103.m4a?sign=bce622ed08f18faa8824871800f2b73d&t=1589461216',
      meaning: '形容没有平白无故出现的事情，任何的事情都是有原因的。',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段104',
      letter: 'ꃮꆪꁮꏮꆏꌋꎴ，꒰ꆨꁮꈪꆏꑍꎴ',
      explain: '猪月夏至昼变长，蛇月冬至夜变长',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82104.m4a?sign=fd4d519ccc48df4bebd5056b7182cae0&t=1589461228',
      meaning: '猪月蛇月都是彝族特色的纪月方法，分别指六月和十二月',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段105',
      letter: 'ꃰꊿꀋꉉꆏꀋꌧ，ꇬꋠꀋꅥꆏꀋꂿ',
      explain: '鼓不敲不响，人不教不明',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82105.m4a?sign=7c444087cfa74924ba5dacd739c05d30&t=1589461241',
      meaning: '比喻人如果不经历磨难，就会难以成为一个有用的人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段106',
      letter: 'ꄓꆹꃬꀮꇳꄮꄓ ，ꃅꄜꆞꀋꈚ',
      explain: '鸡叫就说要起床，天亮还没穿裤子',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82106.m4a?sign=732e3454a472b8e78bd18ff045420484&t=1589461252',
      meaning: '讽刺做事情拖拖拉拉的人',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段107',
      letter: 'ꅳꍬꄐꄉꅥ，ꅇꂷꌐꄉꉉ',
      explain: '枪要瞄准打，话要对准说',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82107.m4a?sign=b10a3760863a530acae6adebaeade78f&t=1589461264',
      meaning: '说话要直截了当，不可含沙射影，指桑骂槐',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段108',
      letter: 'ꆂꒉꁨꁦꁍꄤꎹ，ꈍꄮꈤꅐꈤꈿꇁꀋꐚ',
      explain: '河边不能做耕地，何时洪水难预知',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82108.m4a?sign=9f8ee5a1a5986191f3e9b046ef838ff5&t=1589461277',
      meaning: '不要在河边耕种，否则无法预知什么时候会有洪水',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段109',
      letter: 'ꅱꆏꅇꐛ，ꀋꅲꅇꀋꐛ',
      explain: '听则成话，不听则不成话',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82109.m4a?sign=2d2b9cfb8a03152b9d497c385ab12b60&t=1589461287',
      meaning: '道理要对会听话的人讲，否则就是对牛弹琴',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段110',
      letter: 'ꆂꒉꃺꄉꉜ꒰ꒃ，ꃪꅪꁶꄉꑷꂿꄖ',
      explain: '摊开河水捉鱼，戳开岩壁筑楼',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82110.m4a?sign=41aca95e8359af4ac2ae5ba31d1efffc&t=1589461299',
      meaning: '描述先辈们成家立业的艰辛',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段111',
      letter: 'ꆂꒉꌤꊂꉜ꒰ꃅꊸꆗ，ꃪꅪꐡꊂꐛꑿꇖꃱꁘ，ꀿ꒜ꌦꊂꌺꇖꋥꁘꏿ',
      explain: '江水枯竭鱼儿被晒，岩壁崩塌蜜蜂四飞，父母去世子女分散',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82111.m4a?sign=4e7e5fc10ed4ac88512963578dbd2fa6&t=1589461314',
      meaning: '江水干了鱼儿就会被晒，岩壁崩塌了蜜蜂到处飞，父母去世了子女也四处分散',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段112',
      letter: 'ꑙꄝꈍꉐꃅꊸꄂꅑ，ꆺꄝꈍꐯꃱꐻꃱꆹ꓂',
      explain: '喉咙以上晴空万里，喉咙一下万里冰封',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82112.m4a?sign=8798b17b5e274be7fbb7fa17a32790ce&t=1589461325',
      meaning: '嘴甜心黑，说一套想一套',
      isCollected: false,
      isKnew: false
    },{
      title: '尔比尔节',
      num: '选段113',
      letter: 'ꆿꁈꇉꇬꃹ，ꑭꐨꅔꇬꁮ；ꏬꁈꃅꈬꃹ，ꁰꒌꐦꇬꐛ',
      explain: '老虎逃进森林，足印留在原地；老鹰飞到天空，身影落到地面',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E5%B0%94%E6%AF%94%E5%B0%94%E8%8A%82113.m4a?sign=175bbacc9ef99ccf696d1c5e21c22d97&t=1589461339',
      meaning: '为人处世要光明正大,不要耍小聪明搞一些偷鸡摸狗的勾当,自以为别人都不会知道的坏事。 要想别人不知道你做的事情,就除非你自己不要去做。',
      isCollected: false,
      isKnew: false
    },{
      title: '玛姆特依',
      num: '选段1',
      letter: 'ꐧꃅꀉꌺꇖ，ꒆꊂꑍꈓꏃꈓ，ꋧꊂꅊꇁꇐ。ꌟꒁꉀꒁꌠ，ꉐꆈꉀꐂꌠ ，ꀋꆪꉀꀜꌠ，ꃄꐔꉀꄀꌠ，ꈄꀕꉀꃮꌠ，ꉀꒆꄸꄤꃅ。ꉀꒁꄸꃅꆏ，ꌺꇖꍞꂸꁨ，ꃷꇑꈌꄤꅥ。ꈌꅥꍣꌋꑲ，ꈛꑌꑮꄤꒃ，ꑮꁈꈁꇁꁝꋒ。ꈜꑌꑷꄤꃼ，ꑷꁈꑷꑳꑟ，ꀊꉘꑷꒃꎭ。',
      explain: '居木的子孙，出生六七岁，慢慢会长成；人往高处走，乌鸦朝上叫，兔子往上跳。山火往上烧，框框往上编成长莫使坏，成长若使坏，子孙无依靠。莫打邻居狗，打狗顾主面；莫娶近处妻，逃妻随时遇；莫买近处鸡，鸡易逃回去，孩童捉鸡难。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D1.m4a?sign=b9165b7a11e4e561020f03818c5896ec&t=1586101557',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '玛姆特依',
      num: '选段2',
      letter: 'ꐧꃅꀉꌺꇖ，ꀿ꒜ꐭ꒿ꂄ，ꌺꇖꉌꈪꊰ，ꌺꇖꐭ꒿ꂄ，ꀿ꒜ꉌꌒꄀ，ꑌꑿꂾꃚꌒ，ꆫꌠꉌꌒꄀ。꒔ꈭꊯꌕꈎ，ꒆꊂ꒔ꈭꊯꌕꈎ，ꊈꒆꆊꂸꄃ，ꐧꒆꂸꋬ，ꀊꋴꉪꂸꋬ，ꃆꐳꄔꂸꐽ，꒔ꈭꊯꌕꈎ，ꒆꊂ꒔ꈭꊯꌕꈎ，ꊈꒆꆊꂸꄃ，ꐧꒆꌧꂸꋬ，ꀊꉘꉪꂸꋬ，ꃆꐳꄔꂸꐽ，ꃅꒆꆧꏦꉻ，ꀊꉘꈩꌒꇕ，꒔꒔ꈬꃅ。',
      explain: '居木的子孙，父母言语美，孩子心里暖；孩子言语美，父母就宽心；羊儿叫声好，牧人就放心。一轮十三岁，生后一轮一十三，骨肉长未丰，成长缺学识；孩童想不周，马驹踏不稳；驹子伤栏杆，孩童想不周，一日奔九处。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D2.m4a?sign=ab53c3fa68213920f945d17dd3776cd4&t=1586101572',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '玛姆特依',
      num: '选段3',
      letter: 'ꐧꈚꀉꌺꇖ，ꒆꊂꊰꌌꊰꏁꈓ，ꃢꌩꈚ꓂ꎔ，ꇯꋩꏸꅑꀺ，ꊈꌊꌐꎹꎔ ，ꌻꆗꇭꌠꏃ ，ꈌꃅ ꉬꌠꑄ，ꁦꂥ，ꉪꃅꇱ，ꃆꇭꉪꃅꇭ。ꐦꐛꉪꑿꉘ，ꅪꎔꉪꅪꎔ，ꈣꅐꉪꅪꎔ，ꌳꈄꉪꌳꈄ，ꐙꅐꉪꌳꈄ，ꉌꊂꉪꉌꑌ，ꂸꌒꀕꂿꉩ！',
      explain: '居木的子孙，十六七岁时，着装懂讲究，穿戴有礼貌，善与亲戚处，率领强小伙，带上好猎犬,高山套野兽，密林放猎犬，河里捉鱼儿，平坝来赛马，我们的最快；有坝我们插秧，有山我们放羊，女孩我们的最美，聚会场里我们的姑娘最美，勇敢我们最勇敢，斗敌我们最勇敢，意志我们最坚强，多么幸福啊。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D3.m4a?sign=056ac0f9b434db0b4ba8f8fa911fa328&t=1586101585',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '玛姆特依',
      num: '选段4',
      letter: 'ꐧꃅꀉꌺꇖ，ꌅꌺꃣꌬꏀ，ꀗꈌ꒜ꈌꅲ；꒜ꌺꈁꏀ，ꃆꆳ꒧ꈠꅲ；ꀗꌺꀘꒃꏀ，ꄯꒉ꒰ꀨꅲ；ꇮꌺꇮꒃꏀ，ꌟꃅꇇꊂꅲ；ꎃꀕꆫꃅꏀ，ꆫ꒜ꀉꁌꅲ。ꂸꒃꌅꐤꐥ，ꂸꒃꌅꂸꐥ，ꂸꒃꌅꐥꆏ，ꌅꌺꉘ꒰ꀱ。ꂸꒃ꒜ꐥꐥ，ꂸꒃ꒜ꂸꐥ，ꂸꒃ꒜ꐥꐥ，꒜ꌺꈁꇽꀱ。ꂸꒃꀘꁹꐥ，ꂸꒃꀘꂸꐥ，ꂸꒃꀘꂸꐥ，ꂸꒃꀘꐥꄸ，ꄯꒉꌠꆼꏻ。ꂸꒃꇮꐥꐥ，ꂸꒃꎃꂸꐥ，ꂸꒃꎃꐥ꒔，ꑌꑿꁬꇗꏿ。',
      explain: '居木的子孙，兹惹初执政，求教毕和莫，莫惹初判案，求教老案例，毕惹初学毕。求教于经典，根惹初学艺，求教于他人，卓卓初放牧，求教老牧人，有无没学的兹？没有没学的兹，若有没学的兹，兹需重理政，有无没学的莫？没有没学的莫。案子需重判，有无没学的毕？没有没学的毕，若有没学的毕，经书不通畅，有无没学的根？没有没学的根，若有没学的根，工艺难住根，有无没学的卓？没有没学的卓，若有没学的卓，羊儿齐遭殃。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D4.m4a?sign=3e793baf01565b4f1671757cf871395e&t=1586101600',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '玛姆特依',
      num: '选段5',
      letter: 'ꐧꃅꀉꌺꇖ，ꄸꌠꋠꇐꈤ，ꉔꌠꌷꇐꈤ。꒔ꑍꉉꌠꒉ，ꋧꌠꋞꌠꌷ；꒔ꑍꊋꌠꒉ，ꌀꒃꊋꂞꌷ；꒔ꑍꈄꌠꒉ，ꌉꈿꁻꏤꌷ；꒔ꑍꇮꌠꒉ，ꅥꅍꇇꁉꊭ；꒔ꑍꒃꌠꒉ，ꄯꒉꇇꁉꊭ；꒔ꑍꆫꌠꒉ，ꎴꁧꆫꁯꎹ；꒔ꑍꂿꌠꒉ，ꌩꈪꇁꄉꎹ。',
      explain: '居木的子孙，愚者无所不吃，智者无所不学；一日重言谈，学习言和词；一日重力气，练功学武术；一日重勇猛，学战略战术；一日重技术，工具手里拿；一日重学习，书本握手中；一日重放牧，找蓑衣斗篷；一日重耕种，找犁头加档。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D5.m4a?sign=1d74c7704e62e8bcbb38d6fedf837a53&t=1586101615',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '玛姆特依',
      num: '选段6',
      letter: 'ꐧꃅꀊꌺꇖ，ꒁꊂꃅꊏꋋꈓꑋꈓ，ꊷꆹꈧꌺꊸ，ꈧꌺꅑꅉꂥ；ꉁꆹꀿ꒜ꉂ，ꀿ꒜ꉁꅉꎴ；ꃄꆏꆿꍮꃅ，ꆿꍯꃅꌠꋠ；ꆫꆏꑌꑿꆫ，ꑌꑿꆫꌠꃅ；ꉗꆏꋩꃅꉘ，ꁺꆏꂿꇌꁻ，ꇧꆏꏃꊥꇨ，ꐉꆏꀿ꒜ꐊ，ꍬꆏꌅꂮꍬ，ꏃꃅꀹꆐꌅꂮꀺ，ꐊꌠꎔꆏꌅꂮꎔ，ꇱꁮꉫꆏꀘꂾꉬ。ꊂꋊꊁꒁꌠ，ꇮꃅꑳꃅꆏ，ꀃꈌꀃꌻ꒧；ꂸꇮꂸꑳꆏ，ꀃꈌꀃꁮꐚ；ꈌꇮꉐꑌꆏ，ꀃꈌꀃꐋꀨ；ꈌꉻꉐꏠꆏ，ꀃꈌꀃꁮꐚ；ꇮꆏꌺꑳꐛ，꒔ꆏꌺꄸꐛ。ꊿꇮꆏꊾꋽ，ꌌꇮꆏꂿꎁ，ꃅꇮꆏꋙꋦ，ꊭꇮꆏꌠꈚ，ꑌꑿꐥꇮꆏ，ꅥꇓꋌꀋꌸ；ꃬꎶꐥꇮꆏ，ꃬꀮꋌꀋꋖ；ꇌꎶꐥꇮꆏ，ꇌꉘꋌꀋꁻ；ꃰꊿꐥꌠ，ꀿꃅꆹꄤꑁ，ꏣꅔꀿꃅꈻ；ꌺꑌꇫꐥꌠ，ꋊꃤꄸꄤꃅ。',
      explain: '居木的子孙，生后二十一；热的是太阳，太阳挂的高；爱的是父母，父母隔的远；种要种五谷，种者有粮吃；牧要牧绵羊，牧者有衣穿；养要养骏马，养者有马骑；斗要选耕牛，厉害数石祖；心要随父母，路要跟兹米；随从有德兹米就有德，随从爱美兹米就爱美格布答应毕摩就答应；晚辈后生们，善于处人处事，己嘴如同己幺儿；不善处人处事，己嘴如同己敌人；能言善辩者，己嘴是己友；差言恶语者，己嘴成己敌；悟道能成人，愚钝做傻事；会处与人和，会牵犁得直。会种庄稼好，会存就富裕；绵羊会生活，石头不打他；阉鸡会生活，公鸡不啄他；阉牛会生活，牯牛不斗他；人类会生活，祸事不找他；会就如此说，未必全如此。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D6.m4a?sign=01e33252dfeeee32ae62ed7203a826e0&t=1586101630',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '玛姆特依',
      num: '选段7',
      letter: 'ꐧꃅꀉꌺꇖ，ꑌꅪꇫꐥꌠ，ꀿꃅꆹꄤꑁ，ꏣꅔꀿꃅꈻ；ꌺꅪꇫꐥꌠ，ꋊꃤꄸꄤꃅ，ꄹꅔꋊꃤꈻ；ꌅꂮꇫꐥꌠ，ꇓꐚꄸꄤꃅ，ꆲꅐꇓꐚꈻ；ꇓꐚꇫꐥꌠ，ꌅꂮꄸꄤꃅ，ꑖꇜꌅꂮꈻ；ꎃꀕꇫꐥꌠ，ꇮꌺꄸꄤꃅ，ꇮꌺꄸꃅꆏ，ꊨꐡꉃꂸꋬ。',
      explain: '居木的子孙，所有妇女们，莫嫌弃娘家，娘家最能庇护人；所有男人们，莫得罪家族，家族最能庇护人；所有的兹米，莫得罪奴隶，奴隶纳税量最多；所有的奴隶，莫得罪兹米，判理兹米最在行；所有的卓卓，莫得罪匠人，若得罪匠人，锄坏无处修。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D7.m4a?sign=3a83990d1b5cd0edb0f76af7aaef4f5f&t=1586101648',
      meaning: '',
      isCollected: false,
      isKnew: false
    }, {
      title: '玛姆特依',
      num: '选段8',
      letter: 'ꐧꃅꀉꌺꇖ，ꌟꃅꃷꇑꅇꀋꎹ，ꈌꃅꃷꇑꃮꀋꍀ。ꄇꀮꅪꋑꋩ，ꃮꌌꀭꉌꐪꀋꎹ，ꎽꃅꇱꃅꃢ。',
      explain: '居木的子孙，好汉不告邻居状，好犬不咬邻居猪，骑着花大公，不寻土猪刺猬踪；穿着绸缎衣，不往腰间摸虱子。',
      pronunciation: 'https://6678-fxy-onc8b-1300849435.tcb.qcloud.la/article_audio/%E7%8E%9B%E5%A7%86%E7%89%B9%E4%BE%9D8.m4a?sign=93972bceacdef4691b3c69349fe7cd03&t=1586101662',
      meaning: '',
      isCollected: false,
      isKnew: false
    }]
  },

  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  //页面轮播功能函数
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })

  },

  gotoWord: function () {
    wx.navigateTo({
      url: '/pages/language/word/word',
    })
  },

  gotoDialogue: function () {
    wx.navigateTo({
      url: '/pages/language/dialogue/dialogue',
    })
  },

  gotoArticle: function () {
    wx.navigateTo({
      url: '/pages/language/article/article',
    })
  },

  addNewWordList:function(e){
    var that = this;
    for (let i = 0; i < that.data.word.length;i ++){
      db.collection('wordlist_unstudied').add({
        data: {
          openid:e,
          letter: that.data.word[i].letter,
          explain: that.data.word[i].explain,
          pronunciation: that.data.word[i].pronunciation,
          sentence_yi: that.data.word[i].sentence_yi,
          sentence_zhong: that.data.word[i].sentence_zhong,
          isCollected: that.data.word[i].isCollected,
          isKnew: that.data.word[i].isKnew,
          audio_word: that.data.word[i].audio_word,
          audio_sentence: that.data.word[i].audio_sentence,
          image: that.data.word[i].image
        },
        success: res => {
          
        },
        fail: err => {
          console.log(err);
        }
      })
    }
    
  },

  addNewDialogue: function (e) {
    var that = this;
    for (let i = 0; i < that.data.dialogue.length; i++) {
      db.collection('dialogue_unstudied').add({
        data: {
          openid: e,
          sentence: that.data.dialogue[i].sentence,
          explain: that.data.dialogue[i].explain,
          pronunciation: that.data.dialogue[i].pronunciation,
          structure: that.data.dialogue[i].structure,
          illustration: that.data.dialogue[i].illustration,
          isCollected: that.data.dialogue[i].isCollected,
          isKnew: that.data.dialogue[i].isKnew,
          audio_sentence: that.data.dialogue[i].audio_sentence,
          image: that.data.dialogue[i].image
        },
        success: res => {
          
        },
        fail: err => {
          console.log(err);
        }
      })
    }
  },

  addNewArticle: function (e) {
    var that = this;
    for (let i = 0; i < that.data.article.length; i++) {
      db.collection('article_unstudied').add({
        data: {
          openid: e,
          title: that.data.article[i].title,
          num: that.data.article[i].num,
          letter: that.data.article[i].letter,
          explain: that.data.article[i].explain,
          pronunciation: that.data.article[i].pronunciation,
          meaning: that.data.article[i].meaning,
          isCollected: that.data.article[i].isCollected,
          isKnew: that.data.article[i].isKnew,
        },
        success: res => {
          
        },
        fail: err => {
          console.log(err);
        }
      })
    }
  },

  judgeUser:function(e){ //判断用户集合中是否存在当前用户
    var that = this;
    let flag = false;
    //let x = this.data.user + 20
    db.collection('user') // 限制返回数量为 20 条
    .where({
      openid: e.result.openid
    }).get({
      success: (res) => {
        let user_get = res.data; //获取到的对象数组数据
        this.setData({
          user_get: this.data.user.concat(res.data),
          //users_num: x
        });
         
        console.log(user_get);
        console.log(e.result.openid);
        for (let i = 0; i < user_get.length; i++) { //遍历数据库对象集合
          if (e.result.openid === user_get[i].openid) { //Openid存在
            flag = true
          }
        }
        console.log(flag);
        if (flag === false) { //用户不存在
          console.log("用户不存在")
          db.collection('user').add({ //将该用户加入用户集合
            data: { openid: e.result.openid },
            success: res => {
              console.log(res); 
            },
            fail: err => {
              console.log(err);
            }
          })
          that.addNewWordList(e.result.openid);//添加未学单词
          that.addNewDialogue(e.result.openid);//添加未学对话
          that.addNewArticle(e.result.openid);//添加未学经典选段
        }
        else console.log("用户存在")
      },
      fail: err =>{
        console.log("错误")
      }
    })
    
    },

  getOpenid:function() {
    let that = this;
    wx.cloud.callFunction({ //调用getOpenid云函数
      name: 'getOpenid',
      data:{},
      config:{env:"fxy-onc8b"}
    })
      .then(res => { //调用getOpenid成功进行以下操作
      console.log(res);
      that.judgeUser(res) //判断用户是否存在
    })
      .catch(err => { //调用getOpenid失败打印错误信息
      console.log(err);
    });
  },

  gotoword_history: function () {
    wx.navigateTo({
      url: '/pages/word_history/word_history',
    })
  },

  gotoword_writing: function () {
    wx.navigateTo({
      url: '/pages/word_writing/word_writing',
    })
  },
  gotoCalender: function () {
    wx.navigateTo({
      url: '/pages/calendar/calendar',
    })
  },

  slideupshow: function (that, param, px, opacity) {
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease',
    });
    animation.translateY(px).opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
  },

  // 获取容器高度，使页面滚动到容器底部
  pageScrollToBottom: function() {
    wx.createSelectorQuery().select('#page').boundingClientRect(function(rect) {
      if (rect){
        // 使页面滚动到底部
        console.log(rect.height);
        wx.pageScrollTo({
           scrollTop: rect.height,
           duration:1000
        },
        )
      }
    }).exec()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.getOpenid()//获取用户的openid
    getApp().loadFont();
    wx.getSystemInfo({//获取设备的宽高，用于轮播页面功能
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }

      
    var that = this
    that.pageScrollToBottom()

    this.slideupshow(this, 'slide_up1', -200, 1)

    setTimeout(function () {
      this.slideupshow(this, 'slide_up2', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up3', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up4', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up5', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up6', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up7', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up8', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up9', -200, 1)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up10', -200, 1)
    }.bind(this), 200);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.slideupshow(this, 'slide_up1', 200, 0)
    setTimeout(function () {
      this.slideupshow(this, 'slide_up2', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up3', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up4', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up5', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up6', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up7', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up8', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up9', 200, 0)
    }.bind(this), 200);
    setTimeout(function () {
      this.slideupshow(this, 'slide_up10', 200, 0)
    }.bind(this), 200);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})