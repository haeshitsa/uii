const chapters=['intro','timeline','archive','notes','game','awards','letter','birthday','wish','finale'];
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];

// Cute brother-sister bear preloader. Self-contained so it does not depend on a third-party GIF host.
const bearGif='data:image/gif;base64,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';

function show(id){
  $$('.chapter').forEach(x=>x.classList.remove('active'));
  const el=$('#'+id); if(el) el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(()=>observeReveals(),80);
}

function buildPreloader(){
  if($('#preloader')) return;
  document.body.classList.add('loading');
  const loader=document.createElement('div');
  loader.id='preloader'; loader.className='preloader';
  loader.innerHTML=`<div class="loader-sparkles">✦　✧　✦</div><div class="bear-loader-card"><div class="bear-loader-glow"></div><img class="bear-loader-gif" src="${bearGif}" alt="Cute animated sibling bears hugging"><div class="loader-hearts">♡　♡　♡</div></div><p class="loader-kicker">one tiny birthday website</p><h1>Khushi, waittt...</h1><p class="loader-copy">Bhai is putting the final touches on your surprise ✨</p><div class="loader-bar"><span id="loaderProgress"></span></div><p class="loader-small">loading the chaos • the memories • the cake</p>`;
  document.body.prepend(loader);
  let progress=0;
  const bar=$('#loaderProgress');
  const tick=setInterval(()=>{progress=Math.min(100,progress+Math.floor(Math.random()*13)+7); if(bar) bar.style.width=progress+'%'; if(progress>=100) clearInterval(tick)},110);
  setTimeout(()=>{loader.classList.add('done');document.body.classList.remove('loading');setTimeout(()=>loader.remove(),800)},1750);
}

function burst(count=90){
  const host=$('#confetti'); if(!host)return; host.innerHTML='';
  for(let i=0;i<count;i++){
    const p=document.createElement('i'); p.className='confetti-piece';
    p.style.left=Math.random()*100+'vw'; p.style.top=(-10-Math.random()*30)+'vh';
    p.style.background=['#ff9db6','#ffd86b','#9ed8e9','#c7b5ff','#ffb58f','#b9df9b'][i%6];
    p.style.transform=`rotate(${Math.random()*360}deg)`;
    p.style.animationDelay=(Math.random()*.55)+'s';
    host.appendChild(p);
  }
  setTimeout(()=>host.innerHTML='',2800);
}

function sparklesAt(x,y,count=12){
  const host=$('#confetti'); if(!host)return;
  for(let i=0;i<count;i++){
    const s=document.createElement('i'); s.className='sparkle-pop'; s.textContent=i%2?'✦':'✧';
    s.style.left=x+'px'; s.style.top=y+'px'; s.style.setProperty('--dx',(Math.random()*100-50)+'px'); s.style.setProperty('--dy',(Math.random()*100-70)+'px');
    host.appendChild(s); setTimeout(()=>s.remove(),900);
  }
}

const music=$('#birthdayMusic');
let musicOn=false;
async function startMusic(){try{await music.play();musicOn=true;$('#musicToggle').textContent='♫';}catch(e){}}
$('#musicToggle').addEventListener('click',()=>{if(music.paused){startMusic()}else{music.pause();musicOn=false;$('#musicToggle').textContent='♪'}});

function openGift(){
  if($('#gift').classList.contains('opened')) return;
  $('#gift').classList.add('opened'); burst(55); startMusic(); sparklesAt(innerWidth/2,innerHeight/2,18);
  setTimeout(()=>show('timeline'),900);
}
$('#openGift').addEventListener('click',openGift);
$('#gift').addEventListener('click',openGift);
$('#gift').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')openGift()});

$$('.next').forEach(btn=>btn.addEventListener('click',()=>{
  const id=btn.dataset.next;
  show(id);
  if(id==='game') initGame();
}));

$$('.note').forEach(n=>n.addEventListener('click',()=>{ $('#noteReveal').textContent=n.dataset.note; sparklesAt(n.getBoundingClientRect().left+n.offsetWidth/2,n.getBoundingClientRect().top+n.offsetHeight/2,8); }));

const icons=['🌼','🎀','📸','🧸','✨'];
let deck=[]; let first=null; let lock=false; let moves=0; let pairs=0;
function initGame(){
  const grid=$('#memoryGrid'); if(grid.dataset.ready==='1')return;
  grid.dataset.ready='1';
  deck=[...icons,...icons].sort(()=>Math.random()-.5);
  deck.forEach((icon,i)=>{
    const card=document.createElement('button'); card.className='memory-card'; card.dataset.icon=icon; card.dataset.index=i;
    card.innerHTML=`<span class="front">?</span><span class="back">${icon}</span>`;
    card.addEventListener('click',()=>flip(card)); grid.appendChild(card);
  });
}
function flip(card){
  if(lock||card.classList.contains('flipped')||card.classList.contains('matched'))return;
  card.classList.add('flipped'); sparklesAt(card.getBoundingClientRect().left+card.offsetWidth/2,card.getBoundingClientRect().top+card.offsetHeight/2,4);
  if(!first){first=card;return}
  moves++; $('#moves').textContent='Moves: '+moves;
  const second=card;
  if(first.dataset.icon===second.dataset.icon){
    first.classList.add('matched'); second.classList.add('matched'); pairs++; $('#matches').textContent=`Pairs: ${pairs} / 5`; first=null; burst(10);
    if(pairs===5){$('#gameResult').textContent='You did it 🎉 Your brain still works at 21.';$('#gameNext').classList.remove('hidden');burst(45)}
  }else{
    lock=true; setTimeout(()=>{first.classList.remove('flipped');second.classList.remove('flipped');first=null;lock=false},650);
  }
}

$('#lightsBtn').addEventListener('click',()=>{
  $('#partyRoom').classList.add('lit'); burst(100); sparklesAt(innerWidth/2,innerHeight/2,24);
  $('#birthdayCopy').innerHTML='<span class="eyebrow">LIGHTS ON ✨</span><h2>There she is.</h2><p>Okay. Now the actual birthday can begin.</p>';
  setTimeout(()=>{$('#cakeStage').classList.remove('hidden');burst(80)},1100);
});

let candlesOut=false;
function blowCandles(){
  if(candlesOut)return; candlesOut=true;
  $$('.flame').forEach(f=>f.classList.add('off'));
  burst(80); sparklesAt(innerWidth/2,innerHeight/2,20);
  $('#cakePrompt').innerHTML='<h2>Perfect. 🎉</h2><p>Now close your eyes and make a wish.</p><button class="primary magnetic" id="wishGo">Close your eyes →</button>';
  $('#wishGo').addEventListener('click',()=>show('wish'));
}
$('#blowBtn').addEventListener('click',blowCandles);
$$('.flame').forEach(f=>f.addEventListener('click',blowCandles));

$('#wishBtn').addEventListener('click',()=>{
  $('#wishCard').innerHTML='<div class="moon">✦</div><span class="eyebrow">WISH LOCKED IN</span><h2>Okay. Open your eyes.</h2><p>Now it is time for cake.</p><button class="primary magnetic" id="cutGo">Cut the cake 🎂</button>';
  sparklesAt(innerWidth/2,innerHeight/2,16);
  $('#cutGo').addEventListener('click',()=>{show('finale');setTimeout(()=>{$('#cakeCut').classList.add('cut');burst(130);sparklesAt(innerWidth/2,innerHeight/2,30)},350);startMusic()});
});

$('#replay').addEventListener('click',()=>{location.reload()});

function observeReveals(){
  if(!('IntersectionObserver' in window)){$$('.reveal').forEach(x=>x.classList.add('visible'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
  $$('.reveal:not(.visible)').forEach(x=>io.observe(x));
}

function addButtonPolish(){
  $$('.magnetic').forEach(btn=>{
    btn.addEventListener('pointermove',e=>{const r=btn.getBoundingClientRect();btn.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');btn.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')});
    btn.addEventListener('pointerleave',()=>{btn.style.removeProperty('--mx');btn.style.removeProperty('--my')});
  });
  $$('.photo-card').forEach(card=>card.addEventListener('click',()=>card.classList.toggle('focus')));
}

buildPreloader();
addButtonPolish();
observeReveals();

// If the browser supports microphone access, blowing can be added later without making it required.
// The current fallback is deliberately tap-based so the birthday never gets blocked by permissions.
