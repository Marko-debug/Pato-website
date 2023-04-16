import { useApiPost, TApiResponse} from "../../customHook"


export const UpdateButton = ({ showInputs, id, title, content }: { showInputs: any, id: string, title: string, content: string}):any => {

    const updateData = async() => {
        const body = {title: title, content: content};
        try {
            const response = await fetch('http://localhost:8000/api/notes/' + id, {
                method: 'PATCH',
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
            console.error(error);
        }
    }

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
                updateData();
                showInputs(false)
            }}  
            >Aktualizovať
        </button>
    )
}