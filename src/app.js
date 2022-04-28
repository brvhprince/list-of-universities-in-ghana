/**
 * Project: ghana-universities-list
 * File: app
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */

import express from 'express'
import {
    getUniversities,
    notFound
} from './controller'
import { makeCallback } from './framework'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/universities/:id', makeCallback(getUniversities))
app.get('/universities', makeCallback(getUniversities))
app.use(makeCallback(notFound))

// for heroku deployment
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Universities Server is listening on port ${port}`)
})

export default app
