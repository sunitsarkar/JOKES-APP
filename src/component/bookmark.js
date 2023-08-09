import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Emoji from "react-emoji-render";
import { useNavigate } from "react-router-dom";


export default function Bookmark() {
  // const data = JSON.parse(localStorage.getItem("bookmark"))
  const [data,setData]=useState([])

  useEffect(()=>{
    if(localStorage.bookmarks){
      setData(localStorage.bookmarks.split('$').map((a)=>{
        return JSON.parse(a);
      }))
    }
  },[])

  // console.log(data)
  const navigate = useNavigate();
  const [p, setP] = useState(true)
  return <>
  <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        id='title'
      >
        <u>Jokes App</u>
      </motion.h1>
      {
        data.length>0 ? <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn" onClick={() => {
            localStorage.removeItem("bookmarks");
            setData([])
            setP(!p)
          }}>clear</motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bookbtn"
          onClick={() => { navigate('/') }}
        >
          Go To Jokes Page
        </motion.button>
        <br/><br/>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="bookmark-div"
        >
          {data.map((item)=>{
            return <motion.div 
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="bookmark-jokes"
            >
              <div id='punbox'>
                PUN<Emoji text=":smiley:" />: {<h3>{item.setup}</h3>}
              </div>
              <div id='linebox'>
                Punchline<Emoji text=":laughing:" />: {<p>{item.punchline}</p>}
              </div>
            </motion.div>
          })}
        </motion.div>
      </motion.div> 
      :
      <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}>
      <h1>No bookmarked joke</h1>
      <br/>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bookbtn"
        onClick={() => { navigate('/') }}
      >
        Go To Jokes Page
      </motion.button>
    </motion.div>
      }
  </>

 
}