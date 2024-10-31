import { useState, useEffect } from 'react';
// import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
// import MyContext from './components/MyContext';
// import { Button, Flex, Layout, Drawer,Space,Input} from 'antd';
import {  Input} from 'antd';
// const { Search } = Input;


const textList = [
  '你好！',
  '大江东去，浪淘尽，千古风流人物。',
  '故垒西边，人道是，三国周郎赤壁。',
  '乱石穿空，惊涛拍岸，卷起千堆雪。',
  '江山如画，一时多少豪杰。',
  '遥想公瑾当年，小乔初嫁了，雄姿英发。',
  '羽扇纶巾，谈笑间，樯橹灰飞烟灭。',
  '故国神游，多情应笑我，早生华发。',
  '人生如梦，一尊还酹江月。'
]
const article0 = "这里是一篇包含关键词的文章，例如JavaScript和Python。";
const Home = () => {
  const [inputVal, setInputVal] = useState('')  

  const [list, setList] = useState(textList)

  const [article, setArticle] = useState(article0)
  useEffect(() => {
    return () => { }
  }, [])
 
  // const onSearch = (value, _e, info) => {
  //   console.log(value,_e, info, info?.source, )
  // };
  const onChange = (e ) => {
    // console.log(e.target.value)
    // const key = e.target.value.trim();
    // let reg;
    // if (key) {
    //   reg = new RegExp(key, 'gi');
    // }
    // const newList = list.map(text => {
    //   let font = text;
    //   if (reg) {
    //     font = font.replace(reg, (key) => `<em>${key}</em>`)
    //     console.log('匹配到的：',font);
        
    //   }

    //   return font

    // })
    // setList(newList)
    // setInputVal(e.target.value)

    setInputVal(e.target.value)
    const keyword = "javascript";
    const results = fuzzyMatch(article, keyword);
     
    console.log(results); // [{ match: 'JavaScript', index: 15 }, ...]

  };

  function fuzzyMatch(article, keyword) {
    // 转义关键词中的特殊字符
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // 创建正则表达式，使用'g'标志进行全局匹配
    const regex = new RegExp(escapedKeyword, 'gi');
    // 执行匹配并返回结果
    let match;
    const matches = [];
    while ((match = regex.exec(article))) {
      matches.push({
        match: match[0],
        index: match.index,
      });
    }
    return matches;
  }
   
  // 使用示例
  
  // const keyword = "javascript";
  // const results = fuzzyMatch(article, keyword);
   
  // console.log(results); // [{ match: 'JavaScript', index: 15 }, ...]

  return (
    <div style={{backgroundColor:'#eee',padding: '20px'}}>
      
      {/* <Search
        placeholder="请输入"
        value={inputVal}
        onSearch={onSearch}
        style={{ width: 200 }}
      /> */}
      <Input
        placeholder="请输入"
        value={inputVal}
        onChange={onChange}
        style={{ width: 200 }}
      />
      <div style={{marginTop: '20px'}}>
        {/* {list.map((text) => {
          return text
        })} */}
        {/* { fuzzyMatch(article, keyword)} */}
      </div>
    </div>
    
  )
}

export default Home;
