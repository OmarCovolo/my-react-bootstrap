import{Row,Col, Form}from "react-bootstrap"
import { SingleBook } from "./SingleBook.jsx"
import { Component } from "react"
import{CommentArea} from "./CommentArea.jsx"


class BooKList extends Component{
    state={
        searchQuery:"",
        selectedBookAsin:""
    }
    changeBook= selected =>{
        this.setState({selectedBookAsin:selected})
    }
    render(){
        return(
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <Col>
                        <Form.Group>
                            <Form.Label> Search a Book </Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Search Here"
                            value={this.state.searchQuery}
                            onChange={e=>this.setState({searchQuery: e.target.value})}
                            />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {this.props.books.filter(b=> b.title.toLowerCase().includes(this.state.searchQuery))
                        .map(b=>(
                            <Col xs={12} md={4} key={b.asin}>
                                <SingleBook book={b} changeBook={this.changeBook} selectedBookAsin={this.state.selectedBookAsin}/>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <CommentArea asin={this.state.selectedBookAsin}/>
                </Col>
            </Row>
   
        )
    }


}
export default BooKList