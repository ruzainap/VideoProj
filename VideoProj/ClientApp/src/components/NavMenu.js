import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserLogin } from './UserLogin';



import './NavMenu.css';
import { Header, Icon, Segment } from 'semantic-ui-react'
import { VideoList } from './VideoList';

export class NavMenu extends Component {
    static displayName = NavMenu.name;



    render() {
        return (
            <div>
            <Segment clearing>
                <Header as='h2' floated='left'>
                    <Icon name='home' />
                    <Header.Content>Funny Movies</Header.Content>

                </Header>
                 <Header as='h4' floated='right'> <UserLogin /></Header>
              
            </Segment>
            <VideoList />
            </div>

        );
    }
}
