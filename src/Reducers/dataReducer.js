const dataInitialState = {
  recurring_tasks: { error: false, succes: false, loading: false },
  toggl: { error: false, succes: false, loading: false, data: [] }
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
    .replace("UPDATE_DATA_", "")
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
  return action_type_string.indexOf("UPDATE_DATA_") > -1;
}
export const dataReducer = (state = dataInitialState, action) => {
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
