import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function BoardPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [user_id] = useState(1); // 예시로 user_id를 1로 설정

    const handleAddNotice = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:7777/api/notices', {
                title,
                content,
                user_id,
            });

            if (response.data.result === 'success') {
                alert('게시글이 등록되었습니다.');
                window.location.href = '/';
            } else {
                alert('게시글 등록에 실패했습니다.');
            }
        } catch (error) {
            console.error('서버와 연결할 수 없습니다.', error);

          
            if (error.response) {
                console.error('서버 응답 오류:', error.response.data);
                console.error('서버 응답 상태:', error.response.status);
                console.error('서버 응답 헤더:', error.response.headers);
            } else if (error.request) {
                
                console.error('요청 오류:', error.request);
            } else {
             
                console.error('일반 오류:', error.message);
            }

            alert('서버와의 연결에 실패했습니다.');
        }
    };
    return (
        <div className="mt-4">
            <h2>게시글 작성</h2>
            <Form onSubmit={handleAddNotice}>
                <Form.Group>
                    <Form.Label>제목</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="내용을 입력하세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" className="mt-3">
                    게시글 등록
                </Button>
            </Form>
        </div>
    );
}
