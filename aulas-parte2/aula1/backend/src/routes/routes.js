import express from 'express';
import user from './user.js'
import loja from './loja.js'

export default function(app){
    app
    .use(express.json())
    .use('/user', user)
    .use('/loja', loja)
}