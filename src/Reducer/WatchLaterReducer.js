const WatchLaterReducerFunc = (state, action) => {

    switch (action.type) {
      case "ADD_TO_WATCHLATER":
        return { ...state,  WatchLaterVideo: action.payload };

      case "DELETE_FROM_WATCH_LATER":
        return { ...state, WatchLaterVideo: action.payload };

      default:
        return state;
    }
  };
  
  export {WatchLaterReducerFunc}