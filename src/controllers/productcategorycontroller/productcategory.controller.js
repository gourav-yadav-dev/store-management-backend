// import { responseFailure, responseSuccess } from "../../utils/response.utils.js";
// import { productcategories } from '../../services/Productcategories/productcategories.services.js'
// import message from "../../constants/message.js";
// export async function productcategory(req, res) {
//   try {
//     console.log("hello  i am here")
//     if (!req.deleteCateogory == true) {
//       var { category, email } = req.body
//     }
//     const token = req.headers.authorization;
//     const data = await productcategories(category, token, email, req.retrivecategory, req.editCategory, req.params.id, req.deleteCateogory)   
//     if (data.update == 1) {
//       return res.status(200).json(responseSuccess(message.USER.EDITCATEGORY, null, 200, null))
//     }
//     if (data.delete == 1)
//       return res.status(200).json(responseSuccess(message.USER.DELETECATEGORY, null, 200, null))
//     {

//     }
//     if (data == true) {
//       return res.status(200).json(responseSuccess(message.USER.ADDCATEGORY, null, 200, null))
//     }
//     res.status(200).json(responseSuccess(message.USER.SUCCESSFULLY, data, 200, null))

//   }
//   catch (error) {
//     return res.status(error.statusCode || 500).json(responseFailure(error.message, error.statusCode || 500))
//   }
// }


import { responseFailure, responseSuccess } from "../../utils/response.utils.js";
import { productcategories } from '../../services/Productcategories/productcategories.services.js';
import message from "../../constants/message.js";

export async function productcategory(req, res) {
  try {

    if (!req.deleteCateogory == true) {
      var { category, email } = req.body;
    }

    const token = req.headers.authorization;


    const data = await productcategories(
      category,
      token,
      email,
      req.retrivecategory,
      req.editCategory,
      req.params.id,
      req.deleteCateogory
    );
    if (data.update == 1) {
      console.log("inside this")
      return responseSuccess(res, message.USER.EDITCATEGORY, null, null, 200)

    }

    if (data.delete == 1) {
      return responseSuccess(res, message.USER.DELETECATEGORY, null, 200, null)
    }

    if (data == true) {

      return responseSuccess(res, message.USER.ADDCATEGORY, null, 200, null)

    }

    return responseSuccess(res, message.USER.SUCCESSFULLY, data, 200, null)


  } catch (error) {

    return responseFailure(res, error.message, error.statusCode || 500)

  }
}
