import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    // READ all post from table
    const fetchPosts = async () => {
        const { data } = await supabase
            .from('Posts')
            .select();

        // set state of posts
        setPosts(data)
    }

    useEffect(() => {
        fetchPosts();
    }, [props]);

    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;