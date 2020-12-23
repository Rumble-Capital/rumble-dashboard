//this used to be for aesop
//var url_ip_domain = "http://45.79.157.168";
var url_ip_domain = "http://45.79.128.234";

//i just want certain key names to be certain things.
//title should be a string insetad of an object
function wordpress_response_item_structure(item) {
  return {
    ...item,
    title: item.title_rendered || null,
    content: item.content_rendered || null
    //featured_image_url
  };
}

//the below function posts
function wordpress_post_with_authentication() {
  $.ajax({
    type: "POST",
    url: url_ip_domain + "/?rest_route=/wp/v2/posts/5",
    headers: {
      Authorization: "Basic " + btoa("aesop" + ":" + WORDPRESS_APPLICATION_PASSWORD)
    },
    dataType: "json",
    async: false,
    data: {
      title: "NEWWWW TITLE"
    }
  });
}

//below shows you an example query
//http://thisismywebsitewherewordpresslives.com/wp-json/posts?filter[posts_per_page]=2&fiter[category_name]=Some Category Name I want to query&filter[order]=ASC
//https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
//purpose of this function is to query wordpress

function wordpress_query_request(table_name) {
  return $.ajax({
    type: "GET",
    url: url_ip_domain + "/?rest_route=/wp/v2/" + table_name,
    dataType: "json",
    async: false,
    data: { per_page: 100 }
  });
}

function wordpress_query_request_post(post_id) {
  var rest_url = url_ip_domain + "/?rest_route=/wp/v2/posts/" + String(post_id);
  console.log({ rest_url });
  return $.ajax({
    type: "GET",
    url: rest_url,
    dataType: "json",
    async: false
  });
}

//objective below is to create a new user
function create_wordpress_user(user_dict) {
  return $.ajax({
    type: "POST",
    url: url_ip_domain + "/?rest_route=/wp/v2/users/",
    headers: {
      Authorization: "Basic " + btoa("aesop" + ":" + WORDPRESS_APPLICATION_PASSWORD)
    },
    dataType: "json",
    async: false,
    data: user_dict
  });
}

//this is just to make it eaiser
export function createWordpressUser(user_dict) {
  return {
    type: "UPDATE_WORDPRESS_USER",
    payload: create_wordpress_user(user_dict).then(response => {
      return {
        response: response,
        timestamp: moment().format(),
        data: response
      };
    })
  };
}

//this restructures the response from wordpress in a favorable way
function wordpress_response_structure(response) {
  //array_dictionary_flatten is used below to convert each item in an array to a flatter array
  const flattened_array = array_dictionary_flatten(response);
  const formatted_array = _.map(flattened_array, wordpress_response_item_structure);
  return formatted_array;
}
//updates a post id
export function updateWordpressPost(post_id) {
  return {
    type: "UPDATE_WORDPRESS_POST",
    payload: wordpress_query_request_post(post_id).then(response => {
      return {
        response: response,
        timestamp: moment().format(),
        data: dictionary_flatten(response)
      };
    })
  };
}

//this is just to make it eaiser
export function updateWordpress(table_name) {
  return {
    type: "UPDATE_WORDPRESS_" + table_name.toUpperCase(),
    payload: wordpress_query_request(table_name).then(response => {
      return {
        response: response,
        timestamp: moment().format(),
        data: wordpress_response_structure(response)
      };
    })
  };
}

const post_example = {
  id: 5,
  date: "2019-05-12T23:17:40",
  date_gmt: "2019-05-12T23:17:40",
  guid: { rendered: "http://45.79.157.168/?p=5" },
  modified: "2019-05-12T23:17:40",
  modified_gmt: "2019-05-12T23:17:40",
  slug: "second-test",
  status: "publish",
  type: "post",
  link: "http://45.79.157.168/?p=5",
  title: { rendered: "Second Test" },
  content: { rendered: "\n<p>Second Test Content</p>\n", protected: false },
  excerpt: { rendered: "<p>Second Test Content</p>\n", protected: false },
  author: 1,
  featured_media: 0,
  comment_status: "open",
  ping_status: "open",
  sticky: false,
  template: "",
  format: "standard",
  meta: [],
  categories: [1],
  tags: [],
  _links: {
    self: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/posts/5" }],
    collection: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/posts" }],
    about: [{ href: "http://45.79.157.168/index.php?rest_route=/wp/v2/types/post" }],
    author: [{ embeddable: true, href: "http://45.79.157.168/index.php?rest_route=/wp/v2/users/1" }],
    replies: [{ embeddable: true, href: "http://45.79.157.168/index.php?rest_route=%2Fwp%2Fv2%2Fcomments&post=5" }],
    "version-history": [{ count: 1, href: "http://45.79.157.168/index.php?rest_route=/wp/v2/posts/5/revisions" }],
    "predecessor-version": [{ id: 6, href: "http://45.79.157.168/index.php?rest_route=/wp/v2/posts/5/revisions/6" }],
    "wp:attachment": [{ href: "http://45.79.157.168/index.php?rest_route=%2Fwp%2Fv2%2Fmedia&parent=5" }],
    "wp:term": [
      { taxonomy: "category", embeddable: true, href: "http://45.79.157.168/index.php?rest_route=%2Fwp%2Fv2%2Fcategories&post=5" },
      { taxonomy: "post_tag", embeddable: true, href: "http://45.79.157.168/index.php?rest_route=%2Fwp%2Fv2%2Ftags&post=5" }
    ],
    curies: [{ name: "wp", href: "https://api.w.org/{rel}", templated: true }]
  }
};
//The below function pulls the posts
export function updateWordpressPosts(key) {
  return {
    type: "UPDATE_WORDPRESS_POSTS",
    payload: $.ajax({
      type: "GET",
      url: url_ip_domain + "/?rest_route=/wp/v2/posts",
      dataType: "json",
      async: false
    }).then(response => {
      console.log({ response });
      return {
        response: response,
        timestamp: moment().format(),
        data: response
      };
    })
  };
}
//The below function pulls the blocks
export function updateWordpressBlocks(key) {
  return {
    type: "UPDATE_WORDPRESS_BLOCKS",
    payload: $.ajax({
      type: "GET",
      url: url_ip_domain + "/?rest_route=/wp/v2/blocks",
      dataType: "json",
      async: false
    }).then(response => {
      console.log({ response });
      return {
        response: response,
        timestamp: moment().format(),
        data: response
      };
    })
  };
}
//The below function pulls the pages
export function updateWordpressPages(key) {
  return {
    type: "UPDATE_WORDPRESS_PAGES",
    payload: $.ajax({
      type: "GET",
      url: url_ip_domain + "/?rest_route=/wp/v2/pages",
      dataType: "json",
      async: false
    }).then(response => {
      console.log({ response });
      return {
        response: response,
        timestamp: moment().format(),
        data: response
      };
    })
  };
}

//The below function pulls the media
export function updateWordpressMedia(key) {
  return {
    type: "UPDATE_WORDPRESS_MEDIA",
    payload: $.ajax({
      type: "GET",
      url: url_ip_domain + "/?rest_route=/wp/v2/media",
      dataType: "json",
      async: false
    }).then(response => {
      console.log({ response });
      return {
        response: response,
        timestamp: moment().format(),
        data: response
      };
    })
  };
}
