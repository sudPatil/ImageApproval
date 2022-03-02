import '@testing-library/jest-dom'
import App from '../App';
import { render } from '@testing-library/react';
import store from '../store/index'
import { Provider } from 'react-redux';

describe('<App />', () => {

  it('<App /> render', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/IMAGE APPROVAL/)).toBeInTheDocument();
  });
})
