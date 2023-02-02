# PropTypes

```html
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
<script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
```

기본적으로 `PropTyes`를 사용하려면 위 스크립트를 가져와야한다.

```javascript
const Btn = React.memo(({ text, istrue, changedValue, fontSize = 12 }) => {
    console.log(text, '버튼이 렌더링 됨');
    return (
        <div>
            <button
                onClick={changedValue}
                style={{
                    backgroundColor: istrue ? 'green' : 'tomato',
                    color: 'white',
                    padding: '1rem',
                    border: 'none',
                    borderRadius: '1rem',
                    fontSize,
                }}
            >
                {text}
            </button>
        </div>
    );
});
// props의 타입이 무엇이고 어떤 모양이어야 하는지 설정해줌
Btn.propTypes = {
    text: PropTypes.string,
    fontSize: PropTypes.number.isRequired,
};
/*react.development.js:245 Warning: Failed prop type: Invalid prop `fontSize` of type `string`
         supplied to `<<anonymous>>`, expected `number`.at <anonymous>:11:19 */
```

`Btn props`에 기본값을 정해줄 수 있고, `style`에 `props`를 할당할 수 있다. 그리고,
`컴포넌트 Btn.propTypes = { }` 를 사용하면 컴포넌트에 알맞지않은 props 타입이 오면 콘솔창에 경고를띄
워준다.

[React 공식문서 PropTyles]('https://ko.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper')
