import React, { Component } from 'react';
import { CardColumns, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import axios from 'axios';

export default class Bookmarks extends Component {
  state = {
    bookmarks: [],
    personalBookmarks: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/personal_notes/`, {
        headers: {
          Authorization: 'Token 4b7652a5e022f474a58faef595c337c5a2788eb1',
        },
      })
      .then(response => {
        this.setState({ personalBookmarks: response.data });
      })
      .catch(err => console.log(err));

    axios
      .get(`http://localhost:8000/api/notes/`, {
        headers: {
          Authorization: 'Token 4b7652a5e022f474a58faef595c337c5a2788eb1',
        },
      })
      .then(response => {
        this.setState({ bookmarks: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Notes</h1>
        <CardColumns>
          {this.state.bookmarks.map(item => (
            <Card key={item.title}>
              <CardHeader>{item.title}</CardHeader>
              <CardBody>
                <CardText>{item.content}</CardText>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
        <h1>Personal Notes</h1>
        <CardColumns>
          {this.state.personalBookmarks.map(item => (
            <Card key={item.title}>
              <CardHeader>{item.title}</CardHeader>
              <CardBody>
                <CardText>{item.content}</CardText>
              </CardBody>
            </Card>
          ))}
        </CardColumns>
      </div>
    );
  }
}
