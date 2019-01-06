import React from 'react';

const tagx = {
    marginLeft: '5px'
  };

export default ({tags})=>(
    <div>
        {tags.map(tag=> <span key={tag} className="badge badge-secondary tags" 
            style={tagx}>{tag}</span>)}
    </div>
)