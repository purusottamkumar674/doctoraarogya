export const clinic = {
  name: "Aarogya Chiropractic & Physiotherapy Centre",
  doctorName: "Dr. Sarvesh Kumar Tiwari",
  doctorRole: "Physiotherapist & Chiropractor",
  tagline: "Move Better. Live Better. Pain-Free Life Starts Here.",
  taglineHindi: "दवाओं पर निर्भर नहीं, सही कारण का वैज्ञानिक उपचार",
  phone: "7488185499",
  phoneHref: "tel:+917488185499",
  whatsapp:
    "https://wa.me/917488185499?text=" +
    encodeURIComponent("Namaste, I would like to book a physiotherapy/chiropractic appointment."),
  email: "care@aarogyachiropractic.in",
  address:
    "Digha Kurji Road, Near Kurji More, Opposite Gate No.66, Vindhyawasini Market, Patna – 800010",
  mapsQuery: "Aarogya Chiropractic and Physiotherapy Centre Digha Kurji Road Patna",
  hours: [
    { day: "Monday – Saturday", time: "9:00 AM – 1:00 PM, 4:00 PM – 8:00 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  headline: string;
  subline: string;
  imageQuery: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-doctor",
    eyebrow: "Chiropractic & Physiotherapy · Patna",
    headline: "Move Better. Live Better. Pain-Free Life Starts Here.",
    subline: "दवाओं पर निर्भर नहीं, सही कारण का वैज्ञानिक उपचार",
    imageQuery: "physiotherapist treating patient shoulder clinic",
  },
  {
    id: "slide-spine",
    eyebrow: "Root-Cause Diagnosis",
    headline: "We Treat the Cause, Not Just the Pain.",
    subline: "स्पाइन और जोड़ों की सही जांच, सही इलाज की पहली सीढ़ी",
    imageQuery: "human spine model clinic education",
  },
  {
    id: "slide-adjustment",
    eyebrow: "Chiropractic Care",
    headline: "Evidence-Based Chiropractic Adjustment.",
    subline: "अनुभवी हाथों से सुरक्षित और वैज्ञानिक Spinal Adjustment",
    imageQuery: "chiropractor adjustment session back",
  },
  {
    id: "slide-physio",
    eyebrow: "Personalised Rehabilitation",
    headline: "Structured Physiotherapy for Lasting Recovery.",
    subline: "हर मरीज़ के लिए अलग, गोल-आधारित रिकवरी प्लान",
    imageQuery: "physiotherapy clinic exercise equipment session",
  },
];

export const whyChooseUs = [
  { title: "Evidence-Based Treatment", hindi: "वैज्ञानिक आधार पर उपचार" },
  { title: "Personalized Rehabilitation", hindi: "व्यक्तिगत रिकवरी योजना" },
  { title: "Chiropractic Adjustment", hindi: "कायरोप्रैक्टिक समायोजन" },
  { title: "Dry Needling", hindi: "ड्राई नीडलिंग थेरेपी" },
  { title: "Cupping Therapy", hindi: "कपिंग थेरेपी" },
  { title: "Posture Correction", hindi: "पोस्चर सुधार" },
  { title: "Sports Rehabilitation", hindi: "स्पोर्ट्स रिहैबिलिटेशन" },
  { title: "Stroke Rehabilitation", hindi: "स्ट्रोक रिहैबिलिटेशन" },
];

export type Service = {
  slug: string;
  name: string;
  hindi: string;
  summary: string;
  description: string;
  helpsWith: string[];
};

export const services: Service[] = [
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    hindi: "फिजियोथेरेपी",
    summary: "General movement-based rehabilitation for pain, injury and mobility loss.",
    description:
      "Our core physiotherapy programme combines guided exercise, manual techniques and education to restore normal movement patterns — whether the cause is an old injury, poor posture, or general deconditioning.",
    helpsWith: ["Back pain", "Joint stiffness", "Post-injury weakness", "General mobility loss"],
  },
  {
    slug: "chiropractic-adjustment",
    name: "Chiropractic Adjustment",
    hindi: "कायरोप्रैक्टिक",
    summary: "Precise spinal manipulation to correct alignment and relieve nerve pressure.",
    description:
      "Using controlled, evidence-based manipulation techniques, Dr. Tiwari corrects spinal and joint misalignment that contributes to chronic pain — often providing rapid relief alongside longer-term rehabilitation.",
    helpsWith: ["Neck pain", "Back pain", "Sciatica", "Slip disc", "Postural imbalance"],
  },
  {
    slug: "dry-needling",
    name: "Dry Needling",
    hindi: "ड्राई नीडलिंग",
    summary: "Targeted needle therapy that releases tight, painful trigger points in muscle.",
    description:
      "Fine needles are inserted into specific muscle trigger points to release tension, improve blood flow and reduce referred pain — especially effective for stubborn muscular knots that don't respond to stretching alone.",
    helpsWith: ["Muscle knots", "Tennis elbow", "Neck & shoulder tightness", "Sports injury"],
  },
  {
    slug: "cupping-therapy",
    name: "Cupping Therapy",
    hindi: "कपिंग थेरेपी",
    summary: "Suction-based therapy that eases muscle tension and improves circulation.",
    description:
      "Cupping draws blood flow to tight, restricted tissue, helping loosen fascia and muscle adhesions. It's often combined with manual therapy for faster relief in chronic muscular pain.",
    helpsWith: ["Chronic muscle tightness", "Back pain", "Poor circulation", "Sports recovery"],
  },
  {
    slug: "manual-therapy",
    name: "Manual Therapy",
    hindi: "मैनुअल थेरेपी",
    summary: "Hands-on joint and soft-tissue mobilization for pain relief and mobility.",
    description:
      "Skilled, hands-on mobilization of joints and soft tissue reduces stiffness and pain while restoring normal movement — often the first step before active exercise therapy begins.",
    helpsWith: ["Frozen shoulder", "Joint stiffness", "Post-surgical tightness", "Sports injury"],
  },
  {
    slug: "electrotherapy",
    name: "Electrotherapy",
    hindi: "इलेक्ट्रोथेरेपी",
    summary: "TENS, IFT and ultrasound-based modalities for pain relief and healing.",
    description:
      "Electrotherapy modalities like TENS, IFT and therapeutic ultrasound reduce pain and inflammation and support tissue healing — commonly used alongside manual and exercise therapy.",
    helpsWith: ["Acute pain", "Inflammation", "Muscle spasm", "Post-injury swelling"],
  },
  {
    slug: "exercise-therapy",
    name: "Exercise Therapy",
    hindi: "एक्सरसाइज थेरेपी",
    summary: "Structured, progressive strengthening and mobility programmes.",
    description:
      "A carefully sequenced exercise programme rebuilds strength, flexibility and control — the foundation of long-term recovery and re-injury prevention for almost every condition we treat.",
    helpsWith: ["Chronic pain", "Post-surgery recovery", "Postural problems", "General weakness"],
  },
  {
    slug: "sports-rehab",
    name: "Sports Rehabilitation",
    hindi: "स्पोर्ट्स रिहैब",
    summary: "Sport-specific recovery protocols for athletes at every level.",
    description:
      "From ligament sprains to muscle tears, our sports rehab programmes are built around your sport and season — progressing from pain control to strength, agility and return-to-play testing.",
    helpsWith: ["Ligament sprain", "Muscle strain", "Tennis elbow", "Post-injury conditioning"],
  },
  {
    slug: "neurological-rehab",
    name: "Neurological Rehabilitation",
    hindi: "न्यूरोलॉजिकल रिहैब",
    summary: "Movement-focused recovery for stroke, paralysis and nerve conditions.",
    description:
      "Using task-specific, repetitive movement training, we help the brain and body relearn coordination, balance and independence after stroke, paralysis or nerve injury.",
    helpsWith: ["Stroke recovery", "Paralysis", "Bell's palsy", "Balance disorders"],
  },
  {
    slug: "home-visit",
    name: "Home Visit Physiotherapy",
    hindi: "होम विजिट फिजियोथेरेपी",
    summary: "Clinic-quality physiotherapy delivered at your home.",
    description:
      "For elderly or immobile patients, our home-visit service brings assessment, manual therapy and guided exercise directly to your home — maintaining continuity of care without the travel.",
    helpsWith: ["Elderly patients", "Post-surgery patients", "Stroke patients", "Limited mobility"],
  },
];

export type Condition = {
  slug: string;
  name: string;
  hindi: string;
  summary: string;
  whatIs: string;
  causes: string[];
  symptoms: string[];
  diagnosis: string;
  treatmentServiceSlugs: string[];
  recovery: string;
  selfCare: string[];
  faqs: { q: string; a: string }[];
};

export const conditions: Condition[] = [
  {
    slug: "neck-pain",
    name: "Neck Pain",
    hindi: "गर्दन का दर्द",
    summary: "Persistent or sudden pain in the neck, often linked to posture or strain.",
    whatIs:
      "Neck pain is discomfort, stiffness or reduced movement in the cervical spine, ranging from mild strain to pain radiating into the shoulders and arms.",
    causes: [
      "Prolonged desk or mobile phone use (\"tech neck\")",
      "Poor sleeping posture",
      "Muscle strain from sudden movement",
      "Cervical spondylosis or disc degeneration",
      "Whiplash-type injury",
    ],
    symptoms: [
      "Stiffness on turning the head",
      "Dull ache or sharp pain in the neck",
      "Headaches starting at the base of the skull",
      "Tingling or numbness into the arm (in more advanced cases)",
    ],
    diagnosis:
      "We assess cervical range of motion, muscle tightness, posture and — where relevant — nerve signs, to determine whether the pain is muscular, joint-related, or disc-related.",
    treatmentServiceSlugs: ["chiropractic-adjustment", "manual-therapy", "exercise-therapy", "electrotherapy"],
    recovery:
      "Mild muscular neck pain often eases within 1–2 weeks of treatment; chronic or disc-related cases typically need a structured 4–6 week programme.",
    selfCare: [
      "Take regular screen breaks and adjust monitor height",
      "Avoid sleeping on your stomach",
      "Apply warm compress for muscular stiffness",
      "Avoid prolonged phone use with neck bent downward",
    ],
    faqs: [
      {
        q: "Is neck cracking during chiropractic adjustment safe?",
        a: "When performed by a trained chiropractor with a proper assessment, adjustments are a controlled, evidence-based technique — not the uncontrolled cracking people sometimes imagine.",
      },
      {
        q: "Can neck pain be caused by phone use?",
        a: "Yes — prolonged forward head posture from looking down at phones is one of the most common causes we see, often called \"tech neck\".",
      },
    ],
  },
  {
    slug: "back-pain",
    name: "Back Pain",
    hindi: "पीठ दर्द",
    summary: "One of the most common reasons patients visit us — from mild strain to disc issues.",
    whatIs:
      "Back pain refers to discomfort anywhere along the spine, from the upper back to the lower back (lumbar region), and can be muscular, joint-related, or linked to a disc problem.",
    causes: [
      "Poor lifting technique",
      "Prolonged sitting with poor posture",
      "Muscle weakness or imbalance",
      "Disc bulge or degeneration",
      "Sedentary lifestyle",
    ],
    symptoms: [
      "Dull ache or sharp pain in the lower or upper back",
      "Stiffness after sitting or standing for long periods",
      "Pain that worsens with bending or lifting",
      "Muscle spasm",
    ],
    diagnosis:
      "A detailed movement assessment identifies whether pain is coming from muscles, joints, or a disc — this determines whether chiropractic adjustment, manual therapy, or a structured exercise plan is the priority.",
    treatmentServiceSlugs: ["chiropractic-adjustment", "manual-therapy", "exercise-therapy", "cupping-therapy"],
    recovery:
      "Simple muscular back pain often improves within 2–3 weeks; disc-related or chronic pain typically requires 6–8 weeks of structured rehabilitation.",
    selfCare: [
      "Bend at the knees, not the back, when lifting",
      "Avoid sitting for more than 45 minutes without standing up",
      "Strengthen your core with guided exercises",
      "Use a supportive chair and mattress",
    ],
    faqs: [
      {
        q: "Is bed rest good for back pain?",
        a: "Complete bed rest is usually not recommended beyond a day or two — gentle, guided movement typically speeds recovery more than prolonged rest.",
      },
      {
        q: "When should I worry about back pain?",
        a: "Seek prompt medical attention if back pain is accompanied by numbness in both legs, loss of bladder control, or follows a major fall or accident.",
      },
    ],
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    hindi: "साइटिका",
    summary: "Pain radiating from the lower back down through the leg, along the sciatic nerve.",
    whatIs:
      "Sciatica is pain that travels along the sciatic nerve — from the lower back through the hip and down one leg — usually caused by irritation or compression of the nerve root.",
    causes: [
      "Lumbar disc bulge or herniation",
      "Piriformis muscle tightness",
      "Spinal stenosis",
      "Prolonged sitting with poor posture",
    ],
    symptoms: [
      "Shooting pain from lower back into the leg",
      "Numbness or tingling in the leg or foot",
      "Pain worsened by sitting or coughing",
      "Weakness in the affected leg (in advanced cases)",
    ],
    diagnosis:
      "Nerve tension tests, movement assessment and a detailed history help us confirm whether the sciatic nerve is being compressed at the disc or muscle level.",
    treatmentServiceSlugs: ["chiropractic-adjustment", "dry-needling", "manual-therapy", "exercise-therapy"],
    recovery:
      "Most sciatica cases respond well to conservative treatment within 4–6 weeks; severe or long-standing cases may take longer and are monitored closely for any surgical red flags.",
    selfCare: [
      "Avoid prolonged sitting; take short walks regularly",
      "Avoid heavy lifting during flare-ups",
      "Gentle nerve-glide stretches as guided by your therapist",
      "Maintain good posture while sitting and driving",
    ],
    faqs: [
      {
        q: "Can sciatica be cured without surgery?",
        a: "Yes — the large majority of sciatica cases improve significantly with conservative treatment like chiropractic care, dry needling and targeted exercise, without needing surgery.",
      },
      {
        q: "How long does sciatica take to heal?",
        a: "Many patients notice meaningful improvement within 3–4 weeks of consistent treatment, though full recovery timelines vary by cause and severity.",
      },
    ],
  },
  {
    slug: "slip-disc",
    name: "Slip Disc",
    hindi: "स्लिप डिस्क",
    summary: "A displaced or herniated spinal disc pressing on nearby nerves.",
    whatIs:
      "A slip disc (herniated or prolapsed disc) occurs when the soft cushioning between spinal vertebrae bulges or ruptures, sometimes pressing on a nearby nerve root and causing pain.",
    causes: [
      "Age-related disc degeneration",
      "Repeated heavy lifting with poor technique",
      "Sudden twisting injury",
      "Prolonged poor posture",
    ],
    symptoms: [
      "Localized back or neck pain",
      "Radiating pain, numbness or tingling along a nerve pathway",
      "Muscle weakness in the affected limb",
      "Pain that worsens with bending or sitting",
    ],
    diagnosis:
      "Clinical examination combined with nerve tension and reflex testing helps assess disc involvement; imaging (MRI) is recommended when needed, often in coordination with your physician.",
    treatmentServiceSlugs: ["chiropractic-adjustment", "manual-therapy", "exercise-therapy", "electrotherapy"],
    recovery:
      "Most slip disc cases improve conservatively over 6–12 weeks; we closely monitor progress and refer for surgical opinion if red-flag symptoms appear.",
    selfCare: [
      "Avoid prolonged bending or twisting during flare-ups",
      "Use correct lifting technique at all times",
      "Follow your prescribed core-stabilisation exercises",
      "Avoid high-impact activity until cleared by your therapist",
    ],
    faqs: [
      {
        q: "Is surgery always required for a slip disc?",
        a: "No — the majority of slip disc cases are managed successfully with conservative treatment. Surgery is generally reserved for cases with severe nerve compression or when conservative care doesn't help.",
      },
      {
        q: "Can I exercise with a slip disc?",
        a: "Yes, guided and appropriate exercise is usually a key part of recovery — but it should be specific to your condition and supervised initially.",
      },
    ],
  },
  {
    slug: "cervical-spondylosis",
    name: "Cervical Spondylosis",
    hindi: "सर्वाइकल स्पॉन्डिलाइसिस",
    summary: "Age-related wear and tear of the cervical spine's discs and joints.",
    whatIs:
      "Cervical spondylosis is a common, age-related condition involving wear of the discs and joints in the neck, which can lead to stiffness, pain and occasionally nerve compression.",
    causes: [
      "Natural disc degeneration with age",
      "Long-term poor posture",
      "Repetitive neck strain",
      "Previous neck injury",
    ],
    symptoms: [
      "Neck stiffness, especially in the morning",
      "Pain that may radiate to the shoulder or arm",
      "Headaches",
      "Occasional dizziness or grinding sensation on neck movement",
    ],
    diagnosis:
      "We assess cervical mobility, posture and nerve involvement to grade severity and design an appropriate, graded treatment plan.",
    treatmentServiceSlugs: ["manual-therapy", "chiropractic-adjustment", "exercise-therapy", "electrotherapy"],
    recovery:
      "While cervical spondylosis is a chronic, ongoing condition, most patients achieve significant symptom control within 4–8 weeks of structured therapy, with maintenance care thereafter.",
    selfCare: [
      "Maintain a neutral neck posture during work",
      "Use a supportive pillow while sleeping",
      "Practice gentle daily neck mobility exercises",
      "Stay physically active to keep surrounding muscles strong",
    ],
    faqs: [
      {
        q: "Is cervical spondylosis permanent?",
        a: "The underlying wear-and-tear changes are generally permanent, but symptoms can be very well managed and often significantly reduced with the right treatment and lifestyle habits.",
      },
    ],
  },
  {
    slug: "frozen-shoulder",
    name: "Frozen Shoulder",
    hindi: "फ्रोज़न शोल्डर",
    summary: "Progressive stiffness and pain that severely limits shoulder movement.",
    whatIs:
      "Frozen shoulder (adhesive capsulitis) is a condition where the shoulder capsule thickens and tightens, causing progressive pain and a significant loss of movement.",
    causes: [
      "Prolonged shoulder immobilisation (e.g. after injury)",
      "Diabetes and certain metabolic conditions",
      "Unknown/idiopathic in many cases",
      "Following surgery or trauma",
    ],
    symptoms: [
      "Gradually worsening shoulder stiffness",
      "Pain that disturbs sleep, especially lying on the affected side",
      "Difficulty reaching overhead or behind the back",
      "Significant loss of shoulder rotation",
    ],
    diagnosis:
      "We assess active and passive shoulder range of motion across all planes to confirm capsular involvement and stage the condition (freezing, frozen, or thawing phase).",
    treatmentServiceSlugs: ["manual-therapy", "exercise-therapy", "electrotherapy", "cupping-therapy"],
    recovery:
      "Frozen shoulder typically resolves over several months to a year; consistent therapy meaningfully shortens the painful phase and improves final range of motion.",
    selfCare: [
      "Perform gentle range-of-motion exercises daily, as guided",
      "Apply heat before stretching",
      "Avoid complete immobilisation of the shoulder",
      "Be patient — recovery is gradual but progressive",
    ],
    faqs: [
      {
        q: "How long does frozen shoulder last?",
        a: "Without treatment it can take 1–3 years to resolve on its own. With structured physiotherapy, most patients see faster, more complete improvement.",
      },
    ],
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    hindi: "घुटने का दर्द",
    summary: "Pain affecting the knee joint from injury, overuse, or degeneration.",
    whatIs:
      "Knee pain can stem from ligament injury, cartilage wear, tendon overuse, or joint degeneration (osteoarthritis), and affects people of all ages.",
    causes: [
      "Ligament sprain (e.g. ACL, MCL)",
      "Meniscus (cartilage) injury",
      "Osteoarthritis / joint wear",
      "Overuse from running or sports",
      "Muscle imbalance around the hip and knee",
    ],
    symptoms: [
      "Pain with walking, climbing stairs or squatting",
      "Swelling around the knee",
      "A feeling of instability or \"giving way\"",
      "Clicking or grinding sensation",
    ],
    diagnosis:
      "We assess knee alignment, ligament stability, muscle strength and movement patterns to identify the true source of pain — often involving the hip and ankle as well.",
    treatmentServiceSlugs: ["exercise-therapy", "manual-therapy", "sports-rehab", "electrotherapy"],
    recovery:
      "Mild strain-related knee pain often improves in 2–4 weeks; ligament or cartilage-related pain typically needs a longer, staged 6–12 week programme.",
    selfCare: [
      "Avoid deep squatting or high-impact activity during flare-ups",
      "Strengthen the quadriceps and hip muscles as guided",
      "Use ice for acute swelling",
      "Maintain a healthy body weight to reduce joint load",
    ],
    faqs: [
      {
        q: "Should I keep walking with knee pain?",
        a: "Gentle, appropriate movement is usually encouraged, but high-impact activity should be reduced until you've been assessed and given a suitable plan.",
      },
    ],
  },
  {
    slug: "tennis-elbow",
    name: "Tennis Elbow",
    hindi: "टेनिस एल्बो",
    summary: "Overuse-related pain on the outer elbow from repetitive gripping or wrist movement.",
    whatIs:
      "Tennis elbow (lateral epicondylitis) is inflammation or micro-tearing of the tendons on the outer elbow, usually from repetitive gripping, lifting, or wrist-extension movements.",
    causes: [
      "Repetitive computer/mouse use",
      "Manual labour with repeated gripping",
      "Racquet sports (though not exclusive to tennis)",
      "Sudden increase in repetitive activity",
    ],
    symptoms: [
      "Pain on the outer elbow, worse with gripping",
      "Weak grip strength",
      "Pain radiating into the forearm",
      "Tenderness when pressing the outer elbow",
    ],
    diagnosis:
      "Resisted wrist extension and grip tests, along with a detailed activity history, confirm tendon involvement and guide treatment intensity.",
    treatmentServiceSlugs: ["dry-needling", "manual-therapy", "exercise-therapy", "electrotherapy"],
    recovery:
      "Mild cases improve within 3–4 weeks; chronic tennis elbow may need 6–10 weeks of progressive loading exercises for full tendon recovery.",
    selfCare: [
      "Reduce repetitive gripping activities temporarily",
      "Use an elbow strap during aggravating activities",
      "Ice the area after activity",
      "Follow a progressive forearm-strengthening programme",
    ],
    faqs: [
      {
        q: "Do I need to play a racquet sport to get tennis elbow?",
        a: "No — most cases we see come from repetitive computer use, manual work, or other daily gripping activities rather than tennis.",
      },
    ],
  },
  {
    slug: "heel-pain",
    name: "Heel Pain",
    hindi: "एड़ी का दर्द",
    summary: "Pain under or behind the heel, commonly from plantar fasciitis.",
    whatIs:
      "Heel pain most commonly comes from plantar fasciitis — inflammation of the band of tissue connecting the heel to the toes — though it can also involve the Achilles tendon.",
    causes: [
      "Prolonged standing on hard surfaces",
      "Unsupportive footwear",
      "Sudden increase in walking or running distance",
      "Tight calf muscles",
    ],
    symptoms: [
      "Sharp heel pain with the first steps in the morning",
      "Pain that eases with movement but returns after rest",
      "Tenderness under the heel",
      "Pain after prolonged standing",
    ],
    diagnosis:
      "We assess foot posture, calf flexibility and gait pattern to identify contributing biomechanical factors alongside the local tissue irritation.",
    treatmentServiceSlugs: ["manual-therapy", "electrotherapy", "exercise-therapy", "dry-needling"],
    recovery:
      "Most heel pain improves within 4–6 weeks with consistent stretching, appropriate footwear, and therapy; chronic cases may take longer.",
    selfCare: [
      "Stretch the calf and plantar fascia daily",
      "Wear supportive, cushioned footwear",
      "Avoid walking barefoot on hard surfaces",
      "Reduce sudden increases in walking/running load",
    ],
    faqs: [
      {
        q: "Will heel pain go away on its own?",
        a: "It can improve slowly on its own, but targeted stretching and therapy usually speeds recovery significantly and prevents recurrence.",
      },
    ],
  },
  {
    slug: "arthritis",
    name: "Arthritis",
    hindi: "गठिया / आर्थराइटिस",
    summary: "Joint pain and stiffness from osteoarthritis or inflammatory arthritis.",
    whatIs:
      "Arthritis refers to inflammation or degeneration of one or more joints, most commonly osteoarthritis (wear-related) or rheumatoid arthritis (autoimmune/inflammatory).",
    causes: [
      "Age-related joint wear (osteoarthritis)",
      "Autoimmune conditions (rheumatoid arthritis)",
      "Previous joint injury",
      "Excess joint loading over time",
    ],
    symptoms: [
      "Joint stiffness, especially in the morning",
      "Pain that worsens with activity or at day's end",
      "Swelling around affected joints",
      "Reduced joint range of motion over time",
    ],
    diagnosis:
      "We evaluate joint range of motion, swelling, and functional limitation to design a therapy plan that protects the joint while preserving movement.",
    treatmentServiceSlugs: ["exercise-therapy", "manual-therapy", "electrotherapy", "home-visit"],
    recovery:
      "Arthritis is a long-term condition; our goal is ongoing symptom control and mobility preservation rather than a fixed \"recovery\" timeline — most patients feel meaningful relief within 4–6 weeks of starting therapy.",
    selfCare: [
      "Stay active with low-impact movement (walking, swimming)",
      "Avoid prolonged joint immobility",
      "Maintain a healthy body weight",
      "Use joint-protection techniques during daily tasks",
    ],
    faqs: [
      {
        q: "Is exercise safe with arthritis?",
        a: "Yes — appropriate, low-impact exercise is one of the most effective ways to manage arthritis pain and preserve joint function long-term.",
      },
    ],
  },
  {
    slug: "sports-injury",
    name: "Sports Injury",
    hindi: "स्पोर्ट्स इंजरी",
    summary: "Acute or overuse injuries sustained during sport or training.",
    whatIs:
      "Sports injuries range from acute sprains, strains and ligament tears to overuse conditions like tendinitis, affecting athletes and recreational players alike.",
    causes: [
      "Sudden impact or awkward landing",
      "Inadequate warm-up",
      "Overtraining or poor load management",
      "Muscle imbalance or weakness",
    ],
    symptoms: [
      "Sudden pain during activity",
      "Swelling or bruising",
      "Reduced strength or range of motion",
      "Instability in the affected joint",
    ],
    diagnosis:
      "A sport-specific assessment identifies the injured structure and its severity, forming the basis of a staged return-to-play plan.",
    treatmentServiceSlugs: ["sports-rehab", "manual-therapy", "exercise-therapy", "electrotherapy"],
    recovery:
      "Recovery timelines vary widely — from 1–2 weeks for mild strains to 8–12 weeks for significant ligament injuries — with return-to-play testing before full clearance.",
    selfCare: [
      "Follow the R.I.C.E. approach (Rest, Ice, Compression, Elevation) immediately after injury",
      "Avoid returning to sport before being cleared",
      "Warm up properly before training or matches",
      "Follow your prescribed strengthening programme",
    ],
    faqs: [
      {
        q: "When can I return to my sport after an injury?",
        a: "This depends on the injury and how you respond to rehabilitation — we use specific strength and function tests before clearing athletes to return.",
      },
    ],
  },
  {
    slug: "paralysis-stroke-rehab",
    name: "Paralysis / Stroke Rehabilitation",
    hindi: "पैरालिसिस / स्ट्रोक रिहैबिलिटेशन",
    summary: "Movement-focused recovery programmes after stroke or paralysis.",
    whatIs:
      "Stroke or paralysis affects the brain's or nerve's ability to control movement on one or more sides of the body. Structured neurological rehabilitation helps the brain and body relearn function.",
    causes: [
      "Stroke (ischemic or haemorrhagic)",
      "Traumatic nerve or spinal cord injury",
      "Bell's palsy and other nerve conditions",
      "Underlying neurological disease",
    ],
    symptoms: [
      "Weakness or loss of movement on one side",
      "Difficulty with balance and walking",
      "Loss of fine motor control",
      "Speech or facial muscle involvement (varies by cause)",
    ],
    diagnosis:
      "We assess motor control, balance, coordination and functional independence to build a staged rehabilitation programme, in coordination with the treating physician.",
    treatmentServiceSlugs: ["neurological-rehab", "exercise-therapy", "manual-therapy", "home-visit"],
    recovery:
      "Neurological recovery is gradual and highly individual — early, consistent rehabilitation in the first months after stroke generally produces the best functional outcomes.",
    selfCare: [
      "Practice prescribed exercises consistently, even in small amounts daily",
      "Use assistive devices as recommended for safety",
      "Fall-proof the home environment",
      "Involve family in supporting daily practice",
    ],
    faqs: [
      {
        q: "How soon after a stroke should physiotherapy start?",
        a: "Early mobilisation, once medically cleared, generally leads to better outcomes — we coordinate closely with your treating physician on timing.",
      },
    ],
  },
  {
    slug: "postural-problems",
    name: "Postural Problems",
    hindi: "पोस्चर संबंधी समस्याएं",
    summary: "Muscle imbalance and pain caused by prolonged poor posture.",
    whatIs:
      "Postural problems develop when prolonged poor positioning — often from desk work — leads to muscle imbalance, joint strain, and chronic discomfort in the neck, shoulders or back.",
    causes: [
      "Prolonged desk/computer work",
      "Poor ergonomic setup",
      "Weak core and postural muscles",
      "Habitual slouching",
    ],
    symptoms: [
      "Rounded shoulders and forward head posture",
      "Chronic neck and upper back tension",
      "Fatigue in postural muscles by end of day",
      "Reduced flexibility in the chest and hip flexors",
    ],
    diagnosis:
      "A full postural assessment identifies which muscle groups are tight versus weak, forming the basis of a targeted correction programme.",
    treatmentServiceSlugs: ["exercise-therapy", "manual-therapy", "chiropractic-adjustment"],
    recovery:
      "Most patients notice improved comfort within 3–4 weeks of consistent postural exercises, with continued improvement over 2–3 months as habits change.",
    selfCare: [
      "Set up your workstation at eye level",
      "Take a movement break every 30–45 minutes",
      "Strengthen the upper back and core muscles",
      "Stretch the chest and hip flexors regularly",
    ],
    faqs: [
      {
        q: "Can posture really be corrected permanently?",
        a: "With consistent exercise and daily awareness, most postural patterns can be meaningfully and durably improved, though it takes sustained effort.",
      },
    ],
  },
];

export function getConditionsForService(serviceSlug: string) {
  return conditions.filter((c) => c.treatmentServiceSlugs.includes(serviceSlug));
}

export function getServicesForCondition(condition: Condition) {
  return services.filter((s) => condition.treatmentServiceSlugs.includes(s.slug));
}

export const patientJourney = [
  { step: "Assessment", body: "A thorough movement and history assessment to understand your condition." },
  { step: "Diagnosis", body: "Identifying the true source of pain — not just where it's felt." },
  { step: "Treatment Plan", body: "A personalised combination of chiropractic, physio and manual therapy." },
  { step: "Rehabilitation", body: "Progressive strengthening and mobility work to rebuild function." },
  { step: "Long-term Prevention", body: "Guidance to prevent recurrence and maintain lasting recovery." },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
  treatment: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rakesh Mehta",
    location: "Kurji, Patna",
    rating: 5,
    quote:
      "Six weeks of chiropractic sessions and my sciatica, which had lasted almost a year, is finally under control.",
    treatment: "Sciatica",
  },
  {
    name: "Sunita Devi",
    location: "Digha, Patna",
    rating: 5,
    quote:
      "After my knee pain got so bad I couldn't climb stairs, the team here got me walking normally again in weeks.",
    treatment: "Knee Pain",
  },
  {
    name: "Aman Kumar",
    location: "Patna",
    rating: 5,
    quote:
      "Tore a ligament playing football and was told three months to recover. I was back on the field in seven weeks.",
    treatment: "Sports Injury",
  },
  {
    name: "Meena Thakur",
    location: "Vindhyawasini Market, Patna",
    rating: 4,
    quote: "My mother's frozen shoulder had limited her for months — home visits made all the difference.",
    treatment: "Frozen Shoulder",
  },
];

export const homeFaqs = [
  {
    q: "क्या Chiropractic सुरक्षित है?",
    a: "हाँ। जब एक प्रशिक्षित और अनुभवी chiropractor द्वारा सही assessment के बाद किया जाए, तो chiropractic adjustment एक सुरक्षित, evidence-based technique है।",
  },
  {
    q: "क्या Slip Disc में Surgery जरूरी होती है?",
    a: "ज्यादातर मामलों में नहीं। अधिकतर slip disc patients conservative treatment जैसे chiropractic, manual therapy और exercise से ही ठीक हो जाते हैं। Surgery केवल गंभीर मामलों में सुझाई जाती है।",
  },
  {
    q: "क्या Sciatica बिना Operation ठीक हो सकता है?",
    a: "हाँ, ज्यादातर sciatica cases 4-6 हफ्तों के सही conservative treatment से significantly बेहतर हो जाते हैं।",
  },
  {
    q: "Dry Needling क्या होता है?",
    a: "Dry Needling में बारीक needles को muscle के tight trigger points में डाला जाता है, जिससे tension release होता है और दर्द कम होता है।",
  },
  {
    q: "कितने Session लगते हैं?",
    a: "यह condition की गंभीरता पर निर्भर करता है — mild cases में 4-6 sessions, chronic cases में 8-12 sessions तक लग सकते हैं। पहली visit में हम एक अनुमानित plan बताते हैं।",
  },
];

export type Article = {
  slug: string;
  title: string;
  titleHindi?: string;
  excerpt: string;
  category: string;
  readTime: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "five-causes-of-neck-pain",
    title: "5 Causes of Neck Pain",
    excerpt: "The most common everyday habits that lead to chronic neck pain — and how to spot them early.",
    category: "Neck & Back",
    readTime: "4 min read",
    body: [
      "Neck pain rarely comes from a single dramatic event — it usually builds up from repeated daily habits.",
      "Looking down at a phone for long periods, sleeping in an awkward position, sitting with rounded shoulders, and carrying heavy bags on one side are among the most frequent causes we see in clinic.",
      "Recognising these patterns early — and correcting posture before pain becomes chronic — is one of the simplest ways to prevent long-term neck problems.",
    ],
  },
  {
    slug: "sciatica-treatment-explained",
    title: "Sciatica Treatment, Explained",
    excerpt: "What actually happens during sciatica treatment, and why most cases don't need surgery.",
    category: "Neck & Back",
    readTime: "5 min read",
    body: [
      "Sciatica treatment typically starts with identifying exactly where the nerve is being compressed — commonly at the disc or through a tight piriformis muscle.",
      "From there, a combination of chiropractic adjustment, dry needling, and targeted nerve-glide exercises helps relieve pressure and restore normal nerve function.",
      "Most patients see meaningful improvement within 3-4 weeks of consistent treatment.",
    ],
  },
  {
    slug: "correct-sitting-posture",
    title: "Correct Sitting Posture: A Quick Guide",
    excerpt: "Simple adjustments to your desk setup that meaningfully reduce back and neck strain.",
    category: "Posture",
    readTime: "3 min read",
    body: [
      "Your screen should sit at eye level, your feet flat on the floor, and your lower back supported by the chair.",
      "Avoid slouching forward toward the keyboard — instead, bring the keyboard closer to you rather than reaching.",
      "Small, consistent posture corrections throughout the day matter more than one perfect sitting position held rigidly.",
    ],
  },
  {
    slug: "exercises-for-office-workers",
    title: "Exercises for Office Workers",
    excerpt: "A short, desk-friendly routine to counter the effects of long sitting hours.",
    category: "Posture",
    readTime: "4 min read",
    body: [
      "Deskbound work tightens the hip flexors and chest while weakening the upper back and core.",
      "A short daily routine — chin tucks, shoulder blade squeezes, hip flexor stretches, and seated spinal rotations — helps counter this imbalance.",
      "Even five minutes of movement every hour meaningfully reduces stiffness by day's end.",
    ],
  },
  {
    slug: "back-pain-myths",
    title: "Back Pain Myths You Should Stop Believing",
    excerpt: "Common misconceptions about back pain that can actually slow down recovery.",
    category: "Recovery Tips",
    readTime: "5 min read",
    body: [
      "One of the most persistent myths is that back pain always requires complete bed rest — in most cases, gentle movement actually speeds recovery.",
      "Another common myth is that an MRI is needed for every back pain case; most mechanical back pain can be diagnosed clinically without imaging.",
      "Understanding what's actually true about back pain helps patients recover with more confidence and less fear of movement.",
    ],
  },
  {
    slug: "dry-needling-benefits",
    title: "Dry Needling Benefits: What the Research Says",
    excerpt: "How dry needling works, and which conditions respond best to it.",
    category: "Chiropractic",
    readTime: "4 min read",
    body: [
      "Dry needling targets tight muscle trigger points directly, often providing faster relief than stretching alone for stubborn muscular pain.",
      "It's particularly effective for conditions like tennis elbow, neck and shoulder tightness, and certain sports injuries.",
      "It's typically combined with manual therapy and exercise for the most lasting results.",
    ],
  },
  {
    slug: "kya-hai-chiropractic",
    title: "कायरोप्रैक्टिक क्या है?",
    titleHindi: "कायरोप्रैक्टिक क्या है?",
    excerpt: "स्पाइन और जोड़ों के इलाज की इस वैज्ञानिक पद्धति को सरल भाषा में समझें।",
    category: "Chiropractic",
    readTime: "4 min read",
    body: [
      "कायरोप्रैक्टिक एक वैज्ञानिक उपचार पद्धति है जिसमें स्पाइन और जोड़ों के सही alignment को नियंत्रित तरीके से ठीक किया जाता है।",
      "इससे नसों पर पड़ने वाला दबाव कम होता है और शरीर की natural healing क्षमता बेहतर होती है।",
      "यह विशेष रूप से गर्दन दर्द, पीठ दर्द और साइटिका जैसी समस्याओं में कारगर साबित होता है।",
    ],
  },
];

export const galleryCategories = [
  "Clinic Photos",
  "Treatment Photos",
  "Exercise Videos",
  "Rehabilitation Videos",
  "Awards",
  "Certificates",
] as const;

export type GalleryItem = {
  id: string;
  category: (typeof galleryCategories)[number];
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Clinic Photos", caption: "Reception & waiting area" },
  { id: "g2", category: "Clinic Photos", caption: "Private treatment room" },
  { id: "g3", category: "Clinic Photos", caption: "Exercise therapy bay" },
  { id: "g4", category: "Treatment Photos", caption: "Chiropractic adjustment session" },
  { id: "g5", category: "Treatment Photos", caption: "Manual therapy for shoulder" },
  { id: "g6", category: "Treatment Photos", caption: "Dry needling session" },
  { id: "g7", category: "Exercise Videos", caption: "Home exercise routine — lower back" },
  { id: "g8", category: "Exercise Videos", caption: "Postural correction routine" },
  { id: "g9", category: "Rehabilitation Videos", caption: "Post-stroke gait training" },
  { id: "g10", category: "Rehabilitation Videos", caption: "Post-surgery knee rehab" },
  { id: "g11", category: "Awards", caption: "Excellence in Physiotherapy, 2023" },
  { id: "g12", category: "Certificates", caption: "Certified Chiropractic Practitioner" },
];
