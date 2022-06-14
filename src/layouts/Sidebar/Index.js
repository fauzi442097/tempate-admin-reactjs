import SidebarMenu from "./SidebarMenu"

const Sidebar = () => {
   return (
      <div className="dlabnav">
         <div className="dlabnav-scroll">
            <ul className="metismenu" id="menu">
               <SidebarMenu />
            </ul>
            <div className="copyright">
               <p><strong>Dompet Payment Admin Dashboard</strong> © 2022 All Rights Reserved</p>
               <p className="fs-12">Made with <span className="heart"></span> by DexignLab</p>
            </div>
         </div>
      </div>
   )
}

export default Sidebar