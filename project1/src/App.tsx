import React from "react";

import { Navbar } from "./components/navbar";
import Header from "./components/header";
import Prices from "./components/prices";
import Footer from "./components/footer";
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from "react-query-devtools";

const queryClient = new QueryClient()

function App() {

 
  return (
    <>
    <QueryClientProvider client={queryClient}>

      <Navbar/>
      <Header/>
      <Prices/>
      <Footer/>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
    </>
  );
}

export default App;
