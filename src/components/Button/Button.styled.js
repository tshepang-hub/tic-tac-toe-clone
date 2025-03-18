import styled from "styled-components";

export const ButtonWrapper = styled.button`
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => 
      props.variant === 'primary' ? props.theme.colors.secondary : props.theme.colors.tertiary};
    padding: 30px 30px;
    min-width: 300px;
    font-size: 1.5rem;
    border: none;
    border-radius: 10px;
    font-weight: 400;
    margin: 30px 20px;

    &:hover {
        box-shadow: 0 0 15px #00B4D8;
        cursor: pointer;
    }
`;