import { createContext, useContext, useReducer } from "react";
import { WatchLaterReducerFunc } from "../Reducer/WatchLaterReducer";

import axios from "axios";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {

    const authtoken = localStorage.getItem("AuthToken")

  const [watchedLaterState,watchLaterDispatch] = useReducer(WatchLaterReducerFunc, {
    WatchLaterVideo: [],
  });


const addToWatchlater = async (video,watchLaterDispatch) => {
  console.log(video,"q")
  try {
    const { data } = await axios.post(
      "/api/user/watchlater",
      {
        video,
      },
      {
        headers: {
          authorization:authtoken,
        },
      
      }
      
    );
   
    
    watchLaterDispatch({ type: "ADD_TO_WATCHLATER", payload: data.watchlater });

  } catch (error) {
    console.log("Something went wrong", error);
  }
};


const deleteWatchLater = async (_id,watchLaterDispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `/api/user/watchlater/${_id}`,
      headers: {
        authorization: authtoken,
      },
    });

    console.log("data from fun", data);

    watchLaterDispatch({
      type: "DELETE_FROM_WATCH_LATER",
      payload: data.watchlater,
    });
  } catch (e) {
    console.log("Something went wrong", e);
  }
};

  return (
    <WatchLaterContext.Provider value={{watchedLaterState,watchLaterDispatch,addToWatchlater,deleteWatchLater}}>
      {children}
    </WatchLaterContext.Provider>
  );
};


const useWatchlater = () => useContext(WatchLaterContext);

export { useWatchlater, WatchLaterProvider };
