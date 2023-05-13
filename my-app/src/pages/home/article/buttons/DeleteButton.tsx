import { TypeNotes, TypeImages } from "../utilities/InterfacesAndTypes";

export const DeleteButton = ({ note_id, data, images, setData, deleteNote, deleteImage }: { note_id: string, data: TypeNotes, images: TypeImages[],setData: (params: any)=>void, deleteNote: (note_id: string)=>void, deleteImage:(image_id:string)=>void}):any => {
    
    // const deleteNotes = async() =>{
        
    //     try {
    //         await fetch((`http://localhost:8000/api/notes/${note_id}`),{
    //             method: "DELETE"
    //         })
    //         .then(()=>{
    //             // const newArray = data.notes.filter((note: TypeNotes)=> note.id !== id);
    //             console.log("newArra")
    //         }) 
    //         // console.log("removed")
    //         // // setData({ [name]: { ...context.state[name], value: newValue } }, callback && callback))
    //         // setData({ ...data, notes: newArray})
    //         // console.log(data.notes)
            
    //         // console.log(notes.filter(note=> note.id !== id))

    //     } catch (error){
    //         console.error(error)
    //     } 
    // }

    return(
        <button 
            className="btn-delete" 
            onClick={()=> {
                if(window.confirm('Chceš vymazať článok?')){
                    deleteNote(note_id)
                    images.map(image=>deleteImage(image.image_id));
                };
            }}   
            >Vymazať
        </button>
    )
}