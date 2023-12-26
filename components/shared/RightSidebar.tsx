import React from 'react';

const RightSidebar: React.FC = () => {
  const styles: React.CSSProperties = {
    maxWidth: '300px',
    fontSize: '20px',
    fontWeight: '450',
    fontFamily: 'Georgia, serif',
  };
  const styless: React.CSSProperties = {
    maxWidth: '300px',
    fontSize: '24px',
  
    fontWeight: '450',
    fontFamily: 'Georgia, serif',
  };


  return (
    <section style={styles} className="custom-scrollbar w-full rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
      <div className="text-light-1 flex flex-col">
         <h2  style= {styless}> HELLO!</h2>
          <p>
     Feel free to kickstart discussions, kindle innovative ideas, and groove with the most awesome minds out there! Be a trendsetter - MOLD conversations and SPARK inspiration.
          </p>
          <p>
            So go ahead, make waves, and have fun leaving your mark on the canvas of boundless creativity! 
           </p>
        </div>
      </div>
    </section>
  );
}

export default RightSidebar;
