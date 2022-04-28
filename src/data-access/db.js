/**
 * Project: ghana-universities-list
 * File: db
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */

export default function makeUniversitiesDb ({ makeDb }) {
    return Object.freeze({
        findAll,
        findByNickname,
    })
    async function findAll () {
        const districts = makeDb.map(item=>item.districts.length).reduce((sum, a) => sum + a, 0)
        return {
            data: makeDb,
            total_regions: makeDb.length,
            total_districts: districts
        }
    }

    async function findByNickname ({ nickname }) {
        const results = makeDb.find((regions, _index) => regions.code === regionId.toUpperCase())
        const districts = [results].map(item=>item.districts.length).reduce((sum, a) => sum + a, 0)
        return {
            data: results,
            total_regions: 1,
            total_districts: districts
        }

    }

}
