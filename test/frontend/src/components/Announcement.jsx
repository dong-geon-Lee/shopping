import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: aqua;
  padding: 0.3rem 1rem;
  display: flex;
  justify-content: center;
`;

const DetailText = styled.p`
  color: #fff;
`;

const Announcement = () => {
  return (
    <Container>
      <DetailText>Super Deal! Free Shipping on Orders Over $50</DetailText>
    </Container>
  );
};

export default Announcement;
