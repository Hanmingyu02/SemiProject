import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

export default function Boardnotice() {
    const { notice_id } = useParams(); // URL에서 notice_id 파라미터를 가져옴
    const [notice, setNotice] = useState(null);
    const navigate = useNavigate();

    const fetchNotice = async () => {
        try {
            const response = await axios.get(`http://localhost:7777/api/notices/${notice_id}`);
            setNotice(response.data);
        } catch (error) {
            console.error('게시글 상세 조회 실패:', error);
        }
    };

    useEffect(() => {
        fetchNotice();
    }, [notice_id]);

    if (!notice) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="py-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <h2>{notice.title}</h2>
                    <p>
                        <strong>Author:</strong> {notice.username}
                    </p>
                    <p>
                        <strong>Date:</strong> {new Date(notice.created_at).toLocaleDateString()}
                    </p>
                    <p>{notice.content}</p>
                    <Button onClick={() => navigate('/boardPage')}>Return to list</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}
