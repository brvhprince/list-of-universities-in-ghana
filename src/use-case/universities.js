/**
 * Project: ghana-universities-list
 * File: universities
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */
export default function makeListUniversities ({ universitiesDb }) {
    return async function listUniversities ({ nickname } = {}) {
        if (!nickname) {
            return await universitiesDb.findAll()
        }
        return await universitiesDb.findByNickname({
            nickname,
        })
    }
}
