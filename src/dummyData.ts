import { IDocument, IFounder } from './@types/types';

export const Founders: IFounder[] = [
  {
    id: 1,
    founderName: 'Oswell E. Spencer',
    portrait:
      'https://static.wikia.nocookie.net/residentevil/images/c/c9/RE_Resistance_Spencer.jpg',
    occupation: ['President and CEO of Umbrella'],
    intro:
      'Dr. Oswell E. Spencer, Earl Spencer was an aristocratic British billionaire, virologist and eugenicist.',
  },
  {
    id: 2,
    founderName: 'James Marcus',
    portrait: '/images/JamesMarcusPortrait.jpg',
    occupation: [
      "Head of Umbrella's Executive Training School (1968-1988)",
      'Umbrella Scientist (1968-1988)',
    ],
    intro:
      "Dr. James Marcus was a virologist who led viral weapons research in the 20th century, serving as one of the co-founders of Umbrella Pharmaceuticals and holding the Director position at the company's executive training school.",
  },
  {
    id: 3,
    founderName: 'Edward Ashford',
    portrait:
      'https://static.wikia.nocookie.net/residentevil/images/f/f4/Edward_Ashford.png',
    occupation: ['Virologist', 'Company executive'],
    intro:
      'Dr. Edward Ashford, 5th Earl Ashford was a British virologist and co-founder of Umbrella Pharmaceuticals.',
  },
];

export const Docs: Array<IDocument> = [
  {
    id: 'd3b38f6651c97868c05b81e21ed71f5b33c80bcffc08bff20f95e38e1d0d5dc0',
    umFileId: 'RC-000001',
    fileName: 'The Origin of Progenitor Virus',
    content: [
      {
        pageNum: 1,
        paragraph1:
          "The Progenitor virus is from a family of RNA viruses. Progenitor is ancient and is suspected of being hundreds of millions, if not billions of years old. It is considered to have both aided and hindered the evolution of Earth's ecology through the extremities of its resulting mutations.",
        paragraph2:
          'While otherwise behaving as a typical Group VI virus in the Baltimore classification, Progenitor is distinct from all other viruses by being able to reverse lysis in cells and revive organisms that have been dead for considerable lengths of time. Whereas other retroviruses, such as Human Immunodeficiency Virus, target specific cells of a particular animal physiology, Progenitor is capable of infecting the cells of any organism, whether animal, fungal, plant, or bacterial.',
        paragraph3:
          'Considerable research on Progenitor has been undertaken since its discovery in the late 1960s, and a number of engineered strains have since come into existence, primarily used in bioweapons research.',
      },
    ],
    date: '1959-09-17',
  },
  {
    id: '37cca4b5e45432da364869fb4cdf55faa278e4fe4716e87447bdd23d5d9fea0f',
    umFileId: 'RC-000024',
    fileName: 'Tyrant Virus Research Record 1',
    content: [
      {
        pageNum: 1,
        paragraph1:
          'Tyrant Virus, also known as the t-Virus, is the general name given to a series of mutant Progenitor virus strains.',
        paragraph2:
          'From the discovery of the Progenitor Virus in December 1966, the ultimate goal of Dr. Oswell E. Spencer and his colleagues, Dr. Edward Ashford and Dr. James Marcus, was to usher in a new age of eugenics by using mutagenic viruses to improve the human race.',
        paragraph3:
          'To fund this program, known as the Wesker Project, they decided to engineer virus strains as military products, leading to the establishment of Umbrella Pharmaceuticals as a front for their research. Research on Progenitor strains was conducted simultaneously in various laboratories, with Ashford, Marcus, and Spencer each pursuing independent research. t-Virus research began in the late 1960s, shortly after the founding of Umbrella.',
      },
      {
        pageNum: 2,
        paragraph1:
          'As the t-Virus comprises a series of independently developed strains rather than a single virus, new strains do not necessarily rely on recent research conducted by other teams.',
        paragraph2:
          "Like any other virus, T-Viruses make contact with a cell's membrane and insert their genetic coding into the cell. The viral genome is absorbed into the cell, hijacking its intended functions and using them to produce virions similar to the original virus.",
        paragraph3:
          'The newly formed virions are then released from the host cell and infect neighboring cells, initiating the process once again.',
      },
    ],
    imgUrls: [
      'https://static.wikia.nocookie.net/residentevil/images/0/0d/Degeneration_-_t-Virus_under_microscope.png',
    ],
    date: '1960-06-24',
  },
  {
    id: '20c4320d52cf0f6bd5e059f6c12b884f8a9960ef78af72b6c46f8a17fd38999c',
    umFileId: 'RC-000039',
    fileName: 'The Origin of Golgotha Virus',
    content: [
      {
        pageNum: 1,
        paragraph1:
          'The Golgotha Virus, abbreviated as G-Virus, is a retrovirus in the Progenitor family of viruses. Golgotha was developed by Umbrella USA as a bioweapon to rival and surpass the Tyrant Virus ("t-Virus").',
        paragraph2:
          'Golgotha causes such extreme genetic mutations that victims are no longer recognizable as human.',
        paragraph3:
          "Golgotha was isolated in 1988 by Dr. William Birkin, the chief researcher at Umbrella USA's top-secret Arklay Laboratory.",
      },
      {
        pageNum: 2,
        paragraph1:
          "Its discovery was made following the immune system's inexplicable destruction of an NE-α Type parasite in the body of Lisa Trevor, a human test subject. Golgotha could theoretically have existed since the late 1960s when testing on her began, and was determined to be able to genetically alter a living being repeatedly and unpredictably, as well as repair damaged cells and revive the dead.",
        paragraph2:
          "These properties ran counter to Umbrella's plans to create a reliable military-grade B.O.W.s that could be controlled by Army trainers.",
        paragraph3:
          "Despite this, Umbrella Pharmaceuticals' CEO, Dr. Oswell E. Spencer, Earl Spencer, was interested in Golgotha for its potential eugenics purposes and authorized its development as an R&D project unrelated to the T-Virus Project.",
      },
    ],
    imgUrls: [
      'https://static.wikia.nocookie.net/residentevil/images/5/58/G-Virus.png',
    ],
    date: '1960-10-03',
  },
  {
    id: 'd5f003606a85dc5adb123ca99b0e97f25e61e8f506cd264df20b9e833d424943',
    umFileId: 'RC-000057',
    fileName: 'Arklay Laboratory Team members photo',
    content: [
      {
        pageNum: 1,
        paragraph1: 'Research Team of Arklay Laboratory',
      },
    ],
    imgUrls: [
      'https://static.wikia.nocookie.net/residentevil/images/2/2c/Arklay_Staff.PNG',
    ],
    date: '1967-04-05',
  },
  {
    id: '0c50b395dc5e5dce541766d072b811f74b06e43b311307986b406a799b7c338c',
    umFileId: 'RC-000087',
    fileName: 'Botany Book',
    content: [
      {
        pageNum: 1,
        title: '~ About Medical Herbs ~',
        paragraph1:
          'It is a well-known fact that there exist many plants that are credited with medicinal healing powers. Since ancient times, mankind has been healing wounds and diseases using various plants.',
        paragraph2:
          'In this book, we will sample three herbs that are a native of the Arklay Mountains and briefly outline each of their medicinal qualities. Each herb has a distinct color and a distinct medicinal quality.',
        paragraph3:
          'The green herb recovers physical strength. The blue herb neutralizes natural toxins. However, the red herb has no real effect by itself. We have found that mixing green and red herbs results in a magnified effect...',
      },
    ],
    imgUrls: [
      'https://static.wikia.nocookie.net/residentevil/images/f/f4/Botany_book_(re_danskyl7)_(1).jpg',
    ],
    date: '1996-03-24',
  },
  {
    id: '3b4d266931b691057704d7f8d4d403134c49ca3a7cb390cc74c271866a8335ed',
    umFileId: 'RC-000131',
    fileName: 'Virus pack produced by NEST',
    content: [
      {
        pageNum: 1,
        paragraph1: 'Results of NEST',
      },
    ],
    imgUrls: [
      'https://static.wikia.nocookie.net/residentevil/images/b/b3/Re2_cap11_lg.jpg',
    ],
    date: '1997-02-18',
  },
  {
    id: '2672b670941d394cb69726459265f34a60bd389052764be4c37a9e18a6120677',
    umFileId: 'RC-000151',
    authors: ['Martin Crackhorn'],
    fileName: "Researcher's Will",
    content: [
      {
        pageNum: 1,
        paragraph1: 'My dearest Alma.',
        paragraph2:
          "Let me first apologize for not being able to call you. A man wearing sunglasses didn't permit any phone calls. Sorry Alma.",
        paragraph3:
          "I sit here trying to think of where to begin, of how to explain in a few simple words all that's happened in my life since we last spoke, and already I fail.",
      },
      {
        pageNum: 2,
        paragraph1:
          "I hope this letter finds you well, and that you'll forgive the tangents of my pen; this isn't easy for me.",
        paragraph2:
          "Even as I write, I can feel the simplest of concepts slipping away, lost to feelings of despair and confusion - but I have to tell you what's in my heart before I can rest. Alma, please believe that what I'm telling you is the truth.",
        paragraph3:
          'The entire story would take hours for me to tell you, and time is short, so accept these things as fact: last month there was an accident in the lab and the virus we were studying leaked.',
      },
      {
        pageNum: 3,
        paragraph1:
          'All my colleagues who were infected are dead or dying, and the nature of the disease is such that those still living have lost their senses. This virus robs its victims of their humanity, forcing them in their sickness to seek out and destroy life.',
        paragraph2:
          'Even as I write these words, I can hear them, pressing against my door like mindless, hungry animals.',
        paragraph3:
          'Alma, I have tried to survive only to see you again. But my efforts only delayed the inevitable; I am infected, and there is no cure for what will follow - except to end my life before I lose the only thing that separates me from them.',
      },
      {
        pageNum: 4,
        paragraph1: 'My love for you.',
        paragraph2:
          "In an hour I'll have entered my eternal sleep where there is peace. Please understand. Please know that I'm sorry.",
        paragraph3: 'Martin Crackhorn',
      },
    ],
    date: '1998-06-03',
  },
  {
    id: '522701a345381a4afd68f838519dd2865acee0a1e760558a59e2427f3e99d0a7',
    umFileId: 'RC-000152',
    fileName: 'Mail from the Chief of Security',
    content: [
      {
        pageNum: 1,
        title: 'Attn: Chief of Security',
        paragraph1: 'Date: July 22, 1998 2:13',
        paragraph2:
          'X Day is drawing upon us. Execute the following procedures within one week. Prompt actions are demanded.',
      },
      {
        pageNum: 2,
        paragraph1:
          "1. Lure S.T.A.R.S. to the estate, and obtain B.O.W.'s raw combat data against S.T.A.R.S.",
        paragraph2:
          '2. Collect two embryos of each mutated specimens as samples, excluding the Tyrant. Dispose of the Tyrant.',
        paragraph3:
          '3. Ensure complete disposal of the Arklay Laboratory including all personnel and test animals. Disguise their deaths as an accident. When the above procedures are executed, report to headquarters for further instructions.',
      },
      {
        pageNum: 3,
        paragraph1:
          'If for some reason you are unable to execute the procedure by the deadline, report immediately. In case of emergency situations, report directly to the extension number 5691.',
        paragraph2: 'Good luck.',
        paragraph3: 'Umbrella Inc.',
      },
    ],
    date: '1998-07-22',
  },
  {
    id: 'a98945550172d14a551bf55312fa9a24fae96990a82d1a9a24815653a91037df',
    umFileId: 'RC-000179',
    fileName: 'Plant 42 Report',
    content: [
      {
        pageNum: 1,
        paragraph1:
          '4 days have passed since the accident and the plant at Point 42 is growing amazingly fast.',
        paragraph2:
          'It has been affected by the T-Virus differently than other plants have been and shows unique shape in addition to its size. Looking at the way it behaves, it is now difficult to determine what kind of plant it was originally.',
        paragraph3:
          'There are two ways in which Plant 42 gathers nutrition. The first one is through its root that reaches into the basement.',
        paragraph4:
          'Immediately after the accident, a scientist went mad and broke the water tank in the basement. Now the basement is filled with water. It is easily imaginable that some chemical elements were blended in the water and promotes the incredibly fast growth of Plant 42.',
        paragraph5:
          'Another part of Plant 42 from the basement grows through the duct and hangs down like so many bulbs from the ceiling of the first floor. Many vines come out of those bulbs and they are the second resource for its nutrition.',
      },
      {
        pageNum: 2,
        paragraph1:
          'Once sensing movement, Plant 42 shoots its vines around the prey and holds it. Then it starts sucking up blood, using the suckers located at the back of its vine.',
        paragraph2:
          'It also has some intelligence. It blocks the door by twinning its vines around it especially when it captures prey or is sleeping.',
        paragraph3: 'Several staff members have already fallen victim to this.',
        paragraph4: 'May 21st 1998',
        paragraph5: 'Henry Sarton',
      },
    ],
    date: '1998-05-21',
  },
  {
    id: '16780f9a7a57cc1be8cae47765a2170aa1e5b8ad9fdc536874e59fae819aac69',
    umFileId: 'RC-000214',
    fileName: 'T-Virus Vaccine - "Daylight" Development Report',
    authors: ['Dr. Peter Jenkins'],
    content: [
      {
        pageNum: 1,
        paragraph1:
          "Daylight is an antiretroviral drug developed to fight t-Virus infection. One of several drugs made for this purpose, Daylight's initial success in treating patients in the 1998 Raccoon City Destruction Incident led to its continued use for over a decade.",
        paragraph2:
          'This vaccine developed by Raccoon University professor Peter Jenkins shortly before and into the viral outbreak in Raccoon City.',
        paragraph3:
          'Daylight is considered the most potent vaccine, because it kills all traces of the virus completely.',
      },
    ],
    imgUrls: [
      'https://static.wikia.nocookie.net/residentevil/images/9/99/Daylight.png',
    ],
    date: '1998-06-15',
  },
  {
    id: 'aff2c75480601626c17d969f70d8393db1807d2da576de380e9c5458a1384e11',
    umFileId: 'RC-000227',
    fileName:
      'INSTRUCTIONS FOR SYNTHESIS OF THE G-VIRUS ANTIGEN: G-VACCINE. CODE NAMED "DEVIL."',
    authors: [
      'Dr. William Birkin',
      'Dr. Annette Birkin',
      'Top-secret team of Umbrella USA virologists',
    ],
    content: [
      {
        pageNum: 1,
        paragraph1:
          'Any beings infected by the G-virus will reproduce through the impregnation of an embryo within another living being.',
        paragraph2:
          "Unless rejected by the host, the embryo will undertake a process of gradual cellular invasion, infecting the host's cells on a molecular level as it rewrites their DNA.",
        paragraph3:
          'Once the metamorphosis is complete, the host will be capable of continuing this cycle of self-replication. The duration of time for the process to run its course will vary from subject to subject. In the early stages of cellular invasion, it is possible to halt progression of the metamorphosis through the administration of the G-vaccine antigen.',
      },
      {
        pageNum: 2,
        paragraph1: 'The following procedure details its synthesis.',
        paragraph2:
          'The vaccine creation requires the base vaccine. This can be arranged by the activator VAM. First set the empty cartridge to the VAM and activate it. After several moments the process will be complete and the white-colored base vaccine will be set in the cartridge automatically.',
        paragraph3:
          'Then confirm the green light is on, remove the cartridge, and proceed to the next step. Once the base vaccine has been prepared, set it in the vaccine synthesis machine located in the P-4 level experiment room. The machine is fully automated and only requires the user to push the sequence start switch. At this point, the program will run automatically and synthesis will be complete within approximately 10seconds.',
      },
      {
        pageNum: 3,
        paragraph1:
          'As the synthesis of DEVIL is an extremely delicate process, the quality will vary with slight shocks or changes in temperature. Careful handling is required for the proper results.',
      },
    ],
    imgUrls: [
      'https://static.wikia.nocookie.net/residentevil/images/6/65/G_Vaccine.png',
    ],
    date: '1998-07-11',
  },
  {
    id: 'b010d577ef5037b51006847e330d9eb9b5755c8470f3a6c9e8085e6db399806f',
    umFileId: 'RC-001019',
    fileName: 'Umbrella Europe Research Team Photo',
    content: [
      {
        pageNum: 1,
        paragraph1: 'Photo of The Research Team',
      },
    ],
    imgUrls: [
      '/images/tumblr_30d83eee01c45ec47ad13373d385eb74_e8d81697_1280.jpg',
    ],
    date: '2004-07-23',
  },
  {
    id: 'bd9e6b402d15fbae76ad8521feca908d1906f04adb33ae7b93c1d21b9a9a5abf',
    umFileId: 'RC-001273',
    fileName: 'Bio-Organic Weapons Report',
    content: [
      {
        pageNum: 1,
        title: 'About B.O.W.s',
        paragraph1:
          'Bio-Organic Weapon — An organic life form that has been turned into a weapon, usually by means of viral infection. The virus is designed not to kill the host outright, but to transform it into a creature that is suited for combat situations.',
        paragraph2:
          'The creatures that ran amok during the leak of the T-Virus in Raccoon City in 1998 are typical of such B.O.W.s. One of the most effective B.O.W.s produced by the T-Virus was the Tyrant, which gave many Raccoon City survivors a run for their money. Its high intelligence and strength made it a focus for researchers.',
      },
      {
        pageNum: 2,
        paragraph1:
          'Records of this are kept even with the BSAA. Below is one of those records.',
        paragraph2:
          ' --- The "T" in T-Virus stands for Tyrant: the ultimate human-based B.O.W.. Not only is a Tyrant incredibly strong, but it is also intelligent and capable of following orders. No other mutation may ever be capable of surpassing it.',
      },
    ],
    date: '2012-07-01',
  },
];

/*export const Products: Array<TProduct> = [
  {
    gtin: 'b111c40c59784379a146645c28434eb0',
    name: 'Nature Made Extra Strength Vitamin D3 5000 IU (125 mcg)',
    slogan:
      'Small changes in product size & weight lead to lower carbon emissions.',
    imgUrl:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/b432a963-a7e5-4a50-8116-26dc65f2ffe2.__CR0,0,2400,2400_PT0_SX300_V1___.jpg',
    description:
      'Nature Made Vitamin D3 5000 IU (125 mcg) is formulated for those with higher vitamin D needs or deficiency as determined by a healthcare professional. This supplement offers 625% of the daily value for this critical immune, bone, and muscle health support nutrient. Maintaining adequate levels of Vitamin D in your body throughout the entire year, has been shown to be an important part of your overall health.',
    info: {
      pulishedDate: '2000-11-29',
      manufacturer: 'Umbrella Pharmaceuticals',
    },
    genre: 'Health Foods',
    listPrice: 25,
    ratings: 4.8,
  },
  {
    gtin: '4a23f720e005bc9a0a0e45534daf27a3',
    name: 'Nature Made Vitamin B1 100 mg',
    slogan: 'HELPS SUPPORT BRAIN CELL & NERVOUS SYSTEM FUNCTION+ ',
    imgUrl:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/fccdfe58-7b91-4fe4-a515-d91398cefe13.__CR0,0,2400,2400_PT0_SX300_V1___.jpg',
    description:
      'Nature Made Vitamin B1 100 mg Tablets help support a healthy brain and provide nervous system support. Sourced from high quality ingredients, this gluten free B1 supplement is a dietary supplement that has no color added, no artificial flavors and no preservatives. This Nature Made B1 vitamin, also known as Thiamin, provides energy metabolism support(1). For those who don’t receive enough B1 in their diet, these B1 dietary supplements can help. Adults take one of these B1 tablets daily with water and a meal. Nature Made supplements are quality you can trust. USP has tested and verified ingredients, potency and manufacturing process. USP sets official standards for dietary supplements. Visit the USP verified website for more information. (1)Helps convert food into cellular energy. *Based on a survey of pharmacists who recommend branded vitamins and supplements.',
    info: {
      pulishedDate: '1999-10-07',
      manufacturer: 'Umbrella Pharmaceuticals',
    },
    genre: 'Health Foods',
    listPrice: 7,
    ratings: 4.7,
  },
  {
    gtin: '1019098f7a7bcffab51967148cac3077',
    name: "Nature's Bounty Zinc",
    slogan: 'Immune Support You Can Trust',
    imgUrl:
      'https://m.media-amazon.com/images/I/71PPuAK-auL._AC_UL480_FMwebp_QL65_.jpg',
    description:
      'Made by the #1 brand for Zinc supplements (2) support your immune system and overall health with Nature’s Bounty Zinc. (1) One 50 mg caplet a day provides more than your daily requirement of this essential mineral to keep you feeling your best. (1) Research shows that supplementing with Zinc year-round has many benefits. In addition to playing a vital role in immune support, Zinc can also function as an antioxidant in the body, contribute to skin and bone health, and assist in the formation of DNA. (1) As a component of the enzyme collagenese, Zinc has been clinically studied for its contribution to skin health. (1) For additional flexibility to meet dietary needs, Nature’s Bounty Zinc caplets are non-GMO and sugar and gluten free. For adults, take one caplet daily, preferably with a meal. With over 50 years of expertise and as the #1 Brand for Zinc supplements (2), you can trust that Nature’s Bounty Zinc supplements are a product of our company’s dedication to quality, consistency, and scientific research.',
    info: {
      pulishedDate: '1998-05-22',
      manufacturer: 'Umbrella Pharmaceuticals',
    },
    genre: 'Health Foods',
    listPrice: 5,
    ratings: 4.7,
  },
];*/

/*export const Projects: Array<IProject> = [
  {
    id: '7f1a21c6c8d5065f',
    projectName: 'Cerberus',
    description:
      'An early attempt at creating a controllable Bio Organic Weapon by Umbrella USA, in a project led by the Arklay Laboratory. Pronounced as the Greek word, "Kerberos", this creature was named after the mythological guardian of Hades, a gigantic dog with three heads and a collar made of venomous snakes.',
    models: [
      {
        id: 'aeabbc9d0c269b7a058cba822e559865',
        codeName: 'MA-39',
        version: '1.0.3',
        characteristics:
          'The Cerberus Project began in the early 1980s as the β strain was developed. It was hoped that the improved t-Virus strain would create mutants more adequate for sale as military products, and dobermans were specifically selected for the project due to their traits favouring military service. Though they suffered skin deterioration, their muscles were left largely intact, and this and their increased strength and aggression made them more dangerous. As this B.O.W. species was created from an existing animal, unlike the Hunter Program, the cost to create the Cerberus prototypes was low. Deemed a success, the later Cerberuses were created by cloning one of the prototypes.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/6/65/Cerberus_-_Resident_Evil.png',
        createdAt: '1995-07-05',
      },
    ],
    createdAt: '1995-07-01',
  },
  {
    id: '8c3b48b6ac57289f',
    projectName: 'Queen Leech',
    description:
      "The Queen Leech was a mutant leech created through experimentation on annelids with the t-Virus. Created as part of Dr. James Marcus' ongoing leech study, it was his final creation before his death. In the time after, it consumed his hippocampus and gained his memories.",
    models: [
      {
        id: '9f23d5d81a3c987cd46a5fff909ddc13',
        codeName: 'Queen Leech',
        version: '0.3.1',
        characteristics:
          "The Queen Leech was created in 1988 in a laboratory adjacent to Umbrella's executive training school in the Arklay Mountains. When Dr. Marcus was assassinated by the Umbrella Security Service, Queen Leech was dumped in a nearby treatment plant with his corpse. Seeing his body as a food source, Queen Leech began consuming it, and gained his memories after consuming the brain. It believed itself to be Marcus himself, reborn by divine intervention.",
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/5/59/Queenleech2.png',
        createdAt: '1995-08-16',
      },
    ],
    createdAt: '1995-08-15',
  },
  {
    id: '860404716c9df7a4',
    projectName: 'Hunters',
    description:
      '"Hunters" are a group of human-animal hybrids which were genetically engineered as biological weapons.',
    models: [
      {
        id: '16df8123ba021ee510992689fdf371f1',
        codeName: 'MA-121',
        version: '1.2.1',
        characteristics:
          'The Hunter α was one of the first fully-functional and marketable B.O.W.s produced by Umbrella. It was created by injecting reptilian DNA into a human embryo and administering the t-Virus as a bonding agent. The MA-121α went through intensive research and development at the underground lab in Raccoon City.',
        experimentalType: false,
        massProducted: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/2/2a/Hunter.jpg',
        createdAt: '1995-06-20',
      },
      {
        id: '0f83f51211c45c2e491558944b4d1431',
        codeName: 'MA-121',
        version: '1.1.0',
        characteristics:
          'The Hunter β was a prototype model developed by Umbrella U.S.A. for the Hunter line of Bio-Organic Weapons, designed as a derivative of the earlier α model.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/0/06/MA-121_Hunter_Beta.jpg',
        createdAt: '1995-06-16',
      },
      {
        id: '560a60c6f3851287f9a9e1c4fc694107',
        codeName: 'MA-124',
        version: '1.3.7',
        characteristics:
          'The Hunter γ model of Hunter was developed by Umbrella Europe as part of a reinvestigation into amphibian-based B.O.W.s, which failed ten years earlier with Dr. Marcus\' Lurker. It was nicknamed the "Frogger" by its development team.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/f/fa/RE3_Nemesis_Hunter_Y.jpeg',
        createdAt: '1995-06-18',
      },
    ],
    createdAt: '1995-06-15',
  },
  {
    id: '596b9a3ab583856e',
    projectName: 'Tyrant-Project',
    description:
      'The Tyrant is a human bio-weapon created through either a primary t-Virus infection to create a weapon, or the cloning of such specimens, with the intent to be used as super soldiers on the battlefield.',
    models: [
      {
        id: '628ffbabf855bee054939b3df1483e0d',
        codeName: 'T-001',
        version: '1.0.1',
        characteristics:
          'First functional model of Tyrant. Mutations caused an exposed heart and spine, ill-functioning nervous system causing muscle spasms.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/7/73/ProtoTyrant.png',
        createdAt: '1996-07-16',
      },
      {
        id: '1c04671e8a5be344c47210b6d9e47b2c',
        codeName: 'T-002',
        version: '1.0.2',
        characteristics:
          'Improved model over the T-001. Mutations only caused an exposed heart.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/8/82/Resident_Evil_1_HD_Tyrant.png',
        createdAt: '1996-07-17',
      },
      {
        id: '04a11fbf1521cf36395f300ecc76bb70',
        codeName: 'T-A.L.O.S.',
        version: '1.11.0',
        characteristics:
          'Heavily armoured T-011 Tyrant outfitted with cybernetic implants and a multiple-rocket launcher.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/c/cb/TALOS1.jpg',
        createdAt: '1996-07-18',
      },
      {
        id: '6ea98750abddcd022adb7d3cec871761',
        codeName: 'Bandersnatch',
        version: '1.11.0',
        characteristics:
          'Off-shoot project created following completion of T-001 prioritising cost-effectiveness. Possibly developed on Rockfort Island. A variant was created by the Organisation, resulting in Jabberwock S3, enhanced with t-Veronica Virus.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/8/80/Bandersnatcher.png',
        createdAt: '1996-07-19',
      },
      {
        id: '6a7a0b44c2833d91bfd3a2b14348945a',
        codeName: 'T-103',
        version: '1.3.0',
        characteristics:
          'First mass-produced Tyrant, of which there were dozens of clones. They were capable of following complex orders, and saw action in Raccoon City with such missions as retrieving a Golgotha Virus sample, and fighting Delta Force intruders.',
        experimentalType: false,
        massProducted: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/1/1e/Re2_tyrant.jpg',
        createdAt: '1996-07-20',
      },
      {
        id: '936055108ff4af04692bb1213925f645',
        codeName: 'T-078',
        version: '1.3.7',
        characteristics:
          'Experimental T-103 used to test the functionality of the model without a limiter coat. Modified with blunted claws and missing an arm. Released on Rockfort Island.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/2/2f/RECV_Tyrant_artwork.png',
        createdAt: '1996-07-21',
      },
      {
        id: '9eb6546a4e56c4fe47b2904c6d6a0502',
        codeName: 'Nemesis-T Type',
        version: '1.8.9',
        characteristics:
          'Experimental T-103 variant created by implanting an NE-α Type parasite into several T-103 host bodies. One was deployed to Raccoon City with orders to search and kill any surviving S.T.A.R.S. members to prove its hunting capabilities.',
        experimentalType: true,
        massProducted: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/b/b2/Nemesis-T_Type.png',
        createdAt: '1996-07-22',
      },
      {
        id: 'eb6b152e50fc2f34c9b64903595b01b3',
        codeName: 'Ivan',
        version: '2.0.0',
        characteristics:
          'Highly intelligent and human-appearing T-103 variant able to integrate better into human society. At least two were created.',
        experimentalType: false,
        massProducted: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/9/9c/Ivan.JPG',
        createdAt: '1998-11-23',
      },
    ],
    createdAt: '1996-07-25',
  },
];*/
