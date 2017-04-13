import React from 'react';

const Post = (props) => (
    <div className="panel panel-default post-body">
        <div className="panel-body">
            {
              props.postBody.map((postPart, idx) => (
                <div key={idx}>{postPart}</div>
              ))
            }
        </div>
    </div>
);

export default Post;