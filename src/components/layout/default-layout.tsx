"use client";

import type React from "react";
import { Toaster } from "sonner";
import Header from "../shared/header";
import { Footer } from "../shared/footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Toaster position="top-right" richColors closeButton duration={4000} />
    </main>
  );
}
