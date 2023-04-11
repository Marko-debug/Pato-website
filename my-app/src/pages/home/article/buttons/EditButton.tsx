export const EditButton = (props: any):any => {

    return(
        <button 
            className="btn-edit" 
            onClick={()=>{
                // props.showInputs(true);
                props.showInputs(true)
            }}  
            >Upraviť
        </button>
    )
}