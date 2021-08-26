import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListOfBooks from './ListOfBooks'
import PropTypes from 'prop-types';
class Search extends React.Component {
    static proptypes={
        allBooks:PropTypes.array.isRequired,
        change:PropTypes.func.isRequired
    }
    state = {
        query: '',
        books: [],
        found: true
    }
    updatequery = (query) => {
        this.setState(() => (
            {
                query: query
            }))
        this.onSearching(query)
    }
    onSearching = (query) => {
        if (query) {
            BooksAPI.search(query).then((responce) => {
                if (responce.length > 0) {
                   
                    this.setState({
                        books: responce,
                        found: true
                    })
                }
                else {
                    this.setState({
                        books: [],
                        found: false,

                    })
                }

            })
        } else {
            console.log('empty input')
            this.setState({
                books: [],
                found: true,
                query: ''
            })
        }
    }

    render() {
        console.log(this.state.books)
        return (
            
            <div className="search-books">

                <div className="search-books-bar">
                    <Link to='/'><button className="close-search" >Close</button></Link>

                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title or author"
                            value={this.state.query} onChange={(e) => this.updatequery(e.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.query === '' ? <div>empty input</div> : (

                        this.state.books.length > 0 ?
                        (<ol className="books-grid">
                            {
                                this.state.books.map((srearchedbook)=>{
                                    let shelf='none';
                                this.props.allBooks.map((book)=>(
                                   book.id===srearchedbook.id?shelf= book.shelf :''
                                ))
                                return (
                                <li key={srearchedbook.id}>
                                <ListOfBooks books={srearchedbook} change={this.props.change} shelf={shelf}></ListOfBooks>
                                </li>
                                )
                                }
                                )
                            
                            }
                            

                        </ol>
                        ): <div>No Books Avialable</div>
                    )

                    }
                

                </div>
            </div>

        )
    }
}
export default Search;