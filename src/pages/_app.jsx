import PropTypes from 'prop-types';
import 'src/styles/global.scss';

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

CustomApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default CustomApp;
