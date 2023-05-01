/**
 * MiniDb Nosql based on JSON object and Array
 * Code By Axel Barth
 * April 2023
 */

const Nosql = {
    path : '',

    async load(cb){
        let a =  JSON.parse(await Neutralino.filesystem.readFile(this.path))
        cb(a)
    },

    insert(db, obj){
        if(obj._id === undefined){
            obj._id = parseInt(Math.random()*100000000)
        }
        db.push(obj)
        this.save(db)
        return db
    },

    remove(db, obj){
        let i = 0
        db.forEach(el => {
            if(obj._id == el._id){
                db.splice(i, 1)
            }
            i++
        });
        this.save(db)
        return db
    },

    update(db, obj){
        let i = 0
        db.forEach(el => {
            if(el._id == obj._id){
                db[i] = obj
                console.log("mdf")
            }
            i++
        });
        this.save(db)
        return db
    },

    find(db, obj){
        let i = 0
        db.forEach(el => {
            if(el._id == obj._id){
                db[i] = obj
                console.log("mdf")
            }
            i++
        });
        return db
    },

    async save(db){
        await Neutralino.filesystem.writeFile(this.path, JSON.stringify(db))
    }
    
}

export{ Nosql }

