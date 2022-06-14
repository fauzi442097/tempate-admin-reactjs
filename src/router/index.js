import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Layouts from "../layouts/Index"
import Dashboard from "../pages/Dashboard"
import Todolist from "../pages/Todolist/Index"

import { AnimatePresence } from 'framer-motion'


const Router = () => {
   return (
      <BrowserRouter>
         <AnimatePresence>
            <Routes>
               <Route path="/" element={<Layouts />}>
                  <Route index element={<Dashboard />} />
                  <Route path="todolist" element={<Todolist />} />
                  <Route path="*" element={<h1> Halaman tidak ditemukan </h1>} />
               </Route>
            </Routes>
         </AnimatePresence>
      </BrowserRouter>
   )
}

export default Router