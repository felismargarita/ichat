import React from 'react'
import classnames from 'classnames'
interface SearchProps {
  className?: string
}

const Search:React.FC<SearchProps> = ({className})=>{
  const classes = classnames('input-search',className)
  return (
    <input className={classes} placeholder="搜索"/>
  )
}

export default Search