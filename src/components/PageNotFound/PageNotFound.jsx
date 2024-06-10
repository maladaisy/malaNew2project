import React from 'react'
import "@innovaccer/design-system/css/dist/index.css";
import { EmptyState, Button, Text, Link } from '@innovaccer/design-system';
import { TbFaceIdError } from "react-icons/tb";
import Page from '../../assets/images/fly.png';

function PageNotFound() {
  return (
    <>
   <div className='pageNotFound'>
   <EmptyState>
   {/* <TbFaceIdError style={{ width: '50%', height: '50%', backgroundColor: 'blue' }}/> */}
   <img src={Page} alt="page" width="60%" height="60%"/>
        <Text>Page does not exist</Text>
        <p>
          You seem to have followed a dead link. Check the URL or use the go home button given below.
        </p>
        <Link  href="/"  target="_parent">
          <Button >Go home</Button>
        </Link>
      </EmptyState>
   </div>
  
    </>
  )
}

export default PageNotFound