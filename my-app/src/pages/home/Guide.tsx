import React, { Component } from "react"

interface TypeStoredArticles{
    id: string,
    side: string,
    title: {name: string, value: string},
    text: {name: string, value: string},    
}

type TypeNotes = {
    id: string,
    title: string,
    content: string,    
}

interface PropsGuide{
    // createArticle: (params: any) => any;
    notes: TypeNotes[];
}

interface StateGuide{
    notes: TypeNotes[];
}

export class Guide extends Component<PropsGuide, StateGuide>{
    
    state:StateGuide = {
        notes: this.props.notes,  // i dont know but notes has not the same value as this.props.notes
    }

    // componentDidUpdate() {
    //     // console.log(this.state.storedArticles.length)
    //     // console.log(this.props.storedArticles.length)
    //     // Typical usage (don't forget to compare props):
    //     if (this.state.storedArticles.length !== this.props.storedArticles.length){
    //         this.setState(this.props)
    //         // console.log(this.state.storedArticles)
    //     }
    //   }

    

    

    render(): React.ReactNode {
        
        return(
            <aside className="guides">
                <div className="guides-container">
                    <h1 className="title-list">List</h1>
                    <input className="search-input" type="text" placeholder="Vyhľadať"></input>
        
                    <div className="guides-headers">
                        <div>
                            <div>
                                {/* {storedArticles.map((storedArticle, i) =>{
                                    return(
                                        <p key={i}>
                                            {storedArticle.title.value}
                                        </p>
                                    )
                                })} */}
                                <ul>
                                {this.props.notes.reverse().map((note, i) =>{
                                    return(
                                            <li key={i}><a  
                                                href={`#${note.id}`}>
                                                {note.title}
                                            </a></li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

