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

    if (!data.loading) console.log(data);
    
    // const updateTitleValue = (title: string)=>{
        
    // }

    // const updateTextValue = (text: string)=>{

    // }

    return( 
        <Fragment>
            <div className="home-structure">
                <div className="home-structure-container">
                    <Articles 
                        storedArticles={storedArticles} updateStoredArticles={() =>updateStoredArticles()}/>
                    <Guide storedArticles={storedArticles}/>
                </div>
            </div>
        </Fragment>
    )
}
