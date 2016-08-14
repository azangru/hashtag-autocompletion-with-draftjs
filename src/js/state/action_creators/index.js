import * as types from '../constants/ActionTypes';

export function sayHello() {
    return {
        type: types.GREET,
        payload: {message: "Hello world!"}
    };
}
