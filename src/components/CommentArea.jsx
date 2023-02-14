import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component{
    state={
        comments:[],
        isLoading:true,
        isError:false
        }
        componentDidMount=()=>{
        }
        async componentDidUpdate(prevProps,prevState){
            if (prevProps.asin !== this.props.asin){
                try{
                    let response= await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,{
                        headers:{
                            Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ViODJmZGIyODU2YjAwMTMyYTcxZDAiLCJpYXQiOjE2NzYzNzg4NzgsImV4cCI6MTY3NzU4ODQ3OH0.X3lO2yJlaokktv_y3BJFa7bqSY0G8iHQikro1CA_Kdk"
                        }
                    })
                    if(response.ok){
                        let comments= await response.json();
                        this.setState({comments:comments, isLoading:false,isError:false});
                    }
                    else{
                        this.setState({isLoading:false, isError:true});
                    }
                } catch(error){
                    this.setState({isLoading:false, isError:true});
                }
            }
        }
        render(){
            return(
                <div className="text-center">
                    {this.state.isLoading && <h2> seleziona un libro</h2>}
                   

               
                <CommentList commentsToShow={this.state.comments}/>
                </div>
            )
        }
}
export default CommentArea;