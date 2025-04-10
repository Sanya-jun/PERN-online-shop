import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/const";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    component: <Shop />,
  },

  {
    path: LOGIN_ROUTE,
    component: <Auth />,
  },

  {
    path: REGISTRATION_ROUTE,
    component: <Auth />,
  },

  {
    path: DEVICE_ROUTE + "/:id",
    component: <DevicePage />,
  },
];
