import React from 'react';

const PrivacyProcessConfirmTerms = () => {
    return (
        <div className="flex-popup">
            <div className="popup-title">
                <h1 className="txt-title">개인정보 처리자 의무 확인</h1>
            </div>

            <div className="popup-content">
                <div className="popup-kic-terms">
                    <p className="txt-desc mgt0">
                        업무를 목적으로 개인정보를 처리하는 공공기관, 법인, 단체 및 개인 등은 모두 ‘개인정보처리자’에 해당하며,
                        개인정보보호법에서 규정하고 있는 아래의 의무를 준수해야 할 책임이 있습니다.
                    </p>

                    <ol className="list-desc">
                        <li>
                            <p>
                                개인정보처리자는 정보주체의 동의를 받은 경우, 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
                                불가피한 경우, 정보주체와의 계약의 체결 및 이행을 위하여 불가피하게 필요한 경우 등에 한하여 최소한의
                                개인정보를 수집합니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                개인정보처리자는 정보주체에게 동의를 받아 개인정보를 수집할 때 서비스에서 처리하는
                                개인정보와 서비스 사용 중에 발생하는 이용기록, 오류 발생 대응을 위해 필요한 기기정보(생산 및 판매 과정에서 기기에 부여된 정보와 SW 를
                                통해 확인 가능한 기기 내 정보) 등을 동의 내용에 포함해야 합니다. 정보주체에게 동의를 받지 않는 방법, 즉
                                개인정보보호법 제 15 조 제 1 항의 제 2 호 내지 제 6 호의 사유로 개인정보를 수집할 때에도
                                개인정보처리방침에 위 내용을 포함해야 합니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                개인정보처리자는 법령의 근거가 있는 경우가 아니라면 주민등록번호 등의 고유식별정보, 건강정보 등의
                                민감정보를 수집하지 않습니다. 단, 업무를 위하여 불가피하게 필요한 경우에 한해 멤버(정보주체)의 개별
                                동의를 받고 처리합니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                개인정보처리자는 수집한 개인정보를 수집한 목적과 다르게 사용하거나 법령의 근거나 정보주체의 동의없이 제
                                3 자에게 제공하지 않습니다.
                            </p>
                        </li>
                        <li>
                            <p>개인정보처리자는 개인정보처리방침을 작성하여 멤버(정보주체)에게 공개합니다.</p>
                        </li>
                        <li>
                            <p>개인정보처리자는 멤버(정보주체)의 개인정보 보호를 책임질 개인정보 보호책임자를 지정합니다.</p>
                        </li>
                        <li>
                            <p>
                                개인정보처리자는 개인정보가 해킹 등으로 유출되지 않도록 내부관리계획 수립 및 이행, 백신 프로그램 설치
                                등의 안전성 확보조치를 준수합니다.
                            </p>
                        </li>
                        <li>
                            <p>개인정보처리자는 이용목적이 달성된 개인정보를 지체 없이 파기합니다.</p>
                        </li>
                        <li>
                            <p>개인정보처리자는 개인정보가 유출되었을 경우, 즉시 멤버(정보주체)에게 통보합니다.</p>
                        </li>
                        <li>
                            <p>개인정보처리자는 멤버(정보주체)의 개인정보 열람/정정/삭제 등의 요청에 응해야 합니다.</p>
                        </li>
                        <li>
                            <p>
                                개인정보처리자는 서비스의 일부 기능(근태관리, 모바일 보안설정(접속시간 확인, 모바일
                                스크린샷 기록 등), 그룹사 기능 이용 시 그룹사 내 조직도 정보 공유, 이메일 전달 등)의 사용에 대해
                                멤버으로부터 사전 동의를 받으셔야 합니다.
                            </p>
                        </li>
                    </ol>

                    <p className="txt-desc">
                        개인정보처리자는 위에 기재한 내용 외에도 멤버(정보주체)의 개인정보 및 사생활 보호를 위하여 개인정보보호법,
                        정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법 등 정보보호 관련 법령에서 규정하고 있는 모든
                        개인정보보호 의무를 준수해야 합니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyProcessConfirmTerms;
