import { useContext } from "react";
import Link from "next/link";

import { AppLayoutContext } from "../context/provider";

const AppLayout = ({ children }) => {
    const { cartItems } = useContext(AppLayoutContext);

    return (
        <main className="flex min-h-screen flex-col items-center p-4 pt-0 lg:px-24 lg:pt-0">
            <div className="w-full flex items-center justify-between font-mono text-sm mb-4 fixed p-4 lg:px-24 lg:pt-4 bg-black z-10">
                <Link href="/" className="text-xl font-semibold italic flex items-center space-x-1 text-white">
                    <span>items</span>
                    <b> by </b>
                    <span className="border-b block p-1 rounded border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl">CHIDI</span>
                </Link>
                <Link href="/cart" className="flex text-white w-fit justify-center items-center cursor-pointer border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-2 md:pb-6 md:pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 ">
                    <svg height="15" viewBox="0 0 17 15" width="17" xmlns="http://www.w3.org/2000/svg" aria-label="cart" name="cart">
                    <path
                        d="M15.814 12.856a2.144 2.144 0 1 0-4.287 0 2.144 2.144 0 0 0 4.287 0zm-2.791 0a.646.646 0 1 1 1.288 0 .646.646 0 0 1-1.286 0h-.002zm2.438-10.143V2.71a1.498 1.498 0 0 1 1.454 1.857l-1.022 4.14a1.872 1.872 0 0 1-1.818 1.424H6.482c-.867 0-1.62-.593-1.822-1.436L3.003 1.784a.374.374 0 0 0-.363-.286H.749A.749.749 0 0 1 .749 0h1.889c.866 0 1.62.594 1.822 1.436l1.656 6.912c.041.168.191.286.364.287h7.595a.374.374 0 0 0 .363-.285l1.023-4.14H9.74a.749.749 0 1 1 0-1.497h5.72zM6.403 15a2.144 2.144 0 1 1 0-4.287 2.144 2.144 0 0 1 0 4.287zm0-2.791v.001a.646.646 0 1 0 0-.002z"
                        fill="#FFF"
                        fillRule="nonzero"
                    ></path>
                    </svg>
                    &nbsp;My Cart&nbsp;
                    <code className="font-mono font-bold bg-white px-2 text-black">{cartItems.length}</code>
                </Link>
            </div>

            <div className="mt-24 md:mt-28 w-full">
                {children}
            </div>

            <footer className="text-center bg-black py-4 mt-auto text-white w-full">
                BY CHIDI - &copy;{new Date().getFullYear()}
            </footer>
        </main>
    );
};

export default AppLayout;
