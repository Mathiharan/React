import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComments(comments) {
    if (comments != null) {
      const comment = this.props.dish.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <ul className="list-unstyled">
              <li>
                <p>{comment.comment}</p>
              </li>
              <li>
                <p>
                  -- {comment.author},
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(comment.date))}
                </p>
              </li>
            </ul>
          </div>
        );
      });
      return <div>{comment}</div>;
    } else return <div></div>;
  }
  render() {
    if (this.props.dish != null) {
      return (
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md">
              <h4>Comments</h4>
              {this.renderComments(this.props.dish.comments)}
            </div>
        </div>
      );
    } else return <div></div>;
  }
}
export default Dishdetail;