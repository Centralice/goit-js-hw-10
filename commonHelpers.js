import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l}from"./assets/vendor-2b44ac2e.js";const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0];const n=r.getTime();new Date().getTime()>n?(window.alert("Please choose a date in the future!"),a.disabled=!0):a.disabled=!1}};l("#datetime-picker",m);function h(e){const c=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:d,seconds:i}}let r;const a=document.querySelector("[data-start]");a.addEventListener("click",f);function f(e){setInterval(()=>{const n=r.getTime(),o=new Date().getTime(),s=n-o,t=h(s);document.querySelector("[data-days]").textContent=t.days,document.querySelector("[data-hours]").textContent=t.hours,document.querySelector("[data-minutes]").textContent=t.minutes,document.querySelector("[data-seconds]").textContent=t.seconds},1e3)}
//# sourceMappingURL=commonHelpers.js.map