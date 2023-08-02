import React from 'react'
import Slider from "react-slick";
import Carousel from './Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const people =
  [
    {
      "name": "John Doe",
      "jobTitle": "Software Engineer",
      "imageSource": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "description": "I absolutely loved the course website! It provided a comprehensive and well-structured curriculum that helped me enhance my programming skills. The course content was engaging and easy to follow. Highly recommended!"
    },
    {
      "name": "Jane Smith",
      "jobTitle": "Web Developer",
      "imageSource": "https://images.unsplash.com/photo-1597093109948-ef48e9dcfc7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGh1bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "description": "The course website is fantastic! It offers a wide range of topics relevant to web development. The instructors are knowledgeable, and the hands-on projects allowed me to apply what I learned effectively. It's an excellent platform for aspiring developers!"
    },
    {
      "name": "Michael Johnson",
      "jobTitle": "Data Scientist",
      "imageSource": "https://images.unsplash.com/photo-1569931727762-93dd90109ecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      "description": "The course website exceeded my expectations! The data science courses are top-notch, and the instructors are experts in their field. I gained valuable insights and practical experience through real-world projects. If you want to enter the data science field, this is the place to be!"
    },
    {
      "name": "Emily Brown",
      "jobTitle": "UX Designer",
      "imageSource": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "description": "I can't speak highly enough about the course website! The UX design courses are exceptional, and the platform offers a supportive community of fellow designers. The instructors' guidance and the design challenges helped me grow as a professional. Don't miss out on this amazing learning experience!"
    },
    {
      "name": "Robert Williams",
      "jobTitle": "Product Manager",
      "imageSource": "https://images.unsplash.com/photo-1525373953925-d9ed9fde387b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
      "description": "Enrolling in the course website was one of the best decisions I made for my career! The product management courses are comprehensive and cover all aspects of the role. The platform's user-friendly interface and interactive quizzes made learning enjoyable. If you want to excel in product management, look no further!"
    }
  ]

export default function SleekCarousel() {


  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <div>
      <Slider {...settings} className=' overflow-y-visible overflow-x-hidden '>
        {people.map((person, i) => {
          console.log(person)
          return (
            <Carousel key={i} name={person.name} title={person.jobTitle} image={person.imageSource} description={person.description} />
          )

        })}
      </Slider>
    </div>
  );

}

