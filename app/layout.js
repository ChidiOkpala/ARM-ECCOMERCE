"use client";

import { ToastContainer } from "react-toastify";

import ReactQueryProvider from "./lib/reactQuery/provider";
import AppLayout from "./components/layout";
import { Inter } from "next/font/google";
import { AppLayoutProvider } from "./context/provider";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <AppLayoutProvider>
            <AppLayout>
              {children}
            </AppLayout>
            <ToastContainer />
          </AppLayoutProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};
