import { React} from "react";
import styled from 'styled-components';
import {theme} from '../components/theme';
import firstPortrait from "../images/customer1.png";
import secondPortrait from "../images/costumer2.png";
import thirdPortrait from "../images/costumer3.png";

const StyledCard = styled.div`

    width: 100%;
    height: 330px;
    border-radius: ${theme.borderRadius.small};
    display: flex;
    flex-direction: column;
    gap: ${theme.padding.standard};
    align-items: center;
    padding: ${theme.padding.standard};
    background-color: ${theme.color.light};

    img {
        width: 125px;
        border-radius: ${theme.borderRadius.circle};
        border: ${theme.borderWidth.medium} solid ${theme.color.primary};
        padding: ${theme.padding.small};
    }

    h2 {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
        margin-top: ${theme.padding.double};
    }

    p {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
    }


    @media (min-width: ${theme.media.phone}) {
        max-width: ${theme.media.phone};
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