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
    const [data, setData] = useState<Account>({
        name: '',
        nickName: '',
        email: '',
        password: '',
        passwordCheck: ''
    })
    const ChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setData((current) => ({
            ...current,
            [name]: value
        }));
    }
    const AuthSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {

    }
    return <Account
        AccountSubmit={AuthSubmit}
        ChangeData={ChangeData}

    />
};

export default AccountContainer;