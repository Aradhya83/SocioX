import React from 'react';
import Image from 'next/image';
import yourGif from '../shared/gifs/ezgif.com-crop (3) (1).gif';

const RightSidebar: React.FC = () =>{
    const styles: React.CSSProperties = {
        maxWidth: '250px',
        fontSize:'20px',
        fontWeight: '450',
        fontFamily: 'Georgia, serif',
      };
     
    return (
        <section className="custom-scrollbar rightsidebar">
            <div className="flex flex-1 flex-col justify-start">
            <div className="text-light-1 flex flex-col" style={styles}>
  <p>Shape your world with words! Express your unique thoughts, ignite connections, and be part of a global tapestry of ideas. Your voice matters – start a conversation, inspire, and make an impact through the written word.</p>
</div>
            </div>
            <div className="flex flex-1 flex-col justify-start ml-8">
<h3 className="text-heading4-medium text-light-1"> <Image style={styles} src={yourGif} alt="Your GIF" /></h3>
            </div>
        </section>
        )
}

export default RightSidebar;
