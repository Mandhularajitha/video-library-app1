import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { historyReducerFunc } from "../Reducer/HistoryReducer";



const histryContext = createContext();

const HistoryProvider = ({ children }) => {

  const authtoken = localStorage.getItem("AuthToken");

  const [historyState, historyDispatch] = useReducer(historyReducerFunc, {
    historyVideo: [],
  });


  const addToHistory = async (video, historyDispatch) => {
    try {
      const { data } = await axios.post(
        "/api/user/history",
        {
          video,
        },
        {
          headers: {
            authorization:authtoken,
          },
        }
      );
      historyDispatch({ type: "ADD_TO_HISTORY", payload: data.history });
  
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  
  const deleteHistory = async (_id, historyDispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/api/user/history/${_id}`,

        headers: {
          authorization:authtoken,
        },
      });
  
      historyDispatch({
        type: "DELETE_FROM_HISTORY",
        payload: data.history,
      });

    } catch (e) {
      console.log("Something went wrong", e);
    }
  };

  
  return (
    <histryContext.Provider value={{ historyState, historyDispatch,addToHistory,deleteHistory }}>
      {children}
    </histryContext.Provider>
  );
};

const useHistry = () => useContext(histryContext);

export {HistoryProvider,useHistry };

