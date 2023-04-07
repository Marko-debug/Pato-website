import { Component, ReactNode } from 'react';
import { Article} from './article/Article'

interface TypeStoredArticles{
    id: string,
    side: string,
    title: {name: string, value: string},
    text: {name: string, value: string},    
}

interface PropsArticles{
    // createArticle: (params: any) => any;
    storedArticles: TypeStoredArticles[];
    updateStoredArticles:  () => void
    
}

interface StateArticles{
    // createArticle: (params: any) => any;
    storedArticles: TypeStoredArticles[];
    updateStoredArticles:  () => void
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
        storedArticles: this.props.storedArticles,
        updateStoredArticles: this.props.updateStoredArticles,
    }

    componentDidUpdate() {
        // console.log(this.state.storedArticles.length)
        // console.log(this.props.storedArticles.length)
        // Typical usage (don't forget to compare props):
        if (this.state.storedArticles.length !== this.props.storedArticles.length){
            this.setState(this.props)
            // console.log(this.state.storedArticles)
        }
      }

    createArticle = () => {
        this.props.updateStoredArticles();
        console.log(this.props.storedArticles)
    }

    render(): ReactNode {
        
        const { storedArticles} = this.state; 
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
                        {storedArticles.map((storedArticle: TypeStoredArticles, i: number) => {
                            return(
                                <Article 
                                    key={i} 
                                    id={storedArticle.id} 
                                    side={storedArticle.side} 
                                    title={storedArticle.title} 
                                    text={storedArticle.text}/> 
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}