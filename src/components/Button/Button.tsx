import * as React from "react";

import * as styles from "./Button.scss";

export interface Props {
  onClick(): void;
}

export default class Button extends React.PureComponent<Props, {}> {
  render() {
    const { onClick, children } = this.props;

    return (
      <button type="button" className={styles.Button} onClick={onClick}>
        {children}
      </button>
    );
  }
}
