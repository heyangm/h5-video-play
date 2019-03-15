import enableInlineVideo from 'iphone-inline-video'
const ua = navigator.userAgent
const isIphone = /ihpone/ig.test(ua);
const isAndroid = /android/ig.test(ua)
export default class H5video {
    /****
     * @param {object}  options            video相关配置
     * @param {string}  options.container  video父容器选择器
     * @param {string}  options.src        视频资源
     * @param {string}  options.poster     视频封面
     * @param {Boolean} options.controls   视频控制条，默认无
     * @param {Boolean} options.canCover   视频元素是否可被覆盖，默认false  
     ***(false时，设置内联播放，部分安卓机会自动全屏播放。true时，安卓设备x5内核浏览器中启用x5播放器播放，仍会有弹窗效果)
     */
    constructor(container,options){    
        this.options = options || {};
        this.container = document.querySelector(container) || document.body;
        this.src = options.src || "";
        this.poster = options.poster || "";
        this.controls = options.controls || false;
        this.canCover = options.canCover || false;
        this.video = null;
        this.init();
    }

    init(){
        let videoHtml;
        if(this.canCover){
            videoHtml =`<video 
                id="h5video"
                preload="auto" 
                playsInline="true" 
                src="${this.src}" 
                poster="${this.poster}" 
                width="100%" 
                style="object-fit:fill;transform-origin: 0% 0% 0px;"
                x-webkit-airplay="allow" 
                webkit-playsinline 
                x5-video-player-type="h5" 
                x5-video-orientation="portrait">
            </video>`
        }else{
            videoHtml = `<video 
                id="h5video" 
                preload="auto" 
                playsInline="true" 
                src="${this.src}" 
                poster="${this.poster}" 
                width="100%"
                style="object-fit:fill;transform-origin: 0% 0% 0px;"
                x-webkit-airplay="allow"  
                webkit-playsinline 
                x5-playsinline="true">
            </video> `
        }
        this.container.innerHTML += videoHtml
        this.video = document.getElementById('h5video')
        if(this.controls){this.video.controls = true}
        if(isIphone){enableInlineVideo(this.video)}
    }

    play(){
        this.video.play();
    }

    pause(){
        this.video.pause();
    }

    status(){
        if(this.video.paused){
            return 'paused'
        }else{
            return 'playing'
        }
    }

    currentTime(time){
        if(time){
            this.video.currentTime = time
        }else{
            return this.video.currentTime
        }
    }

    onPlaying(callback){
        let timeUpdate = ()=>{
            if(this.video.currentTime > 0.1){
                callback && callback()
                this.video.removeEventListener('timeupdate',timeUpdate)
            }
        } 
        this.video.addEventListener('timeupdate',timeUpdate)
    }

    ended(callback){
        this.video.addEventListener('ended',()=>{
            if(isAndroid && this.canCover){
                this.video.style.display = 'none'
            }
            callback && callback()
        })
    }

}
