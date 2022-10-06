import React from 'react';

const PrivacyTerms = () => {
    return (
        <div className="flex-popup">
            <div className="popup-title">
                <h1 className="txt-title">개인정보 수집 및 이용 동의</h1>
            </div>

            <div className="popup-content">
                <div className="popup-kic-terms">
                    <h2 className="title-h2 mgt0">1. 처리하는 개인정보의 항목</h2>
                    <p className="txt-desc">
                        회사는 서비스 제공 및 유지를 위한 필요한 경우 목적에 따라 필요 최소한의 개인정보만을 다음과 같이 수집하여
                        처리합니다.
                    </p>
                    <div className="box-desc">
                        <ul className="list-box">
                            <li>
                                <p>(필수) 슈퍼관리자 정보: 회원명, 이름, 아이디(이메일주소), 비밀번호, 휴대폰번호</p>
                            </li>
                        </ul>
                    </div>
                    <p className="txt-desc">
                        이 외에 서비스 이용 과정에서 IP, 방문일시, 서비스 이용 기록, 불량 이용 기록과 같은 활동기록이 생성되어
                        수집될 수 있습니다.
                    </p>

                    <h2 className="title-h2">2. 처리하는 개인정보의 목적</h2>
                    <p className="txt-desc">회사는 수집된 정보를 다음과 같은 목적으로 처리합니다.</p>
                    <div className="box-desc">
                        <ul className="list-box">
                            <li>
                                <p>서비스 제공에 대한 계약 이행 및 요금 정산</p>
                            </li>
                            <li>
                                <p>서비스 이용 상담 및 컨설팅</p>
                            </li>
                            <li>
                                <p>
                                    회원관리: 회원제 서비스 제공, 개인식별, 이용약관 위반 회원(또는 멤버)에 대한 이용제한조치, 서비스의
                                    원활한 운영에 지장을 주는 행위 및 서비스 부정이용 행위 제재, 분쟁 조정을 위한 기록보존, 불만처리 등
                                    민원처리, 고지사항 전달 등
                                </p>
                            </li>
                            <li>
                                <p>
                                    서비스 분석: 인구통계학적 특성에 따른 서비스 제공, 서비스 고도화 및 신규 서비스 개발을 위한 수집
                                    데이터 분석 및 통계 처리, 서비스의 유효성 확인 등
                                </p>
                            </li>
                            <li>
                                <p>인구통계학적 사용자 행태에 대한 연구 및 기업용 인구통계학적 데이터 서비스</p>
                            </li>
                        </ul>
                    </div>

                    <h2 className="title-h2">3. 개인정보의 보유 및 이용 기간</h2>
                    <p className="txt-desc">회사는 정보주체의 개인정보를 다음 기간 동안 처리 및 보유합니다.</p>
                    <div className="box-desc">
                        <ul className="list-box">
                            <li>
                                <p>카카오 i 서비스 이용을 위해 수집되는 정보: 서비스 이용 계약 해지 시까지(퇴사 또는 직권 탈퇴 포함)</p>
                            </li>
                        </ul>
                    </div>
                    <p className="txt-desc">
                        다만, 서비스 해지 또는 개인정보 삭제가 이뤄진 후 바로 복구 요청 등이 발생할 수 있어 서비스 사용자의 보호를
                        위하여 ‘지체 없이’의 기간은 최대 7 일을 넘기지 않도록 합니다. 단, 전자상거래 등에서의 소비자보호에 관한 법률
                        등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 정해진 기간 동안만 개인정보를 보관합니다. 이 경우
                        회사는 보관 목적으로만 이용하며 보존기간은 다음과 같습니다.
                    </p>
                    <div className="box-desc">
                        <ul className="list-box">
                            <li>
                                <p>계약 또는 청약철회 등에 관한 기록</p>

                                <ul className="list-box-depth">
                                    <li>
                                        <p>보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률</p>
                                    </li>
                                    <li>
                                        <p>보존 기간: 5 년</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>대금결제 및 재화 등의 공급에 관한 기록</p>

                                <ul className="list-box-depth">
                                    <li>
                                        <p>보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률</p>
                                    </li>
                                    <li>
                                        <p>보존 기간: 5 년</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>소비자의 불만 또는 분쟁처리에 관한 기록</p>

                                <ul className="list-box-depth">
                                    <li>
                                        <p>보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률</p>
                                    </li>
                                    <li>
                                        <p>보존 기간: 3 년</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>웹사이트 방문기록</p>

                                <ul className="list-box-depth">
                                    <li>
                                        <p>보존 이유: 통신비밀보호법</p>
                                    </li>
                                    <li>
                                        <p>보존 기간: 3 개월</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <h2 className="title-h2">4. 동의 거부권 및 거부에 따른 불이익 사항</h2>
                    <p className="txt-desc">
                        개인정보 수집 및 이용 동의를 거부할 권리가 있으며, 동의 거부 시에는 서비스 이용이 불가합니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyTerms;
