import React, { useEffect } from 'react';
import Home from '../Home';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
const HomeContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    return (
        <Home

        />
    );
};

export default HomeContainer;