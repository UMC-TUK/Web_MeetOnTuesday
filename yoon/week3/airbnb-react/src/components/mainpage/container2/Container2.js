import classes from './Container2.module.css';
import Container2Component from './Container2Component';
import styled from 'styled-components';

const StyledContainer2 = styled.div`
  // // display: grid;
  // grid-template-rows: 357.438px 357.438px 357.438px 357.438px 357.438px;
  // grid-column-gap: 24px;
  // grid-row-gap: 40px;

  // @media (max-width: 549px) {
  //   #container2_components {
  //     grid-template-columns: repeat(1, 1fr);
  //   }
  // }

  // @media (min-width: 550px) {
  //   .container2_components {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  // }

  // @media (min-width: 950px) {
  //   .container2_components {
  //     grid-template-columns: repeat(3, 1fr);
  //   }
  // }

  // @media (min-width: 1128px) {
  //   .container2_components {
  //     grid-template-columns: repeat(4, 1fr);
  //   }
  // }

  // @media (min-width: 1640px) {
  //   .container2_components {
  //     grid-template-columns: repeat(5, 1fr);
  //   }
  // }

  // @media (min-width: 1880px) {
  //   .container2_components {
  //     grid-template-columns: repeat(6, 1fr);
  //   }
  // }
`;

const DUMMY_HOTELS = [
  {
    id: 'h1',
    img_src: '../../../images/hotel/2ac03203-3d06-441c-bc82-77f28ac26c6a.webp',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h2',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h3',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h4',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h5',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h6',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h1',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h2',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h3',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h4',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h5',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h6',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h1',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h2',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h3',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h4',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h5',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h6',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h1',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h2',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h3',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h4',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h5',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h6',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h1',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h2',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h3',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h4',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h5',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h6',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h1',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h2',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h3',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
  {
    id: 'h4',
    name: 'Lac-Beauport, 캐나다',
    description: '지난주 17,197회 조회됨',
    date: '6월 26일 ~ 7월 1일',
    price: '₩478,329 ',
    rate: 4.98,
  },

  {
    id: 'h5',
    name: 'Uvita, Osa , 코스타리카',
    description: '지난주 12,702회 조회됨',
    date: '6월 23일~28일',
    price: '₩1,093,097 ',
    rate: 4.8,
  },
  {
    id: 'h6',
    name: '완산구, 전주시, 한국',
    description: '지난주 7,727회 조회됨',
    date: '6월 2일~8일',
    price: '₩397,510 ',
    rate: 4.96,
  },
];

const Container2 = () => {
  const hotelsList = DUMMY_HOTELS.map((hotel) => (
    <Container2Component
      id={hotel.id}
      key={hotel.id}
      name={hotel.name}
      description={hotel.description}
      price={hotel.price}
      rate={hotel.rate}
    />
  ));

  return (
    <div className={classes.container2}>
      <div className={classes.container2_wrap}>
        <StyledContainer2 className={classes.container2_components}>
          {hotelsList}
        </StyledContainer2>
      </div>
    </div>
  );
};

export default Container2;
