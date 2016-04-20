var CheeseBox = React.createClass({
  propTypes: {
    cheeses: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      favorites_count: this.props.cheese.favorites_count,
    };
  },



  handleFaveClick: function () {
    var that = this;
    $.ajax({
      method: "POST",
      url: "/cheeses/" + this.props.cheese.id + "/favorite.json",
      data: {
        cheese_id: this.props.cheese.id
      }
    }).done(function(response){
        that.setState({
          favorites_count: response.favorites_count
        });
    });
  },


  render: function () {
      var aStyle = {
        cursor: "pointer"
      };
      return (
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey lighten-1">
              <div className="card-content white-text">
                <span className="card-title"> {this.props.cheese.name} </span>
                <span className="right"><i className="fa fa-heart" aria-hidden="true"></i> {this.state.favorites_count}</span>
                <p> {this.props.cheese.description} </p>
              </div>
              <div className="card-action">
                <a style={aStyle} onClick={this.handleFaveClick}>Favorite</a>
              </div>
            </div>
          </div>
        </div>
      )
  }
});
