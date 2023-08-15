import React, { useState,useEffect } from "react";
import axios from 'axios';





const SearchBar=({setVideos})=>{
let[search,setSearch]=useState("");
useEffect(()=>{
    implementSearch();
},[]);
function implementSearch(){
        axios.get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                q:search || "nature videos",
                part:"snippet",
                maxResults:"50",
                type:"video",
                key:"AIzaSyAT0jM-t5lFIlBSwgG1hPmdou37jzSnFAc",
            },
        })
        .then(response=>setVideos(response.data.items))
        .catch((error)=>console.log(error))
}

    return (
        <div className="searchbar">
            <input type="text" placeholder="Search...."
            onChange={(e)=>setSearch(e.target.value)}/>
            <button onClick={implementSearch}>Search</button>
        </div>
    )
}
export default SearchBar;