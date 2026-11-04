(()=>{
if(window.WLMedia)return;
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const can="speechSynthesis" in window&&"SpeechSynthesisUtterance" in window;
const BAD=/fred|ralph|kathy|junior|albert|bad news|good news|bahh|bells|boing|bubbles|cellos|jester|organ|superstar|trinoids|whisper|wobble|zarvox/i;
const GOOD=[/premium|enhanced|natural/i,/siri/i,/samantha|ava|allison|nicky|zoe|evan|nathan|google us english/i];
let VO=null;
const pick=()=>{try{const vs=speechSynthesis.getVoices().filter(v=>/^en[-_]US/i.test(v.lang)&&!BAD.test(v.name));if(!vs.length)return null;for(const re of GOOD){const v=vs.find(v=>re.test(v.name));if(v)return v}return vs.find(v=>v.default)||vs[0]}catch(e){return null}};
if(can){try{speechSynthesis.onvoiceschanged=()=>{VO=pick()}}catch(e){}VO=pick()}
const say=t=>{if(!can)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="en-US";const v=VO||pick();if(v)u.voice=v;u.rate=.92;u.pitch=1;u.volume=1;speechSynthesis.speak(u)}catch(e){}};
const sp=t=>can?`<button class="mv-sp" data-say="${esc(t)}" aria-label="อ่านออกเสียง">🔊</button>`:"";
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const range=n=>Array.from({length:n},(_,i)=>i);
const TABS=[["slides","🎞️ สไลด์"],["cards","🃏 บัตรคำ"],["sheet","📝 ใบงาน"],["game","🎮 เกม"]];
let M=null,V=[],ov=null,tab="slides",st={},prevOverflow="";

const CSS=`
#mv{position:fixed;inset:0;z-index:1000;background:var(--bg);color:var(--ink);font-family:var(--f-body);display:flex;flex-direction:column;height:100dvh;padding-top:env(safe-area-inset-top,0)}
#mv button{font-family:inherit;color:inherit}
.mvh{display:flex;align-items:center;gap:10px;padding:8px 14px;border-bottom:1px solid var(--line);background:var(--surface)}
.mvh button{height:40px;border:1px solid var(--line);border-radius:10px;background:var(--bg);font:600 15px var(--f-body);padding:0 12px;cursor:pointer}
.mvt{font:600 15px var(--f-head);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mvtabs{display:flex;gap:6px;padding:8px 14px;overflow-x:auto;border-bottom:1px solid var(--line);background:var(--surface)}
.mvtabs button{flex:1;min-width:max-content;height:40px;border:1px solid var(--line);border-radius:10px;background:var(--bg);font:600 15px var(--f-body);padding:0 12px;cursor:pointer}
.mvtabs button.on,.gtabs button.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.mvb{flex:1;overflow:auto;padding:14px max(14px,env(safe-area-inset-left,0)) calc(14px + env(safe-area-inset-bottom,0));display:flex;flex-direction:column;gap:12px;max-width:760px;width:100%;margin:0 auto}
.mv-sp{border:0;background:var(--accent-tint);border-radius:999px;width:38px;height:38px;font-size:18px;cursor:pointer;vertical-align:middle;margin-left:6px}
.em{font-size:72px;line-height:1.15;text-align:center}.em.big{font-size:104px}
.th{color:var(--muted)}
.mvnav{display:flex;align-items:center;justify-content:center;gap:14px;padding-top:4px;margin-top:auto}
.mvnav button{min-width:56px;height:48px;border:1px solid var(--line);border-radius:12px;background:var(--surface);font:700 22px var(--f-body);cursor:pointer}
.mvnav button:disabled{opacity:.35}
.mvnav span{font:600 15px var(--f-head);color:var(--muted)}
.sl{flex:1;background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:22px 18px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;text-align:center}
.sl h1{font-size:clamp(28px,8vw,44px)}.sl h2{font-size:clamp(26px,7vw,38px);color:var(--accent)}
.sl .th{font-size:18px}.sl .ln{font-size:17px;margin:0}
.vg{display:grid;gap:18px;width:100%}
.vi{background:var(--accent-tint);border-radius:16px;padding:16px 10px;display:flex;flex-direction:column;align-items:center;gap:4px}
.vi .en{font:700 clamp(22px,6vw,30px) var(--f-head)}.vi .th{font-size:17px}
.ls{list-style:none;padding:0;display:flex;flex-direction:column;gap:10px;width:100%}
.ls li{background:var(--soft);border-radius:12px;padding:10px 14px;font:600 clamp(18px,5vw,24px) var(--f-head);text-align:left}
.ls small{display:block;font:400 16px var(--f-body);color:var(--muted)}
.fc{flex:1;min-height:260px;background:var(--surface);border:2px solid var(--accent);border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;padding:20px;text-align:center;cursor:pointer}
.fc .en{font:700 clamp(26px,7vw,36px) var(--f-head)}.fc .th{font:600 clamp(24px,6.5vw,32px) var(--f-head);color:var(--ink)}
.fc small{color:var(--muted)}
.fc:not(.flip) .fcb,.fc.flip .fcf{display:none}
.fcf,.fcb{display:flex;flex-direction:column;align-items:center;gap:10px}
.bt{height:46px;border:1px solid var(--line);border-radius:12px;background:var(--surface);font:600 15px var(--f-body);padding:0 14px;cursor:pointer}
.bt.pri{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.row{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.ws{background:#fff;color:#000;border-radius:12px;padding:16px;display:flex;flex-direction:column;gap:14px;font-size:16px}
.ws h3{font:700 17px var(--f-head);margin:0}.ws h3 small{font:400 14px var(--f-body);color:#444}
.wsh{border-bottom:2px solid #000;padding-bottom:8px;display:flex;flex-direction:column;gap:4px}
.pics{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}
.pic{border:1px solid #999;border-radius:8px;text-align:center;padding:4px 0}.pic b{display:block;font-size:14px}.pic span{font-size:26px;line-height:1.3}
.mt{margin:0;padding-left:1.4em;display:flex;flex-direction:column;gap:6px}
.blank{display:inline-block;min-width:44px;border-bottom:1px solid #000;margin-left:10px;text-align:center}
.ak{visibility:hidden;text-decoration:none;color:#0a7a3d;font-weight:700}.show .ak{visibility:visible}
.bank{display:flex;flex-wrap:wrap;gap:6px}.bank span{border:1px solid #999;border-radius:999px;padding:2px 10px;font-size:14px}
.srt{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.box{border:1px solid #000;border-radius:8px;padding:8px}.box h4{margin:0 0 6px;font:700 15px var(--f-head);text-align:center}
.box .ln{border-bottom:1px dotted #555;min-height:28px}
.wl{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
.gtabs{display:flex;gap:6px;justify-content:center;flex-wrap:wrap}.gtabs button{height:40px;border:1px solid var(--line);border-radius:10px;background:var(--surface);font:600 15px var(--f-body);padding:0 12px;cursor:pointer}
.gs{text-align:center;font:600 16px var(--f-head);color:var(--muted)}
.mg{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.tl{min-height:68px;border:2px solid var(--line);border-radius:14px;background:var(--surface);font:600 17px var(--f-head);padding:6px;cursor:pointer}
.tl .em{font-size:38px}.tl.sel{border-color:var(--accent);background:var(--accent-tint)}
.tl.ok{border-color:var(--s3);background:var(--s3t);opacity:.7}.tl.no{border-color:#c0392b;background:var(--at)}
.op{display:grid;grid-template-columns:1fr;gap:8px}
.o{min-height:54px;border:2px solid var(--line);border-radius:14px;background:var(--surface);font:600 18px var(--f-head);padding:8px;cursor:pointer}
.o.ok{border-color:var(--s3);background:var(--s3t)}.o.no{border-color:#c0392b;background:var(--at)}
.sm{flex:1;border-radius:20px;padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;background:var(--surface);border:2px solid var(--line)}
.sm.yes{border-color:var(--s3);background:var(--s3t)}.sm.no{border-color:#c0392b;background:var(--at)}
.sm .w{font:700 clamp(26px,8vw,40px) var(--f-head)}
.ans,.pool{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.ans{min-height:64px;border:2px dashed var(--line);border-radius:14px;padding:8px;align-items:center}
.ans.no{border-color:#c0392b;background:var(--at)}.ans.ok{border-color:var(--s3);background:var(--s3t)}
.chip{min-height:44px;border:1px solid var(--line);border-radius:12px;background:var(--surface);font:600 17px var(--f-head);padding:6px 12px;cursor:pointer}
.tq{font:600 clamp(19px,5.2vw,26px) var(--f-head);text-align:center}
.wln{border-bottom:1px dotted #555;min-height:30px}.ws .tx{margin:0;line-height:1.55}
.cl{display:grid;grid-template-columns:1fr 1fr;gap:6px 14px}.cl ol{margin:0;padding-left:1.4em}.cl .rl{list-style:upper-alpha}
@media (min-width:560px){.vg{grid-template-columns:1fr 1fr}.op{grid-template-columns:1fr 1fr}.mg{grid-template-columns:repeat(4,1fr)}}
@media print{body>.wrap{display:none!important}
 #mv{position:static!important;display:block!important;height:auto!important;background:#fff!important;color:#000!important}
 .mvh,.mvtabs,.mvnp{display:none!important}.mvb{overflow:visible!important;padding:0!important;max-width:none!important}
 .ws{border-radius:0;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact}}
`;

function slides(){
  const S=M.slides,n=S.length,i=st.s=Math.max(0,Math.min(n-1,st.s||0)),s=S[i];let h="";
  if(s.t==="title")h=`<div class="em">${s.em}</div><h1 lang="en">${esc(s.en)}</h1><p class="th">${esc(s.th)}</p>${(s.lines||[]).map(l=>`<p class="ln">${esc(l)}</p>`).join("")}`;
  else if(s.t==="big")h=`<div class="em big">${s.em}</div><h1 lang="en">${esc(s.en)}</h1><div>${sp(s.en)}</div><p class="th">${esc(s.th)}</p>`;
  else if(s.t==="vocab")h=`<div class="vg">${s.items.map(k=>{const w=V[k];return `<div class="vi">${w[2]?`<div class="em">${w[2]}</div>`:""}<div class="en" lang="en">${esc(w[0])}${sp(w[0])}</div><div class="th">${esc(w[1])}</div></div>`}).join("")}</div>`;
  else h=`<h2 lang="en">${esc(s.en)}</h2><p class="th">${esc(s.th||"")}</p><ul class="ls">${s.lines.map(l=>`<li><span lang="en">${esc(l[0])}</span>${sp(l[0])}${l[1]?`<small>${esc(l[1])}</small>`:""}</li>`).join("")}</ul>`;
  $b().innerHTML=`<div class="sl" id="mvsl">${h}</div><div class="mvnav"><button id="mvp" aria-label="ก่อนหน้า" ${i?"":"disabled"}>‹</button><span>${i+1} / ${n}</span><button id="mvn" aria-label="ถัดไป" ${i<n-1?"":"disabled"}>›</button></div>`;
  const go=d=>{st.s=i+d;slides()};
  $("mvp").onclick=()=>go(-1);$("mvn").onclick=()=>go(1);
  let x0=null;const el=$("mvsl");
  el.ontouchstart=e=>{x0=e.touches[0].clientX};
  el.ontouchend=e=>{if(x0===null)return;const dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>50){if(dx<0&&i<n-1)go(1);else if(dx>0&&i>0)go(-1)}};
  st.key=d=>{if(d<0&&i>0)go(-1);if(d>0&&i<n-1)go(1)};
}

function cards(){
  const o=st.order||(st.order=range(V.length)),n=o.length,i=st.f=Math.max(0,Math.min(n-1,st.f||0)),w=V[o[i]];
  $b().innerHTML=`<div class="fc${st.flip?" flip":""}" id="fc"><div class="fcf">${w[2]?`<div class="em big">${w[2]}</div>`:""}<div class="en" lang="en">${esc(w[0])}${sp(w[0])}</div><small>แตะการ์ดเพื่อดูคำแปล</small></div><div class="fcb"><div class="th">${esc(w[1])}</div><div class="en" lang="en">${esc(w[0])}</div><small>แตะการ์ดเพื่อพลิกกลับ</small></div></div>
  <div class="mvnav"><button id="mvp" aria-label="ก่อนหน้า" ${i?"":"disabled"}>‹</button><span>${i+1} / ${n}</span><button id="mvn" aria-label="ถัดไป" ${i<n-1?"":"disabled"}>›</button></div>
  <div class="row"><button class="bt" id="fcs">🔀 สลับลำดับ</button></div>`;
  const go=d=>{st.f=i+d;st.flip=false;cards()};
  $("fc").onclick=e=>{if(e.target.closest(".mv-sp"))return;st.flip=!st.flip;cards()};
  $("mvp").onclick=()=>go(-1);$("mvn").onclick=()=>go(1);
  $("fcs").onclick=()=>{st.order=shuf(range(V.length));st.f=0;st.flip=false;cards()};
  st.key=d=>{if(d<0&&i>0)go(-1);if(d>0&&i<n-1)go(1)};
}

function sheet(){
  if(M.ws.parts)return partsSheet();
  const W=M.ws,L="ABCDEFGHIJKLMNOP",ord=W.order,letter=v=>L[ord.indexOf(v)];
  $b().innerHTML=`<div class="row mvnp"><button class="bt" id="wsa">👁️ ${st.ans?"ซ่อน":"แสดง"}เฉลย</button><button class="bt pri" id="wsp">🖨️ พิมพ์ใบงาน</button></div>
  <div class="ws${st.ans?" show":""}">
   <div class="wsh"><b>ใบงาน ${esc(W.title)} · ${esc(M.course||"อ22102 ภาษาอังกฤษ ม.2")}</b><span>ชื่อ-สกุล ................................................ ชั้น ${esc(M.lv||"ม.2")} เลขที่ ........ คะแนน ......</span></div>
   <div><h3>Part A <small>จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง</small></h3>
    <div class="pics">${ord.map((v,k)=>`<div class="pic"><b>${L[k]}</b><span>${V[v][2]}</span></div>`).join("")}</div></div>
   <ol class="mt">${V.map((w,v)=>`<li><span lang="en">${esc(w[0])}</span><i class="blank"><u class="ak">${letter(v)}</u></i></li>`).join("")}</ol>
   <div><h3>Part B <small>เขียนคำศัพท์ลงตามความถี่ที่ทำ</small></h3>
    <div class="bank" lang="en">${V.map(w=>`<span>${esc(w[0])}</span>`).join("")}</div></div>
   <div class="srt">${W.sort.map(c=>`<div class="box"><h4 lang="en">${esc(c.h)}</h4>${c.items.map(v=>`<div class="ln"><u class="ak" lang="en">${esc(V[v][0])}</u></div>`).join("")}</div>`).join("")}</div>
   <div><h3>Part C <small>เขียนประโยคให้สมบูรณ์ (ตอบอิสระ)</small></h3>
    <ul class="wl" lang="en">${W.write.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  </div>`;
  $("wsa").onclick=()=>{st.ans=!st.ans;sheet()};$("wsp").onclick=()=>window.print();
}

function partsSheet(){
  const W=M.ws,L="ABCDEFGHIJKLMNOP",ab="abcd",ol=a=>`<ol class="mt">${a.join("")}</ol>`,
   blank=(a,w)=>`<i class="blank" style="min-width:${w||44}px"><u class="ak" lang="en">${esc(a)}</u></i>`,
   rot=(a,k)=>a.map((_,i)=>a[(i+k)%a.length]);
  const part=(p,i)=>{
    let b="";const tx=(p.text||[]).map(t=>`<p class="tx" lang="en">${esc(t)}</p>`).join("");
    if(p.k==="pics"){const o=p.ord;
      b=`<div class="pics">${o.map((v,k)=>`<div class="pic"><b>${L[k]}</b><span>${V[v][2]}</span></div>`).join("")}</div>`+ol(V.map((w,v)=>`<li><span lang="en">${esc(w[0])}</span>${blank(L[o.indexOf(v)])}</li>`))}
    else if(p.k==="fill")b=(p.bank?`<div class="bank" lang="en">${p.bank.map(x=>`<span>${esc(x)}</span>`).join("")}</div>`:"")+ol(p.items.map(x=>`<li lang="en">${esc(x.q).replace("___",blank(x.a,110))}</li>`));
    else if(p.k==="tf")b=ol(p.items.map(x=>`<li><span lang="en">${esc(x.q)}</span>${blank(x.a?"T":"F")}</li>`));
    else if(p.k==="mcq")b=ol(p.items.map(x=>`<li><span lang="en">${esc(x.q)}</span><div class="bank" lang="en">${x.o.map((o,k)=>`<span>${ab[k]}) ${esc(o)}</span>`).join("")}</div>${blank(ab[x.a])}</li>`));
    else if(p.k==="order")b=ol(p.items.map(x=>`<li><span lang="en">${rot(x.w,2).map(esc).join("  /  ")}</span><div class="wln"><u class="ak" lang="en">${esc(x.a)}</u></div></li>`));
    else if(p.k==="match"){const n=p.items.length,o=p.ord||p.items.map((_,k)=>(n+2-k)%n);
      b=`<div class="cl"><ol>${p.items.map((x,k)=>`<li><span lang="en">${esc(x[0])}</span>${blank(L[o.indexOf(k)],36)}</li>`).join("")}</ol><ol class="rl">${o.map(k=>`<li lang="en">${esc(p.items[k][1])}</li>`).join("")}</ol></div>`}
    else if(p.k==="sort"){const all=[];for(let k=0;all.length<p.boxes.reduce((s,c)=>s+c.items.length,0);k++)p.boxes.forEach(c=>{if(c.items[k])all.push(c.items[k])});
      b=`<div class="bank" lang="en">${all.map(x=>`<span>${esc(x)}</span>`).join("")}</div><div class="srt">${p.boxes.map(c=>`<div class="box"><h4 lang="en">${esc(c.h)}</h4>${c.items.map(t=>`<div class="ln"><u class="ak" lang="en">${esc(t)}</u></div>`).join("")}</div>`).join("")}</div>`}
    else b=`<ul class="wl" lang="en">${p.items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
    return `<div><h3>Part ${L[i]} <small>${esc(p.n||"")}</small></h3>${tx}${b}</div>`};
  $b().innerHTML=`<div class="row mvnp"><button class="bt" id="wsa">👁️ ${st.ans?"ซ่อน":"แสดง"}เฉลย</button><button class="bt pri" id="wsp">🖨️ พิมพ์ใบงาน</button></div>
  <div class="ws${st.ans?" show":""}"><div class="wsh"><b>ใบงาน ${esc(W.title)} · ${esc(M.course||"อ22102 ภาษาอังกฤษ ม.2")}</b><span>ชื่อ-สกุล ................................................ ชั้น ${esc(M.lv||"ม.2")} เลขที่ ........ คะแนน ......</span></div>${W.parts.map(part).join("")}</div>`;
  $("wsa").onclick=()=>{st.ans=!st.ans;sheet()};$("wsp").onclick=()=>window.print();
}

function game(){
  const GL={match:"🔗 จับคู่",quiz:"❓ ควิซคำศัพท์",simon:"🙋 Simon says",mcq:"🧠 ควิซเนื้อหา",order:"🧩 เรียงประโยค"};
  const gs=(M.games||["match","quiz","simon"]).map(k=>[k,GL[k]]);st.g=gs.some(g=>g[0]===st.g)?st.g:gs[0][0];
  $b().innerHTML=`<div class="gtabs">${gs.map(g=>`<button data-g="${g[0]}" class="${g[0]===st.g?"on":""}">${g[1]}</button>`).join("")}</div><div id="gbox" style="display:flex;flex-direction:column;gap:12px;flex:1"></div>`;
  $b().querySelectorAll("[data-g]").forEach(b=>b.onclick=()=>{st.g=b.dataset.g;game()});
  ({match:gMatch,quiz:gQuiz,simon:gSimon,mcq:gMcq,order:gOrder})[st.g]($("gbox"));
}

function gMatch(box){
  const pick=shuf(range(V.length)).slice(0,6),tiles=shuf(pick.flatMap(v=>[{v,k:"p"},{v,k:"w"}]));
  let sel=null,done=0,miss=0;
  const head=()=>`<div class="gs" id="gst">แตะภาพ แล้วแตะคำศัพท์ที่ตรงกัน · ผิด ${miss} ครั้ง</div>`;
  box.innerHTML=head()+`<div class="mg">${tiles.map((t,i)=>`<button class="tl" data-i="${i}">${t.k==="p"?(V[t.v][2]?`<span class="em">${V[t.v][2]}</span>`:`<span>${esc(V[t.v][1])}</span>`):`<span lang="en">${esc(V[t.v][0])}</span>`}</button>`).join("")}</div>`;
  const T=box.querySelectorAll(".tl");
  T.forEach(b=>b.onclick=()=>{
    const i=+b.dataset.i;if(b.classList.contains("ok"))return;
    if(sel===i){b.classList.remove("sel");sel=null;return}
    if(sel===null){sel=i;b.classList.add("sel");return}
    const a=tiles[sel],c=tiles[i],ta=T[sel];ta.classList.remove("sel");
    if(a.v===c.v&&a.k!==c.k){ta.classList.add("ok");b.classList.add("ok");say(V[a.v][0]);done++;sel=null;
      if(done===pick.length)box.insertAdjacentHTML("beforeend",`<div class="gs">🎉 ครบแล้ว! ผิด ${miss} ครั้ง</div><div class="row"><button class="bt pri" id="gr">เล่นใหม่</button></div>`),$("gr").onclick=()=>gMatch(box);
    }else{miss++;$("gst").textContent=`แตะภาพ แล้วแตะคำศัพท์ที่ตรงกัน · ผิด ${miss} ครั้ง`;
      ta.classList.add("no");b.classList.add("no");const x=ta;sel=null;setTimeout(()=>{x.classList.remove("no");b.classList.remove("no")},600)}
  });
}

function gQuiz(box){
  const qs=shuf(range(V.length)).slice(0,10);let q=0,score=0,lock=false;
  const ask=()=>{
    if(q>=qs.length){box.innerHTML=`<div class="sm"><div class="em">🏆</div><div class="w">${score} / ${qs.length}</div></div><div class="row"><button class="bt pri" id="gr">เล่นใหม่</button></div>`;$("gr").onclick=()=>gQuiz(box);return}
    const v=qs[q],opts=shuf([v,...shuf(range(V.length).filter(i=>i!==v)).slice(0,3)]);lock=false;
    box.innerHTML=`<div class="gs">ข้อ ${q+1} / ${qs.length} · คะแนน ${score}</div>${V[v][2]?`<div class="em big">${V[v][2]}</div>`:`<div class="tq">${esc(V[v][1])}</div>`}<div class="op">${opts.map(o=>`<button class="o" data-o="${o}" lang="en">${esc(V[o][0])}</button>`).join("")}</div>`;
    box.querySelectorAll(".o").forEach(b=>b.onclick=()=>{if(lock)return;lock=true;const ok=+b.dataset.o===v;
      if(ok){score++;b.classList.add("ok")}else{b.classList.add("no");box.querySelector(`[data-o="${v}"]`).classList.add("ok")}
      say(V[v][0]);setTimeout(()=>{q++;ask()},1200)});
  };ask();
}

function gSimon(box){
  const draw=cur=>{
    box.innerHTML=cur?`<div class="sm${st.hide?"":cur.sim?" yes":" no"}"><div class="gs">${st.hide?"":cur.sim?"✅ Simon says → ทำท่าตาม":"⛔ ไม่มี Simon says → ห้ามทำท่า!"}</div><div class="em big">${V[cur.v][2]}</div><div class="w" lang="en">${cur.sim?"Simon says … ":""}${esc(V[cur.v][0])}</div><div class="th">${esc(V[cur.v][1])}</div></div>`
      :`<div class="sm"><div class="em big">🙋</div><div class="w">Simon says …</div><div class="th">กด “ต่อไป” เพื่อเริ่ม ครูพูดตามเสียงที่ได้ยิน นักเรียนทำท่าเฉพาะเมื่อมี Simon says</div></div>`;
    box.insertAdjacentHTML("beforeend",`<div class="row"><button class="bt pri" id="sn">▶ ต่อไป</button><button class="bt" id="sr">🔊 ซ้ำ</button><button class="bt" id="sh">${st.hide?"👁️ แสดงป้ายบอกคำตอบ":"🙈 ซ่อนป้ายบอกคำตอบ"}</button></div>`);
    const speak=()=>cur&&say((cur.sim?"Simon says ":"")+V[cur.v][0]);
    $("sn").onclick=()=>{cur={v:Math.random()*V.length|0,sim:Math.random()<.65};draw(cur);speak()};
    $("sr").onclick=speak;$("sh").onclick=()=>{st.hide=!st.hide;draw(cur)};
  };draw(null);
}

function gMcq(box){
  const qs=shuf(M.mcq).slice(0,10);let q=0,score=0,lock=false;
  const ask=()=>{
    if(q>=qs.length){box.innerHTML=`<div class="sm"><div class="em">🏆</div><div class="w">${score} / ${qs.length}</div></div><div class="row"><button class="bt pri" id="gr">เล่นใหม่</button></div>`;$("gr").onclick=()=>gMcq(box);return}
    const x=qs[q];lock=false;
    box.innerHTML=`<div class="gs">ข้อ ${q+1} / ${qs.length} · คะแนน ${score}</div><div class="tq" lang="en">${esc(x.q)}${sp(x.q)}</div>${x.th?`<div class="th" style="text-align:center">${esc(x.th)}</div>`:""}<div class="op">${x.o.map((o,k)=>`<button class="o" data-o="${k}" lang="en">${esc(o)}</button>`).join("")}</div><div class="gs" id="gx"></div>`;
    box.querySelectorAll(".o").forEach(b=>b.onclick=()=>{if(lock)return;lock=true;const ok=+b.dataset.o===x.a;
      if(ok){score++;b.classList.add("ok")}else{b.classList.add("no");box.querySelector(`[data-o="${x.a}"]`).classList.add("ok")}
      if(x.ex)$("gx").textContent=x.ex;setTimeout(()=>{q++;ask()},x.ex?2200:1200)});
  };ask();
}

function gOrder(box){
  const qs=shuf(M.order).slice(0,8);let q=0,score=0;
  const ask=()=>{
    if(q>=qs.length){box.innerHTML=`<div class="sm"><div class="em">🏆</div><div class="w">${score} / ${qs.length}</div></div><div class="row"><button class="bt pri" id="gr">เล่นใหม่</button></div>`;$("gr").onclick=()=>gOrder(box);return}
    const x=qs[q];let pool=shuf(range(x.w.length)),ans=[],tries=0;
    const draw=(msg,cls)=>{
      box.innerHTML=`<div class="gs">ข้อ ${q+1} / ${qs.length} · คะแนน ${score}</div>${x.th?`<div class="th" style="text-align:center">${esc(x.th)}</div>`:""}
      <div class="ans ${cls||""}" lang="en">${ans.length?ans.map(i=>`<button class="chip" data-a="${i}">${esc(x.w[i])}</button>`).join(""):`<small class="th">แตะคำด้านล่างเพื่อเรียงเป็นประโยค</small>`}</div>
      <div class="pool" lang="en">${pool.map(i=>`<button class="chip" data-p="${i}">${esc(x.w[i])}</button>`).join("")}</div>
      <div class="gs">${msg||""}</div><div class="row"><button class="bt" id="gc">↺ ล้าง</button><button class="bt pri" id="gk">✔ ตรวจ</button></div>`;
      box.querySelectorAll("[data-p]").forEach(b=>b.onclick=()=>{const i=+b.dataset.p;pool=pool.filter(k=>k!==i);ans.push(i);draw()});
      box.querySelectorAll("[data-a]").forEach(b=>b.onclick=()=>{const i=+b.dataset.a;ans=ans.filter(k=>k!==i);pool.push(i);draw()});
      $("gc").onclick=()=>{pool=shuf(range(x.w.length));ans=[];draw()};
      $("gk").onclick=()=>{
        if(pool.length)return draw("ยังเรียงไม่ครบ");
        if(ans.map(i=>x.w[i]).join(" ")===x.a){if(!tries)score++;say(x.a);draw("✅ ถูกต้อง","ok");setTimeout(()=>{q++;ask()},1400)}
        else{tries++;draw("❌ ยังไม่ถูก ลองเรียงใหม่","no")}};
    };draw();
  };ask();
}

const $=id=>document.getElementById(id),$b=()=>$("mvb");
function paint(){
  ov.querySelectorAll(".mvtabs button").forEach(b=>b.classList.toggle("on",b.dataset.t===tab));
  st.key=null;({slides,cards,sheet,game})[tab]();$b().scrollTop=0;
}
function close(){
  if(!ov)return;try{speechSynthesis.cancel()}catch(e){}
  document.removeEventListener("keydown",onKey);ov.remove();ov=null;document.body.style.overflow=prevOverflow;
}
function onKey(e){
  if(e.key==="Escape")close();
  else if(st.key&&e.key==="ArrowLeft")st.key(-1);
  else if(st.key&&e.key==="ArrowRight")st.key(1);
}
function open(k,id,title){
  const all=(window.WLM||{})[k];M=all&&all[id];if(!M)return false;
  V=M.vocab;tab="slides";st={};close();
  if(!document.getElementById("mvcss")){const s=document.createElement("style");s.id="mvcss";s.textContent=CSS;document.head.appendChild(s)}
  ov=document.createElement("div");ov.id="mv";ov.setAttribute("role","dialog");ov.setAttribute("aria-modal","true");
  ov.innerHTML=`<div class="mvh"><button id="mvx">✕ ปิด</button><div class="mvt">สื่อการสอน · ${esc(title||"")}</div></div><nav class="mvtabs">${TABS.map(t=>`<button data-t="${t[0]}">${t[1]}</button>`).join("")}</nav><div class="mvb" id="mvb"></div>`;
  prevOverflow=document.body.style.overflow;document.body.style.overflow="hidden";document.body.appendChild(ov);
  ov.addEventListener("click",e=>{const b=e.target.closest("[data-say]");if(b)say(b.dataset.say)});
  $("mvx").onclick=close;
  ov.querySelectorAll(".mvtabs button").forEach(b=>b.onclick=()=>{tab=b.dataset.t;paint()});
  document.addEventListener("keydown",onKey);paint();return true;
}
window.WLMedia={open,close};
})();
