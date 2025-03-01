import React, { useState } from "react";
import { Button, Carousel, Container, Row, Col, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";

export default function Home() {
    const navigate = useNavigate();
    const [useShow, setUseShow] = useState(false);
    const [personShow, setPersonShow] = useState(false);

    const handlePersonClose = () => setPersonShow(false);
    const handlePersonShow = () => setPersonShow(true);
    const handleUseClose = () => setUseShow(false);
    const handleUseShow = () => setUseShow(true);

    return (
        <div>
            <div>
                <Carousel data-bs-theme='dark' controls={false} indicators={false}>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src='/images/football1.jpg' alt='First slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>School Futsal Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("scfutsal")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src='/images/football3.jpg' alt='Second slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>Mortar Futsal Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("scsoccer")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 topImg' src='/images/football3.jpg' alt='Third slide' />
                        <Carousel.Caption>
                            <h5 className='imgText'>School Soccer Field</h5>
                            <Button className='imgButton' variant='outline-light' onClick={() => navigate("mofutsal")}>
                                Stadium
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container>
                <div style={{ marginTop: "50px" }}>
                    <div className='centered m-5 stadium'>Stadium</div>
                    <Row className='midCol'>
                        <Col onClick={() => navigate("/scfutsal")}>
                            <img src='/images/football1.jpg' className='midImg' alt='School Futsal Field' />
                        </Col>
                        <Col onClick={() => navigate("/scsoccer")}>
                            <img src='/images/football2.jpg' className='midImg' alt='School Soccer Field' />
                        </Col>
                        <Col onClick={() => navigate("/mofutsal")}>
                            <img src='/images/football3.jpg' className='midImg' alt='Mortar Futsal Field' />
                        </Col>
                    </Row>
                    <Row className='fieldName mt-2'>
                        <Col onClick={() => navigate("/scfutsal")}>School Futsal Field</Col>
                        <Col onClick={() => navigate("/scsoccer")}>School Soccer Field</Col>
                        <Col onClick={() => navigate("/mofutsal")}>Mortar Futsal Field</Col>
                    </Row>
                    <Row className='explanation'>
                        <Col onClick={() => navigate("/scfutsal")}>A great place for sports and fun!</Col>
                        <Col onClick={() => navigate("/scsoccer")}>Perfect for team activities and events!</Col>
                        <Col onClick={() => navigate("/mofutsal")}>Ideal for friendly matches and practice!</Col>
                    </Row>
                </div>
            </Container>
            <hr style={{ marginTop: "100px", marginBottom: "30px" }} />
            <Container>
                <Row>
                    <Col>
                        <p>About</p>
                        <div className='bottomText'>
                            The football stadium features a state-of-the-art pitch designed for optimal performance,
                            allowing players to showcase their skills to the fullest. With spacious stands that
                            accommodate passionate fans, the atmosphere during matches is filled with excitement. The
                            stadium is equipped with modern facilities, enhancing the overall experience for both
                            players and spectators.
                        </div>
                    </Col>
                    <Col>
                        <p className='bottomHead'>Location</p>
                        <div className='bottomText'>Gyeongbuk, Korea</div>
                        <p className='bottomHead'>Bank</p>
                        <div className='bottomText'>0000-00-0000000 XXBank</div>
                        <p className='bottomHead'>Reservation</p>
                        <div className='bottomText'>Tel 010-0000-0000</div>
                    </Col>
                    <Col>
                        <Link to='/stadiumPage' className='bottomText'>
                            Stadium
                            <br />
                        </Link>
                        <Link to='/location' className='bottomText'>
                            Location
                            <br />
                        </Link>
                        <Link to='/boardpage' className='bottomText'>
                            Notice
                            <br />
                        </Link>
                        <Link to='/reservationPage' className='bottomText'>
                            Reservation
                            <br />
                        </Link>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container className='centered mt-5'>
                <FaFacebookF className='m-2' />
                <CiInstagram className='m-2' />
                <IoLogoTwitter className='m-2' />
                <div className='mt-2 bottomText' style={{ marginBottom: "15px" }}>
                    KBSW Company Gyeongbuk
                    <br />
                    Business License 000-00-00000 Tel 000-0000-0000 Fax 00-000-0000
                </div>
                <div className='bottomText'>
                    <span className='p-3' onClick={handleUseShow}>
                        이용약관
                    </span>
                    <span onClick={handlePersonShow}>개인정보처리방침</span>
                </div>
            </Container>
            <Modal show={personShow} onHide={handlePersonClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "0.9em" }}>개인정보처리방침</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontSize: "0.8em" }}>
                    <p className='section-title'>
                        회사명(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와
                        관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을
                        수립, 공개합니다.
                    </p>

                    <p className='section-title'>제1조 (개인정보의 처리목적)</p>
                    <p>
                        회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                        용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의
                        동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    </p>
                    <p>1. 홈페이지 회원 가입 및 관리</p>
                    <p>
                        회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적
                        본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시
                        법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등의 목적으로 개인정보를 처리합니다.
                    </p>
                    <p>2. 재화 또는 서비스 제공</p>
                    <p>
                        물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증,
                        요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.
                    </p>
                    <p>3. 고충 처리</p>
                    <p>
                        민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로
                        개인정보를 처리합니다.
                    </p>

                    <p className='section-title'>제2조 (개인정보의 처리 및 보유기간)</p>
                    <p>
                        ① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은
                        개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.
                    </p>
                    <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                    <p>1. 홈페이지 회원 가입 및 관리 : 사업자 홈페이지 탈퇴 시까지</p>
                    <p>다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지</p>
                    <p>1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지</p>
                    <p>2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지</p>

                    <p>2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료 시까지</p>
                    <p>다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지</p>
                    <p>
                        1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에
                        관한 기록
                    </p>
                    <p>- 표시․광고에 관한 기록 : 6개월</p>
                    <p>- 계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년</p>
                    <p>- 소비자 불만 또는 분쟁 처리에 관한 기록 : 3년</p>
                    <p>2) 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관</p>
                    <p>
                        - 가입자 전기통신일시, 개시․종료 시간, 상대방 가입자 번호, 사용도수, 발신기지국 위치추적자료 :
                        1년
                    </p>
                    <p>- 컴퓨터 통신, 인터넷 로그 기록자료, 접속지 추적자료 : 3개월</p>

                    <p className='section-title'>제3조 (개인정보의 제3자 제공)</p>
                    <p>
                        ① 회사는 정보주체의 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며,
                        정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제 18조에 해당하는 경우에만
                        개인정보를 제3자에게 제공하고 그 외에는 정보주체의 개인정보를 제3자에게 제공하지 않습니다.
                    </p>
                    <p>
                        ② 회사는 원활한 서비스 제공을 위해 다음의 경우 개인정보보호법 제17조 제1항 제1호에 따라
                        정보주체의 동의를 얻어 필요 최소한의 범위로만 개인정보를 제3자에게 제공할 수 있습니다.
                    </p>
                    <p>- 개인정보를 제공받는 자 : &lt;예) (주) OOO 카드&gt;</p>
                    <p>
                        - 제공받는 자의 개인정보 이용목적 : &lt;예) 이벤트 공동개최 등 업무제휴 및 제휴 신용카드
                        발급&gt;
                    </p>
                    <p>- 제공하는 개인정보 항목 : &lt;예) 성명, 주소, 전화번호, 이메일주소, 카드결제계좌정보&gt;</p>
                    <p>- 제공받는 자의 보유, 이용기간 : &lt;예) 신용카드 발급계약에 따른 거래기간동안&gt;</p>

                    <p className='section-title'>제4조(개인정보처리의 위탁)</p>
                    <p>① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
                    <p>- 위탁업무 내용</p>
                    <p>- 위탁받는 자 (수탁자) : (주)아임웹</p>
                    <p>
                        - 위탁하는 업무의 내용 : 쇼핑몰 호스팅 서비스의 시스템 제공, 모바일 앱 서비스, 마케팅 서비스 및
                        부가, 제휴서비스 제공 및 알림톡, 친구톡, 문자메시지 발송대행 서비스 등
                    </p>
                    <p>- 위탁받는 자 (수탁자) : OOO PG</p>
                    <p>- 위탁하는 업무의 내용 : 결제 및 에스크로 업무</p>
                    <p>- 위탁받는 자 (수탁자) : OOO 택배</p>
                    <p>- 위탁하는 업무의 내용 : 상품 배송 업무</p>
                    <p>- 위탁받는 자 (수탁자) : OOO 고객센터</p>
                    <p>- 위탁하는 업무의 내용 : 고객상담 업무</p>
                    <p>- 위탁받는 자 (수탁자) : OOO</p>
                    <p>- 위탁하는 업무의 내용 : 본인확인 업무</p>
                    <p>- **재위탁사**</p>
                    <p>- **재위탁받는 자(수탁자) : (주)아임웹 → 인포빕(유)**</p>
                    <p>- **위탁하는 업무의 내용 : 문자메시지 발송, 카카오톡 알림톡(정보성 메시지) 발송 업무**</p>
                    <p>- **재위탁받는 자(수탁자) : (주)아임웹 → (주)루나소프트**</p>
                    <p>
                        - **위탁하는 업무의 내용 : 문자메시지 발송, 카카오톡 알림톡(정보성 메시지) 및 친구톡 발송 업무**
                    </p>
                    <p>
                        ② 회사는 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지,
                        기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을
                        계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                    </p>
                    <p>
                        ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록
                        하겠습니다.
                    </p>
                    <p>이 개인정보 처리방침은 2025-02-27 부터 적용됩니다.</p>
                </Modal.Body>
            </Modal>
            <Modal show={useShow} onHide={handleUseClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: "0.9em" }}>이용약관</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontSize: "0.8em" }}>
                    <p>제1조 목적</p>
                    <p>
                        본 이용약관은 “사이트명”(이하 "사이트")의 서비스의 이용조건과 운영에 관한 제반 사항 규정을
                        목적으로 합니다.
                    </p>

                    <p>제2조 용어의 정의</p>
                    <p>본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.</p>
                    <p>
                        ① 회원: 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을
                        체결하고 사이트를 이용하는 이용자를 말합니다.
                    </p>
                    <p>② 이용계약: 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.</p>
                    <p>
                        ③ 회원 아이디(이하 "ID"): 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한
                        문자와 숫자의 조합을 말합니다.
                    </p>
                    <p>
                        ④ 비밀번호: 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익 보호를 위하여 회원이
                        선정한 문자와 숫자의 조합을 말합니다.
                    </p>
                    <p>⑤ 운영자: 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.</p>
                    <p>⑥ 해지: 회원이 이용계약을 해약하는 것을 말합니다.</p>

                    <p>제3조 약관 외 준칙</p>
                    <p>
                        운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우
                        운영정책이 우선 적용됩니다.
                    </p>

                    <p>제4조 이용계약 체결</p>
                    <p>
                        ① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에
                        대하여 운영자의 이용승낙으로 성립합니다.
                    </p>
                    <p>
                        ② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본 약관을 읽고 아래에 있는
                        "동의합니다"를 선택하는 것으로 본 약관에 대한 동의 의사 표시를 합니다.
                    </p>

                    <p>제5조 서비스 이용 신청</p>
                    <p>
                        ① 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는 제반정보(이용자ID,
                        비밀번호, 닉네임 등)를 제공해야 합니다.
                    </p>
                    <p>
                        ② 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은 회원은
                        사이트 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.
                    </p>

                    <p>제6조 개인정보처리방침</p>
                    <p>
                        사이트 및 운영자는 회원가입 시 제공한 개인정보 중 비밀번호를 가지고 있지 않으며 이와 관련된
                        부분은 사이트의 개인정보처리방침을 따릅니다. 운영자는 관계 법령이 정하는 바에 따라
                        회원등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다.
                    </p>
                    <p>
                        회원의 개인정보보호에 관하여 관계법령 및 사이트가 정하는 개인정보처리방침에 정한 바에 따릅니다.
                    </p>
                    <p>
                        단, 회원의 귀책 사유로 인해 노출된 정보에 대해 운영자는 일체의 책임을 지지 않습니다. 운영자는
                        회원이 미풍양속에 저해되거나 국가안보에 위배되는 게시물 등 위법한 게시물을 등록 · 배포할 경우
                        관련 기관의 요청이 있을 시 회원의 자료를 열람 및 해당 자료를 관련 기관에 제출할 수 있습니다.
                    </p>

                    <p>제7조 운영자의 의무</p>
                    <p>
                        ① 운영자는 이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 가급적 빨리
                        처리하여야 합니다. 다만, 개인적인 사정으로 신속한 처리가 곤란한 경우에는 사후에 공지 또는
                        이용회원에게 쪽지, 전자우편 등을 보내는 등 최선을 다합니다.
                    </p>
                    <p>
                        ② 운영자는 계속적이고 안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는 이를
                        지체 없이 수리 또는 복구할 수 있도록 사이트에 요구할 수 있습니다. 다만, 천재지변 또는 사이트나
                        운영자에 부득이한 사유가 있는 경우, 사이트 운영을 일시 정지할 수 있습니다.
                    </p>

                    <p>제8조 회원의 의무</p>
                    <p>
                        ① 회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지사항 및 운영정책 등 사이트가
                        공지하는 사항 및 관계 법령을 준수하여야 하며, 기타 사이트의 업무에 방해가 되는 행위, 사이트의
                        명예를 손상하는 행위를 해서는 안 됩니다.
                    </p>
                    <p>
                        ② 회원은 사이트의 명시적 동의가 없는 한 서비스의 이용 권한, 기타 이용계약상 지위를 타인에게
                        양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
                    </p>
                    <p>
                        ③ 이용고객은 아이디 및 비밀번호 관리에 상당한 주의를 기울여야 하며, 운영자나 사이트의 동의 없이
                        제3자에게 아이디를 제공하여 이용하게 할 수 없습니다.
                    </p>
                    <p>④ 회원은 운영자와 사이트 및 제3자의 지적 재산권을 침해해서는 안 됩니다.</p>

                    <p>제9조 서비스 이용 시간</p>
                    <p>
                        ① 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로
                        합니다. 단, 사이트는 시스템 정기점검, 증설 및 교체를 위해 사이트가 정한 날이나 시간에 서비스를
                        일시중단 할 수 있으며 예정된 작업으로 인한 서비스 일시 중단은 사이트의 홈페이지에 사전에
                        공지하오니 수시로 참고하시길 바랍니다.
                    </p>
                    <p>
                        ② 단, 사이트는 다음 경우에 대하여 사전 공지나 예고 없이 서비스를 일시적 혹은 영구적으로 중단할
                        수 있습니다.
                    </p>
                    <p>- 긴급한 시스템 점검, 증설, 교체, 고장 혹은 오동작을 일으키는 경우</p>
                    <p>- 국가비상사태, 정전, 천재지변 등의 불가항력적인 사유가 있는 경우</p>
                    <p>- 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우</p>
                    <p>- 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</p>
                    <p>
                        ③ 전항에 의한 서비스 중단의 경우 사이트는 사전에 공지사항 등을 통하여 회원에게 통지합니다. 단,
                        사이트가 통제할 수 없는 사유로 발생한 서비스의 중단에 대하여 사전공지가 불가능한 경우에는
                        사후공지로 대신합니다.
                    </p>

                    <p>제10조 서비스 이용 해지</p>
                    <p>
                        ① 회원이 사이트와의 이용계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통하여 등록해지
                        신청을 하여야 합니다. 한편, 사이트 이용 해지와 별개로 사이트에 대한 이용계약 해지는 별도로
                        하셔야 합니다.
                    </p>
                    <p>
                        ② 해지 신청과 동시에 사이트가 제공하는 사이트 관련 프로그램이 회원 관리 화면에서 자동적으로
                        삭제됨으로 운영자는 더 이상 해지신청자의 정보를 볼 수 없습니다.
                    </p>
                    <p>이 약관은 2025-02-27부터 시행합니다.</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}
