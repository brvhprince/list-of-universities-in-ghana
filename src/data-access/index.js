/**
 * Project: ghana-universities-list
 * File: index
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */

import makeUniversitiesDb from './db'

const makeDb = require('./universities')
const universitiesDb = makeUniversitiesDb({ makeDb })

export default universitiesDb
