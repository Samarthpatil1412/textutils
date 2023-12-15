import React from 'react'

export default function About(props) {

   // this below part was try to change the state of the about section based on a button which used the onclick fuction as togglestate

    // const[myStyles, setMyStyles] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState('Active Dark mode ');

    // const toggleStyle = () => {
    //     if (myStyles.color === "black") {
    //         setMyStyles({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white",
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setMyStyles({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyles = {
      color : props.mode ==='dark'?'white':'#424951',
      backgroundColor : props.mode ==='dark'?'#424951':'white'
    }

  return (
    <>
    
    <div className='container my-3'>
        <h1 className='my-3' style={{ color : props.mode ==='dark'?'white':'#424951'}}>About us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyles}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your text</strong>
      </button>
    </h2>

    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyles}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
      </div>
    </div>
  </div>

  <div className="accordion-item" style={myStyles}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>

    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyles}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>

  <div className="accordion-item" style={myStyles}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  style={myStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>

    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyles}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>
    </div>
    {/* <div className="container">
        <button className="btn btn-primary mb-3" onClick={toggleStyle}>{btnText}</button>
    </div> */}
    </>
  )
}
