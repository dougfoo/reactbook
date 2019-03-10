import React from 'react';
import './App.css';

export const SearchF = ({ value, onChange, onSubmit, children }) => {
    let input;  // for input focus --- but no mount in function so this does'nt work....  use below?
    return (
        <div className="Search2">
            <form onSubmit={onSubmit}>
            <b>Search Func</b>
                <input type="text" value={value} 
                       onChange={onChange} 
                       ref={el => input = el} />
                <button type="submit">
                    {children}
                </button>
            </form>
        </div>
    );        
}

/*
class Search extends Component {
    componentDidMount() {
        if (this.input) {
            this.input.focus();
        }
    }
    render() {
        const { value, onChange, onSubmit, children } = this.props;
        return (
            <div className="Search">
                <form onSubmit={onSubmit}>
                Search Form
                    <input type="text" value={value} onChange={onChange}  
                        ref={el => this.input = el} />
                    {children}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
*/

export default SearchF;
