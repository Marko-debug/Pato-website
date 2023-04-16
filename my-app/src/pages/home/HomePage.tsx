import { useEffect, useState} from 'react';
import '../../style/home/homePage.css'
import '../../style/home/article.css'
import '../../style/home/guide.css'
import { Fragment } from 'react';
import { Articles } from './Articles';
import { Guide } from './Guide';
// import { v4 } from "uuid";
import { useApiGet, TApiResponse } from './customHook';
import { json } from 'stream/consumers';
import { TypeNotes } from './article/utilities/InterfacesAndTypes';
// const id = v4();

interface NewsData{
    id: string,
    side: string,
    title: {name: string, value: string},
    text: {name: string, value: string},    
}

type ResponseGetData = {
    notes: any;
    result: number;
    status: string;
    Promise: void;
}

export const HomePage = () => {
    // const [data, setData] = useState<TApiResponse>({status: 200, statusText: "OK", loading: false, error: undefined, data: {notes: []} });
    const [data, setData] = useState<any>({notes: [], results: 0, status: '' });

    // const [storedArticles, setStoredArticles] = useState<NewsData[]>([{id: id, side: "bubble-left", title: {name: 'title', value: 'Vlož nadpis ...'}, text: {name: 'text' ,value:'Vlož obsah ...'} }]);

    // const updateStoredArticles = (): void => {
    //     // const id = v4();

    //     // const length = storedArticles.length - 1;
    //     // if(storedArticles[length].side === 'bubble-right'){
    //     //     setStoredArticles(prevArticles => [...prevArticles, {id: id, side: "bubble-left", title: {name:'title', value: ''}, content: {name: 'text', value: ''} }])
    //     // }
    //     // else{
    //     //     setStoredArticles(prevArticles => [...prevArticles, {id: id, side: "bubble-right", title: {name:'title', value: ''}, content: {name: 'text', value: ''} }])
    //     // }

    //     // console.log(storedArticles)
    //     console.log("created new article");
    // }

    // const data: TApiResponse = useApiGet(
    //     'http://localhost:8000/api/notes'
    //   );

    const deleteNote = (id: string) =>{
        console.log("removed by funciton in homePage")
        try {
            fetch(`http://localhost:8000/api/notes/${id}`, { //async/await is not working and i have not figure out, why not
                method: 'DELETE',
            })
            // .then(response =>
            //     response.json().then(json => {
            //       return json;
            //     })
            // );
            // .then(()=>console.log('neviem') )

            const newArray = data.notes.filter((note: TypeNotes)=> note.id !== id);
            setData({ ...data, notes: newArray})
            console.log("removed")
        } catch (error){
            console.error(error)
        } 
    }

    useEffect(()=>{
        const getData = async()=>{
            try{
                const response = await fetch("http://localhost:8000/api/notes");
                const jsonData = await response.json();
                // console.log(jsonData);
                setData(jsonData);
            } catch (error) {
                console.error(error)
                }
        }
        getData();
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const response = await fetch(`http://localhost:8000/api/notes`);
    //       const newData = await response.json();
    //       console.log(newData);
    //     };
      
    //     fetchData();
    //   });
      
    
    // const response: TApiResponse  = useApiGet('http://localhost:8000/api/notes')

    // let response: any = getData();
    // setData(response)
    // console.log(data)
    // console.log(loading)
    // console.log(error)

    // const refreshData = () => {
    //     // response = getData();
    // }

    // useEffect(() => {
    //     if (error) {
    //         console.log(error);
    //     }
    // }, [error]);

    // useEffect(() => {
    //     if (loading) {
    //         console.log("načítavanie článkov ...");
    //     }
    // }, [loading]);
    console.log(data.notes)

    return( 
        <Fragment>
            <div className="home-structure">
                <div className="home-structure-container">
                    { data !== undefined? 
                        <>
                            <Articles data={data} setData={setData} deleteNote={deleteNote}/>
                            <Guide notes={data.notes} />
                        </> : 
                        <div className="loading"> Načítavanie ... </div> }
                </div>
            </div>
        </Fragment>
    )
}
