# ReactMomentProptypes Browser Build

A simple [Webpack] bundled version of [react-moment-proptypes].

## Caveats
This is a simple non-minified bundle that is currently used to simplify browser-based testing.

I don't recommend directly using in production.

## Example
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example ReactMomentProptypes</title>
  </head>
  <body>
    <!-- React root element to render -->
    <div id="render-root"></div>

    <!-- `react` Imports -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

    <!-- Specific `moment` Imported -->
    <script src="./node_modules/moment/min/moment.min.js"></script>

    <!-- Proptypes Import -->
    <script src="./lib/react-moment-proptypes.js"></script>

    <script>
      class MomentObj extends React.Component {
        render() {
          return React.createElement('h1', null, 'Current UTC: ' + this.props.dateThing.toString());
        }
      }
      MomentObj.propTypes = {
        dateThing : ReactMomentProptypes.momentObj,
      };
      ReactDOM.render(
          React.createElement(MomentObj, { dateThing : moment.utc() }),
          document.getElementById('render-root')
      );
    </script>
  </body>
</html>
```


[_]: #Links
[Webpack]: https://webpack.js.org
[react-moment-proptypes]: https://www.npmjs.com/package/react-moment-proptypes
