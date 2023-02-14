import {ListGroup } from "react-bootstrap";
const SingleComment = props=>{
    return <ListGroup.Item>{props.commentObj.comment}</ListGroup.Item>
}
export default SingleComment