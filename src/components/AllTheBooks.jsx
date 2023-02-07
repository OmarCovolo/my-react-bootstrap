
import fantasy from '../books/fantasy.json';
import Card from 'react-bootstrap/Card';
const AllTheBooks =()=>{
     return(
        fantasy.map((books)=>{
            return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={books.img }/>
          <Card.Body>
            <Card.Title>{books.title}</Card.Title>
            <Card.Text>
              {books.category}
            </Card.Text>
          </Card.Body>
        </Card>
            )
        })
      );
      

}
export default AllTheBooks