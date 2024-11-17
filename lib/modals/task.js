import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true, unique: true },
        icon: { type: String, required: true, unique: true },
    },
);


const Task = models.Task || model("User", TaskSchema)
export default Task;
