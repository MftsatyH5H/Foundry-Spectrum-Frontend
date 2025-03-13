import React from 'react'
import ContentDropdown from './contentDropdown'

function ContentDropdownList() {
  return (
    <div className='flex flex-col items-center justify-center gap-[16px]'>
        <ContentDropdown />
        <ContentDropdown />
        <ContentDropdown />
    </div>
  )
}

export default ContentDropdownList