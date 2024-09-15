import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConvexReactClient } from "convex/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeView from "./pages/HomeView";
import LandingView from "./pages/LandingView";
import ChatView from "./pages/ChatView";
import ProfileView from "./pages/ProfileView";
import Navbar from "./components/Navbar";
import { ConvexProviderWithAuth0 } from "convex/react-auth0";
import { Auth0Provider } from "@auth0/auth0-react";



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
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN ?? ""}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID ?? ""}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <ConvexProviderWithAuth0 client={convex}>
        <Navbar />
        <RouterProvider router={router} />
      </ConvexProviderWithAuth0>
    </Auth0Provider>

  </React.StrictMode>,
);