import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    display: flex;
    text-align: center;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: 2.3rem;
    font-family: 'Pacifico', cursive;
    background: transparent;
`

export const Subtitle = styled.h3`
    color: ${(props) => props.theme.colors.text};
    font-size: 1.3rem;
    font-weight: 300;
    margin: 10px 0;
    font-family: 'Poppins', sans-serif;
    background: transparent;
`

export const ModalContainer = styled.div`
    min-width: 400px;
    min-height: 400px;
    margin: 0 auto;
    padding: 40px 20px;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
`;

export const ModalBody = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
`;