import React from 'react';
import { Container } from 'react-bootstrap';

export default function Caution() {
    return (
        <div className="caution-body">
            <div className="caution-wrap">
                <div className="caution" style={{ width: '500px' }}>
                    <hr style={{ width: '500px' }} />
                    <Container>
                        <div className="mt-2 bottomText" style={{ marginBottom: '15px' }}>
                            Cautions
                            <br />
                            1. Don't make loud noises, Don't clap after 10p.m.
                            <br />
                            2. No smoking on the playground
                            <br />
                            3. Take the trash
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}
