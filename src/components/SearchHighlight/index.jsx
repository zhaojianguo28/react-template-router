/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import {  Input} from 'antd';
import styles from   './index.module.less'
import { render } from './method'

const { TextArea } = Input;

const SearchHighlight = (props) => {
  const { textList,onChange } = props;
  const contentRef = useRef();
  const [isEditingIndex, setIsEditingIndex] = useState(undefined) // 是否正在编辑
  const [curEditingVal,setCurEditingVal] = useState('')

  useEffect(() => {
    // render(textList,contentRef, '',true);
  }, [])
  
  const [inpVal, setInpVal] = useState('')

  // input输入关键字
  const onSearch = (e) => {
    setInpVal(e.target.value)
    render(textList,contentRef, e.target.value, false)
  }

  const curStatement = (index,text) => {
    console.log('index,text', index, text);
    setCurEditingVal(text)
    setIsEditingIndex(index)
  }

  const onEdit = (e,text, index) => {
    // console.log('e,text, index', e.target.value, text, index);
    console.log('e,text, index', e.target.value );
    const list = [...textList];
    list[index] = e.target.value
    onChange(list)
  }

  return (
    <div className={styles.wrap}>
      <div>
        <Input
          placeholder='请输入关键字'
          onChange={onSearch}
          value={inpVal}
        />
      </div>
      {/* 文章内容展示区域 */}
      <div className={styles.content} ref={contentRef}>
        {textList.map((text, index) => {
          if (text.startsWith("@")) {
            return <div key={index} onClick={()=>curStatement(index,text)}>{ text.slice(1)}</div>
          } else {
            if (isEditingIndex === index)  {
              return <span key={index} style={{ margin: '0px', padding: '0px',textDecoration: 'underline' }} contentEditable="true" onClick={() => curStatement(index, text)}>{text}</span>
            } else {
              return <span key={index} style={{ margin: '0px', padding: '0px' }}  onClick={() => curStatement(index, text)}>{text}</span>
              // return <span key={index} style={{ margin: '0px', padding: '0px',textDecoration: 'underline' }} contentEditable="true" onClick={() => curStatement(index, text)}>{text}</span>
            }
            

          }
        })}
      </div>
    </div>
  )
}

export default SearchHighlight;