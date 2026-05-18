import express from 'express'
import storage from './storage.js'

export default function(app){
    app
    .use(express.json())
    .use('/storage', storage)
}