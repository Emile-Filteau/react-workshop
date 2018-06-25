import * as React from "react";
import * as PropTypes from "prop-types";

export interface WithListingsProps {
  listings: any;
}

interface State {
  listings?: any;
}

export default function withListings<OwnProps>(
  WrappedComponent: React.ComponentClass<WithListingsProps & OwnProps>
): React.ComponentClass<OwnProps> {
  return class WithListings extends React.PureComponent<
    WithListingsProps & OwnProps,
    State
  > {
    static displayName = `withListings(${WrappedComponent.displayName ||
      WrappedComponent.name})`;
    static WrappedComponent = WrappedComponent;
    static contextTypes = {
      client: PropTypes.object
    };

    constructor(props: WithListingsProps & OwnProps) {
      super(props);
      this.state = { listings: null };
    }

    componentDidMount() {
      const { client } = this.context;
      client.getListings().then((listings: any) => {
        this.setState({ listings });
      });
    }

    render() {
      return (
        <WrappedComponent listings={this.state.listings} {...this.props} />
      );
    }
  };
}
