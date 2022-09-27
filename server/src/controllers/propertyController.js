const Property = require('../models/propertyModel');

module.exports.propertyRegister = async(req,res,next)=>{
    try {
        const { titleoff,typeoff,description,owner,address,rent,security,ownerid } = req.body;
      const addressCheck = await Property.findOne({ address });
      if (addressCheck)
        return res.json({ msg: "Address Already registered", status: false });
      
      
      const property = await Property.create({
        titleoff,
        typeoff,
        description,
        owner,
        address,
        rent,
        security,
        ownerid
      });
      
      return res.json({ status: true, property });
    } catch (error) {
        next(error);
    }
};


module.exports.getProperty = async (req, res, next) => {
  try {
    // console.log("calling");
    const properties = await Property.find();
    res.json(properties);
  } catch (ex) {
    next(ex);
  }
};