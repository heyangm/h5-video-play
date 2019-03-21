## video播放组件
    主要针对视频全屏、视频控制播放
### 使用 

#### import 引入

安装
``` bash
 npm install h5-video-play
 //or 
 year add h5-video-play
```
引用
```js
import H5video from 'h5-video-play'
var video = new H5video('#videoContainer',{
    src : "./video.mp4",
})
video.play()

```
#### script资源引入
引入打包文件 ./dist/h5video.js
``` html
<script src="./dist/h5video.js"></script>
<script  type="text/javascript">
    var video = new H5video('#videoContainer',{
        src : "./video.mp4",
    })
</script>
```

### new H5video(container,options)

| param  | type | description  |
|  ----  | ---  |     -----    |
|container | <code>string</code>  |  video元素要插入的父元素选择器 |
|options   | <code>object</code>  |  video元素相关配置        |
|options.src | <code>string</code> |  video视频资源url        |
|options.poster | <code>string</code> |    视频封面          |
|options.controls | <code>Boolean</code> | 视频控制条，默认false 无 |
|options.canCover | <code>Boolean</code> | 安卓设备中，视频元素是否可被覆盖，默认false |  
|options.iosInline | <code>Boolean</code> | 部分ios浏览器中内联播放兼容，默认false 不兼容。|
|options.onPlaying |<code>Function</code> | 视频开始播放时回调 |
|options.onEnded |<code>Function</code> | 视频结束播放时回调。安卓开始X5播放器时，默认隐藏video元素来退出 |

注意：
 1. ios中视频一致为内联播放，部分手机浏览器中弹出弹窗播放，如uc浏览器
 2. options.canCover选项:默认false，设置内联播放，部分安卓机会自动全屏播放，视频元素上无法覆盖其他元素;true时，安卓设备在x5内核浏览器（如微信、qq）中，启用x5播放器播放，但仍会有弹窗效果，视频元素上可覆盖其他元素，视频播放结束后会隐藏video元素来退出x5播放器
 3. options.iosInline选项： 默认false，部分ios浏览器全屏播放(如蜗牛客户端)；true时，视频需要点击其他元素控制播放，点击视频自身播放控件播放时其他方法回调失败。
 4. 建议视频正常播放之前，先引导用户进行一次无意义的点击，执行play() pause()，进行一次视频的播放暂停,使视频在正式播放前预先加载
 5. 设置video currentTime 时，currentTime超出缓存时间时会失败
 6. 在安卓机中，不支持video和audio同时播放，大部分安卓机会暂停播放音频，视频暂停后继续播放；低版本安卓机部分浏览器导致视频黑屏，低版本中可设置禁止音频播放来避免。
 7. 部分客户端中，滑动超出页面时，默认阻止视频播放，需阻止滑动默认事件。
 8. 监听视频timeupdate事件时，timeupdate事件触发间隔较大，一般0.2秒左右触发一次。需监听视频播放精准位置的话需要手动实时监听视频currentTime

#### video.play()
    控制视频播放

#### video.pause()
    控制视频暂停

#### video.status()
    返回视频当前状态。返回值： 'puased' 暂停; 'playing' 正在播放

#### video.currentTime(time) 
    获取/设置 视频当前播放位置 

#### video.onPlaying(callback)
    视频开始播放且已出现画面是执行回调

#### video.ended(callback)
    监听video播放结束事件，隐藏video元素，执行回调。
