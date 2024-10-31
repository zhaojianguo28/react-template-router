import React, { useRef,useState, useEffect} from "react";
import styles from './audio.module.less'
import { useNavigate } from 'react-router-dom'
import music1 from '../../assets/music/music1.mp3'
import music2 from '../../assets/music/music2.mp3'
import music3 from '../../assets/music/music3.mp3'
import music4 from '../../assets/music/music4.mp3'
import music5 from '../../assets/music/music5.mp3'
import music6 from '../../assets/music/music6.mp3'
import music7 from '../../assets/music/music7.mp3'
import fenghuang from '../../assets/music/fenghuang.mp3'
import yulong from '../../assets/music/yulong.mp3'

import pre from '../../assets/icon/pre.png'
import next from '../../assets/icon/next.png'
// import preOrNext from '../../assets/icon/prenext.png'

// 注意： IE8 或更早版本的IE浏览器不支持 audio 标签。

const InitAudio = () => {
  const navigate = useNavigate()
  const myRef = useRef()
  
  const list = [
    // { source: music1, name: 'music1',  id: 1, status: 'closed'},
    // { source: music2, name: 'music2',  id: 2, status: 'closed'},
    // { source: music3, name: 'music3',  id: 3, status: 'closed'},
    // { source: music4, name: 'music4',  id: 4, status: 'closed'},
    // { source: music5, name: 'music5',  id: 5, status: 'closed'},
    // { source: music6, name: 'music6',  id: 6, status: 'closed'},
    { source: music7, name: 'music6',  id: 6, status: 'closed'},
    { source: fenghuang, name: 'music6',  id: 6, status: 'closed'},
    { source: yulong, name: 'music6',  id: 6, status: 'closed'},
  ]

  const curMusicRef = useRef({...list[0], number: 0})

  // 播放上一首
  const onPlayPre = () => {
    const current = curMusicRef.current
    if ( current.number === 0 ) {
      return
    }
    curMusicRef.current = {...list[current.number-1], number: current.number - 1}
    myRef.current.src = curMusicRef.current.source
    myRef.current.play()
  }

  const onPlayNext = () => {
    
    const current = curMusicRef.current
    if ( current.number === list.length -1 ) {
      return
    }
    curMusicRef.current = {...list[current.number+1], number: current.number + 1}
    myRef.current.src = curMusicRef.current.source
    myRef.current.play()
  }

  return (
    <div className={styles.wrap2}>
      <h1>原生样式</h1>
      <div>
      <button className={styles.switch} onClick={() => {
        navigate('/audio',{
          state: {
            id: 111,
            name:'fromhome'
          }
        }) 
        }}> 跳到自定义样式</button>
        
     </div>
      <div className={styles.initOperation}>
        <span  className={styles.pre}  onClick={onPlayPre}>
          <img src={ pre} />
        </span>
        <audio controls ref={myRef} >
          <source  src={curMusicRef.current.source}></source>
        </audio>
        <span className={styles.next}  onClick={onPlayNext}>
          <img src={ next} />
        </span>
      </div>
    </div>
  )
}

export default InitAudio;