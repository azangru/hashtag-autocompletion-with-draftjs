import React, {Component} from 'react';
import { Link } from 'react-router';
import DescriptionField from '~/components/hashtag_autocompletion_field';

export class Uploader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Это страница загрузчика
                <Link to={'/'}>На витрину</Link>
                <DescriptionField />
            </div>
        );
    }
}


export default Uploader;
