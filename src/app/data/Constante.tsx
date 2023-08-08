export interface CardContentItem {
  WhatwePresent: string;
  Subscribers: string[];
  firsthour: number;
  firsthourMinute: number;
  Finishhour: number;
  FinishhourMinute: number;
  height: number;
  color: string
  marginTop?: number,
}

export interface Card {
  [key: string]: CardContentItem[];
}

export const cardContent: Card[] = [
  {
    card: [
      {
        WhatwePresent: 'Add features to the app design',
        Subscribers: [
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80'
        ],
        firsthour: 7,
        firsthourMinute: 0,
        Finishhour: 9,
        FinishhourMinute: 0,
        height: 238,
        color: "#F60C87"
      },
      {
        WhatwePresent: 'New Project Meeting',
        Subscribers: [
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
        ],
        firsthour: 10,
        firsthourMinute: 0,
        Finishhour: 9,
        FinishhourMinute: 0,
        color: "#3F0071",
        marginTop: 90,
        height: 200,
      },
    ],
  },
  {
    card: [
      {
        WhatwePresent: 'Invoice system - redesign',
        Subscribers: [
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80'
        ],
        firsthour: 8,
        firsthourMinute: 0,
        Finishhour: 13,
        FinishhourMinute: 0,
        color: "#F60C87",
        marginTop: 90,
        height: 595,
      },
    ],
  },
  {
    card: [
      {
        WhatwePresent: 'Invoice system - meeting',
        Subscribers: [
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
          'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
          'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ],
        firsthour: 7,
        firsthourMinute: 0,
        Finishhour: 9,
        FinishhourMinute: 0,
        color: "#3F0071",
        height: 238,
      },
      {
        WhatwePresent: 'Staff Meeting',
        Subscribers: [
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
          'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          'https://images.pexels.com/photos/17580651/pexels-photo-17580651/free-photo-of-femme-apple-smartphone-ordinateur-portable.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ],
        firsthour: 9,
        firsthourMinute: 0,
        Finishhour: 11,
        FinishhourMinute: 30,
        color: "#3F0071",
        marginTop: 90,
        height: 238,
      },
    ],
  },
  {
    card: [
      {
        WhatwePresent: 'Invoice System - redesign',
        Subscribers: [
          'https://images.pexels.com/photos/1009904/pexels-photo-1009904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ],
        firsthour: 8,
        firsthourMinute: 0,
        Finishhour: 13,
        FinishhourMinute: 0,
        color: "#F60C87",
        height: 595,
      },
    ],
  }
];

interface Offer {
  offerName: string;
  offerexplain: string;
}




export const OfferExplain1: Offer[] = [
  {
    offerName: "Have access to your team timesheet ",
    offerexplain: "In addition to having access to the available schedules of each employee so you can manage their tasks",
  },
  {
    offerName: "Manage the progress of your projects ",
    offerexplain: "See who is in charge of the process, set meetings and even send your feedbacks to the team ",
  },
  {
    offerName: "Set your avaliable hours for the week",
    offerexplain: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  }
]

export const OfferExplain2: Offer[] = [
  {
    offerName: "Access all the documents of your company in one place ",
    offerexplain: "For example the project invoice, your employees paycheck and every document you need. ",
  },
  {
    offerName: "Add notes on the projects and have direct contact with your employess",
    offerexplain: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
]



interface CardPriseType {
  CardName: String,
  CardExplain: String,
  CardBenefis: String[],
  Prise: number
}

export const CardPrise: CardPriseType[] = [
  {
    CardName: "Lorem Ipsum",
    CardExplain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... ",
    CardBenefis: [
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
    ],
    Prise: 22.95
  },
  {
    CardName: "Lorem Ipsum",
    CardExplain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... ",
    CardBenefis: [
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
    ],
    Prise: 22.95
  },
  {
    CardName: "Lorem Ipsum",
    CardExplain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... ",
    CardBenefis: [
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
    ],
    Prise: 22.95
  },
  {
    CardName: "Lorem Ipsum",
    CardExplain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... ",
    CardBenefis: [
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
    ],
    Prise: 22.95
  },
  {
    CardName: "Lorem Ipsum",
    CardExplain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... ",
    CardBenefis: [
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
    ],
    Prise: 22.95
  },
  {
    CardName: "Lorem Ipsum",
    CardExplain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... ",
    CardBenefis: [
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
    ],
    Prise: 22.95
  },
  {
    CardName: "Lorem Ipsum",
    CardExplain: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et... ",
    CardBenefis: [
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
      "Benefits of the plan",
    ],
    Prise: 22.95
  },
]



interface ReviewsType {
  CompanyName: String,
  CompanyReviews: String
}

export const Reviews: ReviewsType[] = [
  {
    CompanyName: "Lorem Ipsum",
    CompanyReviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
  },
  {
    CompanyName: "Lorem Ipsum",
    CompanyReviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
  },
  {
    CompanyName: "Lorem Ipsum",
    CompanyReviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
  },
  {
    CompanyName: "Lorem Ipsum",
    CompanyReviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
  },
]




interface OfferDataType {
  OfferName: String,
  OfferExpalin: String,
}



export const EmployeOffer: OfferDataType[] = [
  {
    OfferName: "Manage your tasks ",
    OfferExpalin: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    OfferName: "Keep up with of your projects ",
    OfferExpalin: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    OfferName: "Set your avaliable hours for the week",
    OfferExpalin: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  }
]

export const ManagerOffers: OfferDataType[] = [
  {
    OfferName: "Set the tasks",
    OfferExpalin: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    OfferName: "Add notes on the projects and have direct contact with your employess",
    OfferExpalin: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    OfferName: "Get access of your team and clients overview",
    OfferExpalin: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  }
]



interface NumberListeType {
  name: String,
  code: number,
  sampleFormat: String,
  image: any
}

export const CountryNumber: NumberListeType[] = [
  {
    name: "Saudi Arabia",
    code: +966,
    sampleFormat: "+9665XXXXXXXX",
    image: "https://wallpapercave.com/wp/wp3534622.jpg"
  },
  {
    name: "Egypt",
    code: +20,
    sampleFormat: "+2010XXXXXXXX",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1920px-Flag_of_Egypt.svg.png"
  },
  {
    name: "United Arab Emirates",
    code: +971,
    sampleFormat: "+9715XXXXXXXX",
    image: "https://th.bing.com/th/id/OIP.HouW3Hi_yOZejTy97-y2xAHaEK?pid=ImgDet&rs=1"
  },
  {
    name: "Morocco",
    code: +212,
    sampleFormat: "+2126XXXXXXXX",
    image: "https://th.bing.com/th/id/OIP.wYPxdAi9D9GMzScsG3AUhwHaE7?pid=ImgDet&rs=1"
  },
  {
    name: "Algeria",
    code: +213,
    sampleFormat: "+2135XXXXXXXX",
    image: "https://th.bing.com/th/id/OIP.D-0ch-zyHsxMqwKbztOClQHaE7?pid=ImgDet&rs=1"
  },
  {
    name: "United States",
    code: +1,
    sampleFormat: "+1 555-555-XXXX",
    image: "https://th.bing.com/th/id/OIP.WJyay7b2ylktU2SXiIPc1gAAAA?pid=ImgDet&rs=1"
  },
  {
    name: "Neverland",
    code: +44,
    sampleFormat: "+44 20 7123 XXXX",
    image: "https://th.bing.com/th/id/R.38447e562fa8ea6d408c86c739ba7330?rik=XTAeHyOYB63meg&riu=http%3a%2f%2fi98.photobucket.com%2falbums%2fl273%2f808drunk%2fvelliano.png&ehk=SOFCN5tEyh8qZnwvKHg6xMTk2OE%2b%2buawjEnzb%2b4jPxI%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "China",
    code: +86,
    sampleFormat: "+86 10 8XXX XXXX",
    image: "https://th.bing.com/th/id/R.843c6d9ef3e7130d641be8da0dc5060d?rik=77oFH5edT8cR0w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-UzuUsSjP9bQ%2fTa5ERQOoOAI%2fAAAAAAAAAAQ%2f_653LZlNx0k%2fs1600%2fFlag_of_China.png&ehk=e3iPJsvauTDFaHNXFbpF4DQtn2JSH9C4IFxTRfPOYt4%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    name: "India",
    code: +91,
    sampleFormat: "+91 98XX XXXX",
    image: "https://th.bing.com/th/id/OIP.9YtAsanlFMBU3PoImltJpwAAAA?pid=ImgDet&rs=1"
  },
  {
    name: "Brazil",
    code: +55,
    sampleFormat: "+55 21 9XXXX XXXX",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png"
  }
]


interface QuestionType {
  question: String,
  Answer: String
}

export const SubscriptionQuestion:QuestionType[] = [
  {
    question: "SubscriptionQuestion Lorem ipsum dolor sit amet?",
    Answer: "Answer SubscriptionQuestion Lorem ipsum dolor sit amet?"
  },
  {
    question: "SubscriptionQuestion Lorem ipsum dolor sit amet?",
    Answer: "Answer SubscriptionQuestion Lorem ipsum dolor sit amet?"
  },
  {
    question: "SubscriptionQuestion Lorem ipsum dolor sit amet?",
    Answer: "Answer SubscriptionQuestion Lorem ipsum dolor sit amet?"
  },
  {
    question: "SubscriptionQuestion Lorem ipsum dolor sit amet?",
    Answer: "Answer SubscriptionQuestion Lorem ipsum dolor sit amet?"
  },
  {
    question: "SubscriptionQuestion Lorem ipsum dolor sit amet?",
    Answer: "Answer SubscriptionQuestion Lorem ipsum dolor sit amet?"
  }
]


export const PaymentQuestion:QuestionType[] = [
  {
    question: "Payment Lorem ipsum dolor sit amet?",
    Answer: "Answer Payment Lorem ipsum dolor sit amet?"
  },
  {
    question: "Payment Lorem ipsum dolor sit amet?",
    Answer: "Answer Payment Lorem ipsum dolor sit amet?"
  },
  {
    question: "Payment Lorem ipsum dolor sit amet?",
    Answer: "Answer Payment Lorem ipsum dolor sit amet?"
  },
  {
    question: "Payment Lorem ipsum dolor sit amet?",
    Answer: "Answer Payment Lorem ipsum dolor sit amet?"
  },
  {
    question: "Payment Lorem ipsum dolor sit amet?",
    Answer: "Answer Payment Lorem ipsum dolor sit amet?"
  }
]

export const OtherQuestion:QuestionType[] = [
  {
    question: "Other Lorem ipsum dolor sit amet?",
    Answer: "Answer Other Lorem ipsum dolor sit amet?"
  },
  {
    question: "Other Lorem ipsum dolor sit amet?",
    Answer: "Answer Other Lorem ipsum dolor sit amet?"
  },
  {
    question: "Other Lorem ipsum dolor sit amet?",
    Answer: "Answer Other Lorem ipsum dolor sit amet?"
  },
  {
    question: "Other Lorem ipsum dolor sit amet?",
    Answer: "Answer Other Lorem ipsum dolor sit amet?"
  },
  {
    question: "Other Lorem ipsum dolor sit amet?",
    Answer: "Answer Other Lorem ipsum dolor sit amet?"
  }
]



