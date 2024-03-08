import React, { Fragment } from 'react';
import "./css/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import AuthInput from '../../components/AuthInput/AuthInput';
import AuthBtn from '../../components/AuthBtn/AuthBtn';

type Props = {
    AccountSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    ChangeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Account = ({
    AccountSubmit,
    ChangeData
}: Props) => {
    return (
        <main className='account-page'>
            <section className='account-section'>
                {/* <h1 className='title'>회원가입</h1> */}
                <div className='account-wrapper'>
                    <form className='form-wrapper' encType='multipart/form-data'>
                        {accountArr.map(({ id, type, placeholder, minLength, maxLength, name }, idx) => (
                            <AuthInput
                                id={id}
                                type={type}
                                key={idx}
                                placeholder={placeholder}
                                minLength={minLength}
                                maxLength={maxLength}
                                name={name}
                                ChangeData={ChangeData}

                            />
                        ))}
                        <AuthBtn name="회원가입" AccountSubmit={AccountSubmit} />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Account;


const accountArr = [
    {
        name: "avatar",
        id: "avatar",
        type: "file",
        placeholder: ""
    },
    {
        name: "name",
        type: "text",
        minLength: 2,
        maxLength: 6,
        placeholder: "이름"
    },
    {
        name: "nickName",
        type: "text",
        minLength: 3,
        maxLength: 9,
        placeholder: "닉네임"
    },
    {
        name: "email",
        type: "email",
        placeholder: "이메일"
    },
    {
        name: "password",
        type: "password",
        minLength: 8,
        maxLength: 9,
        placeholder: "비밀번호"
    },
    {
        name: "passwordCheck",
        type: "password",
        minLength: 8,
        maxLength: 9,
        placeholder: "비밀번호 체크"
    }
]