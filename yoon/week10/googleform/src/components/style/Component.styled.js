import styled from 'styled-components';

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
`;
const ComponentC = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  word-wrap: break-word;
  display: block;
  height: 55.833px;
`;

function Component() {
  const data = [
    { id: 1, text: '이름', input: 'XXX' },
    { id: 2, text: '이메일', input: 'ex.) xxxxxxx@gmail.com' },
    { id: 3, text: '주소', input: '경기도 시흥시 정왕동 XXX길 XXX' },
    { id: 4, text: '전화번호', input: 'XXX-XXXX-XXXX' },
    { id: 5, text: '의견', input: '자유로운 의견 주시면 감사하겠습니다' },
  ];
  return (
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
                  <input type="text" placeholder={item.input} />
                </ComponentC>
              </ComponentCore>
            </InnerComponents>
          </ComponentStyle>
        </ComponentWrap>
      ))}
    </div>
  );
}
export default Component;
