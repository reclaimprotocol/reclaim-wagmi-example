import { http, createConfig } from "wagmi";
import { mainnet, sepolia, polygonMumbai, celoAlfajores, polygonAmoy, redbellyTestnet, optimism, optimismSepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
    chains: [mainnet, sepolia, polygonMumbai, celoAlfajores, polygonAmoy, redbellyTestnet, optimism, optimismSepolia],
    connectors: [injected()],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [polygonMumbai.id]: http(),
        [celoAlfajores.id]: http(),
        [polygonAmoy.id]: http(),
        [redbellyTestnet.id]: http(),
        [optimism.id]: http("https://optimism.llamarpc.com"),
        [optimismSepolia.id]: http(),
    },
});

export const PROOF = {
  "identifier": "0x1d50794efd618226678a1791ff0a62ebce951543e2715b57a4371870f1e21364",
  "claimData": {
      "provider": "http",
      "parameters": "{\"body\":\"\",\"geoLocation\":\"in\",\"method\":\"GET\",\"paramValues\":{\"CLAIM_DATA\":\"76561199614512180\"},\"responseMatches\":[{\"type\":\"contains\",\"value\":\"_steamid\\\">Steam ID: {{CLAIM_DATA}}</div>\"}],\"responseRedactions\":[{\"jsonPath\":\"\",\"regex\":\"_steamid\\\">Steam\\\\ ID:\\\\ (.*)</div>\",\"xPath\":\"id(\\\"responsive_page_template_content\\\")/div[@class=\\\"page_header_ctn\\\"]/div[@class=\\\"page_content\\\"]/div[@class=\\\"youraccount_steamid\\\"]\"}],\"url\":\"https://store.steampowered.com/account/\"}",
      "owner": "0x8e87e3605b15a028188fde5f4ce03e87d55a2b4f",
      "timestampS": 1724909052,
      "context": "{\"contextAddress\":\"user's address\",\"contextMessage\":\"for acmecorp.com on 1st january\",\"extractedParameters\":{\"CLAIM_DATA\":\"76561199614512180\"},\"providerHash\":\"0x61433e76ff18460b8307a7e4236422ac66c510f0f9faff2892635c12b7c1076e\"}",
      "identifier": "0x1d50794efd618226678a1791ff0a62ebce951543e2715b57a4371870f1e21364",
      "epoch": 1
  },
  "signatures": [
      "0x4a2441b35b1457e4c314dc20f727e59bb72d0679cca3699b5c1988777d6700114167bff4bd8d40bcf755b7f75704517f6c261db7118d8e17269f5bd10a208f221c"
  ],
  "witnesses": [
      {
          "id": "0x244897572368eadf65bfbc5aec98d8e5443a9072",
          "url": "wss://witness.reclaimprotocol.org/ws"
      }
  ],
  "publicData": null
}
