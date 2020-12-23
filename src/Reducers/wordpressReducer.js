//http://45.79.157.168/?rest_route=/wp/v2/posts

const dataInitialState = {
  posts: { error: false, succes: false, loading: false, data: [] },
  pages: { error: false, succes: false, loading: false, data: [] },
  components: { error: false, succes: false, loading: false, data: [] },
  categories: { error: false, succes: false, loading: false, data: [] },
  users: { error: false, succes: false, loading: false, data: [] },
  user: { error: false, succes: false, loading: false, data: [] },
  post: { error: false, succes: false, loading: false, data: [] }
};

const updateDataReducerHelperFunction = (state, urlKey, error, success, loading, payload) => {
  console.log({ state, urlKey, error, success, loading, payload });
  return {
    ...state,
    [urlKey]: {
      ...state[urlKey],
      error,
      success,
      loading,
      ...payload
    }
  };
};

function node_name_get(action_type_string) {
  return action_type_string
    .replace("UPDATE_WORDPRESS_", "")
    .replace("_PENDING", "")
    .replace("_FULFILLED", "")
    .replace("_REJECTED", "")
    .toLowerCase();
}

function promise_status_get(action_type_string) {
  return action_type_string.split("_")[action_type_string.split("_").length - 1];
}
//determine if it is UPDATE_DATA reducer
function data_reducer_determine(action_type_string) {
  return action_type_string.indexOf("UPDATE_WORDPRESS_") > -1;
}
export const wordpressReducer = (state = dataInitialState, action) => {
  const node_name = node_name_get(action.type);
  const promise_status = promise_status_get(action.type);
  const is_data_reducer = data_reducer_determine(action.type);

  if (is_data_reducer) {
    console.log({
      is_data_reducer: is_data_reducer,
      node_name: node_name,
      promise_status: promise_status,
      action: action,
      action_type: action.type
    });
    switch (promise_status) {
      case "PENDING":
        return updateDataReducerHelperFunction(state, node_name, false, false, true);
      case "FULFILLED":
        return updateDataReducerHelperFunction(state, node_name, false, true, false, action.payload);
      case "REJECTED":
        return updateDataReducerHelperFunction(state, node_name, true, false, false, action.payload);
      default:
        return state;
    }
  } else {
    return state;
  }
};

// const dataInitialState = {
//   posts: { error: false, succes: false, loading: false, data: [] }
// };

// export const wordpressReducer = (state = dataInitialState, action) => {
//   switch (action.type) {
//     case "UPDATE_WORDPRESS_POSTS_PENDING":
//       return {
//         ...state,
//         posts: {
//           ...state["posts"],
//           error: false,
//           success: false,
//           loading: true
//         }
//       };
//     case "UPDATE_WORDPRESS_POSTS_FULFILLED":
//       return {
//         ...state,
//         posts: {
//           ...state["posts"],
//           error: false,
//           success: true,
//           loading: false,
//           ...action["payload"]
//         }
//       };
//     case "UPDATE_WORDPRESS_POSTS_REJECTED":
//       return {
//         ...state,
//         posts: {
//           error: true,
//           success: false,
//           loading: false
//         }
//       };

//     default:
//       return state;
//   }
// };
