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
            return {
                headers,
                statusCode: 200,
                body: {
                    status: true,
                    universities: returnedUniversities.data ?? [],
                    total: returnedUniversities.total ?? 0,
                }
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

