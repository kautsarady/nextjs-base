import PropTypes from 'prop-types';
import 'src/styles/global.scss';

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

CustomApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default CustomApp;
