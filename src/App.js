import { React, useState } from "react";
import styled from 'styled-components';
import './App.css';
import Card from '../src/components/Card';
import CircleButton from '../src/components/CircleButton';
import {theme} from '../src/components/theme';

const MainDiv= styled.div`
width: 700px;
display: flex;
justify-content: center; 
margin: auto;
`;

const StyledMyContainer = styled.div`
    width: 20%;
    background-color: ${theme.color.tertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.padding.double};
    gap: ${theme.padding.double};
    border-radius: 15px;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
    }  
`;


const App = () => {
  const [carouselImage, setCarouselImage] = useState(0);
   
    const firstImageToggle = () => setCarouselImage(0);
    const secondImageToggle = () => setCarouselImage(1);
    const thirdImageToggle = () => setCarouselImage(2);

    const moveSliderLeft = () =>{
      switch(carouselImage){
        case 0:
          return setCarouselImage(1);
        case 1:
          return setCarouselImage(2);
          case 2:
            return setCarouselImage(0);
      }
    }

    const moveSliderRight = () =>{
      switch(carouselImage){
        case 0:
          return setCarouselImage(2);
        case 1:
          return setCarouselImage(0);
          case 2:
            return setCarouselImage(1);
      }
    }
    
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart=(e)=> {
      setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove=(e)=> {
    setTouchEnd(e.targetTouches[0].clientX);
}

const handleTouchEnd=()=> {
  if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      moveSliderRight();
  }

  if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      moveSliderLeft();
  }
}

  return (
    <MainDiv>
       <StyledMyContainer onTouchStart={handleTouchStart} onTouchEnd = {handleTouchEnd} onTouchMove={handleTouchMove}>
                <Card imageNumber={carouselImage} />
                <div>
                    <CircleButton action={firstImageToggle} actionTwo={secondImageToggle} actionThree={thirdImageToggle} isActive={carouselImage} />
                </div>
        </StyledMyContainer>
        </MainDiv>
  );
}

export default App;
