import { IFounder, IProduct } from './@types/types';

export const Founders: IFounder[] = [
  {
    id: 1,
    founderName: 'Oswell E. Spencer',
    portrait:
      'https://static.wikia.nocookie.net/residentevil/images/c/c9/RE_Resistance_Spencer.jpg',
    occupation: ['President and CEO of Umbrella'],
    intro: 'One of the founders of Umbrella Pharmaceuticals.',
  },
  {
    id: 2,
    founderName: 'James Marcus',
    portrait:
      'https://static.wikia.nocookie.net/residentevil/images/1/17/JamesMarcusConcept_t.png',
    occupation: [
      "Head of Umbrella's Executive Training School (1968-1988)",
      'Umbrella Scientist (1968-1988)',
    ],
    intro: 'One of the founders of Umbrella Pharmaceuticals.',
  },
  {
    id: 3,
    founderName: 'Edward Ashford',
    portrait:
      'https://static.wikia.nocookie.net/residentevil/images/f/f4/Edward_Ashford.png',
    occupation: ['Virologist', 'Company executive'],
    intro: 'One of the founders of Umbrella Pharmaceuticals.',
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
