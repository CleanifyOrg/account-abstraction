import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import type { WalletConnectOptions } from "@vechain/dapp-kit";
import "@vechain/dapp-kit-ui";
import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { persister, queryClient } from "./utils/queryClient.ts";
import { getConfig } from "@repo/config";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const config = getConfig(import.meta.env.VITE_APP_ENV);

const walletConnectOptions: WalletConnectOptions = {
  projectId: "a0b855ceaf109dbc8426479a4c3d38d8",
  metadata: {
    name: "VeChain Smart Account Factory",
    description: "Check your smart account on VeChain",
    url: window.location.origin,
    icons: [`${window.location.origin}/assets/logo.png`],
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ChakraProvider>
        <DAppKitProvider
          usePersistence
          //   themeMode={isDark ? "DARK" : "LIGHT"}
          themeMode="LIGHT"
          requireCertificate={false}
          genesis={config.network.genesis}
          nodeUrl={config.nodeUrl}
          logLevel={"WARN"}
          walletConnectOptions={walletConnectOptions}
        >
          <App />
        </DAppKitProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  </React.StrictMode>
);
