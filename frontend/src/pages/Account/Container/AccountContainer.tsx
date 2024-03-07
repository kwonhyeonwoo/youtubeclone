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

    return <Account

    />
};

export default AccountContainer;