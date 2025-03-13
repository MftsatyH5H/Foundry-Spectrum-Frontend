import React from 'react'
import Faq from './Faq'
function FaqList() {
  return (
    <div>
        <Faq state={true}/>
        <Faq />
        <Faq />
    </div>
  )
}

export default FaqList