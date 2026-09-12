const chapters=['intro','timeline','archive','notes','game','awards','letter','birthday','wish','finale'];
const $=s=>document.querySelector(s);
const $$=s=>[...document.querySelectorAll(s)];
function show(id){
  $$('.chapter').forEach(x=>x.classList.remove('active'));
  const el=$('#'+id); if(el) el.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
function burst(count=90){
  const host=$('#confetti'); host.innerHTML='';
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

const music=$('#birthdayMusic');
let musicOn=false;
async function startMusic(){try{await music.play();musicOn=true;$('#musicToggle').textContent='♫';}catch(e){}}
$('#musicToggle').addEventListener('click',()=>{if(music.paused){startMusic()}else{music.pause();musicOn=false;$('#musicToggle').textContent='♪'}});

function openGift(){
  $('#gift').classList.add('opened'); burst(55); startMusic();
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

$$('.note').forEach(n=>n.addEventListener('click',()=>$('#noteReveal').textContent=n.dataset.note));

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
  card.classList.add('flipped');
  if(!first){first=card;return}
  moves++; $('#moves').textContent='Moves: '+moves;
  const second=card;
  if(first.dataset.icon===second.dataset.icon){
    first.classList.add('matched'); second.classList.add('matched'); pairs++; $('#matches').textContent=`Pairs: ${pairs} / 5`; first=null;
    if(pairs===5){$('#gameResult').textContent='You did it 🎉 Your brain still works at 21.';$('#gameNext').classList.remove('hidden');burst(45)}
  }else{
    lock=true; setTimeout(()=>{first.classList.remove('flipped');second.classList.remove('flipped');first=null;lock=false},650);
  }
}

$('#lightsBtn').addEventListener('click',()=>{
  $('#partyRoom').classList.add('lit'); burst(100);
  $('#birthdayCopy').innerHTML='<span class="eyebrow">LIGHTS ON ✨</span><h2>There she is.</h2><p>Okay. Now the actual birthday can begin.</p>';
  setTimeout(()=>{$('#cakeStage').classList.remove('hidden');burst(80)},1100);
});

let candlesOut=false;
function blowCandles(){
  if(candlesOut)return; candlesOut=true;
  $$('.flame').forEach(f=>f.classList.add('off'));
  burst(80);
  $('#cakePrompt').innerHTML='<h2>Perfect. 🎉</h2><p>Now close your eyes and make a wish.</p><button class="primary" id="wishGo">Close your eyes →</button>';
  $('#wishGo').addEventListener('click',()=>show('wish'));
}
$('#blowBtn').addEventListener('click',blowCandles);
$$('.flame').forEach(f=>f.addEventListener('click',blowCandles));

$('#wishBtn').addEventListener('click',()=>{
  $('#wishCard').innerHTML='<div class="moon">✦</div><span class="eyebrow">WISH LOCKED IN</span><h2>Okay. Open your eyes.</h2><p>Now it is time for cake.</p><button class="primary" id="cutGo">Cut the cake 🎂</button>';
  $('#cutGo').addEventListener('click',()=>{show('finale');setTimeout(()=>{$('#cakeCut').classList.add('cut');burst(130)},350);startMusic()});
});

$('#replay').addEventListener('click',()=>{location.reload()});

// If the browser supports microphone access, blowing can be added later without making it required.
// The current fallback is deliberately tap-based so the birthday never gets blocked by permissions.
