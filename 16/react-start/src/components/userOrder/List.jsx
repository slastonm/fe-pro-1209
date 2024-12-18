import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

List.propTypes = {
    
};

function List(props) {
    return (
        <div className='container'>
            <div className="row">
                <h3>
                    Component List
                </h3>
            </div>
            <div className="row">
                {
                    props.users.map((userInfo, index)=>{
                        return <User 
                        key={index} 
                        index={index} 
                        user={userInfo.user}
                        skills={userInfo.skills}
                        order={userInfo.order}></User>
                    })
                }
            </div>
        
    </div>
    );
}

export default List;