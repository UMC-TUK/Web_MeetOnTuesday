import React, { useEffect, useRef, useState } from 'react';
import './slide.css';

const WantedImg = [
  'https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg',
  'https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg',
  'https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg',
  'https://static.wanted.co.kr/images/banners/1490/0b775035.jpg',
  'https://static.wanted.co.kr/images/banners/1484/b2853456.jpg',
  'https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg',
  'https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg',
  'https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg',
  'https://static.wanted.co.kr/images/banners/1488/baa54448.jpg',
];

const wantedTitle = [
  '22년 달라지는 노동법령',
  '성과를 내는 마케팅',
  '해, 커리어 EP 02 공개',
  '마케팅 주니어를 찾습니다',
  '성장하는 개발자가 되려면?',
  '개발자 성장 비결 공개!',
  '개발자 되고 싶은 분들!?',
  '포트폴리오를 부탁해!',
  'UX 디자이너의 커리어 설계',
];

const wantedDes = [
  '노무관리 쟁점 한 눈에 파악하기',
  '실제 사례를 공개합니다!',
  '마지막 관문 2라운드의 승자는?',
  '기업 과제 풀고 취업까지 한번에!',
  'OOO 검색하지 말 것!',
  'Velog, 글 쓰는 개발자들의 이야기',
  '프론트엔드 무료 교육과정 참여하기',
  '디자이너의 포폴 살펴보기',
  '브랜드 가치를 더하는 디자인',
];

function Slide() {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [isSlide, setIsSlide] = useState<boolean>(false);
  const [x, setX] = useState<number>(0);

  const [isClick, setIsClick] = useState<boolean>(false);
  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0);
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0);

  const increaseClick = () => {
    if (isSlide) {
      return;
    }
    setX(-56);
    setIsClick(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 8 ? 0 : prev + 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };
  const decreaseClick = () => {
    if (isSlide) {
      return;
    }
    setX(+56);
    setIsSlide(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? 8 : prev - 1));
      setX(0);
      setIsSlide(false);
    }, 500);
  };

  const morePrevImg = index === 1 ? 8 : index === 0 ? 7 : index - 2;
  const PrevImg = index === 0 ? 8 : index - 1;
  const NextImg = index === 8 ? 0 : index + 1;
  const moreNextImg = index === 8 ? 1 : index === 7 ? 0 : index + 2;

  const onMouseDown = (e: any) => {
    setIsClick(true);
    setMouseDownClientX(e.pageX);
  };

  const onMouseLeave = (e: any) => {
    setIsClick(false);
  };

  const onMouseUp = (e: any) => {
    setIsClick(false);
    const imgX = mouseDownClientX - mouseUpClientX;
    if (slideRef.current !== null) {
      if (imgX < -100) {
        slideRef.current.style.transform = `translateX(${imgX}px)`;
        increaseClick();
      } else if (imgX > 100) {
        slideRef.current.style.transform = `translateX(${imgX}px)`;
        decreaseClick();
      }
    }
  };

  const onMouseMove = (e: any) => {
    if (!isClick) return;
    e.preventDefault();
    setMouseUpClientX(e.pageX);
  };

  useEffect(() => {
    const autoPage = setTimeout(() => {
      setX(-56);
      setIsSlide(true);
      setTimeout(() => {
        setIndex((prev) => (prev === 8 ? 0 : prev + 1));
        setX(0);
        setIsSlide(false);
      }, 500);
    }, 5000);
    return () => {
      clearTimeout(autoPage);
    };
  }, [index, isClick]);

  return (
    <div className="slider-wrapper">
      <button
        style={{ position: 'absolute', left: '13rem' }}
        className="slider-leftBtn"
        onClick={decreaseClick}
      >
        <svg
          width="10"
          height="10"
          className="SvgIcon_SvgIcon__root__svg__DKYBi"
          viewBox="0 0 18 18"
        >
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </button>
      <div
        className="slide-row"
        key={index}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        ref={slideRef}
        style={{
          transform: `translateX(${x}vw)`,
        }}
      >
        <div className="slider-container">
          <img
            className="previewImg"
            src={WantedImg[morePrevImg]}
            alt="미리보기"
          ></img>
        </div>
        <div className="slider-container">
          <img className="previewImg" src={WantedImg[PrevImg]}></img>
        </div>
        <div className="slider-img-wrapper">
          <img
            className="slider-img"
            src={WantedImg[index]}
            alt="슬라이드메인이미지"
          />
          {!isSlide ? (
            <div className="imgDes">
              <span className="des-title">{wantedTitle[index]}</span>
              <span className="des">{wantedDes[index]}</span>
              <span className="des-link">바로가기</span>
            </div>
          ) : null}
        </div>
        <div className="slider-container">
          <img className="previewImg" src={WantedImg[NextImg]}></img>
        </div>
        <div className="slider-container">
          <img className="previewImg" src={WantedImg[moreNextImg]}></img>
        </div>
      </div>
      <button
        style={{ position: 'absolute', right: '13rem' }}
        className="slider-rightBtn"
        onClick={increaseClick}
      >
        <svg
          width="10"
          height="10"
          className="SvgIcon_SvgIcon__root__svg__DKYBi"
          viewBox="0 0 18 18"
        >
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Slide;
