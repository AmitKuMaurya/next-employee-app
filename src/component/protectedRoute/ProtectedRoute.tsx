import { AUTHENTICATED, UNAUTHENTICATED } from '@/app/variables';
import React from 'react'
import { NextResponse } from 'next/server'
// import { permanentRedirect, redirect } from 'next/navigation'
import { getSession } from 'next-auth/react';

const ProtectedRoutee = (req:any) => {

  const loggedInUser =  localStorage.getItem("user");

  const parsedData: IOAuth | null = JSON.parse(loggedInUser || 'null');
  // console.log('parsedData********************: ', parsedData?.status);

  // if (authenticated) {
  //   redirect('/');
  // }

  // if (parsedData === undefined) {
  //   redirect('/login');
  // }

  const userIsAuthenticated = parsedData?.status;

  // if (userIsAuthenticated === AUTHENTICATED) {
  //   return NextResponse.redirect('/');
  // }

  // if (userIsAuthenticated === UNAUTHENTICATED) {
  //   return NextResponse.redirect('/login');
  // }

  // return NextResponse.next();


  // return children;
}


export async function ProtectedRoute (context : any, cb : any) {
  const session = await getSession(context);

  if(!session) {
    return  {
      redirect : {
        destination : '/login',
        permanent : false
      }
    }
  }
  
  return cb();
}
export default ProtectedRoute;