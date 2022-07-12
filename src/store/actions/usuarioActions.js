import axios from 'axios'
import { setAviso } from './avisoActions'
import api from '../../main/api'

export function signin(values) {
    return submit(values, `${api.BASE_URL}/usuarios/autenticacao`,
    { title: "Bem Vindo! :)", msg: "Bem vindo de volta!", signUp: false})
}

export function signup(values) {
    return submit(values, `${api.BASE_URL}/usuarios`,
    { title: "Sucesso! :D", msg: "Seja bem vindo a equipe gentilmente!", signUp: true})
}

export function logout() {
    return { type: 'TOKEN_VALIDATED', payload: false }
}

function submit(values, url, msg) {
    return dispatch => {
        axios.post(url, values)
            .then(res => {
                dispatch(setAviso(msg))
                setTimeout(() => dispatch({ type: 'USER_FETCHED', payload: res.data}), 3000)
            }).catch(err => dispatch(setAviso({ title: "Algo deu errado! :(", msg: "Não foi possível se comunicar com o servidor. Por favor, tente novamente mais tarde.",
            signUp: msg.signUp, btnVisible: true })))
    }
}

export function validateToken(values) {
    return dispatch => {
        if (values.token) {
            axios.post(`${api.BASE_URL}/users/validateToken`, values)
                .then(res => dispatch({ type: 'TOKEN_VALIDATED', payload: res.data.valid }))
                .catch(err => dispatch({ type: 'TOKEN_VALIDATED', payload: false }))
        } else {
            dispatch({ type: 'TOKEN_VALIDATED', payload: false })
        }
    }
}