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

export const LandingWithProps = withProps(props => {
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
const example_category_dict = [
  {
    id: 2,
    count: 1,
    description: "",
    link: "http://45.79.157.168/?cat=2",
    name: "navbar_tabs",
    slug: "navbar_tabs",
    taxonomy: "category",
    parent: 0,
    meta: [],
    title: null,
    content: null
  }
];
const example_props = {
  components: {
    error: false,
    succes: false,
    loading: false,
    data: [
      {
        id: 135,
        slug: "first-component",
        status: "publish",
        type: "components",
        link: "http://45.79.157.168/?components=first-component",
        title: { rendered: "First Component" },
        content: { rendered: "\n<p>Component Body</p>\n", protected: false },
        featured_media: 0,
        template: "",
        section: "tabs",
        _links: {
          self: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/components/135" }],
          collection: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/components" }],
          about: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/types/components" }],
          "wp:attachment": [{ href: "http://45.79.157.168/index.php?rest_route=%2Fwp%2Fv2%2Fmedia&parent=135" }],
          curies: [{ name: "wp", href: "https://api.w.org/{rel}", templated: true }]
        }
      }
    ],
    success: true,
    response: [
      {
        id: 135,
        slug: "first-component",
        status: "publish",
        type: "components",
        link: "http://45.79.157.168/?components=first-component",
        title: { rendered: "First Component" },
        content: { rendered: "\n<p>Component Body</p>\n", protected: false },
        featured_media: 0,
        template: "",
        section: "tabs",
        _links: {
          self: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/components/135" }],
          collection: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/components" }],
          about: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/types/components" }],
          "wp:attachment": [{ href: "http://45.79.157.168/index.php?rest_route=%2Fwp%2Fv2%2Fmedia&parent=135" }],
          curies: [{ name: "wp", href: "https://api.w.org/{rel}", templated: true }]
        }
      }
    ],
    timestamp: "2019-05-26T09:25:21-04:00"
  }
};
