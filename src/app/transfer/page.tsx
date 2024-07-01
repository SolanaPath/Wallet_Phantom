"use client"

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as web3 from "@solana/web3.js";
import { useState } from "react";

export default function Transfer() {
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const [receipientKey, setReceipientKey] = useState("");
    const [signature, setSignature] = useState<string>("");

    const sendSol = async () => {
        if (!publicKey) {
            throw new Error("Wallet is not connected");
        }
        try {
            const receipient = new web3.PublicKey(receipientKey);
            const transaction = new web3.Transaction().add(
                web3.SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: receipient,
                    lamports: LAMPORTS_PER_SOL,
                })
            );
            const signature = await sendTransaction(transaction, connection);
            console.log("SIGNATURE", signature);
            setSignature(signature);
        } catch (error) {
            console.error("Transaction failed", error);
        }
    };

    return (
        <div>
            <main className="flex items-center justify-center min-h-screen">
                <div className="border hover:border-slate-900 rounded p-4">
                    <h1>This is the transfer Page</h1>
                    <input
                        type="text"
                        placeholder="Recipient Public Key"
                        value={receipientKey}
                        onChange={(e) => setReceipientKey(e.target.value)}
                        className="border rounded p-2 mt-4"
                    />
                    <button onClick={sendSol} className="ml-4 p-2 bg-blue-500 text-white rounded">
                        Send 1 LAMPORT
                    </button>
                    {signature && (
                        <div className="mt-4">
                            <h2>Transaction Signature: {signature}</h2>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
