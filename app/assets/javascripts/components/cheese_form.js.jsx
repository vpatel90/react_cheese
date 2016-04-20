var CheeseForm = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      description: '',
    };
  },
  nchange: function (event) {
    this.setState({
      name: event.target.value
    });
  },
  dchange: function (event) {
    this.setState({
      description: event.target.value
    });
  },
  handleSubmit: function () {
    var that = this;
    $.ajax({
          method: "POST",
          url: '/cheeses.json',
          data: {
            cheese: {
              name: this.state.name,
              description: this.state.description
            }
          }
    }).done(function(response){
        that.props.completeHandler();
    });
  },
  render: function() {
      if (this.props.newCheese === true){
        return (
          <div className="container">
            <div>
              <input placeholder="Name" type="text" onChange={this.nchange} value={this.state.name} />
            </div>
            <div>
              <input placeholder="Description" type="text" onChange={this.dchange} value={this.state.description}  />
            </div>
            <div>
              <input type="submit" name="commit" value="Add Cheese" className="btn btn-primary" onClick = {this.handleSubmit} />
            </div>
          </div>
        );
      } else {
        return (<span />);
      }
    }

});
