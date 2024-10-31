import { useState, useEffect } from "react";
import { Drawer } from "antd";
import { useNavigate,useLocation, useSearchParams } from 'react-router-dom'


const MyIframe = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] =  useSearchParams()
  
  useEffect(() => {
    console.log('刚进了 iframe子页面');
    
    console.log('location:',location);
    console.log('searchParams-name:',searchParams.get('name'));
    console.log('searchParams-id:',searchParams.get('id'));
    console.log('searchParams-type:', searchParams.get('type'));
    console.log('参数：：', location.search.slice(1).split('&'));
    const paramsArr = location.search.slice(1).split('&');
    const obj = {}
    paramsArr.forEach(item => {
      const arr = item.split('=')
      obj[arr[0]] = arr[1]
    })
    console.log('参数--1:', obj);
    
  },[])

  return (
    <div>
      ...iframe里面
    </div>
  )
}

export default MyIframe;