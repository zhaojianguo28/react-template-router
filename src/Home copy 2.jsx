import { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import MyContext from './components/MyContext';
import { Button, Flex, Layout, Tag } from 'antd';

import HomeChildA from './pages/home/HomeChildA'
import HomeChildB from './pages/home/HomeChildB'

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
  color: '#fff',
  backgroundColor: '#d0d0d0',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#adc7e8',
};

let beginTime = 0;
let endTime = 0;

let observer = new MutationObserver(function(mutations, observer) {
  // 如果这里没有mutation，则可以认为DOM不再变化
  console.log('DOM has stopped mutating');

  endTime = performance.now();
  console.log('endTime::::',endTime );
  // 计算并打印耗时
  console.log(`Render time with memo-----------: ${endTime - beginTime } ms`);
  observer.disconnect(); // 停止观察
});

let options = { attributes: true, childList: true, subtree: true };

  


const Home = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);
  const homeRef = useRef(null);

  const [num, setNum] = useState(0)

  const [A, setA] = useState('A')
  const [B, setB] = useState('B')
  // 共同依赖的值
  const [commonVal, setCommonVal] = useState(100)

  const [grandFather, setGrandFather] = useState({name: 'Home',age: 88, status: 'good'})
  
  useEffect(() => {
    setName('Home页进来了')
    // // 在组件渲染前设置起始时间戳
    // startTimeRef.current = performance.now();

    // console.log(' home页初始化：', A, B );

    return () => {
      // console.log('home组件销毁了');
      //  // 在组件卸载后设置结束时间戳
      //  endTimeRef.current = performance.now();
      //  // 计算并打印耗时
      //  console.log(`Render time with memo: ${endTimeRef.current - startTimeRef.current} ms`);
    }
  }, [])

  observer.observe(document.body, options); // 观察body的变化

  return (
    <MyContext.Provider value={{ grandFather, setGrandFather }}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
            <div ref={homeRef}>
              <div>
              
                <Flex gap="4px 0">
                  <Button onClick={() => {
                    beginTime = performance.now();
                    console.log('beginTime::',beginTime);
                    setA('A---' + num)
                    setNum(num + 1)
                  }}>修改A值</Button>
                  <Tag color="magenta">A：</Tag>
                  <Tag color="#f50">{ A}</Tag>
                </Flex>
                <Flex gap="4px 0">
                  <Button onClick={() => {
                    beginTime = performance.now();
                    console.log('beginTime::',beginTime);
                   setB('B---' + num)
                   setNum(num + 1)
                  }}>修改B值</Button>
                  <Tag color="blue">B：</Tag>
                  <Tag color="#2db7f5">{ B}</Tag>
                </Flex>
                
                <Flex gap="4px 0">
                  <Button onClick={() => {
                    beginTime = performance.now();
                    console.log('beginTime::',beginTime);
                   setCommonVal('commonVal' + commonVal + num)
                  }}>修改common值</Button>
                  <Tag color="blue">commonVal：</Tag>
                  <Tag color="#2db7f5">{ commonVal}</Tag>
                </Flex>
              </div>
              <HomeChildA data={A} common={ commonVal} />
              <HomeChildB data={ B } common={ commonVal} />
            </div>
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </MyContext.Provider>
  
  )
}

export default Home;
