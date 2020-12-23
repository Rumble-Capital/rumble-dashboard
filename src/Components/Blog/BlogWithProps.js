import { compose, withProps, lifecycle } from "recompose";

export const BlogWithProps = withProps(props => {
  //get the categories data
  const posts = props.wordpress.posts.data;
  const split_features = _.map(posts, function(D) {
    return { title: D.title || "", url: "/post/" + D.id };
  });
  const with_props_state = {
    posts,
    split_features,
    props
  };
  return with_props_state;
});
