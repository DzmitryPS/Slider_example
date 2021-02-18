import { React} from "react";
import styled from 'styled-components';
import {theme} from '../components/theme';
import firstPict from "../images/1.jpg";
import secondPict from "../images/2.jpg";
import thirdPict from "../images/3.jpg";

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
        margin-top: 40px;
        width: 100%;
        height: 75%;
    
    }

    h2 {
        font-size: ${theme.fontSize.medium};
        line-height: ${theme.lineHeight.medium};
        text-align: center;
        margin-top: ${theme.padding.double};
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
                            <img src={firstPict} alt="Reviewer" />
                            <h2>Amazing socks</h2>
                        </>)
                    : imageNumber === 1
                        ? (<>
                            <img src={secondPict} alt="Reviewer number 2" />  
                            <h2>Beautiful socks</h2>  
                        </>)
                        : (<>
                            <img src={thirdPict} alt="Reviewer number 3" /> 
                            <h2>Awesome socks</h2> 
                        </>)
            }
        </StyledCard>

    )
}

export default Card;