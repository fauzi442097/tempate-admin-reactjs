import Breadcrumb from "../../components/Breadcrumb"
import Card from "../../components/cards/Card"
import CardBody from "../../components/cards/CardBody"
import CardHeader from "../../components/cards/CardHeader"
import Table from "./Table"

import React, { useState, useEffect } from "react"
import { getRequest } from "../../config/axiosClient"

import { motion } from 'framer-motion'

const Todolist = () => {

   const [books, setBook] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {

      const fetchBooks = async () => {
         try {
           let response = await getRequest("books?page=1");
            console.log(response);
            
            let data = response.data;
            setLoading(false);
            setBook(data.results);
         } catch (error) {
            // Not in 200 response range
            setLoading(false);
           console.log(error);
         }
      }

      fetchBooks();

      // cara ke 2
      // getRequest("books?page1")
      //    .then((response) => {
      //       console.log(response);
      //    })
      //    .catch((error) => {
      //       console.log(error);
      //    })
      
   }, []);
   
   const handleDelete = (id) => {

   }

   const handleStore = () => {

   }

   const handleShowModal = (type) => {
      alert(type);
   }

   return (
     <motion.div
       className="content-body"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opactity: 0 }}
     >
       <div className="container-fluid">
         <Breadcrumb menu="Todolist" subMenu="Index" />
         <div className="row">
           <div className="col-lg-12">
             <Card>
               <CardHeader title="Todolist">
                 <button
                   className="btn btn-primary btn-rounded btn-sm"
                   onClick={() => handleShowModal("insert")}
                 >
                   {" "}
                   Add{" "}
                 </button>
               </CardHeader>
               <CardBody>
                 <div className="table-responsive">
                   <Table
                     name="dt-table"
                     data={books}
                     isLoading={loading}
                   ></Table>
                 </div>
               </CardBody>
             </Card>
           </div>
         </div>
       </div>
     </motion.div>
   );
} 

export default Todolist