import React, { useState, useContext, useEffect, useRef } from 'react';
import PageStatusContext from '../contexts/PageStatusContexts';

const Login = () => {
  const { setLoginCheck, setCurrentPage } = useContext(PageStatusContext);

  const inputRef = useRef(null);
  const tds = useRef([]);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    inputRef.current?.focus();
    return () => {
      if (timer) clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    };
  }, []);


  const loginClick = (e) => {
    tableRender();
  };


  const login = (e) => {
    const length = e.target.value.length;
    if (e.key !== 'Enter') {
      tableRender();
      return;
    }

    if (e.key === 'Enter' && e.target.value === 'applepie') {
      setLoginCheck(true);
      setCurrentPage('main');
    } else {
      e.target.value = '';
      tableRender();
    }
  };


  const tableRender = () => {
    const length = inputRef.current.value.length;
    const focusFront = inputRef.current.selectionStart;
    const focusBack = inputRef.current.selectionEnd;
  
    // 테이블 초기화
    tds.current.forEach((td, index) => {
      td.style.backgroundColor = index < length ? 'rgba(97, 218, 251, 0.4)' : '';
    });
  
    // 기존 타이머 정리
    if (timer) {
      clearInterval(timer);
    }
  
    // 선택된 범위에 점멸 효과 추가
    const elements = tds.current.slice(focusFront === focusBack ? focusFront - 1 : focusFront, focusBack);
    if(elements.length === 0){
      elements.push(tds.current[0]);
    }
    if (elements.length > 0) {
      setTimer(
        setInterval(() => {
          elements.forEach((element) => {
            element.style.backgroundColor =
              element.style.backgroundColor === (focusFront === focusBack ? 'rgba(97, 218, 251, 0.75)' : 'rgb(97, 218, 251)')
                ? 'rgba(97, 218, 251, 0.2)'
                : focusFront === focusBack ? 'rgba(97, 218, 251, 0.75)' : 'rgb(97, 218, 251)';
          });
        }, 600)
      );
    }
  };
  
  

  return (
    <div id="login-box">
      <label htmlFor="login-password" id="login-label">
        <input
          type="password"
          onKeyUp={login}
          onFocus={loginClick}
          ref={inputRef}
          id="login-password"
          maxLength={11}
        />
        <table id="login-table">
            <tr>
              {[...Array(11)].map((_, index) => (
                <td
                key={index}
                ref={(element) => (tds.current[index] = element)}
                ></td>
              ))}
            </tr>
        </table>
      </label>
    </div>
  );
};

export default Login;
