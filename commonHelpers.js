import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";const h=document.querySelector("#datetime-picker");let o=document.querySelector("button[data-start]"),p=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),v=document.querySelector("span[data-seconds]"),s=null,c=new Date;o.disabled=!0;const w={class:"notific",position:"topRight",title:"Error",titleColor:"white",message:"Please choose a date in the future",messageColor:"white",backgroundColor:"red",close:!0,timeout:5e3},C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=new Date;t[0]-e>0?(o.disabled=!1,c=t[0]):(o.disabled=!0,f.show(w))}};m(h,C);o.addEventListener("click",b);function b(){s=setInterval(()=>{const e=c-new Date;if(o.disabled=!0,e<0){clearInterval(s);return}D(T(e))},1e3)}function D({days:t,hours:e,minutes:r,seconds:a}){p.textContent=n(t),y.textContent=n(e),S.textContent=n(r),v.textContent=n(a)}function T(t){const i=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:d,seconds:l}}function n(t){return String(t).padStart(2,0)}
//# sourceMappingURL=commonHelpers.js.map
