"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen">
                <div className="border hover:border-slate-900 rounded">
                    <WalletMultiButton />
                </div>
            </main>
        </div>
    );
}
