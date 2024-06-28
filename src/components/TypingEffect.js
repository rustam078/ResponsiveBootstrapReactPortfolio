import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
    const [text] =useTypewriter({
        words: ['Software Developer', 'Web Developer', 'UI/UX Designer','Full Stack Developer'],
        loop:{}

    });
  return (
    <h2 style={{height:'100px'}}>{text} <Cursor/></h2>
  );
};

export default TypingEffect;
