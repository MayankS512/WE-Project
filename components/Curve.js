import { useEffect } from "react"
import gsap from 'gsap'

const Curve = () => {
  const path = gsap.timeline({ repeat: -1, yoyo: true })
  // const group = gsap.timeline({ repeat: -1, yoyo: true })

  const pathAnimation = () => {
    path.to('#path', {
      attr: {
        d: 'M276.7 -465.5C372.1 -424.2 472.3 -377.4 483.8 -298.9C495.3 -220.3 418.1 -110.2 407.9 -5.9C397.7 98.3 454.3 196.7 423.3 241.3C392.2 286 273.4 277 188.3 349.3C103.1 421.6 51.6 575.3 -0.8 576.7C-53.2 578.1 -106.3 427.2 -212.9 367.2C-319.4 307.2 -479.3 338.1 -542.3 292C-605.4 246 -571.7 123 -584.3 -7.2C-596.8 -137.5 -655.6 -275 -619.3 -367.4C-583 -459.8 -451.5 -507 -332.4 -534.6C-213.3 -562.2 -106.7 -570.1 -8 -556.2C90.7 -542.4 181.3 -506.7 276.7 -465.5'
      },
      // ease: 'power1.out', 
      // delay: -3,
      duration: 20
    })
    path.to('#path', {
      attr: {
        d: 'M271.6 -453.7C372.5 -412.1 488.9 -380.8 524.7 -306.9C560.6 -233 515.8 -116.5 465 -29.3C414.2 57.8 357.3 115.7 315.7 179.5C274 243.3 247.5 313 197.4 372.9C147.3 432.9 73.7 482.9 -12.8 505.2C-99.3 527.4 -198.7 521.8 -304.2 493.9C-409.7 465.9 -521.4 415.7 -609.2 329.7C-697 243.7 -761 121.8 -761.5 -0.2C-761.9 -122.3 -698.8 -244.7 -587.1 -289.3C-475.3 -334 -315 -301 -209.1 -339.6C-103.1 -378.3 -51.6 -488.6 16.9 -517.9C85.3 -547.1 170.7 -495.3 271.6 -453.7'
      },
      // ease: 'power1.out', 
      // delay: -3,
      duration: 20
    })
    path.to('#path', {
      attr: {
        d: 'M323.9 -502.1C432.4 -498.3 541.8 -437.2 579 -343.9C616.2 -250.7 581.1 -125.3 547.2 -19.6C513.2 86.2 480.5 172.3 415.3 217C350.1 261.6 252.4 264.8 177.8 329.9C103.1 395 51.6 522 -24.5 564.4C-100.5 606.7 -201 564.5 -245.7 482.1C-290.5 399.8 -279.5 277.4 -298.4 190.4C-317.3 103.3 -366.2 51.7 -377.7 -6.7C-389.2 -65 -363.5 -130 -363.1 -249.1C-362.7 -368.2 -387.6 -541.3 -331.3 -575.3C-275 -609.3 -137.5 -504.2 -14.9 -478.3C107.7 -452.5 215.3 -506 323.9 -502.1'
      },
      // ease: 'power1.out', 
      // delay: -3,
      duration: 20
    })
  }

  // const groupAnimation = () => {
  //   group.to('#group', {
  //     attr: {
  //       transform: 'translate(73.00515547532635 -6.8964396095811935)'
  //     },
  //     // ease: 'power3.out', 
  //     duration: 2
  //   })
  //   group.to('#group', {
  //     attr: {
  //       transform: 'translate(111.92018685153732 3.7816532028920165)',
  //       // ease: 'power3.out', 
  //       duration: 2
  //     }
  //   })
  //   group.to('#group', {
  //     attr: {
  //       transform: 'translate(104.92341317534286 86.38753258594889)',
  //       // ease: 'power3.out', 
  //       duration: 2
  //     }
  //   })
  // }

  const background = () => {
    const b1 = "linear-gradient(217deg, rgba(45, 212, 191,.9), rgba(45, 212, 191,0) 70.71%),  linear-gradient(127deg, rgba(99, 102, 241,.9), rgba(99, 102, 241,0) 70.71%), linear-gradient(336deg, rgba(225, 29, 72,.9), rgba(225, 29, 72,0) 70.71%)";
    const b2 = "linear-gradient(17deg, rgba(6, 182, 212,.7), rgba(6, 182, 212,0) 70.71%), linear-gradient(200deg, rgba(5, 150, 105, .9), rgba(5, 150, 105,.2) 70.71%),  linear-gradient(336deg, rgba(220, 38, 38,.8), rgba(220, 38, 38,0.1) 70.71%)";
    gsap.fromTo("#bg", {background: b1}, {ease: "none", duration: 6, background: b2, repeat: -1, yoyo: true});
  }

  useEffect(() => {
    gsap.from('#bg-main', {
      // scale: 0,
      duration: 5,
      ease: 'power3.out',
      opacity: 0,
      filter: 'blur(1000px)'
    })
    pathAnimation()
    background()
    // groupAnimation()
  })

  return (
    <>
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path fill="#FFFFFF" stroke="#000000" strokeWidth="1.5794" id='path' strokeMiterlimit="10" d="M240.8 -437.4C342.3 -358.5 475.5 -355 552.2 -294.7C628.9 -234.3 648.9 -117.2 664.7 9.1C680.4 135.3 691.8 270.7 607.6 318C523.5 365.4 343.7 324.7 226.5 365.9C109.3 407 54.7 530 -12.7 552C-80 573.9 -160 494.8 -219.6 420.4C-279.2 346 -318.4 276.2 -387.9 206.9C-457.4 137.7 -557.2 68.8 -559.5 -1.3C-561.8 -71.5 -466.7 -143 -383 -187.7C-299.2 -232.3 -227 -250.1 -165 -351.9C-103.1 -453.6 -51.6 -639.3 9.1 -655C69.7 -670.7 139.3 -516.3 240.8 -437.4"/>
          </clipPath>
        </defs>
      </svg>
      <div id="bg-main" className="fixed top-0 left-0 w-full h-full origin-top-left -z-10 blur-[100px]">
        <div className='fixed w-full h-full top-60 left-60 -z-10 clip'>
          <div id="bg" className="fixed w-full h-full -top-10 -left-10"></div>
      </div>
      </div>
    </>
  );
}
 
export default Curve;

// Original SVG
/* <svg id="visual" viewBox="0 0 900 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"  version="1.1"><g id='group' transform="translate(-58.09773163507964 50.20156452305781)"><path id='path' d="M240.8 -437.4C342.3 -358.5 475.5 -355 552.2 -294.7C628.9 -234.3 648.9 -117.2 664.7 9.1C680.4 135.3 691.8 270.7 607.6 318C523.5 365.4 343.7 324.7 226.5 365.9C109.3 407 54.7 530 -12.7 552C-80 573.9 -160 494.8 -219.6 420.4C-279.2 346 -318.4 276.2 -387.9 206.9C-457.4 137.7 -557.2 68.8 -559.5 -1.3C-561.8 -71.5 -466.7 -143 -383 -187.7C-299.2 -232.3 -227 -250.1 -165 -351.9C-103.1 -453.6 -51.6 -639.3 9.1 -655C69.7 -670.7 139.3 -516.3 240.8 -437.4" fill="#FFFFFF" stroke='#000000'></path></g></svg> */