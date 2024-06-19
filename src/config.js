import { http, createConfig } from "wagmi";
import { mainnet, sepolia, polygonMumbai, celoAlfajores } from "wagmi/chains";
import { injected } from "wagmi/connectors";
 
export const config = createConfig({
  chains: [mainnet, sepolia, polygonMumbai, celoAlfajores],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygonMumbai.id]: http(),
    [celoAlfajores.id]: http(),
  },
});