import mongoose, { Document, Model, Schema } from 'mongoose'

interface UserAttributes {
  userId: string
  password: string
}

interface UserDocument extends Document {
  userId: string
  password: string
}

interface UserModel extends Model<UserDocument> {
  build(attributes: UserAttributes): UserDocument
}

const userSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'Users',
    timestamps: {
      createdAt: 'createAt',
      updatedAt: 'modifiedAt',
    },
  }
)

userSchema.statics.build = (attributes: UserAttributes) => {
  return new User(attributes)
}

const User = mongoose.model<UserDocument, UserModel>('User', userSchema)

export { User as UserModel }
