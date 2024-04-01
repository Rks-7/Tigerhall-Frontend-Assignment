import React, { useState } from 'react'
import { ChangeEvent } from 'react';
import { Input } from "@chakra-ui/react";
import { Search2Icon} from "@chakra-ui/icons"
import "../App.css";

interface SearchbarProps {
  handleSearch: (keywords: string) => void;
}



const Searchbar = ({ handleSearch }: SearchbarProps) => {
    const [keyword, setkeyword] = useState('');
     let timeoutId : number;
    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
      const value = e.target.value;
      console.log("Typing..."); // Log when typing
      setkeyword(value);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log("Performing search...");
        handleSearch(value);
      }, 300);
    }
  return (
    <>
      <div className="searchbar-container">
        <div className="main-search">
          <Search2Icon color="white"/>
          <Input
          variant="unstyled"
            className="input-search"
            placeholder="Search.."
            value={keyword}
            onChange={handleChange}
            
          />
        </div>
      </div>
    </>
  );
}

export default Searchbar
