import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
export default function MyPage() {
    return (
        <Container>
            <div className="mypageTop centered">My Page</div>
            <Card style={{ width: '18rem' }} className="centered">
                <img src="/images/person.svg" alt="profile" className="mypageImg" s />
                <Card.Body>
                    <div className="mypageBody mb-4">User Information</div>
                    <div className="mb-1">
                        <Button variant="outline-danger" style={{ width: '235px' }}>
                            Change Email
                        </Button>
                    </div>
                    <div className="mb-1">
                        <Button variant="outline-primary" style={{ width: '235px' }}>
                            Change Name
                        </Button>
                    </div>
                    <div className="mb-1">
                        <Button variant="outline-warning" style={{ width: '235px' }}>
                            View reservation information
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}
