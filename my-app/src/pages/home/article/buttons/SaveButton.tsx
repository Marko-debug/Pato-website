import { useEffect, Component} from "react"
import { useApiPost, TApiResponse} from "../../customHook"
import { TypeImages } from "../utilities/InterfacesAndTypes"

export const SaveButton = ({ showInputs, note_id , title, content, images }: { showInputs: any, note_id: string, title: string, content: string, images: TypeImages[]}):any => {

    const postDataNotes = async() => {
        const body = {note_id: note_id ,title: title, content: content};
        console.log(note_id)
        try {
            const response = await fetch('http://localhost:8000/api/notes', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${authToken}`,
                }
            })
            window.location.assign('/');

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error)
        }
        // useApiPost('http://localhost:8000/api/notes', jsonData)
    }

    const postDataImages = async(image_id: string, url: string) => {
        const body = {image_id: image_id, noteNoteId: note_id, url: url};
        console.log(image_id, note_id, url)
        try {
            const response = await fetch('http://localhost:8000/api/images', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${authToken}`,
                }
            })
            window.location.assign('/');

            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error)
        }
        // useApiPost('http://localhost:8000/api/notes', jsonData)
    }

    // useEffect(()=>{
        // const getData = async() => {
        //     try {
        //         const response = await fetch('http://localhost:8000/api/notes', {
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 // 'Authorization': `Bearer ${authToken}`,
        //             }
        //         })
        //         const json = await response.json();
        //         console.log(json);
        //         setData()
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }

        // getData()
    // }, [])

    // function update(){
    //     fetch("http://localhost:8000/api/notes/"+ id, {
    //       method: 'PATCH',
    //       body: JSON.stringify({
    //        "title": title,
    //        "content": text
    //       })
    //     }).then((response) => {
    //       response.json().then((response) => {
    //         console.log(response);
    //       })
    //     }).catch(err => {
    //       console.error(err)
    //     })
    // }

    return(

        <button 
            className="btn-save" 
            onClick={()=> {
                postDataNotes();
                images.map(image=>postDataImages(image.image_id, image.url));
                showInputs(false);
                // getData(); 
            }}  
            >Uložiť
        </button>
    )
}