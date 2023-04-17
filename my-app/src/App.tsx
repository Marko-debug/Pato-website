import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"

import NavBar from './components/NavBar';
import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { ContactPage } from "./pages/contact/ContactPage";
import LogIn from "./components/login/LogIn";
import { Footer } from './pages/home/Footer';

class App extends React.Component<any, any>{
  constructor(props: any){
    super(props)
    this.state = { isLogInVisible: false }

    this.openAndCloseLogIn = this.openAndCloseLogIn.bind(this);
  }

  openAndCloseLogIn = (props: boolean): void => {
        this.setState({isLogInVisible: props})
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <NavBar openAndCloseLogIn={this.openAndCloseLogIn} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
        <Footer />
        { this.state.isLogInVisible ? <LogIn openAndCloseLogIn={this.openAndCloseLogIn}/> : null }
      </div>
    );
  }
}


export default App;