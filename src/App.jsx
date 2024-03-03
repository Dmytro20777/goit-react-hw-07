import { useEffect, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { useAuth } from "./components/hooks/useAuth";
import { Layout } from "./Layout";
import { refreshUser } from "./redux/auth/operations";



const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactsPage = lazy(() => import('./pages/Сontacts'));

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

    useEffect(() => {
    dispatch(refreshUser());
    }, [dispatch]);
  
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};