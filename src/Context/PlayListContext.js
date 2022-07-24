import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { PlayListReducerFunc } from "../Reducer/PlayListReducer";

const PlayListContext = createContext();

const PlayListProvider = ({ children }) => {
  
  const authtoken = localStorage.getItem("AuthToken");

  const [playListState, playListDispatch] = useReducer(PlayListReducerFunc, {
    modal: false,
    createUserPlaylist: [],
    selectedPlaylist: {},
    videoData: [],
    getUserPlayList: [],
  });

  const addToPlayList = async (video,_id, playListDispatch) => {
    try {
      const { data } = await axios.post(
        "/api/user/playlists/${_id}",
        {
          video,
        },
        {
          headers: {
            authorization: authtoken,
          },
        }
      );
      console.log(data, "rajitha");

      playListDispatch({ type: "ADD_TO_PlayList", 
      payload: data.playlists });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  


  const deletePlayList = async (_id, playListDispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${_id}`,

        headers: {
          authorization: authtoken,
        },
      });

      playListDispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload: data.playlists,
      });
    } catch (error) {
      console.log(error);
    }
  };



  const addVideoToPlaylist = async (video,playlistId, playListDispatch) => {
    try {
      const { data } = await axios.post(
        `/api/user/playlists/${playlistId}`,
        {
          video,
        },
        {
          headers: {
            authorization: authtoken,
          },
        }
      );
     

      playListDispatch({ type: "ADD_VIDEO_TO_PlayList", 
      payload: data.playlists });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };


  const deleteVideoPlayList = async (_id,playlistId,playListDispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `/api/user/playlists/${playlistId._id}/${video._id}`,
        

        headers: {
          authorization: authtoken,
        },
      });
      console.log("from func", data);

      playListDispatch({
        type: "DELETE_VIDEO_FROM_PLAYLIST",
        payload: data.playlists,
      });

    } catch (error) {
      console.log(error);
    }
  };



  const createPlaylist = async (userList, playListDispatch, setUserList) => {
    console.log(userList, "user list");
    try {
      const response = await axios.post(
        "/api/user/playlists/",

        {
          playlist: userList,
        },

        {
          headers: {
            authorization: authtoken,
          },
        }
      );

      playListDispatch({
        type: "CREATE_PLAYLIST",
        payload: response.data.playlists,
      });

      setUserList({ ...userList, title: "" });
    } catch (error) {
      console.log(error);
    }
  };




 const deleteVideo = async (playlistId, videoId, playListDispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: authtoken,
        },
      }
    );

    playListDispatch({
      type: "DELETE_VIDEO_FROM_PLAYLIST",
      payload: data.playlist,
    });
  } catch (error) {
    console.error(error);
  }
};
  const addDataToList = (video, playListDispatch) => {
    playListDispatch({ type: "SELECTED_ID", payload: video });
    playListDispatch({ type: "MODAL", payload: true });
    playListDispatch({type:"MODAL_CLOSE",paylod:true})
  };

  return (
    <PlayListContext.Provider value={{playListState,playListDispatch,addToPlayList,deletePlayList,createPlaylist,addDataToList,addVideoToPlaylist,deleteVideoPlayList,deleteVideo}}>
      {children}
    </PlayListContext.Provider>
  );
};

const usePlayList = () => useContext(PlayListContext);

export { PlayListProvider, usePlayList };
