## video播放组件

### 使用 

#### import 引入

安装
``` bash
 npm install H5video
 //or 
 year add H5Video
```
引用
```js
import H5video from 'H5video'
var video = new H5video('#videoContainer',{
    src :"",
})
video.play()

```
#### script资源引入
引入打包文件 ./dist/h5video.js
``` html
<script src="./dist/h5video.js"></script>
<script  type="text/javascript">
    var video = new H5video('#videoContainer',{
        src :"",
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


注意：1.ios中视频一致为内联播放，部分手机浏览器中弹出弹窗播放，如uc浏览器
     2. options.canCover选项:false时，设置内联播放，部分安卓机会自动全屏播放，视频元素上无法覆盖其他元素;true时，安卓设备在x5内核浏览器（如微信、qq）中，启用x5播放器播放，但仍会有弹窗效果，视频元素上可覆盖其他元素。

#### video.play()
    控制视频播放

#### video.pause()
    控制视频暂停

#### video.status()
    返回视频当前状态： 'puased' 暂停; 'playing' 正在播放

#### video.currentTime(time) 
    获取/设置 视频当前播放位置 

#### video.onPlaying(callback)
    视频开始播放且已出现画面是执行回调

#### video.ended(callback)
    监听video播放结束事件，隐藏video元素，执行回调。
