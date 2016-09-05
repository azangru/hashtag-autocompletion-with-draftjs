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
                This is a page containing a field with hashtags autocompletion <br />
                <Link to={'/'}>Go back to the main page</Link>
                <DescriptionField />
            </div>
        );
    }
}


export default Uploader;
