import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        user_id: { type: Number, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        image: { type: String },
        birth_date: { type: Date, required: true },
        medication: [
            {
                name: { type: String },
                alias: { type: String },
                qty: { type: String },
                image: { type: String },
                time: [
                    {
                        date: { type: Date },
                        status: { type: String, enum: ['pending', 'notified'], default: 'pending' },
                    }
                ],
            }
        ],
        tasks: [{ type: String }]
    },
    {
        timestamps: true
    }
);


const User = models.User || model("User", UserSchema)
export default User;
