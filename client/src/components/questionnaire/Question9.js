// package imports
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

// component imports
import BasicHeader from "../BasicHeader";
import { QuestionContext } from "./QuestionContext";

// import icon
import { BsArrowRight } from "react-icons/bs";

// animation imports
import { animateContinue, quizTransition } from "../AnimationHandlers";


const Question9 = () => {
    const { answers, setAnswers } = useContext(QuestionContext);
    const [isChosen, setIsChosen] = useState(false);

    
    return (
        <>
            <BasicHeader />
            <Wrapper as={motion.div} initial="out" animate="in" exit="out" variants={quizTransition} style={{textDecoration:"none", padding:"none", margin:"none"}}>
                <Container>
                    <InnerWrap>
                        <QuestionWrap>
                            <Question>Your father was a civil engineer who, while drunk, demeaned you by calling you a "weakling" and "mongoloid". Knowing this — what color would you dye your hair?</Question>
                            <QuestionBox />
                            <ChoiceTitle>Select an Option</ChoiceTitle>
                            <Choices onClick={() => setIsChosen(true)}>
                                <Button onClick={() => setAnswers({ ...answers, q9: "defeated" })}><Letter>A. </Letter> Give the man your wallet.</Button>
                                <Button onClick={() => setAnswers({ ...answers, q9: "well-to-do" })}><Letter>B. </Letter> Fight the man and risking your own life.</Button>
                                <Button onClick={() => setAnswers({ ...answers, q9: "well-to-do" })}><Letter>C. </Letter> Attempt to run away, screaming for help.</Button>
                                <Button style={{ width: "550px" }} onClick={() => setAnswers({ ...answers, q9: "brawny" })}><Letter>D. </Letter> Refuse! Instead submit yourself to the man’s violence in a desperate wish for a swift and sweet release from this cruel world you’ve come to hate</Button>
                            </Choices>
                        </QuestionWrap>
                        <ContinueWrap>
                            {isChosen && <>
                                <StyledLink to="/question/10">
                                    <Continue
                                        as={motion.div}
                                        initial={"start"}
                                        animate={"end"}
                                        variants={animateContinue}
                                        onClick={() => localStorage.setItem("answers", JSON.stringify(answers))}
                                    >Continue
                                        <ArrowWrap>
                                            <BsArrowRight />
                                        </ArrowWrap>
                                    </Continue>
                                </StyledLink>
                            </>}

                        </ContinueWrap>
                    </InnerWrap>
                </Container>
            </Wrapper>
        </>
    )
}

export default Question9

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 91vh;
    gap: 20px;
    `
const Container = styled.div`
    width: 1195px;
    height: 626px;
    background-color: #F1F1F1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const InnerWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 70%;
`
const QuestionWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 2;
`
const Question = styled.h1`
    width: 900px;
    font-size: 50px;
    font-weight: 400;
    line-height: 65px;
    letter-spacing: 0em;
    text-align: left;
    color: #9F9F92;
    flex:1;
    position: absolute;
`
const QuestionBox = styled.div`
    width: 100%;
    flex:1;

`
const ChoiceTitle = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 25px;
    width: 135px;
    letter-spacing: 0em;
    text-align: left;
    color: #7D7D7D;
    border-bottom: 2px solid #7D7D7D;
`
const Choices = styled.div`
    height: 100%;
    width: 700px;
    flex:1;
    top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    line-height: 10px;
`
const Letter = styled.h1`
    margin-right: 10px;
    color: #9F9F92;

`
const Button = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 38px;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 300;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
    color: #9F9F92;
    &:focus{
        color: #414141;
    }
`
const ContinueWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
    position: relative;
`
const Continue = styled(Link)`
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    text-decoration: none;
    color: #7D7D7D;
    border-bottom: 1px solid #7D7D7D;
    display: flex;
    opacity: 0;
`
const ArrowWrap = styled.div`
    font-size: 22px;
    font-weight: 300;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #7D7D7D;
    position: relative;
    top: 3px;
    margin-left: 5px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`