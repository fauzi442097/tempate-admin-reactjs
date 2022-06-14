

const CardHeader = ({title, children}) => {
   return (
      <div className="card-header">
         <h4 className="card-title">{title}</h4>
         {children}
      </div>
   )
}

export default CardHeader