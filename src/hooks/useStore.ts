import { RootStoreContext } from "contexts";
import { useContext } from "react";

export const useStore = () => {
   const context = useContext(RootStoreContext);
   if (context === null) {
      throw new Error(
         "You have forgotten to wrap your root component with RootStoreProvider",
      );
   }
   return context;
};
