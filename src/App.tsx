// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import Home from "./pages/home/Home"
// import Users from "./pages/users/Users"
// import Products from "./pages/products/Products";
// import Navbar from "./components/navbar/Navbar";
// import Menu from "./components/menu/Menu";
// import Footer from "./components/footer/Footer";
// import Login from "./pages/login/Login";
// import "./styles/global.scss";

// function App() {
//   const Layout = () => {
//     return (
//       <div className="main">
//         <Navbar />
//         <div className="container">
//           <div className="menuContainer">
//             <Menu />
//           </div>
//           <div className="contentContainer">
//             <Outlet />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/users",
//           element: <Users />,
//         },
//         {
//           path: "/products",
//           element: <Products />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Landing from "./pages/landing/Landing";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/", // Root → Landing page
      element: <Landing />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard", // Dashboard layout (with Navbar + Sidebar + Footer)
      element: <Layout />,
      children: [
        {
          index: true, // 👈 Default child route (when you go to /dashboard)
          element: <Home />,
        },
        {
          path: "users", // 👈 /dashboard/users
          element: <Users />,
        },
        {
          path: "products", // 👈 /dashboard/products
          element: <Products />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
