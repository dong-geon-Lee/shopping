import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 30rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
`;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem auto;
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
  text-align: center;
  width: 100%;
  margin-top: 0.3rem;
`;

const Button = styled.button`
  background-color: green;
  color: #fff;
  width: 30%;
  padding: 0.8rem 1rem;
  margin-top: 2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Register = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = userInput;

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

    if (password !== password2) {
      alert("비밀번호가 일치하지 않다!");
    }

    register(dispatch, { username, email, password });

    setUserInput({
      username: "",
      email: "",
      password: "",
      password2: "",
    });

    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>

        <InputBox onSubmit={onSubmit}>
          <UserInput
            type="text"
            placeholder="username"
            onChange={onChange}
            name="username"
            value={username}
          ></UserInput>
          <UserInput
            type="text"
            placeholder="email"
            onChange={onChange}
            name="email"
            value={email}
          ></UserInput>
          <UserInput
            type="password"
            placeholder="password"
            onChange={onChange}
            name="password"
            value={password}
          ></UserInput>
          <UserInput
            type="password"
            placeholder="confirm password"
            onChange={onChange}
            name="password2"
            value={password2}
          ></UserInput>

          <PolicyText>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </PolicyText>

          <Button type="submit">Create</Button>
        </InputBox>
      </Wrapper>
    </Container>
  );
};

export default Register;
