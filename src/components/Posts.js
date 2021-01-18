import React from 'react';

const Posts = (props) => {
     
    const RenderPost = () => {
        
        return props.posts.map((post, index) => { 
            return (
                <tr key={index} style={{color: index%2 === 0 ? 'red' : ''}}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )
        })
        
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderPost />
                </tbody>
            </table>
        </div>
    )
}

export default Posts;