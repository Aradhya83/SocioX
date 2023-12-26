import React from 'react';

const RightSidebar: React.FC = () =>{
    const styles: React.CSSProperties = {
        maxWidth: '250px',
        fontSize:'20px',
        fontWeight: '450',
        fontFamily: 'Georgia, serif',
      };
     
    return (
        <section style={styles} className="custom-scrollbar rightsidebar">
            <div className="flex flex-1 flex-col justify-start">
            <div className="text-light-1 flex flex-col" >
  <p>Shape your world with words! Express your unique thoughts, ignite connections, and be part of a global tapestry of ideas. Your voice matters – start a conversation, inspire, and make an impact through the written word.</p>
</div>
            </div>
        </section>
        )
}

export default RightSidebar;
