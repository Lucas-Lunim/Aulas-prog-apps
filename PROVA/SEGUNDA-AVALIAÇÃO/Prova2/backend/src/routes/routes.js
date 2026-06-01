import express from 'express'
import funcionarios from './funcionarios.js'

export default function(app){
    app
    .use(express.json())
    .use('/funcionarios', funcionarios)
}