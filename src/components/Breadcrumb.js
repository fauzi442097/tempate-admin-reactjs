const Breadcrumb = ( {menu, subMenu}) => {
   return (
      <div className="row page-titles">
         <ol className="breadcrumb">
            <li className="breadcrumb-item active"><a href="#">{menu}</a></li>
            <li className="breadcrumb-item"><a href="#">{subMenu}</a></li>
         </ol>
      </div>
   )
}

export default Breadcrumb