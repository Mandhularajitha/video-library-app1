import { createContext, useContext, useReducer } from "react";
import { likeReducerFunc } from "../Reducer/LikeReducer";

import axios from "axios";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {

    const authtoken = localStorage.getItem("AuthToken")


  const [likedState, likedDispatch] = useReducer(likeReducerFunc, {
    likedVideo: [],
  });


const addToLike = async (video, likedDispatch) => {

  console.log(authtoken,"ooo")
  
    console.log(video,"shilu")
  try {
    const { data } = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: {
          authorization:authtoken,
        },
      }
    );
    console.log(data,"rajitha")
    
    likedDispatch({ type: "ADD_TO_LIKE", payload: data.likes });

  } catch (error) {
    console.log("Something went wrong", error);
  }
};


const deleteLikedVideo = async (_id, likedDispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/user/likes/${_id}`,

      headers: {
        authorization:authtoken,
      },
    });

    deleteLikedVideo
    likedDispatch({

      type: "DELETE_FROM_LIKED",
      payload: data.likes,
    });

  } catch (e) {
    console.log("Something went wrong", e);
  }
}

  return (
    <LikeContext.Provider value={{ likedState, likedDispatch,addToLike,deleteLikedVideo }}>
      {children}
    </LikeContext.Provider>
  );
};


const useLiked = () => useContext(LikeContext);

export { useLiked, LikeProvider };
