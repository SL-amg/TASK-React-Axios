import { useState } from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // we import the files

const queryClient = new QueryClient() // we creat the queeryclinet

//we wrap our div with QueryClient provider

function App() {
  const [seletedPetId, setSelectedPetId]= useState(151) // initial vale of 151
  return (
    <QueryClientProvider client={queryClient}> 
      <div className="font-mono">
        <Navbar />
        <Home />
        <PetList setPetId={setSelectedPetId}/>
        <PetDetail petId={seletedPetId} />
      </div>
    </QueryClientProvider>


  );
}

export default App;
