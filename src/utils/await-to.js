'use strict';

/**
 * @description ### Returns Go / Lua like responses when used with await
 *
 * - Example response [ undefined, data ]
 * - Example response [ Error, undefined ]
 *
 *
 * When used with Promise.all([req1, req2, req3])
 * - Example response [ undefined, [data1, data2, data3] ]
 * - Example response [ undefined, data ]
 * - Example response [ Error, undefined ]
 *
 *
 * When used with Promise.race([req1, req2, req3])
 * - Example response [ undefined, data ]
 * - Example response [ Error, undefined ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ undefined, data ]
 * @returns {Promise} [ Error, undefined ]
 */

const awaitTo = promise => promise
    .then((data) => {
        if (data instanceof Error) return [undefined, data];

        return [data, undefined];
    })
    .catch((error) => {
        const err = (!error.errors ? error : error.errors);

        return Promise.resolve([
            undefined,
            err,
        ]);
    });

export default awaitTo
