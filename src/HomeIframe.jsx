import { useState, useEffect,useRef } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import MyContext from './components/MyContext';
import { Button, Flex, Layout, Drawer,Space} from 'antd';


const { Header, Footer, Content } = Layout;
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

const Home = () => {
  const [name, setName] = useState('')
  const [open ,setOpen] = useState(false)
  const navigate = useNavigate()
  const homeRef = useRef(null);
  const location = useLocation()
  const [searchParams] = useSearchParams()
  // const history = useHistory();

  console.log('location--1:',location);
  console.log('searchParams--1:',searchParams.get('name'));


  const [grandFather, setGrandFather] = useState({name: 'Home',age: 88, status: 'good'})
  
  useEffect(() => {
    setName('Home页进来了')
    return () => { }
  }, [])
 

  // 通信传值
  const onGoToMsg = () => {
    console.log();
    window.parent.postMessage(
      {
        type: 'type--1',
        detail: 'detail----1',
      }
    )
  }

  return (
    <MyContext.Provider value={{ grandFather, setGrandFather }}>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <div>
            <Button onClick={() => {
              // window.close()
              setOpen(true)
          }}>关闭窗口</Button>
          </div>
            <div ref={homeRef}>
              <div>
                <Flex gap="4px 0">
                <Button onClick={() => {
                   // 2
                    navigate('/myIframe',{
                      state: {
                        id: 111,
                        name:'fromhome'
                      }
                    }) 
                 
                  }}>跳转到音频播放页</Button>
           
                </Flex>
              </div>
            </div>
          </Content>
          <Footer style={footerStyle}>Footer</Footer>
      </Layout>

     {open && <Drawer
        title="Drawer with extra actions"
        placement={"bottom"}
        height="100vh" forceRender={true}
        width={500}
        onClose={() => {
          setOpen(false)
        }}
        open={open}
        extra={
          <Space>
            <Button onClick={()=>{ }}>Cancel</Button>
            <Button type="primary" onClick={()=>{setOpen(false)}}>
              OK
            </Button>
          </Space>
        }
      >
          <iframe
          style={{
            height: '100%',
            width: '100%',
            border: 'none',
          }}
          src={`http://localhost:5173/myIframe?type=${'type111'}&name=${'zjg'}&id=${123}`}
          // src={`https://juejin.cn/user/501835073597677`}
          onLoad={() => {
            console.log('z这是log中-----------------');
          }}
          // loading={loading }
      ></iframe> 
      </Drawer>}
    </MyContext.Provider>
  
  )
}

export default Home;
