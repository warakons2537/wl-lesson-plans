let UNIT,PLANS,IND;
const UNIT_LIST=[[5,"Food & Drink","ม.1 · อ21101"],[6,"My Town","ม.1 · อ21101"],[7,"Hobbies & Talents","ม.1 · อ21101"],[8,"Sports Champions","ม.1 · อ21101"],["m2u5","Animal World","ม.2 · อ22102"],["m2u6","Transport","ม.2 · อ22102"],["m2u7","What's on TV?","ม.2 · อ22102"],["m2u8","Helping at Home","ม.2 · อ22102"],["m3u4","The Arts","ม.3 · อ23101–อ23102"],["m3u5","Wild World","ม.3 · อ23101–อ23102"],["m3u6","Festivals","ม.3 · อ23101–อ23102"],["m3u7","Country and City Life","ม.3 · อ23101–อ23102"],["m3u8","Health and Fitness","ม.3 · อ23101–อ23102"]];
const uKey=()=>UNIT.k||UNIT.no;
const hashId=id=>(UNIT.k?UNIT.k.slice(0,2)+"-":"")+id.replace(".","-");
const STAGES=[
 {n:"Warm up",th:"นำเข้าสู่บทเรียน"},{n:"Presentation",th:"นำเสนอความรู้"},
 {n:"Practice",th:"ฝึกใช้"},{n:"Production",th:"ใช้ภาษาสร้างงาน"},{n:"Wrap up",th:"สรุป"}];
const KPA={K:"ความรู้",P:"ทักษะ",A:"เจตคติ"};
const TEACHER="นายวรากร ตรงต่อกิจ";
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const $=id=>document.getElementById(id);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const MEDIA=[["m2u8",8,15],["m2u5",5,14],[5,5,14]].flatMap(([k,n,c])=>Array.from({length:c},(_,i)=>k+":"+n+"."+(i+1))); // [ยูนิต, เลขบท, จำนวนแผน]
const loadJs=src=>new Promise((ok,no)=>{if(document.querySelector(`script[data-s="${src}"]`))return ok();
  const s=document.createElement("script");s.src=src;s.dataset.s=src;s.onload=ok;s.onerror=()=>no(new Error(src));document.head.appendChild(s)});
async function openMedia(p){
  const b=$("mbtn");if(b)b.disabled=true;
  try{await loadJs("media.js");await loadJs("data/"+(UNIT.k?UNIT.k.replace(/^(m\d)u/,"$1-u"):"u"+UNIT.no)+"-media.js");
    WLMedia.open(uKey(),p.id,p.id+" "+p.title)}
  catch(e){alert("โหลดสื่อการสอนไม่สำเร็จ กรุณาเชื่อมต่ออินเทอร์เน็ตแล้วลองใหม่")}
  if(b)b.disabled=false}

function render(i){
  const p=PLANS[i], T=UNIT.no;
  let at=0; const rng=p.t.map(m=>{const r=[at,at+m];at+=m;return r});
  const ind=p.ind.map(c=>{const d=IND[c]; if(!d)return ""; const e=d[1]==="E";
    return `<li><span class="code">${esc(c)}</span><span class="tag${e?" end":""}">${e?"ตัวชี้วัดปลายทาง":"ตัวชี้วัดระหว่างทาง"}</span><span class="tx">${esc(d[0])}</span></li>`}).join("");
  const stages=p.st.map((s,k)=>`
   <article class="stage" style="--sc:var(--s${k+1});--st:var(--s${k+1}t)">
    <header class="sh"><div class="min">${p.t[k]}<small>นาที</small></div>
     <div><h3>${STAGES[k].n}</h3><div class="th">${STAGES[k].th}</div></div>
     <div class="rng">นาทีที่<br>${rng[k][0]}–${rng[k][1]}</div></header>
    <div class="sb">
     <div><div class="sub">ขั้นตอน</div><ol class="do">${s.do.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div>
     ${s.say.length?`<div class="say"><div class="lab">ครูพูด (TEACHER SAYS)</div>${s.say.map(x=>`<p lang="en">${esc(x)}</p>`).join("")}</div>`:""}
    </div></article>`).join("");
  const key=(UNIT.k?"wl-"+UNIT.k:"wl-u"+T)+"-"+p.id;
  const chk=p.prep.map((x,j)=>`<label><input type="checkbox" data-k="${key}-c${j}"><span>${esc(x)}</span></label>`).join("");
  const as=p.as.map(a=>`<li><span class="kpa ${a[0]}">${a[0]}</span><div><div class="t">${esc(a[1])}</div>
    <div class="m">${esc(KPA[a[0]])} · เครื่องมือ: ${esc(a[2])} · เกณฑ์: ${esc(a[3])}${a[4]?" · "+esc(a[4]):""}</div></div></li>`).join("");
  $("app").innerHTML=`
  <header class="hero">
   <div class="eyebrow">${esc(UNIT.course||"อ21101 ภาษาอังกฤษ ม.1")} · Unit ${T} ${esc(UNIT.name)}</div>
   <div class="id">${esc(p.id)}</div>
   <h1>${esc(p.title)}</h1>
   <div class="src">ต้นฉบับ: แผนที่ ${p.src} ${esc(p.srcName)} · ชั่วโมงที่ ${p.h}/${p.hs}</div>
   <div class="meta"><span>${UNIT.mins||60} นาที</span><span>นักเรียน ${esc(UNIT.students||14)} คน</span><span>${esc(p.book)}</span></div>
  </header>
  ${MEDIA.includes(uKey()+":"+p.id)?'<button class="mbtn" id="mbtn">🎬 สื่อการสอน · สไลด์ บัตรคำ ใบงาน เกม</button>':""}
  <section class="sec"><h2>ตัวชี้วัด</h2><div class="card"><ul class="ind" style="padding:0">${ind}</ul></div></section>
  <section class="sec"><h2>สาระสำคัญ</h2><div class="card">${esc(p.core)}</div></section>
  <section class="sec"><h2>จุดประสงค์</h2><div class="card"><ul class="obj" style="padding:0">${p.obj.map(o=>`<li><span class="kpa ${o[0]}">${o[0]}</span><span>${esc(o[1])}</span></li>`).join("")}</ul></div></section>
  <section class="sec"><h2>ศัพท์และโครงสร้าง</h2><div class="card two">
   <div><div class="sub">ศัพท์</div><div class="chips" lang="en">${p.words.map(w=>`<span>${esc(w)}</span>`).join("")}</div></div>
   <div><div class="sub">โครงสร้าง / สำนวน</div><div class="chips" lang="en">${p.sent.map(w=>`<span>${esc(w)}</span>`).join("")}</div></div></div></section>
  <section class="sec"><h2>แถบเวลา ${UNIT.mins||60} นาที</h2><div class="card">
   <div class="tbar">${p.t.map((m,k)=>`<div style="flex:${m};background:var(--s${k+1})">${m}</div>`).join("")}</div>
   <div class="leg">${p.t.map((m,k)=>`<div><i style="background:var(--s${k+1})"></i><span>${STAGES[k].n}</span><b>${rng[k][0]}–${rng[k][1]} น.</b></div>`).join("")}</div></div></section>
  <section class="sec"><h2>เตรียม / ตรวจก่อนสอน</h2><div class="card chk" id="chk">${chk}</div></section>
  <section class="sec"><h2>กิจกรรมการเรียนรู้ 5 ขั้น</h2>${stages}</section>
  <section class="sec"><h2>สื่อและแหล่งเรียนรู้</h2><div class="card"><ul class="do" style="--sc:var(--accent)">${p.media.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div></section>
  <section class="sec"><h2>วัดผล K / P / A</h2><div class="card"><ul class="as" style="padding:0">${as}</ul></div></section>
  <section class="sec"><h2>บันทึกหลังสอน</h2><div class="card notes" id="notes">
   <div><label for="n1">ผลที่เกิดกับนักเรียน</label><textarea id="n1" data-k="${key}-n1"></textarea></div>
   <div><label for="n2">ปัญหา / อุปสรรค</label><textarea id="n2" data-k="${key}-n2"></textarea></div>
   <div><label for="n3">แนวทางแก้ไข / ข้อเสนอแนะ</label><textarea id="n3" data-k="${key}-n3"></textarea></div>
   <div class="sig"><div class="ln"></div><div>ลงชื่อ ................................................ ครูผู้สอน</div><b>(${TEACHER})</b><div>วันที่ ........ / ........ / ............</div></div>
  </div></section>`;
  if($("mbtn"))$("mbtn").onclick=()=>openMedia(p);
  document.querySelectorAll("[data-k]").forEach(el=>{
    const v=store.get(el.dataset.k);
    if(el.type==="checkbox"){el.checked=v==="1";el.onchange=()=>store.set(el.dataset.k,el.checked?"1":"0")}
    else{if(v)el.value=v;el.oninput=()=>store.set(el.dataset.k,el.value)}});
  $("pick").value=i; $("prev").disabled=i===0; $("next").disabled=i===PLANS.length-1;
  document.title="แผนสอน "+(UNIT.label?UNIT.label+" ":"")+"Unit "+T+" "+UNIT.name;
}
function go(i){i=Math.max(0,Math.min(PLANS.length-1,i));
  try{history.replaceState(null,"","#p"+hashId(PLANS[i].id))}catch(e){}
  render(i);window.scrollTo(0,0)}
const part=()=>[document.querySelector(".ubar"),document.querySelector(".bar"),$("app"),$("foot")];
function view(home){$("home").hidden=!home;part().forEach(e=>e.hidden=home)}
function showHome(){view(true);document.title="แผนการสอน passion (Warakon)";
  try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}window.scrollTo(0,0)}
function loadUnit(n){return new Promise((ok,no)=>{
  if(window.WLU&&WLU[n])return ok(WLU[n]);
  const s=document.createElement("script");s.src=typeof n==="number"?"data/u"+n+".js":"data/"+n.replace(/^(m\d)u/,"$1-u")+".js";
  s.onload=()=>WLU[n]?ok(WLU[n]):no(new Error("empty"));s.onerror=()=>no(new Error("load"));
  document.head.appendChild(s)})}
function fillPick(){
  let g="",h="";PLANS.forEach((p,i)=>{
    if(p.src!==g){if(h)h+="</optgroup>";g=p.src;h+=`<optgroup label="แผนที่ ${p.src} ${esc(p.srcName)}">`}
    h+=`<option value="${i}">${esc(p.id)} ${esc(p.title)}</option>`});
  $("pick").innerHTML=h+"</optgroup>"}
async function openUnit(n,planId){
  view(false);
  try{const d=await loadUnit(n);UNIT=d.UNIT;PLANS=d.PLANS;IND=d.IND}
  catch(e){$("app").innerHTML='<div class="card">โหลดข้อมูลยูนิตนี้ไม่สำเร็จ กรุณาเชื่อมต่ออินเทอร์เน็ตแล้วลองใหม่</div>';return}
  $("unit").value=n;fillPick();
  $("foot").textContent=(UNIT.course||"อ21101 ภาษาอังกฤษ ม.1")+" · "+(UNIT.book||"PASSION 1")+" · โรงเรียนบ้านวังลึก(ยุวนาฏชนูทิศ)";
  let i=PLANS.findIndex(p=>p.id===planId);if(i<0)i=0;
  try{history.replaceState(null,"","#p"+hashId(PLANS[i].id))}catch(e){}
  render(i)}
function parseHash(){const m=(location.hash||"").match(/^#p(m[23]-)?(\d+)-(\d+)$/);
  if(!m)return null;const n=m[1]?m[1].slice(0,2)+"u"+m[2]:+m[2];
  return UNIT_LIST.some(u=>u[0]===n)?{n,id:m[2]+"."+m[3]}:null}
(function init(){
  $("unit").innerHTML=UNIT_LIST.map((u,i)=>(i===0||UNIT_LIST[i-1][2]!==u[2]?(i?"</optgroup>":"")+`<optgroup label="${esc(u[2])}">`:"")+`<option value="${u[0]}">Unit ${String(u[0]).replace(/^m\du/,"")} ${esc(u[1])}</option>`).join("")+"</optgroup>";
  $("unit").onchange=e=>{const v=e.target.value;openUnit(/^\d+$/.test(v)?+v:v,null).then(()=>window.scrollTo(0,0))};
  $("pick").onchange=e=>go(+e.target.value);
  $("prev").onclick=()=>go(+$("pick").value-1);$("next").onclick=()=>go(+$("pick").value+1);
  $("foot").textContent="อ21101 ภาษาอังกฤษ ม.1 · PASSION 1 · โรงเรียนบ้านวังลึก(ยุวนาฏชนูทิศ)";
  $("homeBtn").onclick=showHome;
  document.querySelectorAll(".lv[data-lv]").forEach(b=>b.onclick=()=>openUnit({"2":"m2u5","3":"m3u4"}[b.dataset.lv]||5,null).then(()=>window.scrollTo(0,0)));
  const h=parseHash();if(h)openUnit(h.n,h.id);else showHome();
  window.addEventListener("hashchange",()=>{const h=parseHash();if(!h)return;
    if(UNIT&&h.n!==uKey())openUnit(h.n,h.id);
    else{const f=PLANS.findIndex(p=>p.id===h.id);if(f>=0&&f!==+$("pick").value)render(f)}});
  if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
})();
