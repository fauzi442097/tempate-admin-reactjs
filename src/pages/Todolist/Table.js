import DataTable from "./DataTable";

const Table = ({data, name, cls, isLoading}) => {
   return (
      <table className={"table table-responsive-md " + cls } id={name}>
         <thead>
               <tr>
                  <th><strong>NO.</strong></th>
                  <th><strong>BOOK NAME</strong></th>
                  <th><strong>ACTION</strong></th>
               </tr>
            </thead>
            <tbody>
            {
               isLoading ?
                  ( 
                     <tr>
                        <td colSpan={3} align="center"> Loading ... </td>
                     </tr>
                  )   
                  : (
                     data.map( (item, index) => (
                        <DataTable data={item} index={index} key={index} />
                     ))
                  )
                  
               }
            </tbody>
      </table>
   )
}

Table.defaultProps = {
   data : null,
   cls : '',
   name : 'table-data'
}

export default Table;