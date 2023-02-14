import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList=({commentsToShow})=>{
    <ListGroup style={{color:"black"}} className="mt-2">
        {commentsToShow.map(commentObj=>(
            <>
            <ListGroup.Item key={commentObj._id}>{commentObj.comment}</ListGroup.Item>
            <SingleComment commentObJ={commentObj}/>
            </>
   
        ))}
    </ListGroup>
}
export default CommentList;