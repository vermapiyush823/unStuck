"use server";

import User from "@/database/user.model";
import { error } from "console";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";
export async function getTopInteractedUsers(
  params: GetTopInteractedTagsParams
) {
  try {
    connectToDatabase();
    const { userId, limit } = params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    // find interactions for the user and group by tags..
    return [
      {
        _id: "1",
        name: "next",
      },
      {
        _id: "2",
        name: "typescript",
      },
      {
        _id: "3",
        name: "react",
      },
    ];
  } catch (err) {
    console.log(err);
    throw error;
  }
}
