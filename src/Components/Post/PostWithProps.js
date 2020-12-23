import { compose, withProps, lifecycle } from "recompose";



//get the blog post data
export const PostWithProps = withProps(props => {
    //get all the posts
    const posts = props.wordpress.posts.data;
    //get the post id
    const post_id = props.match.params.id;
    const post_data = props.wordpress.post.data;
    const title = post_data.title_rendered || ""
    const edit_link = `http://45.79.128.234/wp-admin/post.php?post=${post_data.id}&action=edit`
    const content = post_data.content_rendered || ""
    //format the date
    const modified_date = moment(post_data.modified).format("MMM DD (ddd) - h:mma") //moment_nice_format(post_data.modified)
   //get the word count
    const word_count = content.split(" ").length;
    //calculate read teime
    const read_time = (word_count/200).toFixed(1) //assuming person reads on average 200 per minutes
    //convert the keys to content and title
    const with_props_state = {
        title,
        content,
        posts,
        post_id,
        props,
        modified_date,
        post_data,
        word_count,
        read_time,
        edit_link
    };
    console.log({with_props_state})
    return with_props_state;
});
