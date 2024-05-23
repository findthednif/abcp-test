import React, { memo } from "react";
import './Button.css'
interface IButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }
function Button({ onClick }: IButtonProps): JSX.Element {
    return (
      <button className ="button" type="button" onClick={onClick}>
        get random user
      </button>
    );
  }
export default memo(Button);