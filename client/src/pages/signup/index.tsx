import React, {useCallback, useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import { Form, Input, Checkbox, Button } from 'antd';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import { useSignUp } from 'queries/UserQueries';
import { Controller, useForm, useWatch } from 'react-hook-form';
import {RegisterFormValues, Terms} from "../../typing/Signup";
import AccountTerms from "../../components/terms/AccountTerms";
import PrivacyProcessConfirmTerms from "../../components/terms/PrivacyProcessConfirmTerms";
import PrivacyTerms from "../../components/terms/PrivacyTerms";
import TermsModal from "../../components/signup/TermsModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactToastifyCloseButton from "../../components/common/ReactToastifyCloseButton";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerValidation} from "../../utils/register/registerValidation";


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
    const [modal, setModal] = useState<Terms>(Terms.NONE);

    const methods = useForm<Partial<RegisterFormValues>>({
        resolver: yupResolver(registerValidation),
        mode: 'onChange',
    });

    const onSubmit = (data:Partial<RegisterFormValues>) => {

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

        submitData({
            email : data.email,
            nickname : data.nickname,
            password : data.password
        })
    }


  return (
    // <Form onFinish={onSubmit}>
    <>
        <Form
            onFinish={
            methods.handleSubmit((data) => {
                onSubmit(data)
            })
        }
        >
            <div>
                <label htmlFor='user-id'>이메일</label>
                <br />
                {/*<Input name="user-id" value={email} placeholder={"이메일 주소 입력"} required onChange={onChangeEmail} />*/}

                {/*antD와 같이 쓰기 위한 컴포넌트*/}
                <Controller
                    name='email'
                    control={methods.control}
                    defaultValue=''
                    render={({field}) =>
                        <Input
                            {...field}
                            placeholder={"이메일 주소 입력"}
                            autoFocus={true}
                            tabIndex={1}
                        />}
                    // rules={{ required: true }}
                />

                {/*antD를 안썼을 때 적용방법(register활용)*/}
                {/*<Input*/}
                {/*    placeholder={"이메일 주소 입력"}*/}
                {/*    {...methods.register('email')}*/}
                {/*    onChange={onChangeEmail}*/}
                {/*    autoFocus={true}*/}
                {/*    tabIndex={1}*/}
                {/*/>*/}
            </div>
            {methods.formState.errors?.email && (
                <ErrorMessage className="txt-message">
                    {methods.formState.errors?.email?.message}
                </ErrorMessage>
            )}
            <div>
                <label htmlFor='user-nickname'>닉네임</label>
                <br />
                {/*<Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />*/}

                {/*<Input*/}
                {/*    placeholder={"닉네임 입력"}*/}
                {/*    {...methods.register('nickname')}*/}
                {/*    tabIndex={1}*/}
                {/*/>*/}

                <Controller
                    name='nickname'
                    control={methods.control}
                    defaultValue=''
                    render={({field}) =>
                        <Input
                            {...field}
                            placeholder={"닉네임 입력"}
                            tabIndex={1}
                        />}
                    // rules={{ required: true }}
                />
            </div>
            {methods.formState.errors?.nickname && (
                <ErrorMessage className="txt-message">
                    {methods.formState.errors?.nickname?.message}
                </ErrorMessage>
            )}
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                {/*<Input.Password name="user-password" type={"password"} value={password} required onChange={onChangePassword} />*/}
                {/*<Input.Password*/}
                {/*    type={"password"}*/}
                {/*    placeholder="영어 대·소문자, 특수문자, 숫자 조합 입력 (9~30자)"*/}
                {/*    tabIndex={2}*/}
                {/*/>*/}

                <Controller
                    name='password'
                    control={methods.control}
                    defaultValue=''
                    render={({field}) =>
                        <Input.Password
                            {...field}
                            placeholder={"영어 대·소문자, 특수문자, 숫자 조합 입력 (9~30자)"}
                            tabIndex={2}
                        />}
                    // rules={{ required: true }}
                />
                {methods.formState.errors?.password && (
                    <ErrorMessage className="txt-message">
                        {methods.formState.errors?.password?.message}
                    </ErrorMessage>
                )}
            </div>
            <div>
                <label htmlFor='user-password-check'>비밀번호 확인</label>
                <br />
                {/*<Input.Password name="user-password-check" type={"password"} value={passwordCheck} required onChange={onChangePasswordCheck} />*/}
                {/*<Input.Password*/}
                {/*    type={"password"}*/}
                {/*    placeholder="비밀번호 재확인"*/}
                {/*    tabIndex={3}*/}
                {/*/>*/}
                <Controller
                    name='password-confirm'
                    control={methods.control}
                    defaultValue=''
                    render={({field}) =>
                        <Input.Password
                            {...field}
                            placeholder={"비밀번호 재확인"}
                            tabIndex={3}
                        />}
                    // rules={{ required: true }}
                />

                {methods.formState.errors?.['password-confirm'] && (
                    <ErrorMessage>{methods.formState.errors?.['password-confirm'].message}</ErrorMessage>
                )}
            </div>
            <div>
                <span className="txt-title">이용약관</span>

                <ul>
                    <li>
                        <Controller
                            name="user.attributes.consent.account"
                            control={methods.control}
                            defaultValue={false}
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
                            defaultValue={false}
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
                                setModal(Terms.PRIVACY);
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
                            defaultValue={false}
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
                                setModal(Terms.PRIVACY_PROCESS_CONFIRM);
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
                >가입하기</Button>
            </div>
            {modal !== Terms.NONE && (
                <TermsModal title={""} handleCloseModal={() => setModal(Terms.NONE)}>{modalView[modal]}</TermsModal>
            )}
        </Form>
        <ToastContainer
            position="top-center"
        />
    </>
  )
}

export default Index;