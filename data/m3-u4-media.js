(window.WLM=window.WLM||{})["m3u4"]=(()=>{
// vocab: [English, ไทย, emoji]  (ภาพ = อีโมจิของระบบ ไม่ใช้ภาพผลงานศิลปะ/ภาพจากหนังสือ · ตัวอย่างประโยคและบทอ่านแต่งขึ้นเอง)
const R={};
const T=(em,en,th,lines)=>({t:"title",em,en,th,lines});
const B=(em,en,th)=>({t:"big",em,en,th});
const L=(en,th,lines)=>({t:"lines",en,th,lines});
const vsl=n=>Array.from({length:Math.ceil(n/2)},(_,i)=>({t:"vocab",items:2*i+1<n?[2*i,2*i+1]:[2*i]}));
R["4.1"]={
 vocab:[["cartoon","การ์ตูน","📺"],["drawing","ภาพวาดลายเส้น","✏️"],["graffiti","กราฟฟิตี (ภาพพ่นบนกำแพง)","🧱"],["installation","งานศิลปะจัดวาง","🧩"],["oil painting","ภาพสีน้ำมัน","🖼️"],["photograph","ภาพถ่าย","📷"],["sculpture","ประติมากรรม","🗿"],["watercolour","สีน้ำ","💧"],
  ["photographer","ช่างภาพ","📸"],["artist","ศิลปิน","🧑‍🎨"],["sculptor","ประติมากร","⚒️"],["performer","ผู้แสดง","🎭"],["painter","จิตรกร","👩‍🎨"],["gallery","หอศิลป์","🏛️"],["museum","พิพิธภัณฑ์","🏺"],["theatre","โรงละคร","🎪"]],
 slides:[
  T("🎨","Figurative Arts","PASSION 3 Unit 4 · แผน 4.1",["บอกความหมายและจับคู่คำศัพท์ประเภทงานศิลปะ","จำแนกคำศัพท์ตามหมวดหมู่","ตอบคำถามความรู้รอบตัวเกี่ยวกับศิลปะ"]),
  B("🎨","How do artworks make you feel?","Warm up · งานศิลปะที่ชอบทำให้รู้สึกอย่างไร"),
  ...vsl(16),
  L("Three groups of words","จัดคำศัพท์เป็น 3 หมวด",[["Artworks: drawing, sculpture, oil painting …","ผลงาน"],["People: artist, painter, sculptor, photographer, performer","ผู้สร้างสรรค์"],["Places: gallery, museum, theatre","สถานที่"]]),
  L("Talk about art","พูดคุยเรื่องศิลปะ",[["What do you see in this picture?",""],["Do you know the name of the artist?",""],["How does this artwork make you feel?",""]]),
  L("General knowledge quiz","ควิซความรู้รอบตัว",[["Who painted the Mona Lisa?","Leonardo da Vinci"],["Who painted The Starry Night?","Vincent van Gogh"],["Where can you see paintings and sculptures?","in a gallery or a museum"]]),
  L("Wrap up","สรุป",[["Say one artwork, one artist and one place.","บอกผลงาน ผู้สร้างสรรค์ และสถานที่อย่างละ 1"],["Which art form do you like most?","ชอบศิลปะแบบไหนที่สุด"]])],
 ws:{title:"Figurative Arts",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[9,3,14,6,0,11,5,13,2,8,15,4,10,1,7,12]},
  {k:"sort",n:"เขียนคำศัพท์ลงในหมวดที่ถูกต้อง",boxes:[{h:"Artworks",items:["drawing","oil painting","sculpture","photograph"]},{h:"People",items:["artist","painter","sculptor","performer"]},{h:"Places",items:["gallery","museum","theatre"]}]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["sculptor","photographer","painter","gallery","theatre"],items:[{q:"A ___ makes statues.",a:"sculptor"},{q:"A ___ takes photographs.",a:"photographer"},{q:"A ___ paints pictures.",a:"painter"},{q:"We can see paintings in a ___.",a:"gallery"},{q:"We watch plays in a ___.",a:"theatre"}]},
  {k:"write",n:"ตอบคำถาม (ตอบอิสระ)",items:["What do you see in a gallery? — I see ____________________.","Which art form do you like most? Why? — I like ____________________ because ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"A person who makes statues is a …",o:["painter","sculptor","performer"],a:1},{q:"Which one is a place?",o:["cartoon","artist","museum"],a:2},{q:"“graffiti” means …",o:["ภาพถ่าย","ภาพพ่นบนกำแพง","ภาพสีน้ำมัน"],a:1},{q:"A picture made with oil paint is an …",o:["oil painting","installation","opera"],a:0},
  {q:"Who painted the Mona Lisa?",o:["Picasso","Leonardo da Vinci","Van Gogh"],a:1},{q:"“watercolour” means …",o:["สีน้ำมัน","สีน้ำ","สีเทียน"],a:1},{q:"Where do actors perform a play?",o:["in a theatre","in a gallery","in a bank"],a:0},{q:"How does this artwork make you ___?",o:["feeling","felt","feel"],a:2}],
 order:[{w:["What do you","see in","this picture?"],a:"What do you see in this picture?"},{w:["How does this artwork","make you feel?"],a:"How does this artwork make you feel?"},{w:["A sculptor","makes","sculptures."],a:"A sculptor makes sculptures."},{w:["We can see","paintings","in a gallery."],a:"We can see paintings in a gallery."}]
};
R["4.2"]={
 vocab:[["exhibition","นิทรรศการ","🖼️"],["gallery","หอศิลป์","🏛️"],["museum","พิพิธภัณฑ์","🏺"],["modern art","ศิลปะสมัยใหม่","🎨"],["contemporary art","ศิลปะร่วมสมัย","🆕"],["installation","งานศิลปะจัดวาง","🧩"],["sculpture","ประติมากรรม","🗿"],["graffiti","กราฟฟิตี","🧱"],["drawing","ภาพวาดลายเส้น","✏️"],["photograph","ภาพถ่าย","📷"]],
 slides:[
  T("🏛️","Tate Modern","PASSION 3 Unit 4 · แผน 4.2",["ฟังวิดีโอเรื่อง Tate Modern และตอบคำถาม","สนทนาเรื่องประสบการณ์ไปชมนิทรรศการ"]),
  B("🏛️","Have you ever been to an art exhibition?","Warm up · เคยไปชมนิทรรศการศิลปะไหม"),
  ...vsl(10),
  L("About Tate Modern","ทำความรู้จัก",[["Tate Modern is a gallery in London.",""],["It shows modern and contemporary art.",""],["It has paintings, sculptures, photographs and installations.",""]]),
  L("Watch and listen","ดูวิดีโอแล้วจับใจความ",[["What kind of art is in the gallery?","จดชนิดงานศิลปะที่เห็น"],["What does the presenter like?","จดสิ่งที่ผู้พูดชอบ"],["Write 3 words you hear.","จดคำศัพท์ที่ได้ยิน 3 คำ"]]),
  L("Experience questions","ถามประสบการณ์",[["Have you ever been to an art exhibition?",""],["Yes, I have. I went to one last month. / No, I haven't.",""],["What was it about? Where was it? Did you like it?",""]]),
  L("Model dialogue","บทสนทนาตัวอย่าง",[["A: Have you ever been to an art exhibition?",""],["B: Yes, I have. I went to one last month.",""],["A: What was it about? — B: It was about photographs of Thailand.",""]]),
  L("Role play","คู่ละ 2 คน ถาม–ตอบประสบการณ์",[["Use: Have you ever … ? / Where was it? / Did you like it?",""],["Swap roles.","สลับบทบาท"]]),
  L("Wrap up","สรุป",[["Say one place where you can see art.","บอกสถานที่ชมศิลปะ 1 แห่ง"],["Ask a friend: Have you ever been to a gallery?","ถามเพื่อน"]])],
 ws:{title:"Tate Modern",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[6,2,8,0,4,9,1,5,3,7]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Have you ever","been to","an art exhibition?"],a:"Have you ever been to an art exhibition?"},{w:["Yes, I have.","I went to one","last month."],a:"Yes, I have. I went to one last month."},{w:["What was it","about?"],a:"What was it about?"}]},
  {k:"write",n:"ดูวิดีโอแล้วจดข้อมูล (ตอบจากวิดีโอ)",items:["Tate Modern is in ____________________.","Three kinds of art I see: ____________________, ____________________, ____________________.","One thing I learn: ____________________."]},
  {k:"write",n:"สัมภาษณ์เพื่อนและเขียนคำตอบ (ตอบอิสระ)",items:["Have you ever been to an art exhibition? — ____________________.","Where was it? — ____________________.","Did you like it? — ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Tate Modern is a …",o:["school","gallery","hospital"],a:1},{q:"Have you ever been to an art exhibition? — Yes, I ___.",o:["have","did","was"],a:0},{q:"“contemporary art” means …",o:["ศิลปะร่วมสมัย","ศิลปะพื้นบ้าน","ศิลปะโบราณ"],a:0},{q:"I went to one last month. “went” is the past of …",o:["see","go","come"],a:1},
  {q:"What was it ___? — It was about photographs.",o:["about","for","on"],a:0},{q:"A piece of art arranged in a room is an …",o:["opera","exhibition","installation"],a:2},{q:"Did you like it? — No, I ___.",o:["wasn't","didn't","haven't"],a:1},{q:"“exhibition” means …",o:["นิทรรศการ","การแสดง","ร้านค้า"],a:0}],
 order:[{w:["Have you ever","been to","an exhibition?"],a:"Have you ever been to an exhibition?"},{w:["Where","was it?"],a:"Where was it?"},{w:["Did you","like it?"],a:"Did you like it?"},{w:["Tate Modern","shows modern art."],a:"Tate Modern shows modern art."}]
};
R["4.3"]={
 vocab:[["acceptance","การยอมรับ","✅"],["wizardry","เวทมนตร์","🧙"],["evil","ชั่วร้าย","😈"],["tourist information","ศูนย์ข้อมูลนักท่องเที่ยว","ℹ️"],["sightseeing","ท่องเที่ยวชมสถานที่","🗺️"],["ticket","ตั๋ว","🎟️"],["London Eye","ชิงช้าสวรรค์ลอนดอน","🎡"],["Big Ben","หอนาฬิกาบิ๊กเบน","🕰️"]],
 slides:[
  T("🇬🇧","Reading: Things to Do in London","PASSION 3 Unit 4 · แผน 4.3",["อ่านและระบุประเภทของข้อมูลจากบทอ่าน","ตอบคำถามเพื่อตรวจสอบความเข้าใจ"]),
  B("🗺️","If you go to London, what will you do?","Warm up · ถ้าไปลอนดอน จะทำอะไรบ้าง"),
  ...vsl(8),
  L("Reading skill","ดูประเภทของข้อความ",[["Brochure · timetable · advert · ticket","ข้อความแบบไหน"],["Look at the title and pictures first.","ดูชื่อเรื่องและภาพก่อน"],["Then scan for places, times and prices.","กวาดตาหาข้อมูล"]]),
  L("Reading (1)","Visit London!",[["Take a ride on the London Eye and enjoy the view of the River Thames.",""],["Listen to Big Ben and take a photo!",""]]),
  L("Reading (2)","Visit London! (ต่อ)",[["Go to the Natural History Museum. Entry to the main collection is free.",""],["Love magic? Try a wizardry exhibition for fun and enjoy stories about good and evil.",""],["Ask at the tourist information office for a free map.",""]]),
  L("Questions","ตอบคำถามจากบทอ่าน",[["Where can you enjoy the view of the River Thames?","on the London Eye"],["Where can you get a free map?","at the tourist information office"],["Is the main collection at the Natural History Museum free?","Yes, it is."]]),
  L("Plan a trip","วางแผนเที่ยวลอนดอน",[["First, I'll visit ___. Then I'll go to ___.",""],["I'll buy a ticket for ___.",""]]),
  L("Wrap up","สรุป",[["Which place do you want to visit most?","อยากไปที่ไหนมากที่สุด"],["Why?","เพราะอะไร"]])],
 ws:{title:"Reading: Things to Do in London",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[3,0,5,2,4,1],items:[["acceptance","การยอมรับ"],["wizardry","เวทมนตร์"],["evil","ชั่วร้าย"],["sightseeing","ท่องเที่ยวชมสถานที่"],["ticket","ตั๋ว"],["tourist information","ศูนย์ข้อมูลนักท่องเที่ยว"]]},
  {k:"tf",n:"อ่านแล้วเลือก T หรือ F",text:["Take a ride on the London Eye and enjoy the view of the River Thames. Go to the Natural History Museum. Entry to the main collection is free. Ask at the tourist information office for a free map."],items:[{q:"You can ride the London Eye.",a:true},{q:"The main collection at the Natural History Museum costs a lot.",a:false},{q:"The tourist information office gives a free map.",a:true},{q:"The London Eye is in Paris.",a:false}]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["ticket","sightseeing","tourist information","Big Ben"],items:[{q:"I want to go ___ in London.",a:"sightseeing"},{q:"Ask at the ___ office for a map.",a:"tourist information"},{q:"You need a ___ to ride the London Eye.",a:"ticket"},{q:"___ is a famous clock tower.",a:"Big Ben"}]},
  {k:"write",n:"วางแผนเที่ยวลอนดอน (ตอบอิสระ)",items:["First, I'll visit ____________________.","Then I'll go to ____________________.","I'll buy ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“sightseeing” means …",o:["ซื้อของ","เรียนภาษา","เที่ยวชมสถานที่"],a:2},{q:"Where can you get a free map?",o:["a bank","tourist information","a cinema"],a:1},{q:"The London Eye is a big …",o:["Ferris wheel","bridge","museum"],a:0},{q:"“evil” means …",o:["ใจดี","ตลก","ชั่วร้าย"],a:2},
  {q:"Which place is a famous clock tower?",o:["Tate Modern","Big Ben","London Eye"],a:1},{q:"If you go to London, what ___ you do?",o:["will","did","are"],a:0},{q:"“wizardry” is about …",o:["sport","food","magic"],a:2},{q:"We scan a text to find …",o:["the author's age","specific information","new friends"],a:1}],
 order:[{w:["Take a ride","on the","London Eye."],a:"Take a ride on the London Eye."},{w:["Ask at","the tourist information","office."],a:"Ask at the tourist information office."},{w:["Entry","is free."],a:"Entry is free."},{w:["I'll","buy a ticket."],a:"I'll buy a ticket."}]
};
R["4.4"]={
 vocab:[["will","จะ (ทำนาย/ตัดสินใจ)","🔮"],["won't","จะไม่ (will not)","🚫"],["'ll","จะ (รูปย่อ will)","✍️"],["forecast","พยากรณ์","📡"],["storm","พายุ","⛈️"],["tomorrow","พรุ่งนี้","📅"],["next weekend","สุดสัปดาห์หน้า","🗓️"],["probably","น่าจะ","🤔"]],
 slides:[
  T("🔮","The Future with will","PASSION 3 Unit 4 · แผน 4.4",["ใช้ will / won't สร้างประโยคคาดการณ์อนาคต","พูดวางแผนกิจกรรมวันหยุด"]),
  B("🌦️","What will the weather be like tomorrow?","Warm up · พรุ่งนี้อากาศจะเป็นอย่างไร"),
  ...vsl(8),
  L("Form","รูปประโยค",[["She will go to school.","(+) will + กริยาช่อง 1"],["She won't go to school.","(−) won't + กริยาช่อง 1"],["Will she go to school?","(?) Will + ประธาน + กริยา"]]),
  L("Short answers","คำตอบสั้น",[["Yes, she will.",""],["No, she won't.",""]]),
  L("Weather forecast","พยากรณ์อากาศ",[["It will be sunny in the morning.",""],["It won't rain at noon.",""],["There will be a storm in the evening.",""]]),
  L("Decide now","ตัดสินใจทันที ใช้ ’ll",[["I think I'll go to the beach.",""],["It's hot. I'll open the window.",""],["I'll have an ice cream, please.",""]]),
  L("Weekend plans","ถาม–ตอบแผนวันหยุด",[["What will you do next weekend? — I'll visit a gallery.",""],["Will you stay at home? — No, I won't.",""]]),
  L("Wrap up","สรุป",[["Make 1 sentence with will and 1 with won't.","แต่ง will 1 ประโยค won't 1 ประโยค"],["Ask a friend: Will you … ?","ถามเพื่อนด้วย Will you … ?"]])],
 ws:{title:"The Future with will",parts:[
  {k:"fill",n:"เติม will หรือ won't ให้ตรงกับความหมาย",bank:["will","won't"],items:[{q:"Look at the clouds. It ___ rain tomorrow. (ฝนตก)",a:"will"},{q:"He is ill. He ___ go to school. (ไม่ไป)",a:"won't"},{q:"She is hardworking. She ___ pass the exam. (สอบผ่าน)",a:"will"},{q:"The shop is closed. We ___ buy any food. (ซื้อไม่ได้)",a:"won't"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["She","will","go to school."],a:"She will go to school."},{w:["Will she","go","to school?"],a:"Will she go to school?"},{w:["I think","I'll go","to the beach."],a:"I think I'll go to the beach."}]},
  {k:"mcq",n:"เลือกคำตอบที่ถูกต้อง",items:[{q:"Will she go? — Yes, she ___.",o:["will","does","is"],a:0},{q:"It ___ rain. (not)",o:["willn't","not will","won't"],a:2},{q:"I ___ have a pizza, please.",o:["am","'ll","do"],a:1}]},
  {k:"write",n:"เขียนแผนวันหยุดสุดสัปดาห์หน้า (ตอบอิสระ)",items:["Next weekend, I will ____________________.","I won't ____________________.","Will you ____________________? — Yes, I will. / No, I won't."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"She ___ go to school tomorrow. (+)",o:["will","does","is"],a:0},{q:"He ___ come to the party. (−)",o:["doesn't will","not","won't"],a:2},{q:"Will she go to school? — No, she ___.",o:["doesn't","won't","isn't"],a:1},{q:"“forecast” means …",o:["พยากรณ์","พายุ","หน้าร้อน"],a:0},
  {q:"After will we use the verb in the ___ form.",o:["-ing","past","base (infinitive)"],a:2},{q:"“I'll” = …",o:["I was","I will","I shall not"],a:1},{q:"There will be a ___ tonight. We must stay inside.",o:["storm","gallery","portrait"],a:0},{q:"“probably” means …",o:["แน่นอนที่สุด","ไม่เคย","น่าจะ"],a:2}],
 order:[{w:["It will","be sunny","tomorrow."],a:"It will be sunny tomorrow."},{w:["It won't","rain","at noon."],a:"It won't rain at noon."},{w:["Will she","go to school?"],a:"Will she go to school?"},{w:["I think","I'll go","to the beach."],a:"I think I'll go to the beach."}]
};
R["4.5"]={
 vocab:[["Cubism","ศิลปะคิวบิสม์","🔷"],["Surrealism","ศิลปะเหนือจริง","🌀"],["Pop Art","ป๊อปอาร์ต","💥"],["Impressionism","ศิลปะอิมเพรสชันนิสม์","🌅"],["melting","ละลาย","🍦"],["spare","ว่าง / สำรอง","⏳"],["weeping","ร้องไห้","😢"],["art movement","กระแสศิลปะ","🎨"]],
 slides:[
  T("🎨","Artistic Movements","PASSION 3 Unit 4 · แผน 4.5",["จับคู่ชื่อกระแสศิลปะกับลักษณะผลงาน","ฟังและอ่านบทสนทนาเพื่อตอบคำถาม"]),
  B("👀","What do you see? How does it make you feel?","Warm up · ดูภาพแล้วบอกความรู้สึก"),
  ...vsl(8),
  L("Four movements","4 กระแสศิลปะ",[["Cubism: objects are broken into shapes.","วัตถุถูกแยกเป็นรูปทรง"],["Surrealism: strange, dream-like pictures.","ภาพประหลาดคล้ายความฝัน"],["Pop Art: bright colours, everyday things.","สีสดใส สิ่งใกล้ตัว"],["Impressionism: light, colour and quick brush strokes.","แสงสี ฝีแปรงเร็ว"]]),
  L("Famous artists","ศิลปินที่ควรรู้จัก",[["Cubism — Pablo Picasso",""],["Surrealism — Salvador Dalí (melting clocks)",""],["Pop Art — Andy Warhol",""],["Impressionism — Claude Monet",""]]),
  L("Dialogue","บทสนทนา",[["A: Which movement do you like the most?",""],["B: I like Surrealism. The melting clocks are strange but interesting.",""],["A: How does it make you feel? — B: It makes me feel curious.",""]]),
  L("Describe the feeling","บอกความรู้สึก",[["It makes me feel happy / calm / curious / sad.",""],["The weeping woman looks very sad.",""],["I have some spare time, so I'll visit a gallery.",""]]),
  L("Wrap up","สรุป",[["Whose favourite art movement do you like most? Why?","ชอบกระแสศิลปะของใครที่สุด เพราะอะไร"],["Use: I like … because it is …","ใช้ I like … because it is …"]])],
 ws:{title:"Artistic Movements",parts:[
  {k:"match",n:"จับคู่กระแสศิลปะกับลักษณะ",ord:[2,0,3,1],items:[["Cubism","objects broken into shapes"],["Surrealism","strange, dream-like pictures"],["Pop Art","bright colours, everyday things"],["Impressionism","light and quick brush strokes"]]},
  {k:"match",n:"จับคู่ศิลปินกับกระแสศิลปะ",ord:[1,3,0,2],items:[["Pablo Picasso","Cubism"],["Salvador Dalí","Surrealism"],["Andy Warhol","Pop Art"],["Claude Monet","Impressionism"]]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["melting","weeping","spare","movement"],items:[{q:"Dalí painted ___ clocks.",a:"melting"},{q:"Picasso painted a ___ woman. She is crying.",a:"weeping"},{q:"I have some ___ time today, so I will go to the museum.",a:"spare"},{q:"Cubism is an art ___.",a:"movement"}]},
  {k:"write",n:"บอกความรู้สึกและเหตุผล (ตอบอิสระ)",items:["My favourite art movement is ____________________.","I like it because ____________________.","It makes me feel ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which movement has strange, dream-like pictures?",o:["Impressionism","Surrealism","Pop Art"],a:1},{q:"Which artist is linked with Pop Art?",o:["Andy Warhol","Claude Monet","Pablo Picasso"],a:0},{q:"“weeping” means …",o:["หัวเราะ","โกรธ","ร้องไห้"],a:2},{q:"Cubism breaks objects into …",o:["maps","shapes","songs"],a:1},
  {q:"Which artist is linked with Impressionism?",o:["Salvador Dalí","Claude Monet","Andy Warhol"],a:1},{q:"It makes me ___ happy.",o:["feeling","to feel","feel"],a:2},{q:"“melting” means …",o:["บิน","ละลาย","แข็ง"],a:1},{q:"How does it make you feel? — It makes me feel ___.",o:["curious","curiosity","a curious"],a:0}],
 order:[{w:["Which movement","do you like","the most?"],a:"Which movement do you like the most?"},{w:["I like Surrealism","because it is","strange."],a:"I like Surrealism because it is strange."},{w:["It makes","me feel","curious."],a:"It makes me feel curious."},{w:["Cubism","breaks objects","into shapes."],a:"Cubism breaks objects into shapes."}]
};
R["4.6"]={
 vocab:[["offer","เสนอ (ความช่วยเหลือ)","🤲"],["promise","สัญญา","🤞"],["shall","ให้ฉัน…ไหม / เรา…ดีไหม","❓"],["lend","ให้ยืม","📖"],["borrow","ยืม","🙏"],["carry","ถือ / แบก","📦"],["on time","ตรงเวลา","⏰"],["study hard","ตั้งใจเรียน","📚"]],
 slides:[
  T("🤝","Offers and Promises","PASSION 3 Unit 4 · แผน 4.6",["เสนอความช่วยเหลือและให้คำมั่นสัญญา","แสดงบทบาทสมมติตามสถานการณ์"]),
  B("🤞","Can you keep a promise?","Warm up · เคยสัญญาอะไรกับใครบ้าง"),
  ...vsl(8),
  L("Offers","เสนอความช่วยเหลือ",[["I'll + verb : I'll carry your bag.","ตัดสินใจเสนอทันที"],["Shall I + verb ? : Shall I open the window?","ให้ฉัน…ไหม"],["I'll lend you my pen.",""]]),
  L("Answering an offer","ตอบรับ / ปฏิเสธ",[["Yes, please. That's very kind.",""],["No, thanks. I can do it myself.",""],["Thank you for offering!",""]]),
  L("Promises","ให้คำมั่นสัญญา",[["I will / I won't + verb","I won't be late."],["I promise I'll … : I promise I'll call you.",""],["I'll study hard, I promise!",""]]),
  L("Situations","สถานการณ์ฝึกพูด",[["Your friend's bag is heavy. → Offer help.","I'll carry it. / Shall I carry it?"],["You forgot your friend's birthday. → Promise.","I promise I'll remember next year."],["Your friend has no pen. → Offer.","I'll lend you mine."]]),
  L("Role play","แสดงบทบาทสมมติ",[["Student A has a problem. Student B offers help.",""],["Student B makes a promise. Swap roles.",""]]),
  L("Wrap up","สรุป",[["Make 1 offer and 1 promise.","พูดคำเสนอ 1 คำสัญญา 1"],["What is the difference between I'll and I promise?","ต่างกันอย่างไร"]])],
 ws:{title:"Offers and Promises",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[3,0,4,1,2],items:[["offer","เสนอ (ความช่วยเหลือ)"],["promise","สัญญา"],["lend","ให้ยืม"],["borrow","ยืม"],["carry","ถือ / แบก"]]},
  {k:"fill",n:"เติม I'll / Shall I / I promise ให้เหมาะกับสถานการณ์",bank:["I'll","Shall I","I promise","I won't"],items:[{q:"Your friend can't carry the box. ___ help you.",a:"I'll"},{q:"___ open the door for you?",a:"Shall I"},{q:"___ I'll study hard.",a:"I promise"},{q:"___ be late again. I promise!",a:"I won't"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Shall I","carry","your bag?"],a:"Shall I carry your bag?"},{w:["I promise","I'll","study hard."],a:"I promise I'll study hard."},{w:["I'll lend you","my pen."],a:"I'll lend you my pen."}]},
  {k:"write",n:"เขียนคำเสนอและคำสัญญา (ตอบอิสระ)",items:["Offer: I'll ____________________.","Offer: Shall I ____________________?","Promise: I promise I'll ____________________.","Promise: I won't ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Your friend's bag is heavy. You say: “___ carry it.”",o:["I promise","Will you","I'll"],a:2},{q:"“shall” in “Shall I help you?” is used to make an …",o:["answer","offer","order"],a:1},{q:"“promise” means …",o:["สัญญา","ปฏิเสธ","ยืม"],a:0},{q:"I ___ be late again. I promise!",o:["will not to","don't will","won't"],a:2},
  {q:"Shall I ___ the window?",o:["to open","open","opening"],a:1},{q:"“lend” means …",o:["ให้ยืม","ยืม","คืน"],a:0},{q:"Which is a polite way to accept an offer?",o:["No way!","Don't.","Yes, please. That's kind."],a:2},{q:"I'll lend you my pen. — ___",o:["See you.","Thank you!","I'm sorry."],a:1}],
 order:[{w:["Shall I","open","the window?"],a:"Shall I open the window?"},{w:["I'll","carry","your bag."],a:"I'll carry your bag."},{w:["I promise","I'll","call you."],a:"I promise I'll call you."},{w:["I won't","be late","again."],a:"I won't be late again."}]
};
R["4.7"]={
 vocab:[["will","จะ","🔮"],["won't","จะไม่","🚫"],["'ll","รูปย่อของ will","✍️"],["be going to","กำลังจะ / ตั้งใจจะ","🗓️"],["prediction","การคาดการณ์","📈"],["plan","แผน","📝"],["intention","ความตั้งใจ","🎯"],["relaxing","ผ่อนคลาย","🧘"]],
 slides:[
  T("🔮","will and be going to","PASSION 3 Unit 4 · แผน 4.7",["เปรียบเทียบการใช้ will และ be going to","เติมคำและสร้างประโยคได้ถูกต้อง","เลือกใช้ will หรือ be going to ให้เหมาะกับสถานการณ์"]),
  B("🔮","What will you do this weekend?","Warm up · มีแผนอะไรในสุดสัปดาห์นี้"),
  ...vsl(8),
  L("will","คาดการณ์ / ตัดสินใจทันที",[["Subject + will + verb",""],["I think it will be very relaxing.","ความคิดเห็น"],["Will she go? — Yes, she will. / No, she won't.",""]]),
  L("be going to","แผนที่ตั้งใจไว้ / เห็นหลักฐาน",[["Subject + am / is / are + going to + verb",""],["I'm going to visit a gallery on Saturday.","มีแผนไว้แล้ว"],["Is she going to play? — Yes, she is. / No, she isn't.",""]]),
  L("Which one?","เลือกให้เหมาะ",[["Look at those clouds! It's going to rain.","เห็นหลักฐาน → going to"],["I think it will rain tomorrow.","คิดเอาเอง → will"],["The phone is ringing. I'll answer it.","ตัดสินใจทันที → will"]]),
  L("Pair work","ถาม–ตอบกับเพื่อน",[["What are you going to do after school?",""],["Do you think it will be sunny tomorrow?",""],["Is your friend going to visit a museum?",""]]),
  L("Wrap up","สรุป",[["When do we use going to?","ใช้ going to เมื่อไร"],["Make 1 sentence with will and 1 with going to.","แต่ง will 1 going to 1"]])],
 ws:{title:"will and be going to",parts:[
  {k:"fill",n:"เลือก will หรือ be going to ให้เหมาะกับสถานการณ์",bank:["will","is going to","am going to","'ll"],items:[{q:"Look at the black clouds! It ___ rain.",a:"is going to"},{q:"I think people ___ travel to Mars in the future.",a:"will"},{q:"I have a ticket. I ___ visit the museum on Saturday.",a:"am going to"},{q:"The phone is ringing. I ___ answer it.",a:"'ll"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Is she","going to","play?"],a:"Is she going to play?"},{w:["I think","it will","be relaxing."],a:"I think it will be relaxing."},{w:["I'm going to","visit a gallery","on Saturday."],a:"I'm going to visit a gallery on Saturday."}]},
  {k:"mcq",n:"เลือกคำตอบที่ถูกต้อง",items:[{q:"Is she going to play? — Yes, she ___.",o:["is","will","does"],a:0},{q:"Will she go? — No, she ___.",o:["isn't","doesn't","won't"],a:2},{q:"Plans we made before speaking use …",o:["past simple","be going to","only will"],a:1}]},
  {k:"write",n:"เขียนประโยคเกี่ยวกับอนาคต (ตอบอิสระ)",items:["I'm going to ____________________ this weekend.","I think it will ____________________ tomorrow.","Next year, I will ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Look at the clouds! It ___ rain.",o:["is going to","will to","going"],a:0},{q:"I think it ___ be relaxing.",o:["is going","does","will"],a:2},{q:"“prediction” means …",o:["การสัญญา","การคาดการณ์","การตัดสินใจ"],a:1},{q:"I have bought a ticket. I ___ visit a museum.",o:["am going to","will to","go to"],a:0},
  {q:"Is she going to play? — No, she ___.",o:["won't","doesn't","isn't"],a:2},{q:"“intention” means …",o:["ความฝัน","ความตั้งใจ","ความกลัว"],a:1},{q:"The phone is ringing. I ___ answer it.",o:["'ll","am going to","did"],a:0},{q:"After will we use …",o:["-ing","to + verb","a base verb"],a:2}],
 order:[{w:["I'm going to","visit","a gallery."],a:"I'm going to visit a gallery."},{w:["I think","it will","rain tomorrow."],a:"I think it will rain tomorrow."},{w:["Is she","going to","play?"],a:"Is she going to play?"},{w:["She","won't","go."],a:"She won't go."}]
};
R["4.8"]={
 vocab:[["shall","ให้…ไหม / …กันดีไหม","❓"],["offer","เสนอ (ช่วย)","🤲"],["suggestion","ข้อเสนอแนะ","💡"],["itinerary","กำหนดการเดินทาง","🗺️"],["help","ช่วย","🆘"],["go for a walk","ไปเดินเล่น","🚶"],["lunch time","เวลาอาหารกลางวัน","🕛"],["pizza","พิซซ่า","🍕"]],
 slides:[
  T("💡","shall: Offers and Suggestions","PASSION 3 Unit 4 · แผน 4.8",["ใช้ will, be going to และ shall ได้ถูกต้อง","เขียนคำเสนอและข้อเสนอแนะด้วย shall"]),
  B("💡","Shall we go for a pizza?","Warm up · เสนอแนะเพื่อน"),
  ...vsl(8),
  L("Shall I … ?","เสนอความช่วยเหลือ",[["Shall I help you with the exercise?",""],["Shall I open the window?",""],["Shall I carry your bag?",""]]),
  L("Shall we … ?","เสนอแนะให้ทำด้วยกัน",[["It's lunch time. Shall we go for a pizza?",""],["Shall we visit a museum on Sunday?",""],["Shall we meet at ten o'clock?",""]]),
  L("Replies","ตอบรับ / เสนอทางเลือก",[["Yes, let's! / Good idea.",""],["Sorry, I can't. Shall we go tomorrow?",""],["How about going for a walk instead?",""]]),
  L("Plan a day","วางกำหนดการวันเที่ยวหอศิลป์ (itinerary)",[["9:00 Shall we meet at the station?",""],["11:00 Shall we visit the gallery?",""],["13:00 Shall we have lunch?",""]]),
  L("Wrap up","สรุป",[["Make 1 offer with Shall I.","แต่ง Shall I 1 ประโยค"],["Make 1 suggestion with Shall we.","แต่ง Shall we 1 ประโยค"]])],
 ws:{title:"shall: Offers and Suggestions",parts:[
  {k:"fill",n:"เติม Shall I / Shall we / will / is going to",bank:["Shall I","Shall we","will","is going to"],items:[{q:"___ help you with the exercise?",a:"Shall I"},{q:"It's lunch time. ___ go for a pizza?",a:"Shall we"},{q:"I think it ___ be a great day.",a:"will"},{q:"Look! He ___ jump into the water.",a:"is going to"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Shall I","help you","with the exercise?"],a:"Shall I help you with the exercise?"},{w:["Shall we","go for","a pizza?"],a:"Shall we go for a pizza?"},{w:["Shall we","meet at","ten o'clock?"],a:"Shall we meet at ten o'clock?"}]},
  {k:"match",n:"จับคู่คำเสนอกับคำตอบ",ord:[2,0,3,1],items:[["Shall I open the window?","Yes, please. It's hot."],["Shall we go for a pizza?","Good idea!"],["Shall I carry your bag?","No, thanks. I'm OK."],["Shall we visit a museum?","Sorry, I can't. Shall we go tomorrow?"]]},
  {k:"write",n:"เขียนกำหนดการวันเที่ยวหอศิลป์ (ตอบอิสระ)",items:["9:00 Shall we ____________________?","11:00 Shall we ____________________?","13:00 Shall we ____________________?","Offer: Shall I ____________________?"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"___ I help you with the exercise?",o:["Do","Shall","Will"],a:1},{q:"It's lunch time. ___ we go for a pizza?",o:["Shall","Are","Does"],a:0},{q:"“suggestion” means …",o:["คำสั่ง","คำถาม","ข้อเสนอแนะ"],a:2},{q:"“itinerary” means …",o:["แผนที่","กำหนดการเดินทาง","ตั๋ว"],a:1},
  {q:"Shall we go for a walk? — ___",o:["Good idea!","Yes, I shall not.","I'm going."],a:0},{q:"After shall we use …",o:["-ing","past verb","a base verb"],a:2},{q:"Which sentence offers help?",o:["I'm hungry.","Shall I carry your bag?","Shall we dance?"],a:1},{q:"Which is a suggestion?",o:["Shall we visit a museum?","Shall I open it?","I'll do it."],a:0}],
 order:[{w:["Shall I","help you?"],a:"Shall I help you?"},{w:["Shall we","go for","a pizza?"],a:"Shall we go for a pizza?"},{w:["Shall we","visit","a museum?"],a:"Shall we visit a museum?"},{w:["Good idea!","Let's go."],a:"Good idea! Let's go."}]
};
R["4.9"]={
 vocab:[["fortune teller","หมอดู","🔮"],["future","อนาคต","⏩"],["afraid","กลัว","😨"],["get better","ดีขึ้น","📈"],["meet","พบ / เจอ","🤝"],["lottery","ลอตเตอรี่","🎰"],["luck","โชค","🍀"],["weather","สภาพอากาศ","🌤️"]],
 slides:[
  T("🎬","Video: You'll win the lottery","PASSION 3 Unit 4 · แผน 4.9",["ฟังวิดีโอเพื่อจับใจความและตอบคำถาม","สนทนาเรื่องราวที่คาดว่าจะเกิดในอนาคตด้วย will, be going to, shall"]),
  B("🔮","What are they doing?","Warm up · เดาจากภาพ: พวกเขากำลังทำอะไรกัน"),
  ...vsl(8),
  L("Before watching","ก่อนดูวิดีโอ",[["What do you think they are talking about?",""],["Do you believe a fortune teller?","เชื่อหมอดูไหม"],["Predict: What will happen?",""]]),
  L("While watching","ระหว่างดู",[["What will happen to Molly?","จดคำตอบจากวิดีโอ"],["Will the weather be good or bad?","จดคำตอบจากวิดีโอ"],["Who is afraid?","จดคำตอบจากวิดีโอ"]]),
  L("Fortune teller language","ภาษาหมอดู",[["You will have good luck today.",""],["You'll meet an interesting person.",""],["Your life will get better.",""]]),
  L("After watching","หลังดู",[["Do you think the fortune teller is right?",""],["I think she will … because …",""],["I don't think he'll … because …",""]]),
  L("Role play","เล่นเป็นหมอดู คู่ละ 2 คน",[["Fortune teller: You will … Next year you'll … ",""],["Client: Will I … ? / Shall I … ?",""]]),
  L("Wrap up","สรุป",[["Say 2 predictions for your friend.","ทำนายเพื่อน 2 ข้อ"],["Use will / won't.","ใช้ will / won't"]])],
 ws:{title:"Video: You'll win the lottery",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[5,2,7,0,4,6,1,3]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["will","won't","afraid","luck","meet"],items:[{q:"You ___ have good luck today.",a:"will"},{q:"I'm ___ of the dark.",a:"afraid"},{q:"You ___ meet a new friend tomorrow.",a:"will"},{q:"Good ___! I hope you win.",a:"luck"},{q:"It ___ rain tomorrow. Take a hat.",a:"won't"}]},
  {k:"write",n:"ดูวิดีโอแล้วจดข้อมูล (ตอบจากวิดีโอ)",items:["What will happen to Molly? ____________________","Will the weather be good or bad? ____________________","One prediction in the video: ____________________"]},
  {k:"write",n:"ทำนายอนาคตเพื่อน (ตอบอิสระ)",items:["You will ____________________.","You'll probably ____________________.","You won't ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"A fortune teller tells you about your …",o:["homework","lunch","future"],a:2},{q:"“afraid” means …",o:["เหนื่อย","กลัว","กล้า"],a:1},{q:"You ___ have good luck today.",o:["will","did","are"],a:0},{q:"Will the weather be good? — No, it ___.",o:["isn't","doesn't","won't"],a:2},
  {q:"“get better” means …",o:["เหมือนเดิม","ดีขึ้น","แย่ลง"],a:1},{q:"“lottery” means …",o:["ลอตเตอรี่","ตั๋วหนัง","สมุด"],a:0},{q:"You'll ___ an interesting person.",o:["meeting","met","meet"],a:2},{q:"I think she ___ win. (prediction)",o:["has","will","did"],a:1}],
 order:[{w:["You will","have good luck","today."],a:"You will have good luck today."},{w:["What will","happen to Molly?"],a:"What will happen to Molly?"},{w:["Will the weather","be good","or bad?"],a:"Will the weather be good or bad?"},{w:["You'll","meet","a new friend."],a:"You'll meet a new friend."}]
};
R["4.10"]={
 vocab:[["future","อนาคต","⏩"],["job","งาน / อาชีพ","💼"],["university","มหาวิทยาลัย","🎓"],["travel","เดินทาง","✈️"],["money","เงิน","💰"],["family","ครอบครัว","👪"],["car","รถยนต์","🚗"],["probably","น่าจะ","🤔"],["fortune teller","หมอดู","🔮"],["client","ลูกค้า","🧑‍💼"]],
 slides:[
  T("🔮","Predicting the Future","PASSION 3 Unit 4 · แผน 4.10",["ถามและตอบเพื่อคาดการณ์อนาคตอีก 10 ปีของตนเองและเพื่อน"]),
  B("⏩","Where will you be in 10 years?","Warm up · อีก 10 ปี เธอจะอยู่ที่ไหน"),
  ...vsl(10),
  L("Making predictions","ภาษาทำนาย",[["I think you'll …",""],["I don't think you'll …",""],["You'll probably …",""]]),
  L("Topics","หัวข้อที่ทำนาย",[["job · university · travel","งาน · มหาวิทยาลัย · เที่ยว"],["money · family · car","เงิน · ครอบครัว · รถ"],["Where will I live?",""]]),
  L("Questions to ask","คำถามถามหมอดู",[["Will I live in a different country in 10 years' time?",""],["Will I have a car or a motorbike?",""],["Will I travel a lot?",""]]),
  L("Model","ตัวอย่างบทสนทนา",[["Client: Will I have a car or a motorbike?",""],["Fortune teller: I think you'll have a car. You'll probably have a job in a big city.",""],["Client: Will I travel? — Fortune teller: Yes, you will.",""]]),
  L("Role play","คู่ละ 2 คน สลับเป็นหมอดูและลูกค้า",[["Ask 4 questions about the future.",""],["Answer with I think … / You'll probably …",""]]),
  L("Wrap up","สรุป",[["Say 2 predictions about your partner.","ทำนายเพื่อน 2 ข้อ"],["Say 1 prediction about yourself.","ทำนายตัวเอง 1 ข้อ"]])],
 ws:{title:"Predicting the Future",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[6,2,9,0,4,8,1,5,3,7]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["Will I","have a car","or a motorbike?"],a:"Will I have a car or a motorbike?"},{w:["I think","you'll","have a car."],a:"I think you'll have a car."},{w:["You'll probably","have a job","in a big city."],a:"You'll probably have a job in a big city."}]},
  {k:"fill",n:"เติม will / won't / probably",bank:["will","won't","probably"],items:[{q:"I think you ___ go to university.",a:"will"},{q:"I don't think you ___ be a fortune teller.",a:"won't"},{q:"You'll ___ travel to many countries.",a:"probably"},{q:"Will I live in Japan? — Yes, you ___.",a:"will"}]},
  {k:"write",n:"ทำนายอนาคตอีก 10 ปีของเพื่อนและตนเอง (ตอบอิสระ)",items:["My partner's job: I think you'll ____________________.","My partner's family: You'll probably ____________________.","Me: In 10 years, I will ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“probably” means …",o:["น่าจะ","แน่นอน","ไม่เคย"],a:0},{q:"I ___ you'll have a car.",o:["thinks","thinking","think"],a:2},{q:"Will I live in a different country? — Yes, you ___.",o:["are","will","do"],a:1},{q:"I don't think you ___ be rich.",o:["will","won't","are"],a:0},
  {q:"A person who asks a fortune teller is a …",o:["painter","sculptor","client"],a:2},{q:"“university” means …",o:["โรงพยาบาล","มหาวิทยาลัย","โรงเรียนอนุบาล"],a:1},{q:"You'll probably ___ a good job.",o:["have","having","has"],a:0},{q:"“in 10 years' time” means …",o:["10 ปีที่แล้ว","ทุก 10 ปี","อีก 10 ปีข้างหน้า"],a:2}],
 order:[{w:["I think","you'll","have a car."],a:"I think you'll have a car."},{w:["Will I","live in","a different country?"],a:"Will I live in a different country?"},{w:["You'll probably","travel a lot."],a:"You'll probably travel a lot."},{w:["I don't think","you'll","be late."],a:"I don't think you'll be late."}]
};
R["4.11"]={
 vocab:[["Natural History Museum","พิพิธภัณฑ์ประวัติศาสตร์ธรรมชาติ","🦕"],["Science Museum","พิพิธภัณฑ์วิทยาศาสตร์","🔬"],["V&A","พิพิธภัณฑ์ศิลปะและการออกแบบ","🪑"],["London Transport Museum","พิพิธภัณฑ์การขนส่งลอนดอน","🚇"],["British Museum","พิพิธภัณฑ์บริติช","🏺"],["Museum of London","พิพิธภัณฑ์ลอนดอน","🏙️"],["Rosetta Stone","ศิลาโรเซตตา","🪨"],["Routemaster","รถบัสสองชั้นสีแดงแบบเก่า","🚍"]],
 slides:[
  T("🏛️","Reading: Museums in London","PASSION 3 Unit 4 · แผน 4.11",["อ่านเพื่อจับใจความสำคัญเกี่ยวกับพิพิธภัณฑ์ในลอนดอน","ตอบคำถามจากบทอ่าน"]),
  B("🏛️","How often do you visit a museum?","Warm up · ไปพิพิธภัณฑ์บ่อยแค่ไหน ไปกับใคร"),
  ...vsl(8),
  L("Museum guide (1)","ทำความรู้จัก",[["Natural History Museum: dinosaurs, animals and plants.",""],["Science Museum: space, machines and inventions.",""],["V&A: art and design from many countries.",""]]),
  L("Museum guide (2)","ทำความรู้จัก (ต่อ)",[["London Transport Museum: old buses, trams and trains — such as the Routemaster.",""],["British Museum: world history. You can see the Rosetta Stone there.",""],["Museum of London: the history of London.",""]]),
  L("Questions","ตอบคำถามจากบทอ่าน",[["Where can you see dinosaurs?","Natural History Museum"],["Where can you see the Rosetta Stone?","British Museum"],["Which museum has old buses?","London Transport Museum"]]),
  L("Talk about museums","พูดคุยเรื่องพิพิธภัณฑ์",[["How often do you visit a museum?",""],["Who do you usually go with?",""],["What do you like or dislike about museums?",""]]),
  L("Next visit","วางแผน",[["Which museum do you think you will visit next?",""],["I think I'll visit the ___ because I'm interested in ___.",""]]),
  L("Wrap up","สรุป",[["Say 2 museums and what you can see there.","บอกพิพิธภัณฑ์ 2 แห่งและสิ่งที่ชม"],["Which museum is your favourite?","ชอบแห่งไหนที่สุด"]])],
 ws:{title:"Reading: Museums in London",parts:[
  {k:"match",n:"จับคู่พิพิธภัณฑ์กับสิ่งที่เห็นได้",ord:[3,0,4,1,2],items:[["Natural History Museum","dinosaurs"],["British Museum","the Rosetta Stone"],["London Transport Museum","old buses and trains"],["Science Museum","space and machines"],["V&A","art and design"]]},
  {k:"tf",n:"อ่านแล้วเลือก T หรือ F",text:["The Natural History Museum has dinosaurs. The British Museum has the Rosetta Stone. The London Transport Museum has old buses, trams and trains."],items:[{q:"You can see dinosaurs at the Natural History Museum.",a:true},{q:"The Rosetta Stone is in the Science Museum.",a:false},{q:"The London Transport Museum has old buses.",a:true},{q:"The V&A is a transport museum.",a:false}]},
  {k:"fill",n:"เติมชื่อพิพิธภัณฑ์จากกรอบ",bank:["Natural History Museum","Science Museum","British Museum","London Transport Museum"],items:[{q:"I want to see dinosaurs. I'll go to the ___.",a:"Natural History Museum"},{q:"I like space and machines. I'll go to the ___.",a:"Science Museum"},{q:"I want to see old buses. I'll go to the ___.",a:"London Transport Museum"},{q:"I want to see the Rosetta Stone. I'll go to the ___.",a:"British Museum"}]},
  {k:"write",n:"ตอบคำถามเกี่ยวกับตนเอง (ตอบอิสระ)",items:["How often do you visit a museum? — ____________________.","Who do you usually go with? — ____________________.","Which museum will you visit next? — I think I'll visit ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Where can you see dinosaurs?",o:["London Transport Museum","Natural History Museum","V&A"],a:1},{q:"Where can you see the Rosetta Stone?",o:["Science Museum","British Museum","Museum of London"],a:1},{q:"A Routemaster is a …",o:["train","ship","red bus"],a:2},{q:"Which museum is about the history of London?",o:["V&A","Museum of London","Science Museum"],a:1},
  {q:"V&A is a museum of art and …",o:["design","dinosaurs","sports"],a:0},{q:"How ___ do you visit a museum?",o:["long","old","often"],a:2},{q:"Which museum do you think you ___ visit next?",o:["are","will","did"],a:1},{q:"“space and machines” → the …",o:["Science Museum","British Museum","V&A"],a:0}],
 order:[{w:["How often","do you","visit a museum?"],a:"How often do you visit a museum?"},{w:["You can see","dinosaurs","there."],a:"You can see dinosaurs there."},{w:["I think","I'll visit","the Science Museum."],a:"I think I'll visit the Science Museum."},{w:["Who do you","usually go with?"],a:"Who do you usually go with?"}]
};
R["4.12"]={
 vocab:[["Gustav Klimt","กุสตาฟ คลิมต์ (จิตรกรชาวออสเตรีย)","🧑‍🎨"],["The Kiss","ผลงานชื่อ “The Kiss”","💏"],["Symbolism","ศิลปะสัญลักษณ์นิยม","🧿"],["Vienna","กรุงเวียนนา","🏰"],["gold leaf","แผ่นทองคำเปลว","🟡"],["perspectives","มุมมอง","👓"],["presentation","การนำเสนอ","📊"],["painting","ภาพวาด","🖼️"]],
 slides:[
  T("🖼️","Presenting a Work of Art","PASSION 3 Unit 4 · แผน 4.12",["ฟังการนำเสนอผลงานศิลปะและตอบคำถาม","เขียนบทนำเสนอผลงานศิลปะที่ชื่นชอบอย่างมีโครงสร้าง"]),
  B("🖼️","What is your favourite work of art?","Warm up · ผลงานศิลปะที่ชอบที่สุดคืออะไร"),
  ...vsl(8),
  L("About the artist","ทำความรู้จักศิลปิน",[["Gustav Klimt was an Austrian painter.",""],["He lived and worked in Vienna.",""],["He often used gold leaf in his paintings.",""]]),
  L("About The Kiss","เกี่ยวกับผลงาน",[["The Kiss is a famous painting by Gustav Klimt.",""],["It shows two people close together, with lots of gold.",""],["It is linked with Symbolism.",""]]),
  L("Presentation structure","โครงสร้างบทนำเสนอ",[["1 Introduction: My favourite work of art is …",""],["2 Body: The painting shows … It uses …",""],["3 Conclusion: I love this painting because …",""]]),
  L("Model presentation","ตัวอย่างบทนำเสนอ",[["My favourite work of art is The Kiss by Gustav Klimt.",""],["The painting shows two people. It uses a lot of gold.",""],["I love this painting because it looks warm and beautiful.",""]]),
  L("Your turn","เขียนบทนำเสนอผลงานที่ชอบ",[["My favourite work of art is ___ by ___.",""],["The painting shows ___.",""],["I love this painting because ___.",""]]),
  L("Wrap up","สรุป",[["Which part comes first — body or introduction?","ส่วนไหนมาก่อน"],["Present one sentence to a friend.","นำเสนอ 1 ประโยคให้เพื่อน"]])],
 ws:{title:"Presenting a Work of Art",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[5,2,7,0,4,6,1,3]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["gold leaf","Vienna","Symbolism","presentation","perspectives"],items:[{q:"Klimt lived and worked in ___.",a:"Vienna"},{q:"He often used ___ in his paintings.",a:"gold leaf"},{q:"The Kiss is linked with ___.",a:"Symbolism"},{q:"I will give a ___ about my favourite painting.",a:"presentation"},{q:"Different people have different ___ on art.",a:"perspectives"}]},
  {k:"order",n:"เรียงประโยคให้เป็นบทนำเสนอ",items:[{w:["My favourite work of art","is The Kiss","by Gustav Klimt."],a:"My favourite work of art is The Kiss by Gustav Klimt."},{w:["The painting","shows","two people."],a:"The painting shows two people."},{w:["I love this painting","because","it is beautiful."],a:"I love this painting because it is beautiful."}]},
  {k:"write",n:"เขียนบทนำเสนอผลงานศิลปะที่ชื่นชอบ (ตอบอิสระ)",items:["Introduction: My favourite work of art is ____________________ by ____________________.","Body: The painting shows ____________________. It uses ____________________.","Conclusion: I love this painting because ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Gustav Klimt was an ___ painter.",o:["English","Thai","Austrian"],a:2},{q:"Klimt often used ___ in his paintings.",o:["charcoal","gold leaf","oil only"],a:1},{q:"The Kiss is a …",o:["painting","song","building"],a:0},{q:"The first part of a presentation is the …",o:["conclusion","body","introduction"],a:2},
  {q:"Which sentence is a conclusion?",o:["Good morning, everyone.","I love this painting because it is warm.","The painting shows two people."],a:1},{q:"“presentation” means …",o:["การนำเสนอ","การวาดภาพ","การเดินทาง"],a:0},{q:"The painting ___ two people.",o:["show","showing","shows"],a:2},{q:"“perspectives” means …",o:["ราคา","มุมมอง","ภาพถ่าย"],a:1}],
 order:[{w:["My favourite","work of art is","The Kiss."],a:"My favourite work of art is The Kiss."},{w:["The painting","shows","two people."],a:"The painting shows two people."},{w:["I love","this painting","because it is beautiful."],a:"I love this painting because it is beautiful."},{w:["Klimt used","gold leaf","in his paintings."],a:"Klimt used gold leaf in his paintings."}]
};
R["4.13"]={
 vocab:[["introduction","บทนำ","👋"],["body","เนื้อหา","📄"],["conclusion","บทสรุป","🏁"],["curator","ภัณฑารักษ์","🧑‍🏫"],["exhibit","สิ่งของที่จัดแสดง","🖼️"],["theme","หัวข้อ / ธีม","🎯"],["promotional blurb","ข้อความโปรโมตสั้น ๆ","📣"],["free entry","เข้าชมฟรี","🎟️"]],
 slides:[
  T("🏛️","Presenting and Writing about Museums","PASSION 3 Unit 4 · แผน 4.13",["พูดนำเสนอและสรุปข้อมูลเกี่ยวกับพิพิธภัณฑ์ที่น่าสนใจ","เขียนข้อความโปรโมตพิพิธภัณฑ์ (promotional blurb)"]),
  B("🎤","Good morning, everyone.","Warm up · ฝึกกล่าวเปิดการนำเสนอ"),
  ...vsl(8),
  L("Structure","โครงสร้างการนำเสนอ",[["Introduction: greet + say your topic","กล่าวทักทายและบอกหัวข้อ"],["Body: 2–3 main points","ประเด็นหลัก 2–3 ข้อ"],["Conclusion: summary + ask for questions","สรุปและเปิดให้ถาม"]]),
  L("Useful phrases","สำนวนที่ใช้",[["Good morning, everyone. Today, I'd like to talk about my favourite museum.",""],["First, … Next, … Finally, …",""],["Thank you. Do you have any questions?",""]]),
  L("Promotional blurb","เขียนโปรโมตสั้น ๆ",[["Come and visit the ___ Museum!",""],["See amazing exhibits about ___.",""],["Free entry for students!",""]]),
  L("Plan your museum","ออกแบบพิพิธภัณฑ์ของกลุ่ม",[["Name · Theme · 3 exhibits","ชื่อ ธีม สิ่งจัดแสดง 3 อย่าง"],["Who is the curator?","ใครเป็นภัณฑารักษ์"],["Write a blurb with free entry.","เขียนโปรโมต"]]),
  L("Present","นำเสนอหน้าห้อง",[["Introduction → Body → Conclusion",""],["Answer 1 question from the class.","ตอบคำถามจากเพื่อน 1 ข้อ"]]),
  L("Wrap up","สรุป",[["What are the 3 parts of a presentation?","ส่วนทั้ง 3 ของการนำเสนอ"],["Say one phrase for the conclusion.","พูดสำนวนสรุป 1 ประโยค"]])],
 ws:{title:"Presenting and Writing about Museums",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[5,2,7,0,4,6,1,3]},
  {k:"sort",n:"เขียนประโยคตามส่วนของการนำเสนอ",boxes:[{h:"Introduction",items:["Good morning, everyone."]},{h:"Body",items:["First, you can see old maps.","Next, there is a gold mask."]},{h:"Conclusion",items:["Thank you. Do you have any questions?"]}]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["curator","exhibit","theme","free entry","blurb"],items:[{q:"The ___ looks after the museum's collection.",a:"curator"},{q:"A painting in a gallery is an ___.",a:"exhibit"},{q:"The ___ of our museum is Thai art.",a:"theme"},{q:"Students get ___ on Sundays.",a:"free entry"},{q:"A short advert for the museum is a promotional ___.",a:"blurb"}]},
  {k:"write",n:"เขียน promotional blurb ของพิพิธภัณฑ์ของกลุ่ม (ตอบอิสระ)",items:["Come and visit the ____________________ Museum!","See amazing exhibits about ____________________.","____________________ for students!"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"A presentation has three parts: introduction, body and …",o:["conclusion","exhibit","blurb"],a:0},{q:"“curator” means …",o:["ช่างภาพ","นักดนตรี","ภัณฑารักษ์"],a:2},{q:"“free entry” means …",o:["ปิดวันนี้","เข้าชมฟรี","ตั๋วแพง"],a:1},{q:"Which sentence opens a presentation?",o:["Good morning, everyone.","Thank you very much.","Any questions?"],a:0},
  {q:"“Do you have any questions?” belongs to the …",o:["introduction","title","conclusion"],a:2},{q:"A short exciting advert is a promotional …",o:["entry","blurb","exhibit"],a:1},{q:"The ___ of the museum is the main topic.",o:["theme","ticket","door"],a:0},{q:"First, … Next, … Finally, … are used in the …",o:["title","bin","body"],a:2}],
 order:[{w:["Good morning,","everyone."],a:"Good morning, everyone."},{w:["Today, I'd like","to talk about","my favourite museum."],a:"Today, I'd like to talk about my favourite museum."},{w:["Thank you.","Do you have","any questions?"],a:"Thank you. Do you have any questions?"},{w:["Come and visit","our museum!"],a:"Come and visit our museum!"}]
};
R["4.14"]={
 vocab:[["inequality","ความเหลื่อมล้ำ","⚖️"],["income","รายได้","💵"],["sex","เพศ","👫"],["age","อายุ","🎂"],["disability","ความพิการ","♿"],["race","เชื้อชาติ","🌍"],["religion","ศาสนา","🕊️"],["inclusion","การให้ทุกคนมีส่วนร่วม","🤝"],["right","สิทธิ","✊"]],
 slides:[
  T("⚖️","Reduced Inequalities","PASSION 3 Unit 4 · แผน 4.14",["บอกความหมายคำศัพท์เกี่ยวกับความเท่าเทียม","อ่านเพื่อจับใจความสำคัญเรื่องความเหลื่อมล้ำ","อภิปรายและเสนอแนวทางสร้างความเท่าเทียมในห้องเรียน"]),
  B("🤝","Is everyone treated equally?","Warm up · ทุกคนได้รับการปฏิบัติอย่างเท่าเทียมไหม"),
  ...vsl(9),
  L("What is inequality?","ความเหลื่อมล้ำคืออะไร",[["Inequality means people do not have the same chances or rights.","คนไม่มีโอกาสหรือสิทธิเท่ากัน"],["It can be based on age, sex, race, income, religion or disability.",""]]),
  L("Reading","Everyone has the right to learn",[["All children have the right to go to school.",""],["Some students cannot go because of low income or disability.",""],["Reduced Inequalities is one of the UN Sustainable Development Goals.",""]]),
  L("Questions","ตอบคำถามจากบทอ่าน",[["What do all children have the right to do?","go to school"],["Why can some students not go to school?","low income or disability"],["Which UN goal is about equality?","Reduced Inequalities"]]),
  L("Making a class more inclusive","ทำให้ห้องเรียนมีส่วนร่วมมากขึ้น",[["We should include everyone in group work.",""],["We can share books and materials.",""],["We shouldn't laugh at anyone's mistakes.",""]]),
  L("Discussion","อภิปรายเป็นกลุ่ม",[["What is one small thing we can do in our classroom to make everyone feel included?",""],["I think we should … because …",""]]),
  L("Wrap up","สรุป",[["Say one way to include everyone.","บอกวิธีให้ทุกคนมีส่วนร่วม 1 วิธี"],["Say one right every child has.","บอกสิทธิของเด็ก 1 ข้อ"]])],
 ws:{title:"Reduced Inequalities",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[5,2,7,0,4,8,1,6,3]},
  {k:"tf",n:"อ่านแล้วเลือก T หรือ F",text:["All children have the right to go to school. Some students cannot go because of low income or disability. We can make school better when we include everyone."],items:[{q:"All children have the right to go to school.",a:true},{q:"Low income never affects school.",a:false},{q:"Including everyone makes school better.",a:true}]},
  {k:"fill",n:"เติมคำจากกรอบ",bank:["inequality","inclusion","income","right","disability"],items:[{q:"Everyone has the ___ to learn.",a:"right"},{q:"Low ___ can make school hard for some families.",a:"income"},{q:"___ means giving everyone a chance to join.",a:"inclusion"},{q:"Different chances for different people is called ___.",a:"inequality"},{q:"A student with a ___ may need extra help.",a:"disability"}]},
  {k:"write",n:"เสนอวิธีทำให้ห้องเรียนเท่าเทียม (ตอบอิสระ)",items:["I think we should ____________________ because ____________________.","We can include everyone by ____________________.","We shouldn't ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“inequality” means …",o:["ความสุข","ความเหลื่อมล้ำ","ความเท่าเทียม"],a:1},{q:"“inclusion” means …",o:["การให้ทุกคนมีส่วนร่วม","การแบ่งแยก","การแข่งขัน"],a:0},{q:"Which is a good way to include everyone?",o:["Laugh at mistakes","Ignore new students","Share materials"],a:2},{q:"Inequality can be based on age, sex, race, income, religion or …",o:["colour of a pen","disability","weather"],a:1},
  {q:"All children have the ___ to go to school.",o:["right","left","fault"],a:0},{q:"“income” means …",o:["รายจ่าย","ราคา","รายได้"],a:2},{q:"We ___ include everyone in group work.",o:["mustn't","should","shouldn't"],a:1},{q:"We ___ laugh at anyone's mistakes.",o:["shouldn't","should","will"],a:0}],
 order:[{w:["Everyone has","the right","to learn."],a:"Everyone has the right to learn."},{w:["We should","include","everyone."],a:"We should include everyone."},{w:["We shouldn't","laugh at","anyone's mistakes."],a:"We shouldn't laugh at anyone's mistakes."},{w:["I think","we should","share materials."],a:"I think we should share materials."}]
};
for(const k in R){R[k].course="อ23101 ภาษาอังกฤษ ม.3";R[k].lv="ม.3"}
return R;
})();
