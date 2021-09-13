const Item = require("../db/models/item");

exports.getItem = async (query) => {
  try {
    const data = await Item.find(query);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getItemDetailByQuery = async (query) => {
  try {
    const data = await Item.findOne(query);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.addItem = async (payload) => {
  const newItem = new Item(payload);
  try {
    const data = await newItem.save();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.updateItem = async (payload, id) => {
  try {
    const data = await Item.updateOne(
      { _id: id },
      {
        $set: payload,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.deleteItem = async (id) => {
  try {
    const data = await Item.deleteOne({ _id: id });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
