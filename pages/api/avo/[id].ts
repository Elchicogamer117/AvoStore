import Database from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database()

  const ID = req.query.id
  const entry = await db.getById(ID as string)

  res.status(200).json( entry )
}

export default allAvos