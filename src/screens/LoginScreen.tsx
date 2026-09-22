import type { FormEvent } from "react";
import { Button } from "../components/Button/Button";
import styles from "./LoginScreen.module.css";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export function LoginScreen() {
  return (
    <main className={styles.screen}>
      <section className={styles.content} aria-labelledby="login-title">
        <h1 id="login-title">로그인</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Temporary screen-local native inputs. These are not design-system components. */}
          <label className={styles.field}>
            <span>아이디</span>
            <input
              autoComplete="username"
              name="username"
              placeholder="아이디를 입력해주세요"
              required
              type="text"
            />
          </label>

          <label className={styles.field}>
            <span>비밀번호</span>
            <input
              autoComplete="current-password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              required
              type="password"
            />
          </label>

          <div className={styles.actions}>
            <div className={styles.fill}>
              <Button htmlType="submit" label="로그인" size="Large" type="Main" />
            </div>
            <div className={styles.fill}>
              <Button htmlType="button" label="회원가입" size="Large" type="Outlined" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
