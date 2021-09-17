/*jshint esversion: 6 */
//const url = window.location.protocol+"//"+window.location.hostname + ":8080/";
const url = process.env.REACT_APP_BACKEND;

const login = url + "auth/login";
const signup = url + "auth/signup";
const updateUser = url + "auth/updateUser";
const getUsers = url + "auth/getUsers";
const getUserById = url + "auth/getUserById";
const activate = url + "auth/activate";
const otp = url + "auth/otp";
const verifyOtp = url + "auth/verifyOtp";

const getDistributors = url + "distributor/getDistributors";
const addDistributor = url + "distributor/addDistributor";

const getArtWorks = url + "posters/getArtWorks";
const getPoster = url + "posters/getPoster";
const getBestSeller = url + "posters/getBestSeller";
const getPosterById = url + "posters/getPosterById";
const createPoster = url + "posters/createPoster";
const updatePoster = url + "posters/updatePoster";
const deletePoster = url + "posters/deletePoster";

const getSignages = url + "posters/getSignages";
const getAssetMarking = url + "posters/getAssetMarking";
const getCampaigns = url + "posters/getCampaigns";
const getFloorGraphics = url + "posters/getFloorGraphics";


const getMaterial = url + "material/getMaterial";
const createMaterial = url + "material/createMaterial";
const updateMaterial = url + "material/updateMaterial";
const deleteMaterial = url + "material/deleteMaterial";

const createCategory = url + "category/createCategory";
const updateCategory = url + "category/updateCategory";
const getCategory = url + "category/getCategory";
const deleteCategory = url + "category/deleteCategory";

const createSubCategory = url + "subCategory/createSubCategory";
const getSubCategory = url + "subCategory/getSubCategory";
const deleteSubCategory = url + "category/deleteSubCategory";
const updateSubCategory = url + "category/updateSubCategory";

const createOrder = url + "orders/createOrder";
const getOrders = url + "orders/getOrders";
const getOrdersById = url + "orders/getOrdersById";
const updateOrder = url + "orders/updateOrder";
const deleteOrder = url + "orders/deleteOrder";

const config = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

const Material = {
  one: "125 Micron (non-tearable)",
  two: "Self-adhesive (premium)",
  three: "Self-adhesive 3mm sunboard (premium)",
};
const Dimension = {
  one: "16in by 24in",
  two: "19in by 27in",
  three: "24in by 36in",
};

const findMat = (mat) => {
  if (mat.one) return Material.one;
  else if (mat.two) return Material.two;
  else if (mat.three) return Material.three;
};

const findDim = (dim) => {
  if (dim.one) return Dimension.one;
  else if (dim.two) return Dimension.two;
  else if (dim.three) return Dimension.three;
};

function buildFormData(formData, data, parentKey) {
  if (
    data &&
    typeof data === "object" &&
    !(data instanceof Date) &&
    !(data instanceof File)
  ) {
    Object.keys(data).forEach((key) => {
      buildFormData(
        formData,
        data[key],
        parentKey ? `${parentKey}[${key}]` : key
      );
    });
  } else {
    const value = data == null ? "" : data;

    formData.append(parentKey, value);
  }
}

function jsonToFormData(data) {
  const formData = new FormData();

  buildFormData(formData, data);

  return formData;
}

export {
  url,
  login,
  activate,
  updateUser,
  getArtWorks,
  getPoster,
  getBestSeller,
  getSignages,
  getAssetMarking,
  getCampaigns,
  getFloorGraphics,
  getPosterById,
  createPoster,
  getDistributors,
  addDistributor,
  signup,
  otp,
  verifyOtp,
  updatePoster,
  deletePoster,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  createCategory,
  updateCategory,
  createSubCategory,
  getSubCategory,
  createOrder,
  getOrders,
  getOrdersById,
  updateOrder,
  deleteOrder,
  getUsers,
  getUserById,
  getCategory,
  deleteSubCategory,
  updateSubCategory,
  deleteCategory,
  config,
  findMat,
  findDim,
  jsonToFormData,
};
