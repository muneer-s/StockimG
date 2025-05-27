import React, { type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import {useAppSelector} from '../Redux/store'

const UserProtecteRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { userData } = useAppSelector((state) => state.auth);
  return userData ? children : <Navigate to="/login" />;
};

export default UserProtecteRoute;


