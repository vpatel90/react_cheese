
var Nav = React.createClass({

  propTypes: {
    current_user: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      signup: false,
      login: false,
      user_name: '',
      password: '',
      password_confirmation: ''
    };
  },

  handleSignupClick: function () {
    this.setState({
      signup: !this.state.signup
    });
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
    })
  },

  renderSignUp: function () {
    if (this.state.signup === true){
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
    }
  },
  renderSignedIn: function () {
    if (this.props.current_user === null) {
      return (
        <span>
          <Mz.Navbar className="blue" brand='Cheeses' left>
            <Mz.NavItem href='/'>All Cheeses</Mz.NavItem>
            <Mz.NavItem href='/users'>Users</Mz.NavItem>
            <Mz.NavItem href='/sign_in'>Login</Mz.NavItem>
            <Mz.NavItem onClick={this.handleSignupClick} >Sign Up</Mz.NavItem>
          </Mz.Navbar>
        </span>
      )
    }else {
      return (
        <span>
          <Mz.Navbar className="blue" brand='Cheeses' left>
            <Mz.NavItem href='/'>All Cheeses</Mz.NavItem>
            <Mz.NavItem href='/users'>Users</Mz.NavItem>
            <Mz.NavItem href='/sign_out'>Logout</Mz.NavItem>
            <Mz.NavItem href='/cheeses/new'>Add Cheese</Mz.NavItem>
          </Mz.Navbar>
        </span>
        )
    }
  },

  render: function() {
    return (
      <span>
        {this.renderSignedIn()}
        {this.renderSignUp()}
      </span>
      );
  }
});
