import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  flex: 1;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2rem;
  width: 19rem;
  text-align: center;
`;

const ImgBox = styled.div`
  display: flex;
  margin: 0.4rem 0.4rem 0rem 0.4rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  display: flex;
  border: none;
  font-weight: 500;
  color: grey;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container key={item.id}>
      <Title>{item.title}</Title>

      <ImgBox>
        <Img src={item.img} />
        <Link to={`/products/${item.cat}`}>
          <Button>shop now</Button>
        </Link>
      </ImgBox>
    </Container>
  );
};

export default CategoryItem;
