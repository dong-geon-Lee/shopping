import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  background-color: beige;
  padding: 5rem 8rem;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  margin: 1rem 0 1.2rem;
`;

const SendBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const Input = styled.input`
  padding: 0.6rem;
  width: 60%;
`;

const Button = styled.button`
  border: none;
  background-color: aqua;
  padding: 0.2rem 0.8rem;

  & svg {
    fill: #fff;
  }
`;

const NewsLetter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Newsletter</Title>
        <Text>Get timely updates from your favorite products.</Text>

        <SendBox>
          <Input type="text" placeholder="Enter the Your email..." />
          <Button>
            <Send></Send>
          </Button>
        </SendBox>
      </Wrapper>
    </Container>
  );
};

export default NewsLetter;
