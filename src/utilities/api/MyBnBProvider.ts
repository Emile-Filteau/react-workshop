import * as React from "react";
import * as PropTypes from "prop-types";

import MyBnB from "./MyBnB";

export default class ApiProvider extends React.Component<{}, {}> {
  static childContextTypes = {
    client: PropTypes.object
  };

  client: MyBnB;

  constructor(props: {}) {
    super(props);
    this.client = new MyBnB();
  }

  getChildContext() {
    const { client } = this;

    return {
      client
    };
  }

  render() {
    return this.props.children;
  }
}
