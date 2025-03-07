import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useUser } from '../../context/UserContext';
export default function BoardPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { user } = useUser(); // 현재 로그인한 사용자 정보 가져오기

    // user_id는 user 객체에서 가져옵니다. (로그인 상태에서만 가능)
    const user_id = user ? user.user_id : null;
    const handleAddNotice = async (e) => {
        e.preventDefault();
        if (!user_id) {
            alert('로그인 후 게시글을 등록할 수 있습니다.');
            return;
        }

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
            <h2>Post</h2>
            <Form onSubmit={handleAddNotice}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Write a Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Write a Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" className="mt-3">
                    Post
                </Button>
            </Form>
        </div>
    );
}
