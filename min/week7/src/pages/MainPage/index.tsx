import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Slide from './components/Slide';
import styled from 'styled-components';

function MainPage() {
  return (
    <MainPageWrapper>
      <Navbar />
      <Header>
        <Slide />
      </Header>
      <Section>
        <Section1>
          <h1>나에게 필요한 커리어 인사이트</h1>
          <button>
            <svg width="30" height="30" viewBox="0 0 17 17">
              <defs>
                <filter id="bfoh3u0w3a">
                  <feColorMatrix
                    in="SourceGraphic"
                    values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
                  ></feColorMatrix>
                </filter>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    <g transform="translate(-1080 -374) translate(1080 374)">
                      <g>
                        <path
                          stroke="#999"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                          transform="translate(1 1)"
                        ></path>
                        <path
                          fill="#999"
                          d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                          transform="translate(1 1) rotate(-180 7.053 10.408)"
                        ></path>
                        <path
                          stroke="#999"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                          d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                          transform="translate(1 1)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </Section1>
        <Section2>
          <button>디자인</button>
          <button>커리어고민</button>
          <button>개발</button>
          <button>취업/이직</button>
          <button>IT/기술</button>
          <button>UX/UI</button>
          <button>마케팅</button>
          <button>노무</button>
          <button>리더십</button>
        </Section2>
        <Section3>
          <ContentCard>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
          </ContentCard>
          <ContentCard>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
          </ContentCard>
          <ContentCard>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
            <div>
              <CardImg>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2666%2Fe9c422a6.jpg&w=1200&q=90"
                  alt="이미지"
                />
              </CardImg>
              <h3>인사담당자가 직접 말하는, 서류 통과가 잘 되는 이력서</h3>
              <p>
                주목! 아래 두 인사담당자의 조언을 참고해보자. 어쩌면 (우리의)
                역사상 가장 완벽한 이력서 작성이 가능해질 것이다.
              </p>
              <CardLogo>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fwanted_opengraph.png&w=60&q=90"
                  alt="logo"
                />
                <p>Wanted</p>
              </CardLogo>
            </div>
          </ContentCard>
        </Section3>
        <Section4>
          <button>
            <span>더 많은 콘텐츠 보기</span>
            <svg
              width="25"
              height="25"
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              style={{ marginLeft: '3px' }}
              viewBox="0 0 19 19"
            >
              <path
                d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </Section4>
        <Section5>
          <div>
            <h2>내 유형과 가장 어울리는 회사는?</h2>
            <h3>
              <span>유형테스트 하러가기</span>
              <svg
                width="20"
                height="20"
                style={{ marginLeft: '5px', fill: 'white' }}
                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 18 18"
              >
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </h3>
          </div>
        </Section5>
        <hr />
        <Section6>
          <Section6Title>
            <h2>커리어 성장을 위한 맞춤 이벤트</h2>
            <h3>
              <span>이벤트 전체보기</span>
              <svg
                width="20"
                height="20"
                style={{ marginLeft: '5px', fill: '#8a8a8a' }}
                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 19 19"
              >
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </h3>
          </Section6Title>
          <CardWrap>
            <CardItem1>
              <Card>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2739%2Fcd682d82.jpg&amp;w=1200&amp;q=100"
                  alt="스타트업 조직문화 전문가 양성과정 2기"
                  loading="lazy"
                  className="Thumbnail_Thumbnail__image__bP7ZG"
                />
              </Card>
              <CardKeyWord style={{ border: '1.5px solid #333' }}>
                교육
              </CardKeyWord>
              <h2>스타트업 조직문화 전문가 양성과정 2기</h2>
              <h3>2023.06.07 (수)</h3>
            </CardItem1>
            <CardItem2>
              <Card>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2802%2F006b16af.jpg&amp;w=1200&amp;q=100"
                  alt="캐치패션 쇼핑 지원금 받고, 출근룩 구매하세요!"
                  loading="lazy"
                  className="Thumbnail_Thumbnail__image__bP7ZG"
                />
              </Card>
              <CardKeyWord
                style={{ border: '1.5px solid #08ba9c', color: '#08ba9c' }}
              >
                이벤트
              </CardKeyWord>
              <h2>캐치패션 쇼핑 지원금 받고, 출근룩 구매하세요!</h2>
              <h3>2023.04.17 (월)</h3>
            </CardItem2>
          </CardWrap>
        </Section6>
        <hr />
        <Section7>
          <h2>채용 정보를 찾고 계셨나요?</h2>
          <BtnContainer>
            <button>
              <svg
                width="35"
                height="35"
                style={{ cursor: 'pointer' }}
                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 24 24"
              >
                <path d="M9.47375 1.89474C13.6597 1.89474 17.0527 5.2878 17.0527 9.47369C17.0527 10.2532 16.9341 11.0197 16.7041 11.7514C16.5471 12.2505 16.0153 12.5279 15.5161 12.371C15.017 12.2141 14.7396 11.6822 14.8966 11.1831C15.069 10.6345 15.158 10.0597 15.158 9.47369C15.158 6.33424 12.6132 3.78948 9.47375 3.78948C6.33428 3.78948 3.78952 6.33424 3.78952 9.47369C3.78952 12.6125 6.33466 15.1579 9.47375 15.1579C11.0057 15.1579 12.4626 14.5505 13.514 13.5044C13.8507 13.1694 14.3761 13.1397 14.7463 13.4147L14.8524 13.5064L21.8282 20.4883C22.198 20.8584 22.1977 21.4583 21.8276 21.8281C21.4911 22.1643 20.9648 22.1946 20.594 21.9193L20.4878 21.8275L14.1361 15.4699L14.0594 15.5312C12.8519 16.4355 11.3781 16.9722 9.8318 17.0443L9.47375 17.0526C5.28818 17.0526 1.89478 13.6589 1.89478 9.47369C1.89478 5.2878 5.28785 1.89474 9.47375 1.89474Z"></path>
              </svg>
              <div>
                <span>채용공고</span>
                <svg
                  width="20"
                  height="20"
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </div>
            </button>
            <button>
              <svg
                width="35"
                height="35"
                style={{ cursor: 'pointer' }}
                viewBox="0 0 28 28"
                xmlns="https://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    d="M16.46 12.565c-.631.802-1.025 1.667-1.039 2.59-.02 1.45.793 2.538 2.286 3.154l.116.038c3.487.898 5.788 2.958 5.788 5.03l.014 1.226c0 .026-.194.188-.35.189H4.662c-.136 0-.274-.122-.274-.178l-.014-1.248c0-1.997 2.086-3.93 5.412-4.868a4.468 4.468 0 0 0 1.275-.538c.775-.474 1.316-1.135 1.448-2.014a.875.875 0 0 0-1.731-.259c-.044.292-.256.552-.629.779a2.898 2.898 0 0 1-.795.337c-4.04 1.137-6.73 3.632-6.73 6.573l.014 1.248c0 1.062.965 1.918 2.024 1.918h18.613c1.061-.003 2.099-.871 2.099-1.949l-.014-1.227c0-3.003-2.9-5.612-7.039-6.697-.825-.354-1.16-.816-1.15-1.49.006-.473.248-1.003.663-1.53.272-.346.545-.606.71-.736l.087-.08c1.233-1.29 2.03-3 2.03-4.666 0-3.648-3.053-6.709-6.692-6.709-3.639 0-6.692 3.061-6.692 6.709 0 1.57.443 2.914 1.357 4.048a.875.875 0 1 0 1.363-1.097c-.655-.813-.97-1.768-.97-2.951 0-2.682 2.27-4.959 4.942-4.959s4.941 2.276 4.941 4.959c0 1.162-.587 2.437-1.506 3.417-.258.211-.6.545-.944.981z"
                    id="IconProfileThick-a"
                  ></path>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <mask id="IconProfileThick-b" fill="#fff">
                    <use xlinkHref="#IconProfileThick-a"></use>
                  </mask>
                  <use
                    fill="#333"
                    fill-rule="nonzero"
                    xlinkHref="#IconProfileThick-a"
                  ></use>
                  <g mask="url(#IconProfileThick-b)" fill="#333">
                    <path d="M0 0h28v28H0z"></path>
                  </g>
                </g>
              </svg>
              <div>
                <span>내 프로필</span>
                <svg
                  width="20"
                  height="20"
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </div>
            </button>
            <button>
              <svg
                width="35"
                height="35"
                style={{ cursor: 'pointer' }}
                viewBox="0 0 28 28"
                xmlns="https://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    d="M10.208 25.083a.875.875 0 0 1-.875-.875v-6.125h-1.75v6.125a.875.875 0 0 1-.875.875H2.042a.875.875 0 0 1-.875-.875V4.375c0-.483.391-.875.875-.875h12.833c.483 0 .875.392.875.875v3.791h9.625c.446 0 .814.334.868.766l.007.11v10.5a.875.875 0 0 1-1.75 0V9.917h-8.75v13.416h9.625a.875.875 0 0 1 0 1.75H10.208zM14 5.25H2.917v18.083h2.916v-6.125c0-.483.392-.875.875-.875h3.5c.484 0 .875.392.875.875v6.125H14V5.25zm4.375 10.792c.644 0 1.167.522 1.167 1.166v1.167a1.167 1.167 0 0 1-2.334 0v-1.167c0-.644.523-1.166 1.167-1.166zm0-4.667c.644 0 1.167.522 1.167 1.167v1.166a1.167 1.167 0 0 1-2.334 0v-1.166c0-.645.523-1.167 1.167-1.167zm-11.5 0a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333zm0-4.667a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-.333a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h.333z"
                    id="building-icon-a"
                  ></path>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <mask id="building-icon-b" fill="#fff">
                    <use xlinkHref="#building-icon-a"></use>
                  </mask>
                  <use
                    fill="#333"
                    fill-rule="nonzero"
                    xlinkHref="#building-icon-a"
                  ></use>
                  <g mask="url(#building-icon-b)" fill="#333">
                    <path d="M0 0h28v28H0z"></path>
                  </g>
                </g>
              </svg>
              <div>
                <span>매치업</span>
                <svg
                  width="20"
                  height="20"
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </div>
            </button>
            <button>
              <svg
                width="35"
                height="35"
                viewBox="0 0 15 15"
                style={{ cursor: 'pointer' }}
                fill="none"
                xmlns="https://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66699 10.51C5.55699 10.51 6.30999 11.11 6.54099 11.927H13.875C14.168 11.927 14.406 12.165 14.406 12.458C14.406 12.752 14.168 12.99 13.875 12.99H6.54099C6.30999 13.807 5.55799 14.406 4.66699 14.406C3.77499 14.406 3.02299 13.806 2.79199 12.989H1.12499C0.831994 12.989 0.593994 12.752 0.593994 12.459C0.593994 12.165 0.831994 11.927 1.12499 11.927H2.79199C3.02399 11.109 3.77599 10.51 4.66699 10.51V10.51ZM4.66699 11.573C4.17799 11.573 3.78099 11.97 3.78099 12.458C3.78099 12.947 4.17799 13.344 4.66699 13.344C5.15499 13.344 5.55199 12.947 5.55199 12.458C5.55199 11.97 5.15499 11.573 4.66699 11.573ZM10.333 5.55299C11.225 5.55299 11.977 6.15199 12.208 6.96899H13.875C14.168 6.96899 14.406 7.20699 14.406 7.49999C14.406 7.79299 14.168 8.03099 13.875 8.03099H12.208C11.976 8.84899 11.224 9.44799 10.333 9.44799C9.44299 9.44799 8.68999 8.84799 8.45899 8.03199H1.12499C0.831994 8.03199 0.593994 7.79299 0.593994 7.49999C0.593994 7.20699 0.831994 6.96899 1.12499 6.96899H8.45899C8.68999 6.15199 9.44199 5.55199 10.333 5.55199V5.55299ZM10.333 6.61499C9.84499 6.61499 9.44799 7.01099 9.44799 7.49999C9.44799 7.98899 9.84499 8.38499 10.333 8.38499C10.822 8.38499 11.219 7.98899 11.219 7.49999C11.219 7.01099 10.822 6.61499 10.333 6.61499V6.61499ZM4.66699 0.593994C5.55699 0.593994 6.30999 1.19299 6.54099 2.00999H13.875C14.168 2.00999 14.406 2.24799 14.406 2.54199C14.406 2.83499 14.168 3.07199 13.875 3.07199L6.54099 3.07399C6.30899 3.89099 5.55799 4.48999 4.66699 4.48999C3.77599 4.48999 3.02399 3.88999 2.79199 3.07399L1.12499 3.07299C0.831994 3.07299 0.593994 2.83499 0.593994 2.54199C0.593994 2.24799 0.831994 2.00999 1.12499 2.00999H2.79199C3.02399 1.19299 3.77599 0.593994 4.66699 0.593994V0.593994ZM4.66699 1.65599C4.17799 1.65599 3.78099 2.05299 3.78099 2.54199C3.78099 3.02999 4.17799 3.42699 4.66699 3.42699C5.15499 3.42699 5.55199 3.02999 5.55199 2.54199C5.55199 2.05299 5.15499 1.65599 4.66699 1.65599V1.65599Z"
                  fill="#333"
                ></path>
              </svg>
              <div className="btnText">
                <span>직군별 연봉</span>
                <svg
                  width="20"
                  height="20"
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </div>
            </button>
          </BtnContainer>
        </Section7>
      </Section>
      <Footer />
    </MainPageWrapper>
  );
}

export default MainPage;

const MainPageWrapper = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 16rem;
`;

const Header = styled.header`
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    width: 73%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  hr {
    width: 73%;
    height: 1px;
  }
`;

const Section1 = styled.div`
  height: 4rem;
  padding-top: 3rem;
  padding-bottom: 1rem;
  > h1 {
    font-size: 1.7rem;
  }
  > button {
    background-color: transparent;
    border: none;
    margin-left: 3px;
  }
`;

const Section2 = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    border: 1px solid rgb(183, 182, 182);
    background-color: transparent;
    color: rgb(183, 182, 182);
    padding: 10px;
    padding-right: 15px;
    padding-left: 15px;
    border-radius: 5rem;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 20px;
  }
  > button:hover {
    background-color: rgba(243, 241, 241, 0.875);
  }
`;

const Section3 = styled.div`
  height: 70rem;
  flex-direction: column;
  > div {
    width: 100%;
  }
`;

const ContentCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33%;
  > div {
    width: 25%;
    height: 100%;
    padding: 10px;
  }
  > div > h3 {
    font-weight: 600;
    font-size: 1.4rem;
    color: #171717;
    margin-bottom: 5px;
  }
  > div > p {
    font-size: 0.9rem;
    color: #8a8a8a;
    margin: 0;
  }
`;
const CardImg = styled.div`
  width: 18rem;
  height: 13rem;
  margin-bottom: 20px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const CardLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > img {
    width: 2rem;
  }
  > p {
    color: #8a8a8a;
    font-weight: 400;
    font-size: 0.8rem;
    margin-left: 5px;
  }
`;

const Section4 = styled.div`
  padding-top: 1.3rem;
  height: 3rem;
  padding-bottom: 2rem;
  margin: 0 auto;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 50px;
    border-radius: 3rem;
    border: 1px solid #e1e2e4 !important;
    background-color: transparent;
    cursor: pointer;
  }

  > button > span {
    font-size: 1.2rem;
    font-weight: 700;
    color: #171717 !important;
    text-align: center;
    line-height: 1rem;
  }
`;
const Section5 = styled.div`
  height: 10rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  > div {
    width: 100%;
    height: 85%;
    border-radius: 1rem;
    background-color: #0d99ff;
    background-image: url(https://static.wanted.co.kr/images/type-test/typetest-banner-image.png);
    background-size: auto 100%;
    background-position: 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    cursor: pointer;
  }
  > h2 {
    width: 90%;
    margin-bottom: 0;
    font-weight: 800;
    font-size: 1.5rem;
    color: white;
  }
  > h3 {
    width: 90%;
    margin-top: 5px;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: white;
    font-size: 1.2rem;
  }
`;
const Section6 = styled.div`
  height: 30rem;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 5rem;
`;
const Section6Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h2 {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 0;
  }
  > h3 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 5px;
    color: #8a8a8a !important;
    cursor: pointer;
  }
`;
const CardWrap = styled.div`
  width: 100%;
  display: flex;
  height: 80%;
  cursor: pointer;
`;
const CardItem1 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  > h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0;
  }
  > h3 {
    color: #aaa;
    font-size: 0.8rem;
    margin-top: 3px;
    font-weight: 500;
  }
`;
const CardItem2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  > h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0;
  }
  > h3 {
    color: #aaa;
    font-size: 0.8rem;
    margin-top: 3px;
    font-weight: 500;
  }
`;
const Card = styled.div`
  height: 70%;
  > img {
    width: 100%;
    border-radius: 0.7rem;
    height: 100%;
    border-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover;
    outline: 1px solid rgba(0, 0, 0, 0.05);
    outline-offset: -1px;
  }
`;
const CardKeyWord = styled.div`
  margin-top: 10px;
  width: 2.5rem;
  height: 20px;
  border: 1.5px solid #333;
  text-align: center;
  border-radius: 3px;
  font-size: 13px;
  line-height: 20px;
`;
const Section7 = styled.div`
  height: 20rem;
  flex-direction: column;
  padding-top: 0.8rem;
  padding-bottom: 3rem;
  > h2 {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;
const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 40%;
  > button {
    width: 25%;
    background-color: transparent;
    height: 100%;
    border: 1px solid #ececec;
  }
  > button > div {
    margin-top: 15px;
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > button > div > span {
    cursor: pointer;
  }
`;
