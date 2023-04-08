export const DeleteButton = ({ id }: { id: string }):any => {
    
    const deleteNote = async() =>{
        try {
            await fetch('http://localhost:8000/api/notes/' + id, {
                method: 'DELETE',
            })
            .then(() => console.log('removed'))
        } catch (error){
            console.error(error)
        } 
    }

    return(
        
        <button 
            className="btn-delete" 
            onClick={()=> deleteNote()}   
            // onClick={()=> console.log(id)}   
            >Vymazať
        </button>
    )
}