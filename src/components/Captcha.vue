<template>
    <div class="slider">

        <div class="content" v-loading="captchaBaseObj === null">
            <div class="bg-img-div">
                <img id="bg-img" v-if="captchaBaseObj" :src="captchaBaseObj.backgroundImage" alt/>
            </div>
            <div class="slider-img-div" id="slider-img-div">
                <img id="slider-img" v-if="captchaBaseObj" :src="captchaBaseObj.sliderImage" alt/>
            </div>
        </div>
        <div class="slider-move">
            <div class="slider-move-track">拖动滑块完成拼图</div>
            <div class="slider-move-btn"
                 @mousedown="sliderMoveBtnMouseDown"
                 @touchstart="sliderMoveBtnTouchstart"
                 id="slider-move-btn"></div>
        </div>
        <div class="bottom">
            <div class="close-btn" id="slider-close-btn" @click="closeCaptcha"><i class="el-icon-close"></i></div>
            <div class="refresh-btn" id="slider-refresh-btn" @click="refreshCaptcha"><i
                class="el-icon-refresh-right"></i></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Captcha",
    data() {
        return {
            start: 0,
            startY: 0,
            movePercent: 0,
            bgImgWidth: 260,
            end: 206,
            startSlidingTime: null,
            entSlidingTime: null,
            trackArr: [],
            backgroundImage: '',
            sliderImage: '',
            sliderMoveBtn: null,
            sliderImgDiv: null,

        }
    },
    props: {
        captchaBaseObj: null
    },
    mounted() {
        this.sliderMoveBtn = document.querySelector('#slider-move-btn')
        this.sliderImgDiv = document.querySelector('#slider-img-div')
    },
    methods: {
        refreshCaptcha() {
            this.$emit('refreshCaptcha')
        },
        closeCaptcha() {
            this.$emit('closeCaptcha')
        },
        reset() {
            this.sliderMoveBtn.style.backgroundPosition = "-5px 11.79625%"
            this.sliderMoveBtn.style.transform = "translate(0px, 0px)"
            this.sliderImgDiv.style.transform = "translate(0px, 0px)"
            this.start = 0;
            this.startSlidingTime = null;
            this.entSlidingTime = null;
            this.trackArr = [];
            this.movePercent = 0;
            this.startY = 0;
        },

        sliderMoveBtnTouchstart(event) {
            let targetTouches = event.originalEvent ? event.originalEvent.targetTouches : event.targetTouches;
            this.startSlidingTime = new Date();
            this.start = event.pageX;
            this.startY = event.pageY;
            if (start === undefined) {
                this.start = targetTouches[0].pageX
                this.startY = targetTouches[0].pageY;
            }
            this.sliderMoveBtn.style.backgroundPosition = "-5px 31.0092%"
            window.addEventListener("touchmove", this.move);
            window.addEventListener("touchend", this.up);
        },
        sliderMoveBtnMouseDown(event) {
            this.startSlidingTime = new Date();
            this.start = event.pageX;
            this.startY = event.pageY;
            event.target.style.backgroundPosition = "-5px 31.0092%"
            window.addEventListener("mousemove", this.move);
            window.addEventListener("mouseup", this.up);
        },

        move(event) {
            if (event instanceof TouchEvent) {
                event = event.touches[0];
            }
            let moveX = event.pageX - this.start;
            let pageX = event.pageX;
            let pageY = event.pageY;
            this.trackArr.push({
                x: pageX - this.start,
                y: pageY - this.startY,
                t: (new Date().getTime() - this.startSlidingTime.getTime())
            });
            if (moveX < 0) {
                moveX = 0;
            } else if (moveX > this.end) {
                moveX = this.end;
            }
            this.sliderMoveBtn.style.transform = "translate(" + moveX + "px, 0px)"
            this.sliderImgDiv.style.transform = "translate(" + moveX + "px, 0px)"
            this.movePercent = moveX / this.bgImgWidth;
        },
        up() {
            this.entSlidingTime = new Date();
            window.removeEventListener("mousemove", this.move);
            window.removeEventListener("mouseup", this.up);
            this.valid();
        },
        valid() {
            let sliderImgDiv = document.querySelector('.slider-img-div')
            let imageCaptchaTrack = {
                bgImageWidth: this.bgImgWidth,
                bgImageHeight: sliderImgDiv.clientHeight,
                sliderImageWidth: sliderImgDiv.clientWidth,
                sliderImageHeight: sliderImgDiv.clientHeight,
                startSlidingTime: this.startSlidingTime,
                entSlidingTime: this.entSlidingTime,
                trackList: this.trackArr
            };
            this.$emit('captchaTrack', imageCaptchaTrack)
        }
    }
}
</script>

<style scoped>

.captcha-dialog .el-dialog__header {
    display: none;
}

.bottom div {
    margin-left: 10px;
    float: right;
}

.bottom div i:hover {
    color: #000000;
    transition: all 0.3s;
}

.slider-move-btn-init {
    background-position: -5px 11.79625%;
    transform: translate(0px, 0px)
}

.slider-img-div-init {
    transform: translate(0px, 0px)
}

.slider {
    background-color: #fff;
    width: 278px;
    height: 272px;
    z-index: 999;
    box-sizing: border-box;
    padding: 9px;
    border-radius: 6px;
    box-shadow: 0 0 11px 0 #999999;
}

.slider .content {
    width: 100%;
    height: 159px;
    position: relative;
    user-select: none;
}

.bg-img-div {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translate(0px, 0px);
}

.slider-img-div {
    height: 100%;
    position: absolute;
    transform: translate(0px, 0px);
}

.bg-img-div img {
    width: 100%;
}

.slider-img-div img {
    height: 100%;
}

.slider .slider-move {
    height: 54px;
    width: 100%;
    margin: 11px 0 0 0;
    position: relative;
}

.slider .bottom {
    height: 19px;
    width: 100%;
}

.refresh-btn, .close-btn, .slider-move-track, .slider-move-btn {
    background: url(https://static.geetest.com/static/ant/sprite.1.2.4.png) no-repeat;
}

.close-btn, .refresh-btn {
    background: none
}

.refresh-btn, .close-btn {
    display: inline-block;
    font-size: 24px;
    line-height: 24px;
}

.slider-move .slider-move-track {
    line-height: 38px;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
    color: #88949d;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.slider {
    user-select: none;
}

.slider-move .slider-move-btn {
    transform: translate(0px, 0px);
    background-position: -5px 11.79625%;
    position: absolute;
    top: -12px;
    left: 0;
    width: 66px;
    height: 66px;
}

.slider-move-btn:hover, .close-btn:hover, .refresh-btn:hover {
    cursor: pointer
}

.bottom .close-btn {
    width: 20px;
    height: 20px;
    background-position: 0 44.86874%;
}

.bottom .refresh-btn {
    width: 20px;
    height: 20px;
    background-position: 0 81.38425%;
}
</style>