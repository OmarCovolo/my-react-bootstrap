import {Button,ListGroup } from "react-bootstrap";
const SingleComment=({comment})=>{
    const deleteComment= async asin =>{
        try{
            let response= await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin,{
                method:"DELETE",
                        headers:{
                            Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ViODJmZGIyODU2YjAwMTMyYTcxZDAiLCJpYXQiOjE2NzYzNzg4NzgsImV4cCI6MTY3NzU4ODQ3OH0.X3lO2yJlaokktv_y3BJFa7bqSY0G8iHQikro1CA_Kdk"
                        }
                    });
                    if(response.ok){
                        alert("comment was deleted successfully");
                    }else{alert()
                }
               
        } catch(error){
            alert("comment was not deleted")
        }
    };
    return(
        <ListGroup.Item>
            {comment.comment}
            <Button variant="danger" className="Ml-2" onClick={()=>deleteComment(comment._id)}>
                Delete Comment
            </Button>
        </ListGroup.Item>
    );
};
export default SingleComment;