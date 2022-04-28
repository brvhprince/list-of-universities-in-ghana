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
                    return university.founded === parseInt(filters.founded)
                }
                if (filters.name) {
                    return university.name.includes(filters.name)
                }
                if (filters.location) {
                    return university.location.includes(filters.location)
                }
                if (filters.nickname) {
                    return university.nickname === filters.nickname
                }
                if (filters.type) {
                    return university.type === filters.type
                }
            }
            return false
        })
        return {
            data: results,
            total: results.length,
        }

    }

}
