exports.init = () => {
    // connect to DB
    const mariadb = require('mariadb');

    const pool = mariadb.createPool({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'autos_colombia'
    });

    async function query(sql) {
        try {
            let conn = await pool.getConnection();
            let rows = await conn.query(sql);

            return rows;
        } catch (err) {
            console.log('err: ', err);
        }
    }

    return { query };
};
