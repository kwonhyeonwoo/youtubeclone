import React, { useState } from 'react';
import Account from '../Account';
import { useNavigate } from 'react-router-dom';
import useAuthChange from '../../../hooks/useAuthChange';
type Account = {
    name: string;
    nickName: string;
    email: string;
    password: string;
    passwordCheck: string;
}

const AccountContainer = () => {
    const navigate = useNavigate();

    const { authData, selectedFile, viewAvatar, setIsError, isError, onChange } = useAuthChange();

    const AccountSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(authData)
        })
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData)
        return responseData

    }
    return <Account
        ChangeData={onChange}
        AccountSubmit={AccountSubmit}
        isError={isError}
        viewAvatar={viewAvatar}
    />
};

export default AccountContainer;