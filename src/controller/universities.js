/**
 * Project: ghana-universities-list
 * File: universities
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */

export default function makeGetUniversities ({ listUniversities }) {
    return async function getUniversity (httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const returnedUniversities = await listUniversities({
                nickname: httpRequest.params.id
            })
            const body = {
                status: true,
                total: returnedUniversities.total ?? 0,
            }
            if (returnedUniversities.data.constructor === Array) {
                body.universities = returnedUniversities.data
            }
            else {
                body.university = returnedUniversities.data
            }
            return {
                headers,
                statusCode: 200,
                body
            }
        } catch (e) {
            // TODO: Error logging
            console.log(e)
            return {
                headers,
                statusCode: 400,
                body: {
                    status: false,
                    error: e.message
                }
            }
        }
    }
}

