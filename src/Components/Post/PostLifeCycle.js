import { lifecycle } from "recompose";

export const PostLifeCycle = lifecycle({
  componentDidMount() {
    const post_id = document.URL.split("/")[document.URL.split("/").length - 1];
    //this.props.match.params.id;
    this.props.updateWordpress("posts");
    this.props.updateWordpressPost(post_id);
  }
});
