import ReactDOM from 'react-dom';
import { App } from './components/App';
import styles from './index.scss';

const insertRoot = () => {
  const root = document.createElement('div');

  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  return root;
};

ReactDOM.render(App, insertRoot());
