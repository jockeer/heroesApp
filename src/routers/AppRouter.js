import React from 'react';

import { Routes, Route, BrowserRouter  } from "react-router-dom";
import { LoginSreen } from "../components/login/LoginSreen";
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>

        <Routes>
            
            {/* <Route path="/login" element={<LoginSreen />} /> */}
            <Route path='/login' element = {
              <PublicRoute>
                <LoginSreen/>
              </PublicRoute>
            }/>

            <Route path='/*' element={
              <PrivateRoute> 
                <DashboardRoutes /> 
              </PrivateRoute>
            } />
            {/* <Route path='/*' element={<DashboardRoutes /> }/> */}
        </Routes>
    </BrowserRouter>
  )
}
