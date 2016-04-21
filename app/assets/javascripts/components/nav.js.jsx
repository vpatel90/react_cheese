
var Nav = React.createClass({

  propTypes: {
    current_user: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      signup: false,
      login: false,
      newCheese: false
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


  renderSignedIn: function () {
    if (this.props.current_user === null) {
      return (
        <span>
            <Mz.NavItem href='/sign_in'>Login</Mz.NavItem>
            <Mz.NavItem onClick={this.handleSignupClick} >Sign Up</Mz.NavItem>
        </span>
      )
    }else {
      return (
        <span>
            <Mz.NavItem href='/sign_out'>Logout</Mz.NavItem>
            <Mz.NavItem onClick={this.handleNewCheeseClick}>Add Cheese</Mz.NavItem>
        </span>
        )
    }
  },

  render: function() {
    return (
      <span>
        <Mz.Navbar className="blue" brand='Cheeses' left>
          <Mz.NavItem href='/'>All Cheeses</Mz.NavItem>
          <Mz.NavItem href='/users'>Users</Mz.NavItem>
          {this.renderSignedIn()}
        </Mz.Navbar>
        <SignUpForm completeHandler={this.handleSignupClick} signup={this.state.signup}/>
        <CheeseForm completeHandlerTwo={this.handleNewCheeseClick} newCheese={this.state.newCheese}/>

      </span>
      );
  }
});
