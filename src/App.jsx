import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {

  const [ modalIsVisible, setModelIsVisible] = useState(false); 

  function showModalHandler() {
    setModelIsVisible(true);
  }

  function hideModalHandler() {
    setModelIsVisible(false);
}

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsList 
        modalIsVisible={modalIsVisible} 
        onStopPosting={hideModalHandler}
         />
      </main>
    </>
  );
}

export default App;
