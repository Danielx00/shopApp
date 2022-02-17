import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: 'column'})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: 'none'})}
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: '#eee'})}
`;

const ContactItem = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`
const Payment = styled.img`
width: 50%;

`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RAUSEL</Logo>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          at maxime hic nam repudiandae vitae, voluptates velit et deserunt
          aliquid repellat facere impedit totam assumenda nisi id similique. Ut,
          nulla.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist </ListItem>
          <ListItem>Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{marginRight: "10px"}} />
          622 Dixie PAth, South Tobinchester 9851
        </ContactItem>
        <ContactItem>
          <CallIcon style={{marginRight: "10px"}}  />
          48 521 026 987
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{marginRight: "10px"}}  />
          rausel@contact.com
        </ContactItem>
        <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
