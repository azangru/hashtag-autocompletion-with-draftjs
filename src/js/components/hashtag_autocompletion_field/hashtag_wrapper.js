import React, {Component} from 'react';

class HashtagWrapper extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        // this.props.updateCoordinates(this.wrapperElement.getBoundingClientRect());
        this.props.updateCoordinates(this.props.offsetKey, {top: this.wrapperElement.offsetTop, left: this.wrapperElement.offsetLeft});
    }

    componentDidUpdate() {
        // this.props.updateCoordinates(this.wrapperElement.getBoundingClientRect());
        this.props.updateCoordinates(this.props.offsetKey, {top: this.wrapperElement.offsetTop, left: this.wrapperElement.offsetLeft});
    }

    render() {
        // every re-render, update ref coordinates
        return (
            <span
                ref={(ref) => this.wrapperElement = ref}
                style={styles.hashtag}>
                    {this.props.children}
            </span>
        );
    }

}

const styles = {
    hashtag: {
        color: 'rgba(95, 184, 138, 1.0)',
    },
};


export default HashtagWrapper;
