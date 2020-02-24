import React, {useState} from 'react';
import styled from 'styled-components';
import Calander from './Calander';

const Container = styled.div`
    @media screen and (min-width: 769px) {
        display:grid;
        grid-template-rows: 25px auto 25px;
        padding:8px 16px;
        background-color:#ACACAC;
        width:500px;
        height:350px;
        position:fixed;
        left:35%;
        top:25%;
        border-radius:4px;
    }

    @media screen and (max-width: 768px) {
        display:grid;
        grid-template-rows: 20px auto 25px;
        padding:8px 16px;
        background-color:#ACACAC;
        width:300px;
        height:250px;
        position:fixed;
        left:10%;
        top:5%;
        border-radius:4px; 
    }

`;

const MonthSection = styled.div`
    @media screen and (min-width: 769px) {
        font-weight:600;
        font-size:16px;
        text-align:center;
        background-color:#2eAc2f;
    }
    @media screen and (max-width: 768px) {
        font-weight:600;
        font-size:13px;
        text-align:center;
        background-color:#2eAc2f;
    }
`;

const CalanderSection = styled.div`
    background-color:#FeCcDf;
    padding:4px 8px;
`;

const ButtonSection = styled.div`
    @media screen and (min-width: 769px) {
        background-color:#AeCDD1;
        display:grid;
        grid-template-rows: auto;
        justify-items:center;
    }
    @media screen and (max-width: 768px) {
        background-color:#AeCDD1;
        padding-top:2.5px;
        display:grid;
        grid-template-rows: auto;
        justify-items:center;
    }
    
`;

const PrevBtn = styled.div`
    display:inline-block;
    height:16px;
    width:20px;
    background-color:white;
    margin-right:3px;
    font-size:11px;
    font-weight:600;
    text-align:center;
    border-radius:2px;
    cursor:pointer;
    &:hover{
        background-color:#CCCCCC;
        box-shadow: 1px 1px 1px black;
    }
`;

const NextBtn = styled.div`
    display:inline-block;
    height:16px;
    width:20px;
    background-color:white;
    font-size:11px;
    font-weight:600;
    text-align:center;
    border-radius:2px;
    cursor:pointer;
    &:hover{
        background-color:#CCCCCC;
        box-shadow: 1px 1px 1px black;
    }
`;

const CalanderPlate = () => {
    const Now = new Date();
    const [month, setMonth] = useState(Now.getMonth()+1);
    const [year, setYear] = useState(Now.getFullYear());
    const Next = () => {
        setMonth( (month%12)+1 );
        if(month + 1 > 12)
            setYear(year + 1);
    }
    const Prev = () => {
        if(month-1 <= 0) {
            setYear(year-1);
            setMonth(12);
        }
        else {
            setMonth(month-1);
        }
    }
    return (
        <Container>
            <MonthSection>{year}년 {month < 10 ? `0${month}` : month}월</MonthSection>
            <CalanderSection>
                <Calander NowMonth={month < 10 ? `0${month}` : month} NowYear={year}/>
            </CalanderSection>
            <ButtonSection>
                <div>
                    <PrevBtn onClick={Prev}> ◀ </PrevBtn>
                    <NextBtn onClick={Next}> ▶ </NextBtn>
                </div>
            </ButtonSection>
        </Container>       
    );
}

export default CalanderPlate;