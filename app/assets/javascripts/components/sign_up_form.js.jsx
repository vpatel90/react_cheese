var SignUpForm = React.createClass({
  getInitialState: function () {
    return {
      user_name: '',
      password: '',
      password_confirmation: ''
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

  pcchange: function (event) {
    this.setState({
      password_confirmation: event.target.value
    });
  },

  handleSubmit: function () {
    var that = this;
    $.ajax({
      method: "POST",
      url: '/users',
      data: {
        user: {
          user_name: this.state.user_name,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        }
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
              <input placeholder="Password Confirmation" type="password" onChange={this.pcchange} value={this.state.password_confirmation} />
            </div>
            <div>
              <input type="submit" name="commit" value="Create Account" className="btn btn-primary" onClick = {this.handleSubmit} />
            </div>
          </div>
        );
      } else {
        return (<span />);
      }
    }

});
