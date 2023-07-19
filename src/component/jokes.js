import axios from 'axios';
import '../App.css';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Emoji from 'react-emoji-render';
import { useNavigate } from 'react-router-dom';

export default function Jokes() {
  const [data, setData] = useState();
  const [temp, setTemp] = useState(true);
  const navigate = useNavigate();
  const [newjoke, setNewjoke] = useState(false);
  const [show, setShow] = useState(false);



  const api = "https://official-joke-api.appspot.com/random_joke";
  useEffect(() => {
    axios.get(api).then((res) => {
      //   console.log(res.data);
      setData(res.data);
    }).then(() => {
      if (show) {
        setNewjoke(true)
        setTimeout(() => {
          setNewjoke(false)
        }, 1800);
      }
    })
  }, [temp]);
  // console.log(data)
  //   const localStorage=window.localStorage;
  const handelbookmark = () => {
    navigate('/bookmark')
  }

  const addBookmark = () => {
    // window.localStorage.setItem(`bookmark`, JSON.stringify(data));
    if(localStorage.bookmarks){
      localStorage.bookmarks = `${localStorage.bookmarks}$${JSON.stringify(data)}`;
      // console.log(localStorage.bookmarks)
  }else{
      localStorage.bookmarks = JSON.stringify(data);
      
  }
  }

  const handelNewjoke = () => {
    setTemp(!temp);
    setShow(true)
  };

  if (data) {
    return (<div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        id='title'
      >
        Jokes App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <div >
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1.5 }}>
            <div id='punbox'>
              PUN<Emoji text=":smiley:" />: {<h3>{data.setup}</h3>}
            </div>
            <div id='linebox'>
              Punchline<Emoji text=":laughing:" />: {<p>{data.punchline}</p>}
            </div>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
            onClick={handelNewjoke}
          >
            New Joke
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn"
            onClick={addBookmark}
          >
            Bookmark
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bookbtn"
            onClick={handelbookmark}
          >
            Go to Bookmark Page
          </motion.button>
        </div>
      </motion.div>
      <br /><br />
      <AnimatePresence>
        {newjoke && <motion.p
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
        >Here is a new joke <Emoji text=":smiley:" /> </motion.p>}
      </AnimatePresence>
    </div>
    );
  }
}


