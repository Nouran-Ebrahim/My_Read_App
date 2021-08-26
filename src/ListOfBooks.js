import React from 'react'
//import { render } from 'react-dom'

class ListOfBooks extends React.Component {

    render() {
        let displayImg=this.props.books.imageLinks?this.props.books.imageLinks.smallThumbnail:''
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${displayImg}")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(e) => this.props.change(this.props.books, e.target.value)} value={this.props.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.books.title}</div>
                <div className="book-authors">{this.props.books.authors}</div>
            </div>


        )
    }
}

export default ListOfBooks;


