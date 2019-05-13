import React from 'react'
import axios from 'axios'

export default class CommmitList extends React.Component {

    state = {
        commits: [],
        user: 'rubenssantos2'
    }

    componentDidMount(){

        axios.get(`https://api.github.com/users/${this.state.user}/repos`)
        .then(resp => {
            const commits = resp.data;
            this.setState({commits});
            console.log([commits])
        })
    }

    render() {

        return(
            <ul>
                {this.state.commits.map(commit => <li>{commit.name}</li>)}
            </ul>
        )
    }
}