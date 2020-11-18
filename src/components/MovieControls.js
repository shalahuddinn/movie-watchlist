import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const MovieControls = ({movie, type}) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeMovieFromWatched } = useContext(GlobalContext);
    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                <button 
                    className="ctrl-btn"
                    onClick={()=>addMovieToWatched(movie)} 
                    title="Add to Watched"
                >
                    <i className="fa-fw fa fa-eye"/>
                </button>

                <button
                    className="ctrl-btn"
                    onClick={()=>removeMovieFromWatchlist(movie.id)}
                    title="Remove From Watchlist"
                >
                    <i className="fa-fw fa fa-times"/>
                </button>
                </>
            )}
            {type === "watched" && (
                <>
                <button 
                    className="ctrl-btn"
                    onClick={()=>moveToWatchlist(movie)}
                    title="Move to Watchlist" 
                >
                    <i className="fa-fw fa fa-eye-slash"/>
                </button>

                <button
                    className="ctrl-btn"
                    onClick={()=>removeMovieFromWatched(movie.id)}
                    title="Remove From Watched"
                >
                    <i className="fa-fw fa fa-times"/>
                </button>
                </>
            )}
        </div>
    )
};
