import React from 'react';
import { isButtonElement } from 'react-router-dom/dist/dom';
import "./css/index.css"
type Props = {
    AccountSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    name: string;
}
const AuthBtn = ({ AccountSubmit, name }: Props) => {
    return (
        <button onClick={AccountSubmit} className='auth-button'>
            {name}
        </button>
    );
};

export default AuthBtn;