// import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import "./Global.scss";
import { RootStoreProvider } from "contexts";
import { toastStyle } from "utils";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
   defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
   <QueryClientProvider client={queryClient}>
      <RootStoreProvider>
         <Toaster position="bottom-center" toastOptions={toastStyle} />
         <Router />
      </RootStoreProvider>
   </QueryClientProvider>,
);
