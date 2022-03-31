import React from 'react';

import { Routes, Route, BrowserRouter  } from "react-router-dom";
import { LoginSreen } from "../components/login/LoginSreen";
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>

        <Routes>
            
            <Route path="/login" element={<LoginSreen />} />

            <Route path='/*' element={<DashboardRoutes /> }/>
        </Routes>
    </BrowserRouter>
  )
}
