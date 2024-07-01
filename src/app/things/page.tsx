"use client"

import {
    WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";

const WalletDisconnectButton = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletDisconnectButton),
    { ssr: false }
);

const WalletConnectButton = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletConnectButton),
    { ssr: false }
);

const WalletIcon = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletIcon),
    { ssr: false }
);

const WalletModal = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletModal),
    { ssr: false }
);

const WalletModelButton = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletModalButton),
    { ssr: false }
);

export default function Things() {
    const { wallet } = useWallet();

    return (
            <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
                <h1>Things</h1>
                <WalletConnectButton />
                <WalletDisconnectButton />
                <WalletIcon wallet={wallet} />
                <WalletModelButton/>
                {/*<WalletModal/>*/} Provides the same thing as WalletModelButton but dont need to click here
            </main>
    );
}