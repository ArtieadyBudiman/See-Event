

const ButtonSearch = (props) => {
   return(
      <div>
         <button type="button" className="btn" style={props.style}>
            {props.name}
         </button>
      </div>
   )
};

export default ButtonSearch;