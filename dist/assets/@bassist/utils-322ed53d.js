/**
 * name: hello-vue3
 * version: v0.0.0
 * description: 
 * author: 
 */
function t(){return typeof window<"u"?navigator.userAgent.toLowerCase():""}const n=typeof window<"u",r=/iPhone|phone|android|iPod|pad|iPad/i;function s(){return n?r.test(t()):!1}/Android/i.test(t());/iPhone|iPod|iPad|iOS/i.test(t());/uni-app|html5plus/.test(t());/MicroMessenger/i.test(t());/\sQQ|mqqbrowser|qzone|qqbrowser/i.test(t());/mqqbrowser|qqbrowser/i.test(t());/qzone\/.*_qz_([\d.]+)/i.test(t());/(weibo).*weibo__([\d.]+)/i.test(t());/(baiduboxapp)\/([\d.]+)/i.test(t());function a(e,{immediate:o}={immediate:!0}){n&&(o&&window.addEventListener("load",e,!1),window.addEventListener("orientationchange"in window?"orientationchange":"resize",e,!1))}function d(){try{return"production"}catch{return}}d();function i(e){try{return e==="production"}catch{return!1}}i("development");i("test");i("production");export{a as q,s as x};
