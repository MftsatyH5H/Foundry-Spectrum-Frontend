import React from 'react'
import SidebarContentDropdown from './SidebarContentDropdown'
import { Course, Chapter } from '../../../types/course.type'

function CourseSidebar() {
  // Dummy data for the course
  const course: Course = {
    id: "1",
    title: "Complete Web Development Course",
    description: "Learn full-stack web development from scratch",
    price: 99.99,
    difficulty: "intermediate",
    status: "published",
    vdo_folder_id: "dummy_folder_123",
    tax_percentage: 10,
    discount_percentage: 20,
    is_free: false,
    duration_mins: 1200,
    thumbnail_url: "/testimage1.jpeg",
    materials_url: "/materials.zip",
    languages: [
      {
        name: "English",
        content: "Full course content in English"
      }
    ],
    categories: [
      {
        id: 1,
        name: "Web Development",
        description: "Learn to build modern web applications"
      }
    ],
    tools: [
      {
        id: 1,
        name: "React",
        description: "JavaScript library for building user interfaces"
      },
      {
        id: 2,
        name: "Node.js",
        description: "JavaScript runtime for backend development"
      }
    ],
    chapters: [
      {
        id: 1,
        title: "Introduction to Web Development",
        description: "Get started with the basics of web development",
        order_index: 1,
        vdo_sub_folder_id: "intro_chapter",
        lessons: [
          {
            id: 1,
            title: "The basic structure of the Blueprint visual scripting system, as well as fun",
            description: "Understanding the fundamentals",
            content: "Introduction to web development concepts",
            type: "video",
            vdo_video_id: "intro_video_1",
            order_index: 1,
            is_free_preview: true
          },
          {
            id: 2,
            title: "The basic structure of the Blueprint visual scripting system, as well as fun",
            description: "Install and configure necessary tools",
            content: "Step-by-step environment setup",
            type: "video",
            vdo_video_id: "setup_video_1",
            order_index: 2,
            is_free_preview: false
          },
          {
            id: 3,
            title: "The basic structure of the Blueprint visual scripting system, as well as fun",
            description: "Understanding the fundamentals",
            content: "Introduction to web development concepts",
            type: "video",
            vdo_video_id: "intro_video_3",
            order_index: 3,
            is_free_preview: true
          },
          {
            id: 4,
            title: "The basic structure of the Blueprint visual scripting system, as well as fun",
            description: "Quiz to test your knowledge",
            content: "Quiz content",
            type: "quiz",
            vdo_video_id: "quiz_1",
            order_index: 4,
            is_free_preview: false
          }
        ]
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        description: "Master the structure of web pages",
        order_index: 2,
        vdo_sub_folder_id: "html_chapter",
        lessons: [
          {
            id: 5,
            title: "HTML Basics and Structure",
            description: "Learn HTML tags and elements",
            content: "Introduction to HTML structure",
            type: "video",
            vdo_video_id: "html_basics_1",
            order_index: 1,
            is_free_preview: true
          },
          {
            id: 6,
            title: "Forms and Input Elements",
            description: "Creating interactive forms",
            content: "Building forms with HTML",
            type: "video",
            vdo_video_id: "forms_1",
            order_index: 2,
            is_free_preview: false
          },
          {
            id: 7,
            title: "HTML5 Semantic Elements",
            description: "Modern HTML structure",
            content: "Using semantic HTML5 elements",
            type: "video",
            vdo_video_id: "html5_semantic_1",
            order_index: 3,
            is_free_preview: false
          },
          {
            id: 8,
            title: "HTML Quiz: Test Your Knowledge",
            description: "Quiz on HTML fundamentals",
            content: "HTML quiz content",
            type: "quiz",
            vdo_video_id: "html_quiz_1",
            order_index: 4,
            is_free_preview: false
          }
        ]
      },
      {
        id: 3,
        title: "CSS Styling",
        description: "Make your websites beautiful",
        order_index: 3,
        vdo_sub_folder_id: "css_chapter",
        lessons: [
          {
            id: 9,
            title: "CSS Selectors and Properties",
            description: "Understanding CSS fundamentals",
            content: "CSS basics and styling properties",
            type: "video",
            vdo_video_id: "css_basics_1",
            order_index: 1,
            is_free_preview: true
          },
          {
            id: 10,
            title: "Flexbox Layout Techniques",
            description: "Modern CSS layout techniques",
            content: "Mastering Flexbox for layouts",
            type: "video",
            vdo_video_id: "flexbox_1",
            order_index: 2,
            is_free_preview: false
          },
          {
            id: 11,
            title: "CSS Grid System",
            description: "Advanced layout with CSS Grid",
            content: "CSS Grid fundamentals",
            type: "video",
            vdo_video_id: "css_grid_1",
            order_index: 3,
            is_free_preview: false
          },
          {
            id: 12,
            title: "CSS Quiz: Styling Mastery",
            description: "Test your CSS knowledge",
            content: "CSS quiz content",
            type: "quiz",
            vdo_video_id: "css_quiz_1",
            order_index: 4,
            is_free_preview: false
          }
        ]
      }
    ]
  }

  return (
    <div className="w-full md:w-96 h-screen overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-webkit">
            <div>
                {course.chapters
                    .sort((a: Chapter, b: Chapter) => a.order_index - b.order_index)
                    .map((chapter: Chapter, index: number) => (
                        <SidebarContentDropdown 
                            key={chapter.id} 
                            chapter={chapter} 
                            isOpen={index === 0} // First chapter open by default
                        />
                    ))}
            </div>
        </div>
    </div>
  )
}

export default CourseSidebar