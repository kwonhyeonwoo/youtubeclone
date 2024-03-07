import React, { useState } from 'react';
import Login from '../Login';
import { useNavigate } from 'react-router-dom';
import useAuthChange from '../../../hooks/useAuthChange';

const LoginContainer = () => {
    const navigate = useNavigate();


    return (
        <Login

        />
    );
};

export default LoginContainer;