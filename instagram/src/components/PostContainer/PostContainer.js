import React from 'react';
import './PostContainer.css';

import { Card, CardText, CardBody } from 'reactstrap';

const PostContainer = () => {
    return(
        <div className="PostContainer">
        <Card>
          <CardBody>
              <img alt="User visual data"/>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
    );
}

export default PostContainer;