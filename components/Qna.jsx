import Head from 'next/head'
import Script from 'next/script'
// import Image from 'next/image'


const Qna = (props) => {
    // console.log(props)
    return (

        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
            </Head>

            <style jsx>{`p,div {color: black; font-family: 'Merienda', cursive;}`}</style>

            {/* Question Component   */}
            <section className="container text-light my-5">

                <p className="fs-5 ">{props.question}</p>
                <div className="p-2 p-md-3 mb-2 my-3 d-flex align-items-center justify-content-center rounded ">
                    {props.qnimg}
                </div>
            </section>
<hr />
            {/* Answer component  */}
            <section className="container">
                <div className="row featurette   my-5">
                    <div className=" fs-5">
                        {props.concept}
                    </div>
                    <hr />
                    <div className="fs-3 " >
                        {props.answer}
                    </div>
                    <hr />
                    <div className="container fs-5">
                        {props.remarks}
                    </div>

                    <hr />

                </div>
            </section>

            {/* BOotstrap script  */}
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous"></Script>
            {/* <Script id="MathJax-Script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></Script> */}

        </>)
}

export default Qna;