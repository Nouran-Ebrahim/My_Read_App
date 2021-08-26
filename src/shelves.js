import React from 'react'
import PropTypes from 'prop-types';
import ListOfBooks from './ListOfBooks'
class Shelves extends React.Component{
  static proptypes={
    allBooks:PropTypes.array.isRequired,
    change:PropTypes.func.isRequired
}
    render(){
        const AllBooks =this.props.allBooks;
        return(
          <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    AllBooks.filter((book)=>(book.shelf==="currentlyReading")).map((book)=>(
                      <li key={book.id}>
                      <ListOfBooks books={book} change={this.props.change}  shelf="currentlyReading"></ListOfBooks>
              
                      </li>
                    ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {AllBooks.filter((book)=>(book.shelf==="wantToRead")).map((book)=>(
                  <li key={book.id}>
                  <ListOfBooks books={book} change={this.props.change}  shelf="wantToRead"></ListOfBooks>
                  </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {AllBooks.filter((book)=>(book.shelf==="read")).map((book)=>(
                <li key={book.id}>
                <ListOfBooks books={book} change={this.props.change}  shelf="read" ></ListOfBooks>
                </li>
                  ))}
  
                </ol>
              </div>
              </div>
              </div>
              </div>
              
        )
    }
}
export default Shelves;