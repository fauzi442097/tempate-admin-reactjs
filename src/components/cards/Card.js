const Card = ({cls, children}) => {
   return (
      <div className={"card " + cls}>
         {children}
      </div>
   )
}

Card.defaultProps = {
   cls : ''
}

export default Card;