import React from 'react';
import styled from 'styled-components';
import DayBox from "./DayBox";

const Container = styled.div`
    display:grid;
    height:100%;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr 1fr 1fr 1fr 1fr;
`;
    const MakeDate = (NowM, NowY) => {
        let D = new Array();
        for (let i=1-new Date(`${NowY}-${NowM}-01`).getDay(); i<=new Date(NowY,NowM,0).getDate(); i++) {
            D.push(i);
        }
        return D;
    }
const Calander = ({NowMonth, NowYear}) => {
    
    return (
        <Container>
            {
                MakeDate(NowMonth,NowYear).map((date,index) => (
                    <DayBox 
                        NowD={date}
                        key={index} 
                        NowM={NowMonth}
                        NowY={NowYear}
                    />
                ))
            }
        </Container>
    );
}

export default Calander;