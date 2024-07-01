"use client";

import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
    { ssr: false }
);

export default function Home() {
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen">
                <div className="border hover:border-slate-900 rounded">
                    <WalletMultiButton style={{}} />
                </div>
            </main>
        </div>
    );
}
