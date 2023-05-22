import styled from 'styled-components';

const open = `min-height: 100px;
    background: #FFFFD5;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    position: relative;
    flex-direction: column;
    align-itens: flex-start;
    justify-content: space-between;
`;
const close = `
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const Container = styled.div `
    width: 300px;
    height: 35px;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);

    color: ${({color})=> color };
    background-color: ${({test})=> !test ? "#FFFFD4" : "#FFFFFF"};

    ${({abrefecha}) => abrefecha} 

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        text-decoration: ${({textdeco}) => textdeco} ;
    }
`;


const Button = styled.button`
  width: 85px;
  height: 37px;
  color: #FFFFFF;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;
  background-color: ${({color})=> color};
`;

const ButtonBox = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  box-sizing: border-box;
 
`;
const ImagePlay = styled.img`
    display: ${({test}) => !test ? 'none' : 'flex'};
    height: 20px;
    width: 20px;
`;
const ImageTurn = styled.img`
    display: ${({viraricon}) => viraricon ? "none" : "flex"};
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

export {
    open, 
    close, 
    Container,
    Button, 
    ButtonBox,
    ImagePlay,
    ImageTurn,
}