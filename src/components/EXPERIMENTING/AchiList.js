import React from 'react'
import { List } from 'semantic-ui-react'

const ListExampleHeader = () => (
  <List className='container mx-auto text-[20px]'>
    <List.Item>
        <List.Header className='flex items center font-bold'> -- Stanford University: Code In Place </List.Header>
       Accepted as student in Code in place by Stanford University
    </List.Item>
    <List.Item>
        <List.Header className='flex items center font-bold'> -- Women Engineers Scholar - TalentSprint and Google  </List.Header>
        ◦ selected among 28,000+ applications from all over the India by GOOGLE and TALENTSPRINT
◦ Provided with 100% Scholarship and Two year of mentorship by Google.
    </List.Item>
    <List.Item>
        <List.Header className='flex items center font-bold'> -- MMVY Scholars : Madhya Pradesh Government </List.Header>
        Honoured by Madhya Pradesh State Government and provided scholarship based on merit </List.Item>
    <List.Item>
        <List.Header className='flex items center font-bold'> -- IET Scholarship: Regional Qualifier </List.Header>
       Qualified for Regional round of IET Scholarship 2022 in Kolkata Region
    </List.Item>
    <List.Item>
        <List.Header className='flex items center font-bold'> -- Product-Led Growth By TPF </List.Header>
       Successfully Completed PLG Cohort 2023 by The Product Folks
    </List.Item>
    
  </List>
)

export default ListExampleHeader