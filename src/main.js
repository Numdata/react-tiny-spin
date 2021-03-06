import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'spin.js';

class ReactSpinner extends PureComponent {
  static propTypes = {
    config: PropTypes.object,
    stopped: PropTypes.bool
  };

  componentDidMount() {
    this.spinner = new Spinner(this.props.config);
    if (!this.props.stopped) {
      this.spinner.spin(this.container);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.stopped === true && !prevProps.stopped) {
      this.spinner.stop();
    } else if (!this.props.stopped && prevProps.stopped === true) {
      this.spinner.spin(this.container);
    }
  }

  componentWillUnmount() {
    this.spinner.stop();
  }

  render() {
    return (
      <span ref={container => this.container = container} />
    );
  }
}

export default ReactSpinner;
