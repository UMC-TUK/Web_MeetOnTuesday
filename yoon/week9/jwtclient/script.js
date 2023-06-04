document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // 사용자 입력 가져오기
    var id = document.getElementById('id').value;
    var password = document.getElementById('password').value;

    // 서버로 로그인 요청 보내기 (예: AJAX 요청)
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var accessToken = response.accessToken;

          // 액세스 토큰 저장 (로컬 스토리지 사용)
          localStorage.setItem('accessToken', accessToken);

          // 로그인 성공 후 필요한 동작 수행
          // 예: 다른 페이지로 이동, UI 업데이트 등
          console.log('Login successful');
        } else {
          // 로그인 실패 처리
          // 예: 오류 메시지 표시, 입력 초기화 등
          console.log('Login failed');
        }
      }
    };
    xhr.send(JSON.stringify({ id: id, pw: password }));
  });
