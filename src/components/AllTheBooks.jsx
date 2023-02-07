import { render } from '@testing-library/react';
import fantasy from '../books/fantasy.json';
import history from '../books/history.json';
import horror from '../books/horror.json';
import romance from '../books/romance.json';
import scifi from '../books/scifi.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const AllTheBooks =()=>{
     return(
        fantasy.map((fantasybooks)=>{
            return(
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fantasybooks.img }/>
          <Card.Body>
            <Card.Title>{fantasybooks.title}</Card.Title>
            <Card.Text>
              {fantasybooks.category}
            </Card.Text>
          </Card.Body>
        </Card>
            )
        })
      );
      

}
export default AllTheBooks