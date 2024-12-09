import React, {Component} from 'react';

import SendMailStyle from '../Styles/HomeStyle.css';
import DropdownMenu from "./DropdownMenu";
class Home extends Component {
    render() {
        return (
            <div className={"main-div"}>
               <h1 className={"glowing-text-dynamic"}> שלום רחל</h1>
                <div>
                    <DropdownMenu/>
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
