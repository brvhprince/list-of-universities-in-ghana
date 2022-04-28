/**
 * Project: ghana-universities-list
 * File: index
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */

import makeListUniversities from './universities'
import universitiesDb from '../data-access'

const listUniversities = makeListUniversities({ universitiesDb })

export { listUniversities }
