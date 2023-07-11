import React, { useState } from "react";
import { motion } from "framer-motion";
import Emoji from "react-emoji-render";
import { useNavigate } from "react-router-dom";


export default function Bookmark() {
  const data = JSON.parse(localStorage.getItem("bookmark"))
  // console.log(data)
  const navigate = useNavigate();
  const [p, setP] = useState(true)

  if (data) {
    return <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <motion.div 
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        >
          <div id='punbox'>
            PUN<Emoji text=":smiley:" />: {<h3>{data.setup}</h3>}
          </div>
          <div id='linebox'>
            Punchline<Emoji text=":laughing:" />: {<p>{data.punchline}</p>}
          </div>
        </motion.div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn" onClick={() => {
          localStorage.removeItem('bookmark');
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
    </motion.div>
  }
  if (data === null) {
    return <motion.div
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
}