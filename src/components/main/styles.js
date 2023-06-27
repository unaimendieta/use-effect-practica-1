import styled from "styled-components";

const MainContainer = styled.main`

    width: 100vw;
    height: 100vh;
    background-color: #202733;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AdviceContainer = styled.div`
    position: relative;
    width: 540px;
    height: 332px;
    border-radius: 15px;
    background-color: #313A48;
    box-shadow: 30px 50px 80px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px;
    gap: 16px;
`;
const AdviceId = styled.p`
    color: #53FFAA;
    font-size: 13px;
    font-family: inherit;
    font-weight: 800;
    letter-spacing: 4.086px;
`;
const Advice = styled.p`

    color:  #CEE3E9;
    text-align: center;
    font-size: 28px;
    font-family: inherit;
    font-weight: 800;
    letter-spacing: -0.3px;
`;
const DiceContainer = styled.div`
    position: absolute;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #53FFAA;
    bottom: -32px;
    left: 45%;
`;



export {MainContainer,Advice,AdviceContainer,AdviceId,DiceContainer};