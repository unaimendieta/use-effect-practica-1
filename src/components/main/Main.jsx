import { useEffect, useState } from "react";
import { Advice, AdviceContainer, AdviceId, DiceContainer, MainContainer } from "./styles";

const Main = () => {
    const [advice,setAdvice] = useState({});

    useEffect(()=>{
        fetchAdviceData(setAdvice);
    },[]);

	return (
	<>
		<MainContainer>
            <AdviceContainer>
                <AdviceId>ADVICE {advice.id}</AdviceId>
                <Advice>{advice.advice}</Advice>
                <img src="../../images/pattern-divider-mobile.svg" alt="" />
                <DiceContainer onClick={()=>fetchAdviceData(setAdvice)}>
                     <img src="../../images/icon-dice.svg" alt="" />
                </DiceContainer>
            </AdviceContainer>
        </MainContainer>
	</>
	);
};

const fetchAdviceData = async(setAdvice) =>{
    const response = await fetch('	https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip);
};

export default Main;

