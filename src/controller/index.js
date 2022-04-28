/**
 * Project: ghana-universities-list
 * File: index
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */

import { listUniversities } from '../use-case'
import makeGetUniversities from './universities'
import notFound from './404'

const getUniversities = makeGetUniversities({ listUniversities })

export { getUniversities, notFound }
