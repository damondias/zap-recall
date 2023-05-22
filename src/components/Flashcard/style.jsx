import styled from 'styled-components';

const Container = styled.div `
    width: 300px;
    height: 35px;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.15);

    color: #333333;
    background-color:#FFFFFF;

    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;

        text-decoration: none;
    }
`;

export {
    Container,
}