import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from "./pages/HomeView";
import LandingView from "./pages/LandingView";
import ChatView from "./pages/ChatView";
import ProfileView from "./pages/ProfileView";



const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingView />,
  },
  {
    path: "/home",
    element: <HomeView />,
  },
  {
    path: "/chat",
    element: <ChatView />,
  },
  {
    path: "/profile",
    element: <ProfileView />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
    <RouterProvider router={router} />
    </ConvexProvider>
  </React.StrictMode>,
);