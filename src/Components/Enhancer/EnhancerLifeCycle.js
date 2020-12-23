import { lifecycle } from "recompose";

export const EnhancerLifeCycle = lifecycle({
  componentDidMount() {
    console.log({ component_did_mount_props: this.props });
    // this.props.updateWordpressPosts();
    this.props.updateWordpressPages();
    this.props.updateWordpress("components");
    this.props.updateWordpress("categories");
    // this.props.updateWordpress("users");
  }
});
