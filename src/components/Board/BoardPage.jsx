import React, { useState, useEffect } from 'react';
import { Table, Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function BoardPage() {
    const [notices, setNotices] = useState([]);
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    const fetchNotices = async () => {
        try {
            const response = await axios.get('http://localhost:7777/api/notices');
            setNotices(response.data);
        } catch (error) {
            console.error('게시글 목록 불러오기 실패:', error);
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    const handlePostClick = () => {
        navigate('/post');
    };

    const handleNoticeClick = (notice_id) => {
        navigate(`/notice/${notice_id}`); // 게시글 상세 페이지로 이동
    };

    return (
        <Container className="py-4">
            <Row>
                <Col>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h2 className="my-4 text-center">공지 사항</h2>

                            <Button variant="primary" onClick={handlePostClick} className="mb-4">
                                게시글 등록
                            </Button>

                            <Table striped bordered hover responsive className="mt-4">
                                <thead>
                                    <tr>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>등록일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {notices.map((notice) => (
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
