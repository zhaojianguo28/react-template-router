import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import MyContext from './components/MyContext';
import { Flex, Layout } from 'antd';

import HomeChildA from './pages/home/HomeChildA'

import ChildA from './components/ChildA'

const { Header, Footer, Sider, Content } = Layout;
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  // width: 'calc(50% - 8px)',
  width: '100%',
  maxWidth: 'calc(100% - 8px)',
};
const headerStyle  = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#adc7e8',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#d0d0d0',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#adc7e8',
};

const Home = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const [grandFather, setGrandFather] = useState({name: 'Home',age: 88, status: 'good'})
  
  useEffect(() => {
    setName('Home页进来了')

    return () => {
      console.log('home组件销毁了');
    }
  }, [])
  
  const goAbout = () => {
    // 1
    // navigate( '/about?name=fromhome'); // 对应：const [searchParams] = useSearchParams(); 使用 URLSearchParams 提供的方法来获取参数；const name = searchParams.get('name');
    // 2
    navigate('/about',{
      state: {
        id: 111,
        name:'fromhome'
      }
    }) // 这种的对应 useLocation；const {state} = useLocation();state里面就是{ a:10 }
    // // 3
    // navigate('/about/12'); // 对应：需要对路由进行配置path:'/destination:/id'，需要这样解：const { id } = useParams();

  }

  const editData = (data) => {
    setName('这是修改后的值')
    setGrandFather(data)
  }



  return (
    <MyContext.Provider value={{ grandFather, setGrandFather }}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
            
          <div>
            <button onClick={goAbout}>去about</button>
            <button onClick={editData}>修改name</button>
            <h2>这是home</h2>
            {name}
            <ChildA />
            <HomeChildA/>
          </div>
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </MyContext.Provider>
  
  )
}

export default Home;
