/**
 * Project: ghana-universities-list
 * File: 404
 * Created by Pennycodes on 4/28/2022.
 * Copyright ghana-universities-list
 */
export default async function notFound () {
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            error: 'Houston, we lost you',
            all_universities: '/universities',
            specific_university: '/universities/{nickname}'
        },
        statusCode: 404
    }
}
