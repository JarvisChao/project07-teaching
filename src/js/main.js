//-- Btn Tag
// 抓取檔名
const pathname = location.pathname;
const a = document.querySelectorAll('a');
a.forEach(function(item) {
  const aHref = item.getAttribute('href');
  if (pathname.includes(aHref)) {
    item.classList.add('is-active');
  }
});

const lenis = new Lenis({
  duration: 1
})
// lenis.on('scroll', (e) => {
//   console.log(e)
// })
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// lazyload
const $lazyImgs = document.querySelectorAll('img.js-lazy');
$lazyImgs.forEach(function(el) {
  // https://png-pixel.com/
  el.setAttribute(
    'src',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAQAAABHvi1JAAACNUlEQVR42u3TMQEAAAgDINc/mLE0gZ8ndCA9BRwiCAgCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoKAIIKAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAgIIggIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAIIAoKAICAICAKCgCAgCAgCggCCgCDwZwF2ixVTTYF0mAAAAABJRU5ErkJggg=='
  )
});
// https://github.com/verlok/vanilla-lazyload
const lazyLazy = new LazyLoad({
  elements_selector: 'img.js-lazy',
  // 設定距離可視區(視窗)底部多遠觸發
  threshold: 500,
});


const $burger = document.querySelector('.o-burger');
const $navbarBody = document.querySelector('.l-navbar__body');
let isOpened = false;

// self 參數
function burgerCtrl(self) {
  console.log(self);
  if (!isOpened) {
    self.classList.add('is-opened');
    $navbarBody.classList.add('is-opened');
    setTimeout(function() {
      $navbarBody.style.overflow = 'auto';
    }, 700);
    isOpened = true;
  } else {
    self.classList.remove('is-opened');
    $navbarBody.classList.remove('is-opened');
    $navbarBody.style.overflow = 'hidden';
    isOpened = false;
  };
}
// $burger.addEventListener('click', function() {
//   if (!isOpened) {
//     // this => $burger
//     this.classList.add('is-opened');
//     $navbarBody.classList.add('is-opened');
//     const self = this;
//     setTimeout(function() {
//       console.log(this);
//       // 可以抓到外面的 this
//       console.log(self);
//       $navbarBody.style.overflow = 'auto';
//     }, 700);
//     isOpened = true;
//   } else {
//     this.classList.remove('is-opened');
//     $navbarBody.classList.remove('is-opened');
//     $navbarBody.style.overflow = 'hidden';
//     isOpened = false;
//   };
// });


const $parallaxes = document.querySelectorAll('.js-parallax');
$parallaxes.forEach(function(el) {
  const parallaxInstance = new Parallax(el, {
    hoverOnly: true,
    relativeInput: true
  });
});

const $news = document.querySelector('.l-news');
const $body = document.querySelector('body');
window.addEventListener('scroll', function() {
  // console.log(this);
  // console.log($news.getBoundingClientRect());
  // 取得 news 與 body 的距離
  const newsTop = this.scrollY + $news.getBoundingClientRect().top
  const start = newsTop - 100;
  const end = newsTop + $news.offsetHeight * 0.5;
  // 表示他是在 news 的範圍內新增 class
  if (this.scrollY > start && this.scrollY < end) {
    $body.classList.add('is-news-active');
  } else {
    $body.classList.remove('is-news-active');
  }
});

// 註冊 gsap 的 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// timeline 時間線，可依序動畫
const tl = gsap.timeline({
  // 公共設定
  scrollTrigger: {
    trigger: '.c-blockade',
    // trigger 位置、window 螢幕位置交會時觸發
    start: 'top center',
    end: 'bottom 20%',
    // 隨滑鼠滾動執行動畫，邊滾動邊動畫
    scrub: true
  }
})

const $blockadeTexts = document.querySelectorAll('.c-blockade__text');
// gsap.to 從原本的 css 樣式位置變換至 gsap 設定值
// tl.to(el, to, 鉚釘);
// gsap.from 從 gsap 設定值變換為原本的 css 樣式位置
// tl.from(el, from, 鉚釘);
// gsap.fromTo 完全由 gsap 設定值去控制動畫
// tl.fromTo(el, from, to, 鉚釘);
tl.fromTo($blockadeTexts[0], { x: '70vw' }, { x: '-110vw' }, 'start');
tl.fromTo($blockadeTexts[1], { x: '-50vw' }, { x: '100vw' }, 'start+=5%');
tl.fromTo($blockadeTexts[2], { x: '100vw' }, { x: '-60vw' }, 'start+=5%');
tl.fromTo($blockadeTexts[3], { x: '-100vw' }, { x: '90vw' }, 'start+=10%');


// Go Top
function gotop(y, duration = 1000) {
  const initialY = document.documentElement.scrollTop || document.body.scrollTop;
  const baseY = (initialY + y) * 0.5;
  const difference = initialY - baseY;
  const startTime = performance.now();
  const step = () => {
    let normalizedTime = (performance.now() - startTime) / duration;
    if (normalizedTime > 1) {
      normalizedTime = 1;
    }
    window.scrollTo(0, baseY + difference * Math.cos(normalizedTime * Math.PI));
    if (normalizedTime < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}
