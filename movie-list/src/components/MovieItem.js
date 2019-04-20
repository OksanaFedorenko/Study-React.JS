import React from "react";


class MovieItem extends React.Component {

    state = {
      willWatch: false
    };
  

  render() {
    //console.log(props);
    const { item, removeMovieById, addMovieToWillWatch, removeMovieFromWillWatch } = this.props;
    const classNameButton = `btn ${
                this.state.willWatch ? "btn-success" : "btn-secondary"
              }`;
    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
            item.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {item.vote_average}</p>
            <button
              type="button"
              className={classNameButton}
              onClick={() => {
              
                if (this.state.willWatch) {
                  removeMovieFromWillWatch(item.id);
                } else {
                  addMovieToWillWatch(item);
                }
                
                this.setState({
                  willWatch: !this.state.willWatch
                });
              }}
            >
              Will Watch
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              removeMovieById(this.props.item.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default MovieItem;

