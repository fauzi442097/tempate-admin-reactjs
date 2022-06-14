const DataTable = ({data, index}) => {
   return (
       <tr>
         <td><strong>{++index}</strong></td>
         <td>{data.title}</td>
         <td>
            <div className="d-flex">
               <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt"></i></a>
               <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash"></i></a>
            </div>
         </td>
      </tr>
   )
}

export default DataTable;