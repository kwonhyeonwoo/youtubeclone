import React, { useEffect } from 'react';
import Header from '../Header';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from '../../../store';
const HeaderContainer = () => {

    return (
        <Header
        />
    );
};

export default HeaderContainer;