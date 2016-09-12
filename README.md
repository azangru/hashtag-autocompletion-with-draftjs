This is just an exercise for getting to know Draft.js editor by creating a text field component capable of providing suggestions for hashtag autocompletion.

The component reacts to a text fragment that starts with a hash (#) by opening a popup menu with 10 suggestions fetched from the Wikipedia API. When selected, a suggestion will replace the beginning of the hash tag that triggered the opening of the popup menu. A suggestion can be selected by clicking on it with a mouse or by pressing up or down arrow keys and then pressing Enter. Here is a [demo](https://azangru.github.io/hashtag-autocompletion-with-draftjs/).

To run the project, execute the following commands:

- `npm install`
- `npm start` (that command starts Webpack that bundles source files and watches the build)
- (in another terminal window) `npm run start-server` (that will start Webpack Development Server)
- navigate to localhost:8080

The code for the component is in `src/js/components/hashtag_autocompletion_field` folder. Most of the rest of the code is just boilerplate fluff I mindlessly copied from another project.

My oral commentary about this project is [here](https://youtu.be/K9wHt1pIUUI)

*Acknowledgements:*
- My code borrows shamelessly from the draft-js-plugins project, specifically from its [Mention plugin](https://github.com/draft-js-plugins/draft-js-plugins/tree/master/draft-js-mention-plugin). I wouldn’t be able to figure out how to do anything useful with Draft.js without heavily perusing their source code.
