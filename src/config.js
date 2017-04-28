const serviceUrl = 'http://127.0.0.1:1026/' 

let Config = {}

if (process.env.NODE_ENV === 'production') {
  Config = {
    loginUrl:'/api/uaa/oauth/token',
    test:'/api/resource/test',
    homeAPI:'./json/home.json',
    musicListAPI:'/kugou/plist/index',
    playListAPI:'/kugou/plist/list/id/?json=ture',
    musicAPI:'/kugou/app/i/getSongInfo.php?cmd=playInfo&hash=HASH&from=mkugou',
    krcAPI: '/kugou/app/i/krc.php?cmd=100&hash=HASH&timelength=TIMELENGTH',
  }
}else{
  Config = {
    loginUrl:'/api/uaa/oauth/token',
    test:'/api/resource/test',
  	homeAPI:'./json/home.json',
    musicListAPI:'/kugou/plist/index',
    playListAPI:'/kugou/plist/list/id/?json=ture',
    musicAPI:'/kugou/app/i/getSongInfo.php?cmd=playInfo&hash=HASH&from=mkugou',
    krcAPI: '/kugou/app/i/krc.php?cmd=100&hash=HASH&timelength=TIMELENGTH',
    searchHotAPI: '/mobilecdn/api/v3/search/hot',
    searchResultAPI: '/mobilecdn/api/v3/search/song',
  }
}

export default Config