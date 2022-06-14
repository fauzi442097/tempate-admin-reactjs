import Footer from "./Footer"
import Header from "./Header/Index"
import Sidebar from "./Sidebar/Index"

import { Outlet } from 'react-router-dom'

const Layouts = () => {
   return (
       <>

         {/* Main wrapper start */}
         <div id="main-wrapper">
            <Header />
            <Sidebar />

            {/* Content */}
               <Outlet />
            {/* End Content */}
          
            <Footer />
         </div>
         {/* Main wrapper end  */}

      </> 
   )
}

export default Layouts