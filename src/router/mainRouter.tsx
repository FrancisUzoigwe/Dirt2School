import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import MainLayout from "../components/common/MainLayout";
import HomeScreen from "../pages/screen/HomeScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
import SigninScreen from "../pages/auth/SigninScreen";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminScreen from "../pages/admin/AdminScreen";
import ViewAllScreen from "../pages/admin/ViewAllScreen";
import CreditScreen from "../pages/admin/CreditScreen";
import AdminHistoryScreen from "../pages/admin/AdminHistoryScreen";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import EmailScreen from "../pages/auth/EmailScreen";
import VerifiedScreen from "../pages/auth/VerifiedScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/signin",
    element: <SigninScreen />,
  },
  {
    path: "/api/:token/student-secret-key",
    element: <SigninScreen />,
  },
  {
    path: "/email",
    element: <EmailScreen />,
  },
  {
    path: "/verified",
    element: <VerifiedScreen />,
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminScreen />,
      },
      {
        path: "/admin/view",
        element: <ViewAllScreen />,
      },
      {
        path: "/admin/credit",
        element: <CreditScreen />,
      },
      {
        path: "/admin/history",
        element: <AdminHistoryScreen />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
