[Create React App Github]('https://github.com/facebook/create-react-app')

# **Create React App 설치**

1. node.js 설치
2. node -v 설치 확인
3. npx 확인

**새로운 react 프로젝트 파일 생성**

1. `npm install -g create-react-app`
2. `npx create-react-app 프로젝트명` 로 React 프로젝트 생성
3. `cd 프로젝트명`
4. `npm start` 여기서 npm start는 package.json의 14번째줄 scripts에서 어떤게 실행되는지 확인해볼 수
   있다.

## src/index.js

위 폴더를 보면 우리가 그동안 만든 컴포넌트나 App() 실행함수가 자동으로 만들어져 있는것을 확인할 수있
다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
```

위 코드를 아래 코드로 변경해줘야한다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

## src/App.js

App.js에서 화면을 꾸며주고 기능을 추가해나갈수있다.

## 지워줘야 할 파일

Creat-react-App 으로 React를 설치하고나서 쓸모없는 파일을 삭제해줘야 한다. src폴더에는 App.js와
index.js만 남기고 아래 파일을 삭제해준다.

1. App.test.js
2. App.css
3. logo.svg
4. index.css
5. reportWebVitals.js
6. setupTests.js
