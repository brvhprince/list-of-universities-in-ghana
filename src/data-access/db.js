/**
 * Project: ghana-universities-list
 * File: db
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

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
        const { founded, name, location, nickname, type } = filters
        const results = makeDb.filter((university) => {

                if (founded) {
                   if (university.founded !== parseInt(founded)) return false
                }
                if (name) {
                    if (!university.name.includes(name)) return false
                }
                if (location) {
                  if (!university.location.includes(location)) return false
                }
                if (nickname) {
                    if (university.nickname.toUpperCase() !== nickname.toUpperCase()) return false
                }
                if (type) {
                   if (university.type !== type) return false
                }

            return true

        })
        return {
            data: results,
            total: results.length,
        }

    }

}
