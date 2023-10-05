'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployee } from './redux/slices/employee.slice';
import { AppDispatch, RootState } from './redux/store/store';
import EmployeeCard from '@/component/cards/EmployeeCard';
import {Navbar} from '@/component/navbar/Navbar';


export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { lists, loading } = useSelector((state: RootState) => state.employees)

  console.log('loading: ', loading);
  console.log('lists: ', lists);
  useEffect(() => {
    dispatch(fetchEmployee())
  }, []);

  return (
    <>
    <Navbar/>
    {
      lists.employees?.map((ele : IEmployeee) => (<EmployeeCard key={ele._id} {...ele}/>))
    }
    </>
    // <div>{ loading ? "LOADING..." : lists.map((ele : any,i : number)=> <div key={i}><p>{ele.login}</p></div>) }</div>
  )
}
