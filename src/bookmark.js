import React, { useState } from "react";
import { motion } from "framer-motion";
import Emoji from "react-emoji-render";
import {  useNavigate } from "react-router-dom";


export default function Bookmark(){
    const data=JSON.parse(localStorage.getItem("bookmark"))
    // console.log(data)
    const navigate=useNavigate();
    const [p,setP]=useState(true)

    if(data){
        return <div>
        <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
         <div >
        <div id='punbox'>
          PUN<Emoji text=":smiley:" />: {<h3>{data.setup}</h3>}
        </div>
        <div id='linebox'>
        Punchline<Emoji text=":laughing:" />: {<p>{data.punchline}</p>}
        </div>
      </div>
      </motion.div>
        <button className="btn" onClick={()=>{
            localStorage.removeItem('bookmark');
            setP(!p)
        }}>clear</button>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bookbtn"
        onClick={()=>{navigate('/')}}
      >
        Go To Jokes Page
      </motion.button>
    </div>
    }
    if(data=== null){
        return <div>
            <h1>no bookmarked joke</h1>
            <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bookbtn"
        onClick={()=>{navigate('/')}}
      >
        Go To Jokes Page
      </motion.button>
        </div>
    }
}