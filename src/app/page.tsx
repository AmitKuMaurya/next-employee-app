'use client';
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchEmployee } from './redux/slices/employee.slice';
import { AppDispatch, RootState } from './redux/store/store';



// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch<any>();
  const {lists} = useSelector((state : RootState)=> state.employees)
  
  console.log('lists: ', lists);
  useEffect(()=>{
    dispatch(fetchEmployee())
  },[])

  return (
    <div>Hello</div>
  )
}
