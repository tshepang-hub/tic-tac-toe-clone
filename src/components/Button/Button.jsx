import React from 'react';
import { ButtonWrapper } from './Button.styled';

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <ButtonWrapper variant={variant} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;