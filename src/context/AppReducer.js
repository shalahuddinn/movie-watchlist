export const AppReducer = (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
            ...state,
            watchlist: [action.payload.movie, ...state.watchlist],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST": 
            return {
            ...state,
            watchlist: state.watchlist.filter(movie=>movie.id !== action.payload.id),
            };
        case "ADD_MOVIE_TO_WATCHED":
            return {
            ...state,
            watchlist: state.watchlist.filter(movie=>movie.id !== action.payload.movie.id),
            watched: [action.payload.movie, ...state.watched]
            };
         case "MOVE_TO_WATCHLIST":
            return {
            ...state,
            watchlist: [action.payload.movie, ...state.watchlist],
            watched: state.watched.filter(movie=>movie.id !== action.payload.movie.id)
            };
         case "REMOVE_MOVIE_FROM_WATCHED":
            return {
            ...state,
            watched: state.watched.filter(movie=>movie.id !== action.payload.id),
            };
        default:
            return state;
    }
};