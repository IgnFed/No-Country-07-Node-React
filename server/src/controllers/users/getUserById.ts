import { Request, Response } from "express";
import { IMessage } from "../../interfaces/IMessage";
import {
  AgencyRepository,
  TravelerRepository,
} from "../../models/repository/user";
import Print from "../../utils/Print";

const print = new Print();

export const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user =
      (await TravelerRepository.getById(userId)) ||
      (await AgencyRepository.getById(userId));
    res.status(200).json({
      code: 200,
      message: user ? "User founded" : "No user founded",
      data: user,
      status: "OK",
    } as IMessage);
  } catch (error) {
    print.red(
      `\rError:\n${print.repeat(
        "-",
        10
      )}\nMethod: getUserByid \nContext:</controllers/user>\n${print.repeat(
        "-",
        10
      )}`
    );
    res.status(500).json({
      message: `Error ocurred.`,
      code: 500,
      data: null,
      status: "ERROR",
    } as IMessage);
  }
};
