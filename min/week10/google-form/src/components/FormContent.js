import React from "react";
import styles from "styled-components";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      })}
    >
      <FormWrap>
        <Question>
          이름
          <span style={{ color: "red" }}>*</span>
        </Question>
        <Answer>
          <input
            id="name"
            type="text"
            placeholder="이름을 입력해주세요"
            aria-invalid={!isDirty ? undefined : errors.name ? "true" : "false"}
            {...register("name", {
              required: "이름은 필수 입력입니다.",
            })}
          />
          {errors.name && (
            <ErrorMsg role="alert">{errors.name.message}</ErrorMsg>
          )}
        </Answer>
      </FormWrap>
      <FormWrap>
        <Question>
          이메일
          <span style={{ color: "red" }}>*</span>
        </Question>
        <Answer>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            aria-invalid={
              !isDirty ? undefined : errors.email ? "true" : "false"
            }
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          {errors.email && (
            <ErrorMsg role="alert">{errors.email.message}</ErrorMsg>
          )}
        </Answer>
      </FormWrap>
      <FormWrap>
        <Question>
          주소
          <span style={{ color: "red" }}>*</span>
        </Question>
        <Answer>
          <input
            id="address"
            type="text"
            placeholder="주소를 입력해주세요"
            aria-invalid={
              !isDirty ? undefined : errors.address ? "true" : "false"
            }
            {...register("address", {
              required: "주소는 필수 입력입니다.",
            })}
          />
          {errors.address && (
            <ErrorMsg role="alert">{errors.address.message}</ErrorMsg>
          )}
        </Answer>
      </FormWrap>
      <FormWrap>
        <Question>전화번호</Question>
        <Answer>
          <input
            id="phone"
            type="text"
            placeholder="전화번호를 입력해주세요"
            {...register("phone")}
          />
        </Answer>
      </FormWrap>
      <FormWrap>
        <Question>의견</Question>
        <Answer>
          <input
            id="opinion"
            type="text"
            placeholder="추가적인 의견을 입력해주세요"
            {...register("opinion")}
          />
        </Answer>
      </FormWrap>
      <ButtonWrap>
        <Button type="submit" disabled={isSubmitting}>
          제출
        </Button>
      </ButtonWrap>
    </form>
  );
}

const FormWrap = styles.div`
  width: 800px;
  background-color: #fff;
  padding: 30px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 10px;
  box-sizing: border-box;
`;
const Question = styles.div`
  font-size: 20px;

`;
const Answer = styles.div`
  margin-top: 20px;
  > input{
    border: none;
    border-bottom: 1.5px dotted black;
    width: 400px;
    height: 40px;
    font-size: 15px;
  }
  > input:focus{
    outline:none;
  }
`;

const ButtonWrap = styles.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 100px;
`;

const Button = styles.button`
  background-color: rgb(84,34,168);
  border: none;
  width: 80px;
  font-size: 16px;
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px;
  box-sizing: border-box;
  &:disabled{
    background-color: gray;
  }
`;

const ErrorMsg = styles.div`
  font-size: 13px;
  color: red;
  margin-top: 10px;
`;
