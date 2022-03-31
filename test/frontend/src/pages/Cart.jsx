import React, { useState } from "react";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  width: 100%;
  font-weight: 400;
  text-align: center;
  margin: 1.5rem 0 1.5rem;
  font-size: 2rem;
`;

const HeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonLeft = styled.button`
  border: 2px solid black;
  background-color: transparent;
  padding: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  border-radius: 5px;
  margin: 0 2rem;
`;

const ButtonRight = styled(ButtonLeft)`
  background-color: black;
  color: #fff;
`;

const TextGroup = styled.div`
  display: flex;
`;

const Text = styled.p`
  margin: 0 1rem;
  text-decoration: underline;
  font-size: 1.1rem;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
  border-bottom: 1px solid grey;
`;

const OrderGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid grey;
  padding: 2rem;
  border-radius: 0.8rem;
`;

const ImgBox = styled.div`
  width: 12rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;

const InfoText = styled.p`
  margin-bottom: 0.8rem;

  &:last-child {
    margin-top: 1rem;
  }
`;

const BoldText = styled.b``;

const Circle = styled.div``;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: auto;
`;

const CalGroup = styled.div`
  display: flex;
`;

const QtyText = styled.h2``;

const Price = styled.p`
  font-size: 1.3rem;
  margin: 1rem 0;
`;

const OrderTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 200;
`;

const CheckoutGroup = styled.div`
  margin: 1rem 0;
`;

const CheckoutBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const CalculText = styled.p``;

const OrderPrice = styled.h3``;

const CheckoutButton = styled.button`
  padding: 10px;
  text-transform: uppercase;
  background-color: black;
  color: #fff;
`;

const ItemInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem;
`;

const Cart = () => {
  const { products, quantity, total } = useSelector((state) => state.cart);

  console.log(products);
  console.log(quantity);
  console.log(total);

  return (
    <Container>
      <Announcement></Announcement>
      <Wrapper>
        <Title>YOUR BAG</Title>

        <HeadBox>
          <ButtonLeft>continue shopping</ButtonLeft>
          <TextGroup>
            <Text>Shopping bag</Text>
            <Text>Your wishlist</Text>
          </TextGroup>
          <ButtonRight>checkout now</ButtonRight>
        </HeadBox>

        <ItemInfoBox>
          <CenterContainer>
            {products.map((item) => (
              <>
                <ItemGroup key={item._id}>
                  <ImgBox>
                    <Image src={item.img}></Image>
                  </ImgBox>

                  <InfoBox>
                    <InfoText>
                      <BoldText>Product:</BoldText> {item.title}
                    </InfoText>
                    <InfoText>
                      <BoldText>ID:</BoldText> {item._id}
                    </InfoText>
                    <Circle color={item.color}>
                      <BoldText>Color:</BoldText> black
                    </Circle>
                    <InfoText>
                      <BoldText>Size:</BoldText> 35
                    </InfoText>
                  </InfoBox>

                  <PriceBox>
                    <CalGroup>
                      <Add></Add>
                      <QtyText>{item.quantity}</QtyText>
                      <Remove></Remove>
                    </CalGroup>

                    <Price>$ {item.price}</Price>
                  </PriceBox>
                </ItemGroup>
              </>
            ))}
          </CenterContainer>

          <OrderGroup>
            <OrderTitle>Order Summary</OrderTitle>

            <CheckoutGroup>
              <CheckoutBox>
                <CalculText>Subtotal</CalculText>
                <OrderPrice>$ 80</OrderPrice>
              </CheckoutBox>
              <CheckoutBox>
                <CalculText>Estimated Shipping</CalculText>
                <OrderPrice>$ 5.90</OrderPrice>
              </CheckoutBox>
              <CheckoutBox>
                <CalculText>Shipping Discount</CalculText>
                <OrderPrice>$ -5.90</OrderPrice>
              </CheckoutBox>
              <CheckoutBox>
                <CalculText>Total</CalculText>
                <OrderPrice>$ 80</OrderPrice>
              </CheckoutBox>
            </CheckoutGroup>

            <CheckoutButton>Checkout now</CheckoutButton>
          </OrderGroup>
        </ItemInfoBox>
      </Wrapper>

      <Footer></Footer>
    </Container>
  );
};

export default Cart;
