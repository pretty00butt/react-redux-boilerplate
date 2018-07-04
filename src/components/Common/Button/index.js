import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 6px;
  &:hover {
    background: #0099cc;
    color: white;
  }
`;

export default ({ size = "default", text = "" }) => {
  let ExtendedButton = Button;
  switch (size) {
    default:
      ExtendedButton = Button.extend`
        padding: 10px 20px 10px 20px;
      `;
      break;
  }
  return <ExtendedButton>{text}</ExtendedButton>;
};
