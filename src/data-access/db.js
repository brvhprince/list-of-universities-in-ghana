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
        findByFilter
    })
    async function findAll () {

        return {
            data: makeDb,
            total: makeDb.length,
        }
    }

    async function findByNickname ({ nickname }) {
        const results = makeDb.find((universities, _index) => universities.nickname.toUpperCase() === nickname.toUpperCase())
        return {
            data: results,
            total: 1,
        }

    }

    async function findByFilter ({ filters }) {

        const results = makeDb.filter((universities) => {
            for (let university of universities) {
                if (filters.founded) {

                }
            }
        })
        return {
            data: results,
            total: 1,
        }

    }

}
