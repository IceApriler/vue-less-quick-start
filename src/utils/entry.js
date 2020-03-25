/**
 * 监听网络波动
 */
window.addEventListener('offline', () => {
  // alert('你断网啦！')
})

/**
 * 监听页面可见性
 * 场景：当程序切到后台的时候，如果当前有视频播放或者一些动画执行，可以先暂停。
 */
document.addEventListener('visibilitychange', () => {
  // console.log(`页面可见性：${document.visibilityState}`)
})
