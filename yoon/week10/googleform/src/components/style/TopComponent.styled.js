import styled from 'styled-components';

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
  border: 1px solid black;
  width: 767.333px;
  height: 136px;
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
      <p>연락처 정보</p>
    </TopComponentStyle>
  );
};

export default TopComponent;
