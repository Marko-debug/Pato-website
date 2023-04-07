
export const SaveButton = (props: any):any => {

    return(

        <button 
            className="btn-save" 
            onClick={()=>props.showInputs(false)}  
            >Uložiť
        </button>
    )
}