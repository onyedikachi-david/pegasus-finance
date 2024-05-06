"use client";

import { SetStateAction, useState } from "react";
// import Link from "next/link";
import type { NextPage } from "next";
import { parseEther } from "viem";
import { useWalletClient } from "wagmi";
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Modal from "~~/components/Modal";
import { useScaffoldContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

// import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();
  // const [createVaultModalOpen, setCreateVaultModalOpen] = useState(false);
  // const [createVaultError, setCreateVaultError] = useState(false);
  // const [createVaultInput, setCreateVaultInput] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: SetStateAction<string>) => {
    setInputValue(value);
    console.log(inputValue);
    // Handle the input change as needed
  };

  const { writeContractAsync: writeVaultManagerAsync } = useScaffoldWriteContract("VaultManager");

  const handleCreateVault = async () => {
    console.log("Creating Vault");
    try {
      await writeVaultManagerAsync(
        {
          functionName: "createVault",
          args: [parseEther(inputValue)],
          value: parseEther(inputValue),
        },
        {
          onBlockConfirmation(txnReceipt) {
            console.log("📦 Transaction blockHash", txnReceipt.blockHash);
          },
        },
      );
      setShowModal(false);
    } catch (error) {
      console.log("Error creating vault", error);
    }
  };

  // const { data: walletClient } = useWalletClient();
  // const { data: vaultContract } = useScaffoldContract({
  //   contractName: "VaultManager",
  //   walletClient,
  // });

  // const setCreateVault = async () => {
  //   await vaultContract?.createVault([parseEther(inputValue)], { value: parseEther(inputValue) });
  // };

  // const openModal = () => {
  //   setCreateVaultModalOpen(true);
  // };

  return (
    <>
      <div key="1" className="py-8 px-4 sm:p-10">
        <header className="flex items-center justify-between pb-10">
          <h1 className="text-3xl font-bold">Pegasus Finance</h1>
          <div className="flex items-center space-x-3"></div>
        </header>
        <section className="rounded-lg shadow p-6 mb-8">
          <h2 className="sr-only" id="stats-title">
            Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-6 mb-6">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Min Coll Ratio</span>
              <span className="font-bold text-lg">105.00 %</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Daily MCR Change</span>
              <span className="font-bold text-lg">0.00 %</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Borrowing Fee</span>
              <span className="font-bold text-lg">5.00 %</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Total Collateral</span>
              <span className="font-bold text-lg">$ 210.98</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Total Debt</span>
              <span className="font-bold text-lg">150.00 pUSD</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="vault-title" className="rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold" id="vault-title">
              Your Vaults
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-black text-white"
            >
              Create Vault
            </button>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              onChange={handleInputChange}
              handleCreateVault={handleCreateVault}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Collateral Ratio</span>
              <span className="font-bold text-lg">140.65 %</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Collateral Value</span>
              <span className="font-bold text-lg">$ 210.98</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Debt</span>
              <span className="font-bold text-lg">150.00 pUSD</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-gray-500">Liquidation at</span>
              <span className="font-bold text-lg">$ 1642.34</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/100 h-10 px-4 py-2 bg-gray-200 text-gray-800">
              Add Collateral
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/100 h-10 px-4 py-2 bg-gray-200 text-gray-800">
              Withdraw Collateral
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/90 h-10 px-4 py-2 bg-gray-200 text-gray-800">
              Mint Debt
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondary/90 h-10 px-4 py-2 bg-gray-200 text-gray-800">
              Return Debt
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
