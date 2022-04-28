/**
 * Project: ghana-universities-list
 * File: filter
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */
export default function makeFiltersUniversities ({ filterUniversities }) {
    return async function filterUniversity (httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        const filters = httpRequest.method.toUpperCase() === 'POST' ? httpRequest.body : httpRequest.query
        try {
            const returnedUniversities = await filterUniversities({
                filters
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
