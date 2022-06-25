import React,{useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '95d1268845b8f757220ada5380c899f92e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>{

  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command})=>{
        if(command === 'testCommand'){
          alert('This code was');
        }
      }
    })
  })
  return(<>
  <h1>Hello</h1>
  </>)
}

export default App;