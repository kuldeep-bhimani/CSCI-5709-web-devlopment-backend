/*
 * @author: Shivangi Bhatt
 * @description: Controllers for Subscription
 */
import { subscriptionService } from "../services/index.js";
import mongoose from "mongoose";

const subscribeUser = async (req, res) => {
  const { loggedInUserId, SubscribeToUserId } = req.body;
  console.log("SubscribeToUserId", SubscribeToUserId);
  try {
    const user = await subscriptionService.subscribeUser(
      loggedInUserId,
      SubscribeToUserId
    );

    res.status(200).json({
      message: "User subscribed successfully",
      status: true,
    });
  } catch (err) {
    console.log("error", err);

    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};
const unSubscribeUser = async (req, res) => {
  const { loggedInUserId, SubscribeToUserId } = req.body;

  try {
    const user = await subscriptionService.unsubscribeUser(
      loggedInUserId,
      SubscribeToUserId
    );

    res.status(200).json({
      message: "User subscribed successfully",
      status: true,
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      message: "Internal Server Error",
      status: false,
    });
  }
};

export const subscriptionController = {
  subscribeUser,
  unSubscribeUser,
};
