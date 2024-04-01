import { useState } from 'react'
import Searchbar from "./components/Searchbar";
import { fetchContent } from './services/api.js';
import ContentCard from './components/ContentCard.js';
import Loading from './components/Loading.jsx'
import './App.css';

export interface Content {
  name: string;
  image: {
    uri: string;
  };
  categories: { name: string }[];
  experts: {
    firstName: string;
    lastName: string;
    title: string;
    company: string;
  }[];
}

function App() {
 const [content, setcontent] = useState<Content[]>([]);
const [isLoading, setisLoading] = useState(false);

 const handleSearch=async (keywords:String)=>{
  if(keywords==''){
    setcontent([]);
  }else{
    setisLoading(true);
    const cards : Content[] = await fetchContent(keywords);
    setcontent(cards);
    setisLoading(false);
  }
  
 }

 
  return (
    <>
      <div className="App">
        <Searchbar handleSearch={handleSearch} />
        {isLoading ? (
          <div className='main-lottie-container'>
            <Loading />
          </div>
        ) : (
          <div className="main-card-div">
            {content.map((content, index) => (
              <ContentCard content={content} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App
