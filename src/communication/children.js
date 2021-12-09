import React from 'react'

export default function ChildrenComponent(props) {
    return (
        <div>
            <h3>Children</h3>
            {props.children} 
            {/* props.children là syntax. Nếu dùng class là this.props.children */}
            
        </div>
    )
}
