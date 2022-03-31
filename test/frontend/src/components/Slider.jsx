import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

console.log(sliderItems);

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SlideItemWrapper = styled.div`
  display: flex;
  background-color: transparent;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  margin-bottom: 10rem;
  transition: all 1s ease;
`;

const ItemMenu = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 50%;
  height: 100%;
`;

const ItemInfo = styled.div`
  flex-wrap: wrap;
  margin-right: 1rem;
`;

const ItemText = styled.p`
  font-size: 4rem;
  font-weight: bold;
`;

const ItemDesc = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin: 2.4rem 0;
`;

const Button = styled.button`
  border: 2px solid black;
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  z-index: 2;
  background-color: #fff7f7;
  border-radius: 50%;
  padding: 1rem;
  opacity: 0.5;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};

  &:hover {
    opacity: 1;
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>

      <SlideItemWrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <ItemMenu key={item.id}>
            <Img src={item.img}></Img>

            <ItemInfo>
              <ItemText>{item.title}</ItemText>
              <ItemDesc>{item.desc}</ItemDesc>
              <Button>show now</Button>
            </ItemInfo>
          </ItemMenu>
        ))}
      </SlideItemWrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
