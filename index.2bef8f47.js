!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const o=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const r=new URL(e,o);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const c=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){n(new Error(`Failed to import: ${e}`)),l(d)},onload(){a(self[t].moduleMap[r]),l(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/twitch-bill-cypher/");const e=new Audio("/twitch-bill-cypher/gravity.5dec0e9d.mp3"),t=[{name:".hat-container",delay:1e3},{name:".eye",delay:2e3},{name:".eyelashes-bottom",delay:2300},{name:".eyelashes-top",delay:2200},{name:".left.arm",delay:4e3},{name:".right.arm",delay:4e3},{name:".left.leg",delay:6e3},{name:".right.leg",delay:6e3},{name:".tie",delay:8e3}],a=document.querySelector(".container"),o=document.querySelector("body");e.volume=.5,o.addEventListener("click",(()=>{a.classList.add("off"),e.play(),t.forEach((e=>{const t=document.querySelector(e.name);setTimeout((()=>t.classList.add("on")),e.delay)})),setTimeout((()=>a.classList.add("dark")),8e3)}));
