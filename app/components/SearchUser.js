var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    GitHubUser.getByUserName(this.refs.username.value).then(function(response){
      this.props.updateUser(response.data);
    }.bind(this));

    GitHubUser.getReposByUserName(this.refs.username.value).then(function(response){
      this.props.updateRepos(response.data);
    }.bind(this));

  },
  render: function() {
    return (
        <div className="jumbotron">
            <h1>SearchUser Info</h1>
            <div className="row">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>Username</label>
                <input
                    type="text"
                    ref="username"
                    className="form-control"
                    placeholder="Ex: filipemarruda"
                    />
                </div>
                <button
                type="submit"
                className="btn btn-primary">Buscar
                </button>
            </form>
            </div>
        </div>
    );
  }
});

SearchUser.propTypes = {
  updateUser : React.PropTypes.func.isRequired,
  updateRepos : React.PropTypes.func.isRequired
};

module.exports = SearchUser;