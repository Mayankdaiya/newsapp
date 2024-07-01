import React, {useContext, useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Theme from './context/Theme'

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY
  const {theme}  = useContext(Theme);
  const [progress, setProgres] = useState(0)
  const setProgress = (p) =>{
    setProgres(p)
  }

    return (
      <div style={{backgroundColor : theme==="light"?"white":"#080e11"}}>
        <Router>
        <NavBar/> 
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News  key={'general'} setProgress={setProgress} category='general' apiKey={apiKey}/>}/>
          <Route exact path='/business' element={<News  key={'business'} setProgress={setProgress} category='business' apiKey={apiKey}/>}/>
          <Route exact path='/health' element={<News  key={'health'} setProgress={setProgress} category='Health' apiKey={apiKey}/>}/>
          <Route exact path='/entertainment' element={<News  key={'entertainment'} setProgress={setProgress} category='entertainment' apiKey={apiKey}/>}/>
          <Route exact path='/general' element={<News  key={'general'} setProgress={setProgress} category='general' apiKey={apiKey}/>}/>
          <Route exact path='/science' element={<News  key={'science'} setProgress={setProgress} category='science' apiKey={apiKey}/>}/>
          <Route exact path='/sports' element={<News  key={'sports'} setProgress={setProgress} category='sports' apiKey={apiKey}/>}/>
          <Route exact path='/technology' element={<News  key={'technology'} setProgress={setProgress} category='technology' apiKey={apiKey}/>}/>
        </Routes>
        </Router>
      </div>
    )
  }

export default App
