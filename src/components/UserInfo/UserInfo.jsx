import React from 'react';
import axios from 'axios';


export default class UserInfo extends React.Component{

    state = {

        user: 'rubenssantos2',
        name: '',
        description: '',
        location: '',
        image: ''
    }

    componentDidMount(){

        axios.get(`https://api.github.com/users/${this.state.user}`)
        .then(resp => {
            
            const userInfo = resp.data;

            this.setState(
                {
                    name: userInfo.name,
                    description: userInfo.bio,
                    location: userInfo.location,
                    image: userInfo.avatar_url
                }
            );
        })
    }

    render() {

        return (
            <div className="UserInfo">
                {/* <img src={this.state.image} alt={this.state.user} /> */}
                <h1>{this.state.name}</h1>
                <h2>{this.state.description}</h2>
            </div>
        )

    }

}