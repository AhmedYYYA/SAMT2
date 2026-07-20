(() => {
  "use strict";

  const translations = {
    ar: {
      brandSub: "STRATEGIC AVIATION MANAGEMENT & TRANSFORMATION",
      navProgram: "البرنامج", navJourney: "الرحلة", navSelection: "الاختيار", navStations: "محطات الإعداد", navImpact: "الأثر",
      heroKicker: "الزمالة الدولية لإعداد قادة منظومة الطيران", heroLine1: "قُد", heroLine2: "المستقبل",
      heroLead: "نُعِد نخبة قادرة على قيادة القدرات، ورفع الجاهزية، وصناعة القرار في البيئات المعقدة.", explore: "استكشف الرحلة", executiveBrief: "الملخص التنفيذي",
      metric1: "مشاركين من أصحاب الإمكانات العالية", metric2: "أسبوعًا من الإعداد المتفرغ", metric3: "سنوات خبرة عملية كحد أدنى", metric4: "مهمة: جاهزية قيادية مستدامة", scroll: "SCROLL TO ENGAGE",
      programEyebrow: "البرنامج في جوهره", programHeading: "من فكرة قيادية إلى قدرة مؤسسية.",
      executiveSummaryTitle: "الملخص التنفيذي", executiveSummaryHeading: "زمالة قيادية انتقائية لرفع الجاهزية المستقبلية",
      executiveSummaryText: "زمالة قيادية انتقائية لإعداد عشرة من أصحاب الإمكانات العالية لقيادة منظومة الطيران ورفع جاهزيتها المستقبلية. يرتكز البرنامج على بناء الكفاءة القيادية، والفهم العملياتي، وإدارة القدرات، والتكامل المشترك، وصناعة القرار في البيئات المعقدة. ويجمع بين التأهيل الوطني، ومحطات الإعداد الدولية، والتوجيه التنفيذي، والتقييم المستمر؛ لتحويل الخبرة العالمية إلى قدرة مؤسسية مستدامة وأثر عملياتي قابل للقياس.",
      intentHeading: "بناء قاعدة منتقاة من قادة المستقبل", intentText: "بناء قاعدة منتقاة من قادة المستقبل في منظومة الطيران، تمتلك الكفاءة القيادية والفهم العملياتي والقدرة على إدارة القدرات وصناعة القرار.", readinessSignal: "إشارة الجاهزية القيادية", programmeSignalText: "الخبرة العالمية تتحول إلى قرار، والقرار إلى قدرة، والقدرة إلى أثر قابل للقياس.",
      storyEyebrow: "قصة بناء القائد", storyTitle: "من النشأة<br>إلى الأثر.", storyIntro: "لا تُبنى القيادة بمحاضرة أو زيارة قصيرة. تبدأ باختيار صارم، ثم تأسيس وطني، فمحطات إعداد دولية، ثم اختبار للنضج، وتنتهي بقدرة تعود إلى المؤسسة وتُقاس بنتائجها.",
      path1: "الاختيار", path2: "التأسيس", path3: "التطور", path4: "النضج", path5: "الأثر",
      chapter1Title: "النشأة — اكتشاف الإمكانات القيادية", chapter1Text: "تبدأ الرحلة من قاعدة واسعة من المرشحين ذوي الأداء العالي، ثم تُختبر قدرتهم على التفكير، والتعلم، والعمل الجماعي، واتخاذ القرار تحت الضغط؛ لاختيار عشرة فقط يمثلون أعلى إمكانات الدفعة.", tagNomination: "ترشيح مؤسسي", tagAssessment: "مركز تقييم", tagInterview: "مقابلات مُنظَّمة",
      chapter2Title: "التأسيس — فهم الدولة والمنظومة", chapter2Text: "ينطلق الإعداد داخل دولة الإمارات لبناء أساس استراتيجي موحد: مفهوم القوة الجوية، تطوير القدرات، الصناعة الوطنية، الجاهزية، القيادة المشتركة، والربط بين السياسة والقدرة والنتيجة العملياتية.", tagNational: "إعداد وطني", tagShadowing: "إلحاق مهني", tagMentoring: "توجيه قيادي",
      chapter3Title: "التطور — محطات إعداد دولية مصممة", chapter3Text: "ينتقل المشاركون إلى برامج معدة مسبقًا مع الجهات المستضيفة في المملكة المتحدة وفرنسا والولايات المتحدة؛ تشمل تدريبًا مكثفًا، وإلحاقًا مهنيًا، وورش عمل، وتفاعلًا مع القيادات، ومهامًا يومية مرتبطة بأهداف محددة.", tagUK: "المملكة المتحدة", tagFrance: "فرنسا", tagUSA: "الولايات المتحدة",
      chapter4Title: "النضج — تحويل المعرفة إلى قرار", chapter4Text: "يُختبر المشاركون في سيناريوهات قيادية معقدة تتطلب الموازنة بين المهمة والموارد والمخاطر والشراكات. يُقاس النضج بالقرار، والحجة، والسلوك، والقدرة على تحويل المعرفة إلى خيارات قابلة للتنفيذ.", tagWargame: "تمارين قرار", tagExecutive: "إحاطات تنفيذية", tagEvidence: "تقييم بالأدلة",
      chapter5Title: "المخرجات — أثر يعود إلى المؤسسة", chapter5Text: "تختتم الزمالة بمشاريع أثر مؤسسية، وإحاطة أمام القيادة، وخطة متابعة بعد التخرج. النجاح ليس شهادة، بل تحسين قابل للقياس في الجاهزية، أو تطوير القدرات، أو التدريب، أو الاستدامة، أو كفاءة القرار.", tagProjects: "مشاريع أثر", tagLeadershipBoard: "عرض أمام القيادة", tagFollowup: "متابعة 12 شهرًا",
      selectionEyebrow: "اختيار نخبة النخبة", selectionHeading: "الاختيار امتياز قيادي، لا مقعد تدريبي.", selectionIntro: "يستهدف البرنامج العاملين في منظومة الطيران من مختلف التخصصات التشغيلية والهندسية والفنية والإدارية، شريطة امتلاك خبرة عملية مثبتة وإمكانات قيادية قابلة للتطوير.",
      orbitCoreText: "قادة مستقبليون", orbit1: "طيارون", orbit2: "مهندسون", orbit3: "إداريون", orbit4: "إمداد وعقود", orbit5: "عمليات", orbit6: "تدريب", orbit7: "سلامة", orbit8: "تخطيط",
      criterion1Title: "الأهلية والخبرة", criterion1Text: "خبرة عملية لا تقل عن خمس سنوات وسجل أداء موثق.", criterion2Title: "التفكير والتحليل", criterion2Text: "اختبارات التفكير الاستراتيجي، وحل المشكلات، وصناعة القرار.", criterion3Title: "السلوك القيادي", criterion3Text: "تمارين جماعية ومواقف عملية داخل مركز تقييم تنافسي.", criterion4Title: "المقابلة التنفيذية", criterion4Text: "مقابلة منظمة تقيس الدافع والقابلية للتعلم والتواضع القيادي.", criterion5Title: "الاعتماد النهائي", criterion5Text: "اختيار عشرة مرشحين بواسطة لجنة مستقلة متعددة التخصصات.",
      stationsEyebrow: "محطات الإعداد", stationsHeading: "كل محطة لها غاية، ومهمة، ودليل تقييم.", stationsIntro: "لا تعتمد المحطات على الزيارات البروتوكولية؛ بل على برامج يومية متفق عليها مسبقًا، يقودها خبراء وموجهون، وتنتهي بمخرجات عملية وتقييم رسمي.", tabUAE: "الإمارات", tabUK: "المملكة المتحدة", tabFrance: "فرنسا", tabUSA: "الولايات المتحدة", tabReturn: "العودة والأثر",
      competencyEyebrow: "جدارات النضج القيادي", competencyHeading: "القائد الذي تفهمه المنظومة وتثق بقراره.", comp1Title: "القيادة الاستراتيجية", comp1Text: "قراءة البيئة، تحديد الأولويات، وربط القرار بالمهمة والجاهزية المستقبلية.", comp2Title: "الفهم العملياتي", comp2Text: "فهم أثر القرار على العمليات، الأطقم، السلامة، الاستدامة، والتكامل المشترك.", comp3Title: "إدارة القدرات", comp3Text: "قيادة دورة حياة القدرة من تحديد الاحتياج إلى الإدخال للخدمة والتطوير والخروج.", comp4Title: "التكامل المشترك", comp4Text: "التنسيق بين العمليات والهندسة والإمداد والتدريب والشركاء لتحقيق أثر موحد.", comp5Title: "صناعة القرار", comp5Text: "الموازنة بين المهمة والمخاطر والموارد والوقت ضمن بيئات معقدة وغير مكتملة المعلومات.", comp6Title: "التأثير التنفيذي", comp6Text: "إيصال الحجة، بناء التحالفات، وتحويل الرؤية إلى قرار ومسؤوليات ومتابعة.",
      assessmentEyebrow: "التقييم والحوكمة", assessmentHeading: "لا اجتياز دون دليل. ولا تنفيذ دون حوكمة.", flow1: "خط الأساس", flow1Text: "قدرات قبلية", flow2: "الأداء اليومي", flow2Text: "مهام وسلوك", flow3: "تقييم الجهات", flow3Text: "أدلة مستقلة", flow4: "اختبار النضج", flow4Text: "قرار وإحاطة", flow5: "مشروع الأثر", flow5Text: "نتيجة مؤسسية", govCore: "حوكمة البرنامج", govCoreSub: "قرار · رقابة · أثر", gov1: "الراعي التنفيذي", gov2: "اللجنة التوجيهية", gov3: "مدير البرنامج", gov4: "مراجع مستقل",
      impactEyebrow: "المخرجات والأثر", impactHeading: "البرنامج ينتهي. القدرة تبدأ.", impactIntro: "تُقاس القيمة بما يتغير داخل المؤسسة بعد عودة المشاركين، وليس بعدد الأيام أو الجهات التي تمت مقابلتها.", impact1Title: "مشاريع أثر مؤسسية", impact1Text: "ثلاثة تحديات ذات أولوية تعالج الجاهزية أو القدرات أو الاستدامة أو التدريب.", impact2Title: "إحاطة قيادية نهائية", impact2Text: "حجة مبنية على الأدلة، وخيارات واضحة، وتوصية قابلة للاعتماد والتنفيذ.", impact3Title: "ملف قيادة فردي", impact3Text: "سجل موثق لتطور الجدارات، ومواطن القوة، وخطة التعيين والتطوير التالية.", impact4Title: "متابعة ما بعد التخرج", impact4Text: "قياس الأثر بعد ستة واثني عشر شهرًا وربطه بالأدوار والنتائج المؤسسية.",
      approvalEyebrow: "قرار القيادة", approvalTitle: "القرار المطلوب من القيادة", approvalText: "اعتماد مفهوم الزمالة، وتفويض إعداد الخطة التنفيذية والتنسيق الرسمي مع الجهات المستهدفة، وتطوير تقدير التكلفة والجدول التفصيلي؛ على أن تُعرض نسخة التنفيذ النهائية والميزانية للاعتماد المستقل قبل الالتزام.", reviewProgramme: "مراجعة البرنامج",
      decision1Title: "اعتماد المفهوم", decision1Text: "الموافقة على الإطار العام والأهداف والنتائج المستهدفة.", decision2Title: "تفويض التخطيط", decision2Text: "إعداد الخطة التنفيذية والتكلفة والجدول التفصيلي.", decision3Title: "العودة للاعتماد", decision3Text: "عرض النسخة النهائية والميزانية قبل أي التزام.",
      footerText: "الزمالة الدولية لإعداد قادة منظومة الطيران — مسار انتقائي يحول التعلم والخبرة إلى جاهزية قيادية وأثر عملياتي مستدام.", footerDisclaimer: "تصميم تجريبي لعرض مفهوم البرنامج — لا يمثل شراكات أو التزامات مؤكدة.", backTop: "العودة للأعلى"
    },
    en: {
      brandSub: "STRATEGIC AVIATION MANAGEMENT & TRANSFORMATION",
      navProgram: "Programme", navJourney: "Journey", navSelection: "Selection", navStations: "Preparation Stations", navImpact: "Impact",
      heroKicker: "INTERNATIONAL AVIATION LEADERSHIP FELLOWSHIP", heroLine1: "COMMAND", heroLine2: "THE FUTURE",
      heroLead: "Developing an elite cohort capable of leading capability, strengthening readiness and deciding in complex environments.", explore: "Explore the Journey", executiveBrief: "Executive Summary",
      metric1: "high-potential participants", metric2: "weeks of full-time preparation", metric3: "minimum years of experience", metric4: "mission: sustained leadership readiness", scroll: "SCROLL TO ENGAGE",
      programEyebrow: "THE PROGRAMME AT ITS CORE", programHeading: "From leadership concept to institutional capability.",
      executiveSummaryTitle: "EXECUTIVE SUMMARY", executiveSummaryHeading: "A selective leadership fellowship for future readiness",
      executiveSummaryText: "A selective leadership fellowship to prepare ten high-potential professionals to lead the aviation enterprise and strengthen its future readiness. The programme builds leadership competence, operational understanding, capability management, joint integration and decision-making in complex environments. It combines national preparation, international preparation stations, executive mentoring and continuous assessment to convert global experience into sustainable institutional capability and measurable operational impact.",
      intentHeading: "Build a selected base of future leaders", intentText: "Build a selected base of future leaders across the aviation enterprise with leadership competence, operational understanding and the ability to manage capabilities and make decisions.", readinessSignal: "Leadership Readiness Signal", programmeSignalText: "Global experience becomes decision; decision becomes capability; capability becomes measurable impact.",
      storyEyebrow: "THE MAKING OF A LEADER", storyTitle: "From origin<br>to impact.", storyIntro: "Leadership is not built through a lecture or a short visit. It begins with rigorous selection, moves through national foundation and international institutional experience, tests maturity, and concludes with capability returned to the organisation and measured by results.",
      path1: "Selection", path2: "Foundation", path3: "Development", path4: "Maturity", path5: "Impact",
      chapter1Title: "Origin — Identifying leadership potential", chapter1Text: "The journey begins with a broad pool of high-performing candidates. Their capacity to think, learn, collaborate and decide under pressure is tested to select only ten who represent the cohort’s highest potential.", tagNomination: "Institutional nomination", tagAssessment: "Assessment centre", tagInterview: "Structured interviews",
      chapter2Title: "Foundation — Understanding the nation and enterprise", chapter2Text: "Preparation starts in the UAE to establish a common strategic foundation: air power, capability development, national industry, readiness, joint leadership and the link between policy, capability and operational outcome.", tagNational: "National preparation", tagShadowing: "Professional attachment", tagMentoring: "Leadership mentoring",
      chapter3Title: "Development — Designed international preparation stations", chapter3Text: "Participants move into programmes pre-designed with host organisations in the United Kingdom, France and the United States, combining intensive training, professional attachment, workshops, senior-leader engagement and daily outcome-linked assignments.", tagUK: "United Kingdom", tagFrance: "France", tagUSA: "United States",
      chapter4Title: "Maturity — Converting knowledge into decision", chapter4Text: "Participants are tested through complex leadership scenarios requiring balance between mission, resources, risk and partnerships. Maturity is measured through the decision, rationale, conduct and ability to translate knowledge into executable options.", tagWargame: "Decision exercises", tagExecutive: "Executive briefings", tagEvidence: "Evidence-based assessment",
      chapter5Title: "Outputs — Impact returned to the organisation", chapter5Text: "The fellowship concludes with institutional impact projects, an executive leadership briefing and a post-graduation follow-up plan. Success is not a certificate; it is measurable improvement in readiness, capability development, training, sustainment or decision quality.", tagProjects: "Impact projects", tagLeadershipBoard: "Executive leadership board", tagFollowup: "12-month follow-up",
      selectionEyebrow: "SELECTING THE ELITE OF THE ELITE", selectionHeading: "Selection is earned through leadership merit—not allocated as a training seat.", selectionIntro: "The programme targets professionals across operational, engineering, technical and administrative aviation disciplines who demonstrate proven experience and developable leadership potential.",
      orbitCoreText: "future leaders", orbit1: "Pilots", orbit2: "Engineers", orbit3: "Administrators", orbit4: "Supply & Contracts", orbit5: "Operations", orbit6: "Training", orbit7: "Safety", orbit8: "Planning",
      criterion1Title: "Eligibility and experience", criterion1Text: "At least five years of practical experience and a documented performance record.", criterion2Title: "Thinking and analysis", criterion2Text: "Assessment of strategic thinking, problem solving and decision-making.", criterion3Title: "Leadership behaviour", criterion3Text: "Group exercises and practical scenarios in a competitive assessment centre.", criterion4Title: "Executive interview", criterion4Text: "A structured interview measuring motivation, learning agility and leadership humility.", criterion5Title: "Final endorsement", criterion5Text: "Selection of ten candidates by an independent multidisciplinary panel.",
      stationsEyebrow: "PREPARATION STATIONS", stationsHeading: "Every station has a purpose, task and assessment evidence.", stationsIntro: "Stations are not protocol visits. They are pre-agreed daily programmes led by experts and mentors, concluding with practical outputs and formal assessment.", tabUAE: "UAE", tabUK: "United Kingdom", tabFrance: "France", tabUSA: "United States", tabReturn: "Return & Impact",
      competencyEyebrow: "LEADERSHIP MATURITY COMPETENCIES", competencyHeading: "A leader who understands the enterprise—and is trusted to decide.", comp1Title: "Strategic Leadership", comp1Text: "Read the environment, set priorities and link decisions to mission and future readiness.", comp2Title: "Operational Understanding", comp2Text: "Understand decision effects on operations, crews, safety, sustainment and joint integration.", comp3Title: "Capability Management", comp3Text: "Lead the capability lifecycle from need definition through service entry, development and exit.", comp4Title: "Joint Integration", comp4Text: "Align operations, engineering, supply, training and partners toward a unified effect.", comp5Title: "Decision-Making", comp5Text: "Balance mission, risk, resources and time in complex environments with incomplete information.", comp6Title: "Executive Influence", comp6Text: "Communicate the case, build alignment and convert vision into decisions, ownership and follow-through.",
      assessmentEyebrow: "ASSESSMENT & GOVERNANCE", assessmentHeading: "No progression without evidence. No execution without governance.", flow1: "Baseline", flow1Text: "pre-program capability", flow2: "Daily performance", flow2Text: "tasks and conduct", flow3: "Host assessment", flow3Text: "independent evidence", flow4: "Maturity test", flow4Text: "decision and briefing", flow5: "Impact project", flow5Text: "institutional result", govCore: "Programme Governance", govCoreSub: "Decision · Control · Impact", gov1: "Executive Sponsor", gov2: "Steering Committee", gov3: "Programme Director", gov4: "Independent Reviewer",
      impactEyebrow: "OUTPUTS & IMPACT", impactHeading: "The programme concludes. Capability begins.", impactIntro: "Value is measured by what changes inside the organisation after participants return—not by travel days or organisations visited.", impact1Title: "Institutional Impact Projects", impact1Text: "Three priority challenges addressing readiness, capability, sustainment or training.", impact2Title: "Final Leadership Briefing", impact2Text: "An evidence-based case, clear options and a recommendation ready for decision and execution.", impact3Title: "Individual Leadership Portfolio", impact3Text: "Documented competency growth, strengths and a targeted next-role development plan.", impact4Title: "Post-Graduation Follow-up", impact4Text: "Impact measured after six and twelve months and linked to roles and organisational results.",
      approvalEyebrow: "LEADERSHIP DECISION", approvalTitle: "Decision Requested from Leadership", approvalText: "Approve the fellowship concept and authorise development of the execution plan, formal coordination with target organisations, cost estimate and detailed schedule. The final execution version and budget will return for separate approval before commitment.", reviewProgramme: "Review Programme",
      decision1Title: "Approve the concept", decision1Text: "Endorse the overall framework, objectives and intended outcomes.", decision2Title: "Authorise planning", decision2Text: "Develop the execution plan, cost estimate and detailed schedule.", decision3Title: "Return for approval", decision3Text: "Submit the final version and budget before any commitment.",
      footerText: "The International Aviation Leadership Fellowship — a selective path converting learning and experience into leadership readiness and sustained operational impact.", footerDisclaimer: "Concept demonstration only — does not represent confirmed partnerships or commitments.", backTop: "Back to top"
    }
  };

  const stations = {
    ar: {
      uae: { number:"STATION 01", code:"STATION 01 / UAE", title:"دولة الإمارات العربية المتحدة", image:"assets/stations/uae.svg", alt:"مشهد متحرك لمحطة دولة الإمارات", description:"مرحلة التأسيس الوطني تبني فهمًا مشتركًا للدولة ومنظومة الطيران والدفاع والصناعة. يعمل المشاركون مع جهات وطنية مختارة ضمن برنامج يومي من التوجيه والمهام والتقييم.", points:["القيادة الاستراتيجية والقوة الجوية وتطوير القدرات","إلحاق مهني داخل جهات وطنية مختارة","فهم سلسلة القيمة الوطنية والصناعة والشراكات"], fact1:"التأسيس", fact1Label:"خط أساس استراتيجي موحد", fact2:"يومي", fact2Label:"توجيه ومهام وتقييم" },
      uk: { number:"STATION 02", code:"STATION 02 / UNITED KINGDOM", title:"المملكة المتحدة", image:"assets/stations/uk.svg", alt:"مشهد متحرك لمحطة المملكة المتحدة", description:"برنامج مكثف يركز على تطوير المواهب الفنية والهندسية، والقيادة العسكرية، والتعليم التنفيذي عبر ترتيبات رسمية مع مؤسسات عسكرية وأكاديمية مناسبة.", points:["تعلم سكني مصمم في بيئة فنية عسكرية","وحدات تنفيذية في القيادة وصناعة القرار","تفاعل مع جامعات ومؤسسات تدريبية رائدة"], fact1:"3+ أسابيع", fact1Label:"برنامج سكني مكثف", fact2:"متكامل", fact2Label:"تعلم وتطبيق" },
      france: { number:"STATION 03", code:"STATION 03 / FRANCE", title:"فرنسا", image:"assets/stations/france.svg", alt:"مشهد متحرك لمحطة فرنسا", description:"محطة تركز على تدويل الصناعة الوطنية، والهندسة، وتطوير الأعمال، والعلاقات الحكومية، والشراكات الصناعية، ونقل المعرفة التنفيذية إلى الجيل التالي.", points:["برنامج مع مكتب أو جهة صناعية وطنية في أوروبا","العلاقات الحكومية وتطوير الأعمال الدولية","الهندسة والتصنيع وسلاسل الإمداد والشراكات"], fact1:"الصناعة", fact1Label:"من الوطني إلى العالمي", fact2:"تنفيذي", fact2Label:"تعرض مباشر للقيادات" },
      usa: { number:"STATION 04", code:"STATION 04 / UNITED STATES", title:"الولايات المتحدة الأمريكية", image:"assets/stations/usa.svg", alt:"مشهد متحرك لمحطة الولايات المتحدة", description:"محطة متقدمة لفهم التعاون الأمني والمبيعات العسكرية وإدارة البرامج والعقود والعلاقات الحكومية وبرامج تخصصية قصيرة تقدمها مؤسسات معتمدة.", points:["التعاون الأمني الحكومي والمبيعات العسكرية","إدارة البرامج والعقود والعلاقات الصناعية","وحدات تخصصية في القيادة والاستحواذ والإمداد"], fact1:"FMS", fact1Label:"فهم المنظومة الحكومية", fact2:"تخصصي", fact2Label:"دورات وورش مصممة" },
      return: { number:"STATION 05", code:"STATION 05 / RETURN & IMPACT", title:"العودة والأثر", image:null, alt:"مشهد العودة والأثر", description:"تتجمع الخبرة في صورة نضج وتطبيق. يترجم المشاركون ما تعلموه إلى قرارات ومشاريع مؤسسية، ثم يقدمون إحاطة نهائية وخطة تنفيذ ومتابعة.", points:["تحديات مؤسسية ذات أولوية واعتماد واضح","إحاطة أمام القيادة تتضمن خيارات وتوصيات","قياس الأثر بعد ستة واثني عشر شهرًا"], fact1:"3 مشاريع", fact1Label:"أثر مؤسسي جماعي", fact2:"12 شهرًا", fact2Label:"متابعة بعد التخرج" }
    },
    en: {
      uae: { number:"STATION 01", code:"STATION 01 / UAE", title:"United Arab Emirates", image:"assets/stations/uae.svg", alt:"Animated UAE preparation station", description:"The national foundation phase builds a common understanding of the state, aviation, defence and industrial enterprise. Participants work alongside selected national organisations through a daily programme of mentoring, assignments and assessment.", points:["Strategic leadership, air power and capability development","Professional attachment inside selected national organisations","Understanding the national value chain, industry and partnerships"], fact1:"Foundation", fact1Label:"Common strategic baseline", fact2:"Daily", fact2Label:"Mentoring, tasks, assessment" },
      uk: { number:"STATION 02", code:"STATION 02 / UNITED KINGDOM", title:"United Kingdom", image:"assets/stations/uk.svg", alt:"Animated United Kingdom preparation station", description:"An intensive programme focused on technical and engineering talent development, military leadership and executive education through formal arrangements with suitable military and academic institutions.", points:["Designed residential learning in a military technical environment","Executive modules in leadership and decision-making","Engagement with leading universities and training institutions"], fact1:"3+ weeks", fact1Label:"Intensive residential module", fact2:"Integrated", fact2Label:"Learning and application" },
      france: { number:"STATION 03", code:"STATION 03 / FRANCE", title:"France", image:"assets/stations/france.svg", alt:"Animated France preparation station", description:"A station focused on internationalising national industry, engineering, business development, government relations, industrial partnerships and executive knowledge transfer to the next generation.", points:["Programme with a national industrial office or entity in Europe","Government affairs and international business development","Engineering, manufacturing, supply chains and partnerships"], fact1:"Industry", fact1Label:"From national to global", fact2:"Executive", fact2Label:"Direct leadership exposure" },
      usa: { number:"STATION 04", code:"STATION 04 / UNITED STATES", title:"United States", image:"assets/stations/usa.svg", alt:"Animated United States preparation station", description:"An advanced station to understand security cooperation, military sales, programme and contract management, government relations and short specialist programmes delivered by approved institutions.", points:["Government security cooperation and military sales","Programme, contract and industrial relationship management","Specialist modules in leadership, acquisition and supply"], fact1:"FMS", fact1Label:"Government system insight", fact2:"Specialist", fact2Label:"Designed courses and workshops" },
      return: { number:"STATION 05", code:"STATION 05 / RETURN & IMPACT", title:"Return & Impact", image:null, alt:"Return and impact scene", description:"Experience converges into maturity and application. Participants translate learning into institutional decisions and projects, then deliver a final briefing, execution path and follow-up plan.", points:["Priority institutional challenges with clear ownership","Leadership briefing with options and recommendations","Impact measurement at six and twelve months"], fact1:"3 projects", fact1Label:"Collective institutional impact", fact2:"12 months", fact2Label:"Post-graduation follow-up" }
    }
  };

  const state = { lang: "ar", station: "uae" };
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";
  const hasLenis = typeof Lenis !== "undefined";

  if (hasGSAP) gsap.registerPlugin(ScrollTrigger);

  // Lenis integration — exact synchronization requested.
  let lenis = null;
  if (hasGSAP && hasLenis && !reducedMotion) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true, smoothTouch: false });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  const q = (selector, scope = document) => scope.querySelector(selector);
  const qa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function setLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("en", lang === "en");
    q("#langToggle").textContent = lang === "ar" ? "EN" : "ع";

    qa("[data-i18n]").forEach((el) => {
      const value = translations[lang][el.dataset.i18n];
      if (value !== undefined) el.textContent = value;
    });

    qa("[data-i18n-html]").forEach((el) => {
      const value = translations[lang][el.dataset.i18nHtml];
      if (value !== undefined) el.innerHTML = value;
    });

    renderStation(state.station, false);
    try { localStorage.setItem("samtLanguage", lang); } catch (_) {}
    if (hasGSAP) requestAnimationFrame(() => ScrollTrigger.refresh());
  }

  q("#langToggle")?.addEventListener("click", () => setLanguage(state.lang === "ar" ? "en" : "ar"));

  function renderReturnVisual(container) {
    container.innerHTML = `
      <div class="return-visual" aria-hidden="true">
        <div class="return-visual__core"><strong>IMPACT</strong><span>6 / 12 MONTHS</span></div>
        <i class="return-visual__orbit return-visual__orbit--1"></i>
        <i class="return-visual__orbit return-visual__orbit--2"></i>
        <i class="return-visual__orbit return-visual__orbit--3"></i>
        <b class="return-visual__node return-visual__node--1">01</b>
        <b class="return-visual__node return-visual__node--2">02</b>
        <b class="return-visual__node return-visual__node--3">03</b>
      </div>`;
  }

  function renderStation(key, animate = true) {
    state.station = key;
    const data = stations[state.lang][key];
    const media = q("#stationMedia");
    const copy = q("#stationCopy");

    qa(".station-tab").forEach((tab, index) => {
      const active = tab.dataset.station === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      if (active) q(".station-nav__line i").style.transform = `translateX(${(state.lang === "ar" ? -1 : 1) * index * 100}%)`;
    });

    const updateContent = () => {
      q("#stationNumber").textContent = data.number;
      q("#stationTitle").textContent = data.title;
      q("#stationDescription").textContent = data.description;
      q("#stationFact1").textContent = data.fact1;
      q("#stationFact1Label").textContent = data.fact1Label;
      q("#stationFact2").textContent = data.fact2;
      q("#stationFact2Label").textContent = data.fact2Label;
      q("#stationCode").textContent = data.code;
      q("#stationPoints").innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");

      if (data.image) {
        media.innerHTML = `<img id="stationImage" src="${data.image}" alt="${data.alt}" /><div class="station-media__scrim"></div><div class="station-media__code" id="stationCode">${data.code}</div>`;
      } else {
        media.innerHTML = `<div class="station-media__scrim"></div><div class="station-media__code" id="stationCode">${data.code}</div>`;
        renderReturnVisual(media);
        media.insertAdjacentHTML("beforeend", `<div class="station-media__scrim"></div><div class="station-media__code" id="stationCode">${data.code}</div>`);
      }
    };

    if (animate && hasGSAP && !reducedMotion) {
      const tl = gsap.timeline();
      tl.to([media, copy], { autoAlpha: 0, y: 14, duration: .24, ease: "power2.in", stagger: .04 })
        .add(updateContent)
        .fromTo([media, copy], { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: .62, ease: "power3.out", stagger: .08 });
    } else {
      updateContent();
    }
  }

  qa(".station-tab").forEach((tab) => tab.addEventListener("click", () => renderStation(tab.dataset.station)));
  const stationOrder = ["uae", "uk", "france", "usa", "return"];
  q("#stationPrev")?.addEventListener("click", () => renderStation(stationOrder[(stationOrder.indexOf(state.station) - 1 + stationOrder.length) % stationOrder.length]));
  q("#stationNext")?.addEventListener("click", () => renderStation(stationOrder[(stationOrder.indexOf(state.station) + 1) % stationOrder.length]));

  // Mobile menu.
  const menuToggle = q("#menuToggle");
  const siteNav = q("#siteNav");
  function closeMenu() { menuToggle?.setAttribute("aria-expanded", "false"); siteNav?.classList.remove("is-open"); }
  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    siteNav.classList.toggle("is-open", open);
  });
  qa("#siteNav a").forEach((a) => a.addEventListener("click", closeMenu));
  addEventListener("keydown", (e) => { if (e.key === "Escape") { closeMenu(); closeModal(); } });

  // Modal system.
  let lastFocused = null;
  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    lenis?.stop();
    requestAnimationFrame(() => {
      if (hasGSAP && !reducedMotion) gsap.fromTo(modal.querySelector(".modal__panel"), { y: 30, scale: .97, autoAlpha: 0 }, { y: 0, scale: 1, autoAlpha: 1, duration: .55, ease: "power3.out" });
      modal.querySelector(".modal__close")?.focus();
    });
  }
  function closeModal() {
    const modal = q(".modal:not([hidden])");
    if (!modal) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    lenis?.start();
    lastFocused?.focus?.();
  }
  qa("[data-modal-open]").forEach((button) => button.addEventListener("click", () => openModal(button.dataset.modalOpen)));
  qa("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));

  // Smooth anchor navigation.
  qa('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = q(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      if (lenis) lenis.scrollTo(target, { duration: 1.25 });
      else target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    });
  });

  // Loader and intro.
  const loaderValue = { value: 0 };
  if (hasGSAP) {
    gsap.to(loaderValue, {
      value: 100, duration: 1.25, ease: "power2.inOut",
      onUpdate: () => {
        const p = Math.round(loaderValue.value);
        q("#loaderPercent").textContent = `${p}%`;
        q(".preloader__line i").style.width = `${p}%`;
      },
      onComplete: () => {
        document.body.classList.remove("is-loading");
        q(".preloader").classList.add("is-hidden");
        runIntro();
        ScrollTrigger.refresh();
      }
    });
  } else {
    document.body.classList.remove("is-loading");
    q(".preloader").classList.add("is-hidden");
  }

  function runIntro() {
    if (!hasGSAP || reducedMotion) return;
    gsap.timeline({ defaults: { ease: "power4.out" } })
      .from(".site-header", { y: -28, autoAlpha: 0, duration: .75 })
      .from(".hero__eyebrow", { y: 24, autoAlpha: 0, duration: .65 }, "-=.4")
      .from(".hero__line:first-of-type span", { yPercent: 115, duration: 1.15 }, "-=.25")
      .from(".hero__line--offset span", { yPercent: -115, duration: 1.15 }, "-=.9")
      .to(".hero__slash", { scaleX: 1, duration: 1 }, "-=.85")
      .from(".hero__lower > *", { y: 28, autoAlpha: 0, duration: .8, stagger: .1 }, "-=.65")
      .from(".hero__metrics", { y: 24, autoAlpha: 0, duration: .7 }, "-=.45")
      .from(".scroll-cue", { autoAlpha: 0, y: 16, duration: .55 }, "-=.35");
  }

  if (hasGSAP) {
    // Global progress.
    gsap.to(".page-progress span", { scaleX: 1, ease: "none", scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: true } });
    gsap.to(".scroll-cue", { autoAlpha: 0, y: 20, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "20% top", scrub: true } });
    gsap.to(".hero__content", { yPercent: 18, scale: .97, autoAlpha: .3, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero__halo--a", { xPercent: -18, yPercent: 30, rotation: 18, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1.1 } });
    gsap.to(".hero__halo--b", { xPercent: 15, yPercent: -24, rotation: -16, ease: "none", scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1.1 } });

    qa(".reveal-up").forEach((el) => gsap.from(el, { y: 42, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 86%", once: true } }));
    qa(".split-reveal").forEach((el) => gsap.from(el, { yPercent: 28, autoAlpha: 0, duration: 1.05, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 86%", once: true } }));
    qa(".reveal-card").forEach((el, i) => gsap.from(el, { y: 38, scale: .97, autoAlpha: 0, duration: .85, delay: i * .05, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }));

    // Horizontal journey.
    const journey = q(".journey");
    const journeyTrack = q("#journeyTrack");
    const getJourneyDistance = () => Math.max(0, journeyTrack.scrollWidth - innerWidth);
    const journeyTween = gsap.to(journeyTrack, { x: () => -getJourneyDistance(), ease: "none", scrollTrigger: { trigger: journey, start: "top top", end: () => `+=${getJourneyDistance() + innerHeight * 1.2}`, scrub: 1, invalidateOnRefresh: true } });
    gsap.to(".journey__progress span", { scaleX: 1, ease: "none", scrollTrigger: { trigger: journey, start: "top top", end: () => `+=${getJourneyDistance() + innerHeight * 1.2}`, scrub: true } });
    qa(".journey-card").forEach((card) => {
      gsap.to(q(".journey-card__shape", card), { rotation: 110, scale: 1.08, ease: "none", scrollTrigger: { trigger: card, containerAnimation: journeyTween, start: "left right", end: "right left", scrub: 1 } });
    });

    // Station sequence driven by scroll.
    ScrollTrigger.create({
      trigger: ".stations", start: "top top", end: "bottom bottom", scrub: true,
      onUpdate: (self) => {
        const index = Math.min(stationOrder.length - 1, Math.floor(self.progress * stationOrder.length));
        const key = stationOrder[index];
        if (key !== state.station) renderStation(key);
      }
    });

    // Component reveals.
    qa(".selection-gates article,.competency-card,.impact-grid article").forEach((el, i) => gsap.from(el, { y: 42, autoAlpha: 0, duration: .85, delay: (i % 4) * .05, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } }));
    qa(".assessment__flow article").forEach((el, i) => gsap.from(el, { x: state.lang === "ar" ? -36 : 36, autoAlpha: 0, duration: .75, delay: i * .06, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
    gsap.from(".governance-map", { scale: .8, autoAlpha: 0, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".governance-map", start: "top 80%", once: true } });
    gsap.from(".approval-block", { y: 45, scale: .97, autoAlpha: 0, duration: 1.1, ease: "power4.out", scrollTrigger: { trigger: ".approval-block", start: "top 86%", once: true } });

    // Ambient movement.
    gsap.to(".ambient__glow--violet", { xPercent: -24, yPercent: 18, duration: 13, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".ambient__glow--cyan", { xPercent: 19, yPercent: -15, duration: 16, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }

  // Magnetic interaction.
  if (!reducedMotion && matchMedia("(pointer:fine)").matches && hasGSAP) {
    qa(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .14, y: (e.clientY - r.top - r.height / 2) * .14, duration: .35, ease: "power3.out" });
      });
      el.addEventListener("pointerleave", () => gsap.to(el, { x: 0, y: 0, duration: .65, ease: "elastic.out(1,.45)" }));
    });
  }

  // Header and active navigation.
  const header = q("#siteHeader");
  const navLinks = qa("#siteNav a");
  const sections = qa("main section[id]");
  function updateHeader() {
    header.classList.toggle("is-scrolled", scrollY > 16);
    let active = "home";
    sections.forEach((section) => { if (scrollY >= section.offsetTop - innerHeight * .4) active = section.id; });
    navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${active}`));
  }
  addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  // Cursor halo.
  if (matchMedia("(pointer:fine)").matches) addEventListener("pointermove", (e) => { const halo = q("#cursorHalo"); halo.style.left = `${e.clientX}px`; halo.style.top = `${e.clientY}px`; }, { passive: true });

  // Particle canvas.
  const canvas = q("#particleCanvas");
  const ctx = canvas?.getContext("2d");
  let particles = [], raf = 0, dpr = 1;
  function resizeCanvas() {
    if (!canvas || !ctx) return;
    dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(90, Math.max(34, Math.floor(innerWidth / 18)));
    particles = Array.from({ length: count }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 1.5 + .25, vx: (Math.random() - .5) * .08, vy: Math.random() * .11 + .02, a: Math.random() * .34 + .05 }));
  }
  function drawParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particles.forEach((p) => {
      p.x += p.vx; p.y -= p.vy;
      if (p.y < -8) { p.y = innerHeight + 8; p.x = Math.random() * innerWidth; }
      if (p.x < -8) p.x = innerWidth + 8; if (p.x > innerWidth + 8) p.x = -8;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(220,222,255,${p.a})`; ctx.fill();
    });
    raf = requestAnimationFrame(drawParticles);
  }
  if (canvas && ctx && !reducedMotion) { resizeCanvas(); drawParticles(); }

  let resizeTimer;
  addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { resizeCanvas(); if (hasGSAP) ScrollTrigger.refresh(); }, 180); });
  document.addEventListener("visibilitychange", () => { if (!canvas || reducedMotion) return; if (document.hidden) cancelAnimationFrame(raf); else drawParticles(); });

  // Initial state.
  try { state.lang = localStorage.getItem("samtLanguage") || "ar"; } catch (_) {}
  setLanguage(state.lang);
  renderStation("uae", false);
  document.fonts?.ready?.then(() => hasGSAP && ScrollTrigger.refresh());
})();
