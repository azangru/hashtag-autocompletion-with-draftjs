import React, {Component} from 'react';
import { Link } from 'react-router';

export class Uploader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Это страница витрины
                <Link to={'/uploader'}>На страницу загрузчика</Link>
            </div>
        );
    }
}


export default Uploader;
