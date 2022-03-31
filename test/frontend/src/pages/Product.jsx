import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../redux/apiCalls.js";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer.jsx";
import { Add, Remove } from "@material-ui/icons";
import { addProduct } from "../redux/cartSlice.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  height: 75vh;
  padding: 3rem;
`;

const ImgBox = styled.div`
  flex: 1;
  margin: 3rem;
  margin-left: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const UserBox = styled.div`
  flex: 1;
  margin: 3rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2``;

const Desc = styled.p`
  margin: 2.5rem 0 1rem;
`;

const Price = styled.h3`
  font-size: 2rem;
  font-weight: 200;
  margin-top: 2.5rem;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin-top: 1rem;
`;

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 1rem 0 3rem;
`;

const Color = styled.h3`
  margin: 1.3rem 1rem 1.3rem 0;
  font-weight: 300;
`;

const Circle = styled.div`
  padding: 0.6rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
`;

const ChoiceBox = styled.div`
  flex: 1;
  display: flex;
  margin: 1rem 0 3rem;
`;

const Choice = styled.select`
  cursor: pointer;
`;

const Option = styled.option``;

const ButtonBox = styled.div`
  flex: 1.3;
`;

const Button = styled.button`
  padding: 1rem;
  border: 2px solid green;
  background-color: transparent;
  cursor: pointer;
  border-radius: 1rem;
`;

const Text = styled.h3`
  font-weight: 300;
  margin-right: 1rem;
`;

const AddBox = styled.div`
  display: flex;
  align-items: center;
`;

const Count = styled.div`
  padding: 0.2rem 0.8rem;
  border: 1px solid green;
  border-radius: 0.4rem;
  margin: 0rem;
`;

const IconGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  console.log(product);
  console.log(id, size, color, "choice");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await publicRequest.get(`/products/find/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, color, size, quantity }));
  };

  return (
    <Container>
      <Announcement></Announcement>
      <Wrapper>
        <ImgBox>
          <Image src={`${product.img}`}></Image>
        </ImgBox>

        <UserBox>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <Select>
            <ColorBox>
              <Color>Color</Color>
              {product.color?.map((color) => (
                <Circle
                  key={color}
                  color={color}
                  onClick={(e) => setColor(color)}
                ></Circle>
              ))}
            </ColorBox>

            <ChoiceBox>
              <Text>Size</Text>
              <Choice onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((size) => (
                  <Option key={size}>{size}</Option>
                ))}
              </Choice>
            </ChoiceBox>
          </Select>

          <AddBox>
            <IconGroup>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              ></Remove>
              <Count>{quantity}</Count>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              ></Add>
            </IconGroup>

            <ButtonBox>
              <Button onClick={() => handleClick()}>ADD TO CART</Button>
            </ButtonBox>
          </AddBox>
        </UserBox>
      </Wrapper>

      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </Container>
  );
};

export default Product;
