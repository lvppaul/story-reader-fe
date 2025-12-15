import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "@/features/story/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "forum",
        element: <div className="container mx-auto p-4">Diễn đàn</div>,
      },
      {
        path: "vip",
        element: <div className="container mx-auto p-4">VIP</div>,
      },
      {
        path: "books",
        element: <div className="container mx-auto p-4">Book</div>,
      },
      {
        path: "categories",
        element: <div className="container mx-auto p-4">Thể loại</div>,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
