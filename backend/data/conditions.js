// General wellness content used to seed an empty database.
// Educational only: not a substitute for professional medical advice.

module.exports = [
    {
        name: 'Diabetes',
        summary: 'A chronic condition that affects how your body turns food into energy.',
        description: 'Diabetes occurs when blood glucose is too high, either because the body does not make enough insulin (Type 1) or cannot use it effectively (Type 2). Lifestyle changes play a major role in managing Type 2 diabetes and preventing complications.',
        symptoms: ['Increased thirst and urination', 'Unexplained weight loss', 'Fatigue', 'Blurred vision', 'Slow-healing sores'],
        homeRemedies: [
            {
                title: 'Fenugreek seed water',
                description: 'Fenugreek seeds are rich in soluble fibre, which may help slow carbohydrate absorption.',
                ingredients: ['1 tsp fenugreek seeds', '1 glass of water'],
                preparation: 'Soak the seeds overnight. Drink the water and chew the seeds in the morning on an empty stomach.',
                warnings: 'May lower blood sugar further if you take diabetes medication. Monitor your levels and consult your doctor.'
            },
            {
                title: 'Cinnamon tea',
                description: 'Cinnamon has been studied for a modest effect on insulin sensitivity.',
                ingredients: ['1 cinnamon stick or 1/2 tsp ground cinnamon', '1 cup hot water'],
                preparation: 'Steep cinnamon in hot water for 10 minutes. Drink unsweetened.',
                warnings: 'Prefer Ceylon cinnamon; large amounts of cassia cinnamon contain coumarin, which can affect the liver.'
            }
        ],
        exercises: [
            {
                title: 'Brisk walking',
                description: 'Moderate aerobic activity helps muscles use glucose and improves insulin sensitivity.',
                steps: ['Warm up with 5 minutes of slow walking', 'Walk at a pace where you can talk but not sing', 'Cool down with 5 minutes of slow walking'],
                duration: '30 minutes',
                frequency: '5 days a week',
                precautions: 'Check blood sugar before and after exercise. Carry a quick snack in case of low blood sugar.'
            },
            {
                title: 'Bodyweight squats',
                description: 'Strength training builds muscle, which increases glucose uptake.',
                steps: ['Stand with feet shoulder-width apart', 'Lower your hips as if sitting in a chair', 'Keep your chest up and knees behind toes', 'Push through your heels to stand'],
                duration: '3 sets of 10-12 reps',
                frequency: '2-3 days a week',
                precautions: 'Use a chair for support if balance is an issue.'
            }
        ],
        nutrition: [
            {
                food: 'Leafy greens',
                benefits: 'Low in calories and carbohydrates, high in fibre, magnesium and antioxidants.',
                servingSize: '1-2 cups daily',
                recipes: ['Spinach and paneer stir-fry', 'Mixed greens salad with lemon dressing'],
                avoid: ['Sugary drinks', 'White bread and refined flour', 'Sweets and desserts']
            },
            {
                food: 'Whole grains and legumes',
                benefits: 'Complex carbohydrates and fibre release energy slowly and help control blood sugar spikes.',
                servingSize: '1/2 cup cooked per meal',
                recipes: ['Moong dal khichdi with vegetables', 'Chickpea and quinoa salad'],
                avoid: ['White rice in large portions', 'Packaged breakfast cereals']
            }
        ],
        videos: []
    },
    {
        name: 'Heart Disease',
        summary: 'Conditions affecting the heart and blood vessels, often linked to lifestyle.',
        description: 'Heart disease covers several conditions, the most common being coronary artery disease, where arteries narrow due to plaque build-up. Diet, activity, not smoking and managing stress are key to prevention.',
        symptoms: ['Chest pain or tightness', 'Shortness of breath', 'Pain in the neck, jaw or back', 'Fatigue', 'Irregular heartbeat'],
        homeRemedies: [
            {
                title: 'Garlic',
                description: 'Garlic may modestly help lower blood pressure and cholesterol.',
                ingredients: ['1-2 fresh garlic cloves'],
                preparation: 'Crush and let stand for 10 minutes, then add to meals or eat with water.',
                warnings: 'Can increase bleeding risk if you take blood thinners.'
            },
            {
                title: 'Deep breathing for stress',
                description: 'Chronic stress raises heart rate and blood pressure. Slow breathing activates the relaxation response.',
                ingredients: ['A quiet place', '5-10 minutes'],
                preparation: 'Inhale through the nose for 4 seconds, hold for 4, exhale slowly for 6. Repeat 10 times.',
                warnings: 'Seek emergency care immediately for chest pain; do not rely on home remedies.'
            }
        ],
        exercises: [
            {
                title: 'Cycling or stationary bike',
                description: 'Low-impact cardio that strengthens the heart muscle.',
                steps: ['Start with 5 minutes of easy pedalling', 'Increase to a moderate pace', 'Finish with 5 minutes of easy pedalling'],
                duration: '20-30 minutes',
                frequency: '3-5 days a week',
                precautions: 'Get clearance from your cardiologist before starting. Stop if you feel chest pain or dizziness.'
            },
            {
                title: 'Gentle yoga',
                description: 'Improves flexibility and reduces stress hormones.',
                steps: ['Begin in a seated position', 'Move through cat-cow, child pose and gentle twists', 'End with 5 minutes of relaxation'],
                duration: '20 minutes',
                frequency: 'Daily',
                precautions: 'Avoid inverted poses and breath holding.'
            }
        ],
        nutrition: [
            {
                food: 'Oily fish',
                benefits: 'Rich in omega-3 fatty acids which support healthy triglyceride levels.',
                servingSize: '2 servings per week',
                recipes: ['Grilled salmon with vegetables', 'Mackerel curry with less oil'],
                avoid: ['Fried foods', 'Processed meats', 'Excess salt']
            },
            {
                food: 'Oats',
                benefits: 'Beta-glucan fibre helps lower LDL cholesterol.',
                servingSize: '1/2 cup dry oats daily',
                recipes: ['Oat porridge with berries', 'Vegetable oats upma'],
                avoid: ['Trans fats', 'Sugary baked goods']
            }
        ],
        videos: []
    },
    {
        name: 'Hypertension',
        summary: 'Persistently high blood pressure that strains the heart and arteries.',
        description: 'Hypertension often has no symptoms but raises the risk of heart attack, stroke and kidney disease. Reducing salt, staying active, limiting alcohol and managing weight can significantly lower blood pressure.',
        symptoms: ['Often none', 'Headaches', 'Shortness of breath', 'Nosebleeds', 'Dizziness'],
        homeRemedies: [
            {
                title: 'Hibiscus tea',
                description: 'Some studies show hibiscus tea can modestly lower blood pressure.',
                ingredients: ['1-2 tsp dried hibiscus petals', '1 cup hot water'],
                preparation: 'Steep for 5-10 minutes, strain and drink unsweetened.',
                warnings: 'May interact with blood pressure medication. Avoid during pregnancy.'
            },
            {
                title: 'Reduce sodium at home',
                description: 'Cutting salt is one of the most effective lifestyle changes for blood pressure.',
                ingredients: ['Herbs', 'Lemon', 'Spices'],
                preparation: 'Replace salt with lemon, herbs and spices when cooking. Taste food before adding salt.',
                warnings: 'Do not use potassium-based salt substitutes if you have kidney disease without asking your doctor.'
            }
        ],
        exercises: [
            {
                title: 'Brisk walking',
                description: 'Regular aerobic exercise can lower systolic blood pressure by several points.',
                steps: ['Warm up slowly', 'Walk briskly for 30 minutes', 'Cool down gradually'],
                duration: '30 minutes',
                frequency: '5 days a week',
                precautions: 'Avoid heavy lifting and breath holding, which spike blood pressure.'
            },
            {
                title: 'Isometric hand grip',
                description: 'Short isometric holds have been shown to help reduce resting blood pressure.',
                steps: ['Squeeze a hand grip or tennis ball at moderate effort', 'Hold for 2 minutes', 'Rest 1 minute and switch hands', 'Repeat 4 times'],
                duration: '12-15 minutes',
                frequency: '3 days a week',
                precautions: 'Breathe normally throughout; do not hold your breath.'
            }
        ],
        nutrition: [
            {
                food: 'Bananas and potassium-rich foods',
                benefits: 'Potassium helps balance the effects of sodium.',
                servingSize: '1 banana daily, plus vegetables',
                recipes: ['Banana and oats smoothie', 'Sweet potato and spinach sabzi'],
                avoid: ['Pickles and papad', 'Instant noodles', 'Salted snacks']
            },
            {
                food: 'Low-fat yoghurt',
                benefits: 'Calcium and protein as part of the DASH diet.',
                servingSize: '1 cup daily',
                recipes: ['Cucumber raita', 'Yoghurt with fruit'],
                avoid: ['Excess alcohol', 'High-sodium cheese']
            }
        ],
        videos: []
    },
    {
        name: 'Chronic Kidney Disease',
        summary: 'Gradual loss of kidney function over time.',
        description: 'Chronic kidney disease (CKD) is often caused by diabetes and high blood pressure. Diet needs can differ by stage, so always follow the advice of your nephrologist or renal dietitian.',
        symptoms: ['Swelling in legs and ankles', 'Fatigue', 'Changes in urination', 'Nausea', 'Itchy skin'],
        homeRemedies: [
            {
                title: 'Stay appropriately hydrated',
                description: 'Adequate fluid helps the kidneys, but later stages may need fluid limits.',
                ingredients: ['Plain water'],
                preparation: 'Drink the amount advised by your doctor, spread through the day.',
                warnings: 'People on dialysis or with advanced CKD often need to restrict fluids.'
            },
            {
                title: 'Avoid unnecessary painkillers',
                description: 'NSAIDs such as ibuprofen can harm the kidneys.',
                ingredients: ['A medicine review with your doctor'],
                preparation: 'Ask your doctor for kidney-safe alternatives for pain relief.',
                warnings: 'Do not stop prescribed medication without medical advice.'
            }
        ],
        exercises: [
            {
                title: 'Walking',
                description: 'Light regular activity helps control blood pressure and blood sugar, which protect the kidneys.',
                steps: ['Start with 10 minutes', 'Add 5 minutes each week', 'Aim for 30 minutes most days'],
                duration: '10-30 minutes',
                frequency: '5 days a week',
                precautions: 'Avoid exercising right after dialysis. Stop if you feel breathless or dizzy.'
            },
            {
                title: 'Light resistance bands',
                description: 'Helps maintain muscle mass, which can decline in CKD.',
                steps: ['Anchor a band under your feet', 'Perform bicep curls and seated rows', '2 sets of 10 reps each'],
                duration: '15 minutes',
                frequency: '2-3 days a week',
                precautions: 'Avoid putting pressure on a dialysis fistula arm.'
            }
        ],
        nutrition: [
            {
                food: 'Cauliflower and cabbage',
                benefits: 'Nutritious vegetables that are relatively low in potassium.',
                servingSize: '1/2 cup cooked',
                recipes: ['Cauliflower stir-fry with garlic', 'Cabbage and carrot slaw'],
                avoid: ['High-sodium processed foods', 'Dark colas (phosphorus)']
            },
            {
                food: 'Egg whites',
                benefits: 'High-quality protein with less phosphorus than whole eggs.',
                servingSize: 'As advised by your dietitian',
                recipes: ['Egg white omelette with vegetables'],
                avoid: ['Excess red meat', 'Salt substitutes containing potassium']
            }
        ],
        videos: []
    },
    {
        name: 'Liver Disease',
        summary: 'Conditions that damage the liver, including fatty liver disease.',
        description: 'Liver disease ranges from fatty liver to hepatitis and cirrhosis. Non-alcoholic fatty liver disease is common and often improves with weight loss, regular activity and avoiding alcohol.',
        symptoms: ['Yellowing of skin and eyes', 'Abdominal pain and swelling', 'Dark urine', 'Chronic fatigue', 'Loss of appetite'],
        homeRemedies: [
            {
                title: 'Coffee in moderation',
                description: 'Studies associate moderate black coffee intake with lower liver fibrosis risk.',
                ingredients: ['Black coffee'],
                preparation: '1-2 cups daily without added sugar or cream.',
                warnings: 'Avoid if you have heart rhythm problems or are sensitive to caffeine.'
            },
            {
                title: 'Avoid alcohol',
                description: 'Alcohol is directly toxic to liver cells.',
                ingredients: ['Water, herbal teas'],
                preparation: 'Replace alcoholic drinks with water or unsweetened herbal teas.',
                warnings: 'Heavy drinkers should stop under medical supervision because withdrawal can be dangerous.'
            }
        ],
        exercises: [
            {
                title: 'Aerobic exercise',
                description: 'Regular aerobic exercise reduces liver fat even without major weight loss.',
                steps: ['Choose walking, cycling or swimming', 'Exercise at moderate intensity', 'Build up to 150 minutes per week'],
                duration: '30 minutes',
                frequency: '5 days a week',
                precautions: 'People with advanced cirrhosis should get medical advice first.'
            },
            {
                title: 'Resistance training',
                description: 'Strength training also improves liver fat and insulin sensitivity.',
                steps: ['Push-ups against a wall', 'Chair squats', 'Resistance band rows'],
                duration: '20 minutes',
                frequency: '2-3 days a week',
                precautions: 'Avoid heavy straining if you have abdominal swelling.'
            }
        ],
        nutrition: [
            {
                food: 'Green tea and vegetables',
                benefits: 'Antioxidants may help reduce liver inflammation.',
                servingSize: '1-2 cups tea, 5 servings of vegetables',
                recipes: ['Broccoli and bell pepper stir-fry', 'Vegetable soup'],
                avoid: ['Alcohol', 'Sugary drinks with fructose', 'Deep-fried food']
            },
            {
                food: 'Nuts (walnuts)',
                benefits: 'Healthy fats and antioxidants associated with better liver enzyme levels.',
                servingSize: 'A small handful daily',
                recipes: ['Walnuts with oats', 'Walnut and apple salad'],
                avoid: ['Salted and candied nuts']
            }
        ],
        videos: []
    },
    {
        name: 'Anemia',
        summary: 'A shortage of healthy red blood cells to carry oxygen.',
        description: 'Anemia is most commonly caused by iron deficiency, but can also result from low B12 or folate, blood loss or chronic disease. Getting the cause diagnosed with a blood test is important.',
        symptoms: ['Fatigue and weakness', 'Pale skin', 'Shortness of breath', 'Dizziness', 'Cold hands and feet'],
        homeRemedies: [
            {
                title: 'Pair iron with vitamin C',
                description: 'Vitamin C greatly increases absorption of plant-based iron.',
                ingredients: ['Iron-rich food (spinach, lentils)', 'Lemon, amla or orange'],
                preparation: 'Squeeze lemon over dal or greens, or have an orange with your meal.',
                warnings: 'Avoid tea and coffee within an hour of iron-rich meals; they reduce absorption.'
            },
            {
                title: 'Cook in cast iron',
                description: 'Cooking in cast-iron pans can add small amounts of iron to food.',
                ingredients: ['Cast-iron pan'],
                preparation: 'Use it for acidic dishes such as tomato-based curries.',
                warnings: 'Do not take iron supplements without a diagnosis; excess iron is harmful.'
            }
        ],
        exercises: [
            {
                title: 'Gentle walking',
                description: 'Light activity can improve energy without overtaxing a low oxygen supply.',
                steps: ['Walk at an easy pace', 'Rest whenever you feel short of breath'],
                duration: '15-20 minutes',
                frequency: 'Daily',
                precautions: 'Stop if you feel dizzy or your heart races.'
            },
            {
                title: 'Breathing exercises',
                description: 'Diaphragmatic breathing improves oxygen exchange and relaxation.',
                steps: ['Lie down with one hand on your belly', 'Inhale so your belly rises', 'Exhale slowly through pursed lips'],
                duration: '5-10 minutes',
                frequency: 'Twice daily',
                precautions: 'Stop if you feel light-headed.'
            }
        ],
        nutrition: [
            {
                food: 'Lentils and legumes',
                benefits: 'Good source of plant iron and folate.',
                servingSize: '1 cup cooked daily',
                recipes: ['Rajma with lemon', 'Masoor dal with spinach'],
                avoid: ['Tea or coffee with meals', 'Calcium supplements taken with iron-rich meals']
            },
            {
                food: 'Beetroot and pomegranate',
                benefits: 'Contain folate and vitamin C that support red blood cell production.',
                servingSize: '1 cup',
                recipes: ['Beetroot and carrot juice', 'Pomegranate salad'],
                avoid: ['Excess processed food']
            }
        ],
        videos: []
    },
    {
        name: 'Thyroid Disease',
        summary: 'Over- or under-activity of the thyroid gland, which controls metabolism.',
        description: 'Hypothyroidism (underactive) causes fatigue and weight gain, while hyperthyroidism (overactive) causes weight loss and a racing heart. Both are usually managed with medication; lifestyle supports overall wellbeing.',
        symptoms: ['Fatigue', 'Unexplained weight change', 'Feeling cold or hot', 'Hair thinning', 'Mood changes'],
        homeRemedies: [
            {
                title: 'Consistent medication timing',
                description: 'Thyroid medication works best when taken the same way every day.',
                ingredients: ['Prescribed medication', 'Water'],
                preparation: 'Take on an empty stomach, 30-60 minutes before breakfast.',
                warnings: 'Separate from calcium, iron supplements and coffee by at least 4 hours.'
            },
            {
                title: 'Sleep and stress management',
                description: 'Poor sleep and chronic stress can worsen thyroid symptoms.',
                ingredients: ['Regular sleep schedule'],
                preparation: 'Aim for 7-8 hours; keep screens away 30 minutes before bed.',
                warnings: 'Do not take iodine or kelp supplements without medical advice.'
            }
        ],
        exercises: [
            {
                title: 'Low-impact cardio',
                description: 'Helps with energy levels and weight management in hypothyroidism.',
                steps: ['Walk, swim or cycle', 'Keep a steady moderate pace'],
                duration: '30 minutes',
                frequency: '4-5 days a week',
                precautions: 'With untreated hyperthyroidism, avoid intense exercise until your heart rate is controlled.'
            },
            {
                title: 'Strength training',
                description: 'Builds muscle to support metabolism and bone health.',
                steps: ['Squats', 'Wall push-ups', 'Glute bridges', '2-3 sets of 10 reps each'],
                duration: '20 minutes',
                frequency: '2-3 days a week',
                precautions: 'Start light and increase gradually.'
            }
        ],
        nutrition: [
            {
                food: 'Brazil nuts and seeds',
                benefits: 'Selenium supports thyroid hormone production.',
                servingSize: '1-2 Brazil nuts daily',
                recipes: ['Mixed seed trail mix'],
                avoid: ['Excess Brazil nuts (selenium toxicity)']
            },
            {
                food: 'Eggs and dairy',
                benefits: 'Provide iodine and protein.',
                servingSize: '1 egg or 1 cup milk daily',
                recipes: ['Vegetable omelette', 'Curd with fruit'],
                avoid: ['Large amounts of raw cruciferous vegetables if iodine deficient', 'Soy close to medication time']
            }
        ],
        videos: []
    },
    {
        name: 'Stroke',
        summary: 'Interrupted blood supply to the brain. Prevention and recovery matter.',
        description: 'A stroke is a medical emergency. Use BE FAST to recognise it: Balance, Eyes, Face drooping, Arm weakness, Speech difficulty, Time to call emergency services. Controlling blood pressure, blood sugar and cholesterol lowers risk.',
        symptoms: ['Sudden face drooping', 'Arm or leg weakness on one side', 'Slurred speech', 'Sudden vision loss', 'Severe headache'],
        homeRemedies: [
            {
                title: 'Know BE FAST',
                description: 'Fast treatment saves brain tissue. Every minute counts.',
                ingredients: ['Emergency number saved on your phone'],
                preparation: 'Teach family members the BE FAST signs and note the time symptoms started.',
                warnings: 'Never wait for symptoms to pass. Call emergency services immediately.'
            },
            {
                title: 'Monitor blood pressure at home',
                description: 'High blood pressure is the biggest modifiable stroke risk factor.',
                ingredients: ['Validated home BP monitor', 'Logbook or app'],
                preparation: 'Measure at the same time each day after 5 minutes of rest.',
                warnings: 'Share your readings with your doctor.'
            }
        ],
        exercises: [
            {
                title: 'Seated arm raises (recovery)',
                description: 'Helps regain shoulder mobility after a stroke.',
                steps: ['Sit upright in a chair', 'Clasp hands together', 'Slowly raise arms to shoulder height', 'Lower slowly'],
                duration: '10 repetitions',
                frequency: 'Twice daily',
                precautions: 'Follow the plan set by your physiotherapist.'
            },
            {
                title: 'Sit-to-stand',
                description: 'Builds leg strength and balance for walking.',
                steps: ['Sit near the edge of a sturdy chair', 'Lean forward and stand up', 'Sit down slowly with control'],
                duration: '2 sets of 5-10 reps',
                frequency: 'Daily',
                precautions: 'Have someone nearby for support until balance improves.'
            }
        ],
        nutrition: [
            {
                food: 'Fruits and vegetables',
                benefits: 'Potassium, fibre and antioxidants support healthy blood pressure and vessels.',
                servingSize: '5 servings daily',
                recipes: ['Vegetable daliya', 'Fruit bowl with seeds'],
                avoid: ['High-salt foods', 'Processed meats', 'Smoking and excess alcohol']
            },
            {
                food: 'Whole grains',
                benefits: 'Associated with lower stroke risk.',
                servingSize: '3 servings daily',
                recipes: ['Brown rice pulao', 'Multigrain roti'],
                avoid: ['Refined flour snacks']
            }
        ],
        videos: []
    }
];
