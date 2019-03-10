import React, { Component } from 'react';

// function isSearched(searchTerm) {
//     return function (item) {
//         return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     }
// }

class Table extends Component {
    render() {
        const { list } = this.props;
        return (
            <div className="table">
                {list.map(item =>
                    <div key={item.objectID}>
                        <span>{item.objectID}</span> - 
                        <span><a href={item.url}>{item.title}</a></span>
                    </div>
                )}
            </div>
        );
    }
}
export default Table;