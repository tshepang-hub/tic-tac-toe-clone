import styled from "styled-components";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 1.5rem;

  .logo {
    height: 3.5rem;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
    color: ${(props) => props.theme.colors.text}; /* Ensure currentColor applies to text color */
  }

  button {
    height: 30px;
  }
`;

export const LightModeIcon = styled(MdLightMode)`
  color: ${(props) => props.theme.colors.text}; 
  font-size: 2rem;
  cursor: pointer;
`;

export const DarkModeIcon = styled(MdDarkMode)`
  color: ${(props) => props.theme.colors.text}; 
  font-size: 2rem;
  cursor: pointer;
`;
