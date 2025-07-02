"use client";
import Navbar from "@/app/components/navbar/top_navbar";
import { store } from "@/app/store";
import { Provider } from "react-redux";

function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* navbar */}
      <Navbar />
      {children}
    </Provider>
  );
}

export default StoreProvider;
