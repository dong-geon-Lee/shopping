import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/apiCalls.js";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.6rem 1.4rem;
`;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  flex: 1;
  justify-content: center;
  display: flex;

  & a {
    color: black;
    text-decoration: none;
  }
`;

const Text = styled.h3`
  margin-left: 1rem;
`;

const TextInfo = styled.h4`
  margin-left: 1rem;
  font-weight: 400;

  & a {
    text-decoration: none;
    color: black;
  }
`;

const Input = styled.input`
  margin-left: 1.4rem;
  padding: 0.2rem 0.4rem;
  border: 2px solid #eee;
  position: relative;
`;

const UserInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Icons = styled.div`
  position: absolute;
  right: 3%;
  bottom: 3%;
`;

const SerachWrapper = styled.div`
  position: relative;
`;

const CartIcon = styled.div`
  display: flex;
  margin-left: 1rem;
  position: relative;
`;

const BadgeBox = styled.div`
  position: absolute;
  top: 2%;
  right: -30%;
  transform: translateY(-50%);
  background-color: blue;
  color: #fff;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
  font-size: 0.3rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { quantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <Container>
      <SearchBox>
        <Text>EN</Text>

        <SerachWrapper>
          <Input type="text" placeholder="Search..."></Input>
          <Icons>
            <Search style={{ fontSize: "1rem" }} />
          </Icons>
        </SerachWrapper>
      </SearchBox>

      <Title>
        <Link to="/">LAMA.</Link>
      </Title>

      <UserInfo>
        {user ? (
          <>
            {user.isAdmin && (
              <>
                <TextInfo>
                  <Link to="/">Admin</Link>
                </TextInfo>
                <TextInfo>
                  <Link to="/profile">Profile</Link>
                </TextInfo>
                <TextInfo>
                  <Button onClick={() => logout(dispatch)}>Logout</Button>
                </TextInfo>
              </>
            )}

            {!user.isAdmin && user.accessToken ? (
              <>
                <TextInfo>
                  <Link to="/profile">Profile</Link>
                </TextInfo>
                <TextInfo>
                  <Button onClick={() => logout(dispatch)}>Logout</Button>
                </TextInfo>
              </>
            ) : (
              <>
                {!user.isAdmin && (
                  <>
                    <TextInfo>
                      <Link to="/register">Register</Link>
                    </TextInfo>
                    <TextInfo>
                      <Link to="/login">SignIn</Link>
                    </TextInfo>
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <TextInfo>
              <Link to="/register">Register</Link>
            </TextInfo>
            <TextInfo>
              <Link to="/login">SignIn</Link>
            </TextInfo>
          </>
        )}

        <Link to="/cart">
          <CartIcon>
            <ShoppingCartOutlined></ShoppingCartOutlined>

            <BadgeBox>
              <Badge>{quantity}</Badge>
            </BadgeBox>
          </CartIcon>
        </Link>
      </UserInfo>
    </Container>
  );
};

export default Navbar;
