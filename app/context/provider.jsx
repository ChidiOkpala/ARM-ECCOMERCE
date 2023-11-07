"use client";

import { createContext } from "react";

import useCart from "../hooks/useCart";

export const AppLayoutContext = createContext(null);

export const AppLayoutProvider = ({ children }) => (
    <AppLayoutContext.Provider value={useCart()}>
        {children}
    </AppLayoutContext.Provider>
);
