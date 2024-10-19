
import HeroSection from "@/components/homeSections/HeroSection";
import Cursor from '../components/Cursor';
import NextNProgress from 'nextjs-progressbar';
import TransparentSection from "@/components/homeSections/TransparentSection";
import {OptimizeSection} from '../components/homeSections/optimizeSection'
import Section2 from "@/components/homeSections/Section2";
//import { useEffect, useState } from "react";
//import Loading from "@/components/loading";
//import TextSection from '@/components/TextSection'

export default function Home() {
  //const [loading, setLoading] = useState(false);
//
  //useEffect(() => {
  //  setLoading(true);
  //}, []);

  return (
    <>
      <Cursor />
      <HeroSection />
      <Section2 />
    </>
      
  );
}

//<>
//{!loading ? (
//  <>
//    <Cursor />
//    <HeroSection />
//  </>
//) : (
//  <Loading />
//)}
//</>

