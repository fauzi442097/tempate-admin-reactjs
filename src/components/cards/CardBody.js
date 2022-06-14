const CardBody = ({cls, children}) => {
   return (
      <div className={"card-body " + cls}>
         {children}
      </div> 
   )
}

CardBody.defaultProps = {
   cls : ''
}

export default CardBody