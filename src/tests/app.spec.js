import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { App } from '~/app.jsx';

describe('<App />', () => {

    let minimalProps;

    beforeEach(() => {
        minimalProps = {
            greetingActions: {
                sayHello: () => {}
            },
            greeting: {
                message: ''
            }
        };
    });

    it('renders', () => {
        let shallowRenderedComponent = shallow(<App {...minimalProps} />);
        expect(shallowRenderedComponent.length).to.equal(1);
    });

});
