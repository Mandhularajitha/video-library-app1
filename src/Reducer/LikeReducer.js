const likeReducerFunc = (state, action) => {
  
    switch (action.type) {
      
      case "ADD_TO_LIKE":
        return { ...state, likedVideo: action.payload };

      case "DELETE_FROM_LIKED":
        return { ...state, likedVideo: action.payload }

      default:
        return state;
    }
  };
  
  export {likeReducerFunc}