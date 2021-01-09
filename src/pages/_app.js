import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../redux/store'

import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp)
