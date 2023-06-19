import { useForm } from 'react-hook-form';
import Wrap from './style/Wrap.styled.js';
import WrapMargin from './style/WrapMargin.styled';
import WrapPadding from './style/WrapPadding.styled.js';
import ContainerWrap from './style/ContainerWrap.styled.js';
import styled from 'styled-components';

// function MyForm() {

//   return (
//       <label htmlFor="email">이메일</label>
//       <input
//         id="email"
//         type="email"
//         placeholder="test@email.com"
//         {...register('email')}
//       />
//       <label htmlFor="password">비밀번호</label>
//       <input
//         id="password"
//         type="password"
//         placeholder="****************"
//         {...register('password')}
//       />
//       <button type="submit">로그인</button>
//     </form>
//   );
// }

// export default MyForm;

const Container = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  min-width: 250px;
  word-wrap: break-word;
`;

const TopComponentStyle = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.141), 0 1px 3px 0 rgba(0, 0, 0, 0.122);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #dadce0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: relative;
  width: 767.333px;
  height: 136px;
  font-weight: 600;
  font-size: 30px;
`;

const Div = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 10px;
  left: -1px;
  position: absolute;
  top: -1px;
  width: calc(100% + 2px);
  background-color: rgb(96, 125, 139);
  color: rgba(255, 255, 255, 1);
  background-color: #607d8b;
`;

const TopComponent = () => {
  return (
    <TopComponentStyle>
      <Div></Div>
      <p style={{ marginLeft: 30 }}>연락처 정보</p>
    </TopComponentStyle>
  );
};

const Components = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  height: 856.833px;
`;

const ComponentWrap = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  padding-top: 12px;
  height: 138.5px;
`;

const ComponentStyle = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  outline: none;
  box-shadow: none;
  border-bottom: none;
  height: 135.833px;
`;

const InnerComponents = styled.div`
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  position: relative;
  transition: box-shadow 0.25s cubic-bezier(0, 0, 0.2, 1);
  box-shadow: none;
  height: 135.833px;
  background-color: white;
`;

const LeftPadding = styled.div`
  display: flex;
  height: calc(100% + 2px);
  left: -1px;
  padding-right: 10px;
  position: flex;
  bottom: -1px;
  width: 6px;
`;

const ComponentCore = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  width: 100%;
  overflow: visible;
`;

const ComponentA = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  cursor: move;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  opacity: 0.3;
  visibility: hidden;
  height: 24px;
`;
const ComponentB = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  height: 32px;
  font-weight: 600;
  font-size: 18px;
  margin-left: 20px;
`;
const ComponentC = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  display: block;
  height: 55.833px;
`;

const InputContainer = styled.div`
  position: relative;
  margin: 20px;
`;

const InputField = styled.input`
  display: block;
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background-color: transparent;
  &:focus {
    ~ label {
      top: -20px;
      font-size: 12px;
      color: #007bff;
    }

    ~ .input-highlight {
      width: 52.8%;
    }
  }
`;

const InputHighlight = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #808688;
  transition: all 0.3s ease;
`;

const Button = styled.button`
  padding: 0;
  width: 75px;
  height: 40px;
  background-color: #c9d2d5;
  border: 0;
  border-radius: 10px;
  margin-left: 20px;
  font-weight: 600;
  &:hover,
  &:active {
    background-color: #808688;
    color: white;
  }
`;

const MyForm = () => {
  const { register, handleSubmit } = useForm();

  const data = [
    { id: 1, text: 'username', input: 'XXX' },
    { id: 2, text: 'email', input: 'xxxxxxx@gmail.com' },
    { id: 3, text: 'address', input: '경기도 시흥시 정왕동 XXX길 XXX' },
    { id: 4, text: 'phone', input: 'XXX-XXXX-XXXX' },
    { id: 5, text: 'opinion', input: '자유로운 의견 주시면 감사하겠습니다' },
  ];

  return (
    <Wrap>
      <WrapMargin>
        <WrapPadding>
          <ContainerWrap>
            <Container>
              <TopComponent></TopComponent>
              <Components>
                <form
                  onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
                >
                  <div>
                    {data.map((item) => (
                      <ComponentWrap key={item.id}>
                        <ComponentStyle>
                          <InnerComponents>
                            <LeftPadding></LeftPadding>
                            <ComponentCore>
                              <ComponentA></ComponentA>
                              <ComponentB>{item.text}</ComponentB>
                              <ComponentC>
                                <InputContainer htmlFor={item.text}>
                                  <InputField
                                    id={item.text}
                                    type={item.text}
                                    placeholder={item.input}
                                    {...register(`${item.text}`)}
                                  />
                                  <InputHighlight className="input-highlight" />
                                </InputContainer>
                              </ComponentC>
                            </ComponentCore>
                          </InnerComponents>
                        </ComponentStyle>
                      </ComponentWrap>
                    ))}
                  </div>{' '}
                  <ComponentWrap>
                    <ComponentStyle>
                      <InnerComponents>
                        <LeftPadding></LeftPadding>
                        <ComponentCore>
                          <ComponentA></ComponentA>
                          <ComponentB></ComponentB>
                          <ComponentC>
                            <Button type="submit">제출</Button>
                          </ComponentC>
                        </ComponentCore>
                      </InnerComponents>
                    </ComponentStyle>
                  </ComponentWrap>
                </form>
              </Components>
            </Container>
          </ContainerWrap>
        </WrapPadding>
      </WrapMargin>
    </Wrap>
  );
};

export default MyForm;
