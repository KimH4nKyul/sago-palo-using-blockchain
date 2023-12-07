import mongoose, { Document, Model, Schema } from 'mongoose'

interface UserAttribute {
  id: string
  password: string
}

export interface UserDocument extends Document {
  id: string
  password: string
}

interface UserModel extends Model<UserDocument> {
  build(attribute: UserAttribute): UserDocument
}

const schema = new Schema<UserDocument>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'User',
    autoCreate: false,
    timestamps: {
      createdAt: 'createAt',
      updatedAt: 'modifiedAt',
    },
  }
)

schema.statics.build = function (userAttr: UserAttribute) {
  return new this(userAttr)
}

const model = mongoose.model<UserDocument, UserModel>('user', schema)

export { model as UserModel }
