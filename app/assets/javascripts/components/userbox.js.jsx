var UserBox = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  render: function () {
    var url = "/users/"+ this.props.user.id;
    return (
        <div className="row">
           <div className="col s6 m4">
             <div className="card blue-grey darken-1">
               <div className="card-content white-text">
                 <a className="orange-text" href={url}><span className="card-title"> {this.props.user.user_name} </span></a>
                 <p>Contributed: {this.props.user.contributed} </p>
                 <p>Favorites: {this.props.user.favorites_count} </p>

               </div>
               <div className="card-action">

               </div>
             </div>
           </div>
         </div>
       )
   }
});
