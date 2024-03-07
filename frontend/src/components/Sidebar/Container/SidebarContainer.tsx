import React from 'react';
import Sidebar from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';

const SidebarContainer = () => {
    return (
        <Sidebar />
    );
};

export default SidebarContainer;