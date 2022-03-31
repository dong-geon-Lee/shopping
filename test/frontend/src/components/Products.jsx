import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProducts } from "../redux/apiCalls";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ sort, filters, catagory }) => {
  console.log(filters, sort, catagory);

  const { products } = useSelector((state) => state.product);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();
  console.log(products, "? 아무것도 없나요?");

  useEffect(() => {
    getProducts(dispatch, catagory);
  }, [dispatch]);

  useEffect(() => {
    catagory &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
  }, [catagory, products, filters]);

  console.log(filteredProducts);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prevState) => {
        return [...prevState].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (sort === "asc") {
      setFilteredProducts((prevState) => {
        return [...prevState].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prevState) => {
        return [...prevState].sort((a, b) => b.price - a.price);
      });
    }
  }, [sort]);

  return (
    <Container>
      {catagory
        ? filteredProducts.map((item) => (
            <Product key={item._id} item={item}></Product>
          ))
        : products
            .slice(0, 100)
            .map((item) => <Product key={item._id} item={item}></Product>)}
    </Container>
  );
};

export default Products;
