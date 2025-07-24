import "./App.css";
import { ReclaimProofRequest } from "@reclaimprotocol/js-sdk";
import { useState, useEffect } from "react";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QRCode from "react-qr-code";
import VerifyProof from "./verify-proof";
import { Account } from "./account";
import { WalletOptions } from "./wallet-options";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

function App() {
  const [ready, setReady] = useState(false);
  const [proof, setProof] = useState({});
  const [reclaimProofRequest, setReclaimProofRequest] = useState(null);
  const [requestUrl, setRequestUrl] = useState("");
  const [statusUrl, setStatusUrl] = useState("");

  useEffect(() => {
    async function initializeReclaim() {
      // Your credentials from the Reclaim Developer Portal
    // Replace these with your actual credentials
    const APP_ID = '0x4c8e08f2B5AeD9504C888A327BaaCd6Ea617e18B'
    const APP_SECRET =
      '0x65507a8cf531019090e334630e74655168a7cbed6a95cc2c285a4d5653f8f7b4'
    const PROVIDER_ID = 'c94476a0-8a75-4563-b70a-bf6124d7c59b'


      const proofRequest = await ReclaimProofRequest.init(
        APP_ID,
        APP_SECRET,
        PROVIDER_ID
      );
      setReclaimProofRequest(proofRequest);
    }

    initializeReclaim();
  }, []);

  async function generateVerificationRequest() {
    if (!reclaimProofRequest) {
      console.error("Reclaim Proof Request not initialized");
      return;
    }

    reclaimProofRequest.addContext(
      `user's address`,
      "for acmecorp.com on 1st january"
    );

    const url = await reclaimProofRequest.getRequestUrl();
    setRequestUrl(url);
    const status = reclaimProofRequest.getStatusUrl();
    setStatusUrl(status);

    await reclaimProofRequest.startSession({
      onSuccess: (proof) => {
        console.log("Verification success", proof);
        setReady(true);
        setProof(proof);
        // Your business logic here
      },
      onFailure: (error) => {
        console.error("Verification failed", error);
        // Your business logic here to handle the error
      },
    });
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <ConnectWallet />
          {!requestUrl && (
            <button onClick={generateVerificationRequest}>
              Create Claim QrCode
            </button>
          )}
          {requestUrl && <QRCode value={requestUrl} />}
          {ready && <VerifyProof proof={proof}></VerifyProof>}
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
