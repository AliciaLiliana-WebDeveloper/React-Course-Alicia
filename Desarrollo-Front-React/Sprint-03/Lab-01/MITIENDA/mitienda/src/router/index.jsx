import {createBrowserRouter} from "react-router-dom";
import Layout from "../views/Layout/Layout";
import LoginForm from "../views/LoginForm/LoginForm";
import CartSection from "../views/CartSection/CartSection";
import ProductDetails from "../views/ProductDetails/ProductDetails";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../views/NotFound/NotFound";
import ProductsSection from "../views/ProductsSection/ProductsSection";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <ProductsSection /> },
        {
          path: "/product/:id",
          element: (
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <CartSection />
            </ProtectedRoute>
          ),
        },
        { path: "/login", element: <LoginForm /> },
      ],
    },
  ]);