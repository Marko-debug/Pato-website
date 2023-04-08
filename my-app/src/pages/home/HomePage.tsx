import { useEffect, useState} from 'react';
import '../../style/home/homePage.css'
import '../../style/home/article.css'
import '../../style/home/guide.css'
import { Fragment } from 'react';
import { Articles } from './Articles';
import { Guide } from './Guide';
import { v4 } from "uuid";
import { useApiGet, TApiResponse } from './customHook';
const id = v4();

interface NewsData{
    id: string,
    side: string,
    title: {name: string, value: string},
    text: {name: string, value: string},    
}

export const HomePage = () => {
    const [storedArticles, setStoredArticles] = useState<NewsData[]>([{id: id, side: "bubble-left", title: {name: 'title', value: 'Spýtaj sa o cirkvi'}, text: {name: 'text' ,value:''} }]);

    const updateStoredArticles = (): void => {
        const id = v4();

        const length = storedArticles.length - 1;
        if(storedArticles[length].side === 'bubble-right'){
            setStoredArticles(prevArticles => [...prevArticles, {id: id, side: "bubble-left", title: {name:'title', value: ''}, text: {name: 'text', value: ''} }])
        }
        else{
            setStoredArticles(prevArticles => [...prevArticles, {id: id, side: "bubble-right", title: {name:'title', value: ''}, text: {name: 'text', value: ''} }])
        }

        // console.log(storedArticles)
        console.log("created new article");
    }

    const data: TApiResponse = useApiGet(
        'http://localhost:8000/api/notes'
      );
    // console.log(data.loading)
    // if(!data.loading) console.log(data.loading)
    // if (!data.loading && data.data !== undefined) console.log(data.data.notes);
    
    // const updateTitleValue = (title: string)=>{
        
    // }

    // const updateTextValue = (text: string)=>{

    // }

    return( 
        <Fragment>
            <div className="home-structure">
                <div className="home-structure-container">
                    { data.data !== undefined? 
                        <>
                            <Articles
                                storedArticles={storedArticles} updateStoredArticles={() => updateStoredArticles()} notes={data.data.notes} />
                            <Guide storedArticles={storedArticles} notes={data.data.notes} />
                        </> : 
                        <div className="loading"> Loading... </div> }
                </div>
            </div>
        </Fragment>
    )
}