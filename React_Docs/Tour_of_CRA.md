## PropTypes 설치

새로운 터미널을 열고 아래 코드를 입력해준다.

```bash
npm i prop-types
```

## PropTypes import

```javascript
import PropTypes from 'prop-types';
```

-   예시

```javascript
import PropTypes from 'prop-types';

const Btn = ({ text }) => {
    return <button>{text}</button>;
};

Btn.propTypes = {
    text: PropTypes.string,
};
```

## css Modular

`react`에서는 `style.css` 파일을 `App.js`에서 `import` 하는것을 권장하지 않는다. `Module`이라는
`style` 파일을만들고, 사용될 컴포넌트 안에서 `style.css`를 `import`한다. 여기서 멋진 점은 랜덤한 클
래스명을 생성해줄수있다는 점이다. 이를 사용하면 클래스 명이 겹치는 일이 없다는 장점이 있다.

모듈 파일을 만드는 규칙은 `파일명.module.css` 처럼 사용해주어야 한다.

아주 멋진 점은 `create-react-app`은 `css`코드를 `JS` 오브젝트로 변환 시켜준다는 점이다.

1. `Btn.module.css` 라는 파일을 생성해 `css`를 넣어준다.
2. `Btn.js` 컴포넌트에 아래와 같이 `css module`을 `import`한다.

```javascript
import styles from './Btn.module.css';
```

3. `Btn.js`에 클래스명을 `'styles.myBtn'`으로 넣어준다.

```javascript
const Btn = ({ text }) => {
    return <button className={styles.myBtn}>{text}</button>;
};
```

4. 콘솔로그를 찍어보면 아래처럼 클래스명 뒤에 랜덤한 값이 들어간다.

![CleanShot 2023-02-03 at 05 12 53](https://user-images.githubusercontent.com/76584961/216439630-281a39db-1b38-42bd-8658-c3968b38c141.png)
