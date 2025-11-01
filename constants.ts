
import { Question } from './types';

export const ENGLISH_PASSAGE = `Last Saturday, Mehak decided to visit her grandmother, who lived on the outskirts of the city. The morning was cool and breezy, and the streets were still quiet. As she walked towards the bus stop, she noticed a young boy struggling to lift a heavy basket of apples. Without hesitation, Mehak offered to help him. Together, they carried the basket to a nearby shop.

The shopkeeper, an elderly man, thanked Mehak for her kindness and handed her an apple as a reward. Mehak smiled and continued her journey. During the bus ride, she looked out of the window, admiring the golden sunlight that fell on the fields. She thought about how small acts of kindness could brighten someone’s day — even her own.

When she reached her grandmother’s house, she shared the story. Her grandmother listened attentively and said, “Kindness is like a seed, my dear. When you plant it, it grows in ways you cannot imagine.”`;

export const URDU_PASSAGE = `بلبل ایک روایتی پرندہ ہے جو ہر جگہ موجود ہے۔ سوائے وہاں کے جہاں اسے ہونا چاہیے۔ اگر آپ کا خیال ہے کہ آپ نے چڑیا گھر میں بلبل دیکھ لیا ہے تو یقینا کچھ اور ہی دیکھ لیا ہے۔ ہم ہر خوش گلو پرندے کو بلبل سمجھتے ہیں، قصور ہمارا نہیں ہمارے ادب کا ہے۔ شاعروں نے نہ بلبل دیکھی ہے نہ اسے سنا ہے ، کیوں کہ اصلی بلبل اس ملک میں نہیں پائی جاتی ۔ سنا ہے کہ کوہ ہمالیہ کے دامن میں کہیں کہیں بلبل ملتی ہے ، لیکن کوہ ہمالیہ کے دامن میں شاعر نہیں ہوتے۔
عام طور پر بلبل کو آہ و زاری کی دعوت دی جاتی ہے اور رونے پیٹنے کے لیے اکسایا جاتا ہے۔ بلبل کو ایسی باتیں بالکل پسند نہیں۔ ویسے بلبل ہونا کافی مضحکہ خیز ہوتا ہو گا۔ بلبل اور گلاب کے پھول کی افواہ کسی شاعر نے اُڑائی تھی جس نے رات گئے گلاب کی ٹہنی پر بلبل کو نالہ و شیون کرتے دیکھا تھا۔ رات کو عینک کے بغیر کچھ کا کچھ دکھائی دیتا ہے ۔ بلبل پروں سمیت محض چند انچ لمبی ہوتی ہے ، یعنی اگر پروں کو نکالا جائے تو کچھ زیادہ بلبل نہیں بچتی۔
ماہرین کا خیال ہے کہ بلبل کے گانے کی وجہ اس کی غمگین خانگی زندگی ہے، جس کی وجہ یہ ہر وقت کا گانا ہے ۔ دراصل بلبل ہمیں محظوظ کرنے کے لئے نہیں گاتی، اسے اپنے ہی فکر نہیں چھوڑتے۔ بلبل پکے راگ گاتی ہے یا کچے ؟ بہر حال اس سلسلے میں وہ بہت سے موسیقاروں سے بہتر ہے۔ ایک تو وہ گھنٹے بھر کا الاپ نہیں لیتی ، بے سری ہو جائے تو بہانے نہیں کرتی کہ ” ساز والے نکمے ہیں۔ آج گلا خراب ہے “۔ آپ تنگ آجائیں تو خاموش کرا سکتے ہیں۔۔۔۔۔۔۔۔ اور کیا چاہیے۔`;


export const QUESTIONS: Question[] = [
  // Math - 18 Questions
  {
    "subject": "Math",
    "question": "Simplify: 3x + 5x - 2x",
    "options": ["4x", "6x", "8x", "10x"],
    "answer": "6x"
  },
  {
    "subject": "Math",
    "question": "Solve for x: 4x - 7 = 13",
    "options": ["x = 3", "x = 4", "x = 5", "x = 6"],
    "answer": "x = 5"
  },
  {
    "subject": "Math",
    "question": "Evaluate when a = 2, b = -3: 2a² - 3b",
    "options": ["4", "13", "17", "15"],
    "answer": "17"
  },
  {
    "subject": "Math",
    "question": "Factorize: x² + 7x + 10",
    "options": ["(x + 2)(x + 5)", "(x + 10)(x - 1)", "(x + 3)(x + 4)", "(x + 5)(x + 1)"],
    "answer": "(x + 2)(x + 5)"
  },
  {
    "subject": "Math",
    "question": "Expand: 3(x + 4)²",
    "options": ["3x² + 24x + 48", "3x² + 12x + 16", "3x² + 24x + 12", "3x² + 8x + 48"],
    "answer": "3x² + 24x + 48"
  },
  {
    "subject": "Math",
    "question": "If 2x + 3 = 11, what is the value of 5x - 4?",
    "options": ["10", "12", "16", "18"],
    "answer": "16"
  },
  {
    "subject": "Math",
    "question": "The sum of the interior angles of a hexagon is:",
    "options": ["540°", "600°", "720°", "900°"],
    "answer": "720°"
  },
  {
    "subject": "Math",
    "question": "Find the area of a triangle with base = 8 cm and height = 6 cm.",
    "options": ["20 cm²", "24 cm²", "30 cm²", "48 cm²"],
    "answer": "24 cm²"
  },
  {
    "subject": "Math",
    "question": "A circle has radius = 7 cm. Find its circumference (π = 22/7).",
    "options": ["22 cm", "44 cm", "66 cm", "88 cm"],
    "answer": "44 cm"
  },
  {
    "subject": "Math",
    "question": "The diagonals of a rectangle are equal and ___ each other.",
    "options": ["bisect", "intersect", "divide", "parallel"],
    "answer": "bisect"
  },
  {
    "subject": "Math",
    "question": "A triangle has sides 7 cm, 24 cm, 25 cm. Is it right-angled?",
    "options": ["Yes", "No", "Cannot be determined", "Only if 25 is hypotenuse"],
    "answer": "Yes"
  },
  {
    "subject": "Math",
    "question": "In a circle, the line joining the centre and a point on the circle is called the ___",
    "options": ["Chord", "Diameter", "Radius", "Tangent"],
    "answer": "Radius"
  },
  {
    "subject": "Math",
    "question": "A number is increased by 20% and then decreased by 10%. Find the net % change.",
    "options": ["+8%", "+10%", "+9%", "+12%"],
    "answer": "+8%"
  },
  {
    "subject": "Math",
    "question": "Divide Rs. 900 in the ratio 2 : 3 : 4. What is the largest share?",
    "options": ["Rs. 200", "Rs. 300", "Rs. 400", "Rs. 360"],
    "answer": "Rs. 400"
  },
  {
    "subject": "Math",
    "question": "A man walks 3 km north, then 4 km east. Find his displacement.",
    "options": ["5 km", "6 km", "7 km", "4 km"],
    "answer": "5 km"
  },
  {
    "subject": "Math",
    "question": "The mean of 12, 15, 18, x, 25 is 18. Find the value of x.",
    "options": ["20", "22", "24", "26"],
    "answer": "20"
  },
  {
    "subject": "Math",
    "question": "A die is rolled once. Find the probability of getting an even number.",
    "options": ["1/2", "1/3", "2/3", "1/6"],
    "answer": "1/2"
  },
  {
    "subject": "Math",
    "question": "The bar graph shows students in classes 6–9 as 40, 35, 30, 45. Find the average number of students per class.",
    "options": ["35", "37.5", "40", "42.5"],
    "answer": "37.5"
  },
  // Science - 18 Questions
  {
    "subject": "Science",
    "question": "What happens to the angle of refraction when light passes from air to water?",
    "options": ["Increases", "Decreases", "Remains constant", "Remains zero"],
    "answer": "Decreases"
  },
  {
    "subject": "Science",
    "question": "A car accelerates from 0 to 60 km/h in 10 seconds. What is the average acceleration of the car?",
    "options": ["1.67 m/s²", "2.5 m/s²", "3.33 m/s²", "4.17 m/s²"],
    "answer": "1.67 m/s²"
  },
  {
    "subject": "Science",
    "question": "A household uses a 10W LED bulb for 8 hours a day. If the cost of electricity is Rs. 5 per unit, what is the total cost of electricity consumed by the bulb in a month (30 days)?",
    "options": ["Rs. 12", "Rs. 24", "Rs. 36", "Rs. 120"],
    "answer": "Rs. 12"
  },
  {
    "subject": "Science",
    "question": "What happens to the kinetic energy of an object if its velocity is doubled?",
    "options": ["Remains the same", "Increases by a factor of 2", "Increases by a factor of 4", "Decreases by a factor of 4"],
    "answer": "Increases by a factor of 4"
  },
  {
    "subject": "Science",
    "question": "A lens converges light rays to form a real image. What type of lens is it?",
    "options": ["Convex lens", "Concave lens", "Plane lens", "Cylindrical lens"],
    "answer": "Convex lens"
  },
  {
    "subject": "Science",
    "question": "A beam of light passes from air into a prism, is reflected off a mirror, and then passes through a narrow slit. What phenomena occur in sequence?",
    "options": ["Refraction, reflection, diffraction", "Reflection, refraction, diffraction", "Diffraction, reflection, refraction", "Refraction, diffraction, reflection"],
    "answer": "Refraction, reflection, diffraction"
  },
  {
    "subject": "Science",
    "question": "Which of the following is an example of a physical change?",
    "options": ["Burning paper", "Rusting of iron", "Melting of ice", "Baking a cake"],
    "answer": "Melting of ice"
  },
  {
    "subject": "Science",
    "question": "Which statement is true about ions?",
    "options": ["They have equal numbers of protons and electrons", "They are always negatively charged", "They are formed when atoms gain or lose electrons", "They have more neutrons than protons"],
    "answer": "They are formed when atoms gain or lose electrons"
  },
  {
    "subject": "Science",
    "question": "When magnesium burns in air, a white powder (magnesium oxide) forms. This is an example of:",
    "options": ["Physical change", "Endothermic change", "Chemical change", "Reversible change"],
    "answer": "Chemical change"
  },
  {
    "subject": "Science",
    "question": "Sodium (Na) has 1 valence electron, while Chlorine (Cl) has 7 valence electrons. The compound they form is:",
    "options": ["Covalent", "Ionic", "Metallic", "Polar covalent"],
    "answer": "Ionic"
  },
  {
    "subject": "Science",
    "question": "The pH scale measures:",
    "options": ["The temperature of a solution", "The acidity or basicity of a solution", "The amount of solute in solution", "The atomic mass of elements"],
    "answer": "The acidity or basicity of a solution"
  },
  {
    "subject": "Science",
    "question": "Which of the following does not affect solubility?",
    "options": ["Temperature", "Pressure", "Stirring", "Shape of container"],
    "answer": "Shape of container"
  },
  {
    "subject": "Science",
    "question": "In the adaptive immune system, white blood cells:",
    "options": ["Eat pathogens", "Produce antibodies", "Produce vaccines", "Produce serum"],
    "answer": "Produce antibodies"
  },
  {
    "subject": "Science",
    "question": "What is the scientific name for a microorganism that causes a disease?",
    "options": ["Pathogen", "Parasite", "Protein", "Predator"],
    "answer": "Pathogen"
  },
  {
    "subject": "Science",
    "question": "Typhoid and Polio spread by faecal oral route. To prevent such diseases, we should:",
    "options": ["Control mosquitoes", "Control air pollution", "Improve hospitals", "Improve sanitation and hygiene condition"],
    "answer": "Improve sanitation and hygiene condition"
  },
  {
    "subject": "Science",
    "question": "Rhizobium is a group of bacteria that live in the roots of some plants. They fix nitrogen for plants and get food in return. The relationship is:",
    "options": ["Parasitism", "Commensalism", "Mutualism", "Competition"],
    "answer": "Mutualism"
  },
  {
    "subject": "Science",
    "question": "In which part of a plant cell does respiration take place?",
    "options": ["Cell membrane", "Chromosomes", "Mitochondria", "Nucleus"],
    "answer": "Mitochondria"
  },
  {
    "subject": "Science",
    "question": "The human circulatory system is an example of:",
    "options": ["Single closed circulation", "Double closed circulation", "Single open circulation", "Double open circulation"],
    "answer": "Double closed circulation"
  },
  // English - 15 Questions
  {
    "subject": "English",
    "question": `Read the passage and answer the question:\n\n${ENGLISH_PASSAGE}\n\nThe word “quiet” in the sentence “the streets were still quiet” is a:`,
    "options": ["Noun", "Verb", "Adjective", "Adverb"],
    "answer": "Adjective"
  },
  {
    "subject": "English",
    "question": `Read the passage and answer the question:\n\n${ENGLISH_PASSAGE}\n\nThe phrase “without hesitation” functions as a:`,
    "options": ["Noun phrase", "Adverbial phrase", "Verb phrase", "Prepositional clause"],
    "answer": "Adverbial phrase"
  },
  {
    "subject": "English",
    "question": `Read the passage and answer the question:\n\n${ENGLISH_PASSAGE}\n\nThe tense used in the passage is mainly:`,
    "options": ["Present simple", "Present continuous", "Past simple", "Past perfect"],
    "answer": "Past simple"
  },
  {
    "subject": "English",
    "question": `Read the passage and answer the question:\n\n${ENGLISH_PASSAGE}\n\nWhat does the clause “who lived on the outskirts of the city” describe?`,
    "options": ["The city", "Her grandmother", "The bus stop", "Mehak"],
    "answer": "Her grandmother"
  },
  {
    "subject": "English",
    "question": `Read the passage and answer the question:\n\n${ENGLISH_PASSAGE}\n\nWhich sentence from the passage expresses a moral or idea rather than a fact?`,
    "options": ["The shopkeeper thanked Mehak.", "Mehak helped a young boy.", "Kindness is like a seed.", "She reached her grandmother’s house."],
    "answer": "Kindness is like a seed."
  },
  {
    "subject": "English",
    "question": "Choose the correct conjunction: I stayed home ___ it was raining.",
    "options": ["But", "Because", "Although", "So"],
    "answer": "Because"
  },
  {
    "subject": "English",
    "question": "Identify the dependent clause: She left because she was tired.",
    "options": ["She left", "Because she was tired", "She was tired", "Because"],
    "answer": "Because she was tired"
  },
  {
    "subject": "English",
    "question": "Which of the following is a noun phrase?",
    "options": ["Very quickly", "A group of students", "At the park", "When he arrived"],
    "answer": "A group of students"
  },
  {
    "subject": "English",
    "question": "By next year, they ___ in Lahore for five years.",
    "options": ["Lived", "Have lived", "Will have lived", "Are living"],
    "answer": "Will have lived"
  },
  {
    "subject": "English",
    "question": "Identify the adverb of manner:",
    "options": ["Yesterday", "Slowly", "Always", "Soon"],
    "answer": "Slowly"
  },
  {
    "subject": "English",
    "question": "Choose the sentence with the correct preposition of place and phrase structure:",
    "options": ["The report is lying on the table beside the computer.", "The report is lying in the table besides the computer.", "The report is lying beside the table on the computer.", "The report is lying at the table near the computer."],
    "answer": "The report is lying on the table beside the computer."
  },
  {
    "subject": "English",
    "question": "Read the sentence: “Although he spoke confidently, his trembling hands revealed his fear.”\nWhat can you infer from this sentence?",
    "options": ["He was not nervous at all.", "His actions contradicted his words.", "He was confident and calm.", "He was angry, not afraid."],
    "answer": "His actions contradicted his words."
  },
  {
    "subject": "English",
    "question": "Identify the correct sentence with a properly used adverbial clause:",
    "options": ["He left early because he was tired.", "He left early, he was tired because.", "He left early tired because he was.", "Because he was tired, he left early quickly."],
    "answer": "He left early because he was tired."
  },
  {
    "subject": "English",
    "question": "Identify the type: “Please close the door.”",
    "options": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
    "answer": "Imperative"
  },
  {
    "subject": "English",
    "question": "We ___ football when it started to rain.",
    "options": ["Played", "Were playing", "Play", "Have played"],
    "answer": "Were playing"
  },
  // Urdu - 9 Questions
  {
    "subject": "Urdu",
    "question": "صحیح جملے کی نشاندہی کریں",
    "options": [
      "احمد کا والد نیک سیرت آدمی ہے",
      "احمد کے والد نیک سیرت آدمی ہیں",
      "احمد کی والد نیک سیرت ہے",
      "احمد کے والد نیک سیرت ہیں"
    ],
    "answer": "احمد کے والد نیک سیرت ہیں"
  },
  {
    "subject": "Urdu",
    "question": `اقتباس پڑھ کر سوال کا جواب دیں:\n\n${URDU_PASSAGE}\n\nمصنف کے خیال میں اصلی بلبل پائی جاتی ہے:`,
    "options": ["شمالی افریقہ میں", "بنگلہ دیش میں", "ہمالیہ کے دامن میں", "مکہ معظمہ"],
    "answer": "ہمالیہ کے دامن میں"
  },
  {
    "subject": "Urdu",
    "question": `اقتباس پڑھ کر سوال کا جواب دیں:\n\n${URDU_PASSAGE}\n\nکسی شاعر نے بلبل کے بارے میں افواہ اڑائی تھی کہ :`,
    "options": ["بلبل کی نظر کمزور ہے", "راگ پکے کرنے کی", "سب گئے گلاب کی ٹہنی پر رونے کی", "گانا سکھانے کی دعوت دینے کی"],
    "answer": "سب گئے گلاب کی ٹہنی پر رونے کی"
  },
  {
    "subject": "Urdu",
    "question": `اقتباس پڑھ کر سوال کا جواب دیں:\n\n${URDU_PASSAGE}\n\nکوہ ہمالیہ میں لفظ کوہ کے مترادف ہے :-`,
    "options": ["میدان", "غار", "گھائی", "پہاڑ"],
    "answer": "پہاڑ"
  },
  {
    "subject": "Urdu",
    "question": "استاد! صاحب، کمرہ امتحان میں چلا گیا ہے۔\nدرج بالا جملے میں **فعل ماضی** کی کونسی قسم استعمال ہوئی ہے؟",
    "options": ["ماضی قریب", "ماضی بعید", "ماضی استمراری", "ماضی مطلق"],
    "answer": "ماضی قریب"
  },
  {
    "subject": "Urdu",
    "question": "شاعر کا قلمی نام جو وہ اپنے اصلی نام کے بجائے شعر میں استعمال کرتا ہے:",
    "options": ["معروف", "تخلص", "لقب", "نسبت"],
    "answer": "تخلص"
  },
  {
    "subject": "Urdu",
    "question": "آرہی ہے چاہ یوسف سے صدا\n دوست یہاں تھوڑے ہیں اور بھائی بہت \nدرج بالا شعر میں اردو ادب کی کونسی صنف موجود ہے",
    "options": ["کنایہ", "محاوره", "تلمیح", "استعارہ"],
    "answer": "تلمیح"
  },
  {
    "subject": "Urdu",
    "question": "جو انسان بھوکا ہو اسکے لئے چائے کا ایک کپ تو ایسے ہے جیسے اونٹ کے منہ میں زیرہ\nخط کشیدہ لفظ بنیادی طور پر",
    "options": ["محاوره", "استعاده", "تشبیہ", "ضرب المثل"],
    "answer": "ضرب المثل"
  },
  {
    "subject": "Urdu",
    "question": `اقتباس پڑھ کر سوال کا جواب دیں:\n\n${URDU_PASSAGE}\n\nلفظ نالہ و شیون **قواعد کی رو** سے کیا ہے؟`,
    "options": ["مرکب اضافی", "مرکب عددی", "مرکب عطفی", "مرکب بیانی"],
    "answer": "مرکب عطفی"
  }
];
