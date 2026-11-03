(window.WLM=window.WLM||{})["m2u8"]=(()=>{
// vocab: [English, ไทย, emoji]  (ภาพ = อีโมจิของระบบ ไม่ใช้ภาพจากหนังสือ)
const V=[
["make the bed","จัดเตียง","🛏️"],
["make the dinner","ทำอาหารเย็น","🍳"],
["vacuum the carpet","ดูดฝุ่นพรม","🔌🌀"],
["sweep the floor","กวาดพื้น","🧹"],
["take out the rubbish","นำขยะไปทิ้ง","🗑️"],
["lay the table","จัดโต๊ะ","🍴"],
["tidy up the bedroom","ทำความสะอาดห้องนอน","🧺"],
["feed the cat / dog","ให้อาหารแมว/หมา","🐱🐶"],
["load / unload the dishwasher","นำจานเข้า/ออกเครื่องล้างจาน","🫧🍽️"],
["do the ironing","รีดผ้า","👕♨️"]];
const M81={
 vocab:V,
 slides:[
  {t:"title",em:"🏠",en:"Jobs in the Home",th:"งานบ้าน · PASSION 2 Unit 8 · แผน 8.1",
   lines:["บอกคำศัพท์งานบ้านและจับคู่กับภาพได้","พูดและเขียนข้อความให้ข้อมูลเกี่ยวกับงานบ้านที่ทำได้"]},
  {t:"big",em:"🤔",en:"What jobs do you do at home?",th:"Warm up · คุณทำงานบ้านอะไรบ้าง"},
  {t:"vocab",items:[0,1]},{t:"vocab",items:[2,3]},{t:"vocab",items:[4,5]},
  {t:"vocab",items:[6,7]},{t:"vocab",items:[8,9]},
  {t:"lines",en:"How often do you do it?",th:"ความถี่ · ทำบ่อยแค่ไหน",
   lines:[["every day","ทุกวัน"],["once a week","สัปดาห์ละครั้ง"],["twice a week","สัปดาห์ละสองครั้ง"],
          ["I make the bed every day.",""],["I sweep the floor twice a week.",""]]},
  {t:"big",em:"🎮",en:"Simon says … make the bed.",th:"เกม Simon says · ได้ยิน Simon says ให้ทำท่า ถ้าไม่ได้ยินห้ามทำท่า"},
  {t:"lines",en:"Sentence patterns",th:"โครงสร้างประโยค",
   lines:[["Which activities have you ever done at home?",""],["In the morning, I always make the bed.",""],["On Saturday, I do the ironing for my family.",""]]},
  {t:"lines",en:"Writing model (Ex.3)",th:"ตัวอย่างข้อความ",
   lines:[["In the morning, I always make the bed.",""],["I also lay the table for my family's dinner and wash the dishes.",""],
          ["After that, I sweep the floor and take out the rubbish.",""],["On Saturday, I do the ironing for my family.",""]]},
  {t:"lines",en:"Wrap up",th:"สรุป",
   lines:[["Say three jobs you do at home.","บอกงานบ้าน 3 อย่าง"],["How often do you do them?","ทำบ่อยแค่ไหน"],["Make a sentence with your partner.","แต่งประโยคกับเพื่อน"]]}
 ],
 ws:{
  title:"Jobs in the Home",
  order:[7,2,9,4,0,6,3,8,1,5], // ภาพ A–J เรียงสลับ (ค่า = ลำดับคำศัพท์)
  sort:[
   {h:"every day",items:[0,1,5,7,8]},
   {h:"once / twice a week",items:[9,2,3,4,6]}],
  write:["In the morning, I always ____________________.","On Saturday, I ____________________ for my family.","I ____________________ once / twice a week."]
 }
};
return {"8.1":M81};
})();
