import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0];const o=s.getTime();new Date().getTime()>o?(m.show({title:"Ay Caramba!",titleColor:"#ffd60a",message:"Please choose a date in the future",messageColor:"#ffd60a",backgroundColor:"#0077b6",position:"topRight"}),n.disabled=!0):n.disabled=!1}};l("#datetime-picker",S);const f=document.querySelector("#datetime-picker");function h(t){const e=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:d,minutes:i,seconds:u}}let s;const n=document.querySelector("[data-start]");n.disabled=!0;n.addEventListener("click",y);function y(t){n.disabled=!0;const o=setInterval(()=>{const a=s.getTime(),c=new Date().getTime(),r=a-c,e=h(r);r>0?(document.querySelector("[data-days]").textContent=String(e.days).padStart(2,"0"),document.querySelector("[data-hours]").textContent=String(e.hours).padStart(2,"0"),document.querySelector("[data-minutes]").textContent=String(e.minutes).padStart(2,"0"),document.querySelector("[data-seconds]").textContent=String(e.seconds).padStart(2,"0")):(clearInterval(o),f.value="")},1e3)}
//# sourceMappingURL=commonHelpers.js.map
