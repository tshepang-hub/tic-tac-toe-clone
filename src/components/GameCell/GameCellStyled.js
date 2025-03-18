import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  width: 10rem;
  height: 10rem;
  cursor: pointer;

  .markedItem {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  .outlineIcon {
    path,
    circle {
      stroke: none;
    }
  }

  &:hover .outlineIcon path,
  &:hover .outlineIcon circle {
    fill: none; /* Ensure the fill remains none */
    stroke-width: 2;
    stroke: ${(props) => props.theme.colors.primary}; /* Show outline on hover */
  }
`;
