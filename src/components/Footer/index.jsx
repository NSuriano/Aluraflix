import styled from "styled-components";


const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  height: 125px;
  min-height: 125px;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-background-dark-blue);

  @media (width > 1024px) {
    display: flex;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  background-color: var(--main-color-blue);
`;

const Texto = styled.p`
font-size: 2rem;
color: #1b6197; 
text-align: center;

`;

const Footer = () => {
  return (
    <FooterStyles>
      <ShadowStyles />
      <Texto>
      <p>Desarrollado por Norma Suriano</p>
      <p>2024</p>
      </Texto>
    </FooterStyles>
  );
};

export default Footer;
