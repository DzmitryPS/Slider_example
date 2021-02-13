import { React} from "react";
import styled from 'styled-components';

import firstPortrait from "../images/customer1.png";
import secondPortrait from "../images/costumer2.png";
import thirdPortrait from "../images/costumer3.png";

const StyledCard = styled.div`
    width: 100%;
    height: 330px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 125px;
        border-radius: 100%;
        border: 2px solid black;
    }

    p {
        text-align: center;
    }

    svg {
        width: 24px;
        height: 24px;
    }

`;



const Card = ({ imageNumber }) => {
  

    return (
        <StyledCard>
            {
                imageNumber === 0
                    ? (<>
                            <img src={firstPortrait} alt="Reviewer" />
                            <h2>1st</h2>
                            <p>Hey! Im first slide</p>
                        </>)
                    : imageNumber === 1
                        ? (<>
                            <img src={secondPortrait} alt="Reviewer number 2" />
                            <h2>2nd</h2>
                            <p>Hey! im second slide</p>
                        </>)
                        : (<>
                            <img src={thirdPortrait} alt="Reviewer number 3" />
                            <h2>3rd</h2>
                            <p>hey! Im  third</p>
                        </>)
            }
        </StyledCard>

    )
}

export default Card;