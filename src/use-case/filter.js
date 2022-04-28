/**
 * Project: ghana-universities-list
 * File: filter
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */
export default function makeFilterUniversities ({ universitiesDb }) {
    return async function filterUniversities ({ filters } = {}) {

        return await universitiesDb.findByFilter({ filters })
    }
}
