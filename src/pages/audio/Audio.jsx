import { useRef } from "react";
import { useNavigate } from 'react-router-dom'
import styles from './audio.module.less'
import music1 from '../../assets/music/music1.mp3'
import music2 from '../../assets/music/music2.mp3'
import music3 from '../../assets/music/music3.mp3'
import music4 from '../../assets/music/music4.mp3'
import music5 from '../../assets/music/music5.mp3'
import music6 from '../../assets/music/music6.mp3'

// 注意： IE8 或更早版本的IE浏览器不支持 audio 标签。

const Audio = () => {
  const navigate = useNavigate()
  const list = [
    { source: music1, name: 'music1',  id: 1, status: 'closed'},
    { source: music2, name: 'music2',  id: 2, status: 'closed'},
    { source: music3, name: 'music3',  id: 3, status: 'closed'},
    { source: music4, name: 'music4',  id: 4, status: 'closed'},
    { source: music5, name: 'music5',  id: 5, status: 'closed'},
    { source: music6, name: 'music6',  id: 6, status: 'closed'},
  ]
  const myRef = useRef()
  const curMusicRef = useRef({...list[0], number: 0})
  

  const onPlay = () => {
    myRef.current.play()
  }

  const onPlayOne = (item,index) => {
    curMusicRef.current = {...item, number: index}
    myRef.current.src = curMusicRef.current.source
    myRef.current.play()
  }

  const onStop = () => {
    myRef.current.pause()
  }

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

  // 下一首
  const onPlayNext = () => {
    const current = curMusicRef.current
    if ( current.number === list.length -1 ) {
      return
    }
    curMusicRef.current = {...list[current.number+1], number: current.number + 1}
    myRef.current.src = curMusicRef.current.source
    myRef.current.play()
  }

  const getRandomInt =(min, max)=> {
    min = Math.ceil(min); // 确保min是整数
    max = Math.floor(max); // 确保max是整数
    return Math.floor(Math.random() * (max - min + 1)) + min; // 返回介于min和max之间的整数
  }

  // 随机播放
  const onRandomPlay = () => {
    const val = getRandomInt(0, list.length - 1)
    console.log('val',val);
    const current = list[val]
    curMusicRef.current = {...current, number: val}
    myRef.current.src = curMusicRef.current.source
    myRef.current.play()
  }
  

  return (
    <div className={styles.wrap}>
      <h1>自定义样式</h1>
      <button onClick={() => {
        navigate('/initaudio',{
          state: {
            id: 111,
            name:'fromhome'
          }
        }) 
      }}> 跳到原生样式</button>
      <div>
        <audio ref={myRef} src={music1}></audio>
      </div>
      <div className={styles.musicList}>
        {list.map((item,index) => (
          <div className={styles.item} key={item.id} onClick={()=>onPlayOne(item,index)}>{ item.name}</div>
        ))}

      </div>
      <div className={styles.operation}>
        <button className={styles.begin} onClick={()=>onPlay(0)}>开始</button>
        <button className={styles.up} onClick={onPlayPre}>上一首</button>
        <button className={styles.next} onClick={onPlayNext}>下一首</button>
        <button className={styles.random} onClick={onRandomPlay}>随机播放</button>
        <button className={styles.single} onClick={()=>onStop()}>暂停</button>
      </div>
    </div>
  )
}

export default Audio;