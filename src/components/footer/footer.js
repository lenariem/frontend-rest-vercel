import React, {Component} from 'react'

import './footer.scss'

class Footer extends Component {

    render() {

        return (
           <div className="footer">
               <p className="footer__text">React-Restaurant-App made by Elena Riemer &copy;</p>
               <p className="footer__mobile"><span>&copy;</span></p>
               <p className="footer__year">2021</p>
               <a href="mailto:elena.riemer88@gmail.com" className="footer__mail"><p><span className="footer__envelope">&#128386;</span> elena.riemer88@gmail.com</p></a>
           </div>
        )
    }
}


export default Footer