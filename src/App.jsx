import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import './style.css'
import React, { Component } from 'react';
import { Helmet } from "react-helmet"
import metaData from "./Metadata/Metadata";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import AboutPage from "./Pages/AboutUsPage";
import MarsaPage from "./Pages/MarsaPage";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: localStorage.getItem('lang'), metaData: metaData(localStorage.getItem('lang')) }
  }

  changeLanguage = () => {

    if (localStorage.getItem('lang') === "en") {
      
      localStorage.setItem('lang', 'ar');
    } else {
      localStorage.setItem('lang', 'en');
    }

    this.setState({ lang: localStorage.getItem('lang'), metaData: metaData(localStorage.getItem('lang')) });
    window.location.reload();
  }



  componentDidMount() {

    if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', 'ar')
    } else {
      this.setState({ lang: localStorage.getItem('lang'), metaData: metaData(localStorage.getItem('lang')) });
    }
  }


  render() {
    const lang = this.state.lang;


    return (

      <div className={"App" + " " + this.state.lang} >


        <Helmet htmlAttributes={{ lang: lang }} >
          <title> { this.state.metaData.title}</title>
        </ Helmet> 
       



        <NavBar metaData={this.state.metaData.navBar} changeLanguage={this.changeLanguage} />
        <Routes>
          <Route exact path="/" element={<HomePage metaData={this.state.metaData} />} />
          <Route path='/about' element={<AboutPage metaData={this.state.metaData} />} />
          <Route path='/marsa' element={<MarsaPage metaData={this.state.metaData} />} />
          <Route path='*' element={<NotFound metaData={this.state.metaData} />} />
        </Routes>
        <Footer metaData={this.state.metaData.footer} />
      </div>
    );
  }
}



export default App;
