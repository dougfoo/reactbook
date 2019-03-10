import React from 'react';
import './App.css';

export const SearchF = ({ value, onChange, onSubmit, children }) => {
    return (
        <div className="Search2">
            <form onSubmit={onSubmit}>
            <b>Search Func</b>
                <input type="text" value={value} 
                       onChange={onChange} />
                <button type="submit">
                    {children}
                </button>
            </form>
        </div>
    );        
}

/*
class Search extends Component {
    render() {
        const { value, onChange, onSubmit, children } = this.props;
        return (
            <div className="Search">
                <form onSubmit={onSubmit}>
                Search Form
                    <input type="text" value={value} onChange={onChange} />
                    {children}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
*/

export default SearchF;
