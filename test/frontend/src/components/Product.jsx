import React from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 3;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  height: 350px;
  position: relative;
  background-color: #f5fbfd;
  margin: 5px;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

//  Container 기반을 세움
const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}></Image>

      <Info>
        <Icon>
          <ShoppingCartOutlined></ShoppingCartOutlined>
        </Icon>

        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined></SearchOutlined>
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderOutlined></FavoriteBorderOutlined>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
