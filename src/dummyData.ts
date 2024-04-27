import { IFounder, IProduct, IProject } from './@types/types';

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

export const Products: IProduct[] = [
  {
    id: 1,
    gtin: 'b111c40c59784379a146645c28434eb0',
    name: 'Nature Made Extra Strength Vitamin D3 5000 IU (125 mcg)',
    slogan:
      'Small changes in product size & weight lead to lower carbon emissions.',
    imgUrl:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/b432a963-a7e5-4a50-8116-26dc65f2ffe2.__CR0,0,2400,2400_PT0_SX300_V1___.jpg',
    description:
      'Nature Made Vitamin D3 5000 IU (125 mcg) is formulated for those with higher vitamin D needs or deficiency as determined by a healthcare professional. This supplement offers 625% of the daily value for this critical immune, bone, and muscle health support nutrient. Maintaining adequate levels of Vitamin D in your body throughout the entire year, has been shown to be an important part of your overall health.',
    details: {
      pulishedDate: '2000-11-29',
      manufacturer: 'Umbrella Pharmaceuticals',
    },
    genre: 'Health Foods',
    listPrice: 25,
    ratings: 4.8,
  },
  {
    id: 2,
    gtin: '4a23f720e005bc9a0a0e45534daf27a3',
    name: 'Nature Made Vitamin B1 100 mg',
    slogan: 'HELPS SUPPORT BRAIN CELL & NERVOUS SYSTEM FUNCTION+ ',
    imgUrl:
      'https://m.media-amazon.com/images/S/aplus-media-library-service-media/fccdfe58-7b91-4fe4-a515-d91398cefe13.__CR0,0,2400,2400_PT0_SX300_V1___.jpg',
    description:
      'Nature Made Vitamin B1 100 mg Tablets help support a healthy brain and provide nervous system support. Sourced from high quality ingredients, this gluten free B1 supplement is a dietary supplement that has no color added, no artificial flavors and no preservatives. This Nature Made B1 vitamin, also known as Thiamin, provides energy metabolism support(1). For those who don’t receive enough B1 in their diet, these B1 dietary supplements can help. Adults take one of these B1 tablets daily with water and a meal. Nature Made supplements are quality you can trust. USP has tested and verified ingredients, potency and manufacturing process. USP sets official standards for dietary supplements. Visit the USP verified website for more information. (1)Helps convert food into cellular energy. *Based on a survey of pharmacists who recommend branded vitamins and supplements.',
    details: {
      pulishedDate: '1999-10-07',
      manufacturer: 'Umbrella Pharmaceuticals',
    },
    genre: 'Health Foods',
    listPrice: 7,
    ratings: 4.7,
  },
  {
    id: 3,
    gtin: '1019098f7a7bcffab51967148cac3077',
    name: "Nature's Bounty Zinc",
    slogan: 'Immune Support You Can Trust',
    imgUrl:
      'https://m.media-amazon.com/images/I/71PPuAK-auL._AC_UL480_FMwebp_QL65_.jpg',
    description:
      'Made by the #1 brand for Zinc supplements (2) support your immune system and overall health with Nature’s Bounty Zinc. (1) One 50 mg caplet a day provides more than your daily requirement of this essential mineral to keep you feeling your best. (1) Research shows that supplementing with Zinc year-round has many benefits. In addition to playing a vital role in immune support, Zinc can also function as an antioxidant in the body, contribute to skin and bone health, and assist in the formation of DNA. (1) As a component of the enzyme collagenese, Zinc has been clinically studied for its contribution to skin health. (1) For additional flexibility to meet dietary needs, Nature’s Bounty Zinc caplets are non-GMO and sugar and gluten free. For adults, take one caplet daily, preferably with a meal. With over 50 years of expertise and as the #1 Brand for Zinc supplements (2), you can trust that Nature’s Bounty Zinc supplements are a product of our company’s dedication to quality, consistency, and scientific research.',
    details: {
      pulishedDate: '1998-05-22',
      manufacturer: 'Umbrella Pharmaceuticals',
    },
    genre: 'Health Foods',
    listPrice: 5,
    ratings: 4.7,
  },
];

export const Projects: IProject[] = [
  {
    id: '7f1a21c6c8d5065f',
    projectName: 'Cerberus-Project',
    description:
      'An early attempt at creating a controllable Bio Organic Weapon by Umbrella USA, in a project led by the Arklay Laboratory. Pronounced as the Greek word, "Kerberos", this creature was named after the mythological guardian of Hades, a gigantic dog with three heads and a collar made of venomous snakes.',
    Models: [
      {
        id: 'aeabbc9d0c269b7a058cba822e559865',
        codeName: 'MA-39',
        version: '1.0.3',
        characteristics:
          'The Cerberus Project began in the early 1980s as the β strain was developed. It was hoped that the improved t-Virus strain would create mutants more adequate for sale as military products, and dobermans were specifically selected for the project due to their traits favouring military service. Though they suffered skin deterioration, their muscles were left largely intact, and this and their increased strength and aggression made them more dangerous. As this B.O.W. species was created from an existing animal, unlike the Hunter Program, the cost to create the Cerberus prototypes was low. Deemed a success, the later Cerberuses were created by cloning one of the prototypes.',
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/6/65/Cerberus_-_Resident_Evil.png',
      },
    ],
  },
  {
    id: '8c3b48b6ac57289f',
    projectName: 'Queen Leech',
    description:
      "The Queen Leech was a mutant leech created through experimentation on annelids with the t-Virus. Created as part of Dr. James Marcus' ongoing leech study, it was his final creation before his death. In the time after, it consumed his hippocampus and gained his memories.",
    Models: [
      {
        id: '9f23d5d81a3c987cd46a5fff909ddc13',
        codeName: 'Queen Leech',
        version: '0.3.1',
        characteristics:
          "The Queen Leech was created in 1988 in a laboratory adjacent to Umbrella's executive training school in the Arklay Mountains. When Dr. Marcus was assassinated by the Umbrella Security Service, Queen Leech was dumped in a nearby treatment plant with his corpse. Seeing his body as a food source, Queen Leech began consuming it, and gained his memories after consuming the brain. It believed itself to be Marcus himself, reborn by divine intervention.",
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/5/59/Queenleech2.png',
      },
    ],
  },
  {
    id: '860404716c9df7a4',
    projectName: 'Hunters',
    description:
      '"Hunters" are a group of human-animal hybrids which were genetically engineered as biological weapons.',
    Models: [
      {
        id: '16df8123ba021ee510992689fdf371f1',
        codeName: 'MA-121',
        version: '1.2.1',
        characteristics:
          'The Hunter α was one of the first fully-functional and marketable B.O.W.s produced by Umbrella. It was created by injecting reptilian DNA into a human embryo and administering the t-Virus as a bonding agent. The MA-121α went through intensive research and development at the underground lab in Raccoon City.',
        experimentalType: false,
        production: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/2/2a/Hunter.jpg',
      },
      {
        id: '0f83f51211c45c2e491558944b4d1431',
        codeName: 'MA-121',
        version: '1.1.0',
        characteristics:
          'The Hunter β was a prototype model developed by Umbrella U.S.A. for the Hunter line of Bio-Organic Weapons, designed as a derivative of the earlier α model.',
        experimentalType: true,
        production: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/0/06/MA-121_Hunter_Beta.jpg',
      },
      {
        id: '560a60c6f3851287f9a9e1c4fc694107',
        codeName: 'MA-124',
        version: '1.3.7',
        characteristics:
          'The Hunter γ model of Hunter was developed by Umbrella Europe as part of a reinvestigation into amphibian-based B.O.W.s, which failed ten years earlier with Dr. Marcus\' Lurker. It was nicknamed the "Frogger" by its development team.',
        experimentalType: true,
        production: false,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/f/fa/RE3_Nemesis_Hunter_Y.jpeg',
      },
    ],
  },
  {
    id: '596b9a3ab583856e',
    projectName: 'Tyrant-Project',
    description:
      'The Tyrant is a human bio-weapon created through either a primary t-Virus infection to create a weapon, or the cloning of such specimens, with the intent to be used as super soldiers on the battlefield.',
    Models: [
      {
        id: '628ffbabf855bee054939b3df1483e0d',
        codeName: 'T-001',
        version: '1.0.1',
        characteristics:
          'First functional model of Tyrant. Mutations caused an exposed heart and spine, ill-functioning nervous system causing muscle spasms.',
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/7/73/ProtoTyrant.png',
      },
      {
        id: '1c04671e8a5be344c47210b6d9e47b2c',
        codeName: 'T-002',
        version: '1.0.2',
        characteristics:
          'Improved model over the T-001. Mutations only caused an exposed heart.',
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/8/82/Resident_Evil_1_HD_Tyrant.png',
      },
      {
        id: '04a11fbf1521cf36395f300ecc76bb70',
        codeName: 'T-A.L.O.S.',
        version: '1.11.0',
        characteristics:
          'Heavily armoured T-011 Tyrant outfitted with cybernetic implants and a multiple-rocket launcher.',
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/c/cb/TALOS1.jpg',
      },
      {
        id: '6ea98750abddcd022adb7d3cec871761',
        codeName: 'Bandersnatch',
        version: '1.11.0',
        characteristics:
          'Off-shoot project created following completion of T-001 prioritising cost-effectiveness. Possibly developed on Rockfort Island. A variant was created by the Organisation, resulting in Jabberwock S3, enhanced with t-Veronica Virus.',
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/8/80/Bandersnatcher.png',
      },
      {
        id: '6a7a0b44c2833d91bfd3a2b14348945a',
        codeName: 'T-103',
        version: '1.3.0',
        characteristics:
          'First mass-produced Tyrant, of which there were dozens of clones. They were capable of following complex orders, and saw action in Raccoon City with such missions as retrieving a Golgotha Virus sample, and fighting Delta Force intruders.',
        experimentalType: false,
        production: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/1/1e/Re2_tyrant.jpg',
      },
      {
        id: '936055108ff4af04692bb1213925f645',
        codeName: 'T-078',
        version: '1.3.7',
        characteristics:
          'Experimental T-103 used to test the functionality of the model without a limiter coat. Modified with blunted claws and missing an arm. Released on Rockfort Island.',
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/2/2f/RECV_Tyrant_artwork.png',
      },
      {
        id: '9eb6546a4e56c4fe47b2904c6d6a0502',
        codeName: 'Nemesis-T Type',
        version: '1.8.9',
        characteristics:
          'Experimental T-103 variant created by implanting an NE-α Type parasite into several T-103 host bodies. One was deployed to Raccoon City with orders to search and kill any surviving S.T.A.R.S. members to prove its hunting capabilities.',
        experimentalType: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/b/b2/Nemesis-T_Type.png',
      },
      {
        id: 'eb6b152e50fc2f34c9b64903595b01b3',
        codeName: 'Ivan',
        version: '2.0.0',
        characteristics:
          'Highly intelligent and human-appearing T-103 variant able to integrate better into human society. At least two were created.',
        experimentalType: false,
        production: true,
        imgUrl:
          'https://static.wikia.nocookie.net/residentevil/images/9/9c/Ivan.JPG',
      },
    ],
  },
];
