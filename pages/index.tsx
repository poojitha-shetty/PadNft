import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import Prose from '../components/Prose';
import Minting from '../components/Minting';
import Faq from '../components/Faq';
import Save from '../components/Save';
import Problems from '../components/Problems';
import topImage from '../public/assets/hot.jpg';
import topImage1 from '../public/assets/p2p.jpg';
import topImage2 from '../public/assets/ku.jpg';





import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import dynamic from "next/dynamic";
import Whats from '../components/Whats';
import Bar from '../components/Bar';
import PadCoin from '../components/PadCoin';

    

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
      
                <title>
                {process.env.NEXT_PUBLIC_NFT_NAME}</title>
      
      </Head>

      
        <div className = "top">
        
        <p className = "bg text-8xl font-bold text-center pt-10">
          MY BODY MY RIGHTS  
        </p>
        <br></br>
        <br></br>
        <ul className="sup flex justify-center items-center space-x-4">
         
         <button type = "button" className ="rounded px-4 py-2 bg-red-600 font-bold w-100 text-white-500">SUPPORT A GIRL TODAY</button>

</ul>

        </div>

        
<div className="py-8 text-center font-bold">
        <Prose>
          <Minting />
        </Prose>
      </div>

      <div className="bg-black py-8">
        <Prose>
          <h1 className="text-5xl font-bold mb-2 text-center">
            {process.env.NEXT_PUBLIC_NFT_NAME}
          </h1>
          
          <p className="text-xl">
          Pad nft is a nft which can be held in your wallet to receive padcoin.
          Snap shots will be taken of all users holding padnft and will be rewarded with padcoins.
3000 pad nft created on blockchain. Hold pad nft to get padcoin. Pad nft empowers women ,help provide sanitary pads for rural women and educate girls and women on sanitary pad importance
          </p>
          
        </Prose>
        </div>
        
      
        <div className="bg-black py-8">
        <Prose>
          <Save />
        </Prose>
      </div>
  

      <div className="bg-black">
        <Prose>
          <Problems />
        </Prose>
      </div>

      <div className="bg-black py-4">
        <Prose>
          <Whats />
        </Prose>
      </div>

      <div className="bg-black py-4 text-center">
        <Prose>
          <Bar />
        </Prose>
      </div>

       <div className="bg-black py-4 text-center">
        <Prose>
          <PadCoin /><br></br>
          <div className="img align-right">
          <Image src={topImage}/>
          </div>
          <div className="img1">
          <Image src={topImage1}/>
          </div>
          <br></br>
          <div className="img2">
          <Image src={topImage2}/>
          </div>
        </Prose>
        
      </div>
    
      
      <div className="bg-black py-8">
        <Prose>
          <Faq />
        </Prose>
      </div>

      <div className="py-8">
        <Prose>
          <Roadmap />
        </Prose>
      </div>

      <div className="bg-black py-8">
        <Prose>
          <Team />
        </Prose>
      </div>
  
    </Layout>
  );
};

export default Home;
