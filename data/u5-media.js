(window.WLM=window.WLM||{})[5]=(()=>{
const R={};
const T=(em,en,th,lines)=>({t:"title",em,en,th,lines});
const B=(em,en,th)=>({t:"big",em,en,th});
const L=(en,th,lines)=>({t:"lines",en,th,lines});
const vsl=n=>Array.from({length:Math.ceil(n/2)},(_,i)=>({t:"vocab",items:2*i+1<n?[2*i,2*i+1]:[2*i]}));
R["5.1"]={
 vocab:[["sandwiches","แซนด์วิช","🥪"],["chips","มันฝรั่งทอด","🍟"],["eggs","ไข่","🥚"],["pizza","พิซซ่า","🍕"],["fruit juice","น้ำผลไม้","🧃"],["yoghurt","โยเกิร์ต","🥛"],["rice","ข้าว","🍚"],["ice cream","ไอศกรีม","🍦"],
  ["cheese","ชีส","🧀"],["tea","ชา","🍵"],["apple","แอปเปิล","🍎"],["cherries","เชอร์รี","🍒"],["toast","ขนมปังปิ้ง","🍞"],["fish","ปลา","🐟"],["steak","สเต็ก","🥩"],["coffee","กาแฟ","☕"]],
 slides:[
  T("🍽️","Food & Drink Vocabulary","PASSION 1 Unit 5 · แผน 5.1",["บอกความหมายและระบุคำศัพท์อาหารและเครื่องดื่ม","จัดหมวดหมู่อาหารและเขียนคำศัพท์เพิ่มเติม"]),
  B("❓","What am I?","เกมใบ้อาหาร · ฟังคำใบ้ 3 ข้อแล้วทายว่าเป็นอะไร"),
  ...vsl(16),
  L("This is … / These are …","ใช้บอกชื่อสิ่งของ",[["This is a sandwich.","นี่คือแซนด์วิช (สิ่งเดียว)"],["These are chips.","นี่คือมันฝรั่งทอด (หลายชิ้น)"],["This is an apple.","ใช้ an นำหน้าเสียงสระ"]]),
  L("Food groups","หมวดหมู่อาหาร",[["Dairy products: cheese, yoghurt, butter",""],["Protein: eggs, fish, steak",""],["Carbohydrates: rice, toast, porridge",""],["Fruit and vegetables: apple, cherries, carrots",""]]),
  L("It belongs to …","บอกว่าอาหารอยู่หมวดไหน",[["Cheese belongs to the dairy products group.",""],["Rice belongs to the carbohydrates group.",""],["Fish belongs to the protein group.",""]]),
  L("Wrap up","สรุป",[["Say 5 foods and 3 drinks.","บอกอาหาร 5 อย่าง เครื่องดื่ม 3 อย่าง"],["Which food group is it?","อยู่หมวดไหน"]])],
 ws:{title:"Food & Drink Vocabulary",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[9,3,14,6,0,11,5,13,2,8,15,4,10,1,7,12]},
  {k:"sort",n:"เขียนอาหารลงในหมวดที่ถูกต้อง",boxes:[{h:"Protein",items:["eggs","fish","steak"]},{h:"Carbohydrates",items:["rice","toast","porridge"]},{h:"Dairy products",items:["cheese","yoghurt","butter"]},{h:"Fruit and vegetables",items:["apple","cherries","carrots"]}]},
  {k:"fill",n:"เลือก This is หรือ These are",bank:["This is","These are"],items:[{q:"___ eggs.",a:"These are"},{q:"___ a sandwich.",a:"This is"},{q:"___ chips.",a:"These are"},{q:"___ an apple.",a:"This is"},{q:"___ cherries.",a:"These are"},{q:"___ ice cream.",a:"This is"}]},
  {k:"write",n:"เขียนประโยค (ตอบอิสระ)",items:["I like ____________________ and ____________________.","This is ____________________. It belongs to ____________________.","These are ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which one is a dairy product?",o:["cheese","steak","carrots"],a:0},{q:"Which one is protein?",o:["rice","apple","fish"],a:2},{q:"Which one is a carbohydrate?",o:["yoghurt","toast","eggs"],a:1},{q:"These are ___.",o:["chips","pizza","ice cream"],a:0},
  {q:"This is ___.",o:["cherries","chips","an apple"],a:2},{q:"I'm a hot drink. I'm made from leaves. What am I?",o:["yoghurt","tea","fruit juice"],a:1},{q:"I'm cold and sweet. I belong to dairy products. What am I?",o:["ice cream","steak","salad"],a:0},{q:"I'm red and small. I grow on trees. What am I?",o:["carrots","cheese","cherries"],a:2}],
 order:[{w:["This is","a sandwich."],a:"This is a sandwich."},{w:["These are","my favourite","chips."],a:"These are my favourite chips."},{w:["I like","fish and chips."],a:"I like fish and chips."},{w:["Cheese belongs to","the dairy products","group."],a:"Cheese belongs to the dairy products group."},{w:["What","am I?"],a:"What am I?"}]
};
R["5.2"]={
 vocab:[["cafe","ร้านกาแฟ","☕"],["menu","รายการอาหาร","📋"],["order","สั่งอาหาร","📝"],["appetizer","อาหารเรียกน้ำย่อย","🥗"],["main dish","อาหารจานหลัก","🍛"],["dessert","ของหวาน","🍰"],["drink","เครื่องดื่ม","🥤"],["fruit","ผลไม้","🍓"],
  ["love","ชอบมาก","😍"],["like","ชอบ","🙂"],["prefer","ชอบมากกว่า","⚖️"]],
 slides:[
  T("☕","At the Cafe & The Perfect Menu","PASSION 1 Unit 5 · แผน 5.2",["ฟังและดูวิดีโอแล้วจับคู่ข้อมูล","ใช้ like / love / prefer บอกสิ่งที่ชอบและไม่ชอบ","พูดสนทนาขอและให้ข้อมูลเกี่ยวกับอาหารและเครื่องดื่ม"]),
  B("☕","Do you go to a cafe?","Warm up · อยากสั่งอะไรที่ร้านกาแฟ"),
  ...vsl(11),
  L("like / love / prefer","บอกความชอบ",[["I like salad.","ฉันชอบสลัด"],["I love ice cream.","ฉันชอบไอศกรีมมาก"],["I prefer tea to coffee.","ฉันชอบชามากกว่ากาแฟ"],["But I don't like fish.","แต่ฉันไม่ชอบปลา"]]),
  L("Ask and answer","ถาม-ตอบกับเพื่อน",[["What kind of appetizer do you like?",""],["I like / love / prefer ___.",""],["But I don't like ___.",""]]),
  L("Our perfect menu","สร้างเมนูในฝัน",[["Appetizer: ___",""],["Main dish: ___",""],["Dessert: ___",""],["Drink: ___",""]]),
  L("Present your menu","นำเสนอ",[["For the dessert, we chose ice cream because it is sweet.",""],["Do you like our menu?",""]]),
  L("Wrap up","สรุป",[["Say one food you love.","บอกอาหารที่ชอบมาก 1 อย่าง"],["Say one food you don't like.","บอกอาหารที่ไม่ชอบ 1 อย่าง"]])],
 ws:{title:"At the Cafe & The Perfect Menu",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[3,5,4,1,0,2],items:[["appetizer","อาหารเรียกน้ำย่อย"],["main dish","อาหารจานหลัก"],["dessert","ของหวาน"],["drink","เครื่องดื่ม"],["menu","รายการอาหาร"],["order","สั่งอาหาร"]]},
  {k:"sort",n:"เขียนอาหารลงในช่องให้ตรงกับประเภท",boxes:[{h:"Appetizer",items:["salad","soup"]},{h:"Main dish",items:["fried rice","steak"]},{h:"Dessert",items:["ice cream","cake"]},{h:"Drink",items:["tea","fruit juice"]}]},
  {k:"fill",n:"เลือกคำจากกรอบเติมให้ถูกต้อง",bank:["like","love","prefer","don't like"],items:[{q:"I ___ pizza. It's my favourite food!",a:"love"},{q:"I ___ tea to coffee.",a:"prefer"},{q:"I ___ fish. It smells bad.",a:"don't like"},{q:"I ___ apples. They are OK.",a:"like"}]},
  {k:"write",n:"ตอบคำถาม (ตอบอิสระ)",items:["What kind of appetizer do you like? — I ____________________.","For the dessert, we chose ____________________ because ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which course comes first?",o:["appetizer","dessert","main dish"],a:0},{q:"Which course is sweet?",o:["appetizer","main dish","dessert"],a:2},{q:"I ___ pizza! It's my favourite.",o:["prefer to","love","don't like"],a:1},
  {q:"I ___ tea to coffee.",o:["prefer","love to","like to"],a:0},{q:"“I prefer tea to coffee.” means …",o:["ชอบกาแฟมากกว่าชา","ไม่ชอบทั้งสองอย่าง","ชอบชามากกว่ากาแฟ"],a:2},{q:"What kind of appetizer do you like? — I like ___.",o:["steak","salad","ice cream"],a:1,ex:"salad เป็น appetizer"},
  {q:"Where do you order food and drinks?",o:["In a cafe","In a library","In a bank"],a:0},{q:"“I don't like fish.” means …",o:["ฉันชอบปลา","ฉันกินปลาทุกวัน","ฉันไม่ชอบปลา"],a:2}],
 order:[{w:["What kind of","appetizer","do you like?"],a:"What kind of appetizer do you like?"},{w:["I prefer","tea","to coffee."],a:"I prefer tea to coffee."},{w:["But I","don't like","fish."],a:"But I don't like fish."},{w:["For the dessert,","we chose","ice cream."],a:"For the dessert, we chose ice cream."}]
};
R["5.3"]={
 vocab:[["athlete","นักกีฬา","🏅"],["daily","ทุกวัน","📅"],["cold meal","อาหารเย็นชืด/อาหารไม่ร้อน","🥗"],["light lunch","อาหารกลางวันมื้อเบา","🥪"],["hungry","หิว","😋"],["barbecued meat","เนื้อย่างบาร์บีคิว","🍖"],["treat","ของกินพิเศษ","🎁"],["cereal","ซีเรียล","🥣"],["dessert","ของหวาน","🍰"],["healthy","มีประโยชน์ต่อสุขภาพ","💪"]],
 slides:[
  T("🏊","What Do Athletes Eat?","PASSION 1 Unit 5 · แผน 5.3",["อ่านบทอ่านเรื่องอาหารของนักกีฬา","ระบุรายละเอียดจากบทอ่านอย่างถูกต้อง"]),
  B("🏅","What do athletes eat?","Warm up · นักกีฬาควรกินอะไรเพื่อให้ร่างกายแข็งแรง"),
  ...vsl(10),
  L("Reading (1)","Meet Tom",[["Tom is 14 and he is a swimmer. He swims every day.",""],["He always has cereal for breakfast.",""],["He usually has a light lunch, such as a sandwich and fruit.",""]]),
  L("Reading (2)","Meet Tom (ต่อ)",[["He often eats fish for dinner. Sometimes he has barbecued meat with his family.",""],["He never eats cake before a race.",""],["On Sundays he has a treat — an ice cream!",""]]),
  L("Questions","ตอบคำถามจากบทอ่าน",[["What does Tom always have for breakfast?","cereal"],["What does he usually have for lunch?","a light lunch (a sandwich and fruit)"],["What is his Sunday treat?","an ice cream"]]),
  L("Adverbs in the text","คำบอกความถี่ในบทอ่าน",[["always · usually · often · sometimes · never",""],["I always have dessert. I never eat cake.",""],["I usually eat some cereal. I don't like any desserts.",""]]),
  L("Wrap up","สรุป",[["What do you always / never eat?","คุณกินอะไรเป็นประจำ / ไม่เคยกิน"]])],
 ws:{title:"What Do Athletes Eat?",parts:[
  {k:"tf",n:"อ่านบทอ่านแล้วเขียน T (จริง) หรือ F (เท็จ)",text:["Tom is 14 and he is a swimmer. He swims every day. He always has cereal for breakfast. He usually has a light lunch, such as a sandwich and fruit. He often eats fish for dinner. Sometimes he has barbecued meat with his family. He never eats cake before a race. On Sundays he has a treat — an ice cream!"],items:[
   {q:"Tom is a swimmer.",a:true},{q:"Tom never has cereal for breakfast.",a:false},{q:"Tom usually has a light lunch.",a:true},{q:"Tom often eats fish for dinner.",a:true},{q:"Tom eats cake before a race.",a:false}]},
  {k:"fill",n:"สแกนหาข้อมูลจากบทอ่านแล้วเติมคำ",items:[{q:"Tom swims ___ day.",a:"every"},{q:"For breakfast, Tom always has ___.",a:"cereal"},{q:"For lunch, he has a sandwich and ___.",a:"fruit"},{q:"On Sundays, Tom has an ___ as a treat.",a:"ice cream"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยคที่ถูกต้อง",items:[{w:["He","always has","cereal","for breakfast."],a:"He always has cereal for breakfast."},{w:["He","never eats","cake","before a race."],a:"He never eats cake before a race."},{w:["He","often eats","fish","for dinner."],a:"He often eats fish for dinner."}]},
  {k:"write",n:"เขียนเกี่ยวกับตัวเอง (ตอบอิสระ)",items:["I always ____________________.","I usually ____________________.","I never ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"What is Tom's job?",o:["He is a swimmer.","He is a cook.","He is a doctor."],a:0},{q:"What does Tom always have for breakfast?",o:["Fish","Cake","Cereal"],a:2},{q:"What does Tom never eat before a race?",o:["Cereal","Cake","Fruit"],a:1},
  {q:"Tom often eats ___ for dinner.",o:["fish","ice cream","cereal"],a:0},{q:"What is his Sunday treat?",o:["A salad","A sandwich","An ice cream"],a:2},{q:"“always” means …",o:["บางครั้ง","ทุกครั้ง","ไม่เคย"],a:1},{q:"“hungry” means …",o:["หิว","อิ่ม","เหนื่อย"],a:0},{q:"Which sentence is correct?",o:["I eat never cake.","Never I eat cake.","I never eat cake."],a:2}],
 order:[{w:["He","always has","cereal","for breakfast."],a:"He always has cereal for breakfast."},{w:["He","never eats","cake","before a race."],a:"He never eats cake before a race."},{w:["I","usually eat","some cereal."],a:"I usually eat some cereal."},{w:["On Sundays","he has","a treat."],a:"On Sundays he has a treat."}]
};
R["5.4"]={
 vocab:[["always","ทุกครั้ง (100%)",""],["usually","มักจะ (80%)",""],["often","บ่อย ๆ (60%)",""],["sometimes","บางครั้ง (40%)",""],["rarely / hardly ever","แทบไม่เคย (10%)",""],["never","ไม่เคยเลย (0%)",""],["some","บ้าง / จำนวนหนึ่ง",""],["any","เลย (ปฏิเสธ/คำถาม)",""]],
 slides:[
  T("📊","Adverbs of Frequency & some / any","PASSION 1 Unit 5 · แผน 5.4",["ระบุและใช้ adverbs of frequency และ some / any","เขียนและพูดเกี่ยวกับอาหารของตนเอง"]),
  B("🧍","Frequency Line Up","Warm up · ยืนบนเส้น Never → Always ตามความจริงของตัวเอง"),
  ...vsl(8),
  L("Frequency scale","ระดับความถี่",[["always  ████████ 100%",""],["usually  ██████ 80%",""],["often  ████ 60%",""],["sometimes  ███ 40%",""],["rarely / hardly ever  █ 10%",""],["never  0%",""]]),
  L("Position","ตำแหน่งในประโยค",[["Subject + adverb + main verb","I always eat breakfast."],["Subject + be + adverb","She is never late."],["How often do you …?","คุณ…บ่อยแค่ไหน"]]),
  L("some / any","some = บ้าง · any = เลย",[["I have some apples.","บอกเล่า"],["I don't have any milk.","ปฏิเสธ"],["Do you have any bread?","คำถาม"]]),
  L("should / shouldn't","ข้อแนะนำ",[["You should eat more vegetables.",""],["You shouldn't eat fast food every day.",""]]),
  L("Wrap up","สรุป",[["Say 3 sentences about your food.","พูดเกี่ยวกับอาหารของตน 3 ประโยค"]])],
 ws:{title:"Adverbs of Frequency & some / any",parts:[
  {k:"sort",n:"เขียนคำลงในช่องให้ถูกต้อง",boxes:[{h:"More than 50%",items:["always","usually","often"]},{h:"Less than 50%",items:["sometimes","rarely","never"]}]},
  {k:"fill",n:"เลือก some หรือ any",bank:["some","any"],items:[{q:"I have ___ eggs.",a:"some"},{q:"I don't eat ___ fish.",a:"any"},{q:"Do you have ___ milk?",a:"any"},{q:"She drinks ___ water every day.",a:"some"},{q:"We don't have ___ apples.",a:"any"},{q:"There are ___ sandwiches on the table.",a:"some"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยคที่ถูกต้อง",items:[{w:["I always","eat","breakfast."],a:"I always eat breakfast."},{w:["She is","never","late."],a:"She is never late."},{w:["How often","do you","eat fast food?"],a:"How often do you eat fast food?"}]},
  {k:"write",n:"เขียนประโยคเกี่ยวกับตัวเอง (ตอบอิสระ)",items:["I always ____________________.","I never ____________________.","I sometimes ____________________.","You should ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"She ___ eats breakfast. (100%)",o:["always","never","rarely"],a:0},{q:"Which sentence is correct?",o:["I eat always breakfast.","Always I eat breakfast.","I always eat breakfast."],a:2},{q:"Which sentence is correct?",o:["He is late never.","He is never late.","He never is late."],a:1},
  {q:"Do you have ___ milk?",o:["any","some","a"],a:0},{q:"“rarely” means …",o:["ทุกวัน","บ่อย ๆ","แทบไม่เคย"],a:2},{q:"Which has the lowest frequency?",o:["often","never","sometimes"],a:1},{q:"You ___ eat more vegetables. (advice)",o:["should","shouldn't","never"],a:0},{q:"We don't have ___ sugar.",o:["some","a lot","any"],a:2}],
 order:[{w:["I always","eat","breakfast."],a:"I always eat breakfast."},{w:["She is","never","late."],a:"She is never late."},{w:["How often","do you","eat fast food?"],a:"How often do you eat fast food?"},{w:["I don't have","any","milk."],a:"I don't have any milk."},{w:["You should","eat more","vegetables."],a:"You should eat more vegetables."}]
};
R["5.5"]={
 vocab:[["have breakfast","กินอาหารเช้า","🍳"],["have lunch","กินอาหารกลางวัน","🍱"],["have dinner","กินอาหารเย็น","🍽️"],["have a snack","กินของว่าง","🍪"],["have a break","พักเบรก","⏸️"],["have a party","จัดงานเลี้ยง","🎉"],["at last","ในที่สุด",""],["greedy","ตะกละ","🤤"]],
 slides:[
  T("🍳","Expressions with Have","PASSION 1 Unit 5 · แผน 5.5",["บอกความหมายสำนวน have และคำศัพท์ใหม่","ฟังและอ่านบทสนทนาแล้วสรุปใจความ","แสดงบทบาทสมมติโดยใช้สำนวน have"]),
  B("🍳","What do you have for breakfast?","Warm up · เช้านี้กินอะไร"),
  ...vsl(8),
  L("Meaning","ความหมายของสำนวน",[["have breakfast / lunch / dinner = eat a meal","กินอาหารมื้อต่าง ๆ"],["have a snack = eat a small meal","กินของว่าง"],["have a break = rest from work","พักเบรก (ไม่ใช่กินอาหาร)"],["have a party = hold a party","จัดงานเลี้ยง"]]),
  L("Dialogue (1)","บทสนทนา",[["Pim: What do you have for breakfast, Ben?",""],["Ben: I usually have toast and eggs.",""],["Pim: Have you got any sandwiches today?",""]]),
  L("Dialogue (2)","บทสนทนา (ต่อ)",[["Ben: Yes, I have. I'll show you.",""],["Pim: Wow! Let me taste. Mmm, it's delicious!",""],["Ben: Don't be greedy! At last, it's my lunch break!",""]]),
  L("Useful sentences","ประโยคที่ใช้บ่อย",[["I'll show you.","เดี๋ยวฉันให้ดู"],["Let me taste.","ขอชิมหน่อย"],["Have you got any …?","คุณมี…ไหม"]]),
  L("Role play","แสดงบทบาทสมมติ",[["Work in pairs. Use 3 expressions with have.","จับคู่ใช้สำนวน have 3 สำนวน"]])],
 ws:{title:"Expressions with Have",parts:[
  {k:"match",n:"จับคู่สำนวนกับความหมาย",ord:[4,2,0,1,3],items:[["have lunch","กินมื้อกลางวัน"],["have a snack","กินของว่าง"],["have a break","พักผ่อนระหว่างงาน"],["have a party","จัดงานเลี้ยง"],["have dinner","กินมื้อเย็น"]]},
  {k:"tf",n:"อ่านบทสนทนาแล้วเขียน T (จริง) หรือ F (เท็จ)",text:["Pim: What do you have for breakfast, Ben?","Ben: I usually have toast and eggs.","Pim: Have you got any sandwiches today?","Ben: Yes, I have. I'll show you.","Pim: Wow! Let me taste. Mmm, it's delicious!","Ben: Don't be greedy! At last, it's my lunch break!"],items:[
   {q:"Ben usually has toast and eggs for breakfast.",a:true},{q:"Pim has got some sandwiches.",a:false},{q:"Pim tastes Ben's sandwich.",a:true},{q:"“Have a break” means eat a meal.",a:false},{q:"Ben says Pim is greedy.",a:true}]},
  {k:"fill",n:"เลือกคำจากกรอบเติมสำนวน have ให้ถูกต้อง",bank:["breakfast","lunch","a break","a party","a snack","dinner"],items:[{q:"We eat rice and eggs at 7 am. We have ___.",a:"breakfast"},{q:"I'm tired. Let's have ___ for ten minutes.",a:"a break"},{q:"We eat at school at 12 noon. We have ___.",a:"lunch"},
   {q:"It's Mai's birthday. We have ___ tonight.",a:"a party"},{q:"I'm hungry at 4 pm. I have ___, like fruit.",a:"a snack"},{q:"We eat with our family at 7 pm. We have ___.",a:"dinner"}]},
  {k:"write",n:"ตอบคำถาม (ตอบอิสระ)",items:["What do you have for breakfast? — I ____________________.","Have you got any ____________________? — Yes, I have. / No, I haven't."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which expression means “rest from work”?",o:["have a break","have lunch","have a snack"],a:0},{q:"What do you have for breakfast? — I usually have ___.",o:["a break","a party","toast and eggs"],a:2},{q:"“have a party” means …",o:["พักเบรก","จัดงานเลี้ยง","กินอาหารกลางวัน"],a:1},{q:"Ben usually has ___ for breakfast.",o:["toast and eggs","pizza","ice cream"],a:0},
  {q:"“greedy” means …",o:["ใจดี","หิว","ตะกละ"],a:2},{q:"Pim says: “Let me taste.” She wants to …",o:["buy the food","try the food","cook the food"],a:1},{q:"Have you got any sandwiches? — Yes, ___.",o:["I have","I do","I am"],a:0},{q:"A small meal between lunch and dinner is …",o:["a party","a break","a snack"],a:2}],
 order:[{w:["What do you","have for","breakfast?"],a:"What do you have for breakfast?"},{w:["I usually","have","toast and eggs."],a:"I usually have toast and eggs."},{w:["Have you got","any sandwiches","today?"],a:"Have you got any sandwiches today?"},{w:["Don't","be","greedy!"],a:"Don't be greedy!"}]
};
R["5.6"]={
 vocab:[["menu","รายการอาหาร","📋"],["order","สั่ง (อาหาร)","📝"],["portion","ปริมาณอาหารต่อหนึ่งที่","🍽️"],["dessert","ของหวาน","🍰"],["instead","แทน / แทนที่","🔄"],["greedy","ตะกละ","🤤"],["waiter","พนักงานเสิร์ฟ","🧑‍🍳"],["salad","สลัด","🥗"],["soup","ซุป","🍲"],["lemonade","น้ำมะนาว","🍋"]],
 slides:[
  T("🍽️","Ordering Food: Order Up!","PASSION 1 Unit 5 · แผน 5.6",["ใช้สำนวนสั่งอาหารได้ถูกต้อง","ถาม–ตอบเพื่อสั่งอาหารและเครื่องดื่ม","ตอบรับหรือปฏิเสธอย่างสุภาพ"]),
  B("🧑‍🍳","Are you ready to order?","Warm up · ถ้าเป็นลูกค้า อยากสั่งอะไร"),
  ...vsl(10),
  L("Waiter says …","พนักงานพูดว่า",[["Next, please!","ลูกค้าคนต่อไป"],["What would you like to order today?","วันนี้รับอะไรดี"],["Anything to drink?","รับเครื่องดื่มไหม"]]),
  L("Customer says …","ลูกค้าพูดว่า",[["Have you got any soup?","มีซุปไหม"],["I would like some salad, please.","ขอสลัดหน่อย"],["A big portion, please!","ขอจานใหญ่"]]),
  L("Say yes or no politely","ตอบรับ / ปฏิเสธอย่างสุภาพ",[["Yes, please. / That sounds good!","รับ"],["No, thanks. I'll have lemonade instead.","ไม่ล่ะ ขอน้ำมะนาวแทน"],["I love them both!","ชอบทั้งสองอย่าง"]]),
  L("Model dialogue","บทสนทนาตัวอย่าง",[["Waiter: What would you like to order today?",""],["Customer: Have you got any soup? — Waiter: Yes, we have.",""],["Customer: I would like some soup, please. — Waiter: Anything to drink?",""],["Customer: No, thanks. — Waiter: Enjoy your meal!",""]]),
  L("Role play","แสดงบทบาทสมมติ คู่ละ 2 คน",[["Student A = waiter · Student B = customer",""],["Order 1 main dish, 1 dessert and 1 drink.","สั่งอาหารจานหลัก ของหวาน เครื่องดื่มอย่างละ 1"],["Swap roles.","สลับบทบาท"]]),
  L("Wrap up","สรุป",[["How do you order politely?","สั่งอาหารอย่างสุภาพว่าอย่างไร"],["Make one sentence with instead.","พูดประโยคที่ใช้ instead 1 ประโยค"]])],
 ws:{title:"Ordering Food: Order Up!",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[2,4,0,5,1,3],items:[["menu","รายการอาหาร"],["order","สั่ง (อาหาร)"],["portion","ปริมาณอาหารต่อหนึ่งที่"],["dessert","ของหวาน"],["instead","แทน / แทนที่"],["greedy","ตะกละ"]]},
  {k:"fill",n:"เลือกคำจากกรอบเติมให้ถูกต้อง",bank:["menu","order","portion","dessert","instead","greedy"],items:[{q:"Here is the ___. What would you like?",a:"menu"},{q:"I would like to ___ a bowl of soup.",a:"order"},{q:"A big ___, please!",a:"portion"},{q:"No cake, thanks. I'll have fruit ___.",a:"instead"},{q:"For ___, I would like ice cream.",a:"dessert"},{q:"Don't be ___! Please share the food.",a:"greedy"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["What would you like","to order","today?"],a:"What would you like to order today?"},{w:["I would like","some salad,","please."],a:"I would like some salad, please."},{w:["Have you got","any soup?"],a:"Have you got any soup?"}]},
  {k:"write",n:"เขียนบทสนทนาสั้น ๆ (ตอบอิสระ)",items:["Waiter: What would you like to order today?","Customer: ____________________________________","Waiter: Anything to drink?","Customer: ____________________________________"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"What ___ you like to order today?",o:["do","would","are"],a:1},{q:"“menu” means …",o:["ใบเสร็จ","รายการอาหาร","จานอาหาร"],a:1},{q:"Which sentence is polite?",o:["Give me soup!","I want soup now.","I would like some soup, please."],a:2},{q:"No, thanks. I'll have tea ___.",o:["instead","too","also"],a:0},
  {q:"“greedy” means …",o:["ตะกละ","ใจดี","ขี้อาย"],a:0},{q:"A big ___, please!",o:["menu","portion","waiter"],a:1},{q:"Anything to drink?",o:["Next, please!","It's a menu.","Yes, please. Lemonade."],a:2},{q:"Which one is a dessert?",o:["soup","cake","salad"],a:1}],
 order:[{w:["What would you like","to order","today?"],a:"What would you like to order today?"},{w:["I would like","some soup,","please."],a:"I would like some soup, please."},{w:["No, thanks.","I'll have tea","instead."],a:"No, thanks. I'll have tea instead."},{w:["Have you got","any salad?"],a:"Have you got any salad?"}]
};
R["5.7"]={
 vocab:[["always","เสมอ","100%"],["usually","โดยปกติ","90%"],["normally / generally","โดยทั่วไป","80%"],["often / frequently","บ่อย ๆ","70%"],["sometimes","บางครั้ง","50%"],["occasionally","นาน ๆ ครั้ง","30%"],["seldom","ไม่ค่อย","20%"],["hardly ever / rarely","แทบไม่เคย","10%"],["never","ไม่เคยเลย","0%"]],
 slides:[
  T("📊","Adverbs of Frequency","PASSION 1 Unit 5 · แผน 5.7",["บอกความหมายคำบอกความถี่","วางตำแหน่ง adverbs ในประโยคได้ถูกต้อง","ถาม–ตอบด้วย How often …?"]),
  B("🍳","How often do you eat breakfast?","Warm up · ทุกวัน บางวัน หรือไม่เคยเลย"),
  ...vsl(9),
  L("Frequency scale","ไล่ลำดับความถี่จากมากไปน้อย",[["always → usually → often","100% → 90% → 70%"],["sometimes → occasionally","50% → 30%"],["seldom → hardly ever → never","20% → 10% → 0%"]]),
  L("Position (1)","อยู่หน้ากริยาทั่วไป",[["I always get up early.",""],["We usually have rice for lunch.",""],["She seldom eats fast food.",""]]),
  L("Position (2)","อยู่หลัง am / is / are",[["I am never late for school.",""],["He is often hungry at 10 o'clock.",""],["They are usually at home on Sunday.",""]]),
  L("How often …?","ถามความถี่",[["How often do you eat fruit?",""],["I eat fruit every day. = I always eat fruit.",""],["How often does she drink milk? — She seldom drinks milk.",""]]),
  L("Healthy rules","กฎสุขภาพ (must always / must never)",[["You must always wash your hands before lunch.",""],["You must never skip breakfast.",""],["You should sometimes eat fish.",""]]),
  L("Wrap up","สรุป",[["Say 3 true sentences about you.","พูดประโยคจริงเกี่ยวกับตัวเอง 3 ประโยค"],["Where does the adverb go?","adverb วางตรงไหนในประโยค"]])],
 ws:{title:"Adverbs of Frequency",parts:[
  {k:"match",n:"จับคู่คำบอกความถี่กับเปอร์เซ็นต์",ord:[3,0,5,2,4,1],items:[["always","100%"],["usually","90%"],["often","70%"],["sometimes","50%"],["seldom","20%"],["never","0%"]]},
  {k:"fill",n:"เติมคำบอกความถี่ให้ตรงกับเปอร์เซ็นต์ในวงเล็บ",bank:["always","usually","often","sometimes","seldom","never"],items:[{q:"I ___ brush my teeth every morning. (100%)",a:"always"},{q:"She ___ eats breakfast at home. (90%)",a:"usually"},{q:"We ___ play football after school. (50%)",a:"sometimes"},{q:"He is ___ late for school. (0%)",a:"never"},{q:"They ___ eat fish. (20%)",a:"seldom"},{q:"My brother ___ drinks milk. (70%)",a:"often"}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["I","always","get up","early."],a:"I always get up early."},{w:["She","is","never","late."],a:"She is never late."},{w:["How often","do you","eat fruit?"],a:"How often do you eat fruit?"}]},
  {k:"write",n:"เขียนประโยคจริงเกี่ยวกับตัวเอง (ตอบอิสระ)",items:["I always ____________________.","I sometimes ____________________.","I never ____________________.","How often do you ____________________? — I ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which word means 100%?",o:["never","always","seldom"],a:1},{q:"Which word means 0%?",o:["never","often","usually"],a:0},{q:"I ___ get up early. (always)",o:["get always","always","am always"],a:1},{q:"She ___ late. (never)",o:["never is","is never","never be"],a:1},
  {q:"“seldom” means …",o:["บ่อย ๆ","ไม่ค่อย","ทุกวัน"],a:1},{q:"How often do you eat fruit? — I eat fruit ___.",o:["every day","yesterday","tomorrow"],a:0},{q:"Which is more often?",o:["sometimes","usually","seldom"],a:1},{q:"Which sentence is correct?",o:["We eat usually rice.","Usually we are rice.","We usually eat rice."],a:2}],
 order:[{w:["I","always","get up","early."],a:"I always get up early."},{w:["She","is","never","late."],a:"She is never late."},{w:["We","usually","have rice","for lunch."],a:"We usually have rice for lunch."},{w:["How often","do you","eat fruit?"],a:"How often do you eat fruit?"}]
};
R["5.8"]={
 vocab:[["eggs","ไข่","🥚"],["bananas","กล้วย","🍌"],["apples","แอปเปิล","🍎"],["carrots","แครอต","🥕"],["tomatoes","มะเขือเทศ","🍅"],["rice","ข้าว","🍚"],["milk","นม","🥛"],["sugar","น้ำตาล","🍬"],["water","น้ำ","💧"],["cheese","ชีส","🧀"],["bread","ขนมปัง","🍞"],["juice","น้ำผลไม้","🧃"]],
 slides:[
  T("🛒","Countable / Uncountable & some / any","PASSION 1 Unit 5 · แผน 5.8",["แยกคำนามนับได้และนับไม่ได้","ใช้ some / any ถาม–ตอบเกี่ยวกับอาหาร","ถามปริมาณด้วย How many / How much"]),
  B("🧊","What's in your fridge?","Warm up · ในตู้เย็นที่บ้านมีอะไรบ้าง"),
  ...vsl(12),
  L("Countable nouns","นับได้ มีรูปเอกพจน์/พหูพจน์",[["a banana → two bananas","กล้วย 1 ลูก → 2 ลูก"],["an egg → six eggs","ไข่ 1 ฟอง → 6 ฟอง"],["How many eggs?","ไข่กี่ฟอง"]]),
  L("Uncountable nouns","นับไม่ได้ ไม่เติม s",[["milk · rice · sugar · water","ใช้ a cup of / a bag of บอกปริมาณ"],["a cup of milk · a bag of rice","นมหนึ่งถ้วย · ข้าวหนึ่งถุง"],["How much sugar?","น้ำตาลเท่าไร"]]),
  L("some / any","ใช้ตามชนิดของประโยค",[["We have some bananas.","บอกเล่า → some"],["Do you have any rice?","คำถาม → any"],["We don't have any milk.","ปฏิเสธ → any"]]),
  L("Fridge check","ถาม–ตอบกับเพื่อน",[["Do you have any cheese? — Yes, we have some cheese.",""],["Do you have any apples? — No, we don't have any apples.",""],["How many tomatoes are there? — There are four.",""]]),
  L("Wrap up","สรุป",[["Say 2 countable and 2 uncountable foods.","บอกอาหารนับได้ 2 นับไม่ได้ 2"],["Make 1 sentence with some and 1 with any.","แต่งประโยค some 1 any 1"]])],
 ws:{title:"Countable / Uncountable & some / any",parts:[
  {k:"sort",n:"เขียนคำลงในช่องให้ถูกกลุ่ม",boxes:[{h:"Countable",items:["eggs","bananas","apples","carrots","tomatoes"]},{h:"Uncountable",items:["rice","milk","sugar","water","cheese"]}]},
  {k:"fill",n:"เลือก some หรือ any",bank:["some","any"],items:[{q:"We have ___ eggs.",a:"some"},{q:"Do you have ___ milk?",a:"any"},{q:"I don't have ___ sugar.",a:"any"},{q:"There are ___ apples in the bag.",a:"some"},{q:"Is there ___ rice?",a:"any"},{q:"He has ___ cheese.",a:"some"}]},
  {k:"mcq",n:"เลือกคำตอบที่ถูกต้อง",items:[{q:"___ eggs do you need?",o:["How much","How many","Some"],a:1},{q:"___ sugar do you add?",o:["How much","How many","Any"],a:0},{q:"a cup of ___",o:["tomatoes","milk","carrots"],a:1}]},
  {k:"write",n:"แต่งประโยคจากของในตู้เย็นของตนเอง (ตอบอิสระ)",items:["We have some ____________________.","We don't have any ____________________.","Do you have any ____________________? — ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which word is uncountable?",o:["egg","milk","banana"],a:1},{q:"Which word is countable?",o:["rice","sugar","apple"],a:2},{q:"We have ___ bananas.",o:["any","a","some"],a:2},{q:"Do you have ___ cheese?",o:["any","some","an"],a:0},
  {q:"We don't have ___ sugar.",o:["some","any","many"],a:1},{q:"How ___ eggs are there?",o:["much","many","some"],a:1},{q:"How ___ water do you drink?",o:["many","much","a"],a:1},{q:"“a bag of rice” means …",o:["ข้าวหนึ่งถุง","ข้าวหนึ่งถ้วย","ข้าวหนึ่งจาน"],a:0}],
 order:[{w:["How many","eggs","are there?"],a:"How many eggs are there?"},{w:["Do you have","any rice?"],a:"Do you have any rice?"},{w:["We have","some bananas."],a:"We have some bananas."},{w:["We don't have","any sugar."],a:"We don't have any sugar."}]
};
R["5.9"]={
 vocab:[["How many","กี่ (นับได้)","🔢"],["How much","เท่าไร (นับไม่ได้)","⚖️"],["eggs","ไข่","🥚"],["sugar","น้ำตาล","🍬"],["coffee","กาแฟ","☕"],["biscuits","บิสกิต","🍪"],["juice","น้ำผลไม้","🧃"],["stressed syllable","พยางค์ที่เน้นเสียง","🔊"],["a week","หนึ่งสัปดาห์","📅"],["tomatoes","มะเขือเทศ","🍅"]],
 slides:[
  T("🔢","How much / How many & Stress","PASSION 1 Unit 5 · แผน 5.9",["ใช้ How much / How many ถามปริมาณ","ตอบโดยใช้ adverbs of frequency","ออกเสียงพยางค์ที่เน้นเสียงในคำศัพท์"]),
  B("🥚","How many eggs do you eat a week?","Warm up · กินไข่สัปดาห์ละกี่ฟอง"),
  ...vsl(10),
  L("How many + countable","ถามจำนวน (นับได้ พหูพจน์)",[["How many eggs do you eat?",""],["I usually eat six a week.",""],["How many biscuits do you eat?",""]]),
  L("How much + uncountable","ถามปริมาณ (นับไม่ได้)",[["How much sugar do you add to your coffee?",""],["I never add much.",""],["How much juice do you drink?",""]]),
  L("Answer with frequency","ตอบด้วยคำบอกความถี่",[["I always eat two eggs for breakfast.",""],["I sometimes drink a lot of juice.",""],["I seldom eat many biscuits.",""]]),
  L("Word stress","ตัวพิมพ์ใหญ่ = พยางค์เน้นเสียง",[["SU-gar · COF-fee · BIS-cuit","เน้นพยางค์แรก"],["ba-NA-na · to-MA-to · po-TA-to","เน้นพยางค์กลาง"],["Clap on the stressed syllable.","ตบมือตรงพยางค์ที่เน้น"]]),
  L("Wrap up","สรุป",[["When do we use How many? How much?","ใช้ How many / How much เมื่อไร"],["Say 2 words and show the stress.","พูดคำศัพท์ 2 คำและบอกพยางค์ที่เน้น"]])],
 ws:{title:"How much / How many & Stress",parts:[
  {k:"fill",n:"เลือก How much หรือ How many",bank:["How much","How many"],items:[{q:"___ eggs do you eat a week?",a:"How many"},{q:"___ sugar do you add to your tea?",a:"How much"},{q:"___ biscuits are in the box?",a:"How many"},{q:"___ juice do you drink?",a:"How much"},{q:"___ tomatoes do you need?",a:"How many"}]},
  {k:"tf",n:"ถูก (T) หรือผิด (F) เกี่ยวกับพยางค์ที่เน้นเสียง",items:[{q:"sugar → SU-gar (เน้นพยางค์แรก)",a:true},{q:"coffee → cof-FEE (เน้นพยางค์หลัง)",a:false},{q:"banana → ba-NA-na (เน้นพยางค์กลาง)",a:true},{q:"tomato → TO-ma-to (เน้นพยางค์แรก)",a:false}]},
  {k:"order",n:"เรียงคำให้เป็นประโยค",items:[{w:["How many","eggs","do you eat?"],a:"How many eggs do you eat?"},{w:["How much","sugar","do you add?"],a:"How much sugar do you add?"},{w:["I never","add much."],a:"I never add much."}]},
  {k:"write",n:"ถาม–ตอบเกี่ยวกับตัวเอง (ตอบอิสระ)",items:["How many eggs do you eat a week? — I ____________________.","How much sugar do you add to your drink? — I ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"___ eggs do you eat?",o:["How much","How many","How"],a:1},{q:"___ sugar do you add?",o:["How many","How much","How old"],a:1},{q:"Which word is countable?",o:["biscuits","sugar","juice"],a:0},{q:"“stressed syllable” means …",o:["พยางค์ที่เน้นเสียง","พยางค์ที่ไม่ออกเสียง","คำที่ยาวที่สุด"],a:0},
  {q:"Which is correct?",o:["How many juice?","How much juice?","How much eggs?"],a:1},{q:"banana → the stress is on the ___ syllable.",o:["first","second (middle)","last"],a:1},{q:"How many eggs do you eat? — I ___ eat ten a week.",o:["always","never","hardly"],a:0},{q:"sugar → the stress is on the ___ syllable.",o:["second","first","last"],a:1}],
 order:[{w:["How many","eggs","do you eat?"],a:"How many eggs do you eat?"},{w:["How much","sugar","do you add?"],a:"How much sugar do you add?"},{w:["I always","eat","ten a week."],a:"I always eat ten a week."},{w:["I never","add much."],a:"I never add much."}]
};
R["5.10"]={
 vocab:[["pizza","พิซซ่า","🍕"],["burger","เบอร์เกอร์","🍔"],["french fries","มันฝรั่งทอด","🍟"],["chocolate","ช็อกโกแลต","🍫"],["pancake","แพนเค้ก","🥞"],["salad","สลัด","🥗"],["wrap","แรป (แป้งห่อไส้)","🌯"],["delicious","อร่อยมาก","😋"],["sweet","หวาน","🍭"],["healthy","ดีต่อสุขภาพ","💪"],["fast food","อาหารจานด่วน","⏱️"]],
 slides:[
  T("🎬","Video Workshop: I Love Pizza!","PASSION 1 Unit 5 · แผน 5.10",["ดูวิดีโอเรื่องอาหารที่ชื่นชอบและจับใจความสำคัญ","ระบุอาหารโปรด อาหารที่ไม่ชอบ และเหตุผล"]),
  B("🍕","What is your favourite food?","Warm up · อาหารโปรดของเธอคืออะไร"),
  ...vsl(11),
  L("Before watching","เตรียมก่อนดูวิดีโอ",[["What is your favourite food?",""],["What food do you NOT like?",""],["What reason do you give?","เขาให้เหตุผลว่าอะไร"]]),
  L("While watching","ระหว่างดู · จดข้อมูลของแต่ละคน",[["Jake · Molly · Leila · Zac","ดูวิดีโอแล้วจดลงใบงาน"],["Favourite food: ___","อาหารโปรด"],["Reason: because it is ___","เหตุผล"]]),
  L("Sentence frames","โครงสร้างประโยคสำหรับตอบ",[["Meet Jake! He loves ___ because it is ___.",""],["She doesn't like ___ because it is ___.",""],["My favourite food is ___ because it is ___.",""]]),
  L("Reasons","เหตุผลที่ใช้บอกได้",[["delicious · sweet · healthy","อร่อย · หวาน · ดีต่อสุขภาพ"],["I love chocolate because it is sweet.",""],["I like salad because it is healthy.",""]]),
  L("Pair work","ถาม–ตอบกับเพื่อน",[["What is your favourite food? — My favourite food is ___.",""],["Why? — Because it is ___.",""]]),
  L("Wrap up","สรุป",[["Say one food you love and why.","บอกอาหารที่รักและเหตุผล"],["Say one food you don't like and why.","บอกอาหารที่ไม่ชอบและเหตุผล"]])],
 ws:{title:"Video Workshop: I Love Pizza!",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[7,2,9,0,5,10,3,8,1,6,4]},
  {k:"fill",n:"เติมเหตุผลให้ประโยคสมบูรณ์",bank:["delicious","sweet","healthy","fast"],items:[{q:"I love chocolate because it is ___.",a:"sweet"},{q:"I like salad because it is ___.",a:"healthy"},{q:"Pizza is ___. I eat it every week!",a:"delicious"},{q:"Burgers are ___ food. You can get one quickly.",a:"fast"}]},
  {k:"write",n:"ดูวิดีโอแล้วเขียนข้อมูล (ตอบจากวิดีโอ)",items:["Jake loves ____________________ because it is ____________________.","Molly loves ____________________ because it is ____________________.","Leila likes ____________________ because it is ____________________.","Zac doesn't like ____________________ because ____________________."]},
  {k:"write",n:"เขียนเกี่ยวกับตัวเอง (ตอบอิสระ)",items:["My favourite food is ____________________ because it is ____________________.","I don't like ____________________ because ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"Which food is sweet?",o:["salad","chocolate","fish"],a:1},{q:"“healthy” means …",o:["ดีต่อสุขภาพ","อร่อยมาก","หิวมาก"],a:0},{q:"I love pizza ___ it is delicious.",o:["but","because","or"],a:1},{q:"Which is fast food?",o:["burger and french fries","rice and fish","soup and salad"],a:0},
  {q:"What is your favourite food? — ___",o:["I am fine.","My favourite food is pizza.","It is five o'clock."],a:1},{q:"“delicious” means …",o:["เค็ม","เปรี้ยว","อร่อยมาก"],a:2},{q:"Meet Jake! He ___ pizza.",o:["loves","love","loving"],a:0},{q:"I like salad because it is ___.",o:["healthy","fast food","sleepy"],a:0}],
 order:[{w:["My favourite food","is pizza."],a:"My favourite food is pizza."},{w:["I love chocolate","because","it is sweet."],a:"I love chocolate because it is sweet."},{w:["She","doesn't like","burgers."],a:"She doesn't like burgers."},{w:["What","is your","favourite food?"],a:"What is your favourite food?"}]
};
R["5.11"]={
 vocab:[["love","ชอบมาก","😍"],["like","ชอบ","🙂"],["don't like","ไม่ชอบ","🙁"],["survey","การสำรวจ","📋"],["interview","สัมภาษณ์","🎤"],["chart","แผนภูมิ","📊"],["Top 3","3 อันดับแรก","🏆"],["Best Loved Dish","จานที่รักมากที่สุด","🥇"],["Most Liked Choice","ตัวเลือกที่ชอบมากที่สุด","🥈"],["Most Disliked Dish","จานที่ไม่ชอบมากที่สุด","👎"]],
 slides:[
  T("📊","Interview & Class Top 3 Food Charts","PASSION 1 Unit 5 · แผน 5.11",["ใช้ love / like / don't like บอกความชอบ","สัมภาษณ์เพื่อนและสรุปผลเป็นอันดับ","นำเสนอผลสำรวจอย่างมั่นใจ"]),
  B("🎤","Interview time!","Warm up · วันนี้เราจะสำรวจอาหารของทั้งห้อง"),
  ...vsl(10),
  L("Interview questions","คำถามสัมภาษณ์",[["What food do you love most?",""],["What food do you like most?",""],["What food don't you like most?",""]]),
  L("Answer","ตอบคำถาม",[["I love pizza most.",""],["I like fried rice most.",""],["I don't like bitter melon.","ฉันไม่ชอบมะระ"]]),
  L("Tally chart (example)","ตัวอย่างตารางนับคะแนน",[["Pizza ▮▮▮▮▮▮▮▮ = 8",""],["Fried rice ▮▮▮▮▮▮ = 6",""],["Salad ▮▮▮ = 3",""]]),
  L("Report the results","สรุปผลสำรวจ",[["Our survey shows that the Best Loved Dish is pizza.",""],["The Most Liked Choice is fried rice.",""],["The Most Disliked Dish is bitter melon.",""]]),
  L("Make the chart","ทำแผนภูมิ Top 3 ของห้อง",[["Group of 4: interview 8 classmates.","กลุ่มละ 4 คน สัมภาษณ์เพื่อน 8 คน"],["Count votes and draw the Top 3 chart.","นับคะแนนและวาดแผนภูมิ"],["Present to the class.","นำเสนอหน้าห้อง"]]),
  L("Wrap up","สรุป",[["What is the Top 1 food in our class?","อาหารอันดับ 1 ของห้องคืออะไร"],["Say one sentence about your survey.","พูดสรุปผลสำรวจ 1 ประโยค"]])],
 ws:{title:"Interview & Class Top 3 Food Charts",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[3,0,5,2,4,1],items:[["survey","การสำรวจ"],["interview","สัมภาษณ์"],["chart","แผนภูมิ"],["love","ชอบมาก"],["don't like","ไม่ชอบ"],["Top 3","3 อันดับแรก"]]},
  {k:"tf",n:"อ่านผลสำรวจแล้วเลือก ถูก (T) หรือผิด (F)",text:["Class survey: pizza 8 votes · fried rice 6 votes · salad 3 votes · fish 2 votes"],items:[{q:"The Best Loved Dish is pizza.",a:true},{q:"Salad has the most votes.",a:false},{q:"Fried rice has six votes.",a:true},{q:"Fish is in the Top 3.",a:false}]},
  {k:"fill",n:"เติมคำให้สมบูรณ์",bank:["love","like","don't like","survey","chart"],items:[{q:"We asked 20 classmates. Our ___ shows pizza is Top 1.",a:"survey"},{q:"I ___ ice cream. It is my favourite!",a:"love"},{q:"I ___ fish. It smells bad.",a:"don't like"},{q:"We draw a ___ with the Top 3 foods.",a:"chart"}]},
  {k:"write",n:"สัมภาษณ์เพื่อน 3 คน แล้วเขียนผล (ตอบอิสระ)",items:["Friend 1: Love ____________ · Like ____________ · Don't like ____________","Friend 2: Love ____________ · Like ____________ · Don't like ____________","Friend 3: Love ____________ · Like ____________ · Don't like ____________","Our survey shows that the Best Loved Dish is ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"What food do you love most? — I love ___ most.",o:["pizza","at school","yesterday"],a:0},{q:"“survey” means …",o:["แผนภูมิ","การสำรวจ","ของหวาน"],a:1},{q:"The ___ shows the Top 3 foods.",o:["menu","chart","portion"],a:1},{q:"Which means “ไม่ชอบ”?",o:["love","like","don't like"],a:2},
  {q:"The Best Loved Dish means the dish with ___ votes.",o:["the most","the fewest","no"],a:0},{q:"Our survey shows that the Most Liked Choice ___ fried rice.",o:["is","are","am"],a:0},{q:"“Top 3” means …",o:["3 อันดับสุดท้าย","3 อันดับแรก","3 ครั้ง"],a:1},{q:"What food don't you like most? — I don't like ___.",o:["bitter melon","very much","at home"],a:0}],
 order:[{w:["What food","do you","love most?"],a:"What food do you love most?"},{w:["I love","pizza most."],a:"I love pizza most."},{w:["Our survey shows","that the Best Loved Dish","is pizza."],a:"Our survey shows that the Best Loved Dish is pizza."},{w:["The Most Disliked Dish","is bitter melon."],a:"The Most Disliked Dish is bitter melon."}]
};
R["5.12"]={
 vocab:[["throw away","ทิ้ง","🗑️"],["slices","แผ่น / ชิ้นบาง ๆ","🍞"],["still","ยังคง","⏳"],["bin","ถังขยะ","🚮"],["happen","เกิดขึ้น","❓"],["packet","ซอง / ห่อ","📦"],["food waste","ขยะอาหาร","🍛"],["leftovers","อาหารที่เหลือ","🍱"],["fridge","ตู้เย็น","🧊"],["date on the packet","วันที่บนห่อ","📅"]],
 slides:[
  T("♻️","Reading: Food Waste & Zero Waste","PASSION 1 Unit 5 · แผน 5.12",["บอกความหมายคำศัพท์จากบทอ่าน","อ่านและตอบคำถามเกี่ยวกับขยะอาหาร","ให้คำแนะนำด้วย Don't / You should / Try to"]),
  B("🗑️","Do you throw away food?","Warm up · เคยทิ้งอาหารไหม เพราะอะไร"),
  ...vsl(10),
  L("Reading (1)","Mali's family",[["Mali's family often throws away food.",""],["They throw away slices of bread and old rice.",""],["Food waste is a big problem.","ขยะอาหารเป็นปัญหาใหญ่"]]),
  L("Reading (2)","Mali's family (ต่อ)",[["Now they put leftovers in the fridge.",""],["They eat leftovers the next day.",""],["They only buy what they need.",""]]),
  L("Questions","ตอบคำถามจากบทอ่าน",[["What do they throw away?","slices of bread and old rice"],["Where do they put leftovers now?","in the fridge"],["What do they buy now?","only what they need"]]),
  L("Giving advice","ให้คำแนะนำลดขยะอาหาร",[["Don't + verb … : Don't throw away food!",""],["You should + verb … : You should eat leftovers.",""],["Try to + verb … : Try to buy only what you need.",""]]),
  L("Zero waste tips","ไอเดียลดขยะ",[["Check the date on the packet.",""],["Put old food in the fridge, not in the bin.",""],["Share extra food with friends.",""]]),
  L("Wrap up","สรุป",[["Give 2 pieces of advice with Don't / Try to.","ให้คำแนะนำ 2 ข้อ"],["Which tip can you do at home?","ข้อไหนทำได้ที่บ้าน"]])],
 ws:{title:"Reading: Food Waste & Zero Waste",parts:[
  {k:"match",n:"จับคู่คำศัพท์กับความหมาย",ord:[4,2,0,5,1,3],items:[["throw away","ทิ้ง"],["still","ยังคง"],["bin","ถังขยะ"],["happen","เกิดขึ้น"],["packet","ซอง / ห่อ"],["leftovers","อาหารที่เหลือ"]]},
  {k:"tf",n:"อ่านแล้วเลือก ถูก (T) หรือผิด (F)",text:["Mali's family often throws away food. They throw away slices of bread and old rice. Now they put leftovers in the fridge and eat them the next day. They only buy what they need."],items:[{q:"Mali's family never throws away food.",a:false},{q:"They put leftovers in the fridge.",a:true},{q:"They eat leftovers the next day.",a:true},{q:"They buy a lot of extra food now.",a:false}]},
  {k:"fill",n:"เติม Don't / You should / Try to",bank:["Don't","You should","Try to"],items:[{q:"___ throw away food!",a:"Don't"},{q:"___ eat leftovers the next day.",a:"You should"},{q:"___ buy only what you need.",a:"Try to"},{q:"___ put food in the bin.",a:"Don't"}]},
  {k:"write",n:"เขียนคำแนะนำลดขยะอาหาร 3 ข้อ (ตอบอิสระ)",items:["Don't ____________________.","You should ____________________.","Try to ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“throw away” means …",o:["เก็บไว้","ทิ้ง","ซื้อ"],a:1},{q:"Where do we put food waste?",o:["in the bin","in the fridge","in the school bag"],a:0},{q:"___ throw away food!",o:["Try to","Don't","You should"],a:1},{q:"___ buy only what you need.",o:["Don't","Try to","Throw"],a:1},
  {q:"“leftovers” means …",o:["อาหารที่ยังไม่ได้ทำ","อาหารที่เหลือ","อาหารเด็ก"],a:1},{q:"Check the ___ on the packet.",o:["date","bin","fridge"],a:0},{q:"You should eat leftovers ___.",o:["the next day","never","last year"],a:0},{q:"Is the bread ___ good? — Yes, it is.",o:["still","happen","slices"],a:0}],
 order:[{w:["Don't","throw away","food!"],a:"Don't throw away food!"},{w:["You should","eat leftovers."],a:"You should eat leftovers."},{w:["Try to","buy only","what you need."],a:"Try to buy only what you need."},{w:["Put leftovers","in the fridge."],a:"Put leftovers in the fridge."}]
};
R["5.13"]={
 vocab:[["omelette","ไข่เจียว / ออมเล็ต","🍳"],["ingredients","ส่วนผสม","📝"],["eggs","ไข่","🥚"],["milk","นม","🥛"],["cheese","ชีส","🧀"],["ham","แฮม","🥓"],["tomatoes","มะเขือเทศ","🍅"],["grammes","กรัม","⚖️"],["teaspoons","ช้อนชา","🥄"],["slices","แผ่น","🍞"],["recipe","สูตรอาหาร","📖"],["fridge","ตู้เย็น","🧊"]],
 slides:[
  T("🍳","Listening & My Favourite Recipe","PASSION 1 Unit 5 · แผน 5.13",["ฟังบทสนทนาและจับใจความสำคัญ","เขียนส่วนผสมพร้อมปริมาณและหน่วย","นำเสนอเมนูโปรดของตนเอง"]),
  B("😋","I'm hungry! What have we got?","Warm up · หิวแล้ว ในตู้เย็นมีอะไรบ้าง"),
  ...vsl(12),
  L("Listening script","ครูอ่านให้ฟัง 2 รอบ",[["A: I'm hungry! B: What have you got in the fridge?",""],["A: I've got eggs and cheese. B: How many eggs are there?",""],["A: There are six. B: Is the cheese still good to eat?",""],["A: Yes, it is. Let's make an omelette!",""]]),
  L("Listening questions","ตอบคำถามจากที่ฟัง",[["What do they have in the fridge?","eggs and cheese"],["How many eggs are there?","six"],["What do they make?","an omelette"]]),
  L("Quantities","ปริมาณและหน่วย",[["two eggs · three slices of ham",""],["100 grammes of cheese",""],["one teaspoon of salt · a cup of milk",""]]),
  L("Recipe model","Cheese omelette",[["Ingredients: 2 eggs · 50 grammes of cheese",""],["2 slices of ham · 1 tomato",""],["1 teaspoon of salt",""]]),
  L("My favourite recipe","เขียนและนำเสนอเมนูโปรด",[["My favourite recipe is ___.",""],["I need … eggs / … grammes of … / … slices of …",""],["I like it because it is ___.",""]]),
  L("Wrap up","สรุป",[["Say 3 ingredients with amounts.","บอกส่วนผสม 3 อย่างพร้อมปริมาณ"],["Present your recipe to a friend.","นำเสนอสูตรให้เพื่อน"]])],
 ws:{title:"Listening & My Favourite Recipe",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพ เขียนตัวอักษรลงในช่องว่าง",ord:[5,9,0,11,3,7,1,10,4,8,2,6]},
  {k:"fill",n:"เติมหน่วยวัดและปริมาณ",bank:["grammes","teaspoon","slices","eggs"],items:[{q:"Two ___ of ham.",a:"slices"},{q:"100 ___ of cheese.",a:"grammes"},{q:"One ___ of salt.",a:"teaspoon"},{q:"Three ___ for the omelette.",a:"eggs"}]},
  {k:"tf",n:"ฟังบทสนทนาแล้วเลือก ถูก (T) หรือผิด (F)",items:[{q:"There are six eggs in the fridge.",a:true},{q:"They have ham in the fridge.",a:false},{q:"They make an omelette.",a:true},{q:"The cheese is bad.",a:false}]},
  {k:"write",n:"เขียนสูตรอาหารโปรดของตนเอง (ตอบอิสระ)",items:["My favourite recipe: ____________________","Ingredients: 1) ____________ 2) ____________ 3) ____________ 4) ____________","I like it because it is ____________________."]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"“ingredients” means …",o:["ส่วนผสม","ตู้เย็น","ของหวาน"],a:0},{q:"How ___ eggs are there?",o:["much","many","some"],a:1},{q:"100 ___ of cheese",o:["slices","grammes","teaspoons"],a:1},{q:"1 ___ of salt",o:["teaspoon","bowl of","egg"],a:0},
  {q:"“I'm hungry!” means …",o:["ฉันหิว","ฉันเหนื่อย","ฉันง่วง"],a:0},{q:"Three ___ of ham",o:["grammes","slices","eggs"],a:1},{q:"What do you need for an omelette?",o:["eggs","a bed","a book"],a:0},{q:"A recipe tells us …",o:["how to cook food","how to sleep","how to swim"],a:0}],
 order:[{w:["I'm hungry!","What have you got","in the fridge?"],a:"I'm hungry! What have you got in the fridge?"},{w:["How many","eggs","are there?"],a:"How many eggs are there?"},{w:["I need","two eggs","and 50 grammes of cheese."],a:"I need two eggs and 50 grammes of cheese."},{w:["My favourite recipe","is an omelette."],a:"My favourite recipe is an omelette."}]
};
R["5.14"]={
 vocab:[["carton","กล่อง (นม/น้ำผลไม้)","🥛"],["bottle","ขวด","🍾"],["bag","ถุง","🛍️"],["spoon","ช้อน","🥄"],["cup","ถ้วย","☕"],["dozen","โหล (12)","12"],["a pinch of","หยิบมือ","🤏"],["tablespoon","ช้อนโต๊ะ","Tbsp"],["teaspoon","ช้อนชา","tsp"],["clove","กลีบ (กระเทียม)","🧄"],["bundle","กำ / มัด","🌿"],["packet","ซอง / ห่อ","📦"],["grams","กรัม","g"],["ml","มิลลิลิตร","ml"]],
 slides:[
  T("🌍","My Favourite Recipe Around the World","PASSION 1 Unit 5 · แผน 5.14",["ใช้ตัวเลข หน่วยวัด และภาชนะในรายการส่วนผสม","สืบค้นส่วนผสมของเมนูทั่วโลก","นำเสนอเมนูและอ่านส่วนผสมให้ถูกต้อง"]),
  B("🌍","What do people eat around the world?","Warm up · เมนูโปรดของประเทศอื่น ๆ"),
  ...vsl(14),
  L("Numbers + countable nouns","จำนวน + นามนับได้",[["Four eggs",""],["A dozen eggs","ไข่ 12 ฟอง"],["Two cloves of garlic",""]]),
  L("Uncountable + measure","นามนับไม่ได้ + หน่วยวัด",[["A pinch of salt",""],["One tablespoon of olive oil",""],["Two tablespoons of soy sauce",""],["One teaspoon of salt",""]]),
  L("Containers","ภาชนะ",[["a carton of milk · a bottle of water","กล่องนม · ขวดน้ำ"],["a bag of rice · a packet of noodles","ถุงข้าว · ห่อเส้น"],["a cup of sugar · 200 ml of coconut milk",""]]),
  L("Recipe research","ค้นหาเมนูทั่วโลก",[["Choose 1 dish from any country.","เลือก 1 เมนูจากประเทศใดก็ได้"],["Find 5–7 ingredients in English.","หาส่วนผสม 5–7 อย่างเป็นภาษาอังกฤษ"],["Write the amount and the unit.","เขียนปริมาณและหน่วย"]]),
  L("Present your dish","นำเสนอเมนู",[["My dish is ___ from ___.",""],["We need … eggs, … grams of …, a pinch of …",""]]),
  L("Wrap up","สรุป · เตรียมทบทวน Unit 5",[["Say 3 ingredients with units.","บอกส่วนผสม 3 อย่างพร้อมหน่วย"],["Review Progress Check pages 94–95.","ทบทวนก่อนทำแบบทดสอบ"]])],
 ws:{title:"My Favourite Recipe Around the World",parts:[
  {k:"pics",n:"จับคู่คำศัพท์กับภาพหรือสัญลักษณ์ เขียนตัวอักษรลงในช่องว่าง",ord:[4,10,1,7,12,0,9,3,13,6,2,8,5,11]},
  {k:"fill",n:"เติมหน่วยวัดหรือภาชนะให้ถูกต้อง",bank:["carton","bottle","bag","pinch","tablespoon","cloves","dozen"],items:[{q:"A ___ of milk.",a:"carton"},{q:"A ___ of water.",a:"bottle"},{q:"A ___ of rice.",a:"bag"},{q:"A ___ of salt.",a:"pinch"},{q:"One ___ of olive oil.",a:"tablespoon"},{q:"Two ___ of garlic.",a:"cloves"},{q:"A ___ eggs = 12 eggs.",a:"dozen"}]},
  {k:"mcq",n:"เลือกคำตอบที่ถูกต้อง",items:[{q:"Which is uncountable?",o:["egg","clove","salt"],a:2},{q:"“a pinch of salt” means …",o:["เกลือหยิบมือ","เกลือหนึ่งถุง","เกลือหนึ่งขวด"],a:0},{q:"200 ___ of coconut milk",o:["ml","dozen","eggs"],a:0}]},
  {k:"write",n:"บันทึกเมนูทั่วโลกที่ค้นพบ (ตอบอิสระ)",items:["Dish: ____________________  Country: ____________________","1) ____________________  2) ____________________","3) ____________________  4) ____________________","5) ____________________  6) ____________________"]}]},
 games:["match","quiz","mcq","order"],
 mcq:[{q:"A dozen eggs = ___ eggs.",o:["10","12","20"],a:1},{q:"Which is a container?",o:["bottle","pinch","clove"],a:0},{q:"“teaspoon” means …",o:["ช้อนชา","ช้อนโต๊ะ","ถ้วย"],a:0},{q:"“tablespoon” means …",o:["ช้อนชา","ถ้วย","ช้อนโต๊ะ"],a:2},
  {q:"A ___ of garlic",o:["clove","carton","bottle"],a:0},{q:"Two ___ of soy sauce",o:["tablespoons","eggs","dozen"],a:0},{q:"“grams” and “ml” are …",o:["units of measurement","containers","drinks"],a:0},{q:"A ___ of milk",o:["carton","clove","pinch"],a:0}],
 order:[{w:["Four","eggs"],a:"Four eggs"},{w:["A pinch","of salt"],a:"A pinch of salt"},{w:["One tablespoon","of olive oil"],a:"One tablespoon of olive oil"},{w:["Two tablespoons","of soy sauce"],a:"Two tablespoons of soy sauce"}]
};
/*__NEXT__*/
for(const k in R){R[k].course="อ21101 ภาษาอังกฤษ ม.1";R[k].lv="ม.1"}
return R;
})();
