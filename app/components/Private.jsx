"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NextAuthProvider from "../Providers/NextAuthProvider";
import { useEffect } from "react";

const Private = ({ children }) => {
  const { data } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (!data?.user) {
  //     router.back();
  //   }
  // }, []);
  return <NextAuthProvider session={data}>{children}</NextAuthProvider>;
};

export default Private;
