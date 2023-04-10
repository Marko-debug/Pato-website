export const CancelButton = ({ cancelArticle }: { cancelArticle: () => void }):any => {

    return(
        
        <button 
            className="btn-delete" 
            onClick={()=> cancelArticle()}   
            >Zrušiť
        </button>
    )
}