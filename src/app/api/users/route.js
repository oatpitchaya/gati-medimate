"use server";
import connect from "../../../../lib/db";
import User from "../../../../lib/modals/users";
import { NextResponse } from "next/server";


export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userid");
        
        if (!userId) {
            return new NextResponse(JSON.stringify({ error: "User ID is required" }), { status: 400 });
        }

        await connect();
        const users = await User.find({ user_id: userId });

        return new NextResponse(JSON.stringify(users), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
};
export const POST = async (req) => {
    try {
        await connect();

        const { user_id, username, birth_date, medication, task } = await req.json();

        const newUser = new User({
            user_id,
            username,
            birth_date,
            medication,
            task
        });

        await newUser.save();

        return new NextResponse(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
        return new NextResponse("error: " + error.message, { status: 500 });
    }
};