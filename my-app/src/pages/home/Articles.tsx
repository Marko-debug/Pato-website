import { Component, ReactNode, Dispatch, SetStateAction } from 'react';
import { Article} from './article/Article'
import { v4 as uuidv4} from "uuid";
import { ObjectData, TypeNotes, TypeImages} from './article/utilities/InterfacesAndTypes';


interface PropsArticles{
    notes:TypeNotes[]
    images: TypeImages[]
    setData: Dispatch<SetStateAction<[]>>;
    setImages: Dispatch<SetStateAction<[]>>;
    deleteNote: (note_id: string) => void;
    deleteImage: (image_id: string) => void;
}

interface StateArticles{
    storedArticle: ObjectData;
    notes: TypeNotes[];
    images: TypeImages[];
}

// export const Articles = () => {    
export class Articles extends Component<PropsArticles, StateArticles> {
    
    constructor(props: PropsArticles){
        super(props);

        this.state = {
            storedArticle: {
                note_id: "", side: "bubble-left", title: {name: 'title', value: ''}, content: {name: 'text', value: ''}, published: 0, images: [], show: false  // images is not need here teoretically but is need in return so it hast to be here
            },
            notes: this.props.notes, 
            images: this.props.images,
        }
    }
    dSide = ""; // this variable is for saving string because of not available changing the state during rendering
    noteImages = [];
 
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
    //     // const id = uuidv4()
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
                ...storedArticle, note_id: id, show: true 
            }
        });
        // console.log(this.state.notes)
        // console.log(this.props.notes)
        // console.log(storedArticle)
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

    determineSide = () => {
        let s = "bubble-right";
        const prev = this.dSide; 
        if (prev === "bubble-right" ){
            // this.setState({side: "bubble-left"});
            s = "bubble-left";
        }
        if (prev === "bubble-left"){
            // this.setState({side: "bubble-right"});
            s = "bubble-right"
        }
        
        this.dSide = s
        // this.setState({ side: s})
        return s;
    }

    sortingImagesToNote = (note_id: string) =>{
        const { images } = this.state;
        const result = images.filter(image => image.noteNoteId === note_id)
        return result;
    }


    render(): ReactNode {
        
        const { storedArticle} = this.state; 
        const { notes } = this.props; 
        const storedArticleNote = {     
            note_id: 'none',
            title: 'none',
            content: 'none',    
            createdAt: 0,
            updatedAt: 0
        }

        // const len = images.length;
        // for (let i = 0; i < len; i++){
        //     notes.find(element => element.id === images[i].noteNodeId)

        //     this.setState({
        //         notes: {
        //             ...notes, images: image 
        //     })
        // }

        return(
            <div className="articles">
                <div className="svg-shapes">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 1100" style={{position: "absolute"}}>
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
                            note_id={storedArticle.note_id} 
                            side={storedArticle.side} 
                            title={storedArticle.title} 
                            content={storedArticle.content}
                            published={storedArticle.published} 
                            images={storedArticle.images}
                            note={storedArticleNote}
                            setData={this.props.setData}
                            deleteNote={this.props.deleteNote}
                            deleteImage={this.props.deleteImage}
                            cancelArticle={this.cancelArticle}/> 
                         : null }
                        {notes.reverse().map((note: TypeNotes, i: number) => {
                            const s = this.determineSide() // it is bacause of different side message
                            const noteImages = this.sortingImagesToNote(note.note_id)
                            return(
                                <Article 
                                    key={i} 
                                    update={true}
                                    note_id={note.note_id} 
                                    side={s}
                                    title={{name: "title", value: note.title}} 
                                    content={{name: "text", value: note.content}}
                                    published={note.updatedAt}
                                    images={noteImages}
                                    note={note}
                                    setData={this.props.setData}
                                    deleteNote={this.props.deleteNote}
                                    deleteImage={this.props.deleteImage}
                                    cancelArticle={this.cancelArticle}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}