import React, { Component } from 'react';
import Coursecardbig from './coursecardbig';

class Coursecardbiglist extends Component {
  state = {
    courses: [
      {
        id: 1,
        title: "The Ultimate Unreal Engine 2D Game Development Course",
        category: "Unreal Engine",
        level: "Beginner",
        description: "This is the most comprehensive Unreal Engine course available. If you want to learn how to architect a fully-functional RPG game, this course will give you the ability to do so with an expandable code base, architected with AAA quality code.",
        price: "$ 200",
        imagesrc: "karim-yasser-1.jpg"
      },
      {
        id: 2,
        title: "The Ultimate Unreal Engine 2D Game Development Course",
        category: "Another Category",
        level: "Beginner",
        description: "Course description here.",
        price: "$ 150",
        imagesrc: "karim-yasser-2.jpg"
      },
      {
        id: 3,
        title: "The Ultimate Unreal Engine 2D Game Development Course",
        category: "Unreal Engine",
        level: "Beginner",
        description: "This is the most comprehensive Unreal Engine course available. If you want to learn how to architect a fully-functional RPG game, this course will give you the ability to do so with an expandable code base, architected with AAA quality code.",
        price: "$ 200",
        imagesrc: "karim-yasser-3.jpg"
      }
    ]
  }

  render() {
    return (
      <div className='flex flex-wrap  justify-center items-center flex-col gap-[70px] mt-10'>
        {this.state.courses.map(course => (
          <React.Fragment key={course.id}>
            <Coursecardbig course={course} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Coursecardbiglist;