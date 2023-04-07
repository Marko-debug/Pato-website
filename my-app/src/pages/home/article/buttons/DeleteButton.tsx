export const DeleteButton = (props: any):any => {

    return(

        <button 
            className="btn-delete" 
            onClick={()=>alert("Si si istý, že chceš vymazať novinku??")}   
            >Vymazať
        </button>
    )
}