import { CompanyFrame, CompanyText, Copyright, FooterContainer, Logo, Socials, SocialsText, Terms, TermsText } from '@/styles/Footer/Footer';
import React from 'react';

const Footer = () => {
  return (
    <FooterContainer>
        <Logo></Logo>
        <CompanyFrame>
            <CompanyText>Company</CompanyText>
        <a href= "/">About Us</a>
        <a href= "/">Why Us</a>
        </CompanyFrame>
        <Socials>
            <SocialsText>Socials</SocialsText>
        <a href= "/">LinkedIn</a>
        <a href= "/">Twitter</a>
        <a href= "/">Instagram</a>
        </Socials>
        <Terms>
            <TermsText>Terms & Conditions</TermsText>
        <a href= "/">Privacy notice</a>
        <a href= "/">Cookie policy</a>
        </Terms>
        <Copyright> Copyright@Broker Box{new Date().getFullYear()}</Copyright>
    </FooterContainer>
  )
}

export default Footer;