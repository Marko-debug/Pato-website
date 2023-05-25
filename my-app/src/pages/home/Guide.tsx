import React, { Component, Dispatch, SetStateAction } from 'react';
import { TypeNotes } from './article/utilities/InterfacesAndTypes'

// type TypeList = {
//     notes_id: string
//     title: string,
//     content: string,    
// }

interface PropsGuide{
    // createArticle: (params: any) => any;
    notes: TypeNotes[];
}

interface StateGuide{
    notes: TypeNotes[];
    name: string,
}

export class Guide extends Component<PropsGuide, StateGuide>{
    
    constructor(props: PropsGuide){
        super(props);

        this.state = {
            notes: this.props.notes,  // i dont know but notes has not the same value as this.props.notes, i think that, it load this component and send props from parent without data and then in parent will obain data from database but it does not load this child component again
            name: '',
        }
    }

    // componentDidUpdate() {
        
    //   }
    
    // filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const keyword = e.target.value;

    //     if (keyword !== ''){
    //         const results = this.props.noteTitles.filter((note)=>{
    //             return note.title.toLowerCase().startsWith(keyword.toLowerCase());
    //         })
    //         this.setState({ notes: results });
    //     }else{
    //         this.setState({ notes: this.props.noteTitles });
    //     }
    //     this.setState({ name: keyword });
    // }

    filter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;

        if (keyword !== ''){
            const results = this.props.notes.filter((note)=>{
                return note.title.toLowerCase().startsWith(keyword.toLowerCase());
            })
            this.setState({ notes: results });
        }else{
            this.setState({ notes: this.props.notes });
        }
        this.setState({ name: keyword });
    }

    render(): React.ReactNode {
        const { name, notes } = this.state; // the main problem why is not rendering titles is beacause of this.state.notes does not get data from props on first render
        console.log(this.state.notes)
        
        return(
            <aside className="guides">
                <div className="guides-container">
                    <h1 className="title-list">List</h1>
                    <input className="search-input" type="search" value={name} onChange={this.filter} placeholder="Vyhľadať"></input>
        
                    <div className="guides-headers">
                        <div className="guides-before-nav">
                            <nav className="guides-nav">
                                
                                <ul>
                                    {notes && notes.length > 0 ? (
                                            notes.reverse().map((note: TypeNotes, i: number)=>(
                                                <li key={i}>
                                                    <a  
                                                    href={`#${note.note_id}`}>
                                                    {note.title}
                                                    </a>
                                                </li>
                                            ))
                                        )
                                        :null
                                    }

                                {/* {this.props.notes.reverse().map((note: TypeNotes, i: number) =>{
                                    return(
                                            <li key={i}><a  
                                                href={`#${note.note_id}`}>
                                                {note.title}
                                            </a></li>
                                    )
                                })} */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

