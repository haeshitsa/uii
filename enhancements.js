/* LUXE CUTE INTERACTION PASS — additive, defensive, no dependency */
(()=>{
 const qs=s=>document.querySelector(s), qsa=s=>[...document.querySelectorAll(s)];
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const burst=(x,y,n=12)=>{if(reduce)return;for(let i=0;i<n;i++){const e=document.createElement('span');e.className='spark-burst';e.textContent=['✦','✧','·','★'][i%4];e.style.left=x+'px';e.style.top=y+'px';e.style.setProperty('--dx',(Math.random()*180-90)+'px');e.style.setProperty('--dy',(Math.random()*180-110)+'px');document.body.appendChild(e);setTimeout(()=>e.remove(),900)}};
 const dot=document.createElement('span');dot.className='cursor-dot';document.body.appendChild(dot);
 addEventListener('pointermove',e=>{dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';dot.classList.add('show');});
 addEventListener('pointerdown',e=>burst(e.clientX,e.clientY,7));
 addEventListener('scroll',()=>qs('.topbar')?.classList.toggle('scrolled',scrollY>20),{passive:true});
 // Reveal cards as each chapter becomes active.
 const reveal=()=>{qsa('.chapter.active .time-card,.chapter.active .photo-card,.chapter.active .note,.chapter.active .award').forEach((el,i)=>{if(el.dataset.revealed)return;el.dataset.revealed='1';el.style.setProperty('--tilt',getComputedStyle(el).transform==='none'?'0deg':(i%2?'1deg':'-1deg'));el.classList.add('reveal');el.style.animationDelay=(i*65)+'ms';});};
 new MutationObserver(reveal).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});reveal();
 // Add tactile photo focus and a tiny sparkle burst.
 qsa('.photo-card').forEach(card=>card.addEventListener('click',e=>{card.classList.toggle('focus');burst(e.clientX,e.clientY,5)}));
 // Make the final cake feel like a real action.
 const cake=qs('#cakeCut');const replay=qs('#replay');
 replay?.addEventListener('click',()=>{cake?.classList.remove('cutting');setTimeout(()=>cake?.classList.add('cutting'),350);});
 // Candle interaction: gracefully augment the existing blow/tap flow without replacing it.
 qsa('.flame').forEach(f=>f.addEventListener('click',e=>{f.classList.add('off');burst(e.clientX,e.clientY,9)}));
 // A tiny keyboard-friendly sparkle on primary actions.
 qsa('.primary,.secondary').forEach(b=>b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,5)}}));
})();
