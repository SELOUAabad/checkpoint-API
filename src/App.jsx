// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.log(error));
//   }, []);
//   return (
//     <>
//       {posts.map((element, key) => (
//         <div key={key}>
//           <p>id : {element.id}</p>
//           <p>Name : {element.name}</p>
//           <p>userName : {element.username}</p>
//           <p>website : {element.website}</p>
//         </div>
//       ))}
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Users</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((element) => (
          <Col key={element.id}>
            <Card className="user-card h-100 shadow-sm">
              <Card.Header className="bg-primary text-white">
                ID : {element.id}
              </Card.Header>
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  @{element.username}
                </Card.Subtitle>
                <Card.Text>Website : {element.website}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
