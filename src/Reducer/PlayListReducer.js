const PlayListReducerFunc = (state, action) => {
    console.log(state,"playliststste")
    console.log(action,"playlistaction")

    switch (action.type) {
      case "ADD_TO_PlayList":
        return { ...state,  PlayListVideo: action.payload };
        
      case "DELETE_FROM_PLAYLIST":
        return {...state,
          PlayListVideo: action.payload,
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
  
  export {PlayListReducerFunc}