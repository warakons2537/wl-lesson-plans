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
 mcq:[{q:"Which one is a dairy product?",o:["cheese","steak","carrots"],a:0},{q:"Which one is protein?",o:["fish","rice","apple"],a:0},{q:"Which one is a carbohydrate?",o:["toast","eggs","yoghurt"],a:0},{q:"These are ___.",o:["chips","pizza","ice cream"],a:0},
  {q:"This is ___.",o:["an apple","cherries","chips"],a:0},{q:"I'm a hot drink. I'm made from leaves. What am I?",o:["tea","fruit juice","yoghurt"],a:0},{q:"I'm cold and sweet. I belong to dairy products. What am I?",o:["ice cream","steak","salad"],a:0},{q:"I'm red and small. I grow on trees. What am I?",o:["cherries","carrots","cheese"],a:0}],
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
 mcq:[{q:"Which course comes first?",o:["appetizer","dessert","main dish"],a:0},{q:"Which course is sweet?",o:["dessert","appetizer","main dish"],a:0},{q:"I ___ pizza! It's my favourite.",o:["love","don't like","prefer to"],a:0},
  {q:"I ___ tea to coffee.",o:["prefer","love to","like to"],a:0},{q:"“I prefer tea to coffee.” means …",o:["ชอบชามากกว่ากาแฟ","ชอบกาแฟมากกว่าชา","ไม่ชอบทั้งสองอย่าง"],a:0},{q:"What kind of appetizer do you like? — I like ___.",o:["salad","ice cream","steak"],a:0,ex:"salad เป็น appetizer"},
  {q:"Where do you order food and drinks?",o:["In a cafe","In a library","In a bank"],a:0},{q:"“I don't like fish.” means …",o:["ฉันไม่ชอบปลา","ฉันชอบปลา","ฉันกินปลาทุกวัน"],a:0}],
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
 mcq:[{q:"What is Tom's job?",o:["He is a swimmer.","He is a cook.","He is a doctor."],a:0},{q:"What does Tom always have for breakfast?",o:["Cereal","Fish","Cake"],a:0},{q:"What does Tom never eat before a race?",o:["Cake","Fruit","Cereal"],a:0},
  {q:"Tom often eats ___ for dinner.",o:["fish","ice cream","cereal"],a:0},{q:"What is his Sunday treat?",o:["An ice cream","A salad","A sandwich"],a:0},{q:"“always” means …",o:["ทุกครั้ง","ไม่เคย","บางครั้ง"],a:0},{q:"“hungry” means …",o:["หิว","อิ่ม","เหนื่อย"],a:0},{q:"Which sentence is correct?",o:["I never eat cake.","I eat never cake.","Never I eat cake."],a:0}],
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
 mcq:[{q:"She ___ eats breakfast. (100%)",o:["always","never","rarely"],a:0},{q:"Which sentence is correct?",o:["I always eat breakfast.","I eat always breakfast.","Always I eat breakfast."],a:0},{q:"Which sentence is correct?",o:["He is never late.","He never is late.","He is late never."],a:0},
  {q:"Do you have ___ milk?",o:["any","some","a"],a:0},{q:"“rarely” means …",o:["แทบไม่เคย","ทุกวัน","บ่อย ๆ"],a:0},{q:"Which has the lowest frequency?",o:["never","sometimes","often"],a:0},{q:"You ___ eat more vegetables. (advice)",o:["should","shouldn't","never"],a:0},{q:"We don't have ___ sugar.",o:["any","some","a lot"],a:0}],
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
 mcq:[{q:"Which expression means “rest from work”?",o:["have a break","have lunch","have a snack"],a:0},{q:"What do you have for breakfast? — I usually have ___.",o:["toast and eggs","a break","a party"],a:0},{q:"“have a party” means …",o:["จัดงานเลี้ยง","กินอาหารกลางวัน","พักเบรก"],a:0},{q:"Ben usually has ___ for breakfast.",o:["toast and eggs","pizza","ice cream"],a:0},
  {q:"“greedy” means …",o:["ตะกละ","ใจดี","หิว"],a:0},{q:"Pim says: “Let me taste.” She wants to …",o:["try the food","cook the food","buy the food"],a:0},{q:"Have you got any sandwiches? — Yes, ___.",o:["I have","I do","I am"],a:0},{q:"A small meal between lunch and dinner is …",o:["a snack","a party","a break"],a:0}],
 order:[{w:["What do you","have for","breakfast?"],a:"What do you have for breakfast?"},{w:["I usually","have","toast and eggs."],a:"I usually have toast and eggs."},{w:["Have you got","any sandwiches","today?"],a:"Have you got any sandwiches today?"},{w:["Don't","be","greedy!"],a:"Don't be greedy!"}]
};
/*__NEXT__*/
for(const k in R){R[k].course="อ21101 ภาษาอังกฤษ ม.1";R[k].lv="ม.1"}
return R;
})();
