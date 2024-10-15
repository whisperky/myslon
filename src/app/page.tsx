"use client";

import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
// import Loading from "./components/Loading";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";
// import MainPage from "./pages/MainPage";
// import { useWeb3React } from "@web3-react/core";
// import { injected } from "./components/Connectors";
// import Swal from "sweetalert2";
// import DetailPage from "./pages/DetailPage";
// import MintPage from "./pages/mint";
// import CreateAlbum from "./pages/CreateAlbum";
// import ProfilePage from "./pages/ProfilePage";
// import SellPage from "./pages/SellPage";
// import { login } from "./api/api";
// import LoginPage from "./pages/LoginPage";
// import AfterLoginHeader from "./components/AfterLoginHeader";
// import StoreFrontPage from "./pages/StoreFrontPage";
// import AferLoginFooter from "./components/AfterLoginFooter";
// import ProfilePage2 from "./pages/ProfilePage2";

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [mode, setMode] = useState("light");

  if (!isLoaded) return <Loading />;

  return (
    <div className="w-full mx-auto p-0 overflow">
      <Router>
        {/* {conn?(<AfterLoginHeader account={account} isConnected = {conn}/>):(<Header isConnected={conn} account={account} onClick={connectMetamask} />)} */}
        <Header
        //  mode={mode} setMode={setMode}
        />
        <Container />

        <Footer />
      </Router>
    </div>
  );
}
