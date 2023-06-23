
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FaGithub} from 'react-icons/fa'
import {IoBookSharp} from 'react-icons/io5'

const Timel = () => {

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
    fontSize: 50
  };

return <section >
 <section> 
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <h4 style={styles} className='font-bold btn2 btn2-sm3 ' >
      ACHIEVEMENTS<br />
    </h4> 
    </div>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="April 2023 - Ongoing"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoBookSharp/>}
  >
    <h3 className="vertical-timeline-element-title">  Stanford University</h3>
    <h4 className="vertical-timeline-element-subtitle">Code In Place</h4>
    <p>
    Student</p>
  </VerticalTimelineElement>
  
  
  <VerticalTimelineElement
  contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="March 2022 - Ongoing"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaGithub/>}
  >
    <h3 className="vertical-timeline-element-title">Women Engineering Fellow</h3>
    <h4 className="vertical-timeline-element-subtitle">WE Cohort 2022 </h4>
    <h4 className="vertical-timeline-element-subtitle">Google and Talentsprint </h4>
    <p>
    selected among 28,000+ applications from all over the India by GOOGLE and TALENTSPRINT
<br/ >Provided with 100% Scholarship and Two year of mentorship by Google.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    className="vertical-timeline-element--education"
    contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82))' }}
    date="DECEMBER 2021 - Ongoing"
    iconStyle={{ background: 'rgb(16, 204, 82))', color: '#fff' }}
    icon={<FaGithub/>}
  >
    <h3 className="vertical-timeline-element-title">MMVY Scholar</h3>
    <h4 className="vertical-timeline-element-subtitle">Madhya Pradesh Government</h4>
    <h4 className="vertical-timeline-element-subtitle">INDIA </h4>
    <p>
    Honoured by Madhya Pradesh State Government based on merit along with financial Support.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="NOVEMBER 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<IoBookSharp/>}
  >
    <h3 className="vertical-timeline-element-title"> IET Scholarship</h3>
    <h4 className="vertical-timeline-element-subtitle">Regional Qualifier</h4>
    <p>
    Student</p>
  </VerticalTimelineElement>

</VerticalTimeline>
</section>
</section>

};
export default Timel;
