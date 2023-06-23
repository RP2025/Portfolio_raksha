import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleHeader = () => (
  <List className='container mx-auto text-[20px]'>
    <List.Item>
        <List.Header className='flex items center font-bold'> -> Member at CodeIIEST</List.Header>
       Core Member of official Coding Club of IIEST Shibpur 
    </List.Item>
    <List.Item>
        <List.Header className='flex items center font-bold'> -> Member at GDSC IIEST</List.Header>
       Core Member of GDSC IIEST Shibpur
    </List.Item>
    <List.Item>
        <List.Header className='flex items center font-bold'> -> Entrepreneur Development Cell , IIEST</List.Header>
       Core Member of Entrepreneur Development Cell , IIEST 
    
  </List>
)

export default ListExampleHeader