import { compose, withProps, lifecycle } from "recompose";

//the purpose here is to take the components and group it by section or rather category
function component_categories_create_from_components_categories({ categories_data, components_data }) {
  //group the categories data by id so i can get the name of it
  const category_object = array_groupby_flat(categories_data, "id");
  const components_with_category = _.map(components_data, function(D) {
    const category_id = D.categories[0];
    const category_object_selected = category_object[category_id] || {};
    const category = category_object_selected["name"];
    return { ...D, category };
  });
  return components_with_category;
}

export const EnhancerWithProps = withProps(props => {
  //get the categories data
  const categories_data = props.wordpress.categories.data;
  //get the components data
  const components_data = props.wordpress.components.data;
  const components = component_categories_create_from_components_categories({ categories_data, components_data });

  //create object so i can get each of the sections easily
  const sections_obj = _.groupBy(components, "category");
  const with_props_state = {
    ...sections_obj,
    components,
    props
  };
  return with_props_state;
});
