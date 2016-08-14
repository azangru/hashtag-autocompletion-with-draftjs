import React, {Component} from 'react';
import { Link } from 'react-router';

export class Uploader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Это страница загрузчика
                <Link to={'/'}>На витрину</Link>
            </div>
        );
    }
}


export default Uploader;
