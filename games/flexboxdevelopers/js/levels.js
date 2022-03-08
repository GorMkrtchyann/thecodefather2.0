var levels = [
  {
    name: 'justify-content 1',
    instructions: {
      'en': '<p>Բարի գալուստ Flexbox Developers խաղ, որտեղ դուք օգնում եք Developer-ին և ընկերներին գրելով CSS կոդ: Ուղորդեք նրան դեպի աջ կողմում գտնվող համապատասխան լեզուն՝ օգտագործելով <code>justify-content</code> հատկությունը, որը հավասարեցնում է հորիզոնական և ընդունում հետևյալ արժեքները.</p><ul><li><code>flex-start</code>: Հավասարեցնում է ձախ կողմից.</li><li><code>flex-end</code>:Հավասարեցնում է աջ կողմից.</li><li><code>center</code>: Հավասարեցնում է դեպի կենտրոն.</li><li><code>space-between</code>: Պահում է իրար մեջ հավասար տարածություն </li><li><code>space-around</code>: Պահում է իր շուրջը հավասար տարածություն </li></ul><p>Օրինակի համար, <code>justify-content: flex-end;</code> նա գնում է դեպի աջ. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
      },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Use <code>justify-content</code> Էլի օգնիր նրան հասնել իրա լեզվին. Հիշեք, որ այս CSS հատկությունը հավասարեցնում էհորիզոնական և ընդունում հետևյալ արժեքները:</p><ul><li><code>flex-start</code>: Հավասարեցնում է ձախ կողմից.</li><li><code>flex-end</code>: Հավասարեցնում է աջ կողմից.</li><li><code>center</code>: Հավասարեցնում է դեպի կենտրոն.</li><li><code>space-between</code>: Պահում է իրար մեջ հավասար տարածություն.</li><li><code>space-around</code>: Պահում է իր շուրջը հավասար տարածություն</li></ul>',
    },
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 3',
    instructions: {
      'en': '<p>Օգնիր նրանց հասնել իրենց լեզուների օգտագործելով<code>justify-content</code>. Այս անգամ լեզուները շատ տարածություն ունեն իրենց շուրջը:</p><p>Եթե մոռանում եք արժեքները ապա մկնիկով սեղմեք նրան <code>justify-content</code>.</p>',
},
    board: 'gyr',
    style: {'justify-content': 'space-around'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 4',
    instructions: {
      'en': '<p>Շրունակեք նույն կերպով, եթե մոռանաք սեղմեք վրան <code>justify-content</code>.</p>',
},
    board: 'gyr',
    style: {'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 1',
    instructions: {
      'en': '<p>Հիմա օգտագործեք <code>align-items</code> օգնենք նրանց հասնել լեզուներին. Այս CSS հատկությունը միավորում է տարրերը ուղղահայաց և ընդունում հետևյալ արժեքները:</p><ul><li><code>flex-start</code>: Հավասարեցնում է դեպի վերև.</li><li><code>flex-end</code>: հավասարեցնում է դեպի ներքև.</li><li><code>center</code>: Հավասարեցնում է 4 կողմերից մեջտեղ.</li><li><code>baseline</code>: Հավասվում է մի գծով.</li><li><code>stretch</code>: Սա նրա սկզբնական դիրքն է.</li></ul>',
},
    board: 'gyr',
    style: {'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 2',
    instructions: {
      'en': '<p>Նրան ուղորդիր մեջտեղ օգտագործելով սրանք<code>justify-content</code> և <code>align-items</code>.</p>',
      },
    board: 'g',
    style: {'justify-content': 'center', 'align-items': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-items 3',
    instructions: {
      'en': '<p>Ուղորդիր նրանց օգտագործելով սրանք <code>justify-content</code> և <code>align-items</code>.</p>',
    },
    board: 'gyr',
    style: {'justify-content': 'space-around', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 1',
    instructions: {
      'en': '<p>Developer-ը պետք է դասավորվեն իրենց լեզուներին համապտասխան օգտագործելով սա <code>flex-direction</code>. Այս CSS հատկությունը սահմանում է կոնտեյների մեջ տեղադրված ուղղության տարրերը և ընդունում է հետևյալ արժեքները:</p><ul><li><code>row</code>: Սա սկզբնական տարբերակն է։</li><li><code>row-reverse</code>: Սա դասավորում է աջից ձախ։</li><li><code>column</code>: Սա դասավորում է վերևից ներքև։</li><li><code>column-reverse</code>: Սա դասավորում է ներքևից վերև</li></ul>',
      },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 2',
    instructions: {
      'en': '<p>Օգնեք դասավորվեն ուղղահայաց <code>flex-direction</code>. Այս CSS հատկությունը սահմանում է կոնտեյների մեջ տեղադրված ուղղության տարրերը և ընդունում է հետևյալ արժեքները:</p><ul><li><code>row</code>: Սա սկզբնական տարբերակն է։</li><li><code>row-reverse</code>: Սա դասավորում է աջից ձախ։</li><li><code>column</code>: Սա դասավորում է վերևից ներքև։</li><li><code>column-reverse</code>: Սա դասավորում է ներքևից վերև</li></ul>',
      },
    board: 'gyr',
    style: {'flex-direction': 'column'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 3',
    instructions: {
      'en': '<p>Օգնեք նրանց գտնել իրենց հստակ տեղերը։ Երկուսնել պետք կգան <code>flex-direction</code> և <code>justify-content</code> նրանց այնտեղ հասցնելու համար.</p><p>Ուշադրություն դարձրեք, որ երբ ուղղությունը դնում եք հակադարձ տողի կամ սյունակի վրա, սկիզբն ու վերջը նույնպես հակադարձվում են:</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 4',
    instructions: {
      'en': '<p>Օգնեք նրան հասնել լեզուներին օգտագործելով <code>flex-direction</code> և <code>justify-content</code>.</p><p>Ուշադրություն դարձրեք, որ երբ ճկման ուղղությունը սյունակ է, <code>justify-content</code> փոփոխություններ դեպի ուղղահայաց և <code>align-items</code> դեպի հորիզոնական.</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'column', 'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 5',
    instructions: {
      'en': '<p>Շարունակեք օգտագործելով սրանք <code>flex-direction</code> և <code>justify-content</code>.</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'column-reverse', 'justify-content': 'space-between'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-direction 6',
    instructions: {
      'en': '<p>Օգնեք նրանց հասնել իրենց լեզուներին օգտագործելով <code>flex-direction</code>, <code>justify-content</code>, և <code>align-items</code>.</p>',
      },
    board: 'gyr',
    style: {'flex-direction': 'row-reverse', 'justify-content': 'center', 'align-items': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'order 1',
    instructions: {
      'en': '<p>Երբեմն կոնտեյների տողերի կամ սյունակների հերթականությունը փոխելը բավարար չէ: Այս դեպքերում մենք կարող ենք կիրառել <code>order</code> հատկությունը առանձին տարրերի վրա: Սզկբնականում, տարրերն ունեն 0 արժեք, բայց մենք կարող ենք օգտագործել այս հատկությունը նաև այն սահմանելու դրական կամ բացասական ամբողջ արժեք (-2, -1, 0, 1, 2):</p><p>Օգտագործեք <code>order</code> հատկությունը՝ վերադասավորելու Developer-ներին ըստ նրանց լեզուների:</p>',
      },
    board: 'gyr',
    selector: '> :nth-child(2)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '2'},
    before: "#pond {\n  display: flex;\n}\n\n.js {\n",
    after: "}"
  },
  {
    name: 'order 2',
    instructions: {
      'en': '<p>Օգտագործեք <code> order </code> հատկությունը՝ developer-ին իր լեզունն ուղարկելու համար:</p>',
      },
    board: 'gggrg',
    selector: '> :nth-child(4)',
    classes: {'#pond, #background': 'wrap'},
    style: {'order': '-1'},
    before: "#pond {\n  display: flex;\n}\n\n.css {\n",
    after: "}"
  },
  {
    name: 'align-self 1',
    instructions: {
      'en': '<p>Մեկ այլ հատկություն, որը կարող եք կիրառել առանձին տարրերի համար, <code>align-self</code> է: Այս հատկությունն ընդունում է նույն արժեքները, ինչ <code>align-items</code> և դրա արժեքը կոնկրետ տարրի համար:</p>',
      },
    board: 'ggygg',
    selector: '> :nth-child(3)',
    style: {'align-self': 'flex-end'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.js {\n",
    after: "}"
  },
  {
    name: 'align-self 2',
    instructions: {
      'en': '<p>Համատեղեք <code>order</code> <code>align-self</code>-ի հետ օգնելու համար Developer-ներին</p>',
      },
    board: 'ygygg',
    selector: '> .yellow',
    style: {'align-self': 'flex-end', 'order': '2'},
    before: "#pond {\n  display: flex;\n  align-items: flex-start;\n}\n\n.js {\n",
    after: "}"
  },
  {
    name: 'flex-wrap 1',
    instructions: {
      'en': '<p>Օ ոչ! Բոլորը սեղմված են իրար և իրենց տեղերում չեն. Դասավորեք դրանք՝ օգտագործելով <code>flex-wrap</code>-ը, որն ընդունում է հետևյալ արժեքները:</p><ul><li><code>nowrap</code>: Չի անում տողադարձ.</li><li><code>wrap</code>: Տողադարձ է անում.</li><li><code>wrap-reverse</code>: Տողադարձ է անում և պտտում այն</li></ul>',
      },
    board: 'ygggggr',
    style: {'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-wrap 2',
    instructions: {
      'en': '<p>Օգնեք այս Developer-ի բանակին ձևավորել երեք կարգավորված սյունակներ՝ օգտագործելով <code>flex-direction</code> և <code>flex-wrap</code>.</p>',
      },
    board: 'gggggrrrrryyyyy',
    style: {'flex-direction': 'column', 'flex-wrap': 'wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'flex-flow 1',
    instructions: {
      'en': '<p>Երկու հատկություններ <code>flex-direction</code> և <code>flex-wrap</code> այնքան հաճախ են օգտագործվում միասին, որ սղագրության հատկությունը <code>flex-flow</code> ստեղծվել է դրանք միավորելու համար: Այս սղագրության հատկությունն ընդունում է երկու հատկության արժեքը, որոնք բաժանված են բացատով:</p><p>Օրինակ, դուք կարող եք օգտագործել <code>flex-flow: row wrap</code>՝ տողեր սահմանելու և դրանք փաթաթելու համար:</p><p> </p><p>Փորձեք օգտագործել <code>flex-flow</code> նախորդ մակարդակը կրկնելու համար:</p>',
      },
    board: 'gggggrrrrryyyyy',
    style: {'flex-flow': 'column wrap'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'align-content 1',
    instructions: {
      'en': '<p>Developer-ները փռված են ամբողջ տարածքով մեկ, բայց լեզուները վերևում հավաքված են։ Դուք կարող եք օգտագործել <code>align-content</code>՝ սահմանելու համար, թե ինչպես են մի քանի տողերը միմյանցից հեռու: Այս հատկությունն ընդունում է հետևյալ արժեքները.</p><ul><li><code>flex-start</code>. Գծերը փաթեթավորված են բեռնարկղի վերևում:</li><li><code>flex- վերջ</code>. Տեղադրված են ներքևի մասում:</li><li><code>center</code>. Տեղադրված են ուղղահայաց կենտրոնում:</li><li> <code>միջև</code>. տողերը ցուցադրվում են դրանց միջև հավասար տարածությամբ:</li><li><code>տարածություն շուրջը</code>. տողերը ցուցադրվում են դրանց շուրջը հավասար տարածություններով:</li>< li><code>ձգում</code>. ձգվում են, որպեսզի տեղավորվեն կոնտեյների մեջ:</li></ul><p>Սա կարող է շփոթեցնող լինել, բայց <code>align-content</code>-ը որոշում է միջակայքը: տողեր, մինչդեռ <code>align-items</code>-ը որոշում է, թե ինչպես են տարրերն ամբողջությամբ դասավորված կոնտեյների ներսում: Երբ կա միայն մեկ տող, <code>align-content</code> ազդեցություն չի ունենում:</p>',
      },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-start'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 2',
    instructions: {
      'en': '<p>Դասավորեք օգտագործելով <code>align-content</code></p>',
      },
    board: 'ggggggggggggggg',
    classes: {'#pond, #background': 'wrap'},
    style: {'align-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 3',
    instructions: {
      'en': '<p>Developer-ները խնջույք են կազմակերպել, բայց տուն գնալու ժամանակն է։ Օգտագործեք <code>flex-direction</code> և <code>align-content</code></p>',
      },
    board: 'rgggyrgggyrgggy',
    classes: {'#pond, #background': 'wrap'},
    style: {'flex-direction': 'column-reverse', 'align-content': 'center'},
    before: "#pond {\n  display: flex;\n  flex-wrap: wrap;\n",
    after: "}"
  },
  {
    name: 'align-content 4',
    instructions: {
      'en': '<p>Եկեք վերջի անգամ նրանց լեզուների մոտ ուղարկենք նրանցուվ ինչ որ սովորել ենք </p><ul><li><code>justify-content</code></li><li><code>align-items</code></li><li><code>flex-direction</code></li><li><code>order</code></li><li><code>align-self</code></li><li><code>flex-wrap</code></li><li><code>flex-flow</code></li><li><code>align-content</code><img src="https://code.org/api/hour/finish_flexbox_froggy.png"></li></ul>',
      },
    board: 'rggggyy',
    style: {'flex-direction': 'column-reverse', 'flex-wrap': 'wrap-reverse', 'align-content': 'space-between', 'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>Դու հաղթեցիր! Flexbox-ի ձեր վարպետության շնորհիվ դուք կարողացաք բոլորին օգնել հասնել իրենց լեզուներին:</p>',
    },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  style: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
