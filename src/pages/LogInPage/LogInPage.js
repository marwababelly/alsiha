import React from "react";
import style from "./LogInPage.module.css";
import { Form, Button, Nav } from "react-bootstrap";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LogInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitFormHandler = (event) => {
    event.preventDefault();
  };
  console.log(form);

  return (
    <div className={style.allSide}>
      <Nav.Link href="/" className={style.linkIcon}>
        <FontAwesomeIcon icon={faArrowLeft} className={style.arrowLeftIcon} />
      </Nav.Link>
      <h2 className={style.h2SignUp}>تسجيل مستخدم جديد</h2>
      <div className={style.formSide}>
        <Form onSubmit={submitFormHandler} className={style.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="الاسم الأوّل"
              className={style.formControl}
              required
              ref={focus}
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="الاسم الأخير"
              className={style.formControl}
              required
              ref={focus}
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              className={style.formControl}
              required
              ref={focus}
              value={form.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="كلمة المرور"
              className={style.formControl}
              required
              ref={focus}
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="تاريخ الميلاد"
              className={style.formControl}
              required
              ref={focus}
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="رقم الموبايل"
              className={style.formControl}
              required
              ref={focus}
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="اختر الجنس"
              className={style.formControl}
              required
              ref={focus}
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <div className={style.divBtn}>
            <Button className={style.btn} type="submit">
              تسجيل
            </Button>
          </div>
          {errorMessage && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
            </div>
          )}
          <p className={style.paragraph}>
            لديك حساب على طبّي؟{" "}
            <Nav.Link href="/logIn" className={style.spanParagraph}>
              تسجيل الدخول
            </Nav.Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LogInPage;
