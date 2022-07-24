const PlayListReducerFunc = (state, action) => {
  switch (action.type) {
    case "GET_PlayList":
      return { ...state,  getUserPlayList: action.payload };

      case "DELETE_FROM_PLAYLIST":
        return {
          ...state,
          getUserPlayList:[...action.payload],
        };

        
    case "ADD_VIDEO_TO_PlayList":
      return { ...state,  getUserPlayList: action.payload };

      case "DELETE_VIDEO_FROM_PLAYLIST":
        return{
          ...state,
          getUserPlayList:[...state.getUserPlayList,action.payload]
        }

    case "GET_PLAYLIST":
      return {
        ...state,
        getUserPlayList: [...action.payload],
      };

    case "MODAL":
      return { ...state, modal: !state.modal };
    case "MODAL_CLOSE":
      return { ...state, modal: action.payload };
    case "CREATE_PLAYLIST":
      return { ...state, createUserPlaylist: action.payload };
    case "SELECTED_ID":
      return { ...state, selectedPlaylist: action.payload };

    default:
      return state;
  }
};

export { PlayListReducerFunc };
