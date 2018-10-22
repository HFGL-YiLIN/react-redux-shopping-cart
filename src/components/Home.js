import React from 'react';
import { Image, Button, Icon, Divider } from 'semantic-ui-react';
import { TimelineLite, CSSPlugin } from "gsap/all";

import NavHome from './NavHome.js';

import './home.css';
import './mediaQuery.css';
import logo from '../static/img/logo.png';

class Home extends React.Component {

    constructor() {
        super();

        this.timeline = new TimelineLite({ paused: false });

        this.overlay = null;
        this.navHome = null;
        this.titile = null;
        this.text = null;

    }

    // add instances to the timeline
    componentDidMount() {
        this.timeline
            .to(this.overlay, 2, { css: { backgroundColor: 'rgba(0, 0, 0, 0.75)' }, autoAlpha: 0, ease: Expo.easeIn })
            .to(this.navHome, 0.3, { css: { top: '10px', opacity: 1 }, autoAlpha: 0, ease: Power0.easeIn })
            .to(this.titile, 0.3, { css: { y: 70, opacity: 1 }, autoAlpha: 0, ease: Power0.easeIn })
            .to(this.text, 0.3, { css: { y: 10, opacity: 1 }, autoAlpha: 0, ease: Power0.easeIn });
    }


    render() {
        return (


                <div id='home'>
                    <div className='overlay' ref={div => this.overlay = div}>
                        <div className='navHome' ref={div => this.navHome = div}>
                            <NavHome />
                        </div>
                        <div className='hItems' ref={div => this.titile = div}>
                            <div className='logoText'>
                                <h1>looking for movies</h1>
                                <Divider className='dividerHome' horizontal>
                                <Icon name='heart outline' />
                                </Divider> 
                                <h1 className='thinTitle'>looking for fun</h1>
                            </div>
                        </div>
                        <div className='hItems' ref={div => this.text = div}>
                            <div className='logoText'>
                                <h2 className='thinTitle'>A react-redux movie shopping cart demo.</h2>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Home;