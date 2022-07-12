import React from 'react';
import { connect } from 'react-redux'

function Alerta(props) {
    const { title, msg, btnVisible } = props.aviso
    return (
        <div className="content">
            <h3>{title}</h3>
            <p>{msg}</p>
            {btnVisible ? <button className="btn transparent" onClick={props.onClick}>Ok</button>: null}
        </div>
    )
}

const mapStateToProps = state => ({ aviso: state.aviso })
export default connect(mapStateToProps)(Alerta);