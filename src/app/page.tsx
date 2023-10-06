"use client";
import React from "react";
import { Navbar } from "@/component/navbar/Navbar.jsx";
import Accordion from "@/component/accordion/Accordion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Home = () => {

  // Protecting this Page on client side to not render if unauthenticated
  const { data : session} = useSession({
    required : true,
    onUnauthenticated() {
      redirect('/login')
    },
  });

  return (
    <>
      <Navbar />
      <Accordion />
    </>
  );
};

export default Home;
