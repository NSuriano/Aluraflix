import styled from "styled-components";
import CourseTitle from "../CourseTitle";

const BannerStyles = styled.section`
  width: 100%;
  height: 550px;
  background-color: #6bd1ff;
  background-image: url("./img/banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 333px 75px #0b223f;
  display: flex;
  align-items: center;
	justify-content: space-evenly;
  padding: 100px 30px;

 

  @media (width > 1200px) {
    flex-direction: row-reverse;
    padding: 270px 35px 100px 35px;
    gap: 36px;
		align-items: flex-end;
  }
`;





const CourseImgStyles = styled.img`
  width: 100%;
  margin-top: 100px;

 `; 


const DescriptionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--secondary-white);
  padding-bottom: 40px;

  @media (width > 1024px) {
    width: auto;
    gap: 67px;
    align-items: start;
    padding-bottom: 0;
  }
`;



const DescriptionStyles = styled.p`
  font-size: 1.9rem;
  font-weight: 100;
  width: 70%;
`;

const Banner = () => {
  return (
    <BannerStyles>
   
        <CourseImgStyles
          src="./img/player.png"
          alt="foto"
        />
        
      <DescriptionContainer>
        <CourseTitle color="#6bd1ff">Front end</CourseTitle>
        <div>
          <DescriptionStyles>
              Con nuestros cursos pensados para tu crecimiento profesional. 
              Aprende a tu ritmo, en cualquier momento y lugar. 
              Únete a nosotros y avanza en el mundo
              digital con Alura Latam.  
          </DescriptionStyles>
        </div>
      </DescriptionContainer>
    </BannerStyles>
  );
};

export default Banner;
