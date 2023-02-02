//Button.js를 import 해온다.
import Btn from './Btn.js';
import styles from './App.module.css';

function App() {
    return (
        <div>
            <h1 className={styles.title}>ReactJS 시작</h1>
            <Btn text={'클릭'} />
        </div>
    );
}

export default App;
