import styled from "styled-components";

const TitleStyles = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
  padding: 17px 0;
  width: 200px;
	border-radius: 15px;
	color: var(--secondary-white);
  background-color: ${(props) => props.$color};
  margin-left: 38px;

	@media (width > 1024px) {
		font-size: 2.8rem;
		width: 390px
	}
`;

const CourseTitle = ({ children, color }) => {
  return <TitleStyles $color={color}>{children}</TitleStyles>;
};

export default CourseTitle;
