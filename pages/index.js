import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Qna from '../components/Qna'
import qnadata from '../components/qnadata'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Image from 'next/image'
// import Script from 'next/script'

// console.log(qnadata[0].answer)


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>INSP | Problems</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossOrigin="anonymous"></script>

        <script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossOrigin="anonymous"
          onLoad="renderMathInElement(document.body);"></script>

      </Head>

      <Navbar />


      {qnadata.map((val, index) => {
        // console.log(index);
        return (
          <>
            <Qna question={val.question} concept={val.concept} answer={val.answer}  qnimg={val.qnimg} remarks={val.remarks} />
          </>
        );
      })}

      <Footer/>
        
      <h1> Vercel Deployment check </h1>


      {/* <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></Script> */}
      {/* <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></Script> */}

      {/* <Script id="MathJax-Script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></Script> */}
    </div >
  )
}
