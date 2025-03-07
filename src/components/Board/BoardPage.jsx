import React, { useState, useEffect, useContext } from "react";
import { Table, Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function BoardPage() {
    const [notices, setNotices] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const fetchNotices = async () => {
        try {
            const response = await axios.get("http://localhost:7777/api/notices");
            if (Array.isArray(response.data)) {
                setNotices(response.data);
            } else {
                console.error("Response data is not an array", response.data);
            }
        } catch (error) {
            console.error("게시글 목록 불러오기 실패:", error);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    const handlePostClick = () => {
        navigate("/post");
    };

    const handleNoticeClick = (notice_id) => {
        navigate(`/notice/${notice_id}`);
    };

    return (
        <Container className='py-4'>
            <Row>
                <Col>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h2 className='my-4 text-center'>Notice</h2>
                            {user && user.user_id === 1 && (
                                <Button variant='primary' onClick={handlePostClick} className='mb-4'>
                                    Post
                                </Button>
                            )}
                            <Table striped bordered hover responsive className='mt-4'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(notices || []).map((notice) => (
                                        <tr key={notice.notice_id} onClick={() => handleNoticeClick(notice.notice_id)}>
                                            <td>{notice.title}</td>
                                            <td>{notice.username}</td>
                                            <td>{new Date(notice.created_at).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
