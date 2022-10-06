import React, {useCallback, useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import { Form, Input, Checkbox, Button } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import { useSignUp } from 'queries/UserQueries';
import { Controller, useForm, useWatch } from 'react-hook-form';
import * as yup from "yup";
import {IRegisterFormValues, ITerms} from "../../typing/Signup";
import AccountTerms from "../../components/terms/AccountTerms";
import PrivacyProcessConfirmTerms from "../../components/terms/PrivacyProcessConfirmTerms";
import PrivacyTerms from "../../components/terms/PrivacyTerms";
import TermsModal from "../../components/signup/TermsModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactToastifyCloseButton from "../../components/common/ReactToastifyCloseButton";

const ErrorMessage = styled.div`
    color: red;
`;

const modalView = {
    ACCOUNT: <AccountTerms/>,
    PRIVACY: <PrivacyProcessConfirmTerms />,
    PRIVACY_PROCESS_CONFIRM: <PrivacyTerms />,
};


const Index = () => {
    const { mutate: submitData } = useSignUp();
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [modal, setModal] = useState<ITerms>(ITerms.NONE);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);

    const methods = useForm<Partial<IRegisterFormValues>>({
        // resolver: yupResolver(registerValidation),
        defaultValues: {
            // email: register.formData?.email || '',
            // firstName: register.formData?.firstName || '',
            // password: '',
            // 'password-confirm': '',
            user: {
                attributes: {
                    // @ts-ignore
                    // phoneNumber: register.formData?.['user.attributes.phoneNumber'] || '',
                    consent: {
                        account: false,
                        privacy: false,
                        'privacy-process-confirm': false,
                        age: false,
                    },
                    // bizAccountConsent: false,
                    // privacyConsent: false,
                    // privacyProcessConfirmConsent: false,
                    // ageConsent: false,
                    // registerAt: '',
                },
            },
        },
        mode: 'onChange',
    });

    // const onSubmit = useCallback(() => {
    //     if(password !== passwordCheck) {
    //         return setPasswordError(true);
    //     }
    //     submitData({
    //         email : email,
    //         nickname : nickname,
    //         password : password
    //     })
    // },[password, passwordCheck]);

    const onSubmit = async(values:any) => {
        await methods.trigger([
            'nickname',
            'email',
            'password',
            'password-confirm',
        ]);

        const isAllConsent = [
            methods.getValues('user.attributes.consent.account'),
            methods.getValues('user.attributes.consent.privacy'),
            methods.getValues('user.attributes.consent.privacy-process-confirm'),
        ].every((v) => v);

        if (!isAllConsent) {
            toast.error('이용약관에 동의해 주세요.', {
                autoClose: false,
                closeOnClick: false,
                closeButton: ({ closeToast }) => <ReactToastifyCloseButton closeToast={closeToast} />,
            });
            return;
        }
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        console.log("return data >>>>>>>",values)
        // submitData({
        //     email : email,
        //     nickname : nickname,
        //     password : password
        // })
    }


  return (
    // <Form onFinish={onSubmit}>
    <>
        <Form
            onFinish={(e) => {
                e.preventDefault();
                methods.handleSubmit(onSubmit);
            }}
        >
            <div>
                <label htmlFor='user-id'>이메일</label>
                <br />
                {/*<Input name="user-id" value={email} placeholder={"이메일 주소 입력"} required onChange={onChangeEmail} />*/}
                <Input
                    placeholder={"이메일 주소 입력"}
                    {...methods.register('email')}
                    autoFocus={true}
                    tabIndex={1}
                />
            </div>
            <div>
                <label htmlFor='user-nickname'>닉네임</label>
                <br />
                {/*<Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />*/}
                <Input
                    placeholder={"닉네임 입력"}
                    {...methods.register('nickname')}
                    tabIndex={1}
                />
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                {/*<Input.Password name="user-password" type={"password"} value={password} required onChange={onChangePassword} />*/}
                <Input.Password
                    type={"password"}
                    placeholder="영어 대·소문자, 특수문자, 숫자 조합 입력 (9~30자)"
                    value={password}
                    {...methods.register('password')}
                    tabIndex={2}
                    onChange={onChangePassword}
                />
            </div>
            <div>
                <label htmlFor='user-password-check'>비밀번호 확인</label>
                <br />
                {/*<Input.Password name="user-password-check" type={"password"} value={passwordCheck} required onChange={onChangePasswordCheck} />*/}
                <Input.Password
                    type={"password"}
                    placeholder="비밀번호 재확인"
                    {...methods.register('password-confirm')}
                    tabIndex={3}
                />
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div>
                <span className="txt-title">이용약관</span>

                <ul>
                    <li>
                        <Controller
                            name="user.attributes.consent.account"
                            control={methods.control}
                            render={({ field }) => (
                                <Checkbox
                                    type="checkbox"
                                    id="checkbox1"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                >
                                    <label className="label-checkbox" htmlFor="checkbox1">
                                        <i />
                                        <span className="txt-label">(필수) 계정 이용약관 동의</span>
                                    </label>
                                </Checkbox>
                            )}
                        />
                    </li>
                    <li>
                        <Controller
                            name="user.attributes.consent.privacy"
                            control={methods.control}
                            render={({ field }) => (
                                <Checkbox
                                    type="checkbox"
                                    id="checkbox2"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                >
                                    <label className="label-checkbox" htmlFor="checkbox2">
                                        <i />
                                        <span className="txt-label">(필수) 개인정보 수집 및 이용 동의</span>
                                    </label>
                                </Checkbox>
                            )}
                        />
                        <a
                            href="#"
                            className="link-view"
                            onClick={(e) => {
                                setModal(ITerms.PRIVACY);
                                e.preventDefault();
                            }}
                        >
                            전문보기
                        </a>
                    </li>
                    <li>
                        <Controller
                            name="user.attributes.consent.privacy-process-confirm"
                            control={methods.control}
                            render={({ field }) => (
                                <Checkbox
                                    type="checkbox"
                                    id="checkbox3"
                                    checked={field.value}
                                    onChange={(e) => field.onChange(e.target.checked)}
                                >
                                    <label className="label-checkbox" htmlFor="checkbox1">
                                        <i />
                                        <span className="txt-label">(필수)개인정보처리방침 개인정보 처리자 의무 확인</span>
                                    </label>
                                </Checkbox>
                            )}
                        />
                        <a
                            href="#"
                            className="link-view"
                            onClick={(e) => {
                                setModal(ITerms.PRIVACY_PROCESS_CONFIRM);
                                e.preventDefault();
                            }}
                        >
                            전문보기
                        </a>
                    </li>
                </ul>
            </div>
            <div style={{ marginTop: 10 }}>
                <Button type="primary"
                        htmlType='submit'
                        onClick={(e)=>{
                            e.preventDefault();
                            // onSubmit();
                        }}
                >가입하기</Button>
            </div>
            {modal !== ITerms.NONE && (
                <TermsModal title={""} handleCloseModal={() => setModal(ITerms.NONE)}>{modalView[modal]}</TermsModal>
            )}
        </Form>
        <ToastContainer
            position="top-center"
        />
    </>
  )
}

export default Index;