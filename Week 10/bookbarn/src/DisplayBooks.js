
import { Component } from "react";


class DisplayBooks extends Component {


    render() {

        const books = this.props.books
        const bookList = books.map((book) => {
            let partURL = book.imageLink
            let fullURL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/' + partURL
            return <div className='oneBook'>
                <p>{book.year}</p> 
                <p> <img className='image' src={fullURL} alt={book.title}/></p>
                <p> {book.title}</p>
                <p>{book.author}</p>
                <p><a href={book.link}>More Info</a></p>

            </div>
        })

return (
<div>
 <h1>Top 100 Books</h1>
 <div className="books">
{bookList}

 </div>

</div>


)
    }
}

export default DisplayBooks