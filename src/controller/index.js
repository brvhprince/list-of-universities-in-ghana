/**
 * Project: ghana-universities-list
 * File: index
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */

import {filterUniversities, listUniversities } from '../use-case'
import makeGetUniversities from './universities'
import makeFiltersUniversities from "./filter"
import notFound from './404'

const getUniversities = makeGetUniversities({ listUniversities })
const filterUniversity = makeFiltersUniversities({ filterUniversities })

export { getUniversities, notFound, filterUniversity }
