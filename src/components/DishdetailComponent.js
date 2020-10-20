import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component {
    
    renderDish(dish) {
      return (
	        <Card>
	        <CardImg width="100%" src={dish.image} alt={dish.name} />
	        <CardBody>
	            <CardTitle>{dish.name}</CardTitle>
	            <CardText>{dish.description}</CardText>
	        </CardBody>
	        </Card>
      );
    }

    renderComments(comments) {
        if (comments != null) {
            const commentDetails = comments.map((comment) => {
                return (
					<ul key={comment.id} className="list-unstyled">
						<li>{comment.comment}</li>
						<li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comment.date))}</li>
					</ul>
				);
            });
        
            return (
                <div>
                    <h4>Comments</h4>    
                    {commentDetails}
                </div>
            );
        } 
    }  

    render() {
        if (this.props.dish) {
            const comments = this.renderComments(this.props.dish.comments);
            const dishCard = this.renderDish(this.props.dish);
            
            return (
                <div className="container">
	                <div className="row">
	                    <div className="col-12 col-md-5 m-1">{dishCard}</div>
	                    <div className="col-12 col-md-5 m-1">{comments}</div>
	                </div>
	            </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Dishdetail;