import React from 'react';

export default function About() {
    return (
      <div style={{ textAlign: 'center', marginTop: '35px', marginBottom: '65px' }}>
        <h1 style={{ marginTop: '30px' }}>About Me</h1>
        <div style={{ margin: '0 20px' }}>
          <p className='about'>
            Hello! I'm passionate about programming and learning more to help improve upon my skills.
          </p>
          <p className='about'>
            In my freetime I enjoy to take my Shiba Inu puppy on walks, along with enjoying the outdoors. I also like to spend my free time catching up on shows and movies as well as playing the video games I never got around to playing.
          </p>
          <p className='about'>
            I'm currently living in Savannah, Ga luckily with the majority of my family living close by. Family time is important for us as a way to get together and unwind from the daily causes of stress. With them living close also means I can often get to see my new neices and nephews.
          </p>
          <p className='about'>
            The best  thing about coding in my opinion is the constant change within the field. With my current knowledge in software development I'm proud of how far I've come, but the exciting part is that there's still a lot more to learn. 
          </p>
        </div>
      </div>
    );
  }