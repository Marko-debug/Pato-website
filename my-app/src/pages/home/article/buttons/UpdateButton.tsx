import { useApiPost, TApiResponse} from "../../customHook"


export const UpdateButton = ({ showInputs, id, title, content }: { showInputs: any, id: string, title: string, content: string}):any => {



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
            className="btn-update" 
            onClick={()=> {
                showInputs(false)
            }}  
            >Aktualizovať
        </button>
    )
}