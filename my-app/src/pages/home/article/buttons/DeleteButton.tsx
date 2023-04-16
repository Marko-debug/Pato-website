import { TypeNotes } from "../utilities/InterfacesAndTypes";

export const DeleteButton = ({ id, data, setData, deleteNote }: { id: string, data: any, setData: (params: any)=>void, deleteNote: (id: any)=>void}):any => {
    
    const deleteNotes = async() =>{
        
        // try {
            await fetch((`http://localhost:8000/api/notes/${id}`),{
                method: "DELETE"
            })
            .then(()=>{
                // const newArray = data.notes.filter((note: TypeNotes)=> note.id !== id);
                console.log("newArra")
            }) 
            // console.log("removed")
            // // setData({ [name]: { ...context.state[name], value: newValue } }, callback && callback))
            // setData({ ...data, notes: newArray})
            // console.log(data.notes)
            
            // console.log(notes.filter(note=> note.id !== id))

        // } catch (error){
        //     console.error(error)
        // } 
    }
    // console.log(id)

    return(
        <button 
            className="btn-delete" 
            onClick={()=> {if(window.confirm('Chceš vymazať článok?')){deleteNote(id)};}}   
            >Vymazať
        </button>
    )
}