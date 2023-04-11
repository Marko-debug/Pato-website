import { Component, ReactNode } from 'react';
import { Article} from './article/Article'
import { v4 as uuidv4} from "uuid";
import { ObjectData, TypeNotes} from './article/utilities/InterfacesAndTypes';


interface PropsArticles{
    notes: TypeNotes[];
}

interface StateArticles{
    storedArticle: ObjectData;
    // updateStoredArticles:  () => void
    notes: TypeNotes[];
    // setState: (params: any) => void 
}

// export const Articles = () => {    
export class Articles extends Component<PropsArticles, StateArticles> {

    // constructor(props: PropsArticles){
    //     super(props);
    //     this.state = {
    //         storedArticles: this.props.storedArticles,
    //         updateStoredArticles: this.props.updateStoredArticles,
    //     }
    // }

    state: StateArticles = {
        // createArticle: this.props.createArticle,
        storedArticle: {
            id: uuidv4(), side: "bubble-left", title: {name: 'title', value: ''}, content: {name: 'text', value: ''}, published: 0, show: false 
        },
        notes: this.props.notes,
    }

    componentDidUpdate() {
        // console.log(this.state.storedArticles.length)
        // console.log(this.props.storedArticles.length)
        // Typical usage (don't forget to compare props):
        // if (this.state.storedArticles.length !== this.props.storedArticles.length){
        //     this.setState(this.props)
        //     // console.log(this.state.storedArticles)
        // }
    }

    // updateStoredArticles = (): void => {
    //     // const id = uuidv4();
    //     // const { storedArticle } = this.state;

    //     // this.setState({id: id, side: "bubble-left", title: {name:'title', value: ''}, content: {name: 'text', value: ''} })

    //     // console.log(storedArticle)
    //     console.log("created new article");
    // }

    // id: string,
    // title: string,
    // content: string,    
    // published: string,

    // id: string,
    // side: string,
    // title: {name: string, value: string},
    // content: {name: string, value: string}, 
    // published: string,
    // show: boolean, 

    createArticle = () => {
        const id = uuidv4();
        const { storedArticle } = this.state;
        this.setState({
            storedArticle: {
                ...storedArticle, id: id, show: true 
            }
        });
        console.log(storedArticle)
        console.log("created new article");
    }

    cancelArticle = () => {
        const { storedArticle } = this.state;
        this.setState({
            storedArticle: {
                ...storedArticle, show: false
            }
        })
    }

    render(): ReactNode {
        
        const { storedArticle, notes} = this.state; 
        return(
            <div className="articles">
                <div className="svg-shapes">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 2000" style={{position: "absolute"}}>
                        <circle cx="200" cy="150" r="100" fill="#b3d1ff" stroke="#ffffff" strokeWidth="1"/>
                        <path d="M 0 250 Q 0 500, 160 800 T 400 1000" stroke="black" fill="transparent" strokeDasharray="4"/>
                    </svg>
                </div>
                <div className="article-container">
                    <h1 className="title">Novinky</h1>
                    <div className="create-container">
                        <button className="btn-create" onClick={this.createArticle}>PRIDAŤ NOVINKU</button>
                    </div>
                    <div className="articles-container">
                        { storedArticle.show ? 
                                <Article 
                                key={"postArticle"} 
                                update={false}
                                id={storedArticle.id} 
                                side={storedArticle.side} 
                                title={storedArticle.title} 
                                content={storedArticle.content}
                                published={storedArticle.published} 
                                cancelArticle={this.cancelArticle}/>
                         : null }
                        {notes.map((note: TypeNotes, i: number) => {
                            return(
                                <Article 
                                    key={i} 
                                    update={true}
                                    id={note.id} 
                                    side={"bubble-right"}
                                    title={{name: "title", value: note.title}} 
                                    content={{name: "text", value: note.content}}
                                    published={note.updatedAt}
                                    cancelArticle={this.cancelArticle}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}