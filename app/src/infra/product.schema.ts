import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const Schema = mongoose.Schema

const ProductSchema = new Schema({
  blockchainId: Number,
  name: String,
  category: String,
  ipfsImgHash: String,
  ipfsDescHash: String,
  startTime: Number,
  price: Number,
  condition: Number,
  buyer: String,
})

const productModel = mongoose.model('ProductModel', ProductSchema)

export { productModel }
