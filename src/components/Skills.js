import React from 'react';
import { ReactDOM } from 'react';
const SKILLS = [
    {type: "ABC", level: 99},
    {type: "DEF", level: 98},
    {type: "JSDFGHJK", level: 87},
  ];
  
  class SkillBars extends React.Component {
    constructor(props) {
      super(props);
      this.state = { collapsed: true };       
    }
    
    componentDidMount() {
      setTimeout(() => {
        this.setState({ collapsed: false })
      }, 1000);
    }
  
    render() {
      const { collapsed } = this.state;
      const { hue, saturation, skills } = this.props;
  
      return(  
        <div id="app" className={`container ${collapsed ? 'collapsed' : ''}`}>
          <h1>Skill Bars - React Component</h1>
          <p>Set the Hue and Saturation on the <code>&lt;SkillBars /&gt;</code> instance and let the component deal with the shades</p>
          <hr/>
          <ul className="skills">
            {skills.map((skill, index) => 
              <li
                key={skill.type}
                style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${100 / (index + 3.5) }%)` }}
              >
                <p>{skill.type}<span>{skill.level}</span></p>
              </li>
            )}
          </ul>
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <SkillBars hue="300" saturation="40" skills={SKILLS} />,
    document.getElementById('root')
  );

export default SkillBars;