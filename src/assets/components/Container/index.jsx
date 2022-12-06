import styled from "styled-components";
import Card from '../Card';


const MainContainer = styled.main`
    width: 320px;
    margin: 5vh auto;

    @media screen and (min-width: 768px) {
        width: 90vw;
        max-width: 900px;
        display: flex;
        margin: 20vh auto;
    }
`;

export default function Container() {
    return (
        <MainContainer>
            <Card />
        </MainContainer>
    )
}