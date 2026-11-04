(window.WLM=window.WLM||{})["m2u5"]=(()=>{
// vocab: [English, ไทย, emoji]  (ภาพ = อีโมจิของระบบ ไม่ใช้ภาพจากหนังสือ · ตัวอย่างประโยคและบทอ่านแต่งขึ้นเอง)
const R={};
const T=(em,en,th,lines)=>({t:"title",em,en,th,lines});
const B=(em,en,th)=>({t:"big",em,en,th});
const L=(en,th,lines)=>({t:"lines",en,th,lines});
const vsl=n=>Array.from({length:Math.ceil(n/2)},(_,i)=>({t:"vocab",items:2*i+1<n?[2*i,2*i+1]:[2*i]}));
R["5.1"]={
 vocab:[["scorpion","แมงป่อง","🦂"],["mosquito","ยุง","🦟"],["spider","แมงมุม","🕷️"],["lizard","กิ้งก่า / จิ้งจก","🦎"],["hippopotamus","ฮิปโปโปเตมัส","🦛"],["frog","กบ","🐸"],["vulture","แร้ง","🦅"],["beetle","ด้วง","🪲"],
  ["birds","นก","🐦"],["reptiles","สัตว์เลื้อยคลาน","🐍"],["insects","แมลง","🐛"],["mammals","สัตว์เลี้ยงลูกด้วยนม","🐘"],["amphibians","สัตว์สะเทินน้ำสะเทินบก","🏞️"],["arachnids","แมงมุมและพวก","🕸️"]],
 slides:[
  T("🦁","Animals and Animal Groups","PASSION 2 Unit 5 · แผน 5.1",["บอกชื่อสัตว์และประเภทของสัตว์","ถาม–ตอบเกี่ยวกับสัตว์และประเภทของสัตว์","เขียนรายละเอียดสัตว์จากวิดีโอ"]),
  B("🌍","What do you know about these animals?","Warm up · เคยเห็นสัตว์อะไรบ้าง อยู่ที่ไหน"),
  ...vsl(14),
  L("Animal groups","กลุ่มของสัตว์",[["A frog is an amphibian.","กบเป็นสัตว์สะเทินน้ำสะเทินบก"],["A lizard is a reptile.","กิ้งก่าเป็นสัตว์เลื้อยคลาน"],["A beetle is an insect. A spider is an arachnid.",""],["A hippopotamus is a mammal.",""]]),
  L("Ask and answer","ถาม–ตอบเกี่ยวกับสัตว์",[["Is it a mammal?",""],["Yes, it is. / No, it isn't.",""],["Does it live in Asia?",""],["Yes, it does. / No, it doesn't.",""]]),
  L("Guessing game","เกมทายสัตว์ · คิดสัตว์ 1 ชนิด ให้เพื่อนถามได้ไม่เกิน 5 คำถาม",[["Is it an insect? — No, it isn't.",""],["Does it live in Africa? — Yes, it does.",""],["Is it a mammal? — Yes, it is. It's a hippopotamus!",""]]),
  L("Video notes","ดูวิดีโอแล้วจดข้อมูล",[["Animal: ___","ชื่อสัตว์"],["Group: ___","ประเภท"],["Where does it live? ___","อาศัยที่ไหน"]]),
  L("Wrap up","สรุป",[["Name 3 animals and their groups.","บอกสัตว์ 3 ชนิดและประเภท"],["Ask one question about an animal.","ถามคำถามเกี่ยวกับสัตว์ 1 ข้อ"]])],
 ws:{title:"Animals and Animal Groups",parts:[
  {k:"sort",n:"เขียนสัตว์ลงในกลุ่มที่ถูกต้อง",boxes:[{h:"Mammals",items:["hippopotamus","bat"]},{h:"Reptiles",items:["lizard","snake"]},{h:"Insects",items:["mosquito","beetle"]},{h:"Amphibians / Arachnids",items:["frog","scorpion","spider"]}]},
  {k:"match",n:"จับคู่สัตว์กับประเภท",ord:[3,0,4,1,2],items:[["frog","amphibian"],["lizard","reptile"],["hippopotamus","mammal"],["vulture","bird"],["beetle","insect"]]},
  {k:"fill",n:"เติมคำตอบสั้น",bank:["it is","it isn't","it does","it doesn't"],items:[{q:"Is a frog an amphibian? — Yes, ___.",a:"it is"},{q:"Is a lizard a mammal? — No, ___.",a:"it isn't"},{q:"Does a hippopotamus live in Africa? — Yes, ___.",a:"it does"},{q:"Does a penguin live in Asia? — No, ___.",a:"it doesn't"}]},
  {k:"write",n:"คิดสัตว์ 1 ชนิด แล้วเขียนคำถาม 3 ข้อ (ตอบอิสระ)",items:["Is it a ____________________?","Does it live in ____________________?","Is it ____________________?"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"A frog is a(n) …",o:["mammal","amphibian","insect"],a:1},{q:"Which animal is a reptile?",o:["lizard","spider","vulture"],a:0},{q:"“mosquito” means …",o:["ผีเสื้อ","แมลงวัน","ยุง"],a:2},{q:"Is it a mammal? — Yes, ___.",o:["it does","it is","it has"],a:1},
  {q:"Does it live in Asia? — No, ___.",o:["it isn't","it doesn't","it can't"],a:1},{q:"A beetle is an …",o:["insect","arachnid","amphibian"],a:0},{q:"“birds” means …",o:["สัตว์ปีก (นก)","ปลา","แมลง"],a:0},{q:"Which one is NOT an insect?",o:["beetle","mosquito","scorpion"],a:2}],
 order:[{w:["Is it","a mammal?"],a:"Is it a mammal?"},{w:["Does it","live in Asia?"],a:"Does it live in Asia?"},{w:["A frog","is an amphibian."],a:"A frog is an amphibian."},{w:["No,","it doesn't."],a:"No, it doesn't."}]
};
R["5.2"]={
 vocab:[["squid","ปลาหมึก","🦑"],["whale","วาฬ","🐋"],["predator","ผู้ล่า","🦈"],["record-breaking","ทำลายสถิติ","🏆"],["sperm whale","วาฬสเปิร์ม","🐳"],["heavy","หนัก","🏋️"],["poisonous","เป็นพิษ","☠️"],["hooks","ตะขอ","🪝"],["skimming","อ่านผ่าน ๆ เพื่อจับใจความ","👀"],["scanning","อ่านเพื่อหาข้อมูลเฉพาะ","🔍"]],
 slides:[
  T("🌊","Reading: Monsters of the Ocean","PASSION 2 Unit 5 · แผน 5.2",["อ่านและตอบคำถามจากบทอ่าน","บอกข้อมูลสัตว์จากบทอ่าน","ทำแผนผังความคิดสัตว์ที่สนใจ"]),
  B("🌊","What is the most incredible creature?","Warm up · ในความคิดของเธอ สัตว์ที่น่าทึ่งที่สุดคืออะไร"),
  ...vsl(10),
  L("Reading skills","ทักษะการอ่าน",[["Skimming = read fast for the main idea","อ่านเร็ว ๆ เพื่อรู้ว่าเรื่องเกี่ยวกับอะไร"],["Scanning = look for numbers, names, places","กวาดตาหาตัวเลข ชื่อ สถานที่"]]),
  L("Reading (1)","Sea giants",[["The sperm whale is a giant predator of the ocean.",""],["It is about 16 metres long and very heavy.",""],["It dives deep to hunt squid.",""]]),
  L("Reading (2)","Sea giants (ต่อ)",[["The colossal squid is a record-breaking animal.",""],["It has sharp hooks on its tentacles.",""],["Some ocean animals are poisonous, so don't touch them!",""]]),
  L("Questions","ตอบคำถามจากบทอ่าน",[["Where does the sperm whale hunt?","deep in the ocean"],["How long is it?","about 16 metres"],["What does the colossal squid have on its tentacles?","sharp hooks"]]),
  L("Mind map","แผนผังความคิดสัตว์ที่สนใจ",[["Name · Group · Habitat","ชื่อ กลุ่ม ที่อยู่อาศัย"],["Size: How long? How heavy?","ขนาด"],["Special features","ลักษณะพิเศษ"]]),
  L("Wrap up","สรุป",[["Say 2 facts about the sperm whale.","บอกข้อมูลวาฬสเปิร์ม 2 ข้อ"],["Skimming or scanning — which one is faster?","อ่านแบบไหนเร็วกว่า"]])],
 ws:{title:"Reading: Monsters of the Ocean",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[4,2,0,5,1,3],items:[["squid","ปลาหมึก"],["whale","วาฬ"],["predator","ผู้ล่า"],["heavy","หนัก"],["hooks","ตะขอ"],["poisonous","เป็นพิษ"]]},
  {k:"tf",n:"อ่านแล้วเลือก T (จริง) หรือ F (เท็จ)",text:["The sperm whale is a giant predator of the ocean. It is about 16 metres long and very heavy. It dives deep to hunt squid. The colossal squid has sharp hooks on its tentacles."],items:[{q:"The sperm whale is a predator.",a:true},{q:"It is only two metres long.",a:false},{q:"It hunts squid.",a:true},{q:"The colossal squid has no hooks.",a:false}]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["predator","heavy","poisonous","hooks"],items:[{q:"A shark is a ___ of the sea.",a:"predator"},{q:"A whale is very ___.",a:"heavy"},{q:"Don't touch that fish. It is ___!",a:"poisonous"},{q:"The squid has sharp ___ on its tentacles.",a:"hooks"}]},
  {k:"write",n:"แผนผังความคิดสัตว์ที่ฉันสนใจ (ตอบอิสระ)",items:["Name: ____________________  Group: ____________________","Habitat: ____________________","How long? ____________  How heavy? ____________","Special feature: ____________________"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“predator” means …",o:["สัตว์เลี้ยง","ผู้ล่า","เหยื่อ"],a:1},{q:"Scanning means …",o:["อ่านเพื่อหาข้อมูลเฉพาะ","อ่านทุกคำช้า ๆ","เขียนสรุป"],a:0},{q:"Where does the sperm whale live?",o:["in a desert","in the ocean","in a forest"],a:1},{q:"Which word means “เป็นพิษ”?",o:["heavy","hooks","poisonous"],a:2},
  {q:"How long is the sperm whale in the text?",o:["16 metres","60 metres","1 metre"],a:0},{q:"The colossal squid has sharp ___.",o:["wings","hooks","legs"],a:1},{q:"“record-breaking” means …",o:["ทำลายสถิติ","เล็กมาก","น่ากลัวน้อย"],a:0},{q:"Skimming helps you find the ___ idea.",o:["last","main","small"],a:1}],
 order:[{w:["The sperm whale","is a giant","predator."],a:"The sperm whale is a giant predator."},{w:["It hunts","squid","deep in the ocean."],a:"It hunts squid deep in the ocean."},{w:["How long","is it?"],a:"How long is it?"},{w:["How heavy","is it?"],a:"How heavy is it?"}]
};
R["5.3"]={
 vocab:[["larger","ใหญ่กว่า","🐘"],["more beautiful","สวยกว่า","🦚"],["the largest","ใหญ่ที่สุด","🐳"],["the most beautiful","สวยที่สุด","🌺"],["better / best","ดีกว่า / ดีที่สุด","👍"],["worse / worst","แย่กว่า / แย่ที่สุด","👎"],["less / least","น้อยกว่า / น้อยที่สุด","➖"],["further / furthest","ไกลกว่า / ไกลที่สุด","📏"]],
 slides:[
  T("📏","Comparatives and Superlatives","PASSION 2 Unit 5 · แผน 5.3",["บอกหลักการเปลี่ยนคำคุณศัพท์เป็นขั้นกว่าและขั้นสูงสุด","แต่งประโยคเปรียบเทียบสัตว์","ถาม–ตอบเปรียบเทียบสัตว์"]),
  B("🐘","Which animal is bigger?","Warm up · ช้างหรือสิงโต ใครตัวใหญ่กว่ากัน"),
  ...vsl(8),
  L("Short adjectives","เติม -er / the -est",[["big → bigger → the biggest","(สะกดซ้ำตัวท้าย)"],["large → larger → the largest","(ลงท้าย e เติม r / st)"],["fast → faster → the fastest",""]]),
  L("Long adjectives","more … / the most …",[["beautiful → more beautiful → the most beautiful",""],["dangerous → more dangerous → the most dangerous",""],["Peacocks are more beautiful than vultures.",""]]),
  L("Irregular","คำพิเศษ",[["good → better → the best",""],["bad → worse → the worst",""],["far → further → the furthest",""]]),
  L("Make sentences","แต่งประโยคเปรียบเทียบ",[["Elephants are larger than lions.","กว่า = than"],["Elephants are the largest land animals.","ที่สุด = the …-est"],["Which animal is the biggest?",""]]),
  L("Pair work","ถาม–ตอบกับเพื่อน",[["Is a whale smaller than a squid?","คำตอบ: No, it isn't. It's larger."],["Which is faster, a cheetah or a horse?",""],["Which animal is the fastest?",""]]),
  L("Wrap up","สรุป",[["When do we use more / the most?","เมื่อไรใช้ more / the most"],["Say one comparative and one superlative sentence.","พูดประโยคขั้นกว่า 1 ขั้นสูงสุด 1"]])],
 ws:{title:"Comparatives and Superlatives",parts:[
  {k:"fill",n:"เติมคำคุณศัพท์ในวงเล็บให้อยู่ในรูปที่ถูกต้อง",items:[{q:"An elephant is ___ than a lion. (large)",a:"larger"},{q:"A cheetah is ___ than a horse. (fast)",a:"faster"},{q:"A peacock is ___ than a vulture. (beautiful)",a:"more beautiful"},{q:"A blue whale is the ___ animal in the world. (big)",a:"biggest"},{q:"A tiger is the ___ cat. (dangerous)",a:"most dangerous"},{q:"This is the ___ photo. (good)",a:"best"}]},
  {k:"match",n:"จับคู่คำคุณศัพท์กับรูปขั้นกว่า",ord:[2,0,4,1,3],items:[["big","bigger"],["good","better"],["bad","worse"],["far","further"],["small","smaller"]]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Elephants are","larger","than lions."],a:"Elephants are larger than lions."},{w:["Which animal","is","the biggest?"],a:"Which animal is the biggest?"},{w:["A cheetah","is the fastest","land animal."],a:"A cheetah is the fastest land animal."}]},
  {k:"write",n:"แต่งประโยคเปรียบเทียบสัตว์ (ตอบอิสระ)",items:["____________________ is bigger than ____________________.","____________________ is the fastest ____________________.","Which animal is the ____________________?"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"big → ___",o:["more big","bigger","biggest"],a:1},{q:"beautiful → ___ (comparative)",o:["more beautiful","beautifuler","most beautiful"],a:0},{q:"good → better → ___",o:["goodest","the best","the most good"],a:1},{q:"A whale is ___ than a fish.",o:["large","larger","the largest"],a:1},
  {q:"A cheetah is ___ animal on land.",o:["the faster","faster","the fastest"],a:2},{q:"“bad” → comparative …",o:["badder","worse","worst"],a:1},{q:"Which word do we use after a comparative?",o:["then","than","that"],a:1},{q:"Elephants are ___ land animals.",o:["the largest","larger","more large"],a:0}],
 order:[{w:["Elephants are","larger","than lions."],a:"Elephants are larger than lions."},{w:["Peacocks are","more beautiful","than vultures."],a:"Peacocks are more beautiful than vultures."},{w:["Which animal","is the biggest?"],a:"Which animal is the biggest?"},{w:["Is a squid","smaller","than a whale?"],a:"Is a squid smaller than a whale?"}]
};
R["5.4"]={
 vocab:[["who","ใคร","🙋"],["where","ที่ไหน","📍"],["what","อะไร","❓"],["when","เมื่อไร","🕒"],["why","ทำไม","🤔"],["which","อันไหน","👉"],["whose","ของใคร","🎒"],["how tall","สูงเท่าไร","📏"],["how old","อายุเท่าไร","🎂"],["how many","กี่ (นับได้)","🔢"]],
 slides:[
  T("🧑‍🤝‍🧑","Comparing Classmates","PASSION 2 Unit 5 · แผน 5.4",["ตั้งคำถาม Wh- เพื่อถามข้อมูลส่วนตัว","ถาม–ตอบข้อมูลของเพื่อน","นำเสนอข้อมูลเพื่อนด้วยขั้นกว่าและขั้นสูงสุด"]),
  B("🧑‍🤝‍🧑","Who is the tallest in our class?","Warm up · ในห้องนี้ใครสูงที่สุด"),
  ...vsl(10),
  L("Personal questions","ถามข้อมูลส่วนตัว",[["What is your name?",""],["How tall are you? — I'm 155 centimetres tall.",""],["How old are you? — I'm 13.",""],["How many people are there in your family?",""]]),
  L("Class survey","สำรวจข้อมูลเพื่อน 3 คน",[["Friend 1 · Friend 2 · Friend 3","จดชื่อ"],["Name / Age / Height / Family","ตาราง 4 ช่อง"],["Ask and write the answers.","ถามแล้วจดคำตอบ"]]),
  L("Example data","ข้อมูลตัวอย่าง",[["Nok: 13 years old · 150 cm",""],["Beam: 14 years old · 158 cm",""],["Fah: 12 years old · 145 cm",""]]),
  L("Compare","เปรียบเทียบข้อมูล",[["Beam is older than Nok, but Beam is the oldest.",""],["Nok is taller than Fah.",""],["Beam is the tallest in the group.",""]]),
  L("Present","นำเสนอเพื่อน",[["My friend is ___. He/She is ___ years old.",""],["He/She is taller than ___.",""],["He/She is the youngest in our group.",""]]),
  L("Wrap up","สรุป",[["Ask 2 Wh- questions to a friend.","ถามเพื่อน 2 คำถาม"],["Say 1 comparative sentence about your group.","พูดเปรียบเทียบเพื่อน 1 ประโยค"]])],
 ws:{title:"Comparing Classmates",parts:[
  {k:"match",n:"จับคู่คำถามกับความหมาย",ord:[3,0,5,2,4,1],items:[["who","ใคร"],["where","ที่ไหน"],["when","เมื่อไร"],["why","ทำไม"],["whose","ของใคร"],["how old","อายุเท่าไร"]]},
  {k:"fill",n:"เติมคำถามให้ถูกต้อง",bank:["How old","How tall","How many","Where","Who"],items:[{q:"___ are you? — I'm 13.",a:"How old"},{q:"___ are you? — I'm 155 centimetres tall.",a:"How tall"},{q:"___ people are there in your family? — Five.",a:"How many"},{q:"___ do you live? — I live in Sukhothai.",a:"Where"},{q:"___ is the tallest? — Beam.",a:"Who"}]},
  {k:"tf",n:"ดูข้อมูลแล้วเลือก T (จริง) หรือ F (เท็จ)",text:["Nok: 13 years old, 150 cm · Beam: 14 years old, 158 cm · Fah: 12 years old, 145 cm"],items:[{q:"Beam is the oldest.",a:true},{q:"Fah is taller than Nok.",a:false},{q:"Nok is older than Fah.",a:true},{q:"Fah is the tallest.",a:false}]},
  {k:"write",n:"สัมภาษณ์เพื่อน 3 คนและเขียนประโยคเปรียบเทียบ (ตอบอิสระ)",items:["Friend 1: ____________ · age ____ · ____ cm","Friend 2: ____________ · age ____ · ____ cm","Friend 3: ____________ · age ____ · ____ cm","____________________ is older than ____________________.","____________________ is the tallest."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which question asks for age?",o:["How old are you?","How tall are you?","Where are you?"],a:0},{q:"“whose” means …",o:["ของใคร","ใคร","ที่ไหน"],a:0},{q:"How ___ people are there in your family?",o:["much","many","tall"],a:1},{q:"Beam is 14. Nok is 13. Beam is ___ than Nok.",o:["younger","older","the oldest"],a:1},
  {q:"Nok is 150 cm. Beam is 158 cm. Who is taller?",o:["Nok","Beam","Both"],a:1},{q:"The youngest person in a group is the one with the ___ age.",o:["biggest","smallest","same"],a:1},{q:"Which word asks about place?",o:["when","where","who"],a:1},{q:"Why do you like cats? — ___ they are cute.",o:["Because","So","But"],a:0}],
 order:[{w:["How old","are you?"],a:"How old are you?"},{w:["How tall","are you?"],a:"How tall are you?"},{w:["Beam is","older than","Nok."],a:"Beam is older than Nok."},{w:["Fah is","the youngest."],a:"Fah is the youngest."}]
};
R["5.5"]={
 vocab:[["timid","ขี้ขลาด","🐰"],["fierce","ดุร้าย","🐯"],["lively","ร่าเริงกระปรี้กระเปร่า","⚡"],["lazy","ขี้เกียจ","😴"],["sweet","น่ารักอ่อนโยน","🍯"],["friendly","เป็นมิตร","🤝"],["furry","ขนฟู","🧸"],["squirrel","กระรอก","🐿️"],["cute","น่ารัก","🥰"]],
 slides:[
  T("🐯","Personality Adjectives","PASSION 2 Unit 5 · แผน 5.5",["บอกความหมายคำคุณศัพท์บอกนิสัย","ฟังและอ่านบทสนทนาแล้วตอบคำถาม","เขียนประโยคบอกลักษณะนิสัยของตนเอง"]),
  B("🐶","What is the most popular pet?","Warm up · สัตว์เลี้ยงที่คนนิยมที่สุดคืออะไร"),
  ...vsl(9),
  L("Animal personalities","นิสัยของสัตว์",[["Tigers are fierce.",""],["Rabbits are timid.",""],["Squirrels are lively and cute.",""],["Cats are sometimes lazy.",""]]),
  L("Dialogue","บทสนทนาเรื่องสัตว์เลี้ยง",[["A: Which animal is the most popular pet?",""],["B: I think dogs are. They are friendly and lively.",""],["A: What about rabbits? — B: They are sweet, furry and a bit timid.",""]]),
  L("Describe yourself","บอกนิสัยของตนเอง",[["I am friendly and lively.",""],["My friend is sweet but a little shy.",""],["I'm not lazy. I'm hardworking!","ฉันไม่ขี้เกียจ"]]),
  L("Which animal am I?","เกมทายสัตว์จากนิสัย",[["I'm furry and lively. I live in trees.","squirrel"],["I'm fierce and strong. I live in the forest.","tiger"],["I'm timid and cute. I eat carrots.","rabbit"]]),
  L("Wrap up","สรุป",[["Say 2 adjectives about your pet or a friend.","บอกนิสัยสัตว์เลี้ยงหรือเพื่อน 2 คำ"],["Write: I am ___ and ___.","เขียน I am ___ and ___"]])],
 ws:{title:"Personality Adjectives",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[4,7,1,8,0,5,3,2,6]},
  {k:"fill",n:"เติมคำคุณศัพท์จากกรอบ",bank:["timid","fierce","lively","lazy","friendly","furry"],items:[{q:"A tiger is ___. It can be dangerous.",a:"fierce"},{q:"A rabbit is ___. It runs away from loud noises.",a:"timid"},{q:"My dog is ___. It loves to play with everyone.",a:"friendly"},{q:"The cat sleeps all day. It is ___.",a:"lazy"},{q:"A squirrel jumps all day. It is ___.",a:"lively"},{q:"My teddy bear is soft and ___.",a:"furry"}]},
  {k:"tf",n:"อ่านบทสนทนาแล้วเลือก T หรือ F",text:["A: Which animal is the most popular pet?","B: I think dogs are. They are friendly and lively.","A: What about rabbits?","B: They are sweet, furry and a bit timid."],items:[{q:"B thinks dogs are popular pets.",a:true},{q:"Dogs are timid.",a:false},{q:"Rabbits are furry.",a:true},{q:"Rabbits are fierce.",a:false}]},
  {k:"write",n:"เขียนบอกนิสัยของตนเองและสัตว์ที่ชอบ (ตอบอิสระ)",items:["I am ____________________ and ____________________.","My favourite animal is ____________________. It is ____________________ and ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which animal is fierce?",o:["rabbit","tiger","hamster"],a:1},{q:"“timid” means …",o:["ขี้ขลาด","ร่าเริง","ดุร้าย"],a:0},{q:"“lazy” means …",o:["ขยัน","ขี้เกียจ","ฉลาด"],a:1},{q:"A dog that likes everyone is …",o:["fierce","timid","friendly"],a:2},
  {q:"Which animal lives in trees and is lively?",o:["squirrel","whale","frog"],a:0},{q:"My teddy bear is soft and ___.",o:["furry","fierce","lazy"],a:0},{q:"I am friendly ___ lively.",o:["and","but","because"],a:0},{q:"“cute” means …",o:["น่ารัก","น่ากลัว","เหนื่อย"],a:0}],
 order:[{w:["Tigers","are fierce."],a:"Tigers are fierce."},{w:["Rabbits","are timid."],a:"Rabbits are timid."},{w:["I am","friendly","and lively."],a:"I am friendly and lively."},{w:["Which animal","is the most","popular pet?"],a:"Which animal is the most popular pet?"}]
};
R["5.6"]={
 vocab:[["as … as","เท่ากับ","="],["not as … as","ไม่เท่ากับ / น้อยกว่า","≠"],["intelligent","ฉลาด","🧠"],["hardworking","ขยัน","💪"],["quiet","เงียบ","🤫"],["shy","ขี้อาย","🙈"],["large","ใหญ่","🐘"],["friendly","เป็นมิตร","🤝"]],
 slides:[
  T("⚖️","as … as","PASSION 2 Unit 5 · แผน 5.6",["บอกโครงสร้างการเปรียบเทียบเท่ากัน as … as","เขียนประโยค (not) as … as","ถาม–ตอบเปรียบเทียบตนเองกับเพื่อน"]),
  B("🤝","Who is as friendly as you?","Warm up · ใครเป็นมิตรเท่า ๆ กับเธอ"),
  ...vsl(8),
  L("as + adjective + as","เท่ากัน (ใช้คำคุณศัพท์รูปธรรมดา)",[["Her bag is as large as his bag.",""],["My dog is as friendly as your dog.",""],["Tom is as tall as Ben.",""]]),
  L("not as … as","ไม่เท่ากัน (น้อยกว่า)",[["He isn't as intelligent as our last dog.",""],["A rabbit isn't as fierce as a tiger.",""],["I'm not as shy as my sister.",""]]),
  L("Questions","ถาม–ตอบ",[["Is it as big as a squirrel?",""],["Yes, it is. / No, it isn't. It's bigger.",""],["Who is as hardworking as you?",""]]),
  L("Compare with a friend","เปรียบเทียบตนเองกับเพื่อน",[["I'm as quiet as my friend.",""],["My friend isn't as lively as me.",""],["We are both as hardworking as ants.",""]]),
  L("Wrap up","สรุป",[["Make 1 sentence with as … as.","แต่ง as … as 1 ประโยค"],["Make 1 sentence with not as … as.","แต่ง not as … as 1 ประโยค"]])],
 ws:{title:"as … as",parts:[
  {k:"fill",n:"เติม as หรือ not as ให้ถูกต้อง",bank:["as","not as"],items:[{q:"A rabbit is ___ fierce as a tiger. (rabbit is less fierce)",a:"not as"},{q:"My bag is ___ large as your bag. (same size)",a:"as"},{q:"Tom is ___ tall as Ben. (same height)",a:"as"},{q:"A frog is ___ heavy as a hippopotamus. (frog is lighter)",a:"not as"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["My dog","is as friendly","as your dog."],a:"My dog is as friendly as your dog."},{w:["He isn't","as intelligent","as our dog."],a:"He isn't as intelligent as our dog."},{w:["Is it","as big as","a squirrel?"],a:"Is it as big as a squirrel?"}]},
  {k:"match",n:"จับคู่คำคุณศัพท์กับความหมาย",ord:[2,0,3,1],items:[["intelligent","ฉลาด"],["hardworking","ขยัน"],["quiet","เงียบ"],["shy","ขี้อาย"]]},
  {k:"write",n:"เปรียบเทียบตนเองกับเพื่อน (ตอบอิสระ)",items:["I am as ____________________ as ____________________.","____________________ isn't as ____________________ as I am.","Who is as ____________________ as you? — ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Her bag is ___ large as his bag.",o:["as","more","than"],a:0},{q:"He isn't ___ intelligent as our last dog.",o:["so more","as","than"],a:1},{q:"“as … as” means …",o:["เท่ากับ","มากกว่า","น้อยที่สุด"],a:0},{q:"A rabbit is not as fierce as a tiger. = A tiger is ___ than a rabbit.",o:["fiercer","less fierce","as fierce"],a:0},
  {q:"“shy” means …",o:["ขี้อาย","ขยัน","ตะกละ"],a:0},{q:"Is it as big as a squirrel? — No, it isn't. It's ___.",o:["bigger","as big","big as"],a:0},{q:"Tom is as tall as Ben. They are the ___ height.",o:["same","different","lowest"],a:0},{q:"Which sentence is correct?",o:["I am as quiet than you.","I am as quiet as you.","I am as more quiet as you."],a:1}],
 order:[{w:["Her bag is","as large as","his bag."],a:"Her bag is as large as his bag."},{w:["He isn't","as intelligent","as our dog."],a:"He isn't as intelligent as our dog."},{w:["Is it","as big as","a squirrel?"],a:"Is it as big as a squirrel?"},{w:["I'm not","as shy","as my sister."],a:"I'm not as shy as my sister."}]
};
R["5.7"]={
 vocab:[["look like","หน้าตาเหมือน","👀"],["similar to","คล้ายกับ","≈"],["weigh","หนัก (น้ำหนัก)","⚖️"],["between","ระหว่าง","↔️"],["centimetres","เซนติเมตร","cm"],["grams","กรัม","g"],["long","ยาว","📏"],["heavy","หนัก","🏋️"]],
 slides:[
  T("🔎","Asking About Animals","PASSION 2 Unit 5 · แผน 5.7",["ตั้งคำถามถามลักษณะและการเปรียบเทียบ 3 รูปแบบ","ถาม–ตอบข้อมูลสัตว์ด้วยคำถามเปรียบเทียบ"]),
  B("🐾","What does it look like?","Warm up · ทายสัตว์จากลักษณะ"),
  ...vsl(8),
  L("Question type 1","ถามลักษณะ",[["What does it look like?",""],["It looks like a big cat with stripes.",""],["It's similar to a lion.",""]]),
  L("Question type 2","as … as",[["Is it as long as 10 centimetres?",""],["Yes, it is. / No, it isn't. It's longer.",""],["Is it as heavy as a cat?",""]]),
  L("Question type 3","comparative",[["Is it heavier than 20 grams?",""],["Yes, it is. / No, it isn't. It's lighter.",""],["Is it longer than a pencil?",""]]),
  L("Guess the animal","ทายสัตว์จาก 3 คำถาม",[["Student A: I have an animal. It weighs between 10 and 20 grams.",""],["Student B: Is it as long as 10 centimetres?",""],["Student A: No, it isn't. It's shorter.",""]]),
  L("Wrap up","สรุป",[["Which 3 question types can you ask?","ถามได้ 3 รูปแบบอะไรบ้าง"],["Ask one question about an animal.","ถามเกี่ยวกับสัตว์ 1 ข้อ"]])],
 ws:{title:"Asking About Animals",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[3,0,4,1,2],items:[["look like","หน้าตาเหมือน"],["similar to","คล้ายกับ"],["weigh","หนัก (น้ำหนัก)"],["between","ระหว่าง"],["centimetres","เซนติเมตร"]]},
  {k:"fill",n:"เติมคำถามหรือคำตอบให้ถูกต้อง",bank:["look like","as long as","heavier than","shorter","weighs"],items:[{q:"What does it ___? — It looks like a big cat.",a:"look like"},{q:"Is it ___ 10 centimetres? — Yes, it is.",a:"as long as"},{q:"Is it ___ 20 grams? — No, it isn't.",a:"heavier than"},{q:"No, it isn't. It's ___.",a:"shorter"},{q:"It ___ about 5 grams.",a:"weighs"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["What does","it look like?"],a:"What does it look like?"},{w:["Is it","heavier than","20 grams?"],a:"Is it heavier than 20 grams?"},{w:["It weighs","between 10 and 20 grams."],a:"It weighs between 10 and 20 grams."}]},
  {k:"write",n:"คิดสัตว์ 1 ชนิด แล้วเขียนคำถามถามเพื่อน 3 ข้อ (ตอบอิสระ)",items:["What does it ____________________?","Is it as ____________________ as ____________________?","Is it ____________________ than ____________________?"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“weigh” means …",o:["สูง","หนัก (น้ำหนัก)","ยาว"],a:1},{q:"What does it look like? — It ___ a big cat.",o:["looks like","looks","look like"],a:0},{q:"Is it ___ 10 centimetres?",o:["as long as","longer","the longest"],a:0},{q:"Is it heavier than 20 grams? — No, it isn't. It's ___.",o:["lighter","heavier","the lightest"],a:0},
  {q:"“between 10 and 20 grams” means …",o:["10 ถึง 20 กรัม","น้อยกว่า 10 กรัม","มากกว่า 20 กรัม"],a:0},{q:"“similar to” means …",o:["ต่างจาก","คล้ายกับ","เหมือนทุกอย่าง"],a:1},{q:"We use centimetres to measure …",o:["length","time","money"],a:0},{q:"We use grams to measure …",o:["height","weight","speed"],a:1}],
 order:[{w:["What does","it look like?"],a:"What does it look like?"},{w:["Is it","as long as","10 centimetres?"],a:"Is it as long as 10 centimetres?"},{w:["It weighs","between 10","and 20 grams."],a:"It weighs between 10 and 20 grams."},{w:["No, it isn't.","It's shorter."],a:"No, it isn't. It's shorter."}]
};
R["5.8"]={
 vocab:[["longer","ยาวกว่า","📏"],["larger","ใหญ่กว่า","🐘"],["hotter","ร้อนกว่า","🔥"],["heavier","หนักกว่า","🏋️"],["more dangerous","อันตรายกว่า","⚠️"],["better","ดีกว่า","👍"],["worse","แย่กว่า","👎"],["less","น้อยกว่า","➖"],["more","มากกว่า","➕"],["further","ไกลกว่า","🧭"]],
 slides:[
  T("➕","Grammar: Comparative Adjectives","PASSION 2 Unit 5 · แผน 5.8",["บอกหลักการสร้าง Comparative adjectives","แต่งประโยคเปรียบเทียบขั้นกว่า","สำรวจความคิดเห็นด้วยคำถามเปรียบเทียบ"]),
  B("🦎","Which is bigger?","Warm up · กิ้งก่ากับจระเข้ ใครใหญ่กว่า"),
  ...vsl(10),
  L("Rule 1","คำสั้น + -er",[["long → longer · small → smaller",""],["large → larger (ลงท้าย e เติม r)",""],["hot → hotter · big → bigger (ซ้ำพยัญชนะ)",""]]),
  L("Rule 2","y → ier / more + คำยาว",[["heavy → heavier",""],["dangerous → more dangerous",""],["Scorpions are more dangerous than beetles.",""]]),
  L("Irregular","รูปพิเศษ",[["good → better · bad → worse",""],["much / many → more · little → less",""],["far → further",""]]),
  L("Sentences","แต่งประโยค",[["Lizards are smaller than crocodiles.",""],["Summer is hotter than winter.",""],["Cats are better pets than snakes? — I agree / I don't agree.",""]]),
  L("Survey","สำรวจความคิดเห็น",[["Who is taller, you or May?",""],["Which is bigger, a frog or a lizard?",""],["Which is better, tea or juice?",""]]),
  L("Wrap up","สรุป",[["Make 2 comparative sentences.","แต่งประโยคขั้นกว่า 2 ประโยค"],["Ask 1 question with Which / Who.","ถามด้วย Which / Who 1 ข้อ"]])],
 ws:{title:"Grammar: Comparative Adjectives",parts:[
  {k:"fill",n:"เติมรูปขั้นกว่าของคำในวงเล็บ",items:[{q:"A snake is ___ than a lizard. (long)",a:"longer"},{q:"An elephant is ___ than a horse. (heavy)",a:"heavier"},{q:"July is ___ than December. (hot)",a:"hotter"},{q:"A tiger is ___ than a cat. (dangerous)",a:"more dangerous"},{q:"My score is ___ than yours. (good)",a:"better"},{q:"This game is ___ than that one. (bad)",a:"worse"}]},
  {k:"match",n:"จับคู่คำคุณศัพท์กับรูปขั้นกว่า",ord:[2,4,0,3,1],items:[["long","longer"],["large","larger"],["hot","hotter"],["heavy","heavier"],["far","further"]]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Lizards are","smaller","than crocodiles."],a:"Lizards are smaller than crocodiles."},{w:["Scorpions are","more dangerous","than beetles."],a:"Scorpions are more dangerous than beetles."},{w:["Who is taller,","you","or May?"],a:"Who is taller, you or May?"}]},
  {k:"write",n:"แต่งประโยคเปรียบเทียบ (ตอบอิสระ)",items:["____________________ is bigger than ____________________.","____________________ is more ____________________ than ____________________.","Who is taller, ____________________ or ____________________?"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"hot → ___",o:["hoter","hotter","more hot"],a:1},{q:"heavy → ___",o:["heavier","more heavy","heavyer"],a:0},{q:"dangerous → ___",o:["dangerouser","more dangerous","most dangerous"],a:1},{q:"good → ___",o:["gooder","more good","better"],a:2},
  {q:"Lizards are ___ than crocodiles.",o:["smaller","smallest","the smaller"],a:0},{q:"Which is correct?",o:["Scorpions are more dangerous than beetles.","Scorpions are dangerouser than beetles.","Scorpions are more dangerous that beetles."],a:0},{q:"“further” means …",o:["ใกล้กว่า","ไกลกว่า","ยาวที่สุด"],a:1},{q:"Who is taller, you ___ May?",o:["and","or","than"],a:1}],
 order:[{w:["Lizards are","smaller","than crocodiles."],a:"Lizards are smaller than crocodiles."},{w:["Summer is","hotter","than winter."],a:"Summer is hotter than winter."},{w:["Which is","bigger?"],a:"Which is bigger?"},{w:["Who is taller,","you or May?"],a:"Who is taller, you or May?"}]
};
R["5.9"]={
 vocab:[["the longest","ยาวที่สุด","📏"],["the largest","ใหญ่ที่สุด","🐳"],["the hottest","ร้อนที่สุด","🔥"],["the heaviest","หนักที่สุด","🏋️"],["the most dangerous","อันตรายที่สุด","⚠️"],["the best","ดีที่สุด","🥇"],["the worst","แย่ที่สุด","👎"],["the least","น้อยที่สุด","➖"],["the most","มากที่สุด","➕"],["the furthest","ไกลที่สุด","🧭"]],
 slides:[
  T("🥇","Grammar: Superlative Adjectives","PASSION 2 Unit 5 · แผน 5.9",["บอกหลักการสร้าง Superlative adjectives","เขียนบรรยายสมาชิกในครอบครัวด้วยขั้นสูงสุด"]),
  B("🌍","What is the longest river in the world?","Warm up · แม่น้ำที่ยาวที่สุดในโลกคืออะไร"),
  ...vsl(10),
  L("Rule 1","the + คำสั้น + -est",[["long → the longest · large → the largest",""],["hot → the hottest · big → the biggest",""],["heavy → the heaviest",""]]),
  L("Rule 2","the most + คำยาว",[["dangerous → the most dangerous",""],["beautiful → the most beautiful",""],["Cobras are the most dangerous of all snakes.",""]]),
  L("Irregular","รูปพิเศษ",[["good → the best · bad → the worst",""],["far → the furthest",""],["much → the most · little → the least",""]]),
  L("Use in a group","of / in",[["Mosquitoes are the deadliest animals in the world.",""],["Mali is the tallest in the class.",""],["Fish is the healthiest of all the dishes.",""]]),
  L("My family","บรรยายสมาชิกในครอบครัว",[["My mother is the best cook in my family.",""],["My brother is the tallest in my family.",""],["My grandmother is the oldest.",""]]),
  L("Wrap up","สรุป",[["Say 2 superlative sentences about your family.","พูดประโยคขั้นสูงสุดเกี่ยวกับครอบครัว 2 ประโยค"],["When do we use the most?","ใช้ the most เมื่อไร"]])],
 ws:{title:"Grammar: Superlative Adjectives",parts:[
  {k:"fill",n:"เติมรูปขั้นสูงสุดของคำในวงเล็บ",items:[{q:"The Nile is ___ river in Africa. (long)",a:"the longest"},{q:"A blue whale is ___ animal. (large)",a:"the largest"},{q:"April is ___ month in Thailand. (hot)",a:"the hottest"},{q:"A cobra is ___ of all snakes. (dangerous)",a:"the most dangerous"},{q:"My mother is ___ cook. (good)",a:"the best"},{q:"This is ___ film I know. (bad)",a:"the worst"}]},
  {k:"match",n:"จับคู่คำคุณศัพท์กับรูปขั้นสูงสุด",ord:[2,4,0,3,1],items:[["long","the longest"],["heavy","the heaviest"],["dangerous","the most dangerous"],["good","the best"],["far","the furthest"]]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Mosquitoes are","the deadliest","animals in the world."],a:"Mosquitoes are the deadliest animals in the world."},{w:["My mother","is the best","cook in my family."],a:"My mother is the best cook in my family."},{w:["What is","the longest river","in the world?"],a:"What is the longest river in the world?"}]},
  {k:"write",n:"เขียนบรรยายครอบครัวด้วยขั้นสูงสุด (ตอบอิสระ)",items:["My ____________________ is the tallest in my family.","My ____________________ is the best ____________________ in my family.","My ____________________ is the oldest."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"long → ___",o:["the longest","the most long","the longer"],a:0},{q:"dangerous → ___",o:["the dangerousest","the most dangerous","most dangerous the"],a:1},{q:"good → ___",o:["the goodest","the most good","the best"],a:2},{q:"bad → ___",o:["the worst","the baddest","the worse"],a:0},
  {q:"Cobras are the most dangerous ___ all snakes.",o:["of","than","as"],a:0},{q:"Mali is the tallest ___ the class.",o:["of","in","than"],a:1},{q:"“the furthest” means …",o:["ไกลที่สุด","ใกล้ที่สุด","ไกลกว่า"],a:0},{q:"We use “the + -est” with …",o:["short adjectives","very long adjectives","verbs"],a:0}],
 order:[{w:["Mosquitoes are","the deadliest","animals in the world."],a:"Mosquitoes are the deadliest animals in the world."},{w:["Cobras are","the most dangerous","of all snakes."],a:"Cobras are the most dangerous of all snakes."},{w:["My mother is","the best cook."],a:"My mother is the best cook."},{w:["What is","the longest river?"],a:"What is the longest river?"}]
};
R["5.10"]={
 vocab:[["as … as","เท่ากับ","="],["not as … as","ไม่เท่ากับ","≠"],["the same … as","เหมือนกับ","🟰"],["fertile","อุดมสมบูรณ์","🌾"],["densely populated","ประชากรหนาแน่น","🏙️"],["active","คล่องแคล่ว / กระตือรือร้น","🏃"],["/f/","เสียง /f/","🔊"],["leopard","เสือดาว","🐆"]],
 slides:[
  T("🔊","as … as and the Sound /f/","PASSION 2 Unit 5 · แผน 5.10",["ใช้ (not) as … as และ the same … as","อ่านบทอ่านสั้นแล้วเลือกคำเติม","ออกเสียง /f/ ได้ถูกต้อง"]),
  B("🐆","Are leopards as fast as lions?","Warm up · เสือดาวกับสิงโต ใครวิ่งเร็วเท่ากัน"),
  ...vsl(8),
  L("as … as","เท่ากัน",[["Leopards are as fast as lions.",""],["Beetles are not as intelligent as ants.",""]]),
  L("the same … as","เหมือนกัน (ใช้กับคำนาม)",[["This watch is the same price as that one.",""],["My English mark is the same as yours.",""],["Ann is the same age as Bo.",""]]),
  L("Short reading","Fill in the blanks",[["Thailand is ___ fertile as Vietnam. (as / the same)",""],["Bangkok is ___ densely populated as a small town. (not as)",""],["Our class is ___ active as theirs. (as)",""]]),
  L("The sound /f/","ฟันบนแตะริมฝีปากล่าง",[["fast · fish · fertile · four · family",""],["Say: Five fat frogs find fresh food.",""],["Don't say /p/ — say /f/!","อย่าออกเสียงเป็น /p/"]]),
  L("Practice","ฝึกอ่านออกเสียง",[["Leopards are as fast as lions.",""],["My friend is as friendly as me.",""]]),
  L("Wrap up","สรุป",[["Make 1 sentence with the same … as.","แต่งประโยค the same … as 1 ประโยค"],["Say 3 words with /f/.","พูดคำที่มีเสียง /f/ 3 คำ"]])],
 ws:{title:"as … as and the Sound /f/",parts:[
  {k:"fill",n:"เติม as / not as / the same",bank:["as","not as","the same"],items:[{q:"Leopards are ___ fast as lions.",a:"as"},{q:"Beetles are ___ intelligent as ants.",a:"not as"},{q:"This watch is ___ price as that one.",a:"the same"},{q:"My mark is ___ as yours. (equal)",a:"the same"},{q:"A frog is ___ heavy as a hippopotamus.",a:"not as"}]},
  {k:"tf",n:"อ่านแล้วเลือก T หรือ F",text:["Ann is 13 years old. Bo is 13 years old. Ann is 150 cm tall, but Bo is 155 cm tall."],items:[{q:"Ann is the same age as Bo.",a:true},{q:"Ann is as tall as Bo.",a:false},{q:"Bo is taller than Ann.",a:true}]},
  {k:"sort",n:"เขียนคำลงในช่องตามเสียงที่ได้ยิน",boxes:[{h:"has /f/",items:["fish","family","fast"]},{h:"no /f/",items:["pig","book","cat"]}]},
  {k:"write",n:"แต่งประโยคด้วย as … as และ the same … as (ตอบอิสระ)",items:["____________________ is as ____________________ as ____________________.","____________________ isn't as ____________________ as ____________________.","My ____________________ is the same as ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Leopards are ___ fast as lions.",o:["as","than","the same"],a:0},{q:"This watch is the same price ___ that one.",o:["than","as","like"],a:1},{q:"Which word has /f/?",o:["pig","fish","cat"],a:1},{q:"“the same … as” means …",o:["เหมือนกับ","ต่างจาก","มากกว่า"],a:0},
  {q:"Beetles are ___ intelligent as ants.",o:["not as","more","the same"],a:0},{q:"“fertile” means …",o:["แห้งแล้ง","อุดมสมบูรณ์","หนาวเย็น"],a:1},{q:"“densely populated” means …",o:["ประชากรหนาแน่น","ไม่มีคนอยู่","ทะเลทราย"],a:0},{q:"For /f/, we put our top teeth on our …",o:["lower lip","tongue","nose"],a:0}],
 order:[{w:["Leopards are","as fast as","lions."],a:"Leopards are as fast as lions."},{w:["Beetles are not","as intelligent","as ants."],a:"Beetles are not as intelligent as ants."},{w:["This watch is","the same price","as that one."],a:"This watch is the same price as that one."},{w:["My mark is","the same as","yours."],a:"My mark is the same as yours."}]
};
R["5.11"]={
 vocab:[["dangerous","อันตราย","⚠️"],["poisonous","เป็นพิษ","☠️"],["venom","พิษ (จากการกัด/ต่อย)","🧪"],["deadliest","อันตรายถึงชีวิตที่สุด","💀"],["kill","ฆ่า / ทำให้ตาย","❌"],["taipan","งูไทปัน","🐍"],["white shark","ฉลามขาว","🦈"],["goldfish","ปลาทอง","🐠"],["mosquito","ยุง","🦟"],["capybara","คาปิบารา","🦫"]],
 slides:[
  T("🎬","Video: The Most Dangerous Animal","PASSION 2 Unit 5 · แผน 5.11",["ดูวิดีโอและจับใจความสำคัญเกี่ยวกับสัตว์","แต่งและแสดงบทสนทนาแสดงความคิดเห็นเกี่ยวกับสัตว์"]),
  B("⚠️","What do you know about these animals?","Warm up · สัตว์ชนิดไหนอันตรายที่สุดในความคิดเธอ"),
  ...vsl(10),
  L("Before watching","ก่อนดูวิดีโอ",[["Which animal is the most dangerous?",""],["Which animal is the fastest?",""],["Guess first, then check with the video.","เดาก่อนแล้วตรวจกับวิดีโอ"]]),
  L("While watching","ระหว่างดู · จดข้อมูล",[["Animal: ___","ชื่อสัตว์"],["Why is it dangerous? ___","เหตุผล"],["Is it poisonous or does it have venom?","เป็นพิษหรือมีพิษ"]]),
  L("Giving opinions","แสดงความคิดเห็น",[["I think the most dangerous animal is the mosquito.",""],["I think the friendliest animal is probably the capybara.",""],["In my opinion, a goldfish isn't dangerous.",""]]),
  L("Agree / disagree","เห็นด้วย / ไม่เห็นด้วย",[["I agree. / That's right.",""],["I don't agree. I think …",""],["Which is more dangerous, a shark or a snake?",""]]),
  L("Make a dialogue","แต่งบทสนทนาคู่ละ 2 คน",[["A: Which animal is the deadliest?",""],["B: I think it's the mosquito. Mosquitoes can carry diseases.",""],["A: I agree. / I don't agree. I think it's …",""]]),
  L("Wrap up","สรุป",[["Say your opinion about 1 animal.","แสดงความคิดเห็นเกี่ยวกับสัตว์ 1 ชนิด"],["Use: I think … is the most …","ใช้ I think … is the most …"]])],
 ws:{title:"Video: The Most Dangerous Animal",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[6,2,9,0,4,8,1,5,3,7]},
  {k:"fill",n:"เติมคำศัพท์จากกรอบ",bank:["dangerous","poisonous","venom","deadliest","kill"],items:[{q:"A taipan has strong ___.",a:"venom"},{q:"Some frogs are ___. Don't touch them.",a:"poisonous"},{q:"The ___ animal in the world may be the mosquito.",a:"deadliest"},{q:"A shark can be ___.",a:"dangerous"},{q:"Some snakes can ___ people.",a:"kill"}]},
  {k:"write",n:"ดูวิดีโอแล้วจดข้อมูล (ตอบจากวิดีโอ)",items:["Animal 1: ____________________ · why: ____________________","Animal 2: ____________________ · why: ____________________","The most dangerous animal in the video is ____________________."]},
  {k:"write",n:"เขียนความคิดเห็นของตนเอง (ตอบอิสระ)",items:["I think the most dangerous animal is ____________________.","I think the friendliest animal is ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“venom” means …",o:["ขน","พิษ","เล็บ"],a:1},{q:"Which animal is a snake?",o:["taipan","goldfish","capybara"],a:0},{q:"“dangerous” means …",o:["ปลอดภัย","อันตราย","เชื่อง"],a:1},{q:"I think the ___ animal is probably the capybara.",o:["friendliest","most friendly","friendlier"],a:0},
  {q:"Which is a fish?",o:["white shark","taipan","mosquito"],a:0},{q:"I ___ with you. = ฉันเห็นด้วย",o:["agree","think","kill"],a:0},{q:"Mosquitoes can carry diseases, so they can be …",o:["dangerous","friendly","lazy"],a:0},{q:"“kill” means …",o:["ทำให้ตาย","เลี้ยงดู","วิ่งหนี"],a:0}],
 order:[{w:["Which animal","is the deadliest?"],a:"Which animal is the deadliest?"},{w:["I think","it's the mosquito."],a:"I think it's the mosquito."},{w:["I think the friendliest animal","is probably","the capybara."],a:"I think the friendliest animal is probably the capybara."},{w:["I don't agree.","I think","it's the shark."],a:"I don't agree. I think it's the shark."}]
};
R["5.12"]={
 vocab:[["cheetah","เสือชีตาห์","🐆"],["antelope","ละมั่ง","🦌"],["orca","วาฬเพชฌฆาต","🐋"],["blue whale","วาฬสีน้ำเงิน","🐳"],["albatross","นกอัลบาทรอส","🕊️"],["tortoise","เต่าบก","🐢"],["pygmy possum","โพสซัมแคระ","🐭"],["horse","ม้า","🐴"]],
 slides:[
  T("❓","Animal Quiz","PASSION 2 Unit 5 · แผน 5.12",["ตั้งคำถามเปรียบเทียบสัตว์ได้ 3 รูปแบบ","ถาม–ตอบแบบทดสอบความรู้เกี่ยวกับสัตว์"]),
  B("🏆","Which is the fastest land animal?","Warm up · สัตว์บกที่เร็วที่สุดคืออะไร"),
  ...vsl(8),
  L("3 question types","คำถามเปรียบเทียบ 3 รูปแบบ",[["Which is the fastest: the cheetah, the horse or the antelope?",""],["Is a rat smaller than a pygmy possum?",""],["Is a cheetah as fast as a lion?",""]]),
  L("Answering","ตอบแบบมีความคิดเห็น",[["I think it's the blue whale.",""],["Yes, it is. / No, it isn't.",""],["I'm not sure, but I think …",""]]),
  L("Quiz time (1)","ทายคำตอบ",[["Which is the largest animal: the blue whale, the orca or the horse?","blue whale"],["Which is the fastest land animal?","cheetah"]]),
  L("Quiz time (2)","ทายคำตอบ",[["Is a tortoise faster than a cheetah?","No, it isn't."],["Which bird has the longest wings?","I think it's the albatross."]]),
  L("Make your quiz","แต่งคำถามควิซของกลุ่ม",[["Write 3 questions: Which … ? / Is … smaller than … ? / Is … as … as … ?",""],["Ask another group.","ถามกลุ่มอื่น"]]),
  L("Wrap up","สรุป",[["Ask 1 comparison question.","ถามเปรียบเทียบ 1 ข้อ"],["Answer with: I think …","ตอบด้วย I think …"]])],
 ws:{title:"Animal Quiz",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[5,2,7,0,3,6,1,4]},
  {k:"mcq",n:"เลือกคำตอบที่ถูกต้อง",items:[{q:"Which is the fastest land animal?",o:["cheetah","tortoise","blue whale"],a:0},{q:"Which is the largest animal?",o:["horse","blue whale","orca"],a:1},{q:"Is a tortoise as fast as a cheetah?",o:["Yes, it is.","No, it isn't.","I am."],a:1}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Which animal","is","the fastest?"],a:"Which animal is the fastest?"},{w:["Is a cheetah","as fast as","a lion?"],a:"Is a cheetah as fast as a lion?"},{w:["I think","it's the blue whale."],a:"I think it's the blue whale."}]},
  {k:"write",n:"แต่งคำถามควิซ 3 ข้อ (ตอบอิสระ)",items:["Which is the ____________________: ____________________, ____________________ or ____________________?","Is ____________________ smaller than ____________________?","Is ____________________ as ____________________ as ____________________?"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which is the fastest land animal?",o:["cheetah","horse","antelope"],a:0},{q:"Which is the largest animal in the world?",o:["orca","blue whale","horse"],a:1},{q:"Is a tortoise faster than a cheetah?",o:["Yes, it is.","No, it isn't.","Yes, it does."],a:1},{q:"“tortoise” means …",o:["เต่าบก","ละมั่ง","ม้า"],a:0},
  {q:"An orca lives in the …",o:["forest","sea","desert"],a:1},{q:"I'm not ___, but I think it's the albatross.",o:["sure","surely","short"],a:0},{q:"Is a cheetah as fast as a lion? — No, it ___.",o:["isn't","doesn't","aren't"],a:0},{q:"Which question compares two animals?",o:["Is a rat smaller than a possum?","What is your name?","Where do you live?"],a:0}],
 order:[{w:["Which animal","is the fastest?"],a:"Which animal is the fastest?"},{w:["Is a rat","smaller than","a pygmy possum?"],a:"Is a rat smaller than a pygmy possum?"},{w:["Is a cheetah","as fast as","a lion?"],a:"Is a cheetah as fast as a lion?"},{w:["I think","it's the blue whale."],a:"I think it's the blue whale."}]
};
R["5.13"]={
 vocab:[["extinction","การสูญพันธุ์","🦖"],["endangered","ใกล้สูญพันธุ์","🆘"],["decreasing","ลดลง","📉"],["hunted","ถูกล่า","🎯"],["save","ช่วยเหลือ / รักษา","🛟"],["habitat","แหล่งที่อยู่อาศัย","🌳"],["wildcat","แมวป่า","🐈"],["red squirrel","กระรอกแดง","🐿️"]],
 slides:[
  T("🆘","Reading: Please Save Us!","PASSION 2 Unit 5 · แผน 5.13",["อ่านบทอ่านเรื่องสัตว์ใกล้สูญพันธุ์และตอบคำถาม","สรุปข้อมูลด้วยแผนผังความคิด (mind map)"]),
  B("🆘","Why are these animals endangered?","Warm up · ทำไมสัตว์เหล่านี้ใกล้สูญพันธุ์"),
  ...vsl(8),
  L("Reading (1)","Please save us!",[["Wildcats and red squirrels are in danger.",""],["Their numbers are decreasing every year.",""],["Their habitat is disappearing.",""]]),
  L("Reading (2)","Please save us! (ต่อ)",[["People cut down trees, so animals lose their homes.",""],["Some animals are hunted.",""],["We can save them if we protect their habitat.",""]]),
  L("Questions","ตอบคำถามจากบทอ่าน",[["Which animals are in danger?","wildcats and red squirrels"],["Why are they in danger?","their habitat is disappearing"],["How can we save them?","protect their habitat"]]),
  L("Comparing","เปรียบเทียบ",[["A wildcat is bigger than a domestic cat.",""],["A red squirrel is smaller than a wildcat.",""]]),
  L("Mind map","สรุปด้วยแผนผังความคิด",[["Centre: endangered animals","ชื่อเรื่อง"],["Branch 1: Which animals?","สัตว์อะไร"],["Branch 2: Why? · Branch 3: How to help?","เหตุผล · วิธีช่วย"]]),
  L("Wrap up","สรุป",[["Say 2 reasons why animals are endangered.","บอกเหตุผล 2 ข้อที่สัตว์ใกล้สูญพันธุ์"],["Say 1 way to help.","บอกวิธีช่วย 1 ข้อ"]])],
 ws:{title:"Reading: Please Save Us!",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[3,6,0,5,2,7,1,4]},
  {k:"tf",n:"อ่านแล้วเลือก T หรือ F",text:["Wildcats and red squirrels are in danger. Their numbers are decreasing and their habitat is disappearing. People cut down trees, so the animals lose their homes. We can save them if we protect their habitat."],items:[{q:"Wildcats are in danger.",a:true},{q:"Their numbers are increasing.",a:false},{q:"The animals lose their homes when people cut down trees.",a:true},{q:"We cannot save them.",a:false}]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["endangered","decreasing","habitat","hunted","save"],items:[{q:"A forest is a ___ for many animals.",a:"habitat"},{q:"Tigers are ___. There are not many left.",a:"endangered"},{q:"The number of elephants is ___.",a:"decreasing"},{q:"Some animals are ___ for their fur.",a:"hunted"},{q:"We must ___ the forest.",a:"save"}]},
  {k:"write",n:"สรุปด้วยแผนผังความคิด (ตอบอิสระ)",items:["Endangered animals: ____________________","Why? 1) ____________________  2) ____________________","How to help? ____________________"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“endangered” means …",o:["ใกล้สูญพันธุ์","น่ารัก","ปลอดภัย"],a:0},{q:"“habitat” means …",o:["อาหาร","แหล่งที่อยู่อาศัย","ขน"],a:1},{q:"The number of wildcats is ___.",o:["increasing","decreasing","growing"],a:1},{q:"Why do animals lose their homes?",o:["People cut down trees.","They like moving.","They are lazy."],a:0},
  {q:"“extinction” means …",o:["การสูญพันธุ์","การแข่งขัน","การเดินทาง"],a:0},{q:"A wildcat is ___ than a domestic cat.",o:["bigger","as big","the biggest"],a:0},{q:"Animals that people kill for fur or meat are …",o:["hunted","saved","decreasing"],a:0},{q:"How can we help?",o:["protect habitats","cut down more trees","hunt animals"],a:0}],
 order:[{w:["Wildcats","are in danger."],a:"Wildcats are in danger."},{w:["Their habitat","is disappearing."],a:"Their habitat is disappearing."},{w:["Why are","these animals","endangered?"],a:"Why are these animals endangered?"},{w:["We can","save them."],a:"We can save them."}]
};
R["5.14"]={
 vocab:[["Animal Life Fund","กองทุนช่วยชีวิตสัตว์","🏦"],["adopt","อุปการะ (สัตว์ใกล้สูญพันธุ์)","🤲"],["protect","ปกป้อง","🛡️"],["monitor","ติดตามตรวจสอบ","📡"],["local communities","ชุมชนท้องถิ่น","🏘️"],["habitat loss","การสูญเสียแหล่งที่อยู่","🪓"],["illegal hunting","การล่าผิดกฎหมาย","🚫"]],
 slides:[
  T("📣","Writing: An Endangered Animal Brochure","PASSION 2 Unit 5 · แผน 5.14",["ฟังโฆษณาและตอบคำถามบอกรายละเอียด","เขียนข้อความโน้มน้าวใจลง brochure","นำเสนอและตอบคำถามเกี่ยวกับสัตว์ใกล้สูญพันธุ์"]),
  B("📣","How can we help endangered animals?","Warm up · เราช่วยสัตว์ใกล้สูญพันธุ์ได้อย่างไร"),
  ...vsl(7),
  L("Listen to the advert","ฟังโฆษณาแล้วตอบคำถาม",[["Adopt a leopard! Give £5 a month to help protect it.",""],["Leopards live in Asia and Africa.",""],["They are hunted and their habitat is disappearing.",""]]),
  L("Questions","ตอบคำถามจากโฆษณา",[["What can you adopt?","a leopard"],["Where do leopards live?","Asia and Africa"],["Why are they in danger?","hunting and habitat loss"]]),
  L("Persuasive language","ภาษาโน้มน้าว",[["Please help us!",""],["We can help protect leopards by …",""],["Give £5 a month to …",""]]),
  L("Brochure plan","โครงร่าง brochure",[["Title: Adopt a ___!",""],["Where it lives · Why it is in danger",""],["How to help · Contact us",""]]),
  L("Present","นำเสนอ brochure",[["Our animal is ___. It lives in ___.",""],["It is in danger because of habitat loss and illegal hunting.",""],["You can help by adopting it.",""]]),
  L("Wrap up","สรุป Unit 5",[["Say 1 reason and 1 way to help.","บอกเหตุผล 1 ข้อ และวิธีช่วย 1 ข้อ"],["Review: comparatives, superlatives, as … as.","ทบทวนไวยากรณ์ Unit 5"]])],
 ws:{title:"Writing: An Endangered Animal Brochure",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[4,1,6,0,3,5,2]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["adopt","protect","monitor","habitat loss","illegal hunting"],items:[{q:"You can ___ a leopard and help it.",a:"adopt"},{q:"We must ___ the forest.",a:"protect"},{q:"Scientists ___ the number of animals every year.",a:"monitor"},{q:"Cutting down trees causes ___.",a:"habitat loss"},{q:"___ is against the law.",a:"illegal hunting"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Give £5","a month","to help."],a:"Give £5 a month to help."},{w:["We can help","protect leopards","by adopting one."],a:"We can help protect leopards by adopting one."},{w:["They are","hunted."],a:"They are hunted."}]},
  {k:"write",n:"เขียนข้อความใน brochure (ตอบอิสระ)",items:["Adopt a ____________________!","It lives in ____________________.","It is in danger because ____________________.","We can help protect it by ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“protect” means …",o:["ทำลาย","ปกป้อง","ล่า"],a:1},{q:"“adopt” in the advert means …",o:["อุปการะ","ขาย","กิน"],a:0},{q:"“habitat loss” means …",o:["การสูญเสียแหล่งที่อยู่","การสูญเสียเงิน","การเสียเวลา"],a:0},{q:"Illegal hunting is …",o:["against the law","allowed","a hobby"],a:0},
  {q:"Where do leopards live?",o:["Asia and Africa","only in Europe","only in the sea"],a:0},{q:"Which sentence persuades people?",o:["Please help us!","I'm tired.","What time is it?"],a:0},{q:"We can help protect leopards ___ giving money.",o:["by","with","at"],a:0},{q:"“local communities” means …",o:["ชุมชนท้องถิ่น","ห้างสรรพสินค้า","เมืองใหญ่"],a:0}],
 order:[{w:["Adopt","a leopard!"],a:"Adopt a leopard!"},{w:["Give £5","a month","to help."],a:"Give £5 a month to help."},{w:["Leopards live","in Asia","and Africa."],a:"Leopards live in Asia and Africa."},{w:["We can help","protect leopards","by adopting one."],a:"We can help protect leopards by adopting one."}]
};
return R;
})();
