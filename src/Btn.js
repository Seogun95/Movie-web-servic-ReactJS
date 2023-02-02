//props-Types
import PropTypes from 'prop-types';
import styles from './Btn.module.css';

const Btn = ({ text }) => {
    return <button className={styles.myBtn}>{text}</button>;
};

Btn.propTypes = {
    text: PropTypes.string.isRequired,
};

//App.js에서 Btn을 가져올 수 있도록 Btn을 exprot한다.
export default Btn;
