const express = require("express");
const router = express.Router();

const Bill = require("../models/Bill");

router.get("/", async (req, res) =>{

    const Bills = await Bill.find();    //espera a que llegen los resultados y los guarda en la constante
    console.log(Bills);
    res.json(Bills);
});
                                                        //Para guardar las facturas
router.post("/", async(req, res) => {   //terminar *1
    const { title, value } = req.body;
    const bill = new Bill({title, value});
    await bill.save();                  //await espera a que termine y dsps hace
    res.json({status: "Bill saved"});
});
                                                        //Para actualizar las facturas

router.put("/:id", async(req, res)=>{
    const {title, value} = req.body;
    const newBill = {title, value};
    await Bill.findByIdAndUpdate(req.params.id, newBill);
    res.json({status:"Factura actualizada"});
});

                                                        //Eliminar facturas

router.delete("/:id", async(req, res) => {
    await Bill.findByIdAndRemove(req.params.id);
    res.json({status: "Factura eliminada"});
});

module.exports = router;