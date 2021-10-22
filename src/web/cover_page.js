import React, { Component } from 'react'
import clothes from './cloths.png'

class cover_page extends Component {
    render() {
        return (
            <div>
                <a href="https://twitter.com/saigowthamr/" target="_blank" rel="noreferrer noopener"><img src={clothes} /></a>
                <a href="{clothes}" target="_blank" rel="noreferrer noopener"><img src={clothes} /></a>asdfgvbfdsfbgvvdcfsvdg
                <td onClick={()=> window.open("someLink", "_blank")}>text</td>
            </div>
        )
    }
}

export default  cover_page