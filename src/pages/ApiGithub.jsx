import React from "react";
import '../css/ApiGithub.css'; 

export default class ApiGithub extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {fetch('https://api.github.com/users/github-john-doe')
          .then((response) => {
            return response.json()
          })
          .then((result) => {
            this.setState({persons: result})
            console.log(result)
          })
        }

    render() {
        return (
          <div id="github">
            <h3 id="title">Github user</h3>      
            <h4 id="name">{this.state.persons.name}</h4>
            <figure id="avatarContain">
              <img src={this.state.persons.avatar_url} alt="chat rigolo"></img>
            </figure>            
            <p>{this.state.persons.bio}</p>
            <p>Abonnés : {this.state.persons.followers}</p>
            <p>Abonnements : {this.state.persons.following}</p>
            <p>Créé le : {this.state.persons.created_at}</p>
            <p>Modifié le :{this.state.persons.updated_at}</p>
            <p>URL repositories : <a href={this.state.persons.repos_url} target="_blank" rel='nofollow'>{this.state.persons.repos_url}</a></p>
          </div>            
        )
    }
  }
