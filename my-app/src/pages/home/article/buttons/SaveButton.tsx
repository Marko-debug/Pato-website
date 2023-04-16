import { useEffect } from "react";
import { useApiPost, TApiResponse} from "../../customHook"

export const SaveButton = ({ showInputs, id, title, content }: { showInputs: any, id: string, title: string, content: string}):any => {

    const postData = async() => {
        const body = {title: title, content: content};
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
                postData();
                showInputs(false);
                // getData(); 
            }}  
            >Uložiť
        </button>
    )
}