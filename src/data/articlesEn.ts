export interface ArticleEnSec {
  h: string;
  p: string[];
}

export interface ArticleEn {
  takeaways: string[];
  sections: ArticleEnSec[];
  danger: string;
  faqs: { q: string; a: string }[];
}

export const articlesEn: Record<string, ArticleEn> = {
  "makanan-trimester-2": {
    takeaways: [
      "Add 300 calories daily with animal protein each meal.",
      "Take iron tablets with orange juice, not tea.",
      "A full one day menu is ready to copy.",
    ],
    sections: [
      {
        h: "Why trimester 2 is golden",
        p: [
          "Nausea usually fades. Appetite returns. Baby grows fast from 100 grams to nearly 900 grams.",
          "Weeks 13 to 27 focus on protein for muscle and brain, iron for blood, calcium for bones, fiber for digestion.",
        ],
      },
      {
        h: "Realistic daily portions",
        p: [
          "Rice 3 times in medium portions. Animal protein twice daily, like egg in the morning, fish at noon. Tempeh or tofu each meal.",
          "2 bowls of veggies, 2 fruits, 1 glass of milk if not allergic. 8 to 10 glasses of water.",
          "Keep taking iron tablets as advised. Take with orange juice for absorption. Avoid tea near tablet time.",
        ],
      },
      {
        h: "One day menu example",
        p: [
          "Morning: rice plus boiled egg plus spinach plus papaya. Snack: boiled peanuts.",
          "Noon: rice plus fried catfish plus tempeh plus sour veggies. Night: small rice portion plus chicken plus carrot soup.",
        ],
      },
      {
        h: "Weekly shopping checklist",
        p: [
          "Animal protein for 14 meals: 1 kg eggs, 1 kg fish, half kg chicken. Tempeh and tofu daily.",
          "7 bunches of greens, 14 fruits, 1 liter milk if not allergic. Enough iron tablets for a month.",
        ],
      },
    ],
    danger: "See a midwife for weight loss 2 weeks straight, heavy vomiting, fainting dizziness, or sudden face and hand swelling.",
    faqs: [
      { q: "Is coffee allowed in trimester 2?", a: "Up to 200 mg caffeine daily. About 1 small cup. Avoid sweet sachet coffee daily." },
      { q: "Must I eat double portions?", a: "No. Add about 300 calories. Equal to 1 small plate of rice plus sides." },
    ],
  },
  "menghadapi-kontraksi": {
    takeaways: [
      "True contractions get regular and survive rest.",
      "4-6 breathing plus position changes every 20 minutes help.",
      "Leave for 5 minute contractions over 1 hour.",
    ],
    sections: [
      {
        h: "Know the pattern",
        p: [
          "Note start time, length, gaps. Active contractions run 40 to 60 seconds every 5 minutes.",
          "Stronger and regular with walking means labor. Fading with rest means false labor.",
        ],
      },
      {
        h: "Proven techniques",
        p: [
          "Breathe 4-6. In 4 counts, out 6 counts. Relax shoulders. Unclench jaw.",
          "Switch position every 20 minutes. Birth ball sitting, leaning standing, or left side lying.",
          "Back massage by companion. Warm compress on lower back. Warm shower if membranes intact and allowed.",
        ],
      },
      {
        h: "When to leave",
        p: [
          "For 5 minute contractions over 1 hour, water breaking, bloody show, or danger signs.",
          "Bring the KIA book, lab results, and the bag packed since week 34.",
        ],
      },
      {
        h: "Home rehearsal",
        p: [
          "At week 36, time contractions once for a full hour to learn true from false.",
          "Practice 3 positions: birth ball, wall leaning, left side. Rate the most comfortable.",
          "Recheck the birth bag and facility route including a backup for traffic or floods.",
        ],
      },
    ],
    danger: "Go now for water breaking over 6 hours without contractions, fresh bleeding, fever, or stopped fetal movement.",
    faqs: [
      { q: "Are all contractions painful?", a: "Intensity differs per mom. Breath focus and positions usually cut pain 2 to 3 points." },
      { q: "May I eat in early labor?", a: "Light snacks and water are fine without medical restriction. Avoid heavy meals in active phase." },
    ],
  },
  "merawat-tali-pusat": {
    takeaways: [
      "One rule: dry, clean, and open.",
      "Normal cord fall is days 5 to 15.",
      "Spreading redness plus pus and odor means infection, go the same day.",
    ],
    sections: [
      {
        h: "Core rule: dry and clean",
        p: [
          "Leave the cord open. Fold diapers below the base.",
          "Wash hands before and after touching. Sponge baths until the cord falls.",
        ],
      },
      {
        h: "Daily steps",
        p: [
          "Check each diaper change. If soiled by urine or stool, clean with boiled water then dry with clean gauze.",
          "No routine alcohol unless advised. No herbs, coins, or tight belly bands.",
          "Normal fall is days 5 to 15. A little dried blood is fine.",
        ],
      },
      {
        h: "Infection signs",
        p: [
          "Spreading redness, swelling, pus, odor, fever, or fussy refusing baby.",
          "If even one appears, go to a facility the same day. Do not wait for it to fall.",
        ],
      },
      {
        h: "Daily check schedule",
        p: [
          "Morning: check at the first diaper change. Note color and odor. Photo changes for the midwife.",
          "Evening: recheck after sponge bath. Keep the diaper fold below the base.",
          "Night: final check before sleep. Note the day count in the KIA book.",
        ],
      },
    ],
    danger: "Go the same day for pus filled, smelly, heavily bleeding base, or feverish refusing baby.",
    faqs: [
      { q: "Bath before the cord falls?", a: "Sponge baths are fine. Avoid soaking. Dry the base after." },
      { q: "Is powder allowed?", a: "Avoid powder on the cord base. Keep it dry and clean." },
    ],
  },
  "atasi-mual-trimester-1": {
    takeaways: [
      "Eat small frequent meals, never an empty stomach.",
      "Warm ginger, plain crackers, and fresh air help many moms.",
      "Vomiting over 5 times daily needs a check, not normal nausea.",
    ],
    sections: [
      {
        h: "Why nausea appears",
        p: [
          "hCG hormone surges in weeks 6 to 12. Nausea peaks weeks 8 to 10 then eases.",
          "Empty stomach, strong smells, and fatigue worsen it. Patterns differ per mom and pregnancy.",
        ],
      },
      {
        h: "Tricks to try now",
        p: [
          "Eat 5 to 6 small portions. Keep plain crackers at the desk. Snack before rising from bed.",
          "Warm ginger drink or lemon water. Avoid fried foods and sharp smells. Open windows or short morning walks.",
          "Rest enough. Ask the midwife for B6 if nausea blocks eating over 3 days.",
        ],
      },
      {
        h: "Normal nausea vs hyperemesis",
        p: [
          "Normal nausea: still eating and drinking, stable weight. Hyperemesis: nonstop vomiting, no fluids, weight loss, dark urine.",
          "Hyperemesis needs IV fluids and doctor medicine. Do not delay once dehydrated.",
        ],
      },
      {
        h: "Soothing drink recipes",
        p: [
          "Warm ginger: 2 fresh slices steeped 5 minutes, plus 1 spoon honey. Sip slowly twice daily.",
          "Warm lemon: half a lemon squeezed into warm water plus a pinch of salt. Scent and taste cut nausea.",
          "Avoid sweet sodas and unlabeled herbs. Note which drink suits you best.",
        ],
      },
    ],
    danger: "Go for vomiting over 5 times daily, inability to drink, heavy dizziness, or weight loss within 1 week.",
    faqs: [
      { q: "Over the counter nausea pills?", a: "Do not self buy. Ask the midwife or doctor for pregnancy safe prescription." },
      { q: "When does nausea end?", a: "Usually eases weeks 12 to 14. A few continue longer and still need monitoring." },
    ],
  },
  "cegah-anemia-tablet-tambah-darah": {
    takeaways: [
      "Take 1 tablet daily through pregnancy plus 40 postpartum days.",
      "Take with water or orange juice, never tea or milk.",
      "Black stool after tablets is normal, not dangerous.",
    ],
    sections: [
      {
        h: "Why anemia is dangerous",
        p: [
          "Anemia brings fatigue, dizziness, paleness. Bleeding and small baby risks rise.",
          "Iron needs double in pregnancy. Food alone is often not enough.",
        ],
      },
      {
        h: "How to take it right",
        p: [
          "Take 1 tablet nightly before sleep or 2 hours after meals for comfort.",
          "Push with orange juice or fruit. Vitamin C doubles iron absorption.",
          "Space 2 hours from tea, coffee, milk, and antacids. They block absorption.",
        ],
      },
      {
        h: "Companion foods",
        p: [
          "Chicken liver 1 to 2 times weekly, red meat, fish, eggs, spinach, red beans.",
          "Check Hb each trimester. Normal target above 11 g per dL.",
        ],
      },
      {
        h: "7 day drinking routine",
        p: [
          "Stick a schedule on the fridge and tick nightly. Ready orange juice 3 times weekly.",
          "Missed 1 day, take it the next day. Never double tablets.",
          "Review each visit: bring leftover tablets so the midwife sees compliance.",
        ],
      },
    ],
    danger: "Check for fainting dizziness, racing heart at rest, breathlessness, or severe eyelid paleness.",
    faqs: [
      { q: "Nauseous after tablets?", a: "Move to nighttime with a snack first. Ask the midwife for another formula if it persists." },
      { q: "Stop when Hb is normal?", a: "Do not stop alone. Needs stay high through postpartum. Continue as advised." },
    ],
  },
  "senam-hamil-trimester-3": {
    takeaways: [
      "Exercise 2 to 3 times weekly, 20 to 30 minutes a session.",
      "Focus on breath, squats, and pelvic relaxation.",
      "Stop and check for fluid, bleeding, or dizziness.",
    ],
    sections: [
      {
        h: "Felt benefits",
        p: [
          "Trained breath for pushing. Supple pelvis. Less back pain and better sleep.",
          "Moms who exercise routinely usually face contractions calmer.",
        ],
      },
      {
        h: "4 basic moves",
        p: [
          "Belly breath: sit cross legged, in 4 counts, out 6 counts. Repeat 8 times.",
          "Supported squat: hold a chair, squat slowly, hold 10 seconds. Repeat 5 times.",
          "Pelvic rocking: on all fours, arch and straighten the back alternately. Repeat 8 times.",
          "Left side rest: lie 10 minutes with a pillow between knees. Close with slow breath.",
        ],
      },
      {
        h: "Safety rules",
        p: [
          "Join an instructed class if possible. Bring a companion and drinking water.",
          "Avoid long back lying, jumping, and breath holding. Stop for contractions, fluid, or blurred vision.",
        ],
      },
      {
        h: "Sample weekly plan",
        p: [
          "Monday: 20 minute walk plus 8 belly breaths. Wednesday: 5 supported squats plus 8 pelvic rocks.",
          "Friday: repeat Monday pack. Sunday: 10 minute left side rest plus week review.",
        ],
      },
    ],
    danger: "Stop exercise and check for bleeding, water breaking, regular belly pain, heavy dizziness, or reduced fetal movement.",
    faqs: [
      { q: "When to start pregnancy exercise?", a: "Allowed from trimester 2 in normal pregnancy. Trimester 3 focuses on breath and pushing prep." },
      { q: "Is walking enough?", a: "Yes. A 20 to 30 minute daily relaxed walk equals the benefits. Wear comfy footwear." },
    ],
  },
  "tanda-persalinan-sudah-dekat": {
    takeaways: [
      "True contractions get regular, stronger, survive rest.",
      "Bloody show and water breaking mean leave now.",
      "Time contractions with a clock for accurate assessment.",
    ],
    sections: [
      {
        h: "Signs 1 to 3: contractions, mucus, water",
        p: [
          "True contractions come every 10 then 5 minutes, last 40 to 60 seconds, get painful. False ones fade with walking.",
          "Bloody mucus appears 1 to 2 days before birth. Water breaking is fluid that cannot be held.",
        ],
      },
      {
        h: "Signs 4 and 5: dropping belly and energy",
        p: [
          "Belly feels lower, breathing eases but peeing increases. That is the head entering the pelvis.",
          "Some moms feel energetic and nest. Some get mild diarrhea and nausea.",
        ],
      },
      {
        h: "How to time contractions",
        p: [
          "Note each start time and length for 1 hour. Example: 07.00, 07.07, 07.14, 40 seconds each.",
          "Bring notes to the facility. Midwives stage labor from this pattern.",
        ],
      },
      {
        h: "Ready numbers and routes",
        p: [
          "Save 3 numbers: midwife, facility, driver or family. Stick on the fridge and companion phone.",
          "Survey day and night routes. Note travel time plus 1 backup. Ready cash and toll credit if needed.",
        ],
      },
    ],
    danger: "Go at once for water breaking, fresh bleeding, fever, severe headache, or stopped fetal movement.",
    faqs: [
      { q: "Water broke but no contractions?", a: "Still leave. Safe waiting is about 6 hours. The midwife assesses induction." },
      { q: "Shower before leaving?", a: "Quick shower is fine if membranes intact. If broken, leave at once without soaking." },
    ],
  },
  "perawatan-luka-jahitan-nifas": {
    takeaways: [
      "Keep wounds dry and change pads every 4 hours.",
      "Wash front to back each pee and poop.",
      "Growing pain plus swelling and odor means infection, get checked.",
    ],
    sections: [
      {
        h: "Daily care",
        p: [
          "Wash the area with boiled water each pee and poop, single wipe front to back.",
          "Pat dry with tissue or clean gauze. Change pads every 3 to 4 hours even if light.",
          "Wear loose cotton pants. Avoid long sitting on hard surfaces.",
        ],
      },
      {
        h: "Healing foods",
        p: [
          "Protein each meal: eggs, fish, chicken, tempeh. Vitamin C from oranges and guava.",
          "No evidence based food taboos. Katuk leaves and greens actually help milk.",
        ],
      },
      {
        h: "Infection signs",
        p: [
          "Normal: pain easing daily, mild swelling 2 first days. Abnormal: growing pain, hot swelling, pus, odor, fever.",
          "Partly open stitches plus fever need same day checks.",
        ],
      },
      {
        h: "Pad change routine",
        p: [
          "Change every 3 to 4 hours: waking, noon, evening, bedtime. More often when heavy.",
          "Each change: wash hands, wash front to back, dry, fresh pad. Wash hands again.",
        ],
      },
    ],
    danger: "Check the same day for pus filled, smelly, open wounds, fever above 38 degrees, or heavy bleeding.",
    faqs: [
      { q: "May I squat?", a: "Avoid deep squats the first 2 weeks. Use a sitting toilet if available." },
      { q: "When do threads dissolve?", a: "Modern threads absorb in 7 to 14 days. Follow the midwife wound schedule." },
    ],
  },
  "baby-blues-vs-depresi-nifas": {
    takeaways: [
      "Baby blues fades alone within 2 weeks. Beyond that needs depression screening.",
      "Lost sleep is the top trigger. Ask your partner for night shifts.",
      "Thoughts of harming self or baby are an emergency. Get help the same day.",
    ],
    sections: [
      {
        h: "What baby blues is",
        p: [
          "Appears days 3 to 5. Signs: easy tears, worry, sensitivity, sleeplessness even as baby sleeps.",
          "Cause: crashing hormones plus fatigue and role change. Hits 50 to 80 percent of moms.",
        ],
      },
      {
        h: "When it counts as depression",
        p: [
          "Same signs but heavier and beyond 2 weeks. No joy in baby, feeling failure, withdrawing, lost appetite.",
          "Postpartum depression is a medical illness, not weak faith. It is treatable.",
        ],
      },
      {
        h: "Helping self and partner",
        p: [
          "Sleep when baby sleeps. Accept help guilt free. Tell feelings to someone close.",
          "Partners: take 1 night shift, listen without judging, drive to the midwife if signs persist.",
        ],
      },
      {
        h: "2 week support plan",
        p: [
          "Write who does what: cooking, laundry, night watch, visit rides. Stick on the fridge.",
          "Schedule 1 call with a close friend every 3 days. Isolation worsens baby blues.",
          "If day 14 shows no better, visit for screening. Bring daily mood notes.",
        ],
      },
    ],
    danger: "Seek emergency help for self or baby harm thoughts, sleepless days, or inability to care for baby.",
    faqs: [
      { q: "Does baby blues need drugs?", a: "Usually not. Support, rest, nutrition suffice. Drugs only for diagnosed depression." },
      { q: "Breastfeeding on depression drugs?", a: "Many drugs are nursing safe. Never stop milk or drugs alone. Consult a doctor." },
    ],
  },
  "asi-lancar-minggu-pertama": {
    takeaways: [
      "Nurse 8 to 12 times daily, every 2 to 3 hours including nights.",
      "Right latch: wide mouth, flanged lips, chin touching.",
      "6 pees daily and yellow poop mean enough milk.",
    ],
    sections: [
      {
        h: "Colostrum is enough",
        p: [
          "Days 1 to 3 bring only thick little colostrum. A marble sized stomach makes it enough.",
          "Frequent nursing triggers supply. Mature milk rushes days 3 to 5.",
        ],
      },
      {
        h: "Position and latch",
        p: [
          "Baby belly to mom belly. Ear shoulder hip aligned. Support the whole body, not just the head.",
          "Wait for a wide mouth then bring close. Much areola in, no sore nipples.",
          "Try cradle, football, and side lying. Rotate positions each session to spare one nipple spot.",
        ],
      },
      {
        h: "Enough vs lacking signs",
        p: [
          "Enough: 6 pees, 3 yellow poops, calm baby after feeds, weight up by week 2.",
          "Lacking: under 4 pees, endless crying, spreading jaundice, weight loss over 10 percent.",
        ],
      },
      {
        h: "Sample 24 hour nursing plan",
        p: [
          "06.00, 08.30, 11.00, 13.30, 16.00, 18.30, 21.00, 23.30, 02.00, 04.30. Ten times total, 15 to 30 minutes each.",
          "Wake baby sleeping over 3 hours in week one. After good weight gain, follow baby rhythm.",
        ],
      },
    ],
    danger: "Go for refusing feeds, limpness, fever, jaundice to palms, or drastic weight loss.",
    faqs: [
      { q: "Pacifier or bottle needed?", a: "Avoid bottles 4 first weeks to prevent nipple confusion. Use spoon or cup feeders if needed." },
      { q: "Which foods boost milk?", a: "No magic food. Frequent nursing, enough fluids, rest. Katuk leaves work as veggies." },
    ],
  },
  "bayi-kuning-baru-lahir": {
    takeaways: [
      "Normal jaundice appears days 2 to 3, gone before 2 weeks.",
      "Jaundice within 24 hours is never normal.",
      "15 minute morning sun is no therapy. Severe cases need facility phototherapy.",
    ],
    sections: [
      {
        h: "Normal jaundice",
        p: [
          "Appears days 2 or 3, starting face then chest. Baby active and nursing strong.",
          "Gone before 2 weeks in full term babies. Nurse often so bilirubin exits in poop.",
        ],
      },
      {
        h: "Dangerous jaundice",
        p: [
          "Under 24 hours. Spreads fast to belly, hands, palms. Baby limp, feverish, refusing feeds.",
          "Causes: mom baby blood mismatch, infection, or too little milk intake.",
        ],
      },
      {
        h: "What to do",
        p: [
          "Check each morning in natural light. Press nose or chest gently, see leftover yellow.",
          "15 minute sun before 9 AM is a companion, not a checkup replacement.",
          "Severe jaundice gets blue light phototherapy at facilities. Faster means safer brains.",
        ],
      },
      {
        h: "Track color daily",
        p: [
          "Day 1: normal pink. Days 2 to 3: note spread (face only or to chest).",
          "Days 4 to 7: yellow must fade. Photo each morning in the same light for comparison.",
          "Bring notes and photos to checks. They help midwives assess fast.",
        ],
      },
    ],
    danger: "Go the same day for day one jaundice, palm spread, limp refusing baby, or seizures.",
    faqs: [
      { q: "Does breastmilk cause jaundice?", a: "Breastmilk jaundice exists, mild, fading in 3 to 12 weeks. Keep nursing, but rule out severe causes first." },
      { q: "Sugar water allowed?", a: "No. Sugar water does not lower jaundice and harms nursing. Nurse more often." },
    ],
  },
  "mpasi-pertama-6-bulan": {
    takeaways: [
      "Start right at 6 months, thick strained texture, 2 to 3 times daily.",
      "Daily animal protein: egg, fish, or chicken.",
      "Step texture monthly. Minced at 9 months, family food at 12.",
    ],
    sections: [
      {
        h: "Basic rules",
        p: [
          "Breastmilk stays main to age 2. Solids complement, not replace.",
          "First texture: thick strained, not dripping off the spoon. 3 to 5 spoons growing gradually.",
          "Wash hands, cook well done, serve warm. Discard saliva touched leftovers after 2 hours.",
        ],
      },
      {
        h: "Easy week menu",
        p: [
          "Monday: rice porridge plus egg plus spinach. Tuesday: plus catfish plus carrot. Wednesday: plus chicken plus pumpkin.",
          "Thursday: plus chicken liver plus beans. Friday: plus mackerel plus tomato. Weekend: repeat favorites.",
          "Add 1 spoon oil or coconut milk per portion for energy. Fruit as snacks.",
        ],
      },
      {
        h: "Allergy and food refusal",
        p: [
          "Introduce 1 new food every 2 days. Watch rashes, repeat vomiting, or breathing trouble after certain foods.",
          "Occasional mouth shutting is normal. Never force. Vary menus, eat together, limit distractions.",
        ],
      },
      {
        h: "6 to 8 month meal plan",
        p: [
          "06.00 milk, 08.00 strained porridge, 10.00 fruit, 12.00 strained porridge, 15.00 milk plus snack, 18.00 strained porridge, night milk on demand.",
          "Grow portions weekly. Target by month 8: 3 meals plus 1 snack.",
        ],
      },
    ],
    danger: "Go for heavy vomiting and diarrhea after solids, spreading rash plus breathlessness, weight loss 2 months straight, or food refusal over 2 weeks.",
    faqs: [
      { q: "Instant baby food allowed?", a: "Fine occasionally in emergencies. Pick no added sugar. Home cooking stays main." },
      { q: "When salt and sugar?", a: "Under 1 year avoid added salt and sugar. Natural food taste suffices." },
    ],
  },
  "usg-kehamilan-kapan": {
    takeaways: [
      "8 to 12 week scan confirms age and baby count.",
      "18 to 22 week scan checks complete organs.",
      "Bring old results each scan for comparison.",
    ],
    sections: [
      {
        h: "Ideal 3 time schedule",
        p: [
          "Trimester 1 weeks 8 to 12: confirm womb pregnancy, count age, hear heartbeat.",
          "Trimester 2 weeks 18 to 22: head, heart, bone, placenta anatomy screening.",
          "Trimester 3 weeks 32 to 36: position, fluid, weight estimate, cord blood flow.",
        ],
      },
      {
        h: "Reading abbreviations",
        p: [
          "GA pregnancy age, EDD due date, BPD head diameter, FL thigh length, AC belly circle.",
          "AFI fluid index. Normal 8 to 18. Below means oligohydramnios needing tight watch.",
        ],
      },
      {
        h: "Scan limits",
        p: [
          "Weight estimates can miss 10 to 15 percent. Do not panic over 1 out of range number.",
          "2D suffices for screening. 4D is entertainment, not medical need. Doubtful results get fetomaternal referral.",
        ],
      },
    ],
    danger: "Check for very low fluid, placenta covering the birth path in trimester 3, or no heartbeat.",
    faqs: [
      { q: "Is ultrasound safe for baby?", a: "Yes. No radiation, safe per decades of studies. Follow advised schedules only." },
      { q: "May we know the gender?", a: "Yes if clearly seen, usually after week 18. Accuracy above 90 percent." },
    ],
  },
  "preeklampsia-waspada": {
    takeaways: [
      "Pressure 140/90 plus after week 20 needs evaluation.",
      "Severe headache, blur, upper belly pain, sudden swelling are alarms.",
      "Delivery is the only definitive cure. Never delay care.",
    ],
    sections: [
      {
        h: "What preeclampsia is",
        p: [
          "High pressure plus urine protein or organ trouble after week 20. Can escalate within days.",
          "High risk: first pregnancy, over 35, twins, obesity, hypertension or preeclampsia history.",
        ],
      },
      {
        h: "5 alarm signs",
        p: [
          "Severe headache resisting pills, blurry or double vision, right upper belly pain.",
          "Sudden face and hand swelling, reduced urine, pressure 140/90 or more on 2 readings.",
        ],
      },
      {
        h: "What to do",
        p: [
          "Remeasure after 15 minutes rest. If still high, go the same day.",
          "Bring pressure notes, lab results, KIA book. No pressure pills without prescription.",
          "Left side rest aids blood flow. Keep tight checks until birth.",
        ],
      },
    ],
    danger: "Go to ER for seizures, breathlessness, chest pain, lost vision, or pressure above 160/110.",
    faqs: [
      { q: "Can preeclampsia be prevented?", a: "Risk drops with routine ANC, enough calcium, and low dose aspirin for high risk per doctor prescription." },
      { q: "Must birth be cesarean?", a: "Not always. Depends on pregnancy age and mom baby condition. Doctors pick the safest." },
    ],
  },
  "diabetes-gestasional": {
    takeaways: [
      "Glucose screening at weeks 24 to 28, earlier if at risk.",
      "Small rice portions, protein each meal, stop sweet drinks.",
      "20 minute walks after meals lower sugar markedly.",
    ],
    sections: [
      {
        h: "Who is at risk",
        p: [
          "Over 25 with obesity, prior over 4 kg baby, family diabetes, or high sugar last pregnancy.",
          "Signs hide well: constant thirst, frequent pee, fatigue. Hence mandatory screening, not waiting.",
        ],
      },
      {
        h: "Daily meal setup",
        p: [
          "Half plate rice, swap some for corn or sweet potato. Animal protein each meal. 2 veggie bowls.",
          "Whole fruit not juice. Stop sweet tea, boba, wet cakes. Snack boiled peanuts or eggs.",
          "Relaxed 20 minute walks after big meals. Note fasting and 2 hour sugars if asked.",
        ],
      },
      {
        h: "If uncontrolled",
        p: [
          "Big babies complicate vaginal birth, newborn sugar drops, cesarean risk rises.",
          "Good news: sugar usually normalizes after birth. Recheck 6 to 12 weeks postpartum.",
        ],
      },
    ],
    danger: "Go for fasting sugar above 200, endless vomiting, fast deep breathing, or reduced fetal movement.",
    faqs: [
      { q: "Need insulin shots?", a: "Most manage with diet and activity. Insulin only for diet resistant sugar, per doctor." },
      { q: "May I fast?", a: "Diabetic pregnant moms should not full fast. Consult doctors for adjustments." },
    ],
  },
  "tidur-trimester-3": {
    takeaways: [
      "Left side sleep best for blood flow.",
      "Pillow between knees and under belly eases pain.",
      "Cut fluids 2 hours before bed to stop nightly pee trips.",
    ],
    sections: [
      {
        h: "Best position",
        p: [
          "Left side boosts blood to baby and kidneys. Right side fine alternately when sore.",
          "Avoid long back lying after week 28, it presses big vessels and dizzy spells.",
          "Prop the back 30 degrees with pillows when breathless. Half sitting helps acid reflux.",
        ],
      },
      {
        h: "Night complaints",
        p: [
          "Leg cramps: straighten leg, pull toes toward knee. Enough calcium and magnesium from milk and nuts.",
          "Frequent pee: cut fluids 2 hours before bed, chase fluids in daytime.",
          "Back ache: warm shower before bed and light lower back massage.",
        ],
      },
      {
        h: "Sleep routine",
        p: [
          "Screens off 30 minutes before bed. Dark, cool, quiet room.",
          "Unslept in 20 minutes, rise for calm activity then retry. Avoid nightly all nighters.",
        ],
      },
    ],
    danger: "Check heavy snoring with breath stops, sudden leg swelling, or repeated morning headaches.",
    faqs: [
      { q: "Sleeping pills allowed?", a: "No free sleeping pills. Ask the midwife for safe advice beyond 1 week insomnia." },
      { q: "Ideal hours?", a: "Target 7 to 9 hours including a 30 minute nap. Quality beats mere length." },
    ],
  },
  "teknik-mengejan": {
    takeaways: [
      "Push only at full dilation with urge.",
      "Chin to chest, round back, hold breath, push down like pooping.",
      "Rest between contractions to save energy.",
    ],
    sections: [
      {
        h: "When to start pushing",
        p: [
          "Wait for the midwife call: dilation 10 and strong poop urge. Early pushing tires and swells the birth path.",
          "Between contractions breathe normally and relax. Save energy for next pushes.",
        ],
      },
      {
        h: "Pushing steps",
        p: [
          "As contraction comes, deep breath in, chin to chest, hold knees or a pole.",
          "Hold breath and push down hard 10 seconds. Repeat 2 to 3 times per contraction.",
          "Do not scream wide mouthed. Energy escapes to the face, not downward.",
        ],
      },
      {
        h: "Helping positions",
        p: [
          "Half sitting is most common. Supported squatting widens the pelvis if allowed.",
          "Left side fits fatigue or recovering baby heartbeat. Follow midwife direction.",
        ],
      },
    ],
    danger: "Midwives act for dropping baby heartbeat, heavy mom fatigue, or stalled dilation. Trust episiotomy and referral calls.",
    faqs: [
      { q: "Normal pushing length?", a: "First babies 1 to 2 hours, next ones 15 to 60 minutes. Longer gets evaluated." },
      { q: "Drink while pushing?", a: "Sips of water between contractions if unrestricted. Avoid heavy meals." },
    ],
  },
  "pendamping-persalinan": {
    takeaways: [
      "Main duties: time contractions, guide breath, massage back.",
      "Ready documents, snacks, charger. Never panic first.",
      "Respect mom and midwife calls in the birth room.",
    ],
    sections: [
      {
        h: "Before the day",
        p: [
          "Join at least 1 pregnancy class. Memorize labor signs and facility routes.",
          "Ready the bag, documents, cash, leave permits. Keep phones on 24 hours from week 37.",
        ],
      },
      {
        h: "During contractions",
        p: [
          "Time the contraction pattern. Guide 4 in 6 out breaths. Fist massage the lower back.",
          "Offer water every 30 minutes. Help switch positions every 20 minutes. Speak up when mom tires.",
        ],
      },
      {
        h: "After baby arrives",
        p: [
          "Support skin to skin by not grabbing baby. Few photos, prioritize mom baby contact.",
          "Handle paperwork so mom focuses nursing. Praise calms better than advice.",
        ],
      },
    ],
    danger: "Companions must call staff for heavy bleeding, seizures, or silent blue babies.",
    faqs: [
      { q: "May husbands enter birth rooms?", a: "Most facilities allow 1 companion. Ask your chosen facility rules from ANC." },
      { q: "Husband fears blood?", a: "Still assist from the head side guiding breath. Tell the midwife your comfort limits." },
    ],
  },
  "senam-nifas": {
    takeaways: [
      "Day 1: side turns and sitting. Kegels from day 2 if comfy.",
      "Week 2: 10 minute walks. Week 6: full sport after checkup.",
      "Stop for growing bleeding or sharp pain.",
    ],
    sections: [
      {
        h: "First week",
        p: [
          "Day 1: side turns in bed, sit on bed edge. Belly breathing practice.",
          "Days 2 to 7: 5 second Kegels, 10 reps, 3 sessions daily. 5 minute indoor walks.",
        ],
      },
      {
        h: "Weeks 2 to 6",
        p: [
          "Relaxed 10 minute walks growing to 30. Babywear ergonomically if comfy.",
          "Avoid heavy lifting, sit ups, running until the 6 week all clear.",
        ],
      },
      {
        h: "After the 6 week check",
        p: [
          "Gradual swimming, yoga, light running. Continue Kegels 3 months for a strong pelvic floor.",
          "Cesarean moms follow the same once passing gas, with doctor permission.",
        ],
      },
    ],
    danger: "Stop and check for fresh growing bleeding, sharp belly pain, heavy dizziness, or open wounds.",
    faqs: [
      { q: "Intimacy again when?", a: "Usually after 6 weeks with healed wounds. Discuss family planning too." },
      { q: "Belly still bulging, normal?", a: "Normal to 3 months. Mild diastasis recti improves with gradual deep core work." },
    ],
  },
  "kb-pasca-salin": {
    takeaways: [
      "Fertility can return before the first period. Do not wait for it.",
      "IUD, implant, 3 month shots are nursing safe.",
      "Discuss family planning before facility discharge or by week 6.",
    ],
    sections: [
      {
        h: "Why start fast",
        p: [
          "Ovulation can occur week 3 postpartum despite no period and nursing. Many surprise pregnancies happen here.",
          "Under 2 year gaps raise prematurity and mom anemia risks.",
        ],
      },
      {
        h: "Nursing safe options",
        p: [
          "IUD fits right after placenta birth or at 6 weeks. Implants anytime after birth.",
          "3 month shots from week 6. Nursing pills daily at the same hour.",
          "Avoid combo pills in the first 6 weeks as they suppress milk.",
        ],
      },
      {
        h: "LAM as a bridge",
        p: [
          "Exclusive nursing, baby under 6 months, no period gives 98 percent cover. All three terms are strict.",
          "Still ready the next method before any term lapses.",
        ],
      },
    ],
    danger: "Check heavy bleeding after IUD, severe belly pain, fever, or missing IUD threads.",
    faqs: [
      { q: "Does family planning dry milk?", a: "IUD, implant, 3 month shots proven not to cut milk. Only early combo pills to avoid." },
      { q: "Intimacy again when?", a: "Usually after 6 weeks with healed wounds. Ideally protected before that." },
    ],
  },
  "iud-implan-suntik": {
    takeaways: [
      "IUD and implant top 99 percent effective and last years.",
      "Shots are easy but need 1 or 3 month discipline.",
      "All are stoppable with returning fertility.",
    ],
    sections: [
      {
        h: "IUD",
        p: [
          "Copper 10 years, hormonal 5 years. 5 minute facility insertion. Heavier periods the first 3 months then stable.",
          "Fits rare checkup wishes. Thread check 1 month after fitting.",
        ],
      },
      {
        h: "Implant",
        p: [
          "Small upper arm rod, lasts 3 years. Irregular or stopped periods, normal and safe.",
          "Fits nursing and forgetful schedules. Removed anytime for pregnancy plans.",
        ],
      },
      {
        h: "Injection",
        p: [
          "1 or 3 month shots. Easy and private. Common effects: irregular periods and 1 to 2 kg gain.",
          "Needs on schedule visits. Fertility returns 4 to 10 months average after stopping 3 month shots.",
        ],
      },
    ],
    danger: "Check severe belly pain, very heavy bleeding, heavy dizziness, or lost IUD threads.",
    faqs: [
      { q: "Which is cheapest?", a: "Long term IUD and implant cost least per year. Many health centers free with insurance." },
      { q: "Switch methods?", a: "Anytime. Consult transitions to avoid unprotected gaps." },
    ],
  },
  "memandikan-bayi": {
    takeaways: [
      "Ready everything before undressing baby.",
      "Lukewarm water, face first downward, diaper area last.",
      "Never leave baby alone in water even a second.",
    ],
    sections: [
      {
        h: "2 minute prep",
        p: [
          "Ready lukewarm tub, 2 cloths, towel, clothes, diaper, telon oil within arm reach.",
          "Test heat with inner elbow. Warmly comfy, not hot. Warm draft free room.",
        ],
      },
      {
        h: "Bathing order",
        p: [
          "Wipe face and head first with soap free cloth. Then front and back body with a little baby soap.",
          "Diaper area last. Lift supporting neck and bottom. 5 to 10 minutes total suffices.",
          "Before cord fall, sponge bathe without soaking.",
        ],
      },
      {
        h: "After bath",
        p: [
          "Dry every fold: neck, armpits, groin. Thin telon oil layer.",
          "Dress and hat at once against chills. Once daily enough, twice when sweaty.",
        ],
      },
    ],
    danger: "Delay soaking baths and check for pus filled cords, baby fever, or blistered pus filled skin.",
    faqs: [
      { q: "Daily soap allowed?", a: "Gentle baby soap fine, but 2 to 3 times weekly suffices. Water only other days." },
      { q: "Baby cries at baths?", a: "Normal at first. Soft talking, slow moves, no cold water. Usually used to it in 2 weeks." },
    ],
  },
  "kolik-bayi": {
    takeaways: [
      "Colic: crying over 3 hours, 3 days weekly, healthy nursing baby.",
      "5S soothe: swaddle, side, shush, swing, suck.",
      "Colic ends alone at 3 to 4 months.",
    ],
    sections: [
      {
        h: "Recognize colic",
        p: [
          "Rule of 3: crying over 3 hours daily, over 3 days weekly, over 3 weeks. Peaks at 6 weeks.",
          "Not colic with fever, projectile vomiting, bloody stool, or refusing feeds. That is illness, go to a facility.",
        ],
      },
      {
        h: "5S technique",
        p: [
          "Swaddle: snug wrap with loose hips. Side: sideways hold on the arm.",
          "Shush: shh sound near the ear mimicking the womb. Swing: gentle rhythmic rocking. Suck: offer nursing or a clean finger.",
        ],
      },
      {
        h: "Guard parent sanity",
        p: [
          "Take turns with your partner. Lay baby safe in bed and rest 10 minutes when emotions peak.",
          "Never shake a baby. Shaking kills. Ask family or neighbors for help.",
        ],
      },
    ],
    danger: "Not colic with fever, projectile vomiting, black or bloody stool, breathlessness, or limpness. Go at once.",
    faqs: [
      { q: "Change milk or mom diet?", a: "Rarely needed. Evaluate 2 weeks first. Do not stop breastfeeding without professional advice." },
      { q: "Safe colic medicine?", a: "No proven drug exists. Simethicone may be tried with limited effect. Focus on soothing." },
    ],
  },
  "demam-anak": {
    takeaways: [
      "Fever is 38 degrees plus on thermometers, not hands.",
      "Paracetamol 10 to 15 mg per kg every 4 to 6 hours.",
      "Under 3 month fever goes straight to a facility.",
    ],
    sections: [
      {
        h: "Measure right",
        p: [
          "Digital armpit thermometers add 0.5 degrees, rectal most accurate for babies. Measure every 4 hours in fever.",
          "Note hours and numbers. Notes drive doctor decisions.",
        ],
      },
      {
        h: "Home care",
        p: [
          "Warm compress forehead and folds, never cold water or alcohol. One thin clothing layer.",
          "More fluids: breastmilk, water, soup. Paracetamol 10 to 15 mg per kg body weight every 4 to 6 hours, max 4 daily.",
          "No thick blankets, no forced feeding. Observe 24 to 72 hours.",
        ],
      },
      {
        h: "Doctor limits",
        p: [
          "Under 3 month fever at any number. Fever over 3 days. Seizures, breathlessness, dehydration, non fading rashes.",
          "Post vaccine fever of 1 to 2 days is normal. Beyond that get checked.",
        ],
      },
    ],
    danger: "Go to ER for seizures, breathlessness, stiff neck, heavy dehydration, or limp unresponsive babies.",
    faqs: [
      { q: "Cold compress allowed?", a: "No. Cold water triggers shivering and rising heat. Use lukewarm water." },
      { q: "Antibiotics needed?", a: "Viral fevers need none. Only doctors decide after checks." },
    ],
  },
  "tumbuh-gigi": {
    takeaways: [
      "First teeth appear 6 to 10 months, full 20 teeth by age 3.",
      "Drooling, biting, fussiness are normal. High fever is not teething.",
      "Cold teethers and gum massage soothe. Brush from the first tooth.",
    ],
    sections: [
      {
        h: "Eruption order",
        p: [
          "6 to 10 months: 2 lower front teeth. 8 to 12 months: 2 upper front. 9 to 16 months: sides.",
          "13 to 24 months: molars and canines. All 20 milk teeth complete around age 3.",
        ],
      },
      {
        h: "Normal vs not signs",
        p: [
          "Normal: heavy drooling, object biting, fussiness, 2 to 3 day appetite dips, swollen gums.",
          "Not teething: fever above 38.5, heavy diarrhea, wide rashes. Those are infections, get checked.",
        ],
      },
      {
        h: "Relief and care",
        p: [
          "Cold fridge teethers, cold spoons, or 2 minute clean finger gum massage.",
          "Rice grain fluoride toothpaste twice daily from the first tooth. First dental visit at age 1.",
        ],
      },
    ],
    danger: "Check fever above 2 days, dehydrating diarrhea, or swollen pus filled gums.",
    faqs: [
      { q: "Teething gels safe?", a: "Avoid benzocaine gels for babies. Cold teethers and gum massage are safer." },
      { q: "No teeth at age 1?", a: "Still normal to 15 months. Consult past that with zero teeth." },
    ],
  },
};
