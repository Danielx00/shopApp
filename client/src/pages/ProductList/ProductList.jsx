import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Annoucement from "../../components/NavBar/Announcement";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
import { mobile } from "../../responsive";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({margin: '0px 20px', display: 'flex', flexDirection:'column'})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: '0px'})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: transparent;
  border: 1px solid lightgray;
  ${mobile({margin: '10px 0px'})}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Annoucement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products:
            </FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (ASC)</Option>
              <Option>Price (DESC)</Option>
            </Select>
        
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
