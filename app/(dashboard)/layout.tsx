import React, { ReactNode } from "react";
import NavSided from "@/components/Dashboard/NavSided";
import Nav from "@/components/Dashboard/Nav";

type Props = {
  children: ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="bg-background">
      <Nav />
      <NavSided />
      <main className="mx-[7.2917vw] lg:mx-0">{children}</main>
    </div>
  );
}
