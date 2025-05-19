import { useState, useEffect } from "react";
import { writeContract } from "@wagmi/core";
import { abi } from "./abi";
import { config } from "./config";
import { transformForOnchain } from "@reclaimprotocol/js-sdk";

export default function VerifyProof(props) {
  const [proof, setProof] = useState({});
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const newProof = transformForOnchain(props.proof);
    setProof(newProof);
  }, []);

  return (
    <div>
      <button
        className="button"
        onClick={async () => {
          console.log(proof);
          const hash = await writeContract(config, {
            abi: abi,
            address: "0x8CDc031d5B7F148ab0435028B16c682c469CEfC3", //TODO : This is Base mainnet contract, replace with your contract's address
            functionName: "verifyProof",
            chainId: 8453, //TODO : This is Base Sepolia chain id, replace with your chain id
            args: [proof],
          });
          if (hash) {
            setVerified(true);
          }
        }}
      >
        Verify Proof
      </button>
      {verified && <p> Proof verified </p>}
      <style jsx="true">{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .button {
          border: solid 1px #ccc;
          margin: 0 0 20px;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
