const db = require("../data/db-config.js");

module.exports = ({
    get,
    insert,
    update,
    remove
})

function get() {
    // select * from users
    return db.select("*").from("cars");
}

function insert(user) {
    return db("cars")
    .insert(user)
    .then(ids => {
        return ({ id: ids[0] })
    })
}

function update(id, changes) {
    return db("cars")
    .where({ id })
    .update(changes)
}

function remove(id) {
    return db("cars")
    .where({ id })
    .del();
}