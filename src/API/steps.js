// install axios using npm i axios
// creat file named index.js and add code below with link to get the data from
// -- --- -- -- --- - --- 
// import axios from 'axios'; // we setup this first after install

import PetItem from "../components/PetItem";

// const instance = axios.create({
//   baseURL: 'https://pets-react-query-backend.eapi.joincoded.com',
// });

// instance.interceptors.response.use((response) => {
//   return response.data;
// });

// export default instance;

// -- --- -- -- --- - --- 

// then setting up react query
// install npm install @tanstack/react-query
// we add the clineprovided to our app.js main file we wrap the div

// import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

//  // Create a client
//  const queryClient = new QueryClient()

//  function App() {
//    return (
//      // Provide the client to your App
//      <QueryClientProvider client={queryClient}>
//         // Your Content
//      </QueryClientProvider>
//    )
//  }
// -- --- -- -- --- - --- 

// Creating our first API (GET)
// creat a file for pets
// import the instance form index.js the one we creaated in API
// use function 
// async function getAllPets() {
//     const response = await instance.get('https://pets-react-query-backend.eapi.joincoded.com/pets');
//     return response
//   }

//   async function getOnePet(id) {
//     const response = await instance.get(`https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`);
//     return response
//   }
  // export the   export {getAllPets, getOnePet}

  // ----------------------------------------

// -- --- -- -- --- - --- to show data from API on site

  // now in your file petslist import import { useQuery } from "@tanstack/react-query";
  // import your function from your pets.je getAllPets import { getAllPets } from "../API/pets";
  // add function to get data
//     const { data, isFetching, isSuccess } = useQuery({
//      queryKey: ["listTodo"],
//       queryFn: getTodos
//     });
// the key i were you store your data you can call it what ever u want this is called catch
// then apply filter using

// const petList = data
// ?.filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
// .map((pet) => <PetItem pet={pet} key={pet.id} />);
// dont forget to add the ? to wait for the respomse form the server

// -- --- -- -- --- - --- to show data from API with pet ID
// import { getOnePet } from "../API/pets";
// import { useQuery } from "@tanstack/react-query";
// creat the function
//  const { data, isFetching, isSuccess } = useQuery({
//     queryKey: ["petId"],
//      queryFn: () => getOnePet(id)
//    }); // imortant to add arrow function to avoid start
// anyehrre called the function or name or whateve, we change it to our data or keep it pet and add
// const pet = data;
// dont forget to add ?. to call it correclty and awayt feedback
///// it should be another nammmme for id (petData)


// ----------------------------------------

//////// EXTRA


// to make a button
// modify you Code as following
// add refetch
// and make a button:

// const { data, isFetching, isSuccess, refetch} = useQuery({
//     queryKey: ["petlets"],
//      queryFn: getAllPets,
//      enabled: false, // to stop it until activated
//    });

//    to make a button:
//    <button
//    className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
//   onClick={(refetch)}
//  >
//    Get all pets
//  </button>
 
// ----------------------------------------
// extra information:
// to avoid any erros in fatching the data form base URL
//  we punt all url in main index File
//  and additonail in PetList.js
// async function getAllPets() {
//     const response = await instance.get('/pets');
//     return response
//   }

//   async function getOnePet(id) {
//     const response = await instance.get(`/pets/${id}`);
//     return response
//   }


/// ----------------------------------------------------
// to add a pet
// //  async function addPet(data) {
//     const response = await instance.post(`/pets`,data);
//     return response
//   }
// dont forget to export

// in Modal.js
// import { addPet } from "../API/pets";
// go to the button submit add  onClick={handelSubmit} 
// creat mutation
// const mutation = useMutation({
//   mutationFn: (newPetData) => addPet(newPetData),
// });

// const handleSubmit=()=>{
// mutation.mutate({
//   name: name,
//   type: type,
//   image: image,
//   adopted: available,
// });
// if(mutation.isSuccess){
//   setShowModal(false);
// }
// }; // we removed the if statment to make it work correctly 

/// ---------------------------------------------------------
/// ---------------------------------------------------------
/// ---------------------------------------------------------
// setps for delete:
// draw parent and child Map
// App.JS
// PetList ||
// PetDetail ||




/// ---------------------------------------------------------
//to delte we use useMutation
// to Delete a Pet in pets.js
// async function deletePet(id) {
//   const response = await instance.delete(`/pets/${id}`);
//   return response
// }
// in pet details:

// import { deletePet } from "../API/pets"; in petdetails
// we creat on click and call a fucntion
{/* <button  onClick={handleDelete}
className="w-[70px] border border-black rounded-md  hover:bg-red-400">
  Delete
</button> */}

// add this to mutata the values

// const mutation = useMutation({
//   mutationFn: (id) => deletePet(id),
// });
// const handleDelete =() =>{
//   mutation.mutate(petId);
// }

// and modifiy it
// const PetDetail = ({petId}) => {
//  
//   const { data, isFetching, isSuccess } = useQuery({
//     queryKey: ["petData", petId], // you hve to add petId
//     queryFn: (id) => getOnePet(petId)
//    });
// dont forget to import
// import { useMutation } from "@tanstack/react-query";
// we dont need the hard coded  const petId=180

//then we go to APP.JS fro all of them togther in on place to pass the value
// we go to app.js where are they all togther
// const [seletedPetId, setSelectedPetId]= useState(151) // initial vale of 151
// return (
//   <QueryClientProvider client={queryClient}> 
//     <div className="font-mono">
//       <Navbar />
//       <Home />
//       <PetList setPetId={setSelectedPetId}/>
//       <PetDetail petId={seletedPetId} />
//     </div>
//   </QueryClientProvider>
//
//
// for view
// in PetItem=
// modify button
// <button onClick={handleClick}
//       className=" border border-black px-5 py-1 rounded-md hover:bg-[black] hover:text-white">
//         View
//       </button>
// make function:
//  const handleClick=()=>{
//   setPetId(pet.id);
// };
// and modify props
//const PetItem = ({ pet , setPetId}) => {

// finaly go to petList
//modify the props
// const PetList = ({setPetId}) => {
// then modify the map to show the setPetId
//  const petList = data
// ?.filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
// .map((pet) => <PetItem pet={pet} key={pet.id} setPetId={setPetId} />);