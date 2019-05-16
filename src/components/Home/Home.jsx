import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import Search from '../Search/Search'
import RepositoriesList from '../RepositoriesList/RepositoriesList'

export default () =>

    (
        <React.Fragment>
            <UserInfo />
            <Search />
            <RepositoriesList />
        </React.Fragment>
    )
    