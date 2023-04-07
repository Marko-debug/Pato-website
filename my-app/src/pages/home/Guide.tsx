import React, { Component } from "react"

interface TypeStoredArticles{
    id: string,
    side: string,
    title: {name: string, value: string},
    text: {name: string, value: string},    
}

interface PropsGuide{
    // createArticle: (params: any) => any;
    storedArticles: TypeStoredArticles[];
    
}

interface StateGuide{
    storedArticles: TypeStoredArticles[];
}

export class Guide extends Component<PropsGuide, StateGuide>{
    
    state:StateGuide = {
        storedArticles: this.props.storedArticles,
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
        
        const {storedArticles} = this.state;
        return(
            <div className="guides">
                <h1 className="title-list">List</h1>
                <input className="search-input" type="text" placeholder="Vyhľadať"></input>
    
                <div className="guides-headers">
                    {storedArticles.map((storedArticle, i) =>{
                        return(
                            <p key={i}>
                                {storedArticle.title.value}
                            </p>
                        )
                    })}
                    {/* <p>
                        What is Lorem Ipsum?
                    </p>
                    <p>
                        What is Lorem Ipsum?
                    </p>
                    <p>
                        What is Lorem Ipsum?
                    </p>
                    <p>
                        What is Lorem Ipsum?
                    </p>
                    <p>
                        What is Lorem Ipsum?
                    </p> */}
                </div>
            </div>
        )
    }
}