import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Pinterest,
  Instagram,
  Twitter,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.4rem;
  margin: 1rem 0 0.5rem;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 1.4rem;
`;

const CenterSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 1.4rem;
  margin: 0 0 0 2rem;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 1.4rem;
`;

const LeftTitle = styled.h1``;

const LeftText = styled.p`
  padding: 1rem 0;
`;

const LeftIconBox = styled.div`
  display: flex;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 2rem;
    height: 2rem;
    padding: 0.3rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;

const CenterWrapper = styled.div`
  display: flex;
`;

const CenterTitle = styled.h3``;

const Title = styled.h3``;

const CenterTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.7rem 0;
  margin-right: 3rem;
`;

const CenterText = styled.h4`
  font-weight: 300;
  margin-bottom: 0.4rem;
`;

const TextGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

const RightBox = styled.div`
  margin: 0.5rem 0rem 0.5rem;
  display: flex;
`;

const RightText = styled.div`
  margin-left: 0.3rem;
`;

const Payment = styled.img`
  margin-top: 0.6rem;
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <LeftTitle>LAMA.</LeftTitle>
        <LeftText>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </LeftText>

        <LeftIconBox>
          <Icon>
            <Facebook
              style={{ backgroundColor: "blue", fill: "white" }}
            ></Facebook>
          </Icon>

          <Icon>
            <Instagram
              style={{ backgroundColor: "red", fill: "white" }}
            ></Instagram>
          </Icon>

          <Icon>
            <Twitter
              style={{ backgroundColor: "skyblue", fill: "white" }}
            ></Twitter>
          </Icon>

          <Icon>
            <Pinterest
              style={{ backgroundColor: "currentcolor", fill: "white" }}
            ></Pinterest>
          </Icon>
        </LeftIconBox>
      </LeftSide>

      <CenterSide>
        <Title>UseFull Links</Title>

        <CenterWrapper>
          <TextGroup>
            <CenterTextBox>
              <CenterText>Home</CenterText>
              <CenterText>Man Fashion</CenterText>
              <CenterText>Accessories</CenterText>
              <CenterText>Order Tracking</CenterText>
              <CenterText>Wishlist</CenterText>
            </CenterTextBox>

            <CenterTextBox>
              <CenterText>Cart</CenterText>
              <CenterText>Woman Fashion</CenterText>
              <CenterText>My Account</CenterText>
              <CenterText>Wishlist</CenterText>
              <CenterText>Terms</CenterText>
            </CenterTextBox>
          </TextGroup>
        </CenterWrapper>
      </CenterSide>

      <RightSide>
        <CenterTitle>Contact</CenterTitle>

        <RightWrapper>
          <RightBox>
            <Room></Room>
            <RightText>622 Dixie Path , South Tobinchester 98336</RightText>
          </RightBox>

          <RightBox>
            <Phone></Phone>
            <RightText>+1 234 56 78</RightText>
          </RightBox>

          <RightBox>
            <MailOutline></MailOutline>
            <RightText>contact@lama.dev</RightText>
          </RightBox>

          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
        </RightWrapper>
      </RightSide>
    </Container>
  );
};

export default Footer;
