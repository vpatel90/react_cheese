var LoginForm = React.createClass({
  getInitialState: function () {
    return {
      user_name: '',
      password: '',
    };
  },


  uchange: function (event) {
    this.setState({
      user_name: event.target.value
    });
  },

  pchange: function (event) {
    this.setState({
      password: event.target.value
    });
  },

  handleSubmit: function () {
    var that = this;
    $.ajax({
      method: "POST",
      url: '/sign_in',
      data: {
        user_name: this.state.user_name,
        password: this.state.password,
      }
    }).done(function(response){
        that.props.completeHandler();
    });
  },

  render: function() {
      if (this.props.signup === true){
        return (
          <div className="container">
            <div>
              <input placeholder="User Name" type="text" onChange={this.uchange} value={this.state.user_name} />
            </div>
            <div>
              <input placeholder="Password" type="password" onChange={this.pchange} value={this.state.password}  />
            </div>
            <div>
              <input type="submit" name="commit" value="Log In" className="btn btn-primary" onClick = {this.handleSubmit} />
            </div>
          </div>
        );
      } else {
        return (<span />);
      }
    }

});
