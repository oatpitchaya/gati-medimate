"use server";
import connect from "../../../../lib/db";
import User from "../../../../lib/modals/users";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const POST = async (req) => {
    try {
        await connect();

        const formData = await req.formData();
        const userId = formData.get("userId");
        const name = formData.get("name");
        const alias = formData.get("alias");
        const qty = formData.get("qty");
        const time = JSON.parse(formData.get("time") || "[]");

        const imageFile = formData.get("image");

        if (!imageFile) {
            return new NextResponse("Image is required", { status: 400 });
        }

        const fileName = Date.now() + "-" + imageFile.name;
        const filePath = path.join(process.cwd(), "public", "medpics", fileName);

        const buffer = await imageFile.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));

        const newMedication = {
            name,
            alias,
            qty,
            image: `/medpics/${fileName}`,
            time,
        };

        const user = await User.findOneAndUpdate(
            { user_id: userId },
            { $push: { medication: newMedication } },
            { new: true }
        );

        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return new NextResponse("Error: " + error.message, { status: 500 });
    }
};

export const GET = async (req) => {
    try {
        await connect();

        const url = new URL(req.url);
        const userId = url.searchParams.get("userid");
        const filter = url.searchParams.get("filter"); 

        if (!userId) {
            return new NextResponse("user_id is required", { status: 400 });
        }

        let user = await User.findOne(
            { user_id: userId },
            { medication: 1 }
        );

        if (!user) {
            return new NextResponse("User not found", { status: 404 });
        }

        if (filter === "true") {
            user.medication.forEach(med => {
                med.time.sort((a, b) => new Date(a.date) - new Date(b.date)); 
            });

            user.medication.sort((a, b) => new Date(a.time[0].date) - new Date(b.time[0].date));
        }

        return new NextResponse(JSON.stringify(user.medication), { status: 200 });
    } catch (error) {
        return new NextResponse("error: " + error.message, { status: 500 });
    }
};
