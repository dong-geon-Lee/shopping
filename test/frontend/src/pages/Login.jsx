import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls.js";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 26rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.2rem 1.6rem;
  margin-top: 1rem;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 1rem;
`;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserInput = styled.input`
  margin-bottom: 1rem;
  padding: 0.2rem 0.3rem;
  border: 1px solid black;
  padding: 0.4rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 1.1rem;

  &:focus {
    outline: none;
    border: 2px solid blue;
  }
`;

const PolicyText = styled.p`
  font-size: 0.8rem;
  text-decoration: underline;
  margin-top: 0.6rem;
`;

const Button = styled.button`
  background-color: green;
  color: #fff;
  width: 100%;
  padding: 0.4rem 0.6rem;
  text-transform: uppercase;
  font-size: 1rem;
  margin: 0.4rem 0 0.8rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Login = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userInput;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    login(dispatch, { username, password });

    setUserInput({
      username: "",
      password: "",
    });

    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>

        <InputBox onSubmit={onSubmit}>
          <UserInput
            type="text"
            placeholder="username"
            onChange={onChange}
            name="username"
            value={username}
          ></UserInput>
          <UserInput
            type="password"
            placeholder="password"
            onChange={onChange}
            name="password"
            value={password}
          ></UserInput>

          <Button type="submit">Login</Button>

          <PolicyText>DO NOT YOU REMEMBER THE PASSWORD?</PolicyText>
          <PolicyText>CREATE A NEW ACCOUNT</PolicyText>
        </InputBox>
      </Wrapper>
    </Container>
  );
};

export default Login;
