var pg = require('pg');

function postgres() {

    var connectionString = process.env.POSTGRES_DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';

    connectionString = "postgres://jotfcbia:cPZdQSzWaXKJrq92pqd5-mE6JQrSy-Ik@jumbo.db.elephantsql.com:5432/jotfcbia";

    var client = new pg.Client(connectionString);
    client.connect();

    this.getTasks = function (data, cb) {
        sqlstr = "SELECT * FROM TASK";

        if(data.sort) {
            sqlstr += ' ORDER BY ' + data.sort.sortCol + ' ' + data.sort.sortDir;
        }

        console.log('sqlstr = ' + sqlstr);

        var query = client.query(sqlstr,
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    if (cb) {
                        cb(result);
                    }
                }
            }
        );
    };

    this.addTask = function (data, cb) {

        sqlstr = "INSERT INTO TASK (TITLE, DESCRIPTION, PRIORITY, STATUS, CREATE_DT)" +
        "VALUES ('" + data.title + "','" + data.description + "'," + data.priority + ","
            + data.status +  ", now() )";

        console.log('addTask:' + sqlstr);

        var query = client.query(sqlstr,
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    if (cb) {
                        cb(result);
                    }
                }
            }
        );
    };

    this.updateTask = function (data, cb) {

        sqlstr = " UPDATE TASK SET STATUS = " + data.status +
                 " WHERE ID = " + data.id;

        console.log('updateTask:' + sqlstr);

        var query = client.query(sqlstr,
            function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    if (cb) {
                        cb(result);
                    }
                }
            }
        );
    };
}

module.exports = postgres;









