import styled from 'styled-components';

const Container = styled.div `
  width: 100vw;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  box-shadow: -4px 0px 5px 0px rgba(0, 0, 0, 0.15);
`;

const Icons = styled.div`
    display: flex;
    justify-content: center;
    img {
        width:23px;
        height:23px;
        margin-top: 6px;
        margin-right: 5px;
    }
`

export {
    Container,
    Icons
}