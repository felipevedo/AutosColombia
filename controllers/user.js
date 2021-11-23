const db = require('../dbHelper');
const { query } = db.init();

module.exports = {
    getCrear: async (req, res) => {
        // const result = await query("SELECT * FROM customers");
        // console.log('result', Object.keys(result));
        res.render("crearUsuario", { date: new Date().toLocaleString() });
    },
    postCrear: async  (req, res) => {
        const { documento, nombre, apellido, placa } = req.body;

        await query(`INSERT INTO customers (Documento, Nombre, Apellidos, Placa)
            VALUES ('${documento}', '${nombre}', '${apellido}', '${placa}')`);
    
        res.render("resultadoOperacion", { 
            date: new Date().toLocaleString(),
            fueExitosa: true,
            mensaje: "Usuario guardado exitosamente"
        });
    },
    getEliminar: async (req, res) => {
        res.render("eliminarUsuario", { date: new Date().toLocaleString() });
    },
    postEliminar: async (req, res) => {
        res.render("resultadoOperacion", { 
            date: new Date().toLocaleString(),
            fueExitosa: false,
            mensaje: "Caracteristica no implementada"
        });
    }
};
