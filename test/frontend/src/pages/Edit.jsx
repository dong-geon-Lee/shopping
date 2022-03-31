import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteUser, edit } from "../redux/apiCalls";

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
  height: 35rem;
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

const Edit = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, password, password2, email } = userInput;

  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user._id);

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
      return;
    }

    edit(dispatch, { id: user._id, username, email, password });

    setUserInput({
      username: "",
      email: "",
      password: "",
      password2: "",
    });

    navigate("/");
  };

  const onDelete = (id) => {
    deleteUser(dispatch, id);

    navigate("/");
  };

  return (
    <Container>
      <Wrapper>
        <Title>환영합니다! {user?.username}님 </Title>
        <Title>{user?.useremail} </Title>

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

          <Button type="submit">Edit</Button>
          <Button
            type="button"
            onClick={() => onDelete({ id: user._id })}
            style={{ backgroundColor: "red" }}
          >
            Delete
          </Button>
        </InputBox>
      </Wrapper>
    </Container>
  );
};

export default Edit;
