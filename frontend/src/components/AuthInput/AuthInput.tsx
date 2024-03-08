import React, { Fragment } from "react";
import "./css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from '@fortawesome/free-solid-svg-icons';

type Props = {
    id?: string;
    type: string;
    placeholder: string;
    minLength?: number;
    maxLength?: number;
    name?: string;
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const AuthInput = ({
    id,
    type,
    placeholder,
    minLength,
    maxLength,
    name,
    ChangeData
}: Props) => {
    return (
        <div className="input-wrapper">
            {placeholder &&
                <div className="input-name">{placeholder}</div>
            }
            {name === 'avatar' && <label className='profile-image' htmlFor="avatar"> <FontAwesomeIcon icon={faCamera} /></label>}
            <input
                className="auth-input"
                id={id}
                type={type}
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                name={name}
                onChange={ChangeData}
            />
        </div>
    )
}
export default AuthInput;