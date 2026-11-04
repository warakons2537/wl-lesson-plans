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
const R={"8.1":M81};
// ตัวช่วยสร้างสไลด์ (แผน 8.2 ขึ้นไป)
const T=(em,en,th,lines)=>({t:"title",em,en,th,lines});
const B=(em,en,th)=>({t:"big",em,en,th});
const L=(en,th,lines)=>({t:"lines",en,th,lines});
const vsl=n=>Array.from({length:Math.ceil(n/2)},(_,i)=>({t:"vocab",items:2*i+1<n?[2*i,2*i+1]:[2*i]}));
R["8.2"]={
 vocab:[["vacuum","ดูดฝุ่น","🌀"],["fold the laundry","พับเสื้อผ้า","👕"],["water the plants","รดน้ำต้นไม้","🪴"],["dust the furniture","ปัดฝุ่นเฟอร์นิเจอร์","🪶"],
  ["mop the floor","ถูพื้น","🪣"],["mow","ดายหญ้า","🌿"],["put back the toys","เก็บของเล่นเข้าที่","🧸"],["do the laundry","ซักผ้า","🧺"],
  ["cook dinner","ทำอาหารเย็น","🍲"],["wash dishes","ล้างจาน","🧼"],["iron clothes","รีดผ้า","👔"],["sew the clothes","เย็บผ้า","🪡"]],
 slides:[
  T("🎥","Housework at Home and at Work","PASSION 2 Unit 8 · แผน 8.2",["ดูวิดีโอเพื่อระบุสถานที่และงานบ้านที่แต่ละคนทำ","ถาม-ตอบเกี่ยวกับงานบ้านที่ทำ ชอบ และไม่ชอบทำ"]),
  B("✏️","Picture Dictation","เกมวาดภาพใบ้ · วาดงานบ้านให้เพื่อนทายโดยไม่พูดคำ"),
  ...vsl(12),
  L("Watch and answer","ดูวิดีโอแล้วตอบ",[["Where do they work?","พวกเขาทำงานที่ไหน"],["In a hotel and in a home.","ที่โรงแรมและที่บ้าน"],["What jobs do they do?","พวกเขาทำงานบ้านอะไรบ้าง"]]),
  L("Ask and answer","ถาม-ตอบกับเพื่อน",[["What jobs do you do in your house?","คุณทำงานบ้านอะไรบ้าง"],["When do you do it?","ทำเมื่อไร"],["Which jobs do you like doing?","ชอบทำงานอะไร"],["Which jobs do you dislike doing?","ไม่ชอบทำงานอะไร"]]),
  L("Model answers","ตัวอย่างคำตอบ",[["I take out the rubbish every day and I do laundry on Saturdays.",""],["I like watering the plants.","ฉันชอบรดน้ำต้นไม้"],["I don't like ironing clothes.","ฉันไม่ชอบรีดผ้า"]]),
  L("Wrap up","สรุป",[["Say three jobs you do at home.","บอกงานบ้าน 3 อย่าง"],["Which job do you like? Which job do you dislike?","ชอบอะไร ไม่ชอบอะไร"]])],
 ws:{title:"Housework at Home and at Work",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[7,2,9,4,0,11,6,3,10,1,8,5]},
  {k:"fill",n:"เลือกคำจากกรอบเติมให้ประโยคสมบูรณ์",bank:["vacuum","mop","water","fold","cook","sew"],items:[
   {q:"I ___ dinner for my family on Sundays.",a:"cook"},{q:"I ___ the carpet to clean up the dust.",a:"vacuum"},{q:"I ___ the plants in the garden every morning.",a:"water"},
   {q:"I ___ the floor with a bucket of water.",a:"mop"},{q:"I ___ the clothes after I wash them.",a:"fold"},{q:"My grandmother can ___ clothes with a needle.",a:"sew"}]},
  {k:"write",n:"ตอบคำถามให้สมบูรณ์ (ตอบอิสระ)",items:["What jobs do you do in your house? — I ____________________.","Which jobs do you like doing? — I like ____________________.","Which jobs do you dislike doing? — I don't like ____________________."]}]},
 games:["match","quiz","simon","order"],
 order:[{w:["I take out","the rubbish","every day","and I do laundry","on Saturdays."],a:"I take out the rubbish every day and I do laundry on Saturdays."},
  {w:["What jobs","do you do","in your house?"],a:"What jobs do you do in your house?"},{w:["Which jobs","do you like","doing?"],a:"Which jobs do you like doing?"},
  {w:["When","do you","do it?"],a:"When do you do it?"},{w:["I water","the plants","every morning."],a:"I water the plants every morning."}]
};
R["8.3"]={
 vocab:[["host","เจ้าของบ้านที่รับแขก","🙋"],["spare room","ห้องว่าง","🛏️"],["strangers","คนแปลกหน้า","👥"],["accommodation","ที่พัก","🧳"],["hotel","โรงแรม","🏨"],
  ["private house","บ้านส่วนตัว","🏡"],["number of nights","จำนวนคืน","🌙"],["services","บริการ","🛎️"],["scanning","การอ่านสแกนหาข้อมูล","🔍"],["Airbnb","แอปจองที่พักกับเจ้าของบ้าน","📱"]],
 slides:[
  T("📧","Staying with an Airbnb Host","PASSION 2 Unit 8 · แผน 8.3",["อ่านอีเมลแล้วตอบคำถามเพื่อระบุรายละเอียด","เขียนเปรียบเทียบ Airbnb กับโรงแรม"]),
  B("🌏","Which country or city do you want to visit?","Warm up · อยากไปเที่ยวประเทศหรือเมืองไหน"),
  ...vsl(10),
  L("Scanning","กลยุทธ์การอ่านแบบสแกน",[["Scanning = look quickly for specific information.","มองหาข้อมูลเฉพาะอย่างรวดเร็ว ไม่ต้องอ่านทุกคำ"],["Look for names, numbers and places.","มองหาชื่อ ตัวเลข และสถานที่"]]),
  L("Email from Mia (1)","อ่านอีเมล",[["Hi Nina,",""],["I'm in Chiang Mai now! I'm not staying in a hotel.",""],["I'm staying in a spare room in a private house, and my host is Mr Somchai.",""]]),
  L("Email from Mia (2)","อ่านอีเมลต่อ",[["He is very friendly. He makes breakfast every morning, but he doesn't clean my room every day, so I have to make my bed.",""],["I'm staying for five nights. I love it!",""],["Mia",""]]),
  L("Scan for information","สแกนหาข้อมูล",[["Accommodation type?","a spare room in a private house"],["Name of the host?","Mr Somchai"],["Number of nights?","five nights"]]),
  L("Airbnb vs hotel","เปรียบเทียบ",[["Airbnb: stay in a private house, meet a local host.","พักในบ้านส่วนตัว พบเจ้าของบ้าน"],["Hotel: staff make the bed every day, more services.","พนักงานทำเตียงทุกวัน มีบริการมากกว่า"]]),
  L("Wrap up","สรุป",[["Where did Mia stay?","Mia พักที่ไหน"],["Make one sentence about an Airbnb and a hotel.","แต่งประโยคเปรียบเทียบ 1 ประโยค"]])],
 ws:{title:"Staying with an Airbnb Host",parts:[
  {k:"tf",n:"อ่านอีเมลแล้วเขียน T (จริง) หรือ F (เท็จ)",text:["Hi Nina,","I'm in Chiang Mai now! I'm not staying in a hotel. I'm staying in a spare room in a private house, and my host is Mr Somchai.","He is very friendly. He makes breakfast every morning, but he doesn't clean my room every day, so I have to make my bed.","I'm staying for five nights. I love it!  — Mia"],items:[
   {q:"Mia is staying in a hotel.",a:false},{q:"Mia's host is Mr Somchai.",a:true},{q:"The host makes breakfast every morning.",a:true},{q:"The host cleans Mia's room every day.",a:false},{q:"Mia is staying for five nights.",a:true}]},
  {k:"fill",n:"สแกนหาข้อมูลจากอีเมลแล้วเติมคำ",items:[{q:"Place: Mia is in ___.",a:"Chiang Mai"},{q:"Accommodation type: a ___ in a private house.",a:"spare room"},{q:"Name of the host: Mr ___.",a:"Somchai"},{q:"Number of nights: ___ nights.",a:"five"}]},
  {k:"sort",n:"เขียนข้อความลงช่องให้ตรงกับ Airbnb หรือ Hotel",boxes:[{h:"Airbnb",items:["stay in a private house","meet a local host","may make your own bed"]},{h:"Hotel",items:["staff make the bed every day","has services such as a restaurant","many guests are strangers"]}]},
  {k:"write",n:"เขียนเปรียบเทียบ (ตอบอิสระ)",items:["A hotel has ____________________, but an Airbnb ____________________.","I want to stay at ______________ because ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Where is Mia staying?",o:["In a hotel","In a spare room in a private house","In a dormitory"],a:1},
  {q:"Mia is staying in a hotel.",o:["True","False"],a:1,ex:"เธอพักห้องว่างในบ้านส่วนตัว ไม่ใช่โรงแรม"},
  {q:"Who is the host?",o:["Nina","Mia","Mr Somchai"],a:2},{q:"How many nights is Mia staying?",o:["Three","Five","Seven"],a:1},
  {q:"Scanning means …",o:["reading every word slowly","looking quickly for specific information","translating the whole text"],a:1},
  {q:"The host doesn't clean Mia's room every day. So Mia …",o:["has to make her bed","doesn't have to make her bed","must pay more"],a:0},
  {q:"Which place usually has services such as a restaurant?",o:["A hotel","A spare room","A private house"],a:0},
  {q:"Which word means คนแปลกหน้า?",o:["host","strangers","services"],a:1}],
 order:[{w:["I'm staying","in a spare room","in a private house."],a:"I'm staying in a spare room in a private house."},{w:["The host","doesn't clean","my room","every day."],a:"The host doesn't clean my room every day."},
  {w:["Which city","do you want","to visit?"],a:"Which city do you want to visit?"},{w:["I'm staying","here","for five nights."],a:"I'm staying here for five nights."}]
};
R["8.4"]={
 vocab:[["have to","ต้อง (I/you/we/they)",""],["has to","ต้อง (he/she/it)",""],["had to","ต้อง (อดีต)",""],["don't have to","ไม่จำเป็นต้อง",""],["doesn't have to","ไม่จำเป็นต้อง (he/she/it)",""],
  ["rules","กฎระเบียบ","📜"],["school uniform","ชุดนักเรียน","👔"],["lunch box","กล่องข้าว","🍱"]],
 slides:[
  T("📏","have to / don't have to","PASSION 2 Unit 8 · แผน 8.4",["บอกโครงสร้างและการใช้ have to / don't have to","เขียนประโยคบอกสิ่งที่ต้องทำและไม่ต้องทำ"]),
  B("🏠","What do you have to do at home?","Warm up · ที่บ้านคุณต้องทำอะไรบ้าง"),
  ...vsl(8),
  L("have to","ต้องทำ · จำเป็นต้องทำ",[["I have to make the bed every day.","ฉันต้องจัดเตียงทุกวัน"],["She has to wash the dishes.","เธอต้องล้างจาน"],["Students have to wear school uniforms.","นักเรียนต้องใส่ชุดนักเรียน"]]),
  L("don't have to","ไม่จำเป็นต้องทำ (ทำก็ได้ ไม่ทำก็ได้)",[["I don't have to feed pets because I don't have any.","ฉันไม่ต้องให้อาหารสัตว์เพราะไม่มีสัตว์เลี้ยง"],["He doesn't have to wear a tie.","เขาไม่จำเป็นต้องผูกเนคไท"],["Students don't have to bring all books to school.","นักเรียนไม่ต้องนำหนังสือทุกเล่มมาโรงเรียน"]]),
  L("Structure","โครงสร้าง",[["+  Subject + have to / has to + V","บอกเล่า"],["−  Subject + don't / doesn't have to + V","ปฏิเสธ"],["?  Do / Does + Subject + have to + V ?","คำถาม"],["Yes, I do. / No, she doesn't.","ตอบรับ / ปฏิเสธ"]]),
  L("Choose the form","he / she / it ใช้ has to · doesn't have to",[["She ___ feed the dog.  →  has to",""],["They ___ wear a uniform.  →  have to",""],["He ___ cook dinner.  →  doesn't have to","ไม่จำเป็น"]]),
  L("Your turn","ฝึกพูดกับเพื่อน",[["At home, I have to …",""],["At school, I have to …",""],["I don't have to …",""]]),
  L("Wrap up","สรุป",[["have to = must do","ต้องทำ"],["don't have to = not necessary","ไม่จำเป็นต้องทำ"]])],
 ws:{title:"have to / don't have to",parts:[
  {k:"sort",n:"เขียนสิ่งที่นักเรียนต้องทำ / ไม่จำเป็นต้องทำ ลงในช่องที่ถูกต้อง",boxes:[{h:"Students have to …",items:["wear school uniforms","come to school by 8 am","do their homework"]},{h:"Students don't have to …",items:["bring all books to school","prepare a lunch box","stay at school after 4 pm"]}]},
  {k:"fill",n:"เลือกคำจากกรอบเติมให้ถูกต้อง",bank:["have to","has to","had to","don't have to","doesn't have to"],items:[
   {q:"I ___ make my bed every morning. It's a family rule.",a:"have to"},{q:"My sister ___ feed the cat. We don't have a cat.",a:"doesn't have to"},{q:"My mother ___ go to work at seven o'clock.",a:"has to"},
   {q:"We ___ wear a uniform on Saturday. It's a holiday.",a:"don't have to"},{q:"Yesterday I ___ clean the classroom after school.",a:"had to"},{q:"Tom ___ wear a helmet when he rides a bicycle.",a:"has to"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยคที่ถูกต้อง",items:[{w:["Do you","have to","make your bed","every day?"],a:"Do you have to make your bed every day?"},{w:["Does she","have to","feed the dog?"],a:"Does she have to feed the dog?"},{w:["Students","don't have to","bring all books","to school."],a:"Students don't have to bring all books to school."}]},
  {k:"write",n:"เขียนประโยคเกี่ยวกับตัวเอง (ตอบอิสระ)",items:["At home, I have to ____________________.","At school, I have to ____________________.","I don't have to ____________________.","Do you have to ____________________?  — Yes, I do. / No, I don't."]}]},
 games:["mcq","order"],
 mcq:[{q:"She ___ wash the dishes every evening.",o:["have to","has to","had to"],a:1},{q:"We ___ wear a uniform on Sunday. It's a holiday.",o:["have to","don't have to","has to"],a:1,ex:"วันหยุดจึงไม่จำเป็นต้องใส่"},
  {q:"What does “don't have to” mean?",o:["ห้ามทำ","ไม่จำเป็นต้องทำ","ต้องทำ"],a:1},{q:"Which question is correct?",o:["Does he have to cook?","Does he has to cook?","Do he have to cook?"],a:0},
  {q:"My brother ___ clean his room. It's his rule.",o:["has to","have to","doesn't have to"],a:0},{q:"Yesterday I ___ finish my homework early.",o:["have to","has to","had to"],a:2},
  {q:"Students ___ bring all books to school.",o:["don't have to","has to","doesn't have to"],a:0},{q:"Do you have to make the bed? — No, I ___.",o:["don't","doesn't","haven't"],a:0}],
 order:[{w:["Do you","have to","make your bed","every day?"],a:"Do you have to make your bed every day?"},{w:["Does she","have to","feed the dog?"],a:"Does she have to feed the dog?"},
  {w:["Students","don't have to","bring all books","to school."],a:"Students don't have to bring all books to school."},{w:["I","have to","make the bed","every day."],a:"I have to make the bed every day."},
  {w:["He","doesn't have to","wear a tie."],a:"He doesn't have to wear a tie."}]
};
R["8.5"]={
 vocab:[["put away","เก็บเข้าที่","🗄️"],["pick up","หยิบขึ้น / เก็บขึ้น","🤏"],["switch on","เปิด (สวิตช์)","💡"],["plug in","เสียบปลั๊ก","🔌"],
  ["switch off","ปิด (สวิตช์)","🌑"],["take out","นำออก","📤"],["front door","ประตูหน้า","🚪"],["phrasal verb","กริยาวลี","📖"]],
 slides:[
  T("🏕️","Youth Hostel Rules","PASSION 2 Unit 8 · แผน 8.5",["ฟังและอ่านบทสนทนาแล้วตอบคำถาม","บอกความหมายของ phrasal verbs","สรุปสิ่งที่ต้องทำ / ห้ามทำ และแสดงบทบาทสมมติ"]),
  B("🚌","Where did you go for a school trip?","Warm up · เคยไปทัศนศึกษาที่ไหน"),
  ...vsl(8),
  L("Phrasal verbs","กริยา + บุพบท/adverb · ความหมายมักเปลี่ยนไป",[["put away = put something in its place","เก็บเข้าที่"],["pick up = lift something up","หยิบ / เก็บขึ้นมา"],["switch on / switch off","เปิด / ปิด"],["plug in = connect to electricity","เสียบปลั๊ก"],["take out = move something outside","นำออกไป"]]),
  L("Dialogue (1)","บทสนทนาที่โฮสเทล",[["Guest: Excuse me. Are we allowed to cook in the kitchen?",""],["Staff: Yes, you are. But you must switch off the cooker after cooking.",""],["Guest: Do we have to put away our plates?",""]]),
  L("Dialogue (2)","บทสนทนา (ต่อ)",[["Staff: Yes, you do. Please put them away in the cupboard.",""],["Guest: What time must we be back?",""],["Staff: You must be back by ten o'clock. You mustn't make noise at night.",""]]),
  L("Hostel rules","สรุปข้อบังคับ",[["Guests must switch off the cooker after cooking.","ต้องปิดเตา"],["Guests have to put away their plates.","ต้องเก็บจาน"],["Guests mustn't make noise at night.","ห้ามส่งเสียงดังตอนกลางคืน"]]),
  L("Role play","แสดงบทบาทสมมติ",[["A: Are we allowed to … ?","ขอ…ได้ไหม"],["B: Yes, you are. / No, you aren't.",""],["B: Guests must … / Guests mustn't …",""]]),
  L("Wrap up","สรุป",[["Say one thing guests must do.","บอกสิ่งที่ต้องทำ 1 อย่าง"],["Say one thing guests mustn't do.","บอกสิ่งที่ห้ามทำ 1 อย่าง"]])],
 ws:{title:"Youth Hostel Rules",parts:[
  {k:"match",n:"จับคู่ phrasal verb กับความหมาย เขียนตัวอักษรลงในช่องว่าง",ord:[3,5,4,1,0,2],items:[["put away","เก็บเข้าที่"],["pick up","หยิบขึ้น / เก็บขึ้น"],["switch on","เปิด (สวิตช์)"],["plug in","เสียบปลั๊ก"],["switch off","ปิด (สวิตช์)"],["take out","นำออก"]]},
  {k:"tf",n:"อ่านบทสนทนาแล้วเขียน T (จริง) หรือ F (เท็จ)",text:["Guest: Excuse me. Are we allowed to cook in the kitchen?","Staff: Yes, you are. But you must switch off the cooker after cooking.","Guest: Do we have to put away our plates?","Staff: Yes, you do. Please put them away in the cupboard.","Guest: What time must we be back?","Staff: You must be back by ten o'clock. You mustn't make noise at night."],items:[
   {q:"The guests can cook in the kitchen.",a:true},{q:"Guests must switch on the cooker after cooking.",a:false},{q:"The guests have to put away their plates.",a:true},{q:"Guests must be back by nine o'clock.",a:false},{q:"Guests can make noise at night.",a:false}]},
  {k:"fill",n:"เลือก phrasal verb จากกรอบเติมให้ถูกต้อง",bank:["put away","pick up","switch off","switch on","take out","plug in"],items:[
   {q:"It's dark. Please ___ the light.",a:"switch on"},{q:"Please ___ your socks from the floor.",a:"pick up"},{q:"Don't forget to ___ your plates in the cupboard.",a:"put away"},
   {q:"You must ___ the rubbish every evening.",a:"take out"},{q:"Please ___ your phone charger here.",a:"plug in"},{q:"Guests must ___ the cooker after cooking.",a:"switch off"}]},
  {k:"write",n:"เขียนกฎของโฮสเทล (ตอบอิสระ)",items:["A: Are we allowed to ____________________?  B: Yes, you are. / No, you aren't.","Guests must ____________________.","Guests mustn't ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Are we allowed to cook in the kitchen? — Yes, ___.",o:["you are","you do","you must"],a:0},{q:"Guests ___ switch off the cooker after cooking.",o:["mustn't","don't have to","must"],a:2},
  {q:"Which phrasal verb means เสียบปลั๊ก?",o:["take out","plug in","pick up"],a:1},{q:"“Pick up your socks” means …",o:["หยิบ/เก็บถุงเท้าขึ้นมา","ซักถุงเท้า","ทิ้งถุงเท้า"],a:0},
  {q:"You ___ make noise at night.",o:["must","have to","mustn't"],a:2},{q:"What time must the guests be back?",o:["By eight o'clock","By ten o'clock","By nine o'clock"],a:1},
  {q:"Do we have to put away our plates? — ___",o:["Yes, you do.","Yes, you are.","No, you mustn't."],a:0},{q:"A phrasal verb is a verb + …",o:["a noun","an adjective","a preposition or an adverb"],a:2}],
 order:[{w:["Guests must","switch off","the cooker","after cooking."],a:"Guests must switch off the cooker after cooking."},{w:["Are we allowed","to cook","in the kitchen?"],a:"Are we allowed to cook in the kitchen?"},
  {w:["You mustn't","make noise","at night."],a:"You mustn't make noise at night."},{w:["Do we have to","put away","our plates?"],a:"Do we have to put away our plates?"},{w:["You must","be back","by ten o'clock."],a:"You must be back by ten o'clock."}]
};
R["8.6"]={
 vocab:[["must","ต้อง (ข้อบังคับ)","✅"],["mustn't","ห้าม","⛔"],["rules","กฎระเบียบ","📜"],["corridor","ทางเดิน","🛤️"],["polite","สุภาพ","🙏"],
  ["canteen","โรงอาหาร","🍜"],["hospital","โรงพยาบาล","🏥"],["museum","พิพิธภัณฑ์","🏛️"],["prescription","ใบสั่งยา","💊"],["smoke","สูบบุหรี่","🚭"]],
 slides:[
  T("⛔","must / mustn't","PASSION 2 Unit 8 · แผน 8.6",["บอกโครงสร้างและการใช้ must / mustn't","เขียนข้อบังคับของโรงเรียนและแสดงบทบาทสมมติ"]),
  L("Warm up","เปรียบเทียบความหมาย",[["Students don't have to bring a lunch box.","ไม่จำเป็นต้องนำมา"],["Students have to wear a uniform.","ต้องใส่"],["Is there a rule you must not break?","มีกฎข้อไหนที่ห้ามฝ่าฝืนบ้าง"]]),
  ...vsl(10),
  L("must / mustn't","ข้อบังคับ",[["Guests must be back by nine o'clock.","แขกต้องกลับถึงก่อนเก้านาฬิกา"],["Guests mustn't eat food in their rooms.","แขกห้ามกินอาหารในห้องพัก"]]),
  L("Structure","โครงสร้าง",[["+  Subject + must + V","ต้อง (ข้อบังคับ)"],["−  Subject + mustn't + V","ห้าม"],["ใช้เหมือนกันทุกประธาน ไม่เติม s","She must wear a uniform."]]),
  L("Rules in places","ข้อบังคับตามสถานที่",[["School: We must wear school uniforms.","โรงเรียน"],["Corridor: You mustn't run.","ทางเดิน"],["Canteen: We must wait in line.","โรงอาหาร"],["Hospital: You must be quiet. You mustn't smoke.","โรงพยาบาล"],["Museum: You mustn't touch the paintings.","พิพิธภัณฑ์"]]),
  L("mustn't ≠ don't have to","ความหมายต่างกัน",[["You mustn't run in the corridor.","ห้ามวิ่ง (ไม่อนุญาต)"],["You don't have to run. You can walk.","ไม่จำเป็นต้องวิ่ง (เดินก็ได้)"]]),
  L("Role play","แสดงบทบาทสมมติ",[["Choose a place: hospital, museum, canteen, school.","เลือกสถานที่"],["Say 3 rules: We must … / We mustn't …",""]]),
  L("Wrap up","สรุป",[["must = ต้องทำ","mustn't = ห้ามทำ"],["Say one rule for your school.","บอกกฎโรงเรียน 1 ข้อ"]])],
 ws:{title:"must / mustn't",parts:[
  {k:"match",n:"จับคู่ข้อบังคับกับสถานที่ เขียนตัวอักษรลงในช่องว่าง",ord:[4,2,0,1,3],items:[["You mustn't touch the paintings.","museum"],["You must wait in line to buy food.","canteen"],["You mustn't run.","corridor"],["You must be quiet.","hospital"],["We must raise our hands to ask a question.","classroom"]]},
  {k:"fill",n:"เติม must หรือ mustn't",bank:["must","mustn't"],items:[
   {q:"You ___ run in the corridor. It's dangerous.",a:"mustn't"},{q:"Students ___ wear school uniforms.",a:"must"},{q:"You ___ smoke in the hospital.",a:"mustn't"},
   {q:"Guests ___ be back by nine o'clock.",a:"must"},{q:"We ___ eat food in the museum.",a:"mustn't"},{q:"You ___ be polite to the teachers.",a:"must"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยคที่ถูกต้อง",items:[{w:["Guests mustn't","eat food","in their rooms."],a:"Guests mustn't eat food in their rooms."},{w:["We mustn't","use mobile phones","in class."],a:"We mustn't use mobile phones in class."},{w:["We must","wear","school uniforms."],a:"We must wear school uniforms."}]},
  {k:"write",n:"เขียนกฎของโรงเรียน (ตอบอิสระ)",items:["We must ____________________.","We mustn't ____________________.","In the canteen, we must ____________________.","In the corridor, we mustn't ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"You ___ touch the paintings in the museum.",o:["mustn't","must","don't have to"],a:0},{q:"Students ___ wear school uniforms. It's a rule.",o:["mustn't","has to","must"],a:2},
  {q:"“mustn't” means …",o:["อาจจะทำ","ห้ามทำ","ไม่จำเป็นต้องทำ"],a:1},{q:"Which sentence is correct?",o:["She must wear a uniform.","She musts wear a uniform.","She must wears a uniform."],a:0},
  {q:"Where can you see this rule: “You must be quiet.”?",o:["On a football field","In a canteen","In a hospital"],a:2},{q:"You ___ run. You can walk.",o:["must","don't have to","mustn't"],a:1,ex:"เดินก็ได้ จึงไม่จำเป็นต้องวิ่ง"},
  {q:"Which word means สุภาพ?",o:["polite","corridor","prescription"],a:0},{q:"Guests ___ eat food in their rooms.",o:["must","has to","mustn't"],a:2}],
 order:[{w:["Guests must","be back","by nine o'clock."],a:"Guests must be back by nine o'clock."},{w:["Guests mustn't","eat food","in their rooms."],a:"Guests mustn't eat food in their rooms."},
  {w:["We mustn't","use mobile phones","in class."],a:"We mustn't use mobile phones in class."},{w:["We must","wear","school uniforms."],a:"We must wear school uniforms."},{w:["You mustn't","touch","the paintings."],a:"You mustn't touch the paintings."}]
};
R["8.7"]={
 vocab:[["May I …?","ขออนุญาต… (สุภาพมาก)",""],["Can I …?","ขอ…ได้ไหม (ไม่เป็นทางการ)",""],["Could I …?","ขอ…ได้ไหม (สุภาพ)",""],["Would I be able to …?","ฉันจะ…ได้ไหม (สุภาพมาก)",""],
  ["Do you mind if I …?","คุณจะขัดข้องไหมถ้าฉัน…",""],["Are we allowed to …?","เราได้รับอนุญาตให้…ไหม",""],["packed lunch","อาหารกลางวันที่เตรียมไปเอง","🥪"],["headphones","หูฟัง","🎧"],["school trip","ทัศนศึกษา","🚌"],["permission","การอนุญาต","📝"]],
 slides:[
  T("🙋","Asking for Permission","PASSION 2 Unit 8 · แผน 8.7",["ถามขออนุญาต ตอบรับ และปฏิเสธอย่างสุภาพ","ถาม-ตอบเกี่ยวกับการทัศนศึกษา"]),
  B("🙋","What do you ask permission for?","Warm up · ในห้องเรียนมีอะไรที่ต้องขออนุญาตก่อนทำ"),
  ...vsl(10),
  L("Asking for permission","ขออนุญาต",[["Can I use your tablet, please?","ไม่เป็นทางการ"],["Could I use your tablet, please?","สุภาพขึ้น"],["May I use your tablet, please?","สุภาพมาก"],["Do you mind if I use your tablet?","สุภาพ"],["Are we allowed to wear jeans?","ถามกฎ"]]),
  L("Say yes","ตอบรับ",[["Yes, of course. / Sure.",""],["Yes, you can. / Yes, you are.",""],["No, not at all.","ตอบ Do you mind if …? แปลว่าไม่ขัดข้อง"]]),
  L("Say no","ปฏิเสธ",[["Sorry, you can't.",""],["I'm afraid not.","เกรงว่าไม่ได้"],["No, you aren't allowed to.",""]]),
  L("Questions about a trip","ถามเรื่องทัศนศึกษา",[["Where do we have to meet?",""],["Do we have to bring a packed lunch?",""],["Are we allowed to listen to music on our smartphones in the coach?",""]]),
  L("Model dialogue","ตัวอย่างบทสนทนา",[["A: Are we allowed to wear jeans on the school trip?",""],["B: Yes, you are. But you must wear shoes.",""],["A: Do we have to bring a packed lunch?",""],["B: Yes, you do.",""]]),
  L("Wrap up","สรุป",[["Ask for permission politely.","ขออนุญาตอย่างสุภาพ"],["Say yes / say no.","ตอบรับ / ปฏิเสธ"]])],
 ws:{title:"Asking for Permission",parts:[
  {k:"mcq",n:"เลือกประโยคที่สุภาพและถูกต้องที่สุด",items:[
   {q:"You want to borrow your teacher's pen.",o:["Give me your pen.","Could I borrow your pen, please?","I want your pen."],a:1},{q:"You want to open the window.",o:["Open the window.","I will open it.","Do you mind if I open the window?"],a:2},
   {q:"You want to ask about a school trip rule.",o:["Are we allow wear jeans?","Are we allowed to wear jeans?","Do we must wear jeans?"],a:1}]},
  {k:"match",n:"จับคู่คำถามกับคำตอบ",ord:[4,2,0,1,3],items:[["Can I use your tablet, please?","Yes, of course."],["Are we allowed to wear jeans?","No, you aren't."],["Do we have to bring a packed lunch?","Yes, you do."],["May I go to the toilet?","Sure, go ahead."],["Do you mind if I open the window?","No, not at all."]]},
  {k:"fill",n:"เลือกคำจากกรอบเติมคำถามขออนุญาต",bank:["May","Can","Could","Do","Are"],items:[
   {q:"___ I ask a question, please?",a:"May"},{q:"___ I borrow your pen? (to a friend)",a:"Can"},{q:"___ you mind if I sit here?",a:"Do"},{q:"___ we allowed to take photos in the museum?",a:"Are"},{q:"___ I leave early, please?",a:"Could"}]},
  {k:"write",n:"เขียนคำถามขออนุญาตสำหรับแต่ละสถานการณ์ (ตอบอิสระ)",items:["1. You want to use your friend's eraser: ____________________?","2. You want to know if you can eat in class: ____________________?","3. You want to know if you have to wear a uniform on the trip: ____________________?"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which question is the most polite?",o:["Could I borrow your pen, please?","Give me your pen.","I want your pen."],a:0},{q:"Do you mind if I sit here? — ___",o:["Yes, of course.","I'm sorry, you are.","No, not at all."],a:2,ex:"No, not at all. = ไม่ขัดข้อง นั่งได้เลย"},
  {q:"Do we have to bring a packed lunch? — No, ___.",o:["you can't","you don't","you aren't"],a:1},{q:"Which one asks about a school rule?",o:["Are we allowed to wear jeans?","Can I borrow a pen?","May I sit down?"],a:0},
  {q:"Which word means หูฟัง?",o:["packed lunch","permission","headphones"],a:2},{q:"“I'm afraid not.” means …",o:["ฉันกลัว","ขออภัย ไม่ได้","ได้แน่นอน"],a:1},
  {q:"___ I use your tablet, please? (the most informal)",o:["Can","Would","Do"],a:0},{q:"Could I leave early, please? — ___",o:["Yes, I do.","No, I'm not.","Yes, of course."],a:2}],
 order:[{w:["Can I","use your tablet,","please?"],a:"Can I use your tablet, please?"},{w:["Are we allowed","to wear","jeans?"],a:"Are we allowed to wear jeans?"},
  {w:["Do we have to","bring","a packed lunch?"],a:"Do we have to bring a packed lunch?"},{w:["Do you mind","if I","open the window?"],a:"Do you mind if I open the window?"},{w:["Where do we","have to","meet?"],a:"Where do we have to meet?"}]
};
R["8.8"]={
 vocab:[["have to","ต้อง (I/you/we/they)",""],["has to","ต้อง (he/she/it)",""],["had to","ต้อง (อดีต)",""],["don't have to","ไม่จำเป็นต้อง",""],["doesn't have to","ไม่จำเป็นต้อง (he/she/it)",""],
  ["helmet","หมวกกันน็อก","⛑️"],["scooter","สกู๊ตเตอร์","🛵"],["membership card","บัตรสมาชิก","🪪"],["library","ห้องสมุด","📚"],["bicycle","จักรยาน","🚲"]],
 slides:[
  T("📏","have to / has to / had to","PASSION 2 Unit 8 · แผน 8.8",["บอกโครงสร้าง have to / has to / had to / don't have to","เขียนประโยคคำถามและคำตอบเกี่ยวกับสิ่งที่ต้องทำ"]),
  L("Warm up","อภิปราย · ตอบอิสระ",[["I have to go home before my mother comes home.","ฉันต้องกลับบ้านก่อนแม่กลับถึงบ้าน"],["What do you have to do before you go home?","ก่อนกลับบ้านคุณต้องทำอะไร"]]),
  ...vsl(10),
  L("Positive","บอกเล่า",[["I / You / We / They have to wear a helmet.","ต้องสวมหมวกกันน็อก"],["He / She has to wear a helmet.",""],["Yesterday, I had to clean the classroom.","เมื่อวานฉันต้องทำความสะอาดห้องเรียน"]]),
  L("Negative","ปฏิเสธ",[["I / You / We / They don't have to wear a uniform.","ไม่จำเป็นต้องใส่ชุดนักเรียน"],["He / She doesn't have to wear a uniform.",""],["I don't have to have a library membership card to borrow books.","ฉันไม่จำเป็นต้องมีบัตรสมาชิกห้องสมุดเพื่อยืมหนังสือ"]]),
  L("Questions","คำถาม",[["Do you have to wear a helmet when you ride a bicycle?",""],["Yes, I do. / No, I don't.",""],["Does she have to feed the dog?  Yes, she does. / No, she doesn't.",""],["What time do you have to get up on school days?",""]]),
  L("Remember","จำไว้",[["have to เป็นกริยาหลัก","ใช้ do / does ช่วยในประโยคปฏิเสธและคำถาม"],["He / She / It → has to · doesn't have to",""],["Past → had to",""]]),
  L("Your turn","ถามตอบกับเพื่อน",[["What time do you have to get up on school days?",""],["Do you have to wash the dishes at home?",""]]),
  L("Wrap up","สรุป",[["Say one thing you have to do.","บอกสิ่งที่ต้องทำ 1 อย่าง"],["Say one thing you don't have to do.","บอกสิ่งที่ไม่ต้องทำ 1 อย่าง"]])],
 ws:{title:"have to / has to / had to",parts:[
  {k:"mcq",n:"เลือกคำตอบที่ถูกต้อง",items:[
   {q:"Does your brother ___ wash the dishes?",o:["have to","has to","had to"],a:0},{q:"My sister ___ get up at six on school days.",o:["have to","has to","had to"],a:1},{q:"Yesterday I ___ finish my homework before dinner.",o:["have to","has to","had to"],a:2},
   {q:"You ___ have a library card to read in the library. It's free.",o:["have to","don't have to","doesn't have to"],a:1},{q:"Do you have to wear a helmet? — Yes, I ___.",o:["do","have","must"],a:0},{q:"He ___ ride a scooter to school. He walks.",o:["don't have to","doesn't have to","has to"],a:1}]},
  {k:"fill",n:"เลือกรูปที่ถูกต้องจากกรอบ เติมให้สมบูรณ์",bank:["have to","has to","had to","don't have to","doesn't have to"],items:[
   {q:"My brother ___ clean his room every day.",a:"has to"},{q:"We ___ wear a helmet. It's the law.",a:"have to"},{q:"You ___ pay to enter the library. It's free.",a:"don't have to"},
   {q:"Yesterday we ___ stay late at school.",a:"had to"},{q:"My sister ___ ride a scooter to school. She walks.",a:"doesn't have to"},{q:"I ___ go home before my mother comes home.",a:"have to"}]},
  {k:"order",n:"เรียงคำให้เป็นคำถามที่ถูกต้อง",items:[{w:["What time","do you have to","get up","on school days?"],a:"What time do you have to get up on school days?"},{w:["Do you","have to","wear a helmet","on a scooter?"],a:"Do you have to wear a helmet on a scooter?"},{w:["Does he","have to","wash the dishes?"],a:"Does he have to wash the dishes?"}]},
  {k:"write",n:"เขียนประโยคเกี่ยวกับตัวเอง (ตอบอิสระ)",items:["What time do you have to ____________________?","I have to ____________________ before I go to school.","I don't have to ____________________ on Sundays.","Yesterday I had to ____________________."]}]},
 games:["mcq","order"],
 mcq:[{q:"Does your brother ___ wash the dishes?",o:["have to","has to","had to"],a:0,ex:"หลัง Does ใช้กริยาช่อง 1 → have to"},{q:"My sister ___ get up at six on school days.",o:["have to","has to","had to"],a:1},
  {q:"Yesterday I ___ finish my homework before dinner.",o:["have to","has to","had to"],a:2},{q:"You ___ have a library card. It's free.",o:["have to","don't have to","doesn't have to"],a:1},
  {q:"Do you have to wear a helmet? — Yes, I ___.",o:["do","have","must"],a:0},{q:"He ___ ride a scooter to school. He walks.",o:["don't have to","doesn't have to","has to"],a:1},
  {q:"What time ___ you have to get up?",o:["do","does","are"],a:0},{q:"Which sentence is correct?",o:["She has to wear a helmet.","She have to wear a helmet.","She has to wears a helmet."],a:0}],
 order:[{w:["What time","do you have to","get up","on school days?"],a:"What time do you have to get up on school days?"},{w:["Do you","have to","wear a helmet","on a scooter?"],a:"Do you have to wear a helmet on a scooter?"},
  {w:["I have to","go home","before my mother","comes home."],a:"I have to go home before my mother comes home."},{w:["I don't have to","have a library membership card","to borrow books."],a:"I don't have to have a library membership card to borrow books."},{w:["Does he","have to","wash the dishes?"],a:"Does he have to wash the dishes?"}]
};
R["8.9"]={
 vocab:[["must","ต้อง (ข้อบังคับ)","✅"],["mustn't","ห้าม","⛔"],["don't have to","ไม่จำเป็นต้อง",""],["have got to","ต้อง (ภาษาพูด)",""],["laboratory","ห้องปฏิบัติการ","🔬"],["raise hands","ยกมือ","✋"],["mobile phone","โทรศัพท์มือถือ","📱"],["rules","กฎระเบียบ","📜"]],
 slides:[
  T("🔬","must / mustn't","PASSION 2 Unit 8 · แผน 8.9",["บอกโครงสร้างของ must / mustn't","บอกความแตกต่างจาก don't have to","เติมคำและเขียนประโยคข้อบังคับ"]),
  B("🧪","Make sentences with must / mustn't","Warm up · ดูภาพและกริยา แต่งประโยคแข่งกัน"),
  ...vsl(8),
  L("must","ต้องทำ (ข้อบังคับ)",[["You must wear safety glasses in the laboratory.","ต้องสวมแว่นนิรภัยในห้องปฏิบัติการ"],["Students must raise their hands when they want to ask questions.","นักเรียนต้องยกมือเมื่ออยากถามคำถาม"]]),
  L("mustn't","ห้ามทำ",[["You mustn't use your mobile phone in class.","คุณห้ามใช้โทรศัพท์มือถือในชั้นเรียน"],["You mustn't run in the laboratory.","ห้ามวิ่งในห้องปฏิบัติการ"]]),
  L("mustn't ≠ don't have to","ความหมายต่างกัน",[["You mustn't use your mobile phone.","ห้ามใช้"],["You don't have to use your mobile phone. Use mine.","ไม่จำเป็นต้องใช้ ใช้ของฉันได้"]]),
  L("Structure","โครงสร้าง",[["+  Subject + must + V","ต้อง"],["−  Subject + mustn't + V","ห้าม"],["ใช้เหมือนกันทุกประธาน","He must wear a lab coat."]]),
  L("Wrap up","สรุป",[["mustn't = not allowed","ห้ามทำ"],["don't have to = not necessary","ไม่จำเป็นต้องทำ"]])],
 ws:{title:"must / mustn't / don't have to",parts:[
  {k:"mcq",n:"เลือก mustn't, don't have to หรือ must ให้ถูกต้อง",items:[
   {q:"You ___ use a pen in the test. You can use a pencil.",o:["mustn't","don't have to","must"],a:1},{q:"You ___ talk in the exam.",o:["mustn't","don't have to","has to"],a:0},{q:"You ___ wear a uniform on Saturday.",o:["mustn't","don't have to","must"],a:1},
   {q:"You ___ touch the chemicals in the lab.",o:["mustn't","don't have to","must"],a:0},{q:"Students ___ raise their hands to ask a question.",o:["must","mustn't","don't have to"],a:0},{q:"The school gives us lunch. We ___ bring food.",o:["don't have to","mustn't","must"],a:0}]},
  {k:"tf",n:"เขียน T (จริง) หรือ F (เท็จ)",items:[{q:"“mustn't” means “not necessary”.",a:false},{q:"“don't have to” means “not necessary”.",a:true},{q:"“You mustn't run in the corridor.” means running is not allowed.",a:true},{q:"“Students must raise their hands.” is a rule.",a:true}]},
  {k:"order",n:"เรียงคำให้เป็นประโยคที่ถูกต้อง",items:[{w:["Students must","raise their hands","when they want","to ask questions."],a:"Students must raise their hands when they want to ask questions."},{w:["You mustn't","use your mobile phone","in class."],a:"You mustn't use your mobile phone in class."},{w:["You don't have to","use your","mobile phone."],a:"You don't have to use your mobile phone."}]},
  {k:"write",n:"เขียนกฎของห้องปฏิบัติการ (ตอบอิสระ)",items:["In the laboratory, you must ____________________.","In the laboratory, you mustn't ____________________.","You don't have to ____________________."]}]},
 games:["mcq","order"],
 mcq:[{q:"You ___ use a pen in the test. You can use a pencil.",o:["mustn't","don't have to","must"],a:1,ex:"ใช้ดินสอก็ได้ จึงไม่จำเป็น"},{q:"You ___ talk in the exam.",o:["mustn't","don't have to","has to"],a:0},
  {q:"You ___ wear a uniform on Saturday.",o:["mustn't","don't have to","must"],a:1},{q:"You ___ touch the chemicals in the lab.",o:["mustn't","don't have to","must"],a:0},
  {q:"Students ___ raise their hands to ask a question.",o:["must","mustn't","don't have to"],a:0},{q:"The school gives us lunch. We ___ bring food.",o:["don't have to","mustn't","must"],a:0},
  {q:"“mustn't” means …",o:["ไม่จำเป็นต้องทำ","ห้ามทำ","ต้องทำ"],a:1},{q:"Which sentence is correct?",o:["He must wear a lab coat.","He musts wear a lab coat.","He must to wear a lab coat."],a:0}],
 order:[{w:["Students must","raise their hands","when they want","to ask questions."],a:"Students must raise their hands when they want to ask questions."},{w:["You mustn't","use your mobile phone","in class."],a:"You mustn't use your mobile phone in class."},
  {w:["You don't have to","use your","mobile phone."],a:"You don't have to use your mobile phone."},{w:["You must","wear safety glasses","in the laboratory."],a:"You must wear safety glasses in the laboratory."},{w:["You mustn't","run","in the laboratory."],a:"You mustn't run in the laboratory."}]
};
R["8.10"]={
 vocab:[["water","น้ำ","💧"],["wash","ล้าง","🧼"],["wolf","หมาป่า","🐺"],["waffles","วาฟเฟิล","🧇"],["walnuts","วอลนัท","🌰"],
  ["vegetables","ผัก","🥦"],["vet","สัตวแพทย์","🩺"],["valley","หุบเขา","🏞️"],["volunteer","อาสาสมัคร","🤝"],["very","มาก","⭐"]],
 slides:[
  T("🎧","Listening and /w/ /v/ Sounds","PASSION 2 Unit 8 · แผน 8.10",["เลือกคำที่ถูกต้องและแปลประโยคที่ใช้ have to / must","ออกเสียง /w/ และ /v/ ได้ถูกต้อง"]),
  B("👂","w or v?","Warm up · ฟังแล้วบอกว่าเป็นเสียงอะไร"),
  ...vsl(10),
  L("/w/","ริมฝีปากห่อกลม ฟันไม่แตะริมฝีปาก",[["water  wash  wolf  waffles  walnuts",""],["William waited for his dad to wash the car.",""]]),
  L("/v/","ฟันบนแตะริมฝีปากล่าง มีเสียงสั่น",[["vegetables  vet  valley  volunteer  very",""],["Vegetables come in a large variety of shapes, sizes, and colors.",""]]),
  L("Minimal pairs","คู่คำที่เสียงต่างกัน",[["wet – vet",""],["west – vest",""],["wine – vine",""],["worse – verse",""]]),
  L("Review: have to / must","ทบทวน",[["You don't have to wear a helmet.","ไม่จำเป็น"],["You mustn't eat in the lab.","ห้าม"],["Did you have to wash the car?","เมื่อวานคุณต้องล้างรถไหม"]]),
  L("Read with a partner","อ่านบทสนทนากับเพื่อน",[["A: Did you have to wash the car yesterday?",""],["B: Yes, I did. I had to wash it before lunch.",""],["A: Do you have to help in the kitchen?",""],["B: No, I don't have to. But I must wash my plate.",""]]),
  L("Wrap up","สรุป",[["Say 2 words with /w/ and 2 words with /v/.","บอกคำเสียง /w/ 2 คำ และ /v/ 2 คำ"]])],
 ws:{title:"Listening and /w/ /v/ Sounds",parts:[
  {k:"mcq",n:"ฟังครูอ่านคำ แล้ววงกลมตัวอักษรที่ใช้เติมแทน __",items:[
   {q:"__ater (water)",o:["w","v"],a:0},{q:"__egetables",o:["w","v"],a:1},{q:"__olf",o:["w","v"],a:0},{q:"__et (animal doctor)",o:["w","v"],a:1},{q:"__alley",o:["w","v"],a:1},{q:"__alnuts",o:["w","v"],a:0}]},
  {k:"sort",n:"เขียนคำลงในช่องตามเสียงต้นของคำ",boxes:[{h:"/w/",items:["water","wash","wolf","waffles","walnuts"]},{h:"/v/",items:["vegetables","vet","valley","volunteer","very"]}]},
  {k:"fill",n:"เลือกคำจากกรอบเติมให้ถูกต้อง",bank:["has to","mustn't","don't have to","doesn't have to","had to"],items:[
   {q:"You ___ eat food in the laboratory.",a:"mustn't"},{q:"We ___ wear a uniform on Sunday. It's a holiday.",a:"don't have to"},{q:"My brother ___ wash the car every Saturday.",a:"has to"},
   {q:"Yesterday I ___ wash the dishes after dinner.",a:"had to"},{q:"You ___ shout in the library.",a:"mustn't"},{q:"She ___ cook dinner. We have pizza.",a:"doesn't have to"}]},
  {k:"write",n:"เขียนประโยค (ตอบอิสระ)",items:["I have to ____________________ every day.","You mustn't ____________________ in the library."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which word starts with /v/?",o:["water","vet","wolf"],a:1},{q:"Which word starts with /w/?",o:["valley","vegetables","walnuts"],a:2},{q:"Which pair has the same first sound?",o:["wash – water","vet – wolf","very – waffles"],a:0},
  {q:"“wet” and “vet” have …",o:["different first sounds","the same first sound","the same meaning"],a:0},{q:"You ___ eat in the lab. (not allowed)",o:["mustn't","don't have to","has to"],a:0},
  {q:"We ___ wear a uniform on holidays.",o:["don't have to","mustn't","must"],a:0},{q:"Which word means หุบเขา?",o:["valley","volunteer","vet"],a:0},{q:"For /v/, put your … on your lower lip.",o:["upper teeth","tongue","nose"],a:0}],
 order:[{w:["William waited","for his dad","to wash","the car."],a:"William waited for his dad to wash the car."},{w:["Did you","have to","wash the car?"],a:"Did you have to wash the car?"},
  {w:["You mustn't","eat","in the laboratory."],a:"You mustn't eat in the laboratory."},{w:["Vegetables are","very good","for you."],a:"Vegetables are very good for you."},{w:["The vet","helps","sick animals."],a:"The vet helps sick animals."}]
};
R["8.11"]={
 vocab:[["sweep the floor","กวาดพื้น","🧹"],["do the laundry","ซักผ้า","🧺"],["tidy up","เก็บให้เป็นระเบียบ","🧸"],["iron clothes","รีดผ้า","👔"],["wash dishes","ล้างจาน","🧼"],["set the table","จัดโต๊ะอาหาร","🍴"],
  ["scrub the floor","ขัดพื้น","🧽"],["clean the bathroom","ทำความสะอาดห้องน้ำ","🚿"],["water the plants","รดน้ำต้นไม้","🪴"],["feed pets","ให้อาหารสัตว์เลี้ยง","🐕"],["mop the floor","ถูพื้น","🪣"],["fold the laundry","พับเสื้อผ้า","👕"]],
 slides:[
  T("🎥","Jake and the Chores","PASSION 2 Unit 8 · แผน 8.11",["ดูวิดีโอและฟังบทสนทนาเพื่อจับใจความสำคัญ","จับคู่ฝึกอ่านบทสนทนาเกี่ยวกับงานบ้าน"]),
  B("🖼️","What can you see in the picture?","Warm up · ดูรูปแล้วตอบ ไม่มีถูกผิด"),
  ...vsl(12),
  L("Dialogue (1)","Jake กับแม่",[["Mum: Jake, your bedroom is a mess!",""],["Jake: Sorry, Mum. I'm tired after football.",""],["Mum: You mustn't leave your socks on the floor. Pick up your football boots, please.",""]]),
  L("Dialogue (2)","Jake กับแม่ (ต่อ)",[["Jake: OK. Do I have to tidy up now?",""],["Mum: Yes, you do. And then you have to set the table.",""]]),
  L("Useful sentences","ประโยคที่พ่อแม่มักพูด",[["Tidy up your room.","เก็บห้องให้เรียบร้อย"],["Pick up your football boots.","เก็บรองเท้าฟุตบอลขึ้นมา"],["You mustn't leave your socks on the floor.","ห้ามทิ้งถุงเท้าไว้บนพื้น"],["You have to set the table.","ต้องจัดโต๊ะอาหาร"]]),
  L("Read in pairs","จับคู่อ่านบทสนทนา สลับบทกัน",[["A = Mum   B = Jake",""],["Read the dialogue twice. Change roles.","อ่าน 2 รอบ สลับบทกัน"]]),
  L("Wrap up","สรุป",[["Why is Mum angry?","แม่โกรธเพราะอะไร"],["What does Jake have to do?","Jake ต้องทำอะไรบ้าง"]])],
 ws:{title:"Jake and the Chores",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[5,9,2,7,0,11,4,8,1,10,6,3]},
  {k:"tf",n:"อ่านบทสนทนาแล้วเขียน T (จริง) หรือ F (เท็จ)",text:["Mum: Jake, your bedroom is a mess!","Jake: Sorry, Mum. I'm tired after football.","Mum: You mustn't leave your socks on the floor. Pick up your football boots, please.","Jake: OK. Do I have to tidy up now?","Mum: Yes, you do. And then you have to set the table."],items:[
   {q:"Jake's mum is happy.",a:false},{q:"Jake's bedroom is a mess.",a:true},{q:"Jake mustn't leave his socks on the floor.",a:true},{q:"Jake doesn't have to tidy up.",a:false},{q:"Jake has to set the table later.",a:true}]},
  {k:"order",n:"เรียงคำให้เป็นประโยคที่ถูกต้อง",items:[{w:["Pick up","your football boots,","please."],a:"Pick up your football boots, please."},{w:["Do I have to","tidy up","now?"],a:"Do I have to tidy up now?"},{w:["You have to","set","the table."],a:"You have to set the table."}]},
  {k:"write",n:"เขียนประโยคพ่อแม่และวัยรุ่น (ตอบอิสระ)",items:["Parent: You have to ____________________.","Parent: You mustn't ____________________.","Teenager: Do I have to ____________________?"]}]},
 games:["match","quiz","simon","mcq","order"],
 mcq:[{q:"Why is Jake's mum angry?",o:["His bedroom is a mess.","He doesn't like football.","He is late for school."],a:0},{q:"Jake ___ leave his socks on the floor.",o:["must","doesn't have to","mustn't"],a:2},
  {q:"What must Jake pick up?",o:["His plates","His football boots","His books"],a:1},{q:"Which sentence is correct?",o:["Jake has to set the table.","Jake have to set the table.","Jake has to sets the table."],a:0},
  {q:"Which word means งานบ้าน?",o:["corridor","canteen","chore"],a:2},{q:"“Tidy up your room” means …",o:["ออกจากห้อง","เก็บห้องให้เรียบร้อย","ทาสีห้อง"],a:1},
  {q:"Do I have to tidy up now? — Yes, ___.",o:["you do","you are","you must to"],a:0},{q:"Which chore uses a broom?",o:["Iron clothes","Wash dishes","Sweep the floor"],a:2}],
 order:[{w:["Please","tidy up","your room."],a:"Please tidy up your room."},{w:["You mustn't","leave your socks","on the floor."],a:"You mustn't leave your socks on the floor."},{w:["Do I have to","tidy up","now?"],a:"Do I have to tidy up now?"},
  {w:["You have to","set","the table."],a:"You have to set the table."},{w:["Pick up","your football boots,","please."],a:"Pick up your football boots, please."}]
};
R["8.12"]={
 vocab:[["chore","งานบ้านที่ต้องทำ","📋"],["rules","กฎระเบียบ","📜"],["strict","เข้มงวด","😠"],["tired","เหนื่อย","😴"],["boring","น่าเบื่อ","🥱"],["busy","ยุ่ง","🏃"],
  ["share jobs","แบ่งงานกันทำ","🤝"],["empathy","การเข้าใจความรู้สึกคนอื่น","💞"],["sympathy","ความเห็นอกเห็นใจ","🫂"],["advantages","ข้อดี","➕"],["disadvantages","ข้อเสีย","➖"]],
 slides:[
  T("🎭","Parents and Teenagers","PASSION 2 Unit 8 · แผน 8.12",["แสดงความคิดเห็นเกี่ยวกับเหตุการณ์ในบทสนทนา","แต่งและแสดงบทสนทนาพ่อแม่กับวัยรุ่นเรื่องงานบ้าน","อธิบายความต่างของ empathy และ sympathy"]),
  B("🧹","Which chore do you like the most? the least?","Warm up · งานบ้านที่ชอบ/ไม่ชอบทำที่สุด"),
  ...vsl(11),
  L("Model dialogue (1)","ตัวอย่างบทสนทนา",[["Teen: Do I really have to wash the dishes today? I'm so tired.",""],["Parent: We have rules in this house. Everyone shares jobs.",""],["Teen: But I have a lot of homework.",""]]),
  L("Model dialogue (2)","ตัวอย่างบทสนทนา (ต่อ)",[["Parent: I understand. You can do it after dinner. I need your help.",""],["Teen: OK. Sharing jobs makes life easier for everyone.",""]]),
  L("Empathy vs sympathy","ต่างกันอย่างไร",[["Empathy = feeling WITH someone. “I know how you feel. I was tired too.”","เข้าใจเพราะเคยรู้สึกเหมือนกัน"],["Sympathy = feeling SORRY for someone. “Oh dear, I'm sorry you're tired.”","รู้สึกสงสารหรือเห็นใจ"]]),
  L("Sharing jobs","ข้อดี · ข้อเสีย",[["+ Life is easier for everyone.",""],["+ Everyone learns to be responsible.",""],["− Teenagers may feel tired or busy.",""],["− Some chores are boring.",""]]),
  L("Your role play","แต่งบทสนทนา",[["1. Choose roles: parent and teenager.","เลือกบท"],["2. Write 6 lines about a chore.","เขียน 6 บรรทัด"],["3. Practice.","ฝึกซ้อม"],["4. Perform.","แสดง"]]),
  L("Wrap up","สรุป",[["Empathy or sympathy?","ใช้อย่างไหนในบทสนทนาของกลุ่มคุณ"]])],
 ws:{title:"Role Play: Parents and Teenagers",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[3,5,4,1,0,2],items:[["strict","เข้มงวด"],["tired","เหนื่อย"],["boring","น่าเบื่อ"],["busy","ยุ่ง"],["advantages","ข้อดี"],["disadvantages","ข้อเสีย"]]},
  {k:"sort",n:"เขียนข้อความลงในช่องที่ถูกต้อง",boxes:[{h:"Advantages of sharing jobs",items:["life is easier for everyone","everyone learns to be responsible","the family has more free time"]},{h:"Disadvantages",items:["teenagers may feel tired","there is less time for homework","some chores are boring"]}]},
  {k:"mcq",n:"Empathy หรือ sympathy?",items:[{q:"“I know how you feel. I was tired after school too.”",o:["empathy","sympathy"],a:0},{q:"“Oh dear, I'm sorry you're tired.”",o:["sympathy","empathy"],a:0},{q:"Empathy means …",o:["feeling bored","feeling with someone","feeling angry"],a:1}]},
  {k:"write",n:"แต่งบทสนทนาสั้น ๆ (ตอบอิสระ)",items:["Teenager: Do I really have to ____________________ today?","Parent: We have rules in this house. You have to ____________________.","Teenager: But I'm ____________________.","Parent: I understand. I need your help."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“We have rules in this house.” means …",o:["ในบ้านเรามีกฎ","เรามีบ้านหลายหลัง","เราไม่มีกฎ"],a:0},{q:"Which word means เข้มงวด?",o:["busy","boring","strict"],a:2},{q:"Sharing jobs makes life ___ for everyone.",o:["slower","easier","harder"],a:1},
  {q:"“I understand. I was tired too.” shows …",o:["empathy","sympathy"],a:0},{q:"Which is an advantage of sharing jobs?",o:["Some chores are boring.","Teenagers feel tired.","Life is easier for everyone."],a:2},
  {q:"Which is a disadvantage?",o:["Everyone learns to be responsible.","There is less time for homework.","The family has more free time."],a:1},{q:"Do I really have to wash the dishes today? — The parent says: …",o:["Yes, you do. We have rules in this house.","No, you mustn't.","Yes, you are."],a:0},
  {q:"“Oh dear, I'm sorry you're so tired.” shows …",o:["sympathy","empathy"],a:0}],
 order:[{w:["Do I really","have to","wash the dishes","today?"],a:"Do I really have to wash the dishes today?"},{w:["We have","rules","in this house."],a:"We have rules in this house."},{w:["Everyone","shares","jobs."],a:"Everyone shares jobs."},
  {w:["Sharing jobs","makes life easier","for everyone","in the family."],a:"Sharing jobs makes life easier for everyone in the family."}]
};
R["8.13"]={
 vocab:[["strict","เข้มงวด","😠"],["punishment","การลงโทษ",""],["caning","การเฆี่ยนด้วยไม้เรียว",""],["topic sentence","ประโยคใจความสำคัญ",""],["controlling idea","แนวคิดหลักของย่อหน้า",""],["classrooms","ห้องเรียน","🏫"],
  ["discipline","ระเบียบวินัย",""],["school uniforms","ชุดนักเรียน","👔"],["corporal punishment","การลงโทษทางกาย",""],["then","ในอดีต","⏪"],["now","ปัจจุบัน","⏩"]],
 slides:[
  T("🏫","School Then and Now","PASSION 2 Unit 8 · แผน 8.13",["อ่านโดยใช้ scanning และ topic sentence","เขียนตารางเปรียบเทียบโรงเรียนในอดีตและปัจจุบัน"]),
  B("🔍","What are the differences between schools in the past and now?","Warm up · โรงเรียนในอดีตกับปัจจุบันต่างกันอย่างไร"),
  ...vsl(11),
  L("Topic sentence","กลยุทธ์จับใจความ",[["Topic sentence = the main idea of a paragraph.","ประโยคใจความสำคัญ มักเป็นประโยคแรก"],["Controlling idea = what the writer says about the topic.","คำที่บอกว่าผู้เขียนพูดอะไรเกี่ยวกับหัวข้อ"],["Fifty years ago, schools were very strict.","topic = schools · controlling idea = very strict"]]),
  L("Hillside School Then and Now (1)","อ่านย่อหน้าที่ 1",[["Fifty years ago, schools were very strict.",""],["Students had to wear the same uniform and sit in straight rows.",""],["They mustn't talk in class, and teachers were allowed to use corporal punishment.",""]]),
  L("Hillside School Then and Now (2)","อ่านย่อหน้าที่ 2",[["Today, schools are different.",""],["Students are allowed to wear appropriate clothes on some days, and teachers aren't allowed to hit students.",""],["Classrooms have computers, and students can work in groups.",""]]),
  L("Scan and answer","สแกนหาคำตอบ",[["What was school like fifty years ago?","very strict"],["Were teachers allowed to use corporal punishment then?","Yes, they were."],["Can teachers hit students now?","No, they aren't allowed to."]]),
  L("Then and now","ตารางเปรียบเทียบ",[["Then: same uniform · straight rows · no talking","อดีต"],["Now: appropriate clothes · groups · computers","ปัจจุบัน"]]),
  L("Wrap up","สรุป",[["Find the topic sentence of each paragraph.","หาประโยคใจความสำคัญ"],["Say 2 differences: then and now.","บอกความต่าง 2 ข้อ"]])],
 ws:{title:"School Then and Now",parts:[
  {k:"tf",n:"อ่านบทอ่านแล้วเขียน T (จริง) หรือ F (เท็จ)",text:["Fifty years ago, schools were very strict. Students had to wear the same uniform and sit in straight rows. They mustn't talk in class, and teachers were allowed to use corporal punishment.","Today, schools are different. Students are allowed to wear appropriate clothes on some days, and teachers aren't allowed to hit students. Classrooms have computers, and students can work in groups."],items:[
   {q:"Fifty years ago, schools were very strict.",a:true},{q:"Students could wear any clothes then.",a:false},{q:"Teachers are allowed to hit students now.",a:false},{q:"Classrooms today have computers.",a:true},{q:"Students work in groups today.",a:true}]},
  {k:"mcq",n:"หา topic sentence และ controlling idea",items:[{q:"What is the topic sentence of paragraph 1?",o:["Fifty years ago, schools were very strict.","They mustn't talk in class.","Students had to sit in rows."],a:0},{q:"What is the topic sentence of paragraph 2?",o:["Today, schools are different.","Classrooms have computers.","Students can work in groups."],a:0},{q:"The controlling idea of paragraph 1 is …",o:["very strict","computers","groups"],a:0}]},
  {k:"sort",n:"เขียนข้อความลงช่อง Then หรือ Now",boxes:[{h:"Then (fifty years ago)",items:["same uniform","sit in straight rows","corporal punishment allowed"]},{h:"Now (today)",items:["appropriate clothes","work in groups","computers in classrooms"]}]},
  {k:"fill",n:"เลือกคำจากกรอบเติมให้ถูกต้อง",bank:["had to","can","were allowed to","aren't allowed to"],items:[
   {q:"In the past, students ___ sit in straight rows.",a:"had to"},{q:"Today, students ___ work in groups.",a:"can"},{q:"In the past, teachers ___ use corporal punishment.",a:"were allowed to"},{q:"Today, teachers ___ hit students.",a:"aren't allowed to"}]},
  {k:"write",n:"เขียนเปรียบเทียบโรงเรียนในอดีตและปัจจุบัน (ตอบอิสระ)",items:["Then, students had to ____________________.","Now, students can ____________________.","Now, teachers aren't allowed to ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"What is the topic sentence of paragraph 1?",o:["Fifty years ago, schools were very strict.","They mustn't talk in class.","Students had to sit in rows."],a:0},{q:"What is the topic sentence of paragraph 2?",o:["Today, schools are different.","Classrooms have computers.","Students can work in groups."],a:0},
  {q:"Fifty years ago, students could wear any clothes.",o:["True","False"],a:1,ex:"พวกเขาต้องใส่ชุดเดียวกัน"},{q:"What is a topic sentence?",o:["The main idea of a paragraph","The last word","A question"],a:0},
  {q:"Which word means เข้มงวด?",o:["strict","busy","tired"],a:0},{q:"“Then” means …",o:["ในอดีต","ปัจจุบัน","พรุ่งนี้"],a:0},{q:"Now, teachers aren't allowed to ___ students.",o:["hit","teach","help"],a:0},{q:"Scanning helps you …",o:["find specific information quickly","read every word","write a story"],a:0}],
 order:[{w:["Fifty years ago,","schools were","very strict."],a:"Fifty years ago, schools were very strict."},{w:["Teachers aren't allowed","to hit","students today."],a:"Teachers aren't allowed to hit students today."},{w:["Students had to","wear","the same uniform."],a:"Students had to wear the same uniform."},
  {w:["Today,","schools","are different."],a:"Today, schools are different."},{w:["Students can","work","in groups."],a:"Students can work in groups."}]
};
R["8.14"]={
 vocab:[["rules","กฎระเบียบ","📜"],["teaching assistant","ผู้ช่วยครู","🧑‍🏫"],["primary school","โรงเรียนประถม","🏫"],["alphabet","ตัวอักษร","🔤"],["earn","ได้รับ / หาเงิน","💰"],
  ["bullet point","หัวข้อย่อยที่มีจุดนำ","🔹"],["formal","เป็นทางการ","🎩"],["hospital","โรงพยาบาล","🏥"],["cinema","โรงภาพยนตร์","🎬"],["approval","การอนุมัติ","✅"]],
 slides:[
  T("✍️","Listening and Writing School Rules","PASSION 2 Unit 8 · แผน 8.14",["ฟังบทสนทนาแล้วตอบคำถามเพื่อบอกรายละเอียด","เขียนข้อบังคับของโรงเรียนและสถานที่ต่าง ๆ อย่างเหมาะสม"]),
  B("📜","Do you like rules in school? Why? Why not?","Warm up · ชอบกฎระเบียบในโรงเรียนไหม เพราะอะไร"),
  ...vsl(10),
  L("Listening tips","เทคนิคการฟัง",[["1. Read the questions first.","อ่านคำถามก่อน"],["2. Underline key words.","ขีดเส้นใต้คำสำคัญ"],["3. Listen and write short answers.","ฟังแล้วเขียนคำตอบสั้น ๆ"]]),
  L("Listening practice","ฟังครูอ่าน หรือกดลำโพง",[["Nok: What do you do on Saturdays, Ben?",""],["Ben: I'm a volunteer at a library. I work on Saturday mornings.",""],["Nok: How long do you work?",""],["Ben: For three hours. I read stories to the children.",""]]),
  L("Questions","ตอบคำถามจากที่ฟัง",[["1. What does Ben do?",""],["2. When does he work?",""],["3. How long does he work?",""],["4. What does he do there?",""]]),
  L("Answers","เฉลย",[["1. What does Ben do?","He's a volunteer at a library."],["2. When does he work?","On Saturday mornings."],["3. How long does he work?","For three hours."],["4. What does he do there?","He reads stories to the children."]]),
  L("Writing rules","หลักการเขียนข้อบังคับ",[["Use bullet points.","ใช้หัวข้อย่อย"],["Use must / mustn't / have to / don't have to / can.",""],["Use Please … for polite rules.","Please switch off your phone."],["Use formal language.","ใช้ภาษาทางการ"]]),
  L("Rules for places","ตัวอย่างข้อบังคับ",[["Hospital: Please switch off your phone.",""],["Cinema: You mustn't take photos.",""],["School: Students must wear a uniform.",""],["School: Students don't have to tie their hair.",""]]),
  L("Wrap up","สรุป",[["Write 3 rules for your school.","เขียนกฎโรงเรียน 3 ข้อ"]])],
 ws:{title:"Listening and Writing School Rules",parts:[
  {k:"fill",n:"ฟังครูอ่านบทสนทนาแล้วเติมคำตอบ",items:[{q:"Ben is a ___ at a library.",a:"volunteer"},{q:"He works on Saturday ___.",a:"mornings"},{q:"He works for ___ hours.",a:"three"},{q:"He ___ stories to the children.",a:"reads"}]},
  {k:"match",n:"จับคู่สถานที่กับข้อบังคับ",ord:[2,4,3,0,1],items:[["hospital","Please switch off your phone."],["cinema","You mustn't take photos."],["library","You must be quiet."],["school","Students must wear a uniform."],["airport","You mustn't leave your bag alone."]]},
  {k:"order",n:"เรียงคำให้เป็นข้อบังคับที่ถูกต้อง",items:[{w:["Please","switch off","your phone."],a:"Please switch off your phone."},{w:["You mustn't","take photos","in the cinema."],a:"You mustn't take photos in the cinema."},{w:["Students","don't have to","tie their hair."],a:"Students don't have to tie their hair."}]},
  {k:"write",n:"เขียนข้อบังคับ (ตอบอิสระ)",items:["• Students must ____________________.","• Students mustn't ____________________.","• Students don't have to ____________________.","Rules for the cinema:  • Please ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"What is a polite way to write a rule?",o:["Please switch off your phone.","Switch off your phone now!","Phone off."],a:0},{q:"Which sentence is formal?",o:["Wear your uniform, OK?","You'd better wear it.","Students must wear a uniform."],a:2},
  {q:"Where can you see “You mustn't take photos”?",o:["At a bus stop","In a cinema","In a canteen"],a:1},{q:"What does a teaching assistant do?",o:["Helps the teacher","Cooks lunch","Drives the bus"],a:0},
  {q:"A bullet point is …",o:["a type of bullet","a long paragraph","a dot (•) before each item"],a:2},{q:"Students ___ tie their hair. It's not a rule.",o:["must","don't have to","mustn't"],a:1},
  {q:"Which word means การอนุมัติ?",o:["approval","earn","formal"],a:0},{q:"Which sentence is correct?",o:["Students musts wear a uniform.","Students must to wear a uniform.","Students must wear a uniform."],a:2}],
 order:[{w:["Please","switch off","your phone."],a:"Please switch off your phone."},{w:["You mustn't","take photos","in the cinema."],a:"You mustn't take photos in the cinema."},{w:["Students","don't have to","tie their hair."],a:"Students don't have to tie their hair."},
  {w:["Students must","wear","a uniform."],a:"Students must wear a uniform."},{w:["You must","be quiet","in the library."],a:"You must be quiet in the library."}]
};
R["8.15"]={
 vocab:[["share a room","ใช้ห้องร่วมกัน","🛌"],["rules","กฎระเบียบ","📜"],["tidy up","เก็บให้เป็นระเบียบ","🧸"],["laptop","แล็ปท็อป","💻"],["headphones","หูฟัง","🎧"],["switch off","ปิด (สวิตช์)","💡"],
  ["basket","ตะกร้า","🧺"],["invite","เชิญ","💌"],["personal item","ของใช้ส่วนตัว","🎒"],["permission","การอนุญาต","🙋"],["dormitory","หอพัก","🏢"]],
 slides:[
  T("🛌","Rules for Sharing a Room","PASSION 2 Unit 8 · แผน 8.15",["เขียนข้อตกลงในการอยู่ร่วมกันในห้องพัก","นำเสนอข้อบังคับและตอบคำถาม"]),
  B("🛌","Do you share a room?","Warm up · เคยอยู่ร่วมกับเพื่อนไหม มีปัญหาอะไรบ้าง"),
  ...vsl(11),
  L("Model: Room Agreement","ตัวอย่างข้อตกลง",[["• We must keep the room tidy.",""],["• You mustn't use my laptop without permission.",""],["• You can invite friends, but ask first.",""],["• Please switch off the lights when you leave.",""],["• You don't have to wash my clothes.",""]]),
  L("Useful language","ภาษาที่ใช้เขียนกฎ",[["We must … / We mustn't …","ต้อง / ห้าม"],["We don't have to …","ไม่จำเป็นต้อง"],["You can … / You can't …","ทำได้ / ทำไม่ได้"],["Please …","สุภาพ"]]),
  L("Write your agreement","เขียนข้อตกลงกับเพื่อน",[["1. Talk about problems when sharing a room.","คุยปัญหาที่เจอ"],["2. Write 5 rules together.","เขียนกฎ 5 ข้อ"],["3. Check: must / mustn't / can / Please.","ตรวจภาษา"]]),
  L("Present","นำเสนอ",[["Our rule number 1 is …",""],["We have this rule because …",""],["Do you have any questions?",""]]),
  L("Wrap up","สรุป",[["Which rule is the most important?","กฎข้อไหนสำคัญที่สุด"]])],
 ws:{title:"Rules for Sharing a Room",parts:[
  {k:"fill",n:"เลือกคำจากกรอบเติมให้ถูกต้อง",bank:["laptop","headphones","basket","permission","invite","tidy up"],items:[
   {q:"You can use your ___ when you listen to music.",a:"headphones"},{q:"Put your dirty clothes in the ___.",a:"basket"},{q:"Please ask for ___ before you use my things.",a:"permission"},
   {q:"We must ___ the room every day.",a:"tidy up"},{q:"You can ___ a friend, but ask first.",a:"invite"},{q:"You can't use my ___ without asking.",a:"laptop"}]},
  {k:"mcq",n:"เลือกประโยคที่ตรงกับความหมาย",items:[{q:"Which sentence is polite?",o:["Please switch off the lights.","Switch off the lights now.","You switch off lights!"],a:0},{q:"Which rule means ไม่จำเป็นต้องทำ?",o:["We mustn't tidy up.","We must tidy up every day.","We don't have to tidy up every day."],a:2},{q:"Which rule means ห้ามทำ?",o:["You don't have to use my laptop.","You mustn't use my laptop.","You can use my laptop."],a:1}]},
  {k:"order",n:"เรียงคำให้เป็นข้อตกลงที่ถูกต้อง",items:[{w:["You mustn't","use my laptop","without permission."],a:"You mustn't use my laptop without permission."},{w:["Please","switch off","the lights."],a:"Please switch off the lights."},{w:["You can","invite friends,","but ask first."],a:"You can invite friends, but ask first."}]},
  {k:"write",n:"เขียนข้อตกลงห้องพักของกลุ่มคุณ (ตอบอิสระ)",items:["1. We must ____________________.","2. We mustn't ____________________.","3. We don't have to ____________________.","4. You can ____________________.","5. Please ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which sentence is polite?",o:["Please switch off the lights.","Switch off the lights now.","You switch off lights!"],a:0},{q:"You ___ use my laptop without permission.",o:["must","don't have to","mustn't"],a:2},
  {q:"We ___ tidy up every day. We can do it on Saturday.",o:["must","don't have to","mustn't"],a:1},{q:"Which word means หอพัก?",o:["dormitory","basket","permission"],a:0},
  {q:"“You can invite friends, but ask first.” means …",o:["เชิญเพื่อนไม่ได้","เพื่อนไม่ต้องถาม","เชิญเพื่อนได้ แต่ต้องถามก่อน"],a:2},{q:"Where do you put dirty clothes?",o:["In headphones","In a basket","In a laptop"],a:1},
  {q:"Please ___ the lights when you leave the room.",o:["switch off","switch in","switch up"],a:0},{q:"Which phrase starts a presentation of a rule?",o:["Rule is number our …","Number 1 rule our …","Our rule number 1 is …"],a:2}],
 order:[{w:["You mustn't","use my laptop","without permission."],a:"You mustn't use my laptop without permission."},{w:["Please","switch off","the lights."],a:"Please switch off the lights."},{w:["We don't have to","tidy up","every day."],a:"We don't have to tidy up every day."},
  {w:["You can","use headphones","when you listen to music."],a:"You can use headphones when you listen to music."},{w:["You can","invite friends,","but ask first."],a:"You can invite friends, but ask first."}]
};
return R;
})();
