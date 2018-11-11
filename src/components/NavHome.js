import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Header, Icon, Segment, Button, Image, Menu } from 'semantic-ui-react';
import { deleteFromCart, updateItemUnits } from '../actions/cartActions';

import logo from '../static/img/logo.png';
import './navhome.css';

// route location 
const locationHome = {
    pathname: '/',
    state: { fromDashboard: true }
};

const locationProducts = {
    pathname: '/products',
    state: { fromDashboard: true }
};



class NavHome extends Component {
    render() {
        return (
            <div id="navhome">

                {/* <Segment clearing vertical>
                    <Link to={locationHome}>
                        <Header as='h2' image={logo} />
                    </Link>
                    <Header as='h2' >
                        <Link to={locationProducts}>
                            <Button className='logoBtn' color='pink' animated>
                                <Button.Content visible>BUY BUY BUY</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                        </Link>
                    </Header>
                </Segment> */}
                <nav>
                    {/* <Header as='h2'>
                        <Link to={locationHome}>
                            <Image className='logoImg' src={logo} />
                        </Link>
                        <Link to={locationProducts}>
                            <span className='logoBtn'>
                                <Button color='pink' animated>

                                    <Button.Content visible><Icon name="star" /> BUY BUY BUY</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Button>
                            </span>
                        </Link>
                    </Header> */}

                    <Menu className='zeromargin' text fluid widths={2} >
                        <Menu.Item>
                            <Link to={locationHome}>
                                <Image className='logoImg' src={logo} />
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={locationProducts}>
                                <span className='logoBtn'>
                                    <Button color='pink' animated>

                                        <Button.Content visible><Icon name="star" /> MORE</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='arrow right' />
                                        </Button.Content>
                                    </Button>
                                </span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </nav>
            </div>
        );
    }
}

export default NavHome;