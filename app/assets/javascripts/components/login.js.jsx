var LoginForm = React.createClass({
  getInitialState: function () {
    return {
      user_name: '',
      password: '',
      load: false,
      invalid: false
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
    this.state.load = true;
    $.ajax({
      method: "POST",
      format: "JSON",
      url: '/sign_in',
      data: {
        user_name: this.state.user_name,
        password: this.state.password,
      }
    }).done(function(response){
        if (response.message === 'Success'){
          window.location.href= "/";
        } else {
          Materialize.toast('Invalid Username or Password!', 4000);
          that.setState({
            load: false
          });
        }
    });
  },

  renderLoadBar: function() {
    if (this.state.load === true) {
      return (
        <Mz.ProgressBar />
      );
    } else {
      return (
        <span />
      )
    }
  },

  renderInvalid: function() {
    if (this.state.invalid === true) {
      return (
        <div> Invalid Login </div>
      );
    }
  },

  render: function() {
      if (this.props.signup === true){
        return (
          <div className="container">
            {this.renderInvalid()}
            <div>
              <input placeholder="User Name" type="text" onChange={this.uchange} value={this.state.user_name} />
            </div>
            <div>
              <input placeholder="Password" type="password" onChange={this.pchange} value={this.state.password}  />
            </div>
            <div>
              <input type="submit" name="commit" value="Log In" className="btn btn-primary" onClick = {this.handleSubmit} />
            </div>
            {this.renderLoadBar()}
          </div>
        );
      } else {
        return (<span />);
      }
    }

});
