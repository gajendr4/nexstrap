import Concept from "./Concept";
import Remarks from "./Remarks";
// import Imghw from "./Imghw";
import Imgfluid from "./Imgfluid";

const qnadata = [
    // electrostats
    {
        question: "1. There are two uniformly charged hemispherical shells having charges \\({Q}_{1}\\) and \\(Q_{2}\\) are arranged in the orientation as shown in the figure. The two shells are having radius of \\({R}_{1}\\) and \\({R}_{2}\\). Find the force of interaction of two shells ?",
        qnimg: <Imgfluid src="https://sn3301files.storage.live.com/y4m6OHx3huO7m3PyY61EjJrHhWHJ1xAQWyO8Q6XXf811Dp_rK609oSKDNkAsX_oVlZObHFTUzUifHWIcLnGea3a1CVQEb2RikHJIYT3QP5irlhtmiJ-JXniMkRHzQzSD-TeA_bOACgY2T236zltfuZZ0noI5A7sG3Gb2Q1hVcEfuiEkLA3tWWZhCq0jK4s1ZuSi?width=541&height=482&cropmode=none" />,

        // concept
        concept: <> <Concept />  <p> Electric field due to uniformly charged hemispherical shell at its centre is given by :-<br />
            <Imgfluid src="https://sn3301files.storage.live.com/y4mAalZUFHzgUkKufTu2F-fkmghGhlTk8ngzjaRAy_8p76PmYp76lHjpcu16wBoKvKqAtxlID0_Y5yauCzTSmfeVFSO-WZ22VVp8EazuaqWMYhkEuhW7u0qT_nIeQUek265lY2EGpM_RSfEoCHjeI_Xmz2unzE-z0x9iwnv8v4JEnonkAXnmEEKPqLaw-9yDzaz?width=540&height=293&cropmode=none" />
            Electric field due to uniformly charged spherical cap at its centre is given :- <br />

            <Imgfluid src="https://sn3301files.storage.live.com/y4myLOSp1NPCEp7Je6Qa0I9iDA9iNH7suDbA2GrXbtrKxjtTcrgPqoEty7NU8oHEkkkx854pyWK-16QbdEPD0yaZMNLEbssp6SfSTDdJL6nglsrsbxCXtMtQF6z2UGWhviP8SwGYCqOjhuuKChWGntqGcaNUDxDyPi-qa_y_nK7Boe4tCOs1bEsBI0cdbF9bsft?width=732&height=314&cropmode=none" /></p>
        </>,


        answer: <>
            <Imgfluid src="https://sn3301files.storage.live.com/y4mHDFWlj8__ofXDJljVIYk6d62XNWKU6taDrPs4uJzQ-YHfDR6Vfjj9TUwGP3FLpEaVbGLiv6h82sAQ7dSjbBrPs63G234xZlANkUrDuPlyv1IGicdvJooEPui_bddktBIXdom0gtWhe3ixl8XG_vzOE9TAeDupgLHyOmewrRvfiFzv4PpxMAHl0pW785KwytY?width=1521&height=503&cropmode=none" />
            <Imgfluid src="https://sn3301files.storage.live.com/y4m8jeehOKiCxjAaVO96sYRnAibu2-awqQ8A4SsQsmNjvpNa_E9r0PqHKnyPHHWrZgLZB8Ravl3LCgEw80ZWoXiyNaAzbjzhq9_gusNmfGI3Spov02gqUshiCI17ff4uNfRYG5HVmYmKv1HZl3O533G-w4sI-7ZxIlouV8pJERWkZQrtlMCZc9b1QkpS6WR6QmA?width=1489&height=570&cropmode=none" /><br />
            <div className="container">
                <div class="row featurette my-5 ">
                    <div class="col-md-3 fs-3 order-md-2 d-flex justify-content-center"><p>{"\\(\\sigma_{1}=\\frac{Q_{1}}{2 \\pi R_{1}^{2}}\\)"}</p></div>
                    <div class="col-md-9 fs-2 "><p>{"\\[2 F_{0}=\\frac{\\sigma_{1}}{4 \\epsilon_{0}} \\cdot 2 Q_{2}\\]"}</p><br /><p>{"\\[F_{0}=\\frac{Q_{1}}{4 \\epsilon_{0} \\cdot 2 \\pi R_{1}^{2}} \\cdot Q_{2}\\]"}</p><br /><p className="border border-2 border-dark">{"\\[F_{0}=\\frac{Q_{1} Q_{2}}{8 \\pi \\epsilon_{0} R_{1}^{2}}\\]"}</p></div>
                </div>
            </div>
        </>,
        // remarks 
        remarks: <><Remarks /><p>
            The force between the two shells is independent of angle. <br /> <br />
            The force between the two shells is independent of the radius of smaller shell.</p></>,



    },
    {
        question: <> {"A positive point charge \\(Q_{0}\\) having mass \\(M_{0}\\) is projected from infinity, the charge particle is having velocity of \\(\\boldsymbol{V}_{0}\\) and having an offset projection distance of \\(L\\) as shown. It is projected towards a fixed charge \\(Q_{1}\\), as particle moves it starts deviating from its initial direction of projection due to mutual repulsion . Find "} <br /> <br />{"1) minimum distance between the two charges during the motion"} <br /> <br />  {"2) total angle of deviation of the charged particle"}</>,
        qnimg: <Imgfluid src="https://i.postimg.cc/N0gKYpNW/Screenshot-2022-01-26-134512.png" />,
        concept: <> <Concept /> <p>
            1. If two particles are moving in space then the distance between the two particles will be minimum or maximum if the relative velocity along the line joining two particles will be zero, in other words we can say that the relative velocity will be perpendicular to the line joining.


            <br /><br /> 2. Since one of the charge is fixed therefore there must be external force on the charge and linear momentum of the system will not be conserved. However about the fixed charge the net torque will be zero and angular momentum of the system will be conserved.
            <br /><br />3. Mechanical energy of the system will be conserved .</p>
        </>,
        answer: <>
            <p>{"$$L_{i}=L_{f}$$ $$M V_{0} L=M V r_{\min }$$"}</p>
            <p className="border  border-dark">{"$$V_{0}L=V \\cdot r_{\\min }$$"}</p> <br />
            <p>{" $$E_{i}=E_{f} $$ $$\\frac{1}{2} M V_{0}^{2}=\\frac{1}{2} M V^{2}+\\frac{K Q_{1} Q_{0}}{r_{\\min }}$$"}</p> <br />
            <p>{" $$\\frac{1}{2} M V_{0}^{2}=\\frac{1}{2} M \\frac{V_{0}^{2} L^{2}}{r_{\\min }^{2}}+\\frac{K Q_{1} Q_{0}}{r_{\\min }} $$ $$r_{\\min }^{2}-\\frac{2 K Q_{1} Q_{0}}{M V_{0}{ }^{2}} r_{\\min }-L^{2}=0 $$ "}</p>
            <p className="border border-dark overflow-auto ">{"$$ r_{\\min }=\\frac{K Q_{1} Q_{0}}{M V_{0}{ }^{2}}+\\sqrt{\\frac{K^{2} Q_{1}{ }^{2} Q_{0}{ }^{2}}{M^{2} V_{0}{ }^{4}}+L^{2}}$$"}</p> <br />
            <Imgfluid src="https://i.postimg.cc/kMcfmgn4/image.png" />
            <div>
                <div class="row featurette my-5 ">
                    <div class="col-md-4 fs-3 order-md-2 d-flex justify-content-center row row-cols-1"><p className="row">{"$$\\left|\\overrightarrow{v_{f}}-\\overrightarrow{v_{i}}\\right|=2 v_{0} \\sin \\frac{\\delta}{2}$$"}</p><Imgfluid className="row" src="https://i.postimg.cc/CMCffNJ1/image.png" /><br /><p className="row">{"$$F_{e}=\\frac{k \\ Q_{1} Q_{0}}{r^{2}} $$ $$k=\\frac{1}{4 \\pi \\epsilon_{0}}$$"}</p></div>
                    <div class="col-md-8 fs-2"> <p>{"$$\\overrightarrow{\\Delta P}=\\overrightarrow{P_{f}}-\\overrightarrow{P_{i}}=m\\left(\\overrightarrow{V_{f}}-\\overrightarrow{V_{i}}\\right)$$ $$\\left|\\overrightarrow{p_{f}}-\\overrightarrow{p_{i}}\\right|=2 m V_{0} \\sin \\frac{\\delta}{2}$$ "}</p>
                        <p className="border border-dark overflow-auto">{"$$\\int F_{e} \\cos \\phi \\cdot d t=2 m V_{0} \\sin \\frac{\\delta}{2}$$"}</p><p>{"$$\\overrightarrow{L_{i}}=\\overrightarrow{L_{f}}$$"}</p><p className="border border-dark">{"$$M V_{0} L=M r^{2} \\frac{d \\phi}{d t}$$"}</p></div>
                </div>
            </div> <hr />
            <div>
                <p className="overflow-auto" >{"$$\\int \\frac{k \\theta_{1} Q_{0}}{r ^ { 2}} \\cos \\phi \\cdot \\frac{r ^ { 2} d \\phi}{V_{0} L}=2 M V_{0} \\cdot \\frac{\\operatorname{Sin} \\delta}{2}$$ $$\\frac{K Q_{1} Q_{0}}{V_{0} L} \\int_{-\\left(\\frac{\\pi-\\delta}{2}\\right)}^{+\\left(\\frac{\\pi-\\delta}{2}\\right)} \\cos \\phi \\cdot d \\phi=2 M V_{0} \\sin \\frac{\\delta}{2}$$ $$ \\frac{K Q_{1} Q_{2}}{V_{0} L} 2 \\cos \\frac{\\delta}{2}=2 M V_{0} \\operatorname{Sin} \\frac{\\delta}{2}$$ $$\\operatorname{Tan} \\frac{\\delta}{2}=\\frac{K Q_{1} Q_{0}}{M V_{0}^{2} L}$$"}</p><p className="border border-dark border-2">{"$$\\delta=2 \\operatorname{Tan}^{-1}\\left(\\frac{K Q_{1} Q}{M V_{0}^{2} L}\\right)$$"}</p>
            </div>

        </>,

    },


    /*  {

    question: Your qn here;
    qnimg: use img fluid;
    concept: write your concept , use html tags if necessary;
    answer: your answer here; 

    }  */
];
export default qnadata;

{
    /* 
    
  <div>
                <div class="row featurette my-5 ">
                    <div class="col-md-3 fs-3 order-md-2 d-flex justify-content-center"></div>
                    <div class="col-md-9 fs-2"></div>
                </div>
            </div>

*/
}