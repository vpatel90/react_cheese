
var Nav = React.createClass({

  propTypes: {
    current_user: React.PropTypes.object
  },
  getInitialState: function () {
    var url = window.location.pathname
    return {
      signup: false,
      login: false,
      newCheese: false,
      active: url
    };
  },

  handleSignupClick: function () {
    this.setState({
      signup: !this.state.signup
    });
  },
  handleNewCheeseClick: function () {
    this.setState({
      newCheese: !this.state.newCheese
    });
  },
  handleLoginClick: function () {
    this.setState({
      login: !this.state.login
    });
  },


  renderSignedIn: function () {
    if (this.props.current_user === null) {
      return (
        <span>
            <Mz.NavItem className={(this.state.login === true) ? "active" : ""}
                        onClick={this.handleLoginClick}>Login</Mz.NavItem>
            <Mz.NavItem className={(this.state.signup === true) ? "active" : ""}
                        onClick={this.handleSignupClick} >Sign Up</Mz.NavItem>
        </span>
      )
    }else {
      return (
        <span>
            <Mz.NavItem href='/sign_out'>Logout</Mz.NavItem>
            <Mz.NavItem className={(this.state.newCheese === true) ? "active" : ""}
                        onClick={this.handleNewCheeseClick}>Add Cheese</Mz.NavItem>
        </span>
        )
    }
  },

  setCheeseActive: function () {
    this.setState({
      active: 'cheeses'
    });
  },
  setUsersActive: function () {
    this.setState({
      active: 'users'
    });
  },



  render: function() {
    return (
      <span>
        <Mz.Navbar brand='Cheeses' left>
          <Mz.NavItem className={(this.state.active === '/') ? "active" : ""}
                      href='/'>All Cheeses</Mz.NavItem>
          <Mz.NavItem className={(this.state.active === '/users') ? "active" : ""}
                      href='/users'>Users</Mz.NavItem>
          {this.renderSignedIn()}
        </Mz.Navbar>
        <LoginForm completeHandler={this.handleLoginClick} signup={this.state.login}/>
        <SignUpForm completeHandler={this.handleSignupClick} signup={this.state.signup}/>
        <CheeseForm completeHandler={this.handleNewCheeseClick} newCheese={this.state.newCheese}/>

      </span>
      );
  }
});
