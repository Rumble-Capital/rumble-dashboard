import { lifecycle } from "recompose";

export const BlogLifeCycle = lifecycle({
  componentDidMount() {
    this.props.updateWordpress("posts");
  }
});
