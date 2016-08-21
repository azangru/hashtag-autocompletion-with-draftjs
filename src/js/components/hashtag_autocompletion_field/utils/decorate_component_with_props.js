/**
* A helper method. Copied from the decorateComponentWithProps repository:
* https://github.com/belle-ui/decorateComponentWithProps/blob/master/src/index.js
**/

import React, { Component } from 'react';

const getDisplayName = (WrappedComponent) => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

export default (EmbeddedComponent, props) => (class extends Component {

    static displayName = `Decorated(${getDisplayName(EmbeddedComponent)})`;

    render() {
        return (
            <EmbeddedComponent { ...this.props } { ...props } />
        );
    }
});
