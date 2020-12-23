import {
  updateWordpressPosts,
  updateWordpressPost,
  updateWordpressPages,
  updateWordpress,
  createWordpressUser
} from "../../Actions/updateWordpress";

//the below dispatches the actions of getting wordpress data and updating the reducer state
export const mapDispatchToProps = dispatch => {
  return {
    updateWordpressPosts: () => {
      dispatch(updateWordpressPosts());
    },
    updateWordpressPages: () => {
      dispatch(updateWordpressPages());
    },
    updateWordpress: table_name => {
      dispatch(updateWordpress(table_name));
    },
    createWordpressUser: user_dict => {
      dispatch(createWordpressUser(user_dict));
    },
    updateWordpressPost: post_id => {
      dispatch(updateWordpressPost(post_id));
    }
  };
};
