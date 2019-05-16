import React from 'react';
import axios from 'axios';

export default class UserInfo extends React.Component {

    state = {

        user: 'rubenssantos2',
        repositories: {},
        reposNames: []
    }


    getRepos = () => {

        axios.get(`https://api.github.com/users/${this.state.user}/repos`)
            .then(resp => {

                let repos = resp.data;
                let reposNamesArr = [];

                reposNamesArr.push(repos.map((repo) => repo))

                this.setState({

                    repositories: repos,
                    reposNames: reposNamesArr
                })

            })

            console.log(this.state.repositories)

        

        
    }

    componentDidMount() {

        this.getRepos();
    }

    render() {

        return (
            <div className="RepositoriesList">

                {/* <ul>
                    {
                        this.state.reposNames.map(repo => <li>{repo}</li>)
                    }
                </ul> */}

            </div>


        )

    }

}