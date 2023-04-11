export const CancelButtonPostArticle = ({ cancelArticle }: { cancelArticle: () => void }):any => {

    return(
        <button 
            className="btn-delete" 
            onClick={()=> cancelArticle()}   
            >Zrušiť
        </button>
    )
}

export const CancelButton = (props: any):any => {

    return(
        <button 
            className="btn-delete" 
            onClick={()=> props.showInputs()}   
            >Zrušiť
        </button>
    )
}