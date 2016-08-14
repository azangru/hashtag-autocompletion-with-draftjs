import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '~/state/action_creators';

function mapStateToProps(state) {
    return {
        greeting: state.greetingReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        greetingActions: bindActionCreators(Actions, dispatch),
    };
}


export class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.greetingActions.sayHello();
    }

    render() {
        return (
            <div>
                {this.props.greeting.message}
                {this.props.children}
            </div>
        );
    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
