import './App.css'
import { Reclaim } from '@reclaimprotocol/js-sdk'
import { useState } from 'react'
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QRCode from "react-qr-code";
import VerifyProof from "./VerifyProof";

const queryClient = new QueryClient();

function App() {
  const [url, setUrl] = useState('')
  const [ready, setReady] = useState(true);
  const [proof, setProof] = useState({
    "identifier": "0x9ec8f9f52623234433ce5ea0cc0f5aac0dfbeef553e68d2d403633bd9192e365",
    "claimData": {
      "provider": "http",
      "parameters": "{\"body\":\"\",\"geoLocation\":\"in\",\"method\":\"GET\",\"paramValues\":{\"CLAIM_DATA\":\"76561199614512180\"},\"responseMatches\":[{\"type\":\"contains\",\"value\":\"_steamid\\\">Steam ID: {{CLAIM_DATA}}</div>\"}],\"responseRedactions\":[{\"jsonPath\":\"\",\"regex\":\"_steamid\\\">Steam ID: (.*)</div>\",\"xPath\":\"id(\\\"responsive_page_template_content\\\")/div[@class=\\\"page_header_ctn\\\"]/div[@class=\\\"page_content\\\"]/div[@class=\\\"youraccount_steamid\\\"]\"}],\"url\":\"https://store.steampowered.com/account/\"}",
      "owner": "0xa1b6e6ffb85df5bdf78e6558d3224ab87f7cc4c7",
      "timestampS": 1717053708,
      "context": "{\"contextAddress\":\"user's address\",\"contextMessage\":\"for acmecorp.com on 1st january\",\"extractedParameters\":{\"CLAIM_DATA\":\"76561199614512180\"},\"providerHash\":\"0x5f5312e27124dc7605f70a7d884e169049679b93f91c137b4d18a8569d825900\"}",
      "identifier": "0x9ec8f9f52623234433ce5ea0cc0f5aac0dfbeef553e68d2d403633bd9192e365",
      "epoch": 1
    },
    "signatures": [
      "0xcbad077154cc5c8e494576d4336f57972f7412058c1a637e05832c6bdabd018f4da18ad973f29553921d7d030370032addac1159146b77ec6cc5dab4133ffec01c"
    ],
    "witnesses": [
      {
        "id": "0x244897572368eadf65bfbc5aec98d8e5443a9072",
        "url": "https://reclaim-node.questbook.app"
      }
    ]
  });

  const APP_ID = "0x408edDD2dF298C2F5df1E2eDE2eBF1278A96Ee45" //TODO: replace with your applicationId
  const reclaimClient = new Reclaim.ProofRequest(APP_ID)

  async function generateVerificationRequest() {
    const providerId = "1bba104c-f7e3-4b58-8b42-f8c0346cdeab" //TODO: replace with your provider ids you had selected while creating the application

    reclaimClient.addContext(
      (`user's address`),
      ('for acmecorp.com on 1st january')
    )

    await reclaimClient.buildProofRequest(providerId)

    reclaimClient.setSignature(
      await reclaimClient.generateSignature( // this is an MVP, you should not generate the signature on the frontend
        "0x5bdaf747ad9333898a0d9cb613f499d0b00164d7b8230628cf7ffa30fd323372" //TODO : replace with your APP_SECRET
      )
    )

    const { requestUrl, statusUrl } =
      await reclaimClient.createVerificationRequest()

    setUrl(requestUrl)

    await reclaimClient.startSession({
      onSuccessCallback: proofs => {
        console.log('Verification success', proofs)
        setReady(true);
        setProof(proofs[0]);
        // Your business logic here
      },
      onFailureCallback: error => {
        console.error('Verification failed', error)
        // Your business logic here to handle the error
      }
    })
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          {!url && (
            <button onClick={generateVerificationRequest}>
              Create Claim QrCode
            </button>
          )}
          {url && (
            <QRCode value={url} />
          )}
          {ready && <VerifyProof proof={proof}></VerifyProof>}
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App