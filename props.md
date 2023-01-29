1. props에 function도 보낼 수 있음. 이것은 JSX로 html 태그 자체에 이벤트 리스너를 넣는것과는 전혀 다
   른것임. 그저 이벤트를 실행시키는 함수가 프로퍼티로 들어간 것임. prop은 그냥 부모에서 자식으로 데
   이터를 넘길 때 사용하는 argument의 역할이니까!

2. 부모의 상태를 바꾸는 함수를 만들었고, 부모 컴포넌트에서 그 함수를 prop으로 보내면 자식 컴포넌트에
   서 그 함수가 실행된다.

3. 불필요한 re-render는 React.memo()로 관리할 수 있음부모 컴포넌트의 state를 변경하면 당연히 그 자식
   컴포넌트들도 Re-render가 일어남. 불필요한 렌더링이 발생할 수도 있는데, 이 경우에는 React.memo()로
   prop의 변경이 일어난 부분만 렌더링 시킬 수 있음. 아주 많은 자식 컴포넌트를 가지고 있는 부모 컴포
   넌트일 때 사용하면 될듯. ![1](images/1.png)

4. React.memo() 컴포넌트가 React.memo()로 wrapping 될 때, React는 컴포넌트를 렌더링하고 결과를 메모
   이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된
   내용을 재사용한다.

5. React.memo React.memo는 고차 컴포넌트(Higher Order Component)입니다. 컴포넌트가 동일한 props로 동
   일한 결과를 렌더링해낸다면, React.memo를 호출하고 결과를 메모이징(Memoizing)하도록 래핑하여 경우
   에 따라 성능 향상을 누릴 수 있습니다. 즉, React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된
   결과를 재사용합니다.

```javascript
const MyComponent = React.memo(function MyComponent(props) {
/* props를 사용하여 렌더링 */
});


//Btn이라는 함수의 매개변수 앞에 React.memo를 사용하면 랜더링이 필요한 곳에서만 사용 가능하다.
const Btn = React.memo(({ text, istrue, changedValue }) => {
      ....
});
```

https://ko.reactjs.org/docs/react-api.html#reactmemo
