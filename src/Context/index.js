import { createContext, useState, useEffect } from "react";
import { Platform } from "react-native";
import notifee from "@notifee/react-native";
import {URL} from "../Url"
import axios from "axios";

export const GlobalContext = createContext();

function GlobalState({ children }) {
  const [Name, setName] = useState("");

  const [Passowrd, setPassowrd] = useState("");

  const [ComfirmPass, setComfirmPass] = useState("");

  const [BranchOffice, setBranchOffice] = useState("");

  const [products, setProducts] = useState([])

  const [invoices, setInvoices] = useState([])

  const [refreash, setRefreash] = useState("")

  const [EditQty, setEditQty] = useState("")

  const [Branch, setBranch] = useState([]) 


  const [ProBranchs, setProBranchs] = useState("")

  const fetchBranchs = async () => {
    try {
      const response = await axios.get(`${URL}/api/branch`);
      // Reverse the products array
      // const Branches = response.data.reverse();
      const Branches = await response.data;

      
       setBranch(
        Branches.map((item) => ({
          label: item.BranchName,
          value: item.BranchName,
        }))
      )

        console.log("Branch",Branch)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
  
    fetchBranchs()
  }, [])
  useEffect(() => {
    console.log("Updated Branch State:", Branch);
  }, [Branch]);

  return (
    <GlobalContext.Provider
      value={{
        Name,
        setName,
        BranchOffice, 
        setBranchOffice,
        Passowrd,
        setPassowrd,
        ComfirmPass,
        setComfirmPass,
        products, 
        setProducts,
        refreash, 
        setRefreash,
        EditQty, 
        setEditQty,
        ProBranchs, 
        setProBranchs,
        Branch, 
        setBranch,
        invoices, 
        setInvoices
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
