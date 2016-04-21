var RelativeTime = React.createClass({

    render: function() {
      var spanStyle = {
        marginRight: "10px"
      };
      var relativeTime = moment(this.props.time).fromNow();
      return (
        <span style={spanStyle}>
          {relativeTime}
        </span>
      );
    }
});
