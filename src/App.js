import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './shelves'
import SearchButton from './SearchButton'
import Search from './Search';
import Header from './Header'
import { Route } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    books: [],

  }
 async componentDidMount() {
   const books= await BooksAPI.getAll();
     
        this.setState({
          books: books
        })


     
  }
  handleshelves = (book, shelf) => {
    this.setState({
      books : this.state.books.map((b)=>{
        if(b.id===book.id){
           b.shelf=shelf
        }
        return b
      })

    })

      BooksAPI.update(book, shelf)
  }



  render() {
    return (
      <div className="app">

        <div className="list-books">
          {console.log(this.state.books)}
          <Route exact path='/' component={Header}></Route>
          <Route exact path='/' render={() => (
            <Shelves allBooks={this.state.books} change={this.handleshelves}></Shelves>
          )
          }></Route>
        </div>
        <Route exact path='/' component={SearchButton}></Route>

        <Route exact path='/search' render={() => (
          <Search allBooks={this.state.books} change={this.handleshelves} ></Search>
        )}></Route>

      </div>
    )
  }

}



export default BooksApp
